import type { Metadata } from 'next';
import ContactScreen from '@/screens/ContactScreen';

export const metadata: Metadata = { title: 'Liên hệ' };

export default function ContactPage() {
  return <ContactScreen />;
}
