import HockeyCard from '@/app/components/HockeyCard';

import { type Highlight } from '@/app/types/Highlight'

export default function HighlightCard({ highlight }: { highlight: Highlight }) {
  return (
    <HockeyCard
      altText={`Thumbnail preview of ${highlight.title}`}
      height={100}
      imgSrc={highlight.imgUrl}
      label={highlight.title}
      useExternalImageLoader={true}
      width={500}
    />
  )
}
