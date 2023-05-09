import { NextResponse } from 'next/server'

export async function GET (req) {
  const { searchParams } = new URL(req.url)
  const token = searchParams.get('token')
  const method = searchParams.get('method')
  const q = searchParams.get('q')

  console.log(token)
  console.log(method)
  console.log(q)
  console.log(process.env.FATSECRET_BASEURL)

  const headersList = {
    Accept: '*/*',
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`
  }

  const response = await fetch(`${process.env.FATSECRET_BASEURL}?method=${method}&search_expression=${q}&format=json`, {
    method: 'POST',
    headers: headersList
  })

  const data = await response
  console.log(data)
  return NextResponse.json({ data })
}
