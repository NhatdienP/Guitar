/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import type { Product } from '@/lib/data';

type Props = { item: Product; compact?: boolean; onPick?: unknown };

/** Product card: 3:4 photo, type tag, arrow badge, title, short description, price. */
export default function Card({ item, compact = false }: Props) {
  const c = compact;
  return (
    <Link
      className="jg-card"
      href={`/san-pham/${item.id}`}
      style={{ display: 'flex', flexDirection: 'column', gap: 12, textDecoration: 'none', color: '#1c1714', fontFamily: "'Be Vietnam Pro', sans-serif", minWidth: 0 }}
    >
      <div style={{ position: 'relative', aspectRatio: '3 / 4', borderRadius: 20, overflow: 'hidden', background: '#e9dfcf' }}>
        <img src={item.img} alt={item.title} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
        <span
          style={{
            position: 'absolute', top: 14, left: 14, padding: '6px 12px', borderRadius: 999, background: 'rgba(251,248,242,0.92)',
            fontFamily: "'Barlow Condensed', sans-serif", fontSize: c ? 11 : 12, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase',
          }}
        >
          {item.type}
        </span>
        <span
          className="jg-arr"
          aria-hidden="true"
          style={{
            position: 'absolute', right: 14, bottom: 14, width: c ? 32 : 38, height: c ? 32 : 38, borderRadius: 999, background: '#fff',
            display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background .2s', boxShadow: '0 4px 12px rgba(28,23,20,0.12)',
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 17 17 7M8 7h9v9" />
          </svg>
        </span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 4, padding: '0 4px' }}>
        <div style={{ fontFamily: "'Bricolage Grotesque', 'Be Vietnam Pro', sans-serif", fontSize: c ? 14 : 16, fontWeight: 600, letterSpacing: '-0.01em', lineHeight: 1.25 }}>
          {item.title}
        </div>
        <div style={{ fontSize: c ? 12 : 13, color: '#6b6157', lineHeight: 1.45 }}>{item.short}</div>
        <div style={{ fontSize: c ? 14 : 15, fontWeight: 800, marginTop: 2, fontVariantNumeric: 'tabular-nums' }}>{item.priceText}</div>
      </div>
    </Link>
  );
}
