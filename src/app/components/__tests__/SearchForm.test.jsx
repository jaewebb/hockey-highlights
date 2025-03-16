import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import SearchForm from '../SearchForm'

const handleSearch = jest.fn()
handleSearch.mockImplementation(event => {
  event.preventDefault()
})

const handleClear = jest.fn()
handleClear.mockImplementation(event => {
  event.preventDefault()
})

test('loads the search form', async () => {
  render(<SearchForm handleSearch={handleSearch} handleClear="handleClear" />)

  const input = screen.getByLabelText('Search Country')
  const searchButton = screen.getByRole('button', { name: 'Search' })
  const clearButton = screen.getByRole('button', { name: 'Clear' })

  expect(input).toBeInTheDocument()
  expect(searchButton).toBeInTheDocument()
  expect(clearButton).toBeInTheDocument()
})

test('clicks the search button', async () => {
  render(<SearchForm handleSearch={handleSearch} handleClear="handleClear" />)

  const button = screen.getByRole('button', { name: 'Search' })

  await userEvent.click(button)
})

test('clicks the clear button', async () => {
  render(<SearchForm handleSearch={handleSearch} handleClear="handleClear" />)

  const button = screen.getByRole('button', { name: 'Clear' })
  const input = screen.getByLabelText('Search Country')

  await userEvent.click(input)
  await userEvent.keyboard('test')
  await userEvent.click(button)
  expect(screen.getByLabelText('Search Country')).toHaveValue('')
})
