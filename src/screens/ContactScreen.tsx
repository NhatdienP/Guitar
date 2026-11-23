import LienHeView from '@/views/web/LienHeView';
import MLienHeView from '@/views/mob/MLienHeView';
import { TEL, ZALO } from '@/lib/data';

const MAP = 'https://maps.google.com/?q=123+%C4%90%C6%B0%E1%BB%9Dng+ABC+Qu%E1%BA%ADn+1';

const cards = (daysLabel: string) => [
  { k: 'SHOWROOM', v: '123 Đường ABC', sub: 'Quận 1, TP. Hồ Chí Minh', subColor: '#b0471a', href: MAP, target: '_blank' },
  { k: 'HOTLINE', v: '0834 777 123', sub: 'Gọi ngay', subColor: '#b0471a', href: TEL, target: '_self' },
  { k: 'ZALO', v: 'Chat tư vấn', sub: 'Phản hồi trong 15 phút', subColor: '#0068ff', href: ZALO, target: '_blank' },
  { k: 'GIỜ MỞ CỬA', v: '9:00 – 21:00', sub: daysLabel, subColor: '#6b6157', href: '#', target: '_self' },
];

export default function ContactScreen() {
  return (
    <>
      <div className="v-web">
        <LienHeView vm={{ cards: cards('Tất cả các ngày trong tuần') }} />
      </div>
      <div className="v-mob">
        <MLienHeView vm={{ cards: cards('Tất cả các ngày') }} />
      </div>
    </>
  );
}
