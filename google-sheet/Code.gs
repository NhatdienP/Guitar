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

    var lock = LockService.getScriptLock();
    lock.waitLock(10000);
    try {
      var sh = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(ORDER_SHEET);
      if (!sh) { setup(); sh = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(ORDER_SHEET); }
      sh.appendRow([
        new Date(),
        safe_(name),
        "'" + phone,
        safe_(clean_(o.guitar, 200)),
        safe_(clean_(o.productId, 120)),
        safe_(clean_(o.qty, 10) || '1'),
        safe_(clean_(o.ship, 60)),
        safe_(clean_(o.addr, 300)),
        safe_(clean_(o.note, 1000)),
        'Mới',
      ]);
    } finally {
      lock.releaseLock();
    }

    var to = getNotifyEmail_();
    if (to) {
      MailApp.sendEmail(to, 'J.guitar – Đơn mới: ' + clean_(o.guitar, 200),
        'Khách: ' + name + '\nSĐT: ' + phone + '\nĐàn: ' + clean_(o.guitar, 200) +
        '\nSố lượng: ' + (clean_(o.qty, 10) || '1') + '\nNhận: ' + clean_(o.ship, 60) +
        '\nĐịa chỉ: ' + clean_(o.addr, 300) + '\nGhi chú: ' + clean_(o.note, 1000));
    }
    return json_({ ok: true });
  } catch (err) {
    return json_({ ok: false, error: String(err && err.message ? err.message : err) });
  }
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
