'use client';
/* eslint-disable @next/next/no-img-element */

import { useCallback, useEffect, useRef, useState } from 'react';

type Props = {
  images: string[];
  title: string;
  /** "web": thumbnails under the photo; "mob": dots, swipe only. */
  variant: 'web' | 'mob';
  radius: number;
};

/**
 * Product photo gallery: swipeable (scroll-snap) main frame, arrows, thumbnails or dots,
 * and a full-screen viewer. Broken links are dropped so a missing share permission
 * on one Drive photo doesn't leave a hole.
 */
export default function Gallery({ images, title, variant, radius }: Props) {
  const [broken, setBroken] = useState<string[]>([]);
  const list = images.filter((s) => !broken.includes(s));
  const imgs = list.length ? list : ['/images/placeholder.svg'];
  const n = imgs.length;

  const [idx, setIdx] = useState(0);
  const [zoom, setZoom] = useState(false);
  const track = useRef<HTMLDivElement>(null);
  const cur = Math.min(idx, n - 1);

  const go = useCallback(
    (i: number) => {
      const next = (i + n) % n;
      setIdx(next);
      const el = track.current;
      if (el) el.scrollTo({ left: next * el.clientWidth, behavior: 'smooth' });
    },
    [n],
  );

  // Keep the index in sync with finger swipes.
  const onScroll = () => {
    const el = track.current;
    if (!el || !el.clientWidth) return;
    const i = Math.round(el.scrollLeft / el.clientWidth);
    if (i !== cur) setIdx(i);
  };

  // Full-screen viewer: keyboard + scroll lock.
  useEffect(() => {
    if (!zoom) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setZoom(false);
      if (e.key === 'ArrowRight') go(cur + 1);
      if (e.key === 'ArrowLeft') go(cur - 1);
    };
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [zoom, cur, go]);

  const drop = (src: string) => setBroken((b) => (b.includes(src) ? b : [...b, src]));
  const arrow = (dir: -1 | 1, size: number, style: React.CSSProperties = {}) => (
    <button
      type="button"
      className="jg-gal-arrow"
      aria-label={dir < 0 ? 'Ảnh trước' : 'Ảnh tiếp theo'}
      onClick={(e) => {
        e.stopPropagation();
        go(cur + dir);
      }}
      style={{ width: size, height: size, ...style }}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d={dir < 0 ? 'M15 18l-6-6 6-6' : 'M9 18l6-6-6-6'} />
      </svg>
    </button>
  );

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: variant === 'web' ? 12 : 10, minWidth: 0 }}>
      <div style={{ position: 'relative', aspectRatio: '1 / 1', borderRadius: radius, overflow: 'hidden', background: '#e9dfcf' }}>
        <div ref={track} className="jg-gal-track" onScroll={onScroll} aria-roledescription="carousel" aria-label={`Ảnh ${title}`}>
          {imgs.map((src, i) => (
            <button
              key={src}
              type="button"
              className="jg-gal-slide"
              onClick={() => {
                setIdx(i);
                setZoom(true);
              }}
              aria-label={`Xem ảnh ${i + 1}/${n} toàn màn hình`}
            >
              <img src={src} alt={n > 1 ? `${title} – ảnh ${i + 1}` : title} loading={i === 0 ? 'eager' : 'lazy'} onError={() => drop(src)} />
            </button>
          ))}
        </div>
        {n > 1 && (
          <>
            {arrow(-1, variant === 'web' ? 42 : 36, { left: 12 })}
            {arrow(1, variant === 'web' ? 42 : 36, { right: 12 })}
            <span className="jg-gal-count">
              {cur + 1}/{n}
            </span>
          </>
        )}
      </div>

      {n > 1 && variant === 'web' && (
        <div className="jg-gal-thumbs" role="tablist" aria-label="Chọn ảnh">
          {imgs.map((src, i) => (
            <button
              key={src}
              type="button"
              role="tab"
              aria-selected={i === cur}
              aria-label={`Ảnh ${i + 1}`}
              className={'jg-gal-thumb' + (i === cur ? ' on' : '')}
              onClick={() => go(i)}
            >
              <img src={src} alt="" />
            </button>
          ))}
        </div>
      )}

      {n > 1 && variant === 'mob' && (
        <div style={{ display: 'flex', justifyContent: 'center', gap: 6 }} aria-hidden="true">
          {imgs.map((src, i) => (
            <span key={src} style={{ width: i === cur ? 20 : 6, height: 6, borderRadius: 999, background: i === cur ? '#b0471a' : '#d4c8b4', transition: 'width .2s' }} />
          ))}
        </div>
      )}

      {zoom && (
        <div className="jg-gal-zoom" role="dialog" aria-modal="true" aria-label={`Ảnh ${title}`} onClick={() => setZoom(false)}>
          <img src={imgs[cur]} alt={title} onClick={(e) => e.stopPropagation()} />
          <button type="button" className="jg-gal-close" aria-label="Đóng" onClick={() => setZoom(false)}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
          {n > 1 && (
            <>
              {arrow(-1, 48, { left: 16 })}
              {arrow(1, 48, { right: 16 })}
              <span className="jg-gal-count" style={{ bottom: 20, right: '50%', transform: 'translateX(50%)' }}>
                {cur + 1}/{n}
              </span>
            </>
          )}
        </div>
      )}
    </div>
  );
}
