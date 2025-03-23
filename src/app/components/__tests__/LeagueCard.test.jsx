import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import LeagueCard from '@/app/components/LeagueCard'

test('Renders the league card', async () => {
  const league = {
    id: 16953,
    logo: "https://example.com/logos/league/16953.png",
    name: "DEL",
    country: {
      code: "DE",
      name: "Germany",
      logo: "https://example.com/logos/country/DE.png"
    },
    seasons: [{ "season": 2023 }]
}
  render(<LeagueCard league={league} searchTerm={'nada'} />)

  const name = screen.getByRole('paragraph')

  expect(name).toHaveTextContent(league.name)
})
