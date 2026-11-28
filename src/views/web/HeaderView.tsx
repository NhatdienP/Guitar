/* Auto-generated from the J.guitar prototype (Header.dc.html). */
/* eslint-disable @next/next/no-img-element */
import { Fragment } from 'react';
import Link from 'next/link';
import SearchSuggest from '@/components/SearchSuggest';

export default function HeaderView({ vm }: { vm: any }) {
  return (
<>
<header className={vm.expanded ? "jg-hdr searching" : "jg-hdr"} style={{ position: "sticky", top: "0", zIndex: "50", fontFamily: "'Be Vietnam Pro', sans-serif", color: "#1c1714", background: "rgba(251,248,242,0.92)", backdropFilter: "blur(16px)", borderBottom: "1px solid #e2d8c7", ...vm.hdrVars }}>
<div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", gap: "40px", height: "76px" }}>
<Link href="/" style={{ display: "flex", alignItems: "center", flex: "none" }} aria-label="J.guitar – Trang chủ"><img src={vm.logo} alt="J.guitar – Chuyên guitar nội địa Nhật" style={{ height: "40px", width: "auto", display: "block" }} /></Link>
<nav style={{ display: "flex", gap: "28px", alignSelf: "stretch" }} aria-label="Điều hướng chính">
<Link className={vm.c0} href="/">Trang chủ</Link>
<Link className={vm.c1} href="/san-pham">Sản phẩm</Link>
<Link className={vm.c2} href="/gioi-thieu">Giới thiệu</Link>
<Link className={vm.c3} href="/lien-he">Liên hệ</Link>
</nav>
<form className="jg-sr" onSubmit={vm.submit} role="search" style={{ position: "relative", marginLeft: "auto", display: "flex", alignItems: "center", gap: "10px", width: "280px", height: "42px", boxSizing: "border-box", padding: "0 16px", background: "#f4eee3", border: "1px solid #e2d8c7", borderRadius: "12px" }}>
<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6b6157" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></svg>
<label htmlFor="jg-q" style={{ position: "absolute", width: "1px", height: "1px", overflow: "hidden", clip: "rect(0 0 0 0)" }}>Tìm model, thương hiệu</label>
<input id="jg-q" type="search" value={vm.q} onChange={vm.typeQ} onKeyDown={vm.key} onFocus={vm.focus} onBlur={vm.blur} autoComplete="off" aria-autocomplete="list" aria-expanded={!!vm.suggest?.show} placeholder="Tìm model, thương hiệu…" style={{ flex: "1", minWidth: "0", border: "0", outline: "none", background: "transparent", font: "inherit", fontSize: "14px", color: "#1c1714" }} />
{(vm.notLive) && (<>
<Link href={vm.searchHref} aria-label="Tìm trong trang Sản phẩm" style={{ flex: "none", fontFamily: "'Barlow Condensed', sans-serif", fontSize: "13px", fontWeight: "600", letterSpacing: "0.08em", color: "#6b6157", textDecoration: "none", padding: "3px 7px", border: "1px solid #e2d8c7", borderRadius: "6px" }}>TÌM</Link>
</>)}
<SearchSuggest s={vm.suggest} variant="web" />
</form>
<a className="jg-hl" href="tel:0834777123" aria-label="Gọi hotline 0834 777 123" style={{ display: "flex", alignItems: "center", gap: "12px", flex: "none", paddingLeft: "24px", borderLeft: "1px solid #e2d8c7", height: "40px", color: "#1c1714", textDecoration: "none" }}>
<span className="jg-hl-i" style={{ width: "38px", height: "38px", borderRadius: "999px", background: "#fbe9dd", display: "flex", alignItems: "center", justifyContent: "center" }} aria-hidden="true"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#b0471a" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" /></svg></span>
<span className="jg-hl-t" style={{ display: "flex", flexDirection: "column", lineHeight: "1.15" }}>
<span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "13px", fontWeight: "600", letterSpacing: "0.1em", color: "#74695d" }}>HOTLINE · 9:00–21:00</span>
<span className="jg-hn" style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: "18px", fontWeight: "700", letterSpacing: "-0.01em", fontVariantNumeric: "tabular-nums", transition: "color .2s" }}>0834 777 123</span>
</span>
</a>
<a className="jg-zl" aria-label="Chat Zalo" href="https://zalo.me/0834777123" target="_blank" rel="noopener" style={{ flex: "none", display: "flex", alignItems: "center", gap: "8px", height: "42px", padding: "0 18px", boxSizing: "border-box", background: "#0068ff", borderRadius: "12px", color: "#fff", fontWeight: "700", fontSize: "14px", textDecoration: "none" }}>
<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 12a8.5 8.5 0 0 1-12.4 7.5L3 21l1.6-5A8.5 8.5 0 1 1 21 12z" /></svg>
<span className="jg-zl-t">Chat Zalo</span></a>
</div>
</header>
</>
  );
}
