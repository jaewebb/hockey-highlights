import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import HighlightCard from '@/app/components/HighlightCard'

test('Renders the highlight card', async () => {
  const highlight = {
    id: 16,
    type: "VERIFIED",
    imgUrl: "https://example.com/images/preview/16.png",
    title: "DEL: Frankfurt Lowen vs Kolner",
    description: "Game recap of the match.",
    url: "https://example.com/highlight/13efe2g4t542",
    embedUrl: "https://example.com/embed/13efe2g4t542",
    match: {
      id: 291869956,
      week: "1",
      date: "2023-10-13T17:30:00.000Z",
      country: {
        code: "DE",
        name: "Germany",
        logo: "https://example.com/logos/country/DE.png"
      },
      awayTeam: {
        id: 223746,
        logo: "https://example.com/logos/team/223746.png",
        name: "Frankfurt Lowen"
      },
      homeTeam: {
        id: 223746,
        logo: "https://example.com/logos/team/223746.png",
        name: "Frankfurt Lowen"
      },
      league: {
        id: 16953,
        season: 2023,
        name: "DEL",
        logo: "https://example.com/logos/league/16953.png"
      },
      state: {
        description: "1st period",
        score: {
          current: "4 - 4",
          overTime: "6 - 4",
          penalties: "17 - 33",
          firstPeriod: "2 - 0",
          secondPeriod: "2 - 1",
          thirdPeriod: "5 - 2"
        }
      }
    },
    channel: "Ligue 1 Uber Eats",
    source: "youtube"
  }

  render(<HighlightCard highlight={highlight} searchTerm={'nada'} />)

  const name = screen.getByRole('paragraph')

  expect(name).toHaveTextContent(highlight.title)
})
