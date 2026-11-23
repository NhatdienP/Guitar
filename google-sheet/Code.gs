/**
 * J.guitar – Google Sheet làm "database" cho website.
 *
 * Dán toàn bộ file này vào Extensions → Apps Script của Google Sheet, rồi Deploy → Web app
 * (Execute as: Me, Who has access: Anyone). Xem google-sheet/HUONG-DAN.md.
 *
 *   GET  <web app url>            → { ok, products: [...] }   (website đọc danh sách đàn)
 *   POST <web app url>  JSON body → ghi 1 dòng vào tab DonHang (website gửi đơn đặt hàng)
 */

// Mã bí mật: website phải gửi kèm mã này khi ghi đơn. Đặt trong Project Settings → Script Properties
// với tên SECRET (đừng sửa trực tiếp ở đây).
function getSecret_() {
  return PropertiesService.getScriptProperties().getProperty('SECRET') || '';
}

// (Tuỳ chọn) Email nhận thông báo khi có đơn mới. Để trống nếu không cần.
// Đặt trong Script Properties với tên NOTIFY_EMAIL.
function getNotifyEmail_() {
  return PropertiesService.getScriptProperties().getProperty('NOTIFY_EMAIL') || '';
}

var PRODUCT_SHEET = 'SanPham';
var ORDER_SHEET = 'DonHang';
var ORDER_HEADERS = [
  'Thời gian', 'Họ và tên', 'Số điện thoại', 'Cây đàn', 'Mã đàn', 'Số lượng',
  'Hình thức nhận', 'Địa chỉ', 'Ghi chú', 'Trạng thái',
];

/** Chạy 1 lần (nút Run) để tạo tab DonHang và dòng tiêu đề. */
function setup() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sh = ss.getSheetByName(ORDER_SHEET) || ss.insertSheet(ORDER_SHEET);
  if (sh.getLastRow() === 0) {
    sh.appendRow(ORDER_HEADERS);
    sh.getRange(1, 1, 1, ORDER_HEADERS.length).setFontWeight('bold');
    sh.setFrozenRows(1);
    sh.getRange('C:C').setNumberFormat('@'); // giữ số 0 đầu số điện thoại
  }
  if (!ss.getSheetByName(PRODUCT_SHEET)) {
    throw new Error('Chưa có tab "' + PRODUCT_SHEET + '". Hãy import file SanPham.csv và đổi tên tab thành SanPham.');
  }
}

function doGet() {
  try {
    return json_({ ok: true, products: readProducts_() });
  } catch (err) {
    return json_({ ok: false, error: String(err && err.message ? err.message : err) });
  }
}

function doPost(e) {
  try {
    var body = JSON.parse((e && e.postData && e.postData.contents) || '{}');
    var secret = getSecret_();
    if (!secret || body.secret !== secret) return json_({ ok: false, error: 'unauthorized' });

    var o = body.order || {};
    var name = clean_(o.name, 120);
    var phone = clean_(o.phone, 20).replace(/\s/g, '');
    if (!name || !/^0\d{9}$/.test(phone) || !clean_(o.guitar, 200) || !clean_(o.ship, 60)) {
      return json_({ ok: false, error: 'invalid' });
    }

    var order = {
      time: new Date(),
      name: name,
      phone: phone,
      guitar: clean_(o.guitar, 200),
      productId: clean_(o.productId, 120),
      qty: clean_(o.qty, 10) || '1',
      ship: clean_(o.ship, 60),
      addr: clean_(o.addr, 300),
      note: clean_(o.note, 1000),
    };

    var lock = LockService.getScriptLock();
    lock.waitLock(10000);
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    try {
      var sh = ss.getSheetByName(ORDER_SHEET);
      if (!sh) { setup(); sh = ss.getSheetByName(ORDER_SHEET); }
      sh.appendRow([
        order.time,
        safe_(order.name),
        "'" + order.phone,
        safe_(order.guitar),
        safe_(order.productId),
        safe_(order.qty),
        safe_(order.ship),
        safe_(order.addr),
        safe_(order.note),
        'Mới',
      ]);
      order.no = sh.getLastRow() - 1; // số thứ tự đơn = dòng trong tab DonHang (trừ dòng tiêu đề)
      sortOrders_(sh); // đơn mới lên đầu
    } finally {
      lock.releaseLock();
    }

    // Đơn đã được lưu; lỗi gửi mail không được làm khách tưởng đặt hàng thất bại.
    var to = getNotifyEmail_();
    if (to) {
      try {
        sendOrderEmail_(to, order, ss.getUrl() + '#gid=' + sh.getSheetId());
      } catch (mailErr) {
        console.error('Gửi email thông báo thất bại: ' + mailErr);
      }
    }
    return json_({ ok: true });
  } catch (err) {
    return json_({ ok: false, error: String(err && err.message ? err.message : err) });
  }
}

// ---------------------------------------------------------------------------
// Sắp xếp tab DonHang: theo trạng thái (Mới → Đã gọi xác nhận → Đang giao → Hoàn thành → Huỷ),
// trong mỗi trạng thái đơn mới nhất ở trên. Chạy khi có đơn mới và khi sửa cột Trạng thái / Thời gian.
// ---------------------------------------------------------------------------
var STATUS_ORDER = ['Mới', 'Đã gọi xác nhận', 'Đang giao', 'Hoàn thành', 'Huỷ'];

