import HockeyCard from '@/app/components/HockeyCard';

import { type Country } from '@/app/types/Country'

export default function CountryCard({ country }: { country: Country }) {
  return (
    <HockeyCard
      altText={`Country logo of ${country.name}`}
      height={100}
      imgSrc={country.logo}
      label={country.name}
      useExternalImageLoader={false}
      width={100}
    />
  )
}
