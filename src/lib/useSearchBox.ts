'use client';

import { useRouter } from 'next/navigation';
import { useState, type ChangeEvent, type FormEvent } from 'react';

/**
 * Header search box.
 * - "live" (on /san-pham): typing filters the list directly through `onQuery`.
 * - elsewhere: the text is kept locally and submitting opens /san-pham?q=…
 */
export function useSearchBox(query?: string, onQuery?: (q: string) => void) {
  const router = useRouter();
  const live = typeof onQuery === 'function';
  const [local, setLocal] = useState('');
  const q = live ? query || '' : local;
  const searchHref = q.trim() ? `/san-pham?q=${encodeURIComponent(q.trim())}` : '/san-pham';

  return {
    q,
    live,
    notLive: !live,
    searchHref,
    typeQ: (e: ChangeEvent<HTMLInputElement>) => (live ? onQuery!(e.target.value) : setLocal(e.target.value)),
    key: () => {},
    submit: (e: FormEvent) => {
      e.preventDefault();
      if (!live) router.push(searchHref);
    },
  };
}
