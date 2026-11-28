/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import type { SuggestItem } from '@/lib/useSearchBox';

type Suggest = {
  show: boolean;
  loading: boolean;
  q: string;
  matches: SuggestItem[];
  total: number;
  active: number;
  allHref: string;
  hover: (i: number) => void;
  pick: () => void;
};

/** Dropdown under the header search box: up to 5 matching guitars + "see all results". */
export default function SearchSuggest({ s, variant }: { s?: Suggest; variant: 'web' | 'mob' }) {
  if (!s?.show) return null;
  const none = !s.loading && s.matches.length === 0;
  // Keep focus in the input while clicking, so the list doesn't close before the click lands.
  const keepFocus = (e: React.MouseEvent) => e.preventDefault();

  return (
    <div className={`jg-sug jg-sug-${variant}`} role="listbox" aria-label="Gợi ý tìm kiếm" onMouseDown={keepFocus}>
      {s.loading && <div className="jg-sug-msg">Đang tìm…</div>}
      {none && (
        <div className="jg-sug-msg">
          Không có cây đàn nào khớp “{s.q}”.
          <br />
          <span style={{ color: '#74695d' }}>Nhắn Zalo để shop tìm giúp bạn.</span>
        </div>
      )}
      {s.matches.map((p, i) => (
        <Link
          key={p.id}
          href={`/san-pham/${p.id}`}
          role="option"
          aria-selected={s.active === i}
          className={'jg-sug-item' + (s.active === i ? ' on' : '')}
          onMouseEnter={() => s.hover(i)}
          onClick={s.pick}
        >
          <img src={p.img} alt="" />
          <span className="jg-sug-text">
            <span className="jg-sug-title">{p.title}</span>
            <span className="jg-sug-meta">
              {p.type} · {p.brand}
            </span>
          </span>
          <span className="jg-sug-price">{p.priceText}</span>
        </Link>
      ))}
      {!s.loading && (
        <Link
          href={s.allHref}
          role="option"
          aria-selected={s.active === s.matches.length}
          className={'jg-sug-all' + (s.active === s.matches.length ? ' on' : '')}
          onMouseEnter={() => s.hover(s.matches.length)}
          onClick={s.pick}
        >
          {none ? 'Xem tất cả đàn' : `Xem tất cả ${s.total} kết quả cho “${s.q}”`} →
        </Link>
      )}
    </div>
  );
}
