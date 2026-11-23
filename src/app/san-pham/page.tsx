import type { Metadata } from 'next';
import { Suspense } from 'react';
import ProductsScreen from '@/screens/ProductsScreen';

export const metadata: Metadata = {
  title: 'Sản phẩm',
  description: 'Toàn bộ đàn guitar acoustic, classic nội địa Nhật tại J.guitar — lọc theo loại, thương hiệu, khoảng giá.',
};

export default function ProductsPage() {
  return (
    <Suspense>
      <ProductsScreen />
    </Suspense>
  );
}
