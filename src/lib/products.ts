import 'server-only';
import { fmt, products as fallbackProducts, type Product } from '@/lib/data';

/**
 * Products come from the Google Sheet (tab "SanPham") via the Apps Script web app in
 * google-sheet/Code.gs. Pages are regenerated at most every REVALIDATE seconds (ISR).
 *
 * - SHEET_API_URL not set  → built-in demo data (src/lib/data.ts).
 * - Sheet unreachable at build time → built-in data, so the build never breaks.
 * - Sheet unreachable later → we throw, and Next.js keeps serving the last good pages.
 */
export const REVALIDATE = 60;

const SPEC_COLS = ['dang_dan', 'mat_dan', 'lung_hong', 'can_dan', 'pickup_eq', 'hoan_thien'];
const SPEC_LABELS = ['Dáng đàn', 'Mặt đàn', 'Lưng và hông', 'Cần đàn', 'Pickup / EQ', 'Hoàn thiện'];
const TYPES = ['Acoustic', 'Classic', 'Phụ kiện'] as const;
const PLACEHOLDER = '/images/placeholder.svg';

type Row = Record<string, unknown>;

const str = (v: unknown) => (v == null ? '' : String(v)).trim();

export function slugify(s: string) {
  return s
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'D')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/** "4.300.000", "4,300,000đ", 4300000 → 4300000 */
function parsePrice(v: unknown) {
  if (typeof v === 'number') return Math.round(v);
  const n = Number(str(v).replace(/[^\d]/g, ''));
  return Number.isFinite(n) ? n : NaN;
}

function parseType(v: unknown): Product['type'] {
  const s = str(v).toLowerCase();
  return TYPES.find((t) => t.toLowerCase() === s) || (s.includes('kiện') ? 'Phụ kiện' : s.startsWith('c') ? 'Classic' : 'Acoustic');
}

/** Accepts /images/..., full https URLs, and Google Drive share links. */
export function imageUrl(v: unknown) {
  const s = str(v);
  if (!s) return PLACEHOLDER;
  const drive = s.match(/drive\.google\.com\/(?:file\/d\/|open\?id=|uc\?(?:export=\w+&)?id=)([\w-]{20,})/);
  if (drive) return `https://lh3.googleusercontent.com/d/${drive[1]}=w1200`;
  if (s.startsWith('/') || /^https?:\/\//.test(s)) return s;
  return PLACEHOLDER;
}

const hidden = (v: unknown) => v === false || /^(false|0|no|không|an|ẩn)$/i.test(str(v));

export function rowsToProducts(rows: Row[]): Product[] {
  const seen = new Set<string>();
  const out: Product[] = [];
  for (const r of rows) {
    const title = str(r.ten);
    const price = parsePrice(r.gia);
    if (!title || !Number.isFinite(price) || hidden(r.hien_thi)) continue;
    let id = slugify(str(r.id) || title) || `dan-${out.length + 1}`;
    while (seen.has(id)) id += '-2';
    seen.add(id);
    out.push({
      id,
      title,
      brand: str(r.hang) || 'Khác',
      type: parseType(r.loai),
      price,
      priceText: fmt(price),
      short: str(r.mo_ta_ngan),
      desc: str(r.mo_ta),
      img: imageUrl(r.anh),
      specs: SPEC_COLS.map((c, i) => ({ k: SPEC_LABELS[i], v: str(r[c]) })).filter((s) => s.v),
      points: str(r.diem_noi_bat)
        .split('|')
        .map((s) => s.trim())
        .filter(Boolean),
      rank: out.length,
    });
  }
  return out;
}

export async function getProducts(): Promise<Product[]> {
  const url = process.env.SHEET_API_URL;
  if (!url) return fallbackProducts;
  try {
    const res = await fetch(url, { next: { revalidate: REVALIDATE, tags: ['products'] } });
    if (!res.ok) throw new Error(`Sheet API HTTP ${res.status}`);
    const data = (await res.json()) as { ok?: boolean; products?: Row[]; error?: string };
    if (!data.ok || !Array.isArray(data.products)) throw new Error(`Sheet API: ${data.error || 'bad response'}`);
    return rowsToProducts(data.products);
  } catch (err) {
    if (process.env.NEXT_PHASE === 'phase-production-build') {
      console.error('[products] Không đọc được Google Sheet lúc build, dùng dữ liệu có sẵn:', err);
      return fallbackProducts;
    }
    throw err;
  }
}

/** Brands for the filter, most common first. */
export function brandsOf(list: Product[]) {
  const n = new Map<string, number>();
  for (const p of list) n.set(p.brand, (n.get(p.brand) || 0) + 1);
  return [...n.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0], 'vi')).map(([b]) => b);
}
