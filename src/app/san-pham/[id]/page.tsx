import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import DetailScreen from '@/screens/DetailScreen';
import { getProducts } from '@/lib/products';

type Params = { params: Promise<{ id: string }> };

// Pages are pre-built for every product in the Sheet; new rows are rendered on first visit.
export const revalidate = 60;
export const dynamicParams = true;

export async function generateStaticParams() {
  return (await getProducts()).map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { id } = await params;
  const p = (await getProducts()).find((x) => x.id === id);
  if (!p) return {};
  return { title: p.title, description: `${p.short} Giá ${p.priceText}.`, openGraph: { images: [p.img] } };
}

export default async function ProductPage({ params }: Params) {
  const { id } = await params;
  const products = await getProducts();
  const p = products.find((x) => x.id === id);
  if (!p) notFound();
  // key: reset form state when navigating between products
  return <DetailScreen key={p.id} product={p} products={products} />;
}
