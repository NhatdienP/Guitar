import { NextResponse } from 'next/server';
import { getProducts } from '@/lib/products';

/** Compact product list for the header search suggestions (refreshed with the Sheet, every 60s). */
export const revalidate = 60;

export async function GET() {
  const products = await getProducts();
  return NextResponse.json(
    products.map((p) => ({ id: p.id, title: p.title, brand: p.brand, type: p.type, priceText: p.priceText, img: p.img, rank: p.rank })),
  );
}
