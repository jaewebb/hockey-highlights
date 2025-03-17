'use client'

import { useMemo, useState } from 'react'
import { useSearchParams } from 'next/navigation'

import { type FormEvent } from 'react'

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import ErrorAlert from '@/app/components/ErrorAlert'
import LeagueList from '@/app/components/LeagueList'
import SearchForm from '@/app/components/SearchForm'

import filterByName from '@/app/utils/filterByName'

import useLeague from '@/app/hooks/useLeague'

export default function Highlights() {
  const searchParams = useSearchParams()
 
  const leagueId = searchParams.get('leagueId')

  const { leagues, isLoading, error } = useLeague(`/api/highlights?leagueId=${leagueId}`)
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

  const filteredLeagues = useMemo(() => filterByName((leagues && leagues.length > 0) ? leagues : [], searchTerm), [leagues, searchTerm])

  return (
    <Container>
      <Box sx={{ py: '1rem' }}>
        <SearchForm label="Search League" handleSearch={handleSearch} handleReset={handleReset} />
      </Box>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="grid grid-cols-4 gap-4">
          {error ? (
            <ErrorAlert error={error.toString()} />
          ) : (
            <LeagueList filteredLeagues={filteredLeagues} />
          )}
        </div>
      )}
    </Container>
  )
}
