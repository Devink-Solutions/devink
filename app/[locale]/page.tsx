'use client'

/* eslint-disable import/extensions */
import { init } from '@amplitude/analytics-browser'
import { useEffect } from 'react'
import Hero from '@/components/Hero'
import OurServicesScreen from '@/components/OurServicesScreen'
import ContactForm from '@/components/ContactForm'
import SolucionesDigitales from '@/components/SolucionesDigitales'
import ServicesCard from '@/components/ServicesCard'
import SuccessCases from '@/components/SuccessCases'
import { Accordion1 } from '@/components/Accordion1'

export default function Home({ params: { locale } }) {
  useEffect(() => {
    init(process.env.NEXT_PUBLIC_AMPLITUDE_KEY, {
      defaultTracking: true,
    })
  }, [])

  return (
    <main className="main-container relative flex h-full flex-col items-center justify-between overflow-x-hidden scroll-smooth bg-bg-dark">
      <Hero />
      <SolucionesDigitales />
      <OurServicesScreen locale={locale} />
      {/* <ServicesCard /> */}
      <SuccessCases />
      <Accordion1 locale={locale} />
      <ContactForm />
    </main>
  )
}
