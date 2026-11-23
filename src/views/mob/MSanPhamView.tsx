/* Auto-generated from the J.guitar prototype (MSanPham.dc.html). */
/* eslint-disable @next/next/no-img-element */
import { Fragment } from 'react';
import Link from 'next/link';
import Card from '@/components/Card';
import MFooter from '@/components/MFooter';
import MHeader from '@/components/MHeader';

export default function MSanPhamView({ vm }: { vm: any }) {
  return (
<>
<div style={{ width: "100%", fontFamily: "'Be Vietnam Pro', sans-serif", color: "#1c1714", background: "#f4eee3", position: "relative", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
<div style={{ display: "block", position: "sticky", top: "0", zIndex: "60" }}><MHeader go={vm.go} query={vm.q} onQuery={vm.setQ} /></div>
<div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "10px", padding: "6px 16px 12px" }}>
<span style={{ fontSize: "14px", color: "#6b6157" }}><strong style={{ color: "#1c1714" }}>{vm.count}</strong> mẫu đàn</span>
<div style={{ display: "flex", gap: "8px" }}>
<div style={{ position: "relative" }}>
<button type="button" onClick={vm.toggleSort} aria-haspopup="listbox" aria-expanded={vm.sortOpen} aria-label={`Sắp xếp: ${vm.sortLabel}`} style={{ height: "42px", display: "flex", alignItems: "center", gap: "6px", padding: "0 12px", background: "#fbf8f2", border: "1px solid #e2d8c7", borderRadius: "12px", font: "inherit", fontSize: "13px", fontWeight: "600", color: "#1c1714" }}>
<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M7 4v16M3.5 16.5 7 20l3.5-3.5" /><path d="M17 20V4M13.5 7.5 17 4l3.5 3.5" /></svg>{vm.sortShort}</button>
{(vm.sortOpen) && (<>
<div role="listbox" style={{ position: "absolute", top: "48px", right: "0", width: "196px", zIndex: "40", background: "#fff", border: "1px solid #e2d8c7", borderRadius: "14px", boxShadow: "0 14px 32px rgba(28,23,20,0.16)", overflow: "hidden", padding: "4px" }}>
{(vm.sorts || []).map((o: any, _i1: number) => (<Fragment key={_i1}>
<button type="button" role="option" aria-selected={o.on} onClick={o.pick} style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", textAlign: "left", height: "44px", padding: "0 12px", border: "0", borderRadius: "10px", background: `${o.bg}`, font: "inherit", fontSize: "14px", color: `${o.fg}`, fontWeight: `${o.fw}` }}>{o.label}<span aria-hidden="true">{o.tick}</span></button>
</Fragment>))}
</div>
</>)}
</div>
<button type="button" onClick={vm.openSheet} aria-label="Mở bộ lọc" style={{ position: "relative", height: "42px", display: "flex", alignItems: "center", gap: "6px", padding: "0 12px", background: `${vm.fBg}`, border: `1px solid ${vm.fBd}`, borderRadius: "12px", font: "inherit", fontSize: "13px", fontWeight: "600", color: `${vm.fFg}` }}>
<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 6h16M7 12h10M10 18h4" /></svg>Lọc
{(vm.hasFilter) && (<><span style={{ minWidth: "18px", height: "18px", padding: "0 5px", boxSizing: "border-box", borderRadius: "999px", background: "#fff", color: "#b0471a", fontSize: "11px", fontWeight: "800", display: "flex", alignItems: "center", justifyContent: "center" }}>{vm.nActive}</span></>)}
</button>
</div>
</div>
{(vm.hasFilter) && (<>
<div className="jg-chips" style={{ display: "flex", gap: "8px", overflowX: "auto", padding: "0 16px 14px" }}>
{(vm.chips || []).map((c: any, _i2: number) => (<Fragment key={_i2}>
<button type="button" onClick={c.remove} aria-label={c.aria} style={{ flex: "none", display: "inline-flex", alignItems: "center", gap: "4px", height: "32px", padding: "0 6px 0 12px", borderRadius: "999px", border: "0", background: "#fbe9dd", color: "#8a3612", font: "inherit", fontSize: "13px", fontWeight: "600", whiteSpace: "nowrap" }}>{c.label}<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18" /></svg></button>
</Fragment>))}
<button type="button" onClick={vm.clearAll} style={{ flex: "none", height: "32px", padding: "0 8px", border: "0", background: "none", font: "inherit", fontSize: "13px", fontWeight: "600", color: "#6b6157", textDecoration: "underline", whiteSpace: "nowrap" }}>Xoá tất cả</button>
</div>
</>)}
{(vm.empty) && (<>
<div style={{ margin: "0 16px 24px", padding: "40px 20px", textAlign: "center", background: "#fbf8f2", border: "1px dashed #e2d8c7", borderRadius: "20px", display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
<strong className="jg-d" style={{ fontSize: "18px" }}>{vm.emptyTitle}</strong>
<span style={{ color: "#6b6157", fontSize: "14px", lineHeight: "1.5" }}>{vm.emptyText}</span>
<button type="button" onClick={vm.clearAll} style={{ marginTop: "4px", padding: "12px 20px", borderRadius: "999px", border: "1px solid #e2d8c7", background: "#fff", font: "inherit", fontWeight: "600" }}>Xoá bộ lọc</button>
</div>
</>)}
{(vm.sheet) && (<>
<div style={{ position: "fixed", inset: "0", zIndex: "100" }}>
<button type="button" onClick={vm.closeSheet} aria-label="Đóng bộ lọc" style={{ position: "absolute", inset: "0", width: "100%", border: "0", padding: "0", background: "rgba(28,23,20,0.45)", animation: "jgfade .2s ease" }}></button>
<div style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "min(100vh, 844px)", display: "flex", flexDirection: "column", justifyContent: "flex-end", pointerEvents: "none" }}>
<div role="dialog" aria-modal="true" aria-label="Bộ lọc" style={{ pointerEvents: "auto", position: "relative", maxHeight: "calc(min(100vh, 844px) - 56px)", display: "flex", flexDirection: "column", background: "#fbf8f2", borderRadius: "22px 22px 0 0", boxShadow: "0 -12px 40px rgba(28,23,20,0.2)", animation: "jgup .28s cubic-bezier(.2,.8,.2,1)" }}>
<div style={{ display: "flex", justifyContent: "center", paddingTop: "8px" }}><span style={{ width: "40px", height: "4px", borderRadius: "999px", background: "#d4c8b4" }}></span></div>
<div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 16px 14px", borderBottom: "1px solid #e2d8c7" }}>
<strong style={{ fontSize: "17px" }}>Bộ lọc</strong>
<button type="button" onClick={vm.closeSheet} aria-label="Đóng" style={{ width: "36px", height: "36px", borderRadius: "999px", border: "1px solid #e2d8c7", background: "#fff", display: "flex", alignItems: "center", justifyContent: "center" }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1c1714" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18" /></svg></button>
</div>
<div style={{ overflowY: "auto", padding: "4px 8px 8px" }}>
<fieldset aria-label="Danh mục" style={{ margin: "0", padding: "14px 8px 10px", border: "0", borderBottom: "1px solid #ebe2d3" }}>
<div className="jg-flt" aria-hidden="true">Danh mục</div>
{(vm.types || []).map((o: any, _i3: number) => (<Fragment key={_i3}>
<label className="jg-ck"><input type="checkbox" checked={o.on} onChange={o.toggle} /><span className="jg-box" aria-hidden="true"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg></span><span>{o.label}</span><span className="n">{o.n}</span></label>
</Fragment>))}
</fieldset>
<fieldset aria-label="Thương hiệu" style={{ margin: "0", padding: "14px 8px 10px", border: "0", borderBottom: "1px solid #ebe2d3" }}>
<div className="jg-flt" aria-hidden="true">Thương hiệu</div>
<div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", columnGap: "8px" }}>
{(vm.brands || []).map((o: any, _i4: number) => (<Fragment key={_i4}>
<label className="jg-ck"><input type="checkbox" checked={o.on} onChange={o.toggle} /><span className="jg-box" aria-hidden="true"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg></span><span>{o.label}</span><span className="n">{o.n}</span></label>
</Fragment>))}
</div>
</fieldset>
<fieldset aria-label="Khoảng giá" style={{ margin: "0", padding: "14px 8px 12px", border: "0" }}>
<div className="jg-flt" aria-hidden="true">Khoảng giá</div>
{(vm.prices || []).map((o: any, _i5: number) => (<Fragment key={_i5}>
<label className="jg-ck"><input type="checkbox" checked={o.on} onChange={o.toggle} /><span className="jg-box" aria-hidden="true"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg></span><span>{o.label}</span><span className="n">{o.n}</span></label>
</Fragment>))}
<div style={{ padding: "10px 8px 0", display: "flex", flexDirection: "column", gap: "8px" }}>
<span style={{ fontSize: "12.5px", color: "#6b6157" }}>Hoặc nhập khoảng (triệu đồng)</span>
<div style={{ display: "grid", gridTemplateColumns: "1fr 14px 1fr", gap: "6px", alignItems: "center" }}>
<input className="jg-pin" type="number" min="0" inputMode="numeric" aria-label="Giá từ (triệu đồng)" placeholder="Từ" value={vm.minV} onChange={vm.setMin} />
<span style={{ textAlign: "center", color: "#8f8477" }}>–</span>
<input className="jg-pin" type="number" min="0" inputMode="numeric" aria-label="Giá đến (triệu đồng)" placeholder="Đến" value={vm.maxV} onChange={vm.setMax} />
</div>
</div>
</fieldset>
</div>
<div style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: "10px", padding: "12px 16px 16px", borderTop: "1px solid #e2d8c7", background: "#fbf8f2" }}>
<button type="button" onClick={vm.clearAll} style={{ height: "48px", borderRadius: "999px", border: "1px solid #e2d8c7", background: "#fff", font: "inherit", fontSize: "15px", fontWeight: "600", color: "#1c1714" }}>Xoá tất cả</button>
<button type="button" onClick={vm.closeSheet} style={{ height: "48px", borderRadius: "999px", border: "0", background: "#b0471a", font: "inherit", fontSize: "15px", fontWeight: "600", color: "#fff" }}>Xem {vm.count} kết quả</button>
</div>
</div>
</div>
</div>
</>)}
<section style={{ padding: "0 16px 64px", display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", columnGap: "12px", rowGap: "24px" }}>
{(vm.items || []).map((it: any, _i6: number) => (<Fragment key={_i6}>
<Card item={it} onPick={vm.openP} compact={vm.yes} />
</Fragment>))}
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
