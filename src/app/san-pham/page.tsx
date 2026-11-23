import type { Metadata } from 'next';
import { Suspense } from 'react';
import ProductsScreen from '@/screens/ProductsScreen';
import { brandsOf, getProducts } from '@/lib/products';

export const revalidate = 60;

export const metadata: Metadata = {
  title: 'Sản phẩm',
  description: 'Toàn bộ đàn guitar acoustic, classic nội địa Nhật tại J.guitar — lọc theo loại, thương hiệu, khoảng giá.',
};

export default async function ProductsPage() {
  const products = await getProducts();
  return (
    <Suspense>
      <ProductsScreen products={products} brands={brandsOf(products)} />
    </Suspense>
  );
}
