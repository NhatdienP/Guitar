'use client';

import { useState, type FocusEvent } from 'react';
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
  // While suggesting, the search box keeps its left edge and grows to the right.
  // Remember where it starts (distance from the nav) before the header collapses.
  const [srMl, setSrMl] = useState(0);
  const focus = (e: FocusEvent<HTMLInputElement>) => {
    const form = e.currentTarget.form;
    const nav = form?.parentElement?.querySelector('nav');
    if (form && nav && !search.expanded) setSrMl(Math.max(0, form.getBoundingClientRect().left - nav.getBoundingClientRect().right - 40));
    search.focus();
  };
  const vm = {
    ...search,
    focus,
    hdrVars: { '--jg-sr-ml': `${srMl}px` } as React.CSSProperties,
    logo: img.logoDark,
    c0: cls('home'),
    c1: cls('sp'),
    c2: cls('gt'),
    c3: cls('lh'),
  };
  return <HeaderView vm={vm} />;
}
