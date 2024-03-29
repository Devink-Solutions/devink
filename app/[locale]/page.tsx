/* eslint-disable import/extensions */
import Hero from '@/components/Hero'
import OurServicesScreen from '@/components/OurServicesScreen'
import ContactForm from '@/components/ContactForm'
import SolucionesDigitales from '@/components/SolucionesDigitales'
import SuccessCases from '@/components/SuccessCases'
import { FaqsAccordion } from '@/components/FaqsAccordion'
import { getGhostBlogs } from '../ghost/blogs'
import ServicesCard from '@/components/ServicesCard'

export default async function Home({ params: { locale } }: { params: { locale: string } }) {
  return (
    <main className="main-container relative flex h-full flex-col items-center justify-between overflow-x-hidden scroll-smooth bg-bg-dark">
      <Hero />
      <SolucionesDigitales />
      <OurServicesScreen locale={locale} />
      <ServicesCard locale={locale} />
      <SuccessCases />
      <FaqsAccordion locale={locale} />
      <ContactForm />
    </main>
  )
}
