'use client';

import MHeaderView from '@/views/mob/MHeaderView';
import { useSearchBox } from '@/lib/useSearchBox';

type Props = { query?: string; onQuery?: (q: string) => void; go?: unknown };

/** Mobile header pill: logo, search, call and Zalo buttons. */
export default function MHeader({ query, onQuery }: Props) {
  const vm = useSearchBox(query, onQuery);
  return <MHeaderView vm={vm} />;
}
