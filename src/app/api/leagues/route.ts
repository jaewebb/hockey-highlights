import { NextResponse, type NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const countryCode = searchParams.get('countryCode')

  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': process.env.API_KEY!,
    },
  }

  try {
    const data = await fetch(`${process.env.API_BASE_URL}/leagues?countryCode=${countryCode}`, options)
    const leagues = await data.json()

    return NextResponse.json(leagues.data, { status: 200, })
  } catch (error) {
    return NextResponse.json({ error, }, { status: 500, })
  }
}
