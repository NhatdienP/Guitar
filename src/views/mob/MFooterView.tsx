/* Auto-generated from the J.guitar prototype (MFooter.dc.html). */
/* eslint-disable @next/next/no-img-element */
import { Fragment } from 'react';
import Link from 'next/link';

export default function MFooterView({ vm }: { vm: any }) {
  return (
<>
<footer style={{ background: "#2a1e18", color: "#f4eee3", fontFamily: "'Be Vietnam Pro', sans-serif", padding: "52px 20px 32px", display: "flex", flexDirection: "column", gap: "32px" }}>
<img src="/images/5cac1cd4a07fc3a45c150383698de507.png" alt="J.guitar" style={{ width: "160px", height: "auto", display: "block" }} />
<h2 style={{ margin: "0", fontSize: "23px", lineHeight: "1.22", fontWeight: "700", letterSpacing: "-0.03em" }}>Tìm cây đàn của bạn, chúng tôi lo phần còn lại.</h2><div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "28px 16px" }}>
<div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
<strong style={{ fontSize: "15px" }}>Cửa hàng</strong>
<Link href="/" style={{ color: "#c2b2a1", textDecoration: "none", fontSize: "15px" }}>Trang chủ</Link>
<Link href="/san-pham" style={{ color: "#c2b2a1", textDecoration: "none", fontSize: "15px" }}>Sản phẩm</Link>
<Link href="/gioi-thieu" style={{ color: "#c2b2a1", textDecoration: "none", fontSize: "15px" }}>Giới thiệu</Link>
<Link href="/lien-he" style={{ color: "#c2b2a1", textDecoration: "none", fontSize: "15px" }}>Liên hệ</Link>
</div>
<div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
<strong style={{ fontSize: "15px" }}>Showroom</strong>
<span style={{ color: "#c2b2a1", fontSize: "15px" }}>720/98/10E Lạc Long Quân, Phường Tân Hòa, TP.HCM</span>
<span style={{ color: "#c2b2a1", fontSize: "15px" }}>9:00 – 21:00 mỗi ngày</span>
<a href="tel:0834777123" style={{ color: "#c2b2a1", textDecoration: "none", fontSize: "15px" }}>0834 777 123</a>
</div>
</div>
<div style={{ paddingTop: "22px", borderTop: "1px solid #4a3a30", color: "#a8988a", fontSize: "12px", lineHeight: "1.6", display: "flex", flexDirection: "column", gap: "6px" }}>
<span>© 2026 Guitar Shop. Nội dung và hình ảnh mang tính minh hoạ.</span>
<span>Thanh toán khi nhận hàng · Giao toàn quốc · Ảnh: Pexels</span>
</div>
</footer>
</>
  );
}
