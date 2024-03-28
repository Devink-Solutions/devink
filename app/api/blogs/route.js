import { NextResponse } from 'next/server'

export async function GET() {
  const res = await fetch(
    'https://devink-cms.cap.devink.site/api/blogs?populate[cover][populate][]=media',
    {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  )
  const data = await res.json()

  return NextResponse.json({ data })
}
