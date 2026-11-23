import type { Metadata } from 'next';
import AboutScreen from '@/screens/AboutScreen';

export const metadata: Metadata = { title: 'Giới thiệu' };

export default function AboutPage() {
  return <AboutScreen />;
}
