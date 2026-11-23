'use client';

import { useEffect, useState, type ChangeEvent } from 'react';
import { useSearchParams } from 'next/navigation';
import SanPhamView from '@/views/web/SanPhamView';
import MSanPhamView from '@/views/mob/MSanPhamView';
import type { Product } from '@/lib/data';

const M = 1_000_000;
const RANGES = [
  { k: 'p1', label: 'Dưới 3 triệu', lo: 0, hi: 3 * M },
  { k: 'p2', label: '3 – 5 triệu', lo: 3 * M, hi: 5 * M },
  { k: 'p3', label: '5 – 8 triệu', lo: 5 * M, hi: 8 * M },
  { k: 'p4', label: '8 – 12 triệu', lo: 8 * M, hi: 12 * M },
  { k: 'p5', label: 'Trên 12 triệu', lo: 12 * M, hi: Infinity },
];
const TYPES = ['Acoustic', 'Classic', 'Phụ kiện'];
const SORTS: [string, string, string][] = [
  ['new', 'Mới về', 'Mới về'],
  ['asc', 'Giá thấp → cao', 'Giá ↑'],
  ['desc', 'Giá cao → thấp', 'Giá ↓'],
];

type ListKey = 'types' | 'brands' | 'prices';
type State = {
  types: string[];
  brands: string[];
  prices: string[];
  min: string;
  max: string;
  sort: string;
  q: string;
};

const EMPTY: Omit<State, 'sort'> = { types: [], brands: [], prices: [], min: '', max: '', q: '' };

