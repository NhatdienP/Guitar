/* Auto-generated from the J.guitar prototype (MHome.dc.html). */
/* eslint-disable @next/next/no-img-element */
import { Fragment } from 'react';
import Link from 'next/link';
import Card from '@/components/Card';
import MFooter from '@/components/MFooter';
import MHeader from '@/components/MHeader';

export default function MHomeView({ vm }: { vm: any }) {
  return (
<>
<div style={{ width: "100%", fontFamily: "'Be Vietnam Pro', sans-serif", color: "#1c1714", background: "#f4eee3", position: "relative", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
<div style={{ display: "block", position: "sticky", top: "0", zIndex: "60" }}><MHeader go={vm.go} /></div>
<section style={{ padding: "8px 20px 40px", display: "flex", flexDirection: "column", gap: "18px" }}>
<div style={{ position: "relative", height: "200px", borderRadius: "24px", overflow: "hidden", background: "#2a1e18" }}>
<img src="/images/shop-tuong-dan.jpg" alt="Góc shop J.guitar với các cây đàn treo tường" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
<span style={{ position: "absolute", left: "12px", bottom: "12px", padding: "8px 12px", borderRadius: "999px", background: "rgba(251,248,242,0.94)", fontSize: "12px", fontWeight: "700" }}>★ 4.9 · Setup miễn phí từng cây</span>
</div>
<span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "14px", fontWeight: "600", letterSpacing: "0.12em", color: "#74695d", marginTop: "6px" }}>SHOP SÀI GÒN · TỪ 2014</span>
<h1 style={{ margin: "0", fontSize: "27px", lineHeight: "1.12", fontWeight: "800", letterSpacing: "-0.035em" }}>Đàn Guitar Nhật Bãi Tuyển Chọn</h1>
<p style={{ margin: "-6px 0 0", fontSize: "19px", lineHeight: "1.3", fontWeight: "700", color: "#b0471a", letterSpacing: "-0.02em" }}>Âm Thanh Chuẩn Nhật, Giá Trị Vượt Thời Gian</p>
<p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#6b6157" }}>Mỗi cây đàn là một tuyệt phẩm độc bản được tuyển chọn trực tiếp từ Nhật Bản, kiểm định kỹ càng và test âm thực tế trước khi đến tay người chơi.</p>
<a href="#m-dan-moi-ve" style={{ marginTop: "6px", padding: "14px", borderRadius: "999px", background: "#b0471a", color: "#fff", fontWeight: "700", fontSize: "16px", textAlign: "center", textDecoration: "none" }}>Khám Phá Đàn Mới Về</a>
<a href="https://zalo.me/0834777123" target="_blank" rel="noopener" style={{ padding: "13px", borderRadius: "999px", background: "#fbf8f2", border: "1px solid #e2d8c7", color: "#1c1714", fontWeight: "700", fontSize: "16px", textAlign: "center", textDecoration: "none" }}>Tư Vấn Trực Tiếp Zalo</a>
</section>
<div style={{ borderTop: "1px solid #e2d8c7", borderBottom: "1px solid #e2d8c7", overflow: "hidden", padding: "20px 0" }}>
<div className="jg-marq" style={{ display: "flex", width: "max-content", gap: "36px", fontSize: "21px", fontWeight: "700", letterSpacing: "-0.03em", whiteSpace: "nowrap" }}>
{(vm.strip || []).map((s: any, _i1: number) => (<Fragment key={_i1}>
<span style={{ display: "flex", alignItems: "center", gap: "36px" }}>{s}<svg width="16" height="16" viewBox="0 0 24 24" fill="#a8782c" aria-hidden="true"><path d="M12 2l2.4 7.6L22 12l-7.6 2.4L12 22l-2.4-7.6L2 12l7.6-2.4z" /></svg></span>
</Fragment>))}
</div>
</div>
<section style={{ padding: "52px 20px", display: "flex", flexDirection: "column", gap: "16px" }}>
<span style={{ alignSelf: "flex-start", padding: "7px 14px", border: "1px solid #e2d8c7", borderRadius: "999px", background: "#fbf8f2", fontFamily: "'Barlow Condensed', sans-serif", fontSize: "14px", fontWeight: "600", letterSpacing: "0.12em", color: "#6b6157" }}>DANH MỤC</span>
<h2 style={{ margin: "0", fontSize: "24px", lineHeight: "1.12", fontWeight: "700", letterSpacing: "-0.03em" }}>Chọn theo cách bạn chơi nhạc.</h2>
{(vm.cats || []).map((c: any, _i2: number) => (<Fragment key={_i2}>
<Link href={c.href} style={{ position: "relative", height: "176px", borderRadius: "24px", overflow: "hidden", display: "flex", alignItems: "flex-end", padding: "22px", boxSizing: "border-box", textDecoration: "none", color: "#fff", backgroundColor: "#2a1e18" }}>
<img src={c.img} alt="" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover" }} />
<span style={{ position: "absolute", inset: "0", background: "linear-gradient(rgba(28,23,20,0) 30%, rgba(28,23,20,0.85) 100%)" }}></span>
<span style={{ position: "relative", display: "flex", justifyContent: "space-between", alignItems: "flex-end", width: "100%", gap: "12px" }}>
<span style={{ display: "flex", flexDirection: "column", gap: "4px" }}><strong className="jg-d" style={{ fontSize: "24px", letterSpacing: "-0.04em" }}>{c.t}</strong><span style={{ fontSize: "14px", opacity: "0.88" }}>{c.d}</span></span>
<span aria-hidden="true" style={{ flex: "none", width: "44px", height: "44px", borderRadius: "999px", background: "#fff", color: "#1c1714", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "18px" }}>→</span>
</span>
</Link>
</Fragment>))}
</section>
<section id="m-dan-moi-ve" style={{ padding: "52px 20px", background: "#fbf8f2", display: "flex", flexDirection: "column", gap: "16px" }}>
<span style={{ alignSelf: "flex-start", padding: "7px 14px", border: "1px solid #e2d8c7", borderRadius: "999px", fontFamily: "'Barlow Condensed', sans-serif", fontSize: "14px", fontWeight: "600", letterSpacing: "0.12em", color: "#6b6157" }}>MỚI VỀ</span>
<div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "12px", margin: "0 0 12px" }}>
<h2 style={{ margin: "0", fontSize: "24px", lineHeight: "1.12", fontWeight: "700", letterSpacing: "-0.03em" }}>Đàn mới về</h2>
<Link href="/san-pham" className="jg-more" style={{ flex: "none", color: "#1c1714", fontWeight: "600", fontSize: "14px", textDecoration: "underline", textUnderlineOffset: "4px", textDecorationThickness: "1.5px" }}>Xem tất cả</Link>
</div>
<div style={{ position: "relative" }}>
<div style={{ overflow: "hidden" }}>
<div style={{ display: "flex", transition: "transform .5s cubic-bezier(.2,.7,.2,1)", transform: `${vm.shift}` }}>
{(vm.pages || []).map((pg: any, _i3: number) => (<Fragment key={_i3}>
<div style={{ flex: "0 0 100%", display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", columnGap: "12px", rowGap: "24px" }}>
{(pg.items || []).map((it: any, _i4: number) => (<Fragment key={_i4}>
<Card item={it} onPick={vm.openP} compact={vm.yes} />
</Fragment>))}
</div>
</Fragment>))}
</div>
</div>
<div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "24px" }}>
<button className="jg-arrow" type="button" onClick={vm.prev} disabled={vm.atStart} aria-label="Xem đàn trước" style={{ width: "44px", height: "44px", borderRadius: "999px", border: "1px solid #e2d8c7", background: "#fff", color: "#1c1714", display: "flex", alignItems: "center", justifyContent: "center" }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M15 18l-6-6 6-6" /></svg></button>
<div style={{ display: "flex", gap: "8px" }}>
{(vm.dots || []).map((d: any, _i5: number) => (<Fragment key={_i5}>
<button type="button" onClick={d.go} aria-label={d.label} style={{ width: `${d.w}`, height: "8px", borderRadius: "999px", border: "0", padding: "0", background: `${d.bg}`, transition: "all .3s" }}></button>
</Fragment>))}
</div>
<button className="jg-arrow" type="button" onClick={vm.next} disabled={vm.atEnd} aria-label="Xem đàn tiếp theo" style={{ width: "44px", height: "44px", borderRadius: "999px", border: "1px solid #e2d8c7", background: "#fff", color: "#1c1714", display: "flex", alignItems: "center", justifyContent: "center" }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 18l6-6-6-6" /></svg></button>
</div>
</div>
</section>
<section style={{ padding: "52px 20px", background: "#2a1e18", color: "#f4eee3", display: "flex", flexDirection: "column", gap: "16px" }}>
<span style={{ alignSelf: "flex-start", padding: "7px 14px", border: "1px solid #5a473b", borderRadius: "999px", fontFamily: "'Barlow Condensed', sans-serif", fontSize: "13px", fontWeight: "600", letterSpacing: "0.12em", color: "#c2b2a1" }}>VÌ SAO CHỌN J.GUITAR</span>
<h2 style={{ margin: "0 0 12px", fontSize: "27px", lineHeight: "1.08", fontWeight: "700", letterSpacing: "-0.035em" }}>Mua đàn an tâm. Chơi đàn trọn vẹn.</h2>
<img src="/images/setup-dan.jpg" alt="Kỹ thuật viên setup đàn: thay dây, đo action" style={{ width: "100%", height: "240px", objectFit: "cover", borderRadius: "24px", display: "block" }} />
{(vm.svc || []).map((v: any, _i6: number) => (<Fragment key={_i6}>
<div style={{ display: "flex", flexDirection: "column", gap: "10px", padding: "24px", border: "1px solid #4a3a30", borderRadius: "22px", background: "#352720" }}>
<span style={{ color: "#b0471a", fontWeight: "700", fontSize: "14px" }}>{v.n}</span>
<div style={{ display: "flex", flexDirection: "column", gap: "8px" }}><h3 style={{ margin: "0", fontSize: "21px", letterSpacing: "-0.03em" }}>{v.t}</h3><p style={{ margin: "0", color: "#c2b2a1", fontSize: "15px", lineHeight: "1.6" }}>{v.d}</p></div>
</div>
</Fragment>))}
</section>
<section style={{ padding: "52px 20px 0" }}>
<div style={{ position: "relative", height: "380px", borderRadius: "24px", overflow: "hidden", display: "flex", alignItems: "flex-end", padding: "28px", boxSizing: "border-box", backgroundColor: "#352720" }}>
<img src="/images/dan-acoustic-am.jpg" alt="" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", objectPosition: "65% 50%" }} />
<span style={{ position: "absolute", inset: "0", background: "linear-gradient(rgba(28,23,20,0.05) 25%, rgba(28,23,20,0.75) 100%)" }}></span>
<blockquote style={{ position: "relative", margin: "0", color: "#fff", display: "flex", flexDirection: "column", gap: "14px" }}>
<p style={{ margin: "0", fontSize: "25px", lineHeight: "1.18", fontWeight: "700", letterSpacing: "-0.04em" }}>“Âm nhạc không cần hoàn hảo. Chỉ cần một cây đàn đúng.”</p>
</blockquote>
</div>
</section>
<section style={{ padding: "52px 20px", display: "flex", flexDirection: "column", gap: "14px" }}>
<span style={{ alignSelf: "flex-start", padding: "7px 14px", border: "1px solid #e2d8c7", borderRadius: "999px", fontFamily: "'Barlow Condensed', sans-serif", fontSize: "14px", fontWeight: "600", letterSpacing: "0.12em", color: "#6b6157" }}>HỎI ĐÁP</span>
<h2 style={{ margin: "0", fontSize: "24px", lineHeight: "1.12", fontWeight: "700", letterSpacing: "-0.03em" }}>Câu hỏi thường gặp.</h2>
<p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#6b6157" }}>Không thấy câu trả lời bạn cần? Nhắn Zalo, chúng tôi phản hồi trong vài phút.</p>
<div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", margin: "6px 0 12px" }}>
<a href="https://zalo.me/0834777123" target="_blank" rel="noopener" style={{ padding: "14px", borderRadius: "999px", background: "#b0471a", color: "#fff", fontWeight: "600", fontSize: "15px", textAlign: "center", textDecoration: "none" }}>Chat Zalo</a>
<Link href="/lien-he" style={{ padding: "13px", borderRadius: "999px", border: "1px solid #e2d8c7", color: "#1c1714", fontWeight: "600", fontSize: "15px", textAlign: "center", textDecoration: "none" }}>Liên hệ</Link>
</div>
<div style={{ display: "flex", flexDirection: "column", borderTop: "1px solid #e2d8c7" }}>
{(vm.faq || []).map((f: any, _i7: number) => (<Fragment key={_i7}>
<div style={{ borderBottom: "1px solid #e2d8c7" }}>
<button type="button" onClick={f.toggle} aria-expanded={f.open} style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "12px", padding: "20px 0", background: "none", border: "0", textAlign: "left", font: "inherit", color: "#1c1714" }}>
<span style={{ fontSize: "17px", fontWeight: "700", letterSpacing: "-0.02em", lineHeight: "1.35" }}>{f.q}</span>
<span aria-hidden="true" style={{ flex: "none", width: "32px", height: "32px", borderRadius: "999px", border: "1px solid #e2d8c7", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "18px", transition: "transform .25s", transform: `${f.rot}` }}>+</span>
</button>
{(f.open) && (<>
<p style={{ margin: "0 0 20px", fontSize: "15px", lineHeight: "1.65", color: "#6b6157" }}>{f.a}</p>
</>)}
</div>
</Fragment>))}
</div>
</section>
<section style={{ padding: "0 20px 52px" }}>
<div style={{ padding: "36px 24px", borderRadius: "24px", background: "#b0471a", color: "#fff", display: "flex", flexDirection: "column", gap: "14px" }}>
<span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "14px", fontWeight: "600", letterSpacing: "0.14em", opacity: "0.85" }}>J.GUITAR SHOP · 9:00 – 21:00</span>
<h2 style={{ margin: "0 0 10px", fontSize: "26px", lineHeight: "1.1", fontWeight: "700", letterSpacing: "-0.03em" }}>Ghé thử đàn. Miễn phí, không ép mua.</h2>
<a href="https://maps.app.goo.gl/7j8eoVuhq3MCX4qh8" target="_blank" rel="noopener" style={{ padding: "16px", borderRadius: "999px", background: "#fff", color: "#1c1714", fontWeight: "600", fontSize: "15px", textAlign: "center", textDecoration: "none" }}>Xem đường đi</a>
<a href="tel:0834777123" style={{ padding: "15px", borderRadius: "999px", border: "1px solid rgba(255,255,255,0.45)", background: "rgba(255,255,255,0.08)", color: "#fff", fontWeight: "600", fontSize: "15px", textAlign: "center", textDecoration: "none" }}>Gọi 0834 777 123</a>
</div>
</section>
<div style={{ display: "block", flex: "1 0 auto", background: "#2a1e18" }}><MFooter go={vm.go} /></div>
<nav aria-label="Thanh điều hướng dưới" style={{ position: "sticky", bottom: "0", zIndex: "60", display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))", padding: "0 8px 8px", background: "rgba(251,248,242,0.97)", backdropFilter: "blur(14px)", borderTop: "1px solid #e2d8c7", boxShadow: "0 -8px 24px rgba(28,23,20,0.06)" }}>
<Link href="/" aria-current="page" style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center", gap: "3px", padding: "9px 0 7px", color: "#b0471a", textDecoration: "none", fontSize: "11.5px", fontWeight: "700" }}><span aria-hidden="true" style={{ position: "absolute", top: "0", left: "50%", width: "28px", height: "3px", marginLeft: "-14px", borderRadius: "0 0 3px 3px", background: "#b0471a" }}></span><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 10.5 12 3l9 7.5V21h-6v-6H9v6H3z" /></svg>Trang chủ</Link>
<Link href="/san-pham" style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center", gap: "3px", padding: "9px 0 7px", color: "#6b6157", textDecoration: "none", fontSize: "11.5px", fontWeight: "600" }}><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M13.5 10.5 20 4" /><path d="M18.5 2.5l3 3" /><path d="M10.6 9.2a4 4 0 0 0-5.3.6 3.3 3.3 0 0 0-.2 4.4 3.3 3.3 0 0 0-1.6 1.1 3.6 3.6 0 0 0 5.1 5.1 3.3 3.3 0 0 0 1.1-1.6 3.3 3.3 0 0 0 4.4-.2 4 4 0 0 0 .6-5.3z" /><circle cx="9.6" cy="14.4" r="1.4" /></svg>Sản phẩm</Link>
<Link href="/gioi-thieu" style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center", gap: "3px", padding: "9px 0 7px", color: "#6b6157", textDecoration: "none", fontSize: "11.5px", fontWeight: "600" }}><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 9.5 4.6 4h14.8L21 9.5" /><path d="M4 9.5V20h16V9.5" /><path d="M3 9.5h18" /><path d="M9.5 20v-5.5h5V20" /></svg>Giới thiệu</Link>
<Link href="/lien-he" style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center", gap: "3px", padding: "9px 0 7px", color: "#6b6157", textDecoration: "none", fontSize: "11.5px", fontWeight: "600" }}><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 12a8.5 8.5 0 0 1-12.4 7.5L3 21l1.6-5A8.5 8.5 0 1 1 21 12z" /></svg>Liên hệ</Link>
</nav>
</div>
</>
  );
}
