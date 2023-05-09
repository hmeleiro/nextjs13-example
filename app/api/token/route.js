import { NextResponse } from 'next/server'

export async function GET () {
  const headersList = {
    Accept: '*/*',
    'Content-Type': 'application/x-www-form-urlencoded',
    Authorization: 'Basic OGQ0NjVjZTM1ZWU0NDg4M2EwZTEyMmRjMDcxMDI0MTM6NmFmODY4MzA1OThkNDAxMjkzYTNmY2QxZGIzMDU0MjU='
  }

  const bodyContent = 'grant_type=client_credentials&scope=basic'

  const response = await fetch('https://oauth.fatsecret.com/connect/token', {
    method: 'POST',
    body: bodyContent,
    headers: headersList
  })

  const data = await response.json()
  return NextResponse.json(data)
}
