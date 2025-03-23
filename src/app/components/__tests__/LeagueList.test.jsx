import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import LeagueList from '@/app/components/LeagueList'

test('Shows no results found when filtered league list is empty', async () => {
  render(<LeagueList filteredLeagues={[]} searchTerm={'league'} />)

  const noResults = screen.getByTestId('no-results')

  expect(noResults).toBeInTheDocument()
  expect(noResults).toHaveTextContent('No Results Found')
})
