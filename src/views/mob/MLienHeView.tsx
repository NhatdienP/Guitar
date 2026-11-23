/* Auto-generated from the J.guitar prototype (MLienHe.dc.html). */
/* eslint-disable @next/next/no-img-element */
import { Fragment } from 'react';
import Link from 'next/link';
import MFooter from '@/components/MFooter';
import MHeader from '@/components/MHeader';

export default function MLienHeView({ vm }: { vm: any }) {
  return (
<>
<div style={{ width: "100%", fontFamily: "'Be Vietnam Pro', sans-serif", color: "#1c1714", background: "#f4eee3", position: "relative", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
<div style={{ display: "block", position: "sticky", top: "0", zIndex: "60" }}><MHeader go={vm.go} /></div>
<section style={{ padding: "4px 16px 0" }}>
<div style={{ position: "relative", height: "420px", borderRadius: "24px", overflow: "hidden", display: "flex", alignItems: "flex-end", padding: "24px", boxSizing: "border-box", backgroundColor: "#2a1e18" }}>
<img src="/images/406e57d9ef3bfbbd035fb0b7f4aa9707.jpg" alt="Showroom J.guitar" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover" }} />
<span style={{ position: "absolute", inset: "0", background: "linear-gradient(rgba(28,23,20,0.15) 10%, rgba(28,23,20,0.92) 100%)" }}></span>
<div style={{ position: "relative", display: "flex", flexDirection: "column", gap: "14px", color: "#fff" }}>
<span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "13px", fontWeight: "600", letterSpacing: "0.14em", opacity: "0.85" }}>LIÊN HỆ</span>
<h1 style={{ margin: "0", fontSize: "26px", lineHeight: "1.1", fontWeight: "800", letterSpacing: "-0.035em" }}>Ghé showroom hoặc nhắn cho chúng tôi.</h1>
<p style={{ margin: "0", fontSize: "15px", lineHeight: "1.6", opacity: "0.88" }}>Đội ngũ tư vấn trả lời trong vòng 15 phút trong giờ mở cửa. Đặt lịch trước để có phòng thử đàn riêng.</p>
</div>
</div>
</section>
<section style={{ padding: "48px 20px 24px", display: "flex", flexDirection: "column", gap: "12px" }}>
<h2 style={{ margin: "0", fontSize: "22px", lineHeight: "1.2", fontWeight: "700", letterSpacing: "-0.04em" }}>Ghé thử đàn, miễn phí và không ép mua</h2>
<p style={{ margin: "0", fontSize: "16px", lineHeight: "1.7", color: "#6b6157" }}>Showroom có phòng thử cách âm, ampli và pedal sẵn sàng. Bạn có thể thử bao nhiêu cây tuỳ thích, kỹ thuật viên sẽ setup đàn theo tay bạn ngay tại chỗ.</p>
</section>
<section style={{ padding: "0 16px 24px", display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "10px" }}>
{(vm.cards || []).map((c: any, _i1: number) => (<Fragment key={_i1}>
<a href={c.href} target={c.target} rel="noopener" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "22px", padding: "18px", borderRadius: "20px", background: "#fbf8f2", border: "1px solid #e2d8c7", textDecoration: "none", color: "#1c1714" }}>
<span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "13px", fontWeight: "600", letterSpacing: "0.08em", color: "#74695d" }}>{c.k}</span>
<span style={{ display: "flex", flexDirection: "column", gap: "4px" }}><strong style={{ fontSize: "17px", letterSpacing: "-0.02em", lineHeight: "1.25" }}>{c.v}</strong><span style={{ fontSize: "12px", color: `${c.subColor}`, fontWeight: "600", lineHeight: "1.35" }}>{c.sub}</span></span>
</a>
</Fragment>))}
</section>
<section style={{ padding: "0 16px 48px" }}>
<div style={{ position: "relative", height: "300px", borderRadius: "24px", overflow: "hidden", display: "flex", alignItems: "flex-end", padding: "22px", boxSizing: "border-box", backgroundColor: "#2a1e18" }}>
<img src="/images/406e57d9ef3bfbbd035fb0b7f4aa9707.jpg" alt="" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover" }} />
<span style={{ position: "absolute", inset: "0", background: "linear-gradient(rgba(28,23,20,0.1), rgba(28,23,20,0.85))" }}></span>
<div style={{ position: "relative", display: "flex", flexDirection: "column", gap: "14px", color: "#fff", width: "100%" }}>
<strong style={{ fontSize: "21px", letterSpacing: "-0.03em", lineHeight: "1.25" }}>Ghé thử đàn, miễn phí và không ép mua.</strong>
<a href="https://maps.google.com/?q=123+%C4%90%C6%B0%E1%BB%9Dng+ABC+Qu%E1%BA%ADn+1" target="_blank" rel="noopener" style={{ padding: "14px", borderRadius: "999px", background: "#fff", color: "#1c1714", fontWeight: "600", fontSize: "15px", textAlign: "center", textDecoration: "none" }}>Chỉ đường Google Maps</a>
<Link href="/san-pham" style={{ padding: "13px", borderRadius: "999px", border: "1px solid rgba(255,255,255,0.5)", color: "#fff", fontWeight: "600", fontSize: "15px", textAlign: "center", textDecoration: "none" }}>Đặt lịch / đặt hàng</Link>
</div>
</div>
</section>
<div style={{ display: "block", flex: "1 0 auto", background: "#2a1e18" }}><MFooter go={vm.go} /></div>
<nav aria-label="Thanh điều hướng dưới" style={{ position: "sticky", bottom: "0", zIndex: "60", display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))", padding: "0 8px 8px", background: "rgba(251,248,242,0.97)", backdropFilter: "blur(14px)", borderTop: "1px solid #e2d8c7", boxShadow: "0 -8px 24px rgba(28,23,20,0.06)" }}>
<Link href="/" style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center", gap: "3px", padding: "9px 0 7px", color: "#6b6157", textDecoration: "none", fontSize: "11.5px", fontWeight: "600" }}><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 10.5 12 3l9 7.5V21h-6v-6H9v6H3z" /></svg>Trang chủ</Link>
<Link href="/san-pham" style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center", gap: "3px", padding: "9px 0 7px", color: "#6b6157", textDecoration: "none", fontSize: "11.5px", fontWeight: "600" }}><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M13.5 10.5 20 4" /><path d="M18.5 2.5l3 3" /><path d="M10.6 9.2a4 4 0 0 0-5.3.6 3.3 3.3 0 0 0-.2 4.4 3.3 3.3 0 0 0-1.6 1.1 3.6 3.6 0 0 0 5.1 5.1 3.3 3.3 0 0 0 1.1-1.6 3.3 3.3 0 0 0 4.4-.2 4 4 0 0 0 .6-5.3z" /><circle cx="9.6" cy="14.4" r="1.4" /></svg>Sản phẩm</Link>
<Link href="/gioi-thieu" style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center", gap: "3px", padding: "9px 0 7px", color: "#6b6157", textDecoration: "none", fontSize: "11.5px", fontWeight: "600" }}><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 9.5 4.6 4h14.8L21 9.5" /><path d="M4 9.5V20h16V9.5" /><path d="M3 9.5h18" /><path d="M9.5 20v-5.5h5V20" /></svg>Giới thiệu</Link>
<Link href="/lien-he" aria-current="page" style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center", gap: "3px", padding: "9px 0 7px", color: "#b0471a", textDecoration: "none", fontSize: "11.5px", fontWeight: "700" }}><span aria-hidden="true" style={{ position: "absolute", top: "0", left: "50%", width: "28px", height: "3px", marginLeft: "-14px", borderRadius: "0 0 3px 3px", background: "#b0471a" }}></span><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 12a8.5 8.5 0 0 1-12.4 7.5L3 21l1.6-5A8.5 8.5 0 1 1 21 12z" /></svg>Liên hệ</Link>
</nav>
</div>
</>
  );
}
