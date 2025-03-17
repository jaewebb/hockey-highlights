import { type Country } from '@/app/types/Country'
import { type League } from '@/app/types/League'

export default function filterByName(listToFilter: Country[] | League[], searchTerm: string) {
  if (!searchTerm) return listToFilter
  return listToFilter.filter(item =>
    item.name
      .toLowerCase()
      .split(' ')
      .find(name => name.includes(searchTerm))
  )
}