function statusRank_(s) {
  var i = STATUS_ORDER.indexOf(String(s == null ? '' : s).trim());
  return i < 0 ? 2.5 : i; // trạng thái lạ: xếp sau "Đang giao", trước "Hoàn thành"
}

function sortOrders_(sh) {
  var n = sh.getLastRow() - 1;
  if (n < 2) return;
  var width = ORDER_HEADERS.length;      // A:J
  var statusCol = width;                 // J = Trạng thái
  var keyCol = width + 1;                // K = cột phụ tạm để sắp xếp, xoá ngay sau đó
  var statuses = sh.getRange(2, statusCol, n, 1).getValues();
  var key = sh.getRange(2, keyCol, n, 1);
  key.setValues(statuses.map(function (r) { return [statusRank_(r[0])]; }));
  sh.getRange(2, 1, n, keyCol).sort([{ column: keyCol, ascending: true }, { column: 1, ascending: false }]);
  key.clearContent();
}

/** Tự chạy khi bạn sửa Sheet: đổi Trạng thái hoặc Thời gian của một đơn thì bảng tự sắp xếp lại. */
function onEdit(e) {
  try {
    var sh = e && e.range && e.range.getSheet();
    if (!sh || sh.getName() !== ORDER_SHEET || e.range.getRow() < 2) return;
    var c1 = e.range.getColumn(), c2 = e.range.getLastColumn();
    if (c1 <= ORDER_HEADERS.length && c2 >= ORDER_HEADERS.length || c1 === 1) {
      var lock = LockService.getScriptLock();
      if (!lock.tryLock(5000)) return;
      try { sortOrders_(sh); } finally { lock.releaseLock(); }
    }
  } catch (err) {
    console.error('onEdit sort: ' + err);
  }
}

/** Chạy tay (nút Run) để sắp xếp lại toàn bộ bảng đơn hàng ngay. */
function sortOrdersNow() {
  sortOrders_(SpreadsheetApp.getActiveSpreadsheet().getSheetByName(ORDER_SHEET));
}

/** Đọc tab SanPham: dòng 1 là tiêu đề (id, ten, hang, ...), mỗi dòng sau là 1 cây đàn. */
function readProducts_() {
  var sh = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(PRODUCT_SHEET);
  if (!sh) throw new Error('Không tìm thấy tab ' + PRODUCT_SHEET);
  var values = sh.getDataRange().getValues();
  if (values.length < 2) return [];
  var headers = values[0].map(function (h) { return String(h).trim().toLowerCase(); });
  var out = [];
  for (var r = 1; r < values.length; r++) {
    var row = {};
    var empty = true;
    for (var c = 0; c < headers.length; c++) {
      if (!headers[c]) continue;
      var v = values[r][c];
      if (v instanceof Date) v = v.toISOString();
      row[headers[c]] = v;
      if (v !== '' && v !== null) empty = false;
    }
    if (!empty) out.push(row);
  }
  return out;
}

// ---------------------------------------------------------------------------
// Email thông báo đơn mới
// ---------------------------------------------------------------------------

// Địa chỉ website, dùng cho link "Xem đàn trên web". Có thể đổi bằng Script Property SITE_URL.
function getSiteUrl_() {
  return (PropertiesService.getScriptProperties().getProperty('SITE_URL') || 'https://guitar-psi-eight.vercel.app').replace(/\/+$/, '');
}

