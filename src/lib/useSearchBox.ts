'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useMemo, useRef, useState, type ChangeEvent, type FormEvent, type KeyboardEvent } from 'react';

export type SuggestItem = { id: string; title: string; brand: string; type: string; priceText: string; img: string; rank: number };

const MAX = 5;
const fold = (s: string) =>
  s
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/đ/gi, 'd')
    .toLowerCase();

// Loaded once per page visit, shared by the desktop and mobile headers.
let cache: Promise<SuggestItem[]> | null = null;
const loadProducts = () =>
  (cache ??= fetch('/api/san-pham')
    .then((r) => (r.ok ? r.json() : []))
    .catch(() => {
      cache = null;
      return [];
    }));

/**
 * Header search box.
 * - "live" (on /san-pham): typing filters the list directly through `onQuery`.
 * - elsewhere: typing shows a suggestion dropdown in place (no page change);
 *   picking a guitar opens it, Enter / "Xem tất cả" opens /san-pham?q=…
 */
export function useSearchBox(query?: string, onQuery?: (q: string) => void) {
  const router = useRouter();
  const live = typeof onQuery === 'function';
  const [local, setLocal] = useState('');
  const q = live ? query || '' : local;
  const searchHref = q.trim() ? `/san-pham?q=${encodeURIComponent(q.trim())}` : '/san-pham';

  const [items, setItems] = useState<SuggestItem[] | null>(null);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(-1);
  const blurTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const ensureLoaded = () => {
    if (!live && !items) loadProducts().then(setItems);
  };

  const { matches, total } = useMemo(() => {
    const words = fold(q).split(/\s+/).filter(Boolean);
    if (live || !items || !words.length) return { matches: [] as SuggestItem[], total: 0 };
    const hits = items
      .map((p) => {
        const title = fold(p.title);
        const hay = `${title} ${fold(p.brand)} ${fold(p.type)}`;
        if (!words.every((w) => hay.includes(w))) return null;
        const score = (title.startsWith(words[0]) ? 0 : fold(p.brand).startsWith(words[0]) ? 1 : 2) * 1000 + p.rank;
        return { p, score };
      })
      .filter((x): x is { p: SuggestItem; score: number } => !!x)
      .sort((a, b) => a.score - b.score);
    return { matches: hits.slice(0, MAX).map((h) => h.p), total: hits.length };
  }, [q, items, live]);

  useEffect(() => setActive(-1), [q]);
  useEffect(() => () => {
    if (blurTimer.current) clearTimeout(blurTimer.current);
  }, []);

  const close = () => {
    setOpen(false);
    setActive(-1);
  };
  const goTo = (href: string) => {
    close();
    router.push(href);
  };

  return {
    q,
    live,
    notLive: !live,
    searchHref,
    typeQ: (e: ChangeEvent<HTMLInputElement>) => {
      if (live) return onQuery!(e.target.value);
      setLocal(e.target.value);
      setOpen(true);
      ensureLoaded();
    },
    focus: () => {
      if (live) return;
      if (blurTimer.current) clearTimeout(blurTimer.current);
      ensureLoaded();
      setOpen(true);
    },
    // Delay so a click on a suggestion lands before the list disappears.
    blur: () => {
      blurTimer.current = setTimeout(close, 150);
    },
    key: (e: KeyboardEvent<HTMLInputElement>) => {
      if (live) return;
      if (e.key === 'Escape') return close();
      if (!matches.length) return;
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setOpen(true);
        setActive((i) => (i + 1) % (matches.length + 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setActive((i) => (i <= 0 ? matches.length : i - 1));
      }
    },
    submit: (e: FormEvent) => {
      e.preventDefault();
      if (live) return;
      if (open && active >= 0 && active < matches.length) goTo(`/san-pham/${matches[active].id}`);
      else goTo(searchHref);
    },
    suggest: {
      show: !live && open && q.trim().length > 0,
      loading: !items,
      q: q.trim(),
      matches,
      total,
      active,
      allHref: searchHref,
      hover: (i: number) => setActive(i),
      pick: close,
    },
  };
}
