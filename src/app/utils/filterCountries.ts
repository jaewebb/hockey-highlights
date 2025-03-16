import { type Country } from '../types/Country'

export default function filterCountries(countries: Country[], searchTerm: string) {
  if (!searchTerm) return countries
  return countries.filter(country =>
    country.name
      .toLowerCase()
      .split(' ')
      .find(name => name.includes(searchTerm))
  )
}
