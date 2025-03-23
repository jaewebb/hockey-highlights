import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import AppFooter from '@/app/components/AppFooter'

test('Renders the dark mode toggle', async () => {
  render(<AppFooter />)

  const footerLink = screen.getByRole('link')

  expect(footerLink).toBeInTheDocument()
  expect(footerLink).toHaveTextContent('Highlightly')
})
