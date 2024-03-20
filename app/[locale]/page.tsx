'use client'

/* eslint-disable import/extensions */
import { init } from '@amplitude/analytics-browser'
import { useEffect } from 'react'
import { Accordion } from '@radix-ui/react-accordion'
import Hero from '@/components/Hero'
import OurServicesScreen from '@/components/OurServicesScreen'
import ContactForm from '@/components/ContactForm'
import InfiniteSlider from '@/components/InfiniteSlider'
import SolucionesDigitales from '@/components/SolucionesDigitales'
import ServicesCard from '@/components/ServicesCard'
import SuccessCases from '@/components/SuccessCases'
import Accordion1 from '@/components/Accordion1'

export default function Home({ params: { locale } }) {
  useEffect(() => {
    init(process.env.NEXT_PUBLIC_AMPLITUDE_KEY, {
      defaultTracking: true,
    })
  }, [])

  console.log()

  return (
    <main className="flex flex-1 flex-col items-center overflow-x-hidden scroll-smooth bg-bg-dark">
      <Hero />
      <InfiniteSlider />
      <SolucionesDigitales />
      <OurServicesScreen locale={locale} />
      <ServicesCard />
      <SuccessCases />
      <Accordion1 locale={locale} />
      <ContactForm />

    </main>
  )
}
