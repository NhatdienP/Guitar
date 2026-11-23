// Dữ liệu dự phòng: 44 cây đàn lấy từ prototype. Website đọc sản phẩm thật từ Google Sheet
// (src/lib/products.ts); danh sách này chỉ dùng khi chưa cấu hình SHEET_API_URL
// hoặc không đọc được Sheet lúc build. Thứ tự mảng = "Mới về".

export type Spec = { k: string; v: string };
export type Product = {
  id: string;
  title: string;
  brand: string;
  type: 'Acoustic' | 'Classic' | 'Phụ kiện';
  price: number;
  priceText: string;
  short: string;
  /** Main image (= imgs[0]). */
  img: string;
  /** All images, main first. */
  imgs: string[];
  desc: string;
  specs: Spec[];
  points: string[];
  rank: number;
};

const SPEC = ['Dáng đàn', 'Mặt đàn', 'Lưng và hông', 'Cần đàn', 'Pickup / EQ', 'Hoàn thiện'];

export function fmt(n: number) {
  return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, '.') + 'đ';
}

type Raw = Omit<Product, 'priceText' | 'specs' | 'rank' | 'imgs'> & { specs: string[] };

const RAW: Raw[] = [
  {
    "id": "matsuoka-c-40-4-4",
    "title": "Matsuoka C-40 4/4",
    "brand": "Matsuoka",
    "type": "Classic",
    "price": 4300000,
    "short": "Classic 4/4, mặt spruce, dây nylon.",
    "img": "/images/77679e9dba470b52fd03d095ea9442c2.jpg",
    "desc": "Matsuoka C-40 4/4: Size chuẩn người lớn, dây nylon mềm, âm ngọt tròn. Mặt spruce ép, lưng và hông Rosewood. Dây nylon mềm tay, không đau ngón, rất hợp người mới tập và nhạc cổ điển, bolero. Được setup hạ action trước khi giao.",
    "specs": [
      "Classic 4/4",
      "Spruce ép",
      "Rosewood",
      "Mahogany, phím Rosewood",
      "Không",
      "Bóng"
    ],
    "points": [
      "Giá tốt cho người mới",
      "Dây nylon mềm tay",
      "Size chuẩn"
    ]
  },
  {
    "id": "yamaha-c-30-flamenco",
    "title": "Yamaha C-30 Flamenco",
    "brand": "Yamaha",
    "type": "Classic",
    "price": 5800000,
    "short": "Flamenco, mặt spruce, dây nylon.",
    "img": "/images/988aa7c49d2b7a17a8fb3eb2a07874f1.jpg",
    "desc": "Yamaha C-30 Flamenco: Thân mỏng, action thấp, âm sáng và bật, hợp rasgueado. Mặt spruce ép, lưng và hông Cypress. Dây nylon mềm tay, không đau ngón, rất hợp người mới tập và nhạc cổ điển, bolero. Được setup hạ action trước khi giao.",
    "specs": [
      "Flamenco",
      "Spruce ép",
      "Cypress",
      "Nato, phím Rosewood",
      "Không",
      "Mờ open-pore"
    ],
    "points": [
      "Giá tốt cho người mới",
      "Dây nylon mềm tay",
      "Action thấp"
    ]
  },
  {
    "id": "matsuoka-c-20-ce",
    "title": "Matsuoka C-20 CE",
    "brand": "Matsuoka",
    "type": "Classic",
    "price": 8400000,
    "short": "Classic cutaway EQ, mặt spruce, có EQ, dây nylon.",
    "img": "/images/60099080da6d1143403792de9f336a52.jpg",
    "desc": "Matsuoka C-20 CE: Khoét eo, có EQ cắm loa, hợp biểu diễn bolero, flamenco nhẹ. Mặt spruce nguyên tấm, lưng và hông Mahogany. Dây nylon mềm tay, không đau ngón, rất hợp người mới tập và nhạc cổ điển, bolero. Được setup hạ action trước khi giao.",
    "specs": [
      "Classic cutaway EQ",
      "Spruce nguyên tấm",
      "Mahogany",
      "Cedro, phím Ebony",
      "EQ 4 band + tuner",
      "Satin"
    ],
    "points": [
      "Mặt gỗ nguyên tấm",
      "Dây nylon mềm tay",
      "Có EQ cắm loa"
    ]
  },
  {
    "id": "matsuoka-c-100-3-4",
    "title": "Matsuoka C-100 3/4",
    "brand": "Matsuoka",
    "type": "Classic",
    "price": 6000000,
    "short": "Classic 3/4, mặt cedar, dây nylon.",
    "img": "/images/537f13db190a056cc0afa2fba30ffb22.jpg",
    "desc": "Matsuoka C-100 3/4: Nhỏ gọn cho trẻ 8–12 tuổi hoặc người tay nhỏ. Mặt cedar nguyên tấm, lưng và hông Walnut. Dây nylon mềm tay, không đau ngón, rất hợp người mới tập và nhạc cổ điển, bolero. Được setup hạ action trước khi giao.",
    "specs": [
      "Classic 3/4",
      "Cedar nguyên tấm",
      "Walnut",
      "Mahogany, phím Rosewood",
      "Không",
      "Bóng"
    ],
    "points": [
      "Mặt gỗ nguyên tấm",
      "Dây nylon mềm tay",
      "Cho trẻ em"
    ]
  },
  {
    "id": "yamaha-c-80-4-4",
    "title": "Yamaha C-80 4/4",
    "brand": "Yamaha",
    "type": "Classic",
    "price": 3600000,
    "short": "Classic 4/4, mặt cedar, dây nylon.",
    "img": "/images/a24cadf0f373f40ce1334ed25075f536.jpg",
    "desc": "Yamaha C-80 4/4: Size chuẩn người lớn, dây nylon mềm, âm ngọt tròn. Mặt cedar ép, lưng và hông Cypress. Dây nylon mềm tay, không đau ngón, rất hợp người mới tập và nhạc cổ điển, bolero. Được setup hạ action trước khi giao.",
    "specs": [
      "Classic 4/4",
      "Cedar ép",
      "Cypress",
      "Nato, phím Rosewood",
      "Không",
      "Bóng gương"
    ],
    "points": [
      "Giá tốt cho người mới",
      "Dây nylon mềm tay",
      "Size chuẩn"
    ]
  },
  {
    "id": "aria-c-60-flamenco",
    "title": "Aria C-60 Flamenco",
    "brand": "Aria",
    "type": "Classic",
    "price": 6000000,
    "short": "Flamenco, mặt cedar, dây nylon.",
    "img": "/images/7bba9c90be15b22ee0568431e6ec9d51.jpg",
    "desc": "Aria C-60 Flamenco: Thân mỏng, action thấp, âm sáng và bật, hợp rasgueado. Mặt cedar ép, lưng và hông Rosewood. Dây nylon mềm tay, không đau ngón, rất hợp người mới tập và nhạc cổ điển, bolero. Được setup hạ action trước khi giao.",
    "specs": [
      "Flamenco",
      "Cedar ép",
      "Rosewood",
      "Cedro, phím Ebony",
      "Không",
      "Satin"
    ],
    "points": [
      "Giá tốt cho người mới",
      "Dây nylon mềm tay",
      "Action thấp"
    ]
  },
  {
    "id": "yukinobu-chai-c-50-ce",
    "title": "Yukinobu Chai C-50 CE",
    "brand": "Yukinobu Chai",
    "type": "Classic",
    "price": 4800000,
    "short": "Classic cutaway EQ, mặt spruce, có EQ, dây nylon.",
    "img": "/images/f3f26433d0959d148c8f776d1e0b15a9.jpg",
    "desc": "Yukinobu Chai C-50 CE: Khoét eo, có EQ cắm loa, hợp biểu diễn bolero, flamenco nhẹ. Mặt spruce ép, lưng và hông Meranti. Dây nylon mềm tay, không đau ngón, rất hợp người mới tập và nhạc cổ điển, bolero. Được setup hạ action trước khi giao.",
    "specs": [
      "Classic cutaway EQ",
      "Spruce ép",
      "Meranti",
      "Mahogany, phím Rosewood",
      "EQ 4 band + tuner",
      "Bóng"
    ],
    "points": [
      "Giá tốt cho người mới",
      "Dây nylon mềm tay",
      "Có EQ cắm loa"
    ]
  },
  {
    "id": "koraida-c-40-3-4",
    "title": "Koraida C-40 3/4",
    "brand": "Koraida",
    "type": "Classic",
    "price": 5300000,
    "short": "Classic 3/4, mặt spruce, dây nylon.",
    "img": "/images/8e7da72aee3b94ea41841e8085b6fa60.jpg",
    "desc": "Koraida C-40 3/4: Nhỏ gọn cho trẻ 8–12 tuổi hoặc người tay nhỏ. Mặt spruce nguyên tấm, lưng và hông Sapele. Dây nylon mềm tay, không đau ngón, rất hợp người mới tập và nhạc cổ điển, bolero. Được setup hạ action trước khi giao.",
    "specs": [
      "Classic 3/4",
      "Spruce nguyên tấm",
      "Sapele",
      "Nato, phím Rosewood",
      "Không",
      "Bóng gương"
    ],
    "points": [
      "Mặt gỗ nguyên tấm",
      "Dây nylon mềm tay",
      "Cho trẻ em"
    ]
  },
  {
    "id": "yukinobu-chai-c-30-4-4",
    "title": "Yukinobu Chai C-30 4/4",
    "brand": "Yukinobu Chai",
    "type": "Classic",
    "price": 6500000,
    "short": "Classic 4/4, mặt cedar, dây nylon.",
    "img": "/images/d1ad806346d9a4e0ed5c8538ed4a1a0f.jpg",
    "desc": "Yukinobu Chai C-30 4/4: Size chuẩn người lớn, dây nylon mềm, âm ngọt tròn. Mặt cedar nguyên tấm, lưng và hông Rosewood. Dây nylon mềm tay, không đau ngón, rất hợp người mới tập và nhạc cổ điển, bolero. Được setup hạ action trước khi giao.",
    "specs": [
      "Classic 4/4",
      "Cedar nguyên tấm",
      "Rosewood",
      "Cedro, phím Ebony",
      "Không",
      "Mờ open-pore"
    ],
    "points": [
      "Mặt gỗ nguyên tấm",
      "Dây nylon mềm tay",
      "Size chuẩn"
    ]
  },
  {
    "id": "aria-c-20-flamenco",
    "title": "Aria C-20 Flamenco",
    "brand": "Aria",
    "type": "Classic",
    "price": 8100000,
    "short": "Flamenco, mặt cedar, dây nylon.",
    "img": "/images/a49d15c1320d3a63d18b2ded5328531b.jpg",
    "desc": "Aria C-20 Flamenco: Thân mỏng, action thấp, âm sáng và bật, hợp rasgueado. Mặt cedar nguyên tấm, lưng và hông Cypress. Dây nylon mềm tay, không đau ngón, rất hợp người mới tập và nhạc cổ điển, bolero. Được setup hạ action trước khi giao.",
    "specs": [
      "Flamenco",
      "Cedar nguyên tấm",
      "Cypress",
      "Mahogany, phím Rosewood",
      "Không",
      "Bóng"
    ],
    "points": [
      "Mặt gỗ nguyên tấm",
      "Dây nylon mềm tay",
      "Action thấp"
    ]
  },
  {
    "id": "aria-c-100-ce",
    "title": "Aria C-100 CE",
    "brand": "Aria",
    "type": "Classic",
    "price": 4000000,
    "short": "Classic cutaway EQ, mặt cedar, có EQ, dây nylon.",
    "img": "/images/278ee501bfa28510dd1cee238911f8b8.jpg",
    "desc": "Aria C-100 CE: Khoét eo, có EQ cắm loa, hợp biểu diễn bolero, flamenco nhẹ. Mặt cedar ép, lưng và hông Mahogany. Dây nylon mềm tay, không đau ngón, rất hợp người mới tập và nhạc cổ điển, bolero. Được setup hạ action trước khi giao.",
    "specs": [
      "Classic cutaway EQ",
      "Cedar ép",
      "Mahogany",
      "Nato, phím Rosewood",
      "EQ 4 band + tuner",
      "Bóng gương"
    ],
    "points": [
      "Giá tốt cho người mới",
      "Dây nylon mềm tay",
      "Có EQ cắm loa"
    ]
  },
  {
    "id": "koraida-c-80-3-4",
    "title": "Koraida C-80 3/4",
    "brand": "Koraida",
    "type": "Classic",
    "price": 2700000,
    "short": "Classic 3/4, mặt spruce, dây nylon.",
    "img": "/images/6c32612f8068be59b262ae95af62cba0.jpg",
    "desc": "Koraida C-80 3/4: Nhỏ gọn cho trẻ 8–12 tuổi hoặc người tay nhỏ. Mặt spruce ép, lưng và hông Walnut. Dây nylon mềm tay, không đau ngón, rất hợp người mới tập và nhạc cổ điển, bolero. Được setup hạ action trước khi giao.",
    "specs": [
      "Classic 3/4",
      "Spruce ép",
      "Walnut",
      "Cedro, phím Ebony",
      "Không",
      "Mờ open-pore"
    ],
    "points": [
      "Giá tốt cho người mới",
      "Dây nylon mềm tay",
      "Cho trẻ em"
    ]
  },
  {
    "id": "suzuki-c-60-4-4",
    "title": "Suzuki C-60 4/4",
    "brand": "Suzuki",
    "type": "Classic",
    "price": 5800000,
    "short": "Classic 4/4, mặt spruce, dây nylon.",
    "img": "/images/488e048239e07bd1dd0024c1764e1e2f.jpg",
    "desc": "Suzuki C-60 4/4: Size chuẩn người lớn, dây nylon mềm, âm ngọt tròn. Mặt spruce nguyên tấm, lưng và hông Cypress. Dây nylon mềm tay, không đau ngón, rất hợp người mới tập và nhạc cổ điển, bolero. Được setup hạ action trước khi giao.",
    "specs": [
      "Classic 4/4",
      "Spruce nguyên tấm",
      "Cypress",
      "Mahogany, phím Rosewood",
      "Không",
      "Satin"
    ],
    "points": [
      "Mặt gỗ nguyên tấm",
      "Dây nylon mềm tay",
      "Size chuẩn"
    ]
  },
  {
    "id": "suzuki-c-50-flamenco",
    "title": "Suzuki C-50 Flamenco",
    "brand": "Suzuki",
    "type": "Classic",
    "price": 7300000,
    "short": "Flamenco, mặt spruce, dây nylon.",
    "img": "/images/274c4589b36d8f2eb2664872a4515c4f.jpg",
    "desc": "Suzuki C-50 Flamenco: Thân mỏng, action thấp, âm sáng và bật, hợp rasgueado. Mặt spruce nguyên tấm, lưng và hông Rosewood. Dây nylon mềm tay, không đau ngón, rất hợp người mới tập và nhạc cổ điển, bolero. Được setup hạ action trước khi giao.",
    "specs": [
      "Flamenco",
      "Spruce nguyên tấm",
      "Rosewood",
      "Nato, phím Rosewood",
      "Không",
      "Bóng gương"
    ],
    "points": [
      "Mặt gỗ nguyên tấm",
      "Dây nylon mềm tay",
      "Action thấp"
    ]
  },
  {
    "id": "koraida-c-40-ce",
    "title": "Koraida C-40 CE",
    "brand": "Koraida",
    "type": "Classic",
    "price": 7000000,
    "short": "Classic cutaway EQ, mặt cedar, có EQ, dây nylon.",
    "img": "/images/c08780564aa3c191e444fc3af718276c.jpg",
    "desc": "Koraida C-40 CE: Khoét eo, có EQ cắm loa, hợp biểu diễn bolero, flamenco nhẹ. Mặt cedar nguyên tấm, lưng và hông Meranti. Dây nylon mềm tay, không đau ngón, rất hợp người mới tập và nhạc cổ điển, bolero. Được setup hạ action trước khi giao.",
    "specs": [
      "Classic cutaway EQ",
      "Cedar nguyên tấm",
      "Meranti",
      "Cedro, phím Ebony",
      "EQ 4 band + tuner",
      "Mờ open-pore"
    ],
    "points": [
      "Mặt gỗ nguyên tấm",
      "Dây nylon mềm tay",
      "Có EQ cắm loa"
    ]
  },
  {
    "id": "matsuoka-c-30-3-4",
    "title": "Matsuoka C-30 3/4",
    "brand": "Matsuoka",
    "type": "Classic",
    "price": 1900000,
    "short": "Classic 3/4, mặt cedar, dây nylon.",
    "img": "/images/7d26c7a863a8191251430e126bc1d0b3.jpg",
    "desc": "Matsuoka C-30 3/4: Nhỏ gọn cho trẻ 8–12 tuổi hoặc người tay nhỏ. Mặt cedar ép, lưng và hông Sapele. Dây nylon mềm tay, không đau ngón, rất hợp người mới tập và nhạc cổ điển, bolero. Được setup hạ action trước khi giao.",
    "specs": [
      "Classic 3/4",
      "Cedar ép",
      "Sapele",
      "Mahogany, phím Rosewood",
      "Không",
      "Satin"
    ],
    "points": [
      "Giá tốt cho người mới",
      "Dây nylon mềm tay",
      "Cho trẻ em"
    ]
  },
  {
    "id": "yukinobu-chai-c-20-4-4",
    "title": "Yukinobu Chai C-20 4/4",
    "brand": "Yukinobu Chai",
    "type": "Classic",
    "price": 2200000,
    "short": "Classic 4/4, mặt spruce, dây nylon.",
    "img": "/images/d391789ab126faa179a3170cef2987a1.jpg",
    "desc": "Yukinobu Chai C-20 4/4: Size chuẩn người lớn, dây nylon mềm, âm ngọt tròn. Mặt spruce ép, lưng và hông Rosewood. Dây nylon mềm tay, không đau ngón, rất hợp người mới tập và nhạc cổ điển, bolero. Được setup hạ action trước khi giao.",
    "specs": [
      "Classic 4/4",
      "Spruce ép",
      "Rosewood",
      "Nato, phím Rosewood",
      "Không",
      "Bóng"
    ],
    "points": [
      "Giá tốt cho người mới",
      "Dây nylon mềm tay",
      "Size chuẩn"
    ]
  },
  {
    "id": "takamine-jumbo-35ce",
    "title": "Takamine Jumbo-35CE",
    "brand": "Takamine",
    "type": "Acoustic",
    "price": 11300000,
    "short": "Jumbo, mặt sitka, có EQ.",
    "img": "/images/8c291c49ba1f16387bb142f0370a739a.jpg",
    "desc": "Takamine Jumbo-35 dáng Jumbo: Thân lớn, âm vang dày, nổi bật khi đệm hát mạnh. Mặt sitka spruce nguyên tấm, lưng và hông Walnut, cần Okoume. Tích hợp EQ và tuner, cắm loa là diễn được ngay. Mỗi cây được kỹ thuật viên kiểm tra, chỉnh action và thay dây trước khi giao.",
    "specs": [
      "Jumbo",
      "Sitka spruce nguyên tấm",
      "Walnut",
      "Okoume, phím Techwood",
      "EQ 4 band + tuner",
      "Đen mờ"
    ],
    "points": [
      "Mặt gỗ nguyên tấm",
      "Có EQ cắm loa",
      "Âm vang dày"
    ]
  },
  {
    "id": "s-yairi-ga-28ce",
    "title": "S.Yairi GA-28CE",
    "brand": "S.Yairi",
    "type": "Acoustic",
    "price": 6200000,
    "short": "Grand Auditorium, mặt spruce, có EQ.",
    "img": "/images/4b72a5bdb5a907579c347e2dff6e4d28.jpg",
    "desc": "S.Yairi GA-28 dáng Grand Auditorium: Đa năng: vừa đệm hát vừa solo, âm rõ nốt. Mặt spruce ép, lưng và hông Mahogany, cần Mahogany. Tích hợp EQ và tuner, cắm loa là diễn được ngay. Mỗi cây được kỹ thuật viên kiểm tra, chỉnh action và thay dây trước khi giao.",
    "specs": [
      "Grand Auditorium",
      "Spruce ép",
      "Mahogany",
      "Mahogany, phím Rosewood",
      "EQ 4 band + tuner",
      "Sunburst bóng"
    ],
    "points": [
      "Giá dễ tiếp cận",
      "Có EQ cắm loa",
      "Đa năng"
    ]
  },
  {
    "id": "s-yairi-om-20",
    "title": "S.Yairi OM-20",
    "brand": "S.Yairi",
    "type": "Acoustic",
    "price": 11400000,
    "short": "OM (Orchestra Model), mặt cedar.",
    "img": "/images/4b0afe3faa52be9962eafb9ec83bb685.jpg",
    "desc": "S.Yairi OM-20 dáng OM (Orchestra Model): Thân vừa vặn, âm cân bằng, hợp fingerstyle và người dáng nhỏ. Mặt cedar nguyên tấm, lưng và hông Walnut, cần Nato. Mỗi cây được kỹ thuật viên kiểm tra, chỉnh action và thay dây trước khi giao.",
    "specs": [
      "OM (Orchestra Model)",
      "Cedar nguyên tấm",
      "Walnut",
      "Nato, phím Walnut",
      "Không",
      "Natural bóng"
    ],
    "points": [
      "Mặt gỗ nguyên tấm",
      "Âm mộc tự nhiên",
      "Hợp fingerstyle"
    ]
  },
  {
    "id": "aria-d-15ce",
    "title": "Aria D-15CE",
    "brand": "Aria",
    "type": "Acoustic",
    "price": 10700000,
    "short": "Dreadnought, mặt spruce, có EQ.",
    "img": "/images/fdd007ccc81e805a30306f37e174e60e.jpg",
    "desc": "Aria D-15 dáng Dreadnought: Âm lượng lớn, bass sâu, rất hợp đệm hát và strumming. Mặt spruce nguyên tấm, lưng và hông Mahogany, cần Mahogany. Tích hợp EQ và tuner, cắm loa là diễn được ngay. Mỗi cây được kỹ thuật viên kiểm tra, chỉnh action và thay dây trước khi giao.",
    "specs": [
      "Dreadnought",
      "Spruce nguyên tấm",
      "Mahogany",
      "Mahogany, phím Ebony",
      "EQ 4 band + tuner",
      "Natural mờ"
    ],
    "points": [
      "Mặt gỗ nguyên tấm",
      "Có EQ cắm loa",
      "Hợp đệm hát"
    ]
  },
  {
    "id": "yamaha-travel-12ce",
    "title": "Yamaha Travel-12CE",
    "brand": "Yamaha",
    "type": "Acoustic",
    "price": 8300000,
    "short": "Travel 3/4, mặt gỗ mahogany, có EQ.",
    "img": "/images/4efd21d37a5ac74d0b47a2a3742cfb6a.jpg",
    "desc": "Yamaha Travel-12 dáng Travel 3/4: Size 3/4 nhẹ, hợp người mới, trẻ em và đi phượt. Mặt mahogany nguyên tấm, lưng và hông Walnut, cần Okoume. Tích hợp EQ và tuner, cắm loa là diễn được ngay. Mỗi cây được kỹ thuật viên kiểm tra, chỉnh action và thay dây trước khi giao.",
    "specs": [
      "Travel 3/4",
      "Mahogany nguyên tấm",
      "Walnut",
      "Okoume, phím Techwood",
      "EQ 4 band + tuner",
      "Satin nâu gỗ"
    ],
    "points": [
      "Mặt gỗ nguyên tấm",
      "Có EQ cắm loa",
      "Hợp người mới"
    ]
  },
  {
    "id": "stafford-parlor-10",
    "title": "Stafford Parlor-10",
    "brand": "Stafford",
    "type": "Acoustic",
    "price": 7300000,
    "short": "Parlor, mặt sitka.",
    "img": "/images/a21ebc94750562c28d47bee0458770d7.jpg",
    "desc": "Stafford Parlor-10 dáng Parlor: Nhỏ gọn, âm mộc cổ điển, dễ mang đi du lịch. Mặt sitka spruce nguyên tấm, lưng và hông Mahogany, cần Mahogany. Mỗi cây được kỹ thuật viên kiểm tra, chỉnh action và thay dây trước khi giao.",
    "specs": [
      "Parlor",
      "Sitka spruce nguyên tấm",
      "Mahogany",
      "Mahogany, phím Rosewood",
      "Không",
      "Vintage burst"
    ],
    "points": [
      "Mặt gỗ nguyên tấm",
      "Âm mộc tự nhiên",
      "Nhỏ gọn"
    ]
  },
  {
    "id": "fender-jumbo-50ce",
    "title": "Fender Jumbo-50CE",
    "brand": "Fender",
    "type": "Acoustic",
    "price": 7200000,
    "short": "Jumbo, mặt spruce, có EQ.",
    "img": "/images/51d802d8d8e9209163d1fdbd79b6243a.jpg",
    "desc": "Fender Jumbo-50 dáng Jumbo: Thân lớn, âm vang dày, nổi bật khi đệm hát mạnh. Mặt spruce ép, lưng và hông Walnut, cần Nato. Tích hợp EQ và tuner, cắm loa là diễn được ngay. Mỗi cây được kỹ thuật viên kiểm tra, chỉnh action và thay dây trước khi giao.",
    "specs": [
      "Jumbo",
      "Spruce ép",
      "Walnut",
      "Nato, phím Walnut",
      "EQ 4 band + tuner",
      "Đen mờ"
    ],
    "points": [
      "Giá dễ tiếp cận",
      "Có EQ cắm loa",
      "Âm vang dày"
    ]
  },
  {
    "id": "fender-ga-40ce",
    "title": "Fender GA-40CE",
    "brand": "Fender",
    "type": "Acoustic",
    "price": 12100000,
    "short": "Grand Auditorium, mặt cedar, có EQ.",
    "img": "/images/a0c077be5510d08232b178cfd9847c14.jpg",
    "desc": "Fender GA-40 dáng Grand Auditorium: Đa năng: vừa đệm hát vừa solo, âm rõ nốt. Mặt cedar nguyên tấm, lưng và hông Mahogany, cần Mahogany. Tích hợp EQ và tuner, cắm loa là diễn được ngay. Mỗi cây được kỹ thuật viên kiểm tra, chỉnh action và thay dây trước khi giao.",
    "specs": [
      "Grand Auditorium",
      "Cedar nguyên tấm",
      "Mahogany",
      "Mahogany, phím Ebony",
      "EQ 4 band + tuner",
      "Sunburst bóng"
    ],
    "points": [
      "Mặt gỗ nguyên tấm",
      "Có EQ cắm loa",
      "Đa năng"
    ]
  },
  {
    "id": "yamaha-om-35",
    "title": "Yamaha OM-35",
    "brand": "Yamaha",
    "type": "Acoustic",
    "price": 10800000,
    "short": "OM (Orchestra Model), mặt spruce.",
    "img": "/images/b51e46b47bc3cf90cba0cea8aad05b1e.jpg",
    "desc": "Yamaha OM-35 dáng OM (Orchestra Model): Thân vừa vặn, âm cân bằng, hợp fingerstyle và người dáng nhỏ. Mặt spruce nguyên tấm, lưng và hông Walnut, cần Okoume. Mỗi cây được kỹ thuật viên kiểm tra, chỉnh action và thay dây trước khi giao.",
    "specs": [
      "OM (Orchestra Model)",
      "Spruce nguyên tấm",
      "Walnut",
      "Okoume, phím Techwood",
      "Không",
      "Natural bóng"
    ],
    "points": [
      "Mặt gỗ nguyên tấm",
      "Âm mộc tự nhiên",
      "Hợp fingerstyle"
    ]
  },
  {
    "id": "fender-d-28ce",
    "title": "Fender D-28CE",
    "brand": "Fender",
    "type": "Acoustic",
    "price": 10100000,
    "short": "Dreadnought, mặt gỗ mahogany, có EQ.",
    "img": "/images/fc26c59b2c7cec6bcc0112a1b7a24f5f.jpg",
    "desc": "Fender D-28 dáng Dreadnought: Âm lượng lớn, bass sâu, rất hợp đệm hát và strumming. Mặt mahogany nguyên tấm, lưng và hông Mahogany, cần Mahogany. Tích hợp EQ và tuner, cắm loa là diễn được ngay. Mỗi cây được kỹ thuật viên kiểm tra, chỉnh action và thay dây trước khi giao.",
    "specs": [
      "Dreadnought",
      "Mahogany nguyên tấm",
      "Mahogany",
      "Mahogany, phím Rosewood",
      "EQ 4 band + tuner",
      "Natural mờ"
    ],
    "points": [
      "Mặt gỗ nguyên tấm",
      "Có EQ cắm loa",
      "Hợp đệm hát"
    ]
  },
  {
    "id": "aria-travel-20ce",
    "title": "Aria Travel-20CE",
    "brand": "Aria",
    "type": "Acoustic",
    "price": 7700000,
    "short": "Travel 3/4, mặt sitka, có EQ.",
    "img": "/images/8f06b1fce097fb64dd31d308d5b4b981.jpg",
    "desc": "Aria Travel-20 dáng Travel 3/4: Size 3/4 nhẹ, hợp người mới, trẻ em và đi phượt. Mặt sitka spruce nguyên tấm, lưng và hông Walnut, cần Nato. Tích hợp EQ và tuner, cắm loa là diễn được ngay. Mỗi cây được kỹ thuật viên kiểm tra, chỉnh action và thay dây trước khi giao.",
    "specs": [
      "Travel 3/4",
      "Sitka spruce nguyên tấm",
      "Walnut",
      "Nato, phím Walnut",
      "EQ 4 band + tuner",
      "Satin nâu gỗ"
    ],
    "points": [
      "Mặt gỗ nguyên tấm",
      "Có EQ cắm loa",
      "Hợp người mới"
    ]
  },
  {
    "id": "yamaha-parlor-15",
    "title": "Yamaha Parlor-15",
    "brand": "Yamaha",
    "type": "Acoustic",
    "price": 3200000,
    "short": "Parlor, mặt spruce.",
    "img": "/images/bca064c0e8192ff044f2edb749d5fc73.jpg",
    "desc": "Yamaha Parlor-15 dáng Parlor: Nhỏ gọn, âm mộc cổ điển, dễ mang đi du lịch. Mặt spruce ép, lưng và hông Mahogany, cần Mahogany. Mỗi cây được kỹ thuật viên kiểm tra, chỉnh action và thay dây trước khi giao.",
    "specs": [
      "Parlor",
      "Spruce ép",
      "Mahogany",
      "Mahogany, phím Ebony",
      "Không",
      "Vintage burst"
    ],
    "points": [
      "Giá dễ tiếp cận",
      "Âm mộc tự nhiên",
      "Nhỏ gọn"
    ]
  },
  {
    "id": "yamaha-jumbo-12ce",
    "title": "Yamaha Jumbo-12CE",
    "brand": "Yamaha",
    "type": "Acoustic",
    "price": 13100000,
    "short": "Jumbo, mặt cedar, có EQ.",
    "img": "/images/2a740a66f196865e06cc20397fa2c1c3.jpg",
    "desc": "Yamaha Jumbo-12 dáng Jumbo: Thân lớn, âm vang dày, nổi bật khi đệm hát mạnh. Mặt cedar nguyên tấm, lưng và hông Walnut, cần Okoume. Tích hợp EQ và tuner, cắm loa là diễn được ngay. Mỗi cây được kỹ thuật viên kiểm tra, chỉnh action và thay dây trước khi giao.",
    "specs": [
      "Jumbo",
      "Cedar nguyên tấm",
      "Walnut",
      "Okoume, phím Techwood",
      "EQ 4 band + tuner",
      "Đen mờ"
    ],
    "points": [
      "Mặt gỗ nguyên tấm",
      "Có EQ cắm loa",
      "Âm vang dày"
    ]
  },
  {
    "id": "james-ga-10ce",
    "title": "James GA-10CE",
    "brand": "James",
    "type": "Acoustic",
    "price": 11500000,
    "short": "Grand Auditorium, mặt spruce, có EQ.",
    "img": "/images/91ad921c52777f94e6057d7633e7ff9a.jpg",
    "desc": "James GA-10 dáng Grand Auditorium: Đa năng: vừa đệm hát vừa solo, âm rõ nốt. Mặt spruce nguyên tấm, lưng và hông Mahogany, cần Mahogany. Tích hợp EQ và tuner, cắm loa là diễn được ngay. Mỗi cây được kỹ thuật viên kiểm tra, chỉnh action và thay dây trước khi giao.",
    "specs": [
      "Grand Auditorium",
      "Spruce nguyên tấm",
      "Mahogany",
      "Mahogany, phím Rosewood",
      "EQ 4 band + tuner",
      "Sunburst bóng"
    ],
    "points": [
      "Mặt gỗ nguyên tấm",
      "Có EQ cắm loa",
      "Đa năng"
    ]
  },
  {
    "id": "stafford-om-50",
    "title": "Stafford OM-50",
    "brand": "Stafford",
    "type": "Acoustic",
    "price": 10200000,
    "short": "OM (Orchestra Model), mặt gỗ mahogany.",
    "img": "/images/a20c470b836f23b1f12776c527752783.jpg",
    "desc": "Stafford OM-50 dáng OM (Orchestra Model): Thân vừa vặn, âm cân bằng, hợp fingerstyle và người dáng nhỏ. Mặt mahogany nguyên tấm, lưng và hông Walnut, cần Nato. Mỗi cây được kỹ thuật viên kiểm tra, chỉnh action và thay dây trước khi giao.",
    "specs": [
      "OM (Orchestra Model)",
      "Mahogany nguyên tấm",
      "Walnut",
      "Nato, phím Walnut",
      "Không",
      "Natural bóng"
    ],
    "points": [
      "Mặt gỗ nguyên tấm",
      "Âm mộc tự nhiên",
      "Hợp fingerstyle"
    ]
  },
  {
    "id": "s-yairi-d-40ce",
    "title": "S.Yairi D-40CE",
    "brand": "S.Yairi",
    "type": "Acoustic",
    "price": 9500000,
    "short": "Dreadnought, mặt sitka, có EQ.",
    "img": "/images/0bcaee43b1b30f411c8e6b6af064a6ac.jpg",
    "desc": "S.Yairi D-40 dáng Dreadnought: Âm lượng lớn, bass sâu, rất hợp đệm hát và strumming. Mặt sitka spruce nguyên tấm, lưng và hông Mahogany, cần Mahogany. Tích hợp EQ và tuner, cắm loa là diễn được ngay. Mỗi cây được kỹ thuật viên kiểm tra, chỉnh action và thay dây trước khi giao.",
    "specs": [
      "Dreadnought",
      "Sitka spruce nguyên tấm",
      "Mahogany",
      "Mahogany, phím Ebony",
      "EQ 4 band + tuner",
      "Natural mờ"
    ],
    "points": [
      "Mặt gỗ nguyên tấm",
      "Có EQ cắm loa",
      "Hợp đệm hát"
    ]
  },
  {
    "id": "morris-travel-35ce",
    "title": "Morris Travel-35CE",
    "brand": "Morris",
    "type": "Acoustic",
    "price": 3600000,
    "short": "Travel 3/4, mặt spruce, có EQ.",
    "img": "/images/ddea6f3e0fa819d6c67cd7c4dad15d04.jpg",
    "desc": "Morris Travel-35 dáng Travel 3/4: Size 3/4 nhẹ, hợp người mới, trẻ em và đi phượt. Mặt spruce ép, lưng và hông Walnut, cần Okoume. Tích hợp EQ và tuner, cắm loa là diễn được ngay. Mỗi cây được kỹ thuật viên kiểm tra, chỉnh action và thay dây trước khi giao.",
    "specs": [
      "Travel 3/4",
      "Spruce ép",
      "Walnut",
      "Okoume, phím Techwood",
      "EQ 4 band + tuner",
      "Satin nâu gỗ"
    ],
    "points": [
      "Giá dễ tiếp cận",
      "Có EQ cắm loa",
      "Hợp người mới"
    ]
  },
  {
    "id": "takamine-parlor-28",
    "title": "Takamine Parlor-28",
    "brand": "Takamine",
    "type": "Acoustic",
    "price": 9100000,
    "short": "Parlor, mặt cedar.",
    "img": "/images/ff492832cd011c02e60a5bc59133a61b.jpg",
    "desc": "Takamine Parlor-28 dáng Parlor: Nhỏ gọn, âm mộc cổ điển, dễ mang đi du lịch. Mặt cedar nguyên tấm, lưng và hông Mahogany, cần Mahogany. Mỗi cây được kỹ thuật viên kiểm tra, chỉnh action và thay dây trước khi giao.",
    "specs": [
      "Parlor",
      "Cedar nguyên tấm",
      "Mahogany",
      "Mahogany, phím Rosewood",
      "Không",
      "Vintage burst"
    ],
    "points": [
      "Mặt gỗ nguyên tấm",
      "Âm mộc tự nhiên",
      "Nhỏ gọn"
    ]
  },
  {
    "id": "stafford-jumbo-20ce",
    "title": "Stafford Jumbo-20CE",
    "brand": "Stafford",
    "type": "Acoustic",
    "price": 12500000,
    "short": "Jumbo, mặt spruce, có EQ.",
    "img": "/images/0616cfe21cb1c2d11595e981996bf3da.jpg",
    "desc": "Stafford Jumbo-20 dáng Jumbo: Thân lớn, âm vang dày, nổi bật khi đệm hát mạnh. Mặt spruce nguyên tấm, lưng và hông Walnut, cần Nato. Tích hợp EQ và tuner, cắm loa là diễn được ngay. Mỗi cây được kỹ thuật viên kiểm tra, chỉnh action và thay dây trước khi giao.",
    "specs": [
      "Jumbo",
      "Spruce nguyên tấm",
      "Walnut",
      "Nato, phím Walnut",
      "EQ 4 band + tuner",
      "Đen mờ"
    ],
    "points": [
      "Mặt gỗ nguyên tấm",
      "Có EQ cắm loa",
      "Âm vang dày"
    ]
  },
  {
    "id": "morris-ga-15ce",
    "title": "Morris GA-15CE",
    "brand": "Morris",
    "type": "Acoustic",
    "price": 10900000,
    "short": "Grand Auditorium, mặt gỗ mahogany, có EQ.",
    "img": "/images/1b613eae5f9c676f677b0b0a15910646.jpg",
    "desc": "Morris GA-15 dáng Grand Auditorium: Đa năng: vừa đệm hát vừa solo, âm rõ nốt. Mặt mahogany nguyên tấm, lưng và hông Mahogany, cần Mahogany. Tích hợp EQ và tuner, cắm loa là diễn được ngay. Mỗi cây được kỹ thuật viên kiểm tra, chỉnh action và thay dây trước khi giao.",
    "specs": [
      "Grand Auditorium",
      "Mahogany nguyên tấm",
      "Mahogany",
      "Mahogany, phím Ebony",
      "EQ 4 band + tuner",
      "Sunburst bóng"
    ],
    "points": [
      "Mặt gỗ nguyên tấm",
      "Có EQ cắm loa",
      "Đa năng"
    ]
  },
  {
    "id": "james-om-12",
    "title": "James OM-12",
    "brand": "James",
    "type": "Acoustic",
    "price": 9600000,
    "short": "OM (Orchestra Model), mặt sitka.",
    "img": "/images/1b8fcc591756f0415dde9aa806ba95dc.jpg",
    "desc": "James OM-12 dáng OM (Orchestra Model): Thân vừa vặn, âm cân bằng, hợp fingerstyle và người dáng nhỏ. Mặt sitka spruce nguyên tấm, lưng và hông Walnut, cần Okoume. Mỗi cây được kỹ thuật viên kiểm tra, chỉnh action và thay dây trước khi giao.",
    "specs": [
      "OM (Orchestra Model)",
      "Sitka spruce nguyên tấm",
      "Walnut",
      "Okoume, phím Techwood",
      "Không",
      "Natural bóng"
    ],
    "points": [
      "Mặt gỗ nguyên tấm",
      "Âm mộc tự nhiên",
      "Hợp fingerstyle"
    ]
  },
  {
    "id": "takamine-d-10ce",
    "title": "Takamine D-10CE",
    "brand": "Takamine",
    "type": "Acoustic",
    "price": 5400000,
    "short": "Dreadnought, mặt spruce, có EQ.",
    "img": "/images/06eeb979e17b18c3365021675a131ea5.jpg",
    "desc": "Takamine D-10 dáng Dreadnought: Âm lượng lớn, bass sâu, rất hợp đệm hát và strumming. Mặt spruce ép, lưng và hông Mahogany, cần Mahogany. Tích hợp EQ và tuner, cắm loa là diễn được ngay. Mỗi cây được kỹ thuật viên kiểm tra, chỉnh action và thay dây trước khi giao.",
    "specs": [
      "Dreadnought",
      "Spruce ép",
      "Mahogany",
      "Mahogany, phím Rosewood",
      "EQ 4 band + tuner",
      "Natural mờ"
    ],
    "points": [
      "Giá dễ tiếp cận",
      "Có EQ cắm loa",
      "Hợp đệm hát"
    ]
  },
  {
    "id": "yamaha-concert-cedar",
    "title": "Yamaha Concert Cedar",
    "brand": "Yamaha",
    "type": "Classic",
    "price": 7400000,
    "short": "Mặt Cedar nguyên tấm, âm ngọt, mở nhanh.",
    "img": "/images/35e209697800da308832b3821e493ba2.jpg",
    "desc": "Đàn classic dây nylon với mặt Cedar nguyên tấm cho âm ấm, ngọt và tròn ngay từ khi mới mua. Phù hợp nhạc cổ điển, bolero, flamenco nhẹ.",
    "specs": [],
    "points": []
  },
  {
    "id": "suzuki-c-40-classic",
    "title": "Suzuki C-40 Classic",
    "brand": "Suzuki",
    "type": "Classic",
    "price": 2900000,
    "short": "Dây nylon mềm tay, âm ấm, hợp người mới.",
    "img": "/images/d391789ab126faa179a3170cef2987a1.jpg",
    "desc": "Cây đàn khởi đầu lý tưởng: dây nylon mềm, không đau tay, cần đàn chắc chắn. Được setup hạ action trước khi giao để dễ bấm hợp âm.",
    "specs": [],
    "points": []
  },
  {
    "id": "james-cutaway-eq",
    "title": "James Cutaway EQ",
    "brand": "James",
    "type": "Acoustic",
    "price": 6200000,
    "short": "Dáng khuyết dễ bấm phím cao, EQ 4 băng.",
    "img": "/images/58d3130a9d84003a07dfe1677e43d1b5.jpg",
    "desc": "Dáng cutaway giúp bấm các phím cao dễ dàng. EQ 4 band tích hợp tuner, phù hợp đi diễn cafe, sự kiện nhỏ hoặc thu âm tại nhà. Âm sáng, rõ nốt, cân bằng giữa đệm hát và lead.",
    "specs": [],
    "points": []
  },
  {
    "id": "aria-om-sunburst",
    "title": "Aria OM Sunburst",
    "brand": "Aria",
    "type": "Acoustic",
    "price": 12500000,
    "short": "Thân OM gọn, âm cân bằng, có EQ biểu diễn.",
    "img": "/images/0330daf3edabc578a3841a48b402dd4a.jpg",
    "desc": "Thân OM vừa vặn với người dáng nhỏ, âm trầm vừa đủ, trung âm dày và tiếng treble lấp lánh. Mặt gỗ thông nguyên tấm, càng chơi càng vang. Lựa chọn rất được yêu thích cho fingerstyle.",
    "specs": [],
    "points": []
  },
  {
    "id": "morris-d-28-natural",
    "title": "Morris D-28 Natural",
    "brand": "Morris",
    "type": "Acoustic",
    "price": 8900000,
    "short": "Dáng dreadnought cổ điển, âm trầm dày và vang.",
    "img": "/images/fc26c59b2c7cec6bcc0112a1b7a24f5f.jpg",
    "desc": "Dáng dreadnought cổ điển cho âm lượng lớn và tiếng bass đầy đặn. Phù hợp đệm hát, chơi strumming cùng bạn bè. Hoàn thiện natural mộc, vân gỗ đẹp.",
    "specs": [],
    "points": []
  }
];

