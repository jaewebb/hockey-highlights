import CountryCard from '@/app/components/CountryCard'

import { type Country } from '@/app/types/Country'

export default function CountryList({ filteredCountries }: { filteredCountries: Country[] }) {
  console.log(filteredCountries)
  if (filteredCountries.length < 1) return <div data-testid="no-results">No Results Found.</div>
  return filteredCountries.map(country => {
    return <CountryCard key={`country-card-${country.code}`} country={country} />
  })
}
