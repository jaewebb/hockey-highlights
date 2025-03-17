import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import CountryList from '@/app/components/CountryList'

test('Shows no results found when filtered country list is empty', async () => {
  render(<CountryList filteredCountries={[]} searchTerm={'country'} />)

  const noResults = screen.getByTestId('no-results')

  expect(noResults).toBeInTheDocument()
  expect(noResults).toHaveTextContent('No Results Found')
})
