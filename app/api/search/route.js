import { NextResponse } from 'next/server'

export async function GET (req) {
  const EDAMAM_ENDPOINT = '/recipes/v2'
  const { searchParams } = new URL(req.url)
  const q = searchParams.get('q')

  const headersList = {
    Accept: 'application/json',
    'Accept-Language': 'spa'
  }

  const response = await fetch(`${process.env.EDAMAM_BASEURL}${EDAMAM_ENDPOINT}?type=public&beta=false&q=${q}&app_id=${process.env.EDAMAM_APP_ID}&app_key=${process.env.EDAMAM_APP_KEY}`, {
    method: 'GET',
    headers: headersList
  })

  const data = await response.json()
  console.log(data)
  return NextResponse.json(data)
}
