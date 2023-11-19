'use client'

/* eslint-disable import/extensions */
import { init } from '@amplitude/analytics-browser'
import { useEffect } from 'react'
import ContactForm from '@/components/ContactForm'

export default function Home() {
  useEffect(() => {
    init(process.env.NEXT_PUBLIC_AMPLITUDE_KEY)
  }, [])
  return (
    <main className="flex flex-col items-center overflow-x-hidden scroll-smooth">
      <ContactForm />
    </main>
  )
}
