import useSWR from 'swr'

import { type Highlight } from '@/app/types/Highlight'

const fetcher = (url: string) => fetch(url).then(res => res.json())

export default function useHighlight(url: string) {
  const { data, error, isLoading } = useSWR<Highlight[], string>(url, fetcher)

  return {
    highlights: data,
    isLoading,
    error,
  }
}
