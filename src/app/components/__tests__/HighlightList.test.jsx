import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import HighlightList from '@/app/components/HighlightList'

test('Shows no results found when filtered highlight list is empty', async () => {
  render(<HighlightList filteredHighlights={[]} searchTerm={'highlight'} />)

  const noResults = screen.getByTestId('no-results')

  expect(noResults).toBeInTheDocument()
  expect(noResults).toHaveTextContent('No Results Found')
})
