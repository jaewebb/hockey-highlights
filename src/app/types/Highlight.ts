import { Country } from '@/app/types/Country'
import { League } from '@/app/types/League'

export interface Season {
  season: number
}

export interface Highlight {
  id: number,
  type: string,
  imgUrl: string
  title: string,
  description: string,
  url: string,
  embedUrl: string,
  match: {
    id: number,
    week: number,
    date: Date,
    country: Country,
    awayTeam: {
      id: number,
      logo: string,
      name: string
    },
    homeTeam: {
      id: number,
      logo: string,
      name: string
    },
    league: League,
    state: {
      description: string,
      score: {
        current: string,
        overTime: string,
        penalties: string,
        firstPeriod: string,
        secondPeriod: string,
        thirdPeriod: string
      },
      channel: string,
      source: string
    }
  }
}

export interface HighlightResponse {
  data: Highlight[],
  pagination: {
    totalCount: number,
    offset: number,
    limit: number
  },
  plan: {
    tier: string,
    message: string
  }
}
