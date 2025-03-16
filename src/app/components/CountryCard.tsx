import Image from "next/image";

import { type Country } from '../types/Country'
import { relative } from "path";

export default function CountryCard({ country }: { country: Country }) {
  return (
    <div style={{
      border: '0.1rem solid #bbbbbb',
      borderRadius: '1.875rem',
      backgroundColor: '#fafafa',
      color: '#111111',
      filter: 'drop-shadow(#bbbbbb 0.3rem 0.3rem 0.3rem)',
      flex: '48%',
      position: 'relative'
    }}>
      <Image
        src={country.logo}
        alt={`Country logo of ${country.name}`}
        fill={true}
        loading="lazy"
      />
      <div style={{
        display: 'Roboto_Flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '2rem'
      }}>
        <p style={{ marginTop: 0 }}>{country.name}</p>
      </div>
    </div>
  )
}
