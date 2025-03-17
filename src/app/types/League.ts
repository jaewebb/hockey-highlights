import { Country } from '@/app/types/Country'

export interface Season {
  season: number
}

export interface League {
  id: number,
  logo: string
  name: string,
  country: Country
  seasons: Season[]
}

export interface LeagueResponse {
  data: League[],
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
