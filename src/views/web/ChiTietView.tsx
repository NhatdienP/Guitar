/* Auto-generated from the J.guitar prototype (ChiTiet.dc.html). */
/* eslint-disable @next/next/no-img-element */
import { Fragment } from 'react';
import Gallery from '@/components/Gallery';
import Link from 'next/link';
import Card from '@/components/Card';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

export default function ChiTietView({ vm }: { vm: any }) {
  return (
<>
<div id="top" style={{ fontFamily: "'Be Vietnam Pro', sans-serif", color: "#1c1714", background: "#f4eee3", minWidth: "0", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
<div style={{ display: "block", position: "sticky", top: "0", zIndex: "60" }}><Header go={vm.go} active="sp" /></div>
<section style={{ padding: "16px 24px 96px" }}>
<div style={{ maxWidth: "1280px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "24px" }}>
<nav aria-label="Breadcrumb" style={{ fontSize: "13px", color: "#74695d" }}><Link href="/" style={{ color: "#74695d", textDecoration: "none" }}>Trang chủ</Link> / <Link href="/san-pham" style={{ color: "#74695d", textDecoration: "none" }}>Sản phẩm</Link> / <span style={{ color: "#1c1714" }}>{vm.p.title}</span></nav>
<div className="jg-2col" style={{ display: "grid", gridTemplateColumns: "minmax(0, 0.9fr) minmax(0, 1fr)", gap: "56px", alignItems: "start" }}>
<Gallery images={vm.p.imgs} title={vm.p.title} variant="web" radius={24} />
<div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "16px", paddingTop: "4px" }}>
<span style={{ padding: "6px 14px", borderRadius: "999px", background: "#fbe9dd", color: "#8a3612", fontFamily: "'Barlow Condensed', sans-serif", fontSize: "14px", fontWeight: "600", letterSpacing: "0.1em" }}>{vm.typeUp}</span>
<h1 style={{ margin: "0", fontSize: "40px", lineHeight: "1.05", fontWeight: "800", letterSpacing: "-0.035em" }}>{vm.p.title}</h1>
<div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
<span style={{ fontSize: "27px", fontWeight: "800", color: "#b0471a", letterSpacing: "-0.03em" }}>{vm.p.priceText}</span>
<span style={{ padding: "5px 12px", borderRadius: "999px", background: "#e5f3e8", color: "#1e7a3c", fontSize: "13px", fontWeight: "600" }}>● Còn hàng</span>
</div>
<p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#6b6157" }}>{vm.p.short}</p>
{(vm.hasPoints) && (<>
<div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
{(vm.p.points || []).map((pt: any, _i1: number) => (<Fragment key={_i1}>
<span style={{ padding: "8px 14px", borderRadius: "999px", background: "#fbf8f2", border: "1px solid #e2d8c7", fontSize: "13px", fontWeight: "600" }}>{pt}</span>
</Fragment>))}
</div>
</>)}
<div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", width: "100%", marginTop: "4px" }}>
<a className="jg-btn" href="#dat-hang" style={{ padding: "14px", borderRadius: "999px", background: "#b0471a", color: "#fff", fontWeight: "600", fontSize: "15px", textAlign: "center", textDecoration: "none", boxShadow: "0 10px 24px rgba(176,71,26,0.3)" }}>Đặt hàng ngay</a>
<a className="jg-btn" href="https://zalo.me/0834777123" target="_blank" rel="noopener" style={{ padding: "13px", borderRadius: "999px", background: "#fbf8f2", border: "1px solid #e2d8c7", color: "#1c1714", fontWeight: "600", fontSize: "15px", textAlign: "center", textDecoration: "none" }}>Hỏi qua Zalo</a>
</div>
{vm.hasVideo && (
<a className="jg-btn" href={vm.yt} target="_blank" rel="noopener" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", width: "100%", boxSizing: "border-box", padding: "9px 18px", borderRadius: "999px", background: "#1c1714", color: "#fff", fontWeight: "600", fontSize: "15px", textDecoration: "none", boxShadow: "0 10px 24px rgba(28,23,20,0.22)" }}>
<span style={{ width: "32px", height: "32px", borderRadius: "999px", background: "#ff0033", display: "flex", alignItems: "center", justifyContent: "center" }} aria-hidden="true"><svg width="12" height="12" viewBox="0 0 24 24" fill="#fff"><path d="M6 4l14 8-14 8z" /></svg></span>Xem video test âm thanh</a>
)}
<span style={{ fontSize: "13px", color: "#74695d" }}>Không cần thanh toán online · Shop gọi xác nhận trong 15 phút</span>
<div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px 24px", width: "100%", boxSizing: "border-box", padding: "18px 20px", background: "#fbf8f2", border: "1px solid #e2d8c7", borderRadius: "18px", marginTop: "4px" }}>
{(vm.trust || []).map((t: any, _i2: number) => (<Fragment key={_i2}>
<div style={{ display: "flex", gap: "12px" }}>
<span style={{ flex: "none", width: "30px", height: "30px", borderRadius: "999px", background: "#fbe9dd", display: "flex", alignItems: "center", justifyContent: "center" }} aria-hidden="true"><svg width="12" height="12" viewBox="0 0 24 24" fill="#b0471a"><path d="M12 2l2.4 7.6L22 12l-7.6 2.4L12 22l-2.4-7.6L2 12l7.6-2.4z" /></svg></span>
<span style={{ display: "flex", flexDirection: "column", gap: "2px" }}><strong style={{ fontSize: "14px" }}>{t.t}</strong><span style={{ fontSize: "13px", color: "#6b6157" }}>{t.d}</span></span>
</div>
</Fragment>))}
</div>
</div>
</div>
</div>
</section>
<section style={{ padding: "72px 24px", background: "#fbf8f2" }}>
<div className="jg-2col" style={{ maxWidth: "1280px", margin: "0 auto", display: "grid", gridTemplateColumns: "minmax(0, 1.2fr) minmax(0, 1fr)", gap: "52px" }}>
<div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "20px" }}>
<span style={{ padding: "7px 14px", border: "1px solid #e2d8c7", borderRadius: "999px", fontFamily: "'Barlow Condensed', sans-serif", fontSize: "14px", fontWeight: "600", letterSpacing: "0.12em", color: "#6b6157" }}>VỀ CÂY ĐÀN NÀY</span>
<h2 style={{ margin: "0", fontSize: "30px", lineHeight: "1.1", fontWeight: "700", letterSpacing: "-0.03em" }}>Âm thanh & cảm giác chơi</h2>
<p style={{ margin: "0", fontSize: "16px", lineHeight: "1.75", color: "#4a4038" }}>{vm.p.desc}</p>
<div style={{ display: "flex", flexDirection: "column", gap: "6px", width: "100%", boxSizing: "border-box", padding: "22px 24px", borderRadius: "20px", background: "#fbe9dd", border: "1px solid #f0cdb7" }}>
<strong style={{ fontSize: "15px" }}>Tặng kèm khi mua</strong>
<span style={{ fontSize: "15px", color: "#6b6157" }}>Bao đàn · Capo · Pick · Bộ dây dự phòng · Setup miễn phí trọn đời</span>
</div>
</div>
<div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
<span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "14px", fontWeight: "600", letterSpacing: "0.12em", color: "#6b6157" }}>THÔNG SỐ KỸ THUẬT</span>
{(vm.hasSpecs) && (<>
<dl style={{ margin: "0", display: "flex", flexDirection: "column", borderTop: "1px solid #e2d8c7" }}>
{(vm.p.specs || []).map((s: any, _i3: number) => (<Fragment key={_i3}>
<div style={{ display: "flex", justifyContent: "space-between", gap: "16px", padding: "16px 0", borderBottom: "1px solid #e2d8c7" }}>
<dt style={{ color: "#6b6157", fontSize: "15px" }}>{s.k}</dt><dd style={{ margin: "0", fontWeight: "600", fontSize: "15px", textAlign: "right" }}>{s.v}</dd>
</div>
</Fragment>))}
</dl>
</>)}
{(vm.noSpecs) && (<>
<p style={{ margin: "0", color: "#6b6157", fontSize: "15px" }}>Nhắn Zalo để nhận bảng thông số chi tiết của cây đàn này.</p>
</>)}
</div>
</div>
</section>
<section id="dat-hang" style={{ padding: "88px 24px" }}>
<div className="jg-2col" style={{ maxWidth: "1280px", margin: "0 auto", display: "grid", gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1.3fr)", gap: "52px", alignItems: "start" }}>
<div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
<span style={{ alignSelf: "flex-start", padding: "7px 14px", border: "1px solid #e2d8c7", borderRadius: "999px", fontFamily: "'Barlow Condensed', sans-serif", fontSize: "14px", fontWeight: "600", letterSpacing: "0.12em", color: "#6b6157" }}>ĐẶT HÀNG</span>
<h2 style={{ margin: "0", fontSize: "33px", lineHeight: "1.1", fontWeight: "700", letterSpacing: "-0.03em" }}>Đặt cây đàn này ngay hôm nay.</h2>
<p style={{ margin: "0", fontSize: "16px", lineHeight: "1.65", color: "#6b6157" }}>Chọn đúng tên đàn trong form, để lại số điện thoại. Shop gọi xác nhận trong 15 phút. Bạn chưa cần thanh toán gì.</p>
<div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "8px", fontSize: "15px" }}>
<span>✓  Không cần trả trước</span><span>✓  Giao toàn quốc, kiểm tra trước khi nhận</span><span>✓  Đổi trả 7 ngày nếu lỗi kỹ thuật</span>
</div>
</div>
<div style={{ padding: "28px", background: "#fbf8f2", border: "1px solid #e2d8c7", borderRadius: "28px" }}>
{(vm.sent) && (<>
<div role="status" style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "14px", padding: "24px 8px" }}>
<span style={{ width: "56px", height: "56px", borderRadius: "999px", background: "#e5f3e8", display: "flex", alignItems: "center", justifyContent: "center" }} aria-hidden="true"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#1e7a3c" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg></span>
<strong className="jg-d" style={{ fontSize: "21px", letterSpacing: "-0.02em" }}>Cảm ơn {vm.nameOk}! Shop đã nhận đơn.</strong>
<span style={{ color: "#6b6157", fontSize: "15px", lineHeight: "1.6" }}>Chuyên viên sẽ gọi số {vm.f.phone} trong 15 phút để xác nhận cây {vm.f.guitar}.</span>
<button type="button" onClick={vm.again} style={{ marginTop: "8px", padding: "12px 22px", borderRadius: "999px", border: "1px solid #e2d8c7", background: "#fff", font: "inherit", fontWeight: "600", cursor: "pointer" }}>Gửi đơn khác</button>
</div>
</>)}
{(vm.notSent) && (<>
<form onSubmit={vm.submit} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "18px" }} noValidate>
<label className="jg-lb">Họ và tên *<input className="jg-in" value={vm.f.name} onChange={vm.on.name} placeholder="Nguyễn Văn A" /></label>
<label className="jg-lb">Số điện thoại *<input className="jg-in" type="tel" value={vm.f.phone} onChange={vm.on.phone} placeholder="09xx xxx xxx" /></label>
<label className="jg-lb" style={{ gridColumn: "1 / -1" }}>Cây đàn muốn đặt *
<select className="jg-in" value={vm.f.guitar} onChange={vm.on.guitar}>
<option value="">Chọn cây đàn…</option>
{(vm.options || []).map((o: any, _i4: number) => (<Fragment key={_i4}><option value={o.v}>{o.l}</option></Fragment>))}
</select></label>
<label className="jg-lb">Số lượng
<select className="jg-in" value={vm.f.qty} onChange={vm.on.qty}><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="3+">Nhiều hơn 3</option></select></label>
<label className="jg-lb">Hình thức nhận *
<select className="jg-in" value={vm.f.ship} onChange={vm.on.ship}><option value="">Chọn...</option><option>Giao tận nơi – COD</option><option>Nhận tại showroom</option><option>Chuyển khoản trước</option></select></label>
<label className="jg-lb" style={{ gridColumn: "1 / -1" }}>Địa chỉ nhận hàng<input className="jg-in" value={vm.f.addr} onChange={vm.on.addr} placeholder="Số nhà, đường, phường, quận, tỉnh" /></label>
<label className="jg-lb" style={{ gridColumn: "1 / -1" }}>Ghi chú<textarea className="jg-in" onChange={vm.on.note} value={vm.f.note} placeholder="Màu, thời gian giao, yêu cầu setup..." style={{ height: "96px", padding: "14px 16px", resize: "vertical" }} /></label>
{(vm.hasErr) && (<>
<p role="alert" style={{ gridColumn: "1 / -1", margin: "0", padding: "12px 16px", borderRadius: "12px", background: "#fdecea", color: "#b42318", fontSize: "14px" }}>{vm.err}</p>
</>)}
<input ref={vm.hp} type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ position: "absolute", left: "-9999px", width: "1px", height: "1px", opacity: 0 }} />
<button type="submit" disabled={vm.sending} aria-busy={vm.sending} className="jg-btn" style={{ gridColumn: "1 / -1", height: "50px", border: "0", borderRadius: "999px", background: "#b0471a", color: "#fff", font: "inherit", fontSize: "16px", fontWeight: "700", cursor: "pointer" }}>{vm.submitLabel}</button>
</form>
</>)}
</div>
</div>
</section>
<section style={{ padding: "0 24px 88px" }}>
<div style={{ maxWidth: "1280px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "40px" }}>
<div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: "24px", flexWrap: "wrap" }}>
<div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "18px" }}>
<span style={{ padding: "7px 14px", border: "1px solid #e2d8c7", borderRadius: "999px", fontFamily: "'Barlow Condensed', sans-serif", fontSize: "14px", fontWeight: "600", letterSpacing: "0.12em", color: "#6b6157" }}>GỢI Ý CHO BẠN</span>
<h2 style={{ margin: "0", fontSize: "33px", lineHeight: "1.1", fontWeight: "700", letterSpacing: "-0.03em" }}>Có thể bạn cũng thích.</h2>
</div>
<Link className="jg-btn" href="/san-pham" style={{ padding: "13px 23px", borderRadius: "999px", background: "#fbf8f2", border: "1px solid #e2d8c7", color: "#1c1714", fontWeight: "600", fontSize: "15px", textDecoration: "none" }}>Xem tất cả</Link>
</div>
<div className="jg-4" style={{ display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))", gap: "24px" }}>
{(vm.related || []).map((it: any, _i5: number) => (<Fragment key={_i5}>
<Card item={it} onPick={vm.pickP} />
</Fragment>))}
</div>
</div>
</section>
<div style={{ display: "block", flex: "1 0 auto", background: "#2a1e18" }}><Footer go={vm.go} /></div>
</div>
</>
  );
}
