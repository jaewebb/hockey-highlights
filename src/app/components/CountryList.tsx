import Link from 'next/link'
import CountryCard from '@/app/components/CountryCard'

import { type Country } from '@/app/types/Country'

export default function CountryList({ filteredCountries }: { filteredCountries: Country[] }) {
  if (filteredCountries.length < 1) return <div data-testid="no-results">No Results Found.</div>
  return filteredCountries.map(country => {
    return (
      <Link href={`/leagues?countryCode=${country.code}`} key={`country-card-${country.code}`}>
        <CountryCard country={country} />
      </Link>
    )
  })
}
