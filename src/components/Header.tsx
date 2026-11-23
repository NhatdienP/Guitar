'use client';

import HeaderView from '@/views/web/HeaderView';
import { img } from '@/lib/data';
import { useSearchBox } from '@/lib/useSearchBox';

type Props = {
  active?: 'home' | 'sp' | 'gt' | 'lh';
  query?: string;
  onQuery?: (q: string) => void;
  go?: unknown;
};

/** Desktop header (sticky): logo, main nav, search, hotline, Zalo. */
export default function Header({ active = 'home', query, onQuery }: Props) {
  const search = useSearchBox(query, onQuery);
  const cls = (k: string) => 'jg-nl' + (active === k ? ' on' : '');
  const vm = {
    ...search,
    logo: img.logoDark,
    c0: cls('home'),
    c1: cls('sp'),
    c2: cls('gt'),
    c3: cls('lh'),
  };
  return <HeaderView vm={vm} />;
}
