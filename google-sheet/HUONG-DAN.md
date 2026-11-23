# Quản lý sản phẩm & đơn hàng bằng Google Sheet

Website đọc danh sách đàn từ tab **SanPham** và ghi đơn đặt hàng vào tab **DonHang** của một Google Sheet.
Bạn thêm / sửa / ẩn / xoá đàn ngay trong Sheet; web tự cập nhật sau khoảng 1 phút, không cần deploy lại.

## Cài đặt lần đầu (~10 phút)

### 1. Tạo Sheet và nhập 44 cây đàn có sẵn
1. Vào https://sheets.new để tạo Google Sheet mới, đặt tên ví dụ **J.guitar – Dữ liệu web**.
2. **File → Import → Upload**, chọn file [`SanPham.csv`](SanPham.csv) trong thư mục này.
3. Ở hộp thoại: *Import location* chọn **Insert new sheet(s)**, *Separator type* để **Detect automatically**, bấm **Import data**.
4. Kiểm tra tab mới có tên đúng là **`SanPham`** (đổi tên nếu khác). Tab `Sheet1` trống có thể xoá.

### 2. Dán Apps Script
1. Trong Sheet: **Extensions → Apps Script**.
2. Xoá hết code mẫu trong `Code.gs`, dán toàn bộ nội dung file [`Code.gs`](Code.gs) vào, bấm 💾 **Save**.
3. Bấm ⚙️ **Project Settings** (cột trái) → kéo xuống **Script Properties** → **Add script property**:
   - Property: `SECRET` — Value: một chuỗi ngẫu nhiên dài. Tạo bằng lệnh `openssl rand -hex 24` trong Terminal, hoặc gõ bừa ~40 ký tự chữ + số. **Giữ chuỗi này, bước 4 cần dùng lại.**
   - (Tuỳ chọn) Property: `NOTIFY_EMAIL` — Value: email muốn nhận thông báo mỗi khi có đơn mới.
     Email có số đơn, thông tin khách, nút **Gọi khách**, **Nhắn Zalo**, **Mở bảng đơn hàng**, **Xem đàn trên web**.
     Muốn gửi cho nhiều người thì ngăn cách bằng dấu phẩy.
   - (Tuỳ chọn) Property: `SITE_URL` — địa chỉ website (mặc định `https://guitar-psi-eight.vercel.app`), dùng cho nút "Xem đàn trên web". Đổi khi có tên miền riêng.
   - Bấm **Save script properties**.
4. Quay lại **Editor** (biểu tượng `< >`), ở thanh trên chọn hàm **`setup`** → bấm ▶ **Run**.
   Google sẽ hỏi quyền: **Review permissions** → chọn tài khoản → *Advanced* → *Go to … (unsafe)* → **Allow**.
   (Cảnh báo "unsafe" là bình thường với script tự viết.) Chạy xong, Sheet có thêm tab **DonHang**.

### 3. Deploy thành Web app
1. **Deploy → New deployment** → bấm ⚙️ cạnh *Select type* → **Web app**.
2. *Execute as*: **Me**. *Who has access*: **Anyone**. Bấm **Deploy**.
3. Copy **Web app URL** (dạng `https://script.google.com/macros/s/…/exec`).
4. Kiểm tra: mở URL đó trên trình duyệt, phải thấy chữ `{"ok":true,"products":[…`.

### 4. Khai báo cho Vercel
1. Vào project trên vercel.com → **Settings → Environment Variables**, thêm 2 biến (Environment: chọn cả Production, Preview):
   | Key | Value |
   | --- | --- |
   | `SHEET_API_URL` | Web app URL ở bước 3 |
   | `SHEET_SECRET` | chuỗi `SECRET` ở bước 2 |
2. **Deployments** → bản mới nhất → ⋯ → **Redeploy**.
3. Thử đặt một đơn trên web → kiểm tra tab **DonHang** có dòng mới.

> Chạy thử trên máy: tạo file `.env.local` (đã có mẫu ở `.env.example`) với 2 biến trên rồi `npm run dev`.

## Sử dụng hằng ngày

### Tab SanPham — mỗi dòng là 1 cây đàn
Thứ tự dòng = thứ tự **"Mới về"** trên web (dòng trên cùng là mới nhất, 12 dòng đầu hiện ở trang chủ).

