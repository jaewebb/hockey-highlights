import useSWR from 'swr'

import { type League } from '@/app/types/League'

const fetcher = (url: string) => fetch(url).then(res => res.json())

export default function useLeague(url: string) {
  const { data, error, isLoading } = useSWR<League[], string>(url, fetcher)

  return {
    leagues: data,
    isLoading,
    error,
  }
}
