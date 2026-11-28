import LienHeView from '@/views/web/LienHeView';
import MLienHeView from '@/views/mob/MLienHeView';
import { TEL, ZALO } from '@/lib/data';

const MAP = 'https://maps.app.goo.gl/7j8eoVuhq3MCX4qh8';

const cards = (daysLabel: string) => [
  { k: 'ĐỊA CHỈ', v: '720/98/10E Lạc Long Quân', sub: 'Phường Tân Hòa, TP. Hồ Chí Minh', subColor: '#b0471a', href: MAP, target: '_blank' },
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
