'use client'

import { useMemo, useState } from 'react'

import { type FormEvent } from 'react'

import ErrorAlert from '@/app/components/ErrorAlert'
import CountryList from '@/app/components/CountryList'
import SearchForm from '@/app/components/SearchForm'

import filterCountries from '@/app/utils/filterCountries'

import useCountry from './hooks/useCountry'

export default function Home() {
  const { countries, isLoading, error } = useCountry('/api/countries')
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const searchTerm = formData.get('searchTerm') as string
    setSearchTerm(searchTerm.trim().toLowerCase())
  }

  const handleReset = () => {
    setSearchTerm('')
  }

  const filteredCountries = useMemo(() => filterCountries(countries ?? [], searchTerm), [countries, searchTerm])

  return (
    <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '1rem' }}>
      <div style={{ padding: '2rem 0' }}>
        <SearchForm handleSearch={handleSearch} handleReset={handleReset} />
      </div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div style={{
          columnGap: '1rem',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          rowGap: '1rem'
        }}>
          {error ? (
            <ErrorAlert error={error.toString()} />
          ) : (
            <CountryList filteredCountries={filteredCountries} />
          )}
        </div>
      )}
      <footer style={{ paddingTop: '2rem', textAlign: 'center' }}>&copy;{ new Date().getFullYear() } Jae Webb</footer>
    </div>
  )
}
