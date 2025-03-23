import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import ThemeToggle from '@/app/components/ThemeToggle'

test('Renders the dark mode toggle', async () => {
  render(<ThemeToggle />)

  const darkModeToggle = screen.getByTestId('darkModeToggle')

  expect(darkModeToggle).toBeInTheDocument()
})
