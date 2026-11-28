/* Auto-generated from the J.guitar prototype (Footer.dc.html). */
/* eslint-disable @next/next/no-img-element */
import { Fragment } from 'react';
import Link from 'next/link';

export default function FooterView({ vm }: { vm: any }) {
  return (
<>
<footer style={{ background: "#2a1e18", color: "#f4eee3", fontFamily: "'Be Vietnam Pro', sans-serif", padding: "64px 24px 32px" }}>
<div style={{ maxWidth: "1280px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "48px" }}>
<div className="jg-fg" style={{ display: "grid", gridTemplateColumns: "minmax(0, 2fr) repeat(2, minmax(0, 1fr))", gap: "40px", alignItems: "start" }}>
<div className="jg-fb" style={{ display: "flex", flexDirection: "column", gap: "20px", maxWidth: "360px" }}>
<img src="/images/5cac1cd4a07fc3a45c150383698de507.png" alt="J.guitar – Chuyên guitar nội địa Nhật" style={{ width: "168px", height: "auto", display: "block" }} />
<p className="jg-d" style={{ margin: "0", fontSize: "22px", lineHeight: "1.3", fontWeight: "700", letterSpacing: "-0.02em" }}>Tìm cây đàn của bạn, chúng tôi lo phần còn lại.</p>
</div>
<nav aria-label="Cửa hàng" style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
<h3 className="jg-fh">Cửa hàng</h3>
<Link className="jg-fl" href="/">Trang chủ</Link>
<Link className="jg-fl" href="/san-pham">Sản phẩm</Link>
<Link className="jg-fl" href="/gioi-thieu">Giới thiệu</Link>
<Link className="jg-fl" href="/lien-he">Liên hệ</Link>
</nav>
<div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
<h3 className="jg-fh">Shop</h3>
<span style={{ color: "#c2b2a1", fontSize: "15px", lineHeight: "1.4" }}>720/98/10E Lạc Long Quân, Phường Tân Hòa, TP.HCM</span>
<span style={{ color: "#c2b2a1", fontSize: "15px", lineHeight: "1.4" }}>9:00 – 21:00 mỗi ngày</span>
<a className="jg-fl" href="tel:0834777123" style={{ color: "#f4eee3", fontWeight: "600" }}>0834 777 123</a>
</div>
</div>
<div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px", paddingTop: "24px", borderTop: "1px solid #4a3a30", color: "#a8988a", fontSize: "13px" }}>
<span>© 2026 J.Guitar. Nội dung và hình ảnh mang tính minh hoạ.</span>
<span>Thanh toán khi nhận hàng · Giao toàn quốc · Ảnh: Pexels</span>
</div>
</div>
</footer>
</>
  );
}