| Cột | Bắt buộc | Ghi chú |
| --- | --- | --- |
| `id` | không | Đường dẫn trang đàn (`/san-pham/<id>`). Để trống thì web tự tạo từ tên. **Đừng đổi id của đàn đã đăng** (link cũ sẽ hỏng). |
| `ten` | **có** | Tên đàn |
| `hang` | nên có | Thương hiệu — dùng cho bộ lọc |
| `loai` | nên có | `Acoustic`, `Classic` hoặc `Phụ kiện` |
| `gia` | **có** | Số tiền, ví dụ `4300000` hoặc `4.300.000` |
| `mo_ta_ngan` | | 1 dòng dưới tên ở thẻ sản phẩm |
| `mo_ta` | | Đoạn "Âm thanh & cảm giác chơi" ở trang chi tiết |
| `anh` | nên có | Link ảnh (xem bên dưới). **Nhiều ảnh: cách nhau bằng dấu phẩy**, ảnh đầu là ảnh chính. Trống thì hiện ảnh mặc định |
| `dang_dan` … `hoan_thien` | | 6 ô bảng thông số kỹ thuật; ô trống sẽ bị ẩn |
| `diem_noi_bat` | | Các nhãn cách nhau bởi dấu `\|`, ví dụ `Mặt gỗ nguyên tấm \| Có EQ` |
| `hien_thi` | | `FALSE` để tạm ẩn đàn (đã bán, đang sửa…). Trống hoặc `TRUE` = hiện |

- **Thêm đàn:** chèn 1 dòng mới (ở trên cùng nếu là đàn mới về), điền các cột.
- **Sửa giá / mô tả:** sửa trực tiếp ô đó.
- **Ẩn tạm:** đặt `hien_thi` = `FALSE`. **Xoá hẳn:** xoá dòng.
- Thay đổi lên web sau **khoảng 1 phút** (lượt xem đầu tiên sau 1 phút sẽ kích hoạt cập nhật, lượt sau thấy dữ liệu mới).
- **Không đổi tên các cột ở dòng 1** — web dựa vào tên cột để đọc.

### Ảnh sản phẩm
- **Google Drive:** tải ảnh lên Drive → chuột phải → **Share** → *General access*: **Anyone with the link** → **Copy link** → dán vào cột `anh`. Web tự chuyển link Drive thành ảnh.
- Hoặc dán bất kỳ link ảnh công khai nào (`https://…jpg`).
- Ảnh có sẵn của 44 cây đàn mẫu nằm trong website (dạng `/images/…`), giữ nguyên là được.
- Nên dùng ảnh dọc tỉ lệ 3:4, rộng khoảng 1200px.
- **Nhiều ảnh cho 1 cây đàn:** dán các link cách nhau bằng dấu phẩy, ví dụ
  `https://drive.google.com/file/d/AAA/view, https://drive.google.com/file/d/BBB/view`.
  Ảnh đầu tiên hiện ở thẻ sản phẩm; trang chi tiết có bộ ảnh (bấm ảnh nhỏ / vuốt trên điện thoại / bấm ảnh lớn để xem toàn màn hình).
  Ảnh nào hỏng link hoặc chưa bật chia sẻ sẽ tự bị bỏ qua.

### Tab DonHang — đơn từ website
Mỗi đơn là 1 dòng: thời gian, họ tên, SĐT, cây đàn, mã đàn, số lượng, hình thức nhận, địa chỉ, ghi chú, **Trạng thái** (`Mới`).
Cột Trạng thái để bạn tự cập nhật (Đã gọi, Đã giao, Huỷ…). Có thể thêm cột riêng ở bên phải, nhưng **đừng chèn cột vào giữa**.

## Khi sửa code Apps Script
Sửa xong phải **Deploy → Manage deployments → ✏️ Edit → Version: New version → Deploy**, nếu không web vẫn chạy bản cũ. URL giữ nguyên.

## Gặp lỗi
- **Web không đổi sau khi sửa Sheet:** đợi 1–2 phút rồi tải lại trang 2 lần. Mở Web app URL xem có trả `"ok":true` không.
- **Khách báo không gửi được đơn:** kiểm tra `SHEET_SECRET` trên Vercel trùng với `SECRET` trong Script Properties, và đã Redeploy sau khi thêm biến.
- **Sheet lỗi / Google gián đoạn:** web vẫn hiện danh sách đàn lần cập nhật thành công gần nhất; form đặt hàng báo khách gọi hotline / Zalo.