export const products: Product[] = RAW.map((r, i) => ({
  ...r,
  priceText: fmt(r.price),
  imgs: [r.img],
  specs: r.specs.map((v, k) => ({ k: SPEC[k], v })),
  rank: i,
}));

export const brands: string[] = ["Yamaha", "Matsuoka", "Aria", "S.Yairi", "Suzuki", "Morris", "Takamine", "Stafford", "Fender", "James", "Yukinobu Chai", "Koraida"];

export const img = {
  "logoDark": "/images/909bedfa70b24da56b5d544e96543808.png",
  "logoWhite": "/images/5cac1cd4a07fc3a45c150383698de507.png",
  "showroom": "/images/406e57d9ef3bfbbd035fb0b7f4aa9707.jpg",
  "p1": "/images/e720928287285a2b17f404c99d98cfba.jpg",
  "p5": "/images/ee9379a3563ca310612fb4d60fd070da.jpg",
  "catAc": "/images/f3ba41d582ce6f4126af6007183bae59.jpg",
  "catCl": "/images/22db0d18d4dfc4745c25c5b1f421ba3b.jpg",
  "setup": "/images/95b47819316bef1aa19d9c9641940e0b.jpg",
  "stage": "/images/ddeb6e14c8feeb4a4b1e9e61c162874a.jpg",
  "about": "/images/6154ce685cfa2672e3cc7b6548eb3819.jpg"
} as const;

