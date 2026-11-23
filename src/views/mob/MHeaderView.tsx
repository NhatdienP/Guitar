/* Auto-generated from the J.guitar prototype (MHeader.dc.html). */
/* eslint-disable @next/next/no-img-element */
import { Fragment } from 'react';
import Link from 'next/link';

export default function MHeaderView({ vm }: { vm: any }) {
  return (
<>
<header style={{ padding: "12px 16px", fontFamily: "'Be Vietnam Pro', sans-serif", color: "#1c1714" }}>
<div style={{ display: "flex", alignItems: "center", gap: "6px", padding: "8px 8px 8px 14px", background: "rgba(251,248,242,0.9)", backdropFilter: "blur(14px)", border: "1px solid #e2d8c7", borderRadius: "999px", boxShadow: "0 8px 24px rgba(28,23,20,0.06)" }}>
<Link href="/" style={{ flex: "none", display: "flex" }} aria-label="J.guitar – Trang chủ"><img src="/images/909bedfa70b24da56b5d544e96543808.png" alt="J.guitar" style={{ height: "34px", width: "auto", display: "block" }} /></Link>
<form onSubmit={vm.submit} role="search" style={{ flex: "1", minWidth: "0", display: "flex", alignItems: "center", height: "40px", boxSizing: "border-box", padding: "3px 3px 3px 12px", background: "#fff", border: "1px solid #e2d8c7", borderRadius: "999px" }}>
<input type="search" aria-label="Tìm model, thương hiệu" value={vm.q} onChange={vm.typeQ} placeholder="Tìm model, hãng…" style={{ flex: "1", minWidth: "0", border: "0", outline: "none", background: "transparent", font: "inherit", fontSize: "16px", color: "#1c1714" }} />
{(vm.live) && (<>
<button type="submit" style={{ flex: "none", height: "32px", padding: "0 12px", border: "0", borderRadius: "999px", background: "#b0471a", color: "#fff", font: "inherit", fontSize: "13px", fontWeight: "600" }}>Tìm</button>
</>)}
{(vm.notLive) && (<>
<Link href={vm.searchHref} style={{ flex: "none", display: "flex", alignItems: "center", height: "32px", padding: "0 12px", borderRadius: "999px", background: "#b0471a", color: "#fff", fontSize: "13px", fontWeight: "600", textDecoration: "none" }}>Tìm</Link>
</>)}
</form>
<a href="tel:0834777123" aria-label="Gọi hotline 0834 777 123" style={{ flex: "none", width: "40px", height: "40px", boxSizing: "border-box", borderRadius: "999px", background: "#fff", border: "1px solid #e2d8c7", display: "flex", alignItems: "center", justifyContent: "center" }}>
<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#b0471a" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" /></svg></a>
<a href="https://zalo.me/0834777123" target="_blank" rel="noopener" style={{ flex: "none", height: "40px", padding: "0 14px", boxSizing: "border-box", borderRadius: "999px", background: "#0068ff", color: "#fff", fontWeight: "700", fontSize: "14px", display: "flex", alignItems: "center", textDecoration: "none" }}>Zalo</a>
</div>
</header>
</>
  );
}
