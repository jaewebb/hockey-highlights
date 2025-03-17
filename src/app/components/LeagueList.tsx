import Link from 'next/link'
import LeagueCard from '@/app/components/LeagueCard'

import { type League } from '@/app/types/League'

export default function LeagueList({ filteredLeagues }: { filteredLeagues: League[] }) {
  if (filteredLeagues.length < 1) return <div data-testid="no-results">No Results Found.</div>
  return filteredLeagues.map(league => {
    return (
      <Link href={`/highlights?leagueId=${league.id}`} key={`league-card-${league.id}`}>
        <LeagueCard key={`league-card-${league.code}`} league={league} /> 
      </Link>
    )
  })
}
