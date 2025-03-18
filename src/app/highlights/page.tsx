'use client'

import { useMemo, useState } from 'react'
import { useSearchParams } from 'next/navigation'

import { type FormEvent } from 'react'

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import ErrorAlert from '@/app/components/ErrorAlert'
import HighlightList from '@/app/components/HighlightList'
import SearchForm from '@/app/components/SearchForm'

import filterByTitle from '@/app/utils/filterByTitle'

import useHighlight from '@/app/hooks/useHighlight'

export default function Highlights() {
  const searchParams = useSearchParams()
 
  const leagueId = searchParams.get('leagueId')

  const { highlights, isLoading, error } = useHighlight(`/api/highlights?leagueId=${leagueId}`)
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

  const filteredHighlights = useMemo(() => filterByTitle((highlights && highlights.length > 0) ? highlights : [], searchTerm), [highlights, searchTerm])

  return (
    <Container>
      <Box sx={{ py: '1rem' }}>
        <SearchForm label="Search Highlight" handleSearch={handleSearch} handleReset={handleReset} />
      </Box>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="grid grid-cols-4 gap-4">
          {error ? (
            <ErrorAlert error={error.toString()} />
          ) : (
            <HighlightList filteredHighlights={filteredHighlights} />
          )}
        </div>
      )}
    </Container>
  )
}
