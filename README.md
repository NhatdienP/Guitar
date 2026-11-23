# J.guitar — website (Next.js)

Giao diện website J.guitar, code lại từ 2 file prototype `web-prototype.html` và `mobile-prototype.html`.

## Chạy thử

```bash
npm install
npm run dev
```

Mở http://localhost:3000.

## Các trang

| Đường dẫn | Trang |
| --- | --- |
| `/` | Trang chủ: hero, danh mục, slider "Đàn mới về", lý do chọn shop, FAQ, showroom |
| `/san-pham` | Danh sách đàn: bộ lọc (loại, hãng, khoảng giá), sắp xếp, tìm kiếm. Nhận `?loai=Acoustic` và `?q=yamaha` |
| `/san-pham/[id]` | Chi tiết đàn, thông số, form đặt hàng (COD), đàn tương tự. Build sẵn tĩnh cho cả 44 cây |
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
  lib/data.ts          dữ liệu 44 cây đàn, FAQ, thương hiệu, đường dẫn ảnh
public/images/         ảnh lấy từ prototype
```

## Việc còn để ngỏ

- Form đặt hàng mới chỉ kiểm tra dữ liệu và hiện thông báo thành công, chưa gửi đi đâu (`TODO` trong `src/screens/DetailScreen.tsx`).
- Địa chỉ, hotline, ảnh (Pexels) vẫn là nội dung mẫu của design.
- Danh mục "Phụ kiện" chưa có sản phẩm, trang hiện thông báo "đang cập nhật" như design.
