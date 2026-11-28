import type { Metadata, Viewport } from 'next';
import './globals.css';
import './prototype.css';
import ZaloBridge from '@/components/ZaloBridge';

export const metadata: Metadata = {
  metadataBase: new URL('https://jguitar.vn'),
  title: { default: 'J.guitar – Đàn Guitar Nhật Bãi Tuyển Chọn', template: '%s · J.guitar' },
  description:
    'Shop guitar nội địa Nhật tại Sài Gòn từ 2014. Đàn acoustic, classic tuyển chọn, setup miễn phí, bảo hành 12 tháng, thanh toán khi nhận hàng.',
};

export const viewport: Viewport = {
  themeColor: '#f4eee3',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi" data-scroll-behavior="smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,600;12..96,700;12..96,800&family=Be+Vietnam+Pro:wght@400;500;600;700;800&family=Barlow+Condensed:wght@500;600;700&display=swap"
        />
      </head>
      <body>
        {children}
        <ZaloBridge />
      </body>
    </html>
  );
}
