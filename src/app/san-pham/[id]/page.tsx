import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import DetailScreen from '@/screens/DetailScreen';
import { getProduct, products } from '@/lib/data';

type Params = { params: Promise<{ id: string }> };

export function generateStaticParams() {
  return products.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const p = getProduct((await params).id);
  if (!p) return {};
  return { title: p.title, description: `${p.short} Giá ${p.priceText}.`, openGraph: { images: [p.img] } };
}

export default async function ProductPage({ params }: Params) {
  const p = getProduct((await params).id);
  if (!p) notFound();
  // key: reset form state when navigating between products
  return <DetailScreen key={p.id} product={p} />;
}