export const faq: [string, string][] = [
  [
    "Tôi có phải thanh toán online không?",
    "Không. Bạn chỉ cần gửi đơn, shop gọi xác nhận. Thanh toán khi nhận đàn (COD), tại showroom, hoặc chuyển khoản nếu muốn."
  ],
  [
    "Bao lâu thì nhận được đàn?",
    "Nội thành TP.HCM giao trong ngày hoặc hôm sau. Các tỉnh khác từ 2 – 4 ngày làm việc."
  ],
  [
    "Tôi có được kiểm tra đàn trước khi nhận không?",
    "Có. Bạn được mở hộp, kiểm tra và đàn thử trước khi thanh toán. Không ưng ý có thể từ chối nhận."
  ],
  [
    "Chính sách đổi trả và bảo hành?",
    "1 đổi 1 trong 7 ngày nếu có lỗi kỹ thuật. Bảo hành 12 tháng, setup và thay dây miễn phí trọn đời."
  ],
  [
    "Tôi mới tập, nên chọn đàn nào?",
    "Nhắn Zalo cho chúng tôi về ngân sách và thể loại nhạc bạn thích, chuyên viên sẽ gợi ý 2 – 3 cây phù hợp nhất."
  ]
];

export const ZALO = 'https://zalo.me/0834777123';
export const TEL = 'tel:0834777123';
