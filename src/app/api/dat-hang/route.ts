import { NextResponse } from 'next/server';

/**
 * POST /api/dat-hang — order form → Google Sheet (tab "DonHang").
 * The Apps Script URL and secret stay on the server (env SHEET_API_URL, SHEET_SECRET).
 */
export const dynamic = 'force-dynamic';

const FAIL = 'Hệ thống đặt hàng đang gián đoạn.';
const str = (v: unknown, max: number) => (typeof v === 'string' ? v.trim().slice(0, max) : '');

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'Dữ liệu không hợp lệ.' }, { status: 400 });
  }

  // Honeypot: real visitors never see this field; pretend success so bots don't retry.
  if (str(body.website, 200)) return NextResponse.json({ ok: true });

  const order = {
    name: str(body.name, 120),
    phone: str(body.phone, 20).replace(/\s/g, ''),
    guitar: str(body.guitar, 200),
    productId: str(body.productId, 120),
    qty: str(body.qty, 10) || '1',
    ship: str(body.ship, 60),
    addr: str(body.addr, 300),
    note: str(body.note, 1000),
  };
  if (!order.name) return NextResponse.json({ ok: false, error: 'Vui lòng nhập họ và tên.' }, { status: 400 });
  if (!/^0\d{9}$/.test(order.phone))
    return NextResponse.json({ ok: false, error: 'Số điện thoại cần đủ 10 số, bắt đầu bằng 0.' }, { status: 400 });
  if (!order.guitar) return NextResponse.json({ ok: false, error: 'Vui lòng chọn cây đàn muốn đặt.' }, { status: 400 });
  if (!order.ship) return NextResponse.json({ ok: false, error: 'Vui lòng chọn hình thức nhận.' }, { status: 400 });

  const url = process.env.SHEET_API_URL;
  const secret = process.env.SHEET_SECRET;
  if (!url || !secret) {
    console.error('[dat-hang] Thiếu SHEET_API_URL hoặc SHEET_SECRET');
    return NextResponse.json({ ok: false, error: FAIL }, { status: 503 });
  }

  try {
    const res = await fetch(url, {
      method: 'POST',
      // text/plain avoids a CORS preflight on Apps Script; the script parses the JSON itself.
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify({ secret, order }),
      cache: 'no-store',
      signal: AbortSignal.timeout(15000),
    });
    const data = (await res.json().catch(() => null)) as { ok?: boolean; error?: string } | null;
    if (!res.ok || !data?.ok) throw new Error(`Sheet API: HTTP ${res.status} ${data?.error || ''}`);
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[dat-hang]', err);
    return NextResponse.json({ ok: false, error: FAIL }, { status: 502 });
  }
}