function sendOrderEmail_(to, order, sheetUrl) {
  // "Classic · Matsuoka C-40 4/4 – 4.300.000đ" → loại, tên đàn, giá
  var m = order.guitar.match(/^(.+?) · (.+) – ([\d.]+đ)$/);
  var type = m ? m[1] : '';
  var title = m ? m[2] : order.guitar;
  var price = m ? m[3] : '';
  var phoneText = order.phone.replace(/^(\d{4})(\d{3})(\d{3})$/, '$1 $2 $3');
  var when = Utilities.formatDate(order.time, 'Asia/Ho_Chi_Minh', 'HH:mm · dd/MM/yyyy');
  var productUrl = order.productId ? getSiteUrl_() + '/san-pham/' + encodeURIComponent(order.productId) : '';
  var shop = order.ship.indexOf('showroom') >= 0;

  var subject = 'Đơn mới #' + order.no + ' · ' + title + ' · ' + order.name;

  var C = { ink: '#1c1714', muted: '#74695d', line: '#e8dfd1', bg: '#f4eee3', card: '#fbf8f2', brand: '#b0471a', zalo: '#0068ff' };
  var row = function (label, value) {
    return '<tr><td style="padding:10px 0;border-bottom:1px solid ' + C.line + ';color:' + C.muted + ';font-size:13px;width:120px;vertical-align:top">' + label +
      '</td><td style="padding:10px 0;border-bottom:1px solid ' + C.line + ';color:' + C.ink + ';font-size:15px;vertical-align:top">' + value + '</td></tr>';
  };
  var button = function (href, text, bg, fg, border) {
    return '<a href="' + esc_(href) + '" style="display:inline-block;margin:0 8px 8px 0;padding:11px 18px;border-radius:999px;background:' + bg + ';color:' + fg +
      ';border:1px solid ' + (border || bg) + ';font-size:14px;font-weight:700;text-decoration:none">' + text + '</a>';
  };
  var dash = '<span style="color:' + C.muted + '">—</span>';

  var html =
    '<div style="margin:0;padding:24px 12px;background:' + C.bg + ';font-family:-apple-system,BlinkMacSystemFont,\'Segoe UI\',Roboto,Arial,sans-serif">' +
    '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;margin:0 auto;background:' + C.card + ';border:1px solid ' + C.line + ';border-radius:16px;overflow:hidden">' +
    // header
    '<tr><td style="background:' + C.ink + ';padding:18px 24px">' +
      '<div style="color:#f4eee3;font-size:13px;letter-spacing:.12em;text-transform:uppercase;font-weight:700">J.guitar · Đơn đặt hàng mới</div>' +
      '<div style="color:#c2b2a1;font-size:13px;margin-top:4px">Đơn #' + order.no + ' · ' + when + '</div>' +
    '</td></tr>' +
    // guitar
    '<tr><td style="padding:22px 24px 6px">' +
      (type ? '<div style="display:inline-block;padding:4px 10px;border-radius:999px;background:#fbe9dd;color:' + C.brand + ';font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase">' + esc_(type) + '</div>' : '') +
      '<div style="margin-top:10px;color:' + C.ink + ';font-size:22px;font-weight:800;line-height:1.25">' + esc_(title) + '</div>' +
      '<div style="margin-top:4px;color:' + C.brand + ';font-size:20px;font-weight:800">' + esc_(price) +
        (order.qty !== '1' ? ' <span style="color:' + C.muted + ';font-size:14px;font-weight:600">× ' + esc_(order.qty) + '</span>' : '') + '</div>' +
    '</td></tr>' +
    // details
    '<tr><td style="padding:10px 24px 4px"><table role="presentation" width="100%" cellpadding="0" cellspacing="0">' +
      row('Khách hàng', '<b>' + esc_(order.name) + '</b>') +
      row('Điện thoại', '<a href="tel:' + order.phone + '" style="color:' + C.ink + ';font-weight:700;text-decoration:none">' + phoneText + '</a>') +
      row('Số lượng', esc_(order.qty)) +
      row('Nhận hàng', esc_(order.ship)) +
      row('Địa chỉ', order.addr ? esc_(order.addr) : (shop ? '<span style="color:' + C.muted + '">Khách đến showroom</span>' : dash)) +
      row('Ghi chú', order.note ? esc_(order.note).replace(/\n/g, '<br>') : dash) +
    '</table></td></tr>' +
    // actions
    '<tr><td style="padding:18px 24px 14px">' +
      button('tel:' + order.phone, 'Gọi khách', C.brand, '#ffffff') +
      button('https://zalo.me/' + order.phone, 'Nhắn Zalo', C.zalo, '#ffffff') +
      button(sheetUrl, 'Mở bảng đơn hàng', '#ffffff', C.ink, C.line) +
      (productUrl ? button(productUrl, 'Xem đàn trên web', '#ffffff', C.ink, C.line) : '') +
    '</td></tr>' +
    '<tr><td style="padding:14px 24px 20px;border-top:1px solid ' + C.line + ';color:' + C.muted + ';font-size:12px;line-height:1.5">' +
      'Gọi xác nhận cho khách trong 15 phút như cam kết trên web. Cập nhật cột <b>Trạng thái</b> trong bảng đơn hàng sau khi xử lý.' +
    '</td></tr>' +
    '</table></div>';

  var text =
    'J.GUITAR – ĐƠN MỚI #' + order.no + ' (' + when + ')\n\n' +
    'Đàn:        ' + title + (price ? ' – ' + price : '') + '\n' +
    'Số lượng:   ' + order.qty + '\n\n' +
    'Khách:      ' + order.name + '\n' +
    'Điện thoại: ' + phoneText + '\n' +
    'Nhận hàng:  ' + order.ship + '\n' +
    'Địa chỉ:    ' + (order.addr || (shop ? 'Khách đến showroom' : '—')) + '\n' +
    'Ghi chú:    ' + (order.note || '—') + '\n\n' +
    'Bảng đơn hàng: ' + sheetUrl + '\n' + (productUrl ? 'Xem đàn: ' + productUrl + '\n' : '');

  MailApp.sendEmail({ to: to, subject: subject, body: text, htmlBody: html, name: 'J.guitar Website' });
}

function esc_(s) {
  return String(s == null ? '' : s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}

function clean_(v, max) {
  return String(v == null ? '' : v).trim().slice(0, max);
}

// Chặn "formula injection": nội dung khách gõ bắt đầu bằng = + - @ sẽ được ghi như chữ thường.
function safe_(s) {
  return /^[=+\-@]/.test(s) ? "'" + s : s;
}
