import HockeyCard from '@/app/components/HockeyCard';

import { type League } from '@/app/types/League'

export default function LeagueCard({ league }: { league: League }) {
  return (
    <HockeyCard
      altText={`Thumbnail preview of ${league.name}`}
      height={100}
      imgSrc={league.logo}
      label={league.name}
      useExternalImageLoader={false}
      width={500}
    />
  )
}
