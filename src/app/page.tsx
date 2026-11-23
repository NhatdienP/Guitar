import HomeScreen from '@/screens/HomeScreen';
import { getProducts } from '@/lib/products';

export const revalidate = 60;

export default async function HomePage() {
  return <HomeScreen products={await getProducts()} />;
}
