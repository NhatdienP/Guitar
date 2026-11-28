/* Auto-generated from the J.guitar prototype (LienHe.dc.html). */
/* eslint-disable @next/next/no-img-element */
import { Fragment } from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

export default function LienHeView({ vm }: { vm: any }) {
  return (
<>
<div style={{ fontFamily: "'Be Vietnam Pro', sans-serif", color: "#1c1714", background: "#f4eee3", minWidth: "0", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
<div style={{ display: "block", position: "sticky", top: "0", zIndex: "60" }}><Header go={vm.go} active="lh" /></div>
<section style={{ padding: "16px 24px 0" }}>
<div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative", minHeight: "460px", borderRadius: "32px", overflow: "hidden", display: "flex", alignItems: "flex-end", padding: "48px", boxSizing: "border-box", backgroundColor: "#2a1e18" }}>
<img src="/images/shop-goc-dan.jpg" alt="Shop J.guitar" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover" }} />
<span style={{ position: "absolute", inset: "0", background: "linear-gradient(rgba(28,23,20,0.15) 10%, rgba(28,23,20,0.9) 100%)" }}></span>
<div style={{ position: "relative", display: "flex", flexDirection: "column", gap: "20px", color: "#fff", maxWidth: "860px" }}>
<span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "14px", fontWeight: "600", letterSpacing: "0.14em", opacity: "0.85" }}>LIÊN HỆ</span>
<h1 className="jg-h1" style={{ margin: "0", fontSize: "43px", lineHeight: "1.06", fontWeight: "800", letterSpacing: "-0.035em" }}>Ghé shop hoặc nhắn cho chúng tôi.</h1>
<p style={{ margin: "0", maxWidth: "620px", fontSize: "16px", lineHeight: "1.65", opacity: "0.88" }}>Đội ngũ tư vấn trả lời trong vòng 15 phút trong giờ mở cửa. Đặt lịch trước để có phòng thử đàn riêng.</p>
</div>
</div>
</section>
<section style={{ padding: "72px 24px 48px" }}>
<div style={{ maxWidth: "860px", margin: "0 auto", textAlign: "center", display: "flex", flexDirection: "column", gap: "16px" }}>
<h2 style={{ margin: "0", fontSize: "29px", lineHeight: "1.15", fontWeight: "700", letterSpacing: "-0.04em" }}>Ghé thử đàn, miễn phí và không ép mua</h2>
<p style={{ margin: "0", fontSize: "16px", lineHeight: "1.7", color: "#6b6157" }}>Bạn có thể thử bao nhiêu cây tuỳ thích, kỹ thuật viên sẽ setup đàn theo tay bạn ngay tại chỗ.</p>
</div>
</section>
<section style={{ padding: "0 24px 88px" }}>
<div className="jg-2col" style={{ maxWidth: "1280px", margin: "0 auto", display: "grid", gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)", gap: "20px" }}>
<div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "16px" }}>
{(vm.cards || []).map((c: any, _i1: number) => (<Fragment key={_i1}>
<a className="jg-ct" href={c.href} target={c.target} rel="noopener" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "36px", padding: "28px", borderRadius: "24px", background: "#fbf8f2", border: "1px solid #e2d8c7", textDecoration: "none", color: "#1c1714" }}>
<span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "15px", fontWeight: "600", letterSpacing: "0.08em", color: "#74695d" }}>{c.k}</span>
<span style={{ display: "flex", flexDirection: "column", gap: "6px" }}><strong className="jg-d" style={{ fontSize: "22px", letterSpacing: "-0.03em" }}>{c.v}</strong><span style={{ fontSize: "14px", color: `${c.subColor}`, fontWeight: "600" }}>{c.sub}</span></span>
</a>
</Fragment>))}
</div>
<div style={{ position: "relative", minHeight: "360px", borderRadius: "28px", overflow: "hidden", display: "flex", alignItems: "flex-end", padding: "36px", boxSizing: "border-box", backgroundColor: "#2a1e18" }}>
<img src="/images/shop-tuong-dan.jpg" alt="" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover" }} />
<span style={{ position: "absolute", inset: "0", background: "linear-gradient(rgba(28,23,20,0.1), rgba(28,23,20,0.8))" }}></span>
<div style={{ position: "relative", display: "flex", flexDirection: "column", gap: "18px", color: "#fff" }}>
<strong className="jg-d" style={{ fontSize: "25px", letterSpacing: "-0.03em", lineHeight: "1.2" }}>Ghé thử đàn, miễn phí và không ép mua.</strong>
<div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
<a href="https://maps.app.goo.gl/7j8eoVuhq3MCX4qh8" target="_blank" rel="noopener" style={{ padding: "14px 22px", borderRadius: "999px", background: "#fff", color: "#1c1714", fontWeight: "600", fontSize: "15px", textDecoration: "none" }}>Chỉ đường Google Maps</a>
<Link href="/san-pham" style={{ padding: "13px 21px", borderRadius: "999px", border: "1px solid rgba(255,255,255,0.5)", color: "#fff", fontWeight: "600", fontSize: "15px", textDecoration: "none" }}>Đặt lịch / đặt hàng</Link>
</div>
</div>
</div>
</div>
</section>
<div style={{ display: "block", flex: "1 0 auto", background: "#2a1e18" }}><Footer go={vm.go} /></div>
</div>
</>
  );
}
