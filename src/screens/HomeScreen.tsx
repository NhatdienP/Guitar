'use client';

import { useState } from 'react';
import MainView from '@/views/web/MainView';
import MHomeView from '@/views/mob/MHomeView';
import { faq as FAQ, img, type Product } from '@/lib/data';

const STRIP = ['Acoustic', 'Classic', 'Video test âm thanh', 'Setup miễn phí', 'Bảo hành 12 tháng'];
const SVC = [
  { n: '01', t: 'Setup chuẩn từng cây', d: 'Chỉnh action, căn cần, thay dây mới trước khi giao.' },
  { n: '02', t: 'Nhận đàn rồi mới trả tiền', d: 'Kiểm tra, đàn thử thoải mái. Không ưng có thể từ chối.' },
  { n: '03', t: 'Bảo hành 12 tháng', d: '1 đổi 1 trong 7 ngày nếu có lỗi kỹ thuật.' },
  { n: '04', t: 'Hậu mãi trọn đời', d: 'Setup, vệ sinh, thay dây miễn phí mỗi lần ghé.' },
];
const CATS = [
  { t: 'Acoustic', d: 'Đệm hát · Fingerstyle', img: img.catAc, href: '/san-pham?loai=Acoustic' },
  { t: 'Classic', d: 'Dây nylon · Người mới', img: img.catCl, href: '/san-pham?loai=Classic' },
  { t: 'Phụ kiện', d: 'Capo · Dây đàn · Bao đàn', img: img.setup, href: '/san-pham?loai=Ph%E1%BB%A5+ki%E1%BB%87n' },
];

/** "Đàn mới về" slider (3 pages × 4) + FAQ accordion — shared state shape for both layouts. */
function useHome(products: Product[], activeDot: string) {
  const [page, setPage] = useState(0);
  const [open, setOpen] = useState(0);
  // Picked in the Sheet's "Mới về" column (1, 2, 3…); if none is picked, the first 12 rows.
  const picked = products.filter((p) => p.featured != null).sort((a, b) => (a.featured as number) - (b.featured as number) || a.rank - b.rank);
  const fresh = picked.length ? picked : products.slice(0, 12);
  const nPages = Math.max(1, Math.ceil(fresh.length / 4));
  const idx = [...Array(nPages).keys()];
  const go = (n: number) => setPage(Math.max(0, Math.min(nPages - 1, n)));
  return {
    yes: true,
    strip: STRIP.concat(STRIP),
    svc: SVC,
    cats: CATS,
    pages: idx.map((i) => ({ items: fresh.slice(i * 4, i * 4 + 4) })),
    shift: `translateX(-${page * 100}%)`,
    prev: () => go(page - 1),
    next: () => go(page + 1),
    atStart: page === 0,
    atEnd: page >= nPages - 1,
    dots: idx.map((i) => ({
      go: () => go(i),
      label: 'Trang ' + (i + 1),
      w: i === page ? activeDot : '8px',
      bg: i === page ? '#b0471a' : '#d4c8b4',
    })),
    faq: FAQ.map(([q, a], i) => ({
      q,
      a,
      open: open === i,
      rot: open === i ? 'rotate(45deg)' : 'none',
      toggle: () => setOpen(open === i ? -1 : i),
    })),
  };
}

export default function HomeScreen({ products }: { products: Product[] }) {
  const web = useHome(products, '28px');
  const mob = useHome(products, '24px');
  return (
    <>
      <div className="v-web">
        <MainView vm={web} />
      </div>
      <div className="v-mob">
        <MHomeView vm={mob} />
      </div>
    </>
  );
}
