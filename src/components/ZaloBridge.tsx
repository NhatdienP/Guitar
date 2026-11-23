'use client';

import { useCallback, useEffect, useState } from 'react';
import { ZALO_QR } from '@/lib/zaloQr';

/**
 * "Chat Zalo" on desktop.
 *
 * zalo.me/<phone> links to a personal Zalo account, and on a computer Zalo asks the visitor to
 * log in to Zalo Web first. So on desktop we intercept every zalo.me/<phone> link:
 *  1. try to open the Zalo PC app straight in the conversation (zalo://conversation?phone=…,
 *     the browser asks "Open Zalo?" the first time);
 *  2. show a small dialog with the same "open app" button, a QR code to continue on the phone,
 *     and Zalo Web as a last resort.
 * On phones the original link is kept: it opens the Zalo app directly.
 */
const isMobile = () =>
  /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent) ||
  (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);

const appLink = (phone: string) => `zalo://conversation?phone=${phone}`;
const webLink = (phone: string) => `https://chat.zalo.me/?phone=${phone}`;
const pretty = (phone: string) => phone.replace(/^(\d{4})(\d{3})(\d{3})$/, '$1 $2 $3');

export default function ZaloBridge() {
  const [phone, setPhone] = useState<string | null>(null);
  const close = useCallback(() => setPhone(null), []);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = (e.target as Element | null)?.closest?.('a[href]') as HTMLAnchorElement | null;
      const m = a?.href.match(/^https?:\/\/zalo\.me\/(0\d{9})\/?$/);
      if (!m || isMobile()) return;
      e.preventDefault();
      setPhone(m[1]);
      window.location.href = appLink(m[1]);
    };
    document.addEventListener('click', onClick, true);
    return () => document.removeEventListener('click', onClick, true);
  }, []);

  // Close when the Zalo app takes focus, or on Escape.
  useEffect(() => {
    if (!phone) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && close();
    let armed = false;
    const t = window.setTimeout(() => (armed = true), 400);
    const onBlur = () => armed && close();
    document.addEventListener('keydown', onKey);
    window.addEventListener('blur', onBlur);
    return () => {
      window.clearTimeout(t);
      document.removeEventListener('keydown', onKey);
      window.removeEventListener('blur', onBlur);
    };
  }, [phone, close]);

  if (!phone) return null;

  return (
    <div className="jg-zl-wrap" onClick={close}>
      <div className="jg-zl-card" role="dialog" aria-modal="true" aria-labelledby="jg-zl-title" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="jg-zl-x" aria-label="Đóng" onClick={close}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
        <strong id="jg-zl-title" className="jg-zl-title">Chat Zalo với J.guitar</strong>
        <p className="jg-zl-text">Đang mở app Zalo trên máy tính. Nếu trình duyệt hỏi, hãy chọn <b>Mở Zalo</b>.</p>
        <a className="jg-zl-main" href={appLink(phone)}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M21 12a8.5 8.5 0 0 1-12.4 7.5L3 21l1.6-5A8.5 8.5 0 1 1 21 12z" />
          </svg>
          Mở app Zalo
        </a>
        <div className="jg-zl-or"><span>hoặc quét bằng điện thoại</span></div>
        <div className="jg-zl-qr">
          <svg viewBox={ZALO_QR.viewBox} width="168" height="168" role="img" aria-label={`Mã QR Zalo ${pretty(phone)}`} shapeRendering="crispEdges">
            <path d={ZALO_QR.d} stroke="#1c1714" fill="none" />
          </svg>
        </div>
        <span className="jg-zl-phone">Zalo · {pretty(phone)}</span>
        <a className="jg-zl-web" href={webLink(phone)} target="_blank" rel="noopener">
          Chưa cài app? Dùng Zalo Web
        </a>
      </div>
    </div>
  );
}
