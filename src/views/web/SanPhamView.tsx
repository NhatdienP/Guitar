/* Auto-generated from the J.guitar prototype (SanPham.dc.html). */
/* eslint-disable @next/next/no-img-element */
import { Fragment } from 'react';
import Card from '@/components/Card';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

export default function SanPhamView({ vm }: { vm: any }) {
  return (
<>
<div style={{ fontFamily: "'Be Vietnam Pro', sans-serif", color: "#1c1714", background: "#f4eee3", minWidth: "0", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
<div style={{ display: "block", position: "sticky", top: "0", zIndex: "60" }}><Header go={vm.go} active="sp" query={vm.q} onQuery={vm.setQ} /></div>
<section style={{ padding: "32px 24px 88px" }}>
<div style={{ maxWidth: "1280px", margin: "0 auto", display: "flex", flexWrap: "wrap", alignItems: "flex-start", gap: "32px" }}>
<aside aria-label="Bộ lọc sản phẩm" style={{ flex: "0 0 252px", position: "sticky", top: "96px", boxSizing: "border-box", maxHeight: "calc(100vh - 116px)", display: "flex", flexDirection: "column", background: "#fbf8f2", border: "1px solid #e2d8c7", borderRadius: "16px", overflow: "hidden" }}>
<div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 18px", background: "#f4eee3", borderBottom: "1px solid #e2d8c7" }}>
<span style={{ display: "flex", alignItems: "center", gap: "8px", fontWeight: "700", fontSize: "15px", color: "#1c1714" }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1c1714" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 6h16M7 12h10M10 18h4" /></svg>Bộ lọc</span>
{(vm.hasFilter) && (<>
<button type="button" onClick={vm.clearAll} style={{ border: "0", background: "none", padding: "0", font: "inherit", fontSize: "13px", fontWeight: "600", color: "#b0471a", cursor: "pointer" }}>Xoá tất cả</button>
</>)}
</div>
<div className="jg-fsc" style={{ flex: "1 1 auto", minHeight: "0", overflowY: "auto", overscrollBehavior: "contain" }}>
<fieldset aria-label="Danh mục" style={{ margin: "0", padding: "16px 10px 12px", border: "0", borderBottom: "1px solid #efe6d8", display: "flex", flexDirection: "column", gap: "2px" }}>
<div className="jg-flt" aria-hidden="true">Danh mục</div>
{(vm.types || []).map((o: any, _i1: number) => (<Fragment key={_i1}>
<label className="jg-ck"><input type="checkbox" checked={o.on} onChange={o.toggle} /><span className="jg-box" aria-hidden="true"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg></span><span>{o.label}</span><span className="n">{o.n}</span></label>
</Fragment>))}
</fieldset>
<fieldset aria-label="Thương hiệu" style={{ margin: "0", padding: "16px 10px 12px", border: "0", borderBottom: "1px solid #efe6d8", display: "flex", flexDirection: "column", gap: "2px" }}>
<div className="jg-flt" aria-hidden="true">Thương hiệu</div>
{(vm.brandsShown || []).map((o: any, _i2: number) => (<Fragment key={_i2}>
<label className="jg-ck"><input type="checkbox" checked={o.on} onChange={o.toggle} /><span className="jg-box" aria-hidden="true"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg></span><span>{o.label}</span><span className="n">{o.n}</span></label>
</Fragment>))}
{(vm.canMore) && (<><button type="button" onClick={vm.toggleMore} style={{ alignSelf: "flex-start", margin: "4px 8px 0", border: "0", background: "none", padding: "0", font: "inherit", fontSize: "13px", fontWeight: "600", color: "#b0471a", cursor: "pointer" }}>{vm.moreLabel}</button></>)}
</fieldset>
<fieldset aria-label="Khoảng giá" style={{ margin: "0", padding: "16px 10px 16px", border: "0", display: "flex", flexDirection: "column", gap: "2px" }}>
<div className="jg-flt" aria-hidden="true">Khoảng giá</div>
{(vm.prices || []).map((o: any, _i3: number) => (<Fragment key={_i3}>
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
</aside>
<div style={{ flex: "999 1 560px", minWidth: "0", display: "flex", flexDirection: "column", gap: "18px" }}>
<div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "16px", minHeight: "42px", flexWrap: "wrap" }}>
<span style={{ fontSize: "14px", color: "#6b6157" }}><strong style={{ color: "#1c1714" }}>{vm.count}</strong> mẫu đàn</span>
<div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
<span id="jg-sort-l" style={{ fontSize: "14px", color: "#6b6157" }}>Sắp xếp theo:</span>
<div style={{ position: "relative", width: "200px" }}>
<button type="button" onClick={vm.toggleSort} aria-haspopup="listbox" aria-expanded={vm.sortOpen} aria-labelledby="jg-sort-l" style={{ width: "100%", height: "42px", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0 14px", background: "#fff", border: "1px solid #e2d8c7", borderRadius: "12px", font: "inherit", fontSize: "14px", fontWeight: "600", color: "#1c1714", cursor: "pointer" }}>
<span>{vm.sortLabel}</span>
<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#6b6157" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ transform: `${vm.caret}`, transition: "transform .2s" }}><path d="M6 9l6 6 6-6" /></svg>
</button>
{(vm.sortOpen) && (<>
<div role="listbox" style={{ position: "absolute", top: "48px", left: "0", right: "0", zIndex: "30", background: "#fff", border: "1px solid #e2d8c7", borderRadius: "12px", boxShadow: "0 14px 32px rgba(0,0,0,0.14)", overflow: "hidden" }}>
{(vm.sorts || []).map((o: any, _i4: number) => (<Fragment key={_i4}>
<button type="button" role="option" className="jg-opt" aria-selected={o.on} onClick={o.pick} style={{ width: "100%", textAlign: "left", height: "40px", padding: "0 14px", border: "0", background: "transparent", font: "inherit", fontSize: "14px", cursor: "pointer", color: `${o.fg}`, fontWeight: `${o.fw}` }}>{o.label}</button>
</Fragment>))}
</div>
</>)}
</div>
</div>
</div>
{(vm.hasFilter) && (<>
<div style={{ display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "center" }}>
{(vm.chips || []).map((c: any, _i5: number) => (<Fragment key={_i5}>
<button type="button" className="jg-chip" onClick={c.remove} aria-label={c.aria}>{c.label}<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18" /></svg></button>
</Fragment>))}
<button type="button" onClick={vm.clearAll} style={{ height: "32px", padding: "0 10px", border: "0", background: "none", font: "inherit", fontSize: "13px", fontWeight: "600", color: "#6b6157", textDecoration: "underline", cursor: "pointer" }}>Xoá tất cả</button>
</div>
</>)}
{(vm.empty) && (<>
<div style={{ padding: "72px 24px", textAlign: "center", background: "#fbf8f2", border: "1px dashed #e2d8c7", borderRadius: "24px", display: "flex", flexDirection: "column", alignItems: "center", gap: "12px" }}>
<strong className="jg-d" style={{ fontSize: "20px" }}>{vm.emptyTitle}</strong>
<span style={{ color: "#6b6157", fontSize: "15px" }}>{vm.emptyText}</span>
<button type="button" onClick={vm.clearAll} style={{ padding: "12px 22px", borderRadius: "999px", border: "1px solid #e2d8c7", background: "#fff", font: "inherit", fontWeight: "600", cursor: "pointer" }}>Xoá bộ lọc</button>
</div>
</>)}
<div className="jg-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))", columnGap: "20px", rowGap: "32px" }}>
{(vm.items || []).map((it: any, _i6: number) => (<Fragment key={_i6}>
<Card onPick={vm.openP} item={it} />
</Fragment>))}
</div>
</div>
</div>
</section>
<div style={{ display: "block", flex: "1 0 auto", background: "#2a1e18" }}><Footer go={vm.go} /></div>
</div>
</>
  );
}