export default function ProductsScreen({ products, brands: BRANDS }: { products: Product[]; brands: string[] }) {
  const params = useSearchParams();
  const [st, setSt] = useState<State>({ ...EMPTY, sort: 'new' });
  const [sortOpen, setSortOpen] = useState(false);
  const [more, setMore] = useState(false);
  const [sheet, setSheet] = useState(false);

  // Category cards and the header search link here with ?loai=… / ?q=…
  const loai = params.get('loai') || '';
  const qParam = params.get('q') || '';
  useEffect(() => {
    setSt((s) => ({ ...s, ...EMPTY, types: loai ? [loai] : [], q: qParam }));
    setSortOpen(false);
  }, [loai, qParam]);

  // Lock page scroll while the mobile filter sheet is open.
  useEffect(() => {
    document.body.style.overflow = sheet ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [sheet]);

  const has = (a: string[], v: string) => a.includes(v);
  const flip = (key: ListKey, v: string) => () =>
    setSt((s) => ({ ...s, [key]: has(s[key], v) ? s[key].filter((x) => x !== v) : [...s[key], v] }));

  const min = parseFloat(st.min);
  const max = parseFloat(st.max);
  const q = st.q.trim().toLowerCase();
  const pass = (p: Product, skip?: ListKey) => {
    if (skip !== 'types' && st.types.length && !has(st.types, p.type)) return false;
    if (skip !== 'brands' && st.brands.length && !has(st.brands, p.brand)) return false;
    if (skip !== 'prices') {
      if (st.prices.length && !RANGES.some((r) => has(st.prices, r.k) && p.price >= r.lo && p.price < r.hi)) return false;
      if (!isNaN(min) && p.price < min * M) return false;
      if (!isNaN(max) && p.price > max * M) return false;
    }
    if (q && !`${p.title} ${p.brand} ${p.type}`.toLowerCase().includes(q)) return false;
    return true;
  };

  const list = products.filter((p) => pass(p));
  if (st.sort === 'asc') list.sort((a, b) => a.price - b.price);
  else if (st.sort === 'desc') list.sort((a, b) => b.price - a.price);
  else list.sort((a, b) => a.rank - b.rank);

  const cnt = (skip: ListKey, fn: (p: Product) => boolean) => products.filter((p) => pass(p, skip) && fn(p)).length;

  const types = TYPES.map((t) => ({ label: t, on: has(st.types, t), toggle: flip('types', t), n: cnt('types', (p) => p.type === t) }));
  const brandOpts = BRANDS.map((b) => ({ label: b, on: has(st.brands, b), toggle: flip('brands', b), n: cnt('brands', (p) => p.brand === b) }));
  const prices = RANGES.map((r) => ({
    label: r.label,
    on: has(st.prices, r.k),
    toggle: flip('prices', r.k),
    n: cnt('prices', (p) => p.price >= r.lo && p.price < r.hi),
  }));

  const chipsFor = (unit: string) => {
    const chips = [
      ...st.types.map((t) => ({ label: t, aria: 'Bỏ lọc ' + t, remove: flip('types', t) })),
      ...st.brands.map((b) => ({ label: b, aria: 'Bỏ lọc ' + b, remove: flip('brands', b) })),
      ...RANGES.filter((r) => has(st.prices, r.k)).map((r) => ({ label: r.label, aria: 'Bỏ lọc ' + r.label, remove: flip('prices', r.k) })),
    ];
    if (st.min || st.max)
      chips.push({
        label: `${st.min || '0'} – ${st.max || '∞'} ${unit}`,
        aria: 'Bỏ khoảng giá tự nhập',
        remove: () => setSt((s) => ({ ...s, min: '', max: '' })),
      });
    return chips;
  };

  const pk = has(st.types, 'Phụ kiện');
  const cur = SORTS.find((s) => s[0] === st.sort) || SORTS[0];
  const shared = {
    yes: true,
    q: st.q,
    setQ: (v: string) => setSt((s) => ({ ...s, q: v })),
    types,
    prices,
    minV: st.min,
    maxV: st.max,
    setMin: (e: ChangeEvent<HTMLInputElement>) => setSt((s) => ({ ...s, min: e.target.value })),
    setMax: (e: ChangeEvent<HTMLInputElement>) => setSt((s) => ({ ...s, max: e.target.value })),
    clearAll: () => setSt((s) => ({ ...s, ...EMPTY })),
    sortOpen,
    sortLabel: cur[1],
    sortShort: cur[2],
    toggleSort: () => setSortOpen((o) => !o),
    count: list.length,
    items: list,
    empty: list.length === 0,
    emptyTitle: pk ? 'Phụ kiện đang được cập nhật lên web.' : 'Không có cây đàn nào khớp bộ lọc.',
    emptyText: pk
      ? 'Capo, dây đàn, bao đàn… có sẵn tại showroom. Nhắn Zalo để hỏi mẫu và giá.'
      : 'Bỏ bớt điều kiện lọc, hoặc nhắn Zalo để shop tìm giúp bạn.',
  };
  const pickSort = (k: string) => () => {
    setSt((s) => ({ ...s, sort: k }));
    setSortOpen(false);
  };

  const webChips = chipsFor('triệu');
  const web = {
    ...shared,
    chips: webChips,
    hasFilter: webChips.length > 0,
    brandsShown: more ? brandOpts : brandOpts.slice(0, 6),
    moreLabel: more ? 'Thu gọn' : `Xem thêm ${Math.max(0, brandOpts.length - 6)} hãng`,
    toggleMore: () => setMore((m) => !m),
    canMore: brandOpts.length > 6,
    caret: sortOpen ? 'rotate(180deg)' : 'none',
    sorts: SORTS.map(([k, label]) => ({
      label,
      on: st.sort === k,
      fg: st.sort === k ? '#b0471a' : '#1c1714',
      fw: st.sort === k ? '700' : '500',
      pick: pickSort(k),
    })),
  };

  const mobChips = chipsFor('tr');
  const on = mobChips.length > 0;
  const mob = {
    ...shared,
    chips: mobChips,
    hasFilter: on,
    nActive: mobChips.length,
    brands: brandOpts,
    fBg: on ? '#b0471a' : '#fbf8f2',
    fBd: on ? '#b0471a' : '#e2d8c7',
    fFg: on ? '#fff' : '#1c1714',
    sheet,
    openSheet: () => {
      setSheet(true);
      setSortOpen(false);
    },
    closeSheet: () => setSheet(false),
    sorts: SORTS.map(([k, label]) => ({
      label,
      on: st.sort === k,
      tick: st.sort === k ? '✓' : '',
      bg: st.sort === k ? '#fbe9dd' : 'transparent',
      fg: st.sort === k ? '#8a3612' : '#1c1714',
      fw: st.sort === k ? '700' : '500',
      pick: pickSort(k),
    })),
  };

  return (
    <>
      <div className="v-web">
        <SanPhamView vm={web} />
      </div>
      <div className="v-mob">
        <MSanPhamView vm={mob} />
      </div>
    </>
  );
}
