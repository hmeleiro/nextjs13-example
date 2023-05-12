import { NextResponse } from 'next/server'

export async function GET (req) {
  const ENDPOINT = '/api/v2/search'
  const { searchParams } = new URL(req.url)
  const q = searchParams.get('q')
  const headersList = {
    Accept: 'application/json',
    'User-Agent': 'calorie calculator',
    Authorization: 'Basic ' + Buffer.from('off' + ':' + 'off').toString('base64')
  }

  const queryparams = new URLSearchParams({
    categories_tags: q
  })

  const data = await fetch(`${process.env.OPENFOODFACTS_BASEURL}${ENDPOINT}?` + queryparams, {
    method: 'GET',
    headers: headersList
  })
    .then((response) => response.json())
    .then((data) => {
      return data
    })

  return NextResponse.json(data)
}
