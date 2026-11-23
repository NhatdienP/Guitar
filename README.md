# J.guitar — website (Next.js)

Giao diện website J.guitar, code lại từ 2 file prototype `web-prototype.html` và `mobile-prototype.html`.

## Chạy thử

```bash
npm install
npm run dev
```

Mở http://localhost:3000.

## Dữ liệu: Google Sheet

Sản phẩm (tab `SanPham`) và đơn đặt hàng (tab `DonHang`) nằm trong một Google Sheet, nối qua Apps Script.
Hướng dẫn cài đặt và sử dụng: [google-sheet/HUONG-DAN.md](google-sheet/HUONG-DAN.md).

- Biến môi trường: `SHEET_API_URL`, `SHEET_SECRET` (mẫu ở `.env.example`).
- Trang sản phẩm tự cập nhật từ Sheet mỗi 60 giây (ISR). Chưa cấu hình Sheet thì web dùng 44 cây đàn mẫu trong `src/lib/data.ts`.
- Form đặt hàng gửi về `POST /api/dat-hang`, API này ghi vào Sheet (URL và mã bí mật chỉ nằm trên server).

## Các trang

| Đường dẫn | Trang |
| --- | --- |
| `/` | Trang chủ: hero, danh mục, slider "Đàn mới về", lý do chọn shop, FAQ, showroom |
| `/san-pham` | Danh sách đàn: bộ lọc (loại, hãng, khoảng giá), sắp xếp, tìm kiếm. Nhận `?loai=Acoustic` và `?q=yamaha` |
| `/san-pham/[id]` | Chi tiết đàn, thông số, form đặt hàng (COD), đàn tương tự. Đàn mới thêm trong Sheet có trang ngay ở lượt xem đầu |
| `/gioi-thieu` | Giới thiệu |
| `/lien-he` | Liên hệ |

## Responsive

Design có 2 layout riêng: desktop và điện thoại. Mỗi trang render cả hai và CSS chỉ hiện một:

- rộng ≥ 1100px → layout desktop (`.v-web`)
- rộng < 1100px → layout mobile (`.v-mob`, có thanh tab dưới đáy)

Muốn đổi ngưỡng thì sửa `src/app/globals.css`.

## Cấu trúc

```
src/
  app/                 routes (App Router), globals.css, prototype.css (CSS hover/focus lấy từ design)
  screens/             logic từng trang: state slider, FAQ, bộ lọc, form đặt hàng
  views/web, views/mob markup + style chuyển từ prototype (mỗi view nhận một object `vm`)
  components/          Header, MHeader, Footer, MFooter, Card
  app/api/dat-hang/    API nhận đơn đặt hàng → Google Sheet
  lib/products.ts      đọc sản phẩm từ Google Sheet
  lib/data.ts          dữ liệu dự phòng (44 cây đàn mẫu), FAQ, đường dẫn ảnh
public/images/         ảnh lấy từ prototype
google-sheet/          Code.gs (Apps Script), SanPham.csv (dữ liệu để import), HUONG-DAN.md
```

## Việc còn để ngỏ

- Địa chỉ, hotline, ảnh (Pexels) vẫn là nội dung mẫu của design.
- Danh mục "Phụ kiện" chưa có sản phẩm, trang hiện thông báo "đang cập nhật" như design.
