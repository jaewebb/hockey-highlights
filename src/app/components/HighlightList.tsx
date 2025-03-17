import Link from 'next/link'
import HighlightCard from '@/app/components/HighlightCard'

import { type Highlight } from '@/app/types/Highlight'

export default function HighlightList({ filteredHighlights }: { filteredHighlights: Highlight[] }) {
  if (filteredHighlights.length < 1) return <div data-testid="no-results">No Results Found.</div>
  return filteredHighlights.map(highlight => {
    return (
      <Link href={highlight.url} key={`highlight-card-${highlight.id}`}>
        <HighlightCard key={`highlight-card-${highlight.id}`} highlight={highlight} />
      </Link>
    )
  })
}
