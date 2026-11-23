/* Auto-generated from the J.guitar prototype (MChiTiet.dc.html). */
/* eslint-disable @next/next/no-img-element */
import { Fragment } from 'react';
import Link from 'next/link';
import Card from '@/components/Card';
import MFooter from '@/components/MFooter';
import MHeader from '@/components/MHeader';

export default function MChiTietView({ vm }: { vm: any }) {
  return (
<>
<div id="m-top" style={{ width: "100%", fontFamily: "'Be Vietnam Pro', sans-serif", color: "#1c1714", background: "#f4eee3", position: "relative", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
<div style={{ display: "block", position: "sticky", top: "0", zIndex: "60" }}><MHeader go={vm.go} /></div>
<section style={{ padding: "4px 16px 48px", display: "flex", flexDirection: "column", gap: "16px" }}>
<nav aria-label="Breadcrumb" style={{ fontSize: "12px", color: "#74695d" }}><Link href="/" style={{ color: "#74695d", textDecoration: "none" }}>Trang chủ</Link> / <Link href="/san-pham" style={{ color: "#74695d", textDecoration: "none" }}>Sản phẩm</Link></nav>
<div style={{ aspectRatio: "1 / 1", borderRadius: "20px", overflow: "hidden", background: "#e9dfcf" }}>
<img src={vm.p.img} alt={vm.p.title} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
</div>
<span style={{ alignSelf: "flex-start", padding: "6px 12px", borderRadius: "999px", background: "#fbe9dd", color: "#8a3612", fontFamily: "'Barlow Condensed', sans-serif", fontSize: "13px", fontWeight: "600", letterSpacing: "0.1em", marginTop: "6px" }}>{vm.typeUp}</span>
<h1 style={{ margin: "0", fontSize: "27px", lineHeight: "1.08", fontWeight: "800", letterSpacing: "-0.035em" }}>{vm.p.title}</h1>
<div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
<span style={{ fontSize: "23px", fontWeight: "800", color: "#b0471a", letterSpacing: "-0.03em" }}>{vm.p.priceText}</span>
<span style={{ padding: "4px 10px", borderRadius: "999px", background: "#e5f3e8", color: "#1e7a3c", fontSize: "12px", fontWeight: "600" }}>● Còn hàng</span>
</div>
<p style={{ margin: "0", fontSize: "16px", lineHeight: "1.55", color: "#6b6157" }}>{vm.p.short}</p>
{(vm.hasPoints) && (<>
<div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
{(vm.p.points || []).map((pt: any, _i1: number) => (<Fragment key={_i1}>
<span style={{ padding: "7px 12px", borderRadius: "999px", background: "#fbf8f2", border: "1px solid #e2d8c7", fontSize: "12px", fontWeight: "600" }}>{pt}</span>
</Fragment>))}
</div>
</>)}
<a href="#m-dat-hang" style={{ padding: "14px", borderRadius: "999px", background: "#b0471a", color: "#fff", fontWeight: "700", fontSize: "16px", textAlign: "center", textDecoration: "none" }}>Đặt hàng ngay</a>
<a href="https://zalo.me/0834777123" target="_blank" rel="noopener" style={{ padding: "13px", borderRadius: "999px", background: "#fbf8f2", border: "1px solid #e2d8c7", color: "#1c1714", fontWeight: "700", fontSize: "16px", textAlign: "center", textDecoration: "none" }}>Hỏi qua Zalo</a>
<a href={vm.yt} target="_blank" rel="noopener" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", padding: "8px 14px", borderRadius: "999px", background: "#1c1714", color: "#fff", fontWeight: "700", fontSize: "15px", textDecoration: "none", boxShadow: "0 8px 20px rgba(28,23,20,0.2)" }}>
<span style={{ width: "32px", height: "32px", borderRadius: "999px", background: "#ff0033", display: "flex", alignItems: "center", justifyContent: "center" }} aria-hidden="true"><svg width="12" height="12" viewBox="0 0 24 24" fill="#fff"><path d="M6 4l14 8-14 8z" /></svg></span>Xem video test âm thanh</a>
<span style={{ fontSize: "12px", color: "#74695d", textAlign: "center" }}>Không cần thanh toán online · Shop gọi xác nhận trong 15 phút</span>
<div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px 12px", padding: "18px", background: "#fbf8f2", border: "1px solid #e2d8c7", borderRadius: "20px" }}>
{(vm.trust || []).map((t: any, _i2: number) => (<Fragment key={_i2}>
<div style={{ display: "flex", gap: "8px" }}>
<span style={{ flex: "none", width: "24px", height: "24px", borderRadius: "999px", background: "#fbe9dd", display: "flex", alignItems: "center", justifyContent: "center" }} aria-hidden="true"><svg width="10" height="10" viewBox="0 0 24 24" fill="#b0471a"><path d="M12 2l2.4 7.6L22 12l-7.6 2.4L12 22l-2.4-7.6L2 12l7.6-2.4z" /></svg></span>
<span style={{ display: "flex", flexDirection: "column", gap: "1px" }}><strong style={{ fontSize: "13px" }}>{t.t}</strong><span style={{ fontSize: "12px", color: "#6b6157" }}>{t.d}</span></span>
</div>
</Fragment>))}
</div>
</section>
<section style={{ padding: "48px 16px", background: "#fbf8f2", display: "flex", flexDirection: "column", gap: "14px" }}>
<span style={{ alignSelf: "flex-start", padding: "7px 14px", border: "1px solid #e2d8c7", borderRadius: "999px", fontFamily: "'Barlow Condensed', sans-serif", fontSize: "13px", fontWeight: "600", letterSpacing: "0.12em", color: "#6b6157" }}>VỀ CÂY ĐÀN NÀY</span>
<h2 style={{ margin: "0", fontSize: "23px", lineHeight: "1.15", fontWeight: "700", letterSpacing: "-0.04em" }}>Âm thanh & cảm giác chơi</h2>
<p style={{ margin: "0", fontSize: "16px", lineHeight: "1.7", color: "#4a4038" }}>{vm.p.desc}</p>
<div style={{ padding: "16px 18px", borderRadius: "16px", background: "#fbe9dd", border: "1px solid #f0cdb7", display: "flex", flexDirection: "column", gap: "4px" }}>
<strong style={{ fontSize: "14px" }}>Tặng kèm khi mua</strong>
<span style={{ fontSize: "14px", color: "#6b6157", lineHeight: "1.5" }}>Bao đàn · Capo · Pick · Bộ dây dự phòng · Setup miễn phí trọn đời</span>
</div>
<span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "14px", fontWeight: "600", letterSpacing: "0.12em", color: "#6b6157", marginTop: "14px" }}>THÔNG SỐ KỸ THUẬT</span>
{(vm.hasSpecs) && (<>
<dl style={{ margin: "0", display: "flex", flexDirection: "column", borderTop: "1px solid #e2d8c7" }}>
{(vm.p.specs || []).map((s: any, _i3: number) => (<Fragment key={_i3}>
<div style={{ display: "flex", justifyContent: "space-between", gap: "12px", padding: "13px 0", borderBottom: "1px solid #e2d8c7" }}>
<dt style={{ color: "#6b6157", fontSize: "14px" }}>{s.k}</dt><dd style={{ margin: "0", fontWeight: "600", fontSize: "14px", textAlign: "right" }}>{s.v}</dd>
</div>
</Fragment>))}
</dl>
</>)}
{(vm.noSpecs) && (<>
<p style={{ margin: "0", color: "#6b6157", fontSize: "14px" }}>Nhắn Zalo để nhận bảng thông số chi tiết của cây đàn này.</p>
</>)}
</section>
<section id="m-dat-hang" style={{ padding: "48px 16px", display: "flex", flexDirection: "column", gap: "14px" }}>
<h2 style={{ margin: "0", fontSize: "25px", lineHeight: "1.12", fontWeight: "700", letterSpacing: "-0.03em" }}>Đặt cây đàn này ngay hôm nay.</h2>
<p style={{ margin: "0 0 6px", fontSize: "15px", lineHeight: "1.6", color: "#6b6157" }}>Chọn đúng tên đàn trong form, để lại số điện thoại. Shop gọi xác nhận trong 15 phút.</p>
<div style={{ padding: "20px", background: "#fbf8f2", border: "1px solid #e2d8c7", borderRadius: "22px" }}>
{(vm.sent) && (<>
<div role="status" style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "12px", padding: "12px 4px" }}>
<span style={{ width: "48px", height: "48px", borderRadius: "999px", background: "#e5f3e8", display: "flex", alignItems: "center", justifyContent: "center" }} aria-hidden="true"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1e7a3c" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg></span>
<strong style={{ fontSize: "20px", letterSpacing: "-0.02em" }}>Cảm ơn {vm.nameOk}! Shop đã nhận đơn.</strong>
<span style={{ color: "#6b6157", fontSize: "14px", lineHeight: "1.6" }}>Chuyên viên sẽ gọi số {vm.f.phone} trong 15 phút để xác nhận cây {vm.f.guitar}.</span>
<button type="button" onClick={vm.again} style={{ marginTop: "6px", padding: "12px 20px", borderRadius: "999px", border: "1px solid #e2d8c7", background: "#fff", font: "inherit", fontWeight: "600" }}>Gửi đơn khác</button>
</div>
</>)}
{(vm.notSent) && (<>
<form onSubmit={vm.submit} style={{ display: "flex", flexDirection: "column", gap: "14px" }} noValidate>
<label className="jg-lb">Họ và tên *<input className="jg-in" value={vm.f.name} onChange={vm.on.name} placeholder="Nguyễn Văn A" /></label>
<label className="jg-lb">Số điện thoại *<input className="jg-in" type="tel" value={vm.f.phone} onChange={vm.on.phone} placeholder="09xx xxx xxx" /></label>
<label className="jg-lb">Cây đàn muốn đặt *
<select className="jg-in" value={vm.f.guitar} onChange={vm.on.guitar}>
<option value="">Chọn cây đàn…</option>
{(vm.options || []).map((o: any, _i4: number) => (<Fragment key={_i4}><option value={o.v}>{o.l}</option></Fragment>))}
</select></label>
<div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: "10px" }}>
<label className="jg-lb">Số lượng
<select className="jg-in" value={vm.f.qty} onChange={vm.on.qty}><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="3+">Nhiều hơn 3</option></select></label>
<label className="jg-lb">Hình thức nhận *
<select className="jg-in" value={vm.f.ship} onChange={vm.on.ship}><option value="">Chọn...</option><option>Giao tận nơi – COD</option><option>Nhận tại showroom</option><option>Chuyển khoản trước</option></select></label>
</div>
<label className="jg-lb">Địa chỉ nhận hàng<input className="jg-in" value={vm.f.addr} onChange={vm.on.addr} placeholder="Số nhà, đường, phường, quận, tỉnh" /></label>
<label className="jg-lb">Ghi chú<textarea className="jg-in" onChange={vm.on.note} value={vm.f.note} placeholder="Màu, thời gian giao, yêu cầu setup..." style={{ height: "88px", padding: "12px 14px", resize: "vertical" }} /></label>
{(vm.hasErr) && (<>
<p role="alert" style={{ margin: "0", padding: "12px 14px", borderRadius: "12px", background: "#fdecea", color: "#b42318", fontSize: "14px" }}>{vm.err}</p>
</>)}
<button type="submit" style={{ height: "48px", border: "0", borderRadius: "999px", background: "#b0471a", color: "#fff", font: "inherit", fontSize: "16px", fontWeight: "700" }}>Gửi đơn đặt hàng</button>
</form>
</>)}
</div>
</section>
<section style={{ padding: "0 16px 48px", display: "flex", flexDirection: "column", gap: "14px" }}>
<span style={{ alignSelf: "flex-start", padding: "7px 14px", border: "1px solid #e2d8c7", borderRadius: "999px", fontFamily: "'Barlow Condensed', sans-serif", fontSize: "13px", fontWeight: "600", letterSpacing: "0.12em", color: "#6b6157" }}>GỢI Ý CHO BẠN</span>
<h2 style={{ margin: "0 0 8px", fontSize: "25px", lineHeight: "1.12", fontWeight: "700", letterSpacing: "-0.03em" }}>Có thể bạn cũng thích.</h2>
<div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", columnGap: "12px", rowGap: "24px" }}>
{(vm.related || []).map((it: any, _i5: number) => (<Fragment key={_i5}>
<Card item={it} compact={vm.yes} onPick={vm.pickP} />
</Fragment>))}
</div>
<Link href="/san-pham" style={{ padding: "14px", borderRadius: "999px", background: "#fbf8f2", border: "1px solid #e2d8c7", color: "#1c1714", fontWeight: "600", fontSize: "15px", textAlign: "center", textDecoration: "none", marginTop: "8px" }}>Xem tất cả</Link>
</section>
<div style={{ display: "block", flex: "1 0 auto", background: "#2a1e18" }}><MFooter go={vm.go} /></div>
<nav aria-label="Thanh điều hướng dưới" style={{ position: "sticky", bottom: "0", zIndex: "60", display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))", padding: "0 8px 8px", background: "rgba(251,248,242,0.97)", backdropFilter: "blur(14px)", borderTop: "1px solid #e2d8c7", boxShadow: "0 -8px 24px rgba(28,23,20,0.06)" }}>
<Link href="/" style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center", gap: "3px", padding: "9px 0 7px", color: "#6b6157", textDecoration: "none", fontSize: "11.5px", fontWeight: "600" }}><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 10.5 12 3l9 7.5V21h-6v-6H9v6H3z" /></svg>Trang chủ</Link>
<Link href="/san-pham" aria-current="page" style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center", gap: "3px", padding: "9px 0 7px", color: "#b0471a", textDecoration: "none", fontSize: "11.5px", fontWeight: "700" }}><span aria-hidden="true" style={{ position: "absolute", top: "0", left: "50%", width: "28px", height: "3px", marginLeft: "-14px", borderRadius: "0 0 3px 3px", background: "#b0471a" }}></span><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M13.5 10.5 20 4" /><path d="M18.5 2.5l3 3" /><path d="M10.6 9.2a4 4 0 0 0-5.3.6 3.3 3.3 0 0 0-.2 4.4 3.3 3.3 0 0 0-1.6 1.1 3.6 3.6 0 0 0 5.1 5.1 3.3 3.3 0 0 0 1.1-1.6 3.3 3.3 0 0 0 4.4-.2 4 4 0 0 0 .6-5.3z" /><circle cx="9.6" cy="14.4" r="1.4" /></svg>Sản phẩm</Link>
<Link href="/gioi-thieu" style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center", gap: "3px", padding: "9px 0 7px", color: "#6b6157", textDecoration: "none", fontSize: "11.5px", fontWeight: "600" }}><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 9.5 4.6 4h14.8L21 9.5" /><path d="M4 9.5V20h16V9.5" /><path d="M3 9.5h18" /><path d="M9.5 20v-5.5h5V20" /></svg>Giới thiệu</Link>
<Link href="/lien-he" style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center", gap: "3px", padding: "9px 0 7px", color: "#6b6157", textDecoration: "none", fontSize: "11.5px", fontWeight: "600" }}><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 12a8.5 8.5 0 0 1-12.4 7.5L3 21l1.6-5A8.5 8.5 0 1 1 21 12z" /></svg>Liên hệ</Link>
</nav>
</div>
</>
  );
}
