import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import CountryCard from '../CountryCard'

test('Renders the country card', async () => {
  const country = {
    'code': 'CA',
    'name': 'Canada',
    'logo': 'http://highlightly.net/hockey/images/countries/CA.svg'
  }
  render(<CountryCard country={country} searchTerm={'nada'} />)

  const name = screen.getByRole('paragraph')

  expect(name).toHaveTextContent(country.name)
})
