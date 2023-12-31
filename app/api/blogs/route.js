import { NextResponse } from 'next/server'

export async function GET() {
  const res = await fetch('https://strapi-cms.devink.tech/api/blogs?populate[cover][populate][]=media', {
    headers: {
      'Content-Type': 'application/json',
    },
  })
  const data = await res.json()

  return NextResponse.json({ data })
}
