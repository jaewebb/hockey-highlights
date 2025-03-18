import { type Highlight } from '@/app/types/Highlight'

export default function filterByTitle(listToFilter: Highlight[], searchTerm: string) {
  if (!searchTerm) return listToFilter
  return listToFilter.filter(item =>
    item.title
      .toLowerCase()
      .split(' ')
      .find(name => name.includes(searchTerm))
  )
}
