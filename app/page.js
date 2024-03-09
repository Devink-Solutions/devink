'use client'

/* eslint-disable import/extensions */
import { init } from '@amplitude/analytics-browser'
import { useEffect } from 'react'
import Hero from '@/components/Hero'
import OurServicesScreen from '@/components/OurServicesScreen'
import ContactForm from '@/components/ContactForm'
import InfiniteSlider from '@/components/InfiniteSlider'
import SolucionesDigitales from '@/components/SolucionesDigitales'
import ServicesCard from '@/components/ServicesCard'
import SuccessCases from '@/components/SuccessCases'

export default function Home() {
  useEffect(() => {
    init(process.env.NEXT_PUBLIC_AMPLITUDE_KEY, {
      defaultTracking: true,
    })
  }, [])

  return (
    <main className="flex flex-col items-center overflow-x-hidden scroll-smooth bg-bg-dark">
      <Hero />
      <InfiniteSlider />
      <SolucionesDigitales />
      <OurServicesScreen />
      <ServicesCard />
      <SuccessCases />
      <ContactForm />

    </main>
  )
}
