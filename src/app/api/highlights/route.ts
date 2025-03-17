import { NextResponse, type NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const leagueId = searchParams.get('leagueId')

  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': process.env.API_KEY!,
    },
  }

  try {
    const data = await fetch(`${process.env.API_BASE_URL}/highlights?leagueId=${leagueId}`, options)
    const highlights = await data.json()

    return NextResponse.json(highlights.data, { status: 200, })
  } catch (error) {
    return NextResponse.json({ error, }, { status: 500, })
  }
}
