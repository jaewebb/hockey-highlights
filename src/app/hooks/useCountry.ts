import useSWR from 'swr'

import { type Country } from '@/app/types/Country'

const fetcher = (url: string) => fetch(url).then(res => res.json())

export default function useCountry(url: string) {
  const { data, error, isLoading } = useSWR<Country[], string>(url, fetcher)

  return {
    countries: data,
    isLoading,
    error,
  }
}
