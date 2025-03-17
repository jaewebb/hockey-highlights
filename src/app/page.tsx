'use client'

import { useMemo, useState } from 'react'

import { type FormEvent } from 'react'

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
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

  const filteredCountries = useMemo(() => filterCountries((countries && countries.length > 0) ? countries : [], searchTerm), [countries, searchTerm])

  return (
    <Container>
      <Box sx={{ py: '1rem' }}>
        <SearchForm handleSearch={handleSearch} handleReset={handleReset} />
      </Box>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="grid grid-cols-4 gap-4">
          {error ? (
            <ErrorAlert error={error.toString()} />
          ) : (
            <CountryList filteredCountries={filteredCountries} />
          )}
        </div>
      )}
      <footer>
        <Box sx={{ pt: '2rem', textAlign: 'center' }}>
          &copy;{ new Date().getFullYear() } Jae Webb
        </Box>
      </footer>
    </Container>
  )
}
