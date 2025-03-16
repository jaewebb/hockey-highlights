import { NextResponse } from 'next/server'

export async function GET() {
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': process.env.API_KEY!,
    },
  }

  try {
    const data = await fetch(`${process.env.API_BASE_URL}/countries`, options)
    const countries = await data.json()

    return NextResponse.json(countries, { status: 200, })
  } catch (error) {
    return NextResponse.json({ error, }, { status: 500, })
  }
}
