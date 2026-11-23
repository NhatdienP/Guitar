'use client';

import { useRef, useState, type ChangeEvent, type FormEvent } from 'react';
import ChiTietView from '@/views/web/ChiTietView';
import MChiTietView from '@/views/mob/MChiTietView';
import type { Product } from '@/lib/data';

type Form = { name: string; phone: string; guitar: string; qty: string; ship: string; addr: string; note: string };
type Field = keyof Form;

const label = (x: Product) => `${x.type} · ${x.title} – ${x.priceText}`;
const TRUST = [
  { t: 'Giao toàn quốc', d: 'Kiểm tra trước khi nhận' },
  { t: 'Trả tiền khi nhận', d: 'COD hoặc tại showroom' },
  { t: 'Setup miễn phí', d: 'Chỉnh action, thay dây' },
  { t: 'Bảo hành 12 tháng', d: '1 đổi 1 trong 7 ngày' },
];

/** Product page + order form ("Đặt hàng", COD — no online payment). */
function useDetail(p: Product, products: Product[]) {
  const blank: Form = { name: '', phone: '', guitar: label(p), qty: '1', ship: '', addr: '', note: '' };
  const [f, setF] = useState<Form>(blank);
  const [err, setErr] = useState('');
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const hp = useRef<HTMLInputElement>(null); // honeypot: bots fill it, people never see it

  const set = (k: Field) => (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setF((prev) => ({ ...prev, [k]: e.target.value }));
    setErr('');
  };

  return {
    yes: true,
    p,
    typeUp: p.type.toUpperCase(),
    hasPoints: p.points.length > 0,
    hasSpecs: p.specs.length > 0,
    noSpecs: p.specs.length === 0,
    yt: 'https://www.youtube.com/results?search_query=' + encodeURIComponent(p.title + ' guitar sound test'),
    trust: TRUST,
    options: products
      .slice()
      .sort((a, b) => a.price - b.price)
      .map((x) => ({ v: label(x), l: label(x) })),
    f,
    on: {
      name: set('name'),
      phone: set('phone'),
      guitar: set('guitar'),
      qty: set('qty'),
      ship: set('ship'),
      addr: set('addr'),
      note: set('note'),
    },
    hasErr: !!err,
    err,
    sent,
    notSent: !sent,
    nameOk: f.name || 'bạn',
    sending,
    submitLabel: sending ? 'Đang gửi đơn…' : 'Gửi đơn đặt hàng',
    submit: async (e: FormEvent) => {
      e.preventDefault();
      if (sending) return;
      const phoneOk = /^0\d{9}$/.test(f.phone.replace(/\s/g, ''));
      if (!f.name.trim() || !phoneOk || !f.guitar || !f.ship) {
        setErr(
          !f.name.trim()
            ? 'Vui lòng nhập họ và tên.'
            : !phoneOk
              ? 'Số điện thoại cần đủ 10 số, bắt đầu bằng 0.'
              : !f.guitar
                ? 'Vui lòng chọn cây đàn muốn đặt.'
                : 'Vui lòng chọn hình thức nhận.',
        );
        return;
      }
      setSending(true);
      setErr('');
      try {
        const picked = products.find((x) => label(x) === f.guitar);
        const res = await fetch('/api/dat-hang', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ ...f, productId: picked?.id || '', website: hp.current?.value || '' }),
        });
        const data = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string };
        if (!res.ok || !data.ok) throw new Error(data.error || 'Gửi đơn chưa được.');
        setSent(true);
      } catch (error) {
        setErr(
          (error instanceof Error && error.message !== 'Failed to fetch' ? error.message : 'Mất kết nối.') +
            ' Vui lòng thử lại hoặc gọi 0834 777 123 / nhắn Zalo để đặt nhanh.',
        );
      } finally {
        setSending(false);
      }
    },
    again: () => {
      setSent(false);
      setF(blank);
    },
    hp,
    related: products.filter((x) => x.type === p.type && x.id !== p.id).slice(0, 4),
  };
}

export default function DetailScreen({ product, products }: { product: Product; products: Product[] }) {
  const web = useDetail(product, products);
  const mob = useDetail(product, products);
  return (
    <>
      <div className="v-web">
        <ChiTietView vm={web} />
      </div>
      <div className="v-mob">
        <MChiTietView vm={mob} />
      </div>
    </>
  );
}
