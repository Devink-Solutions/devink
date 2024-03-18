'use client'

import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { spanishFaqsData } from '@/data/spanishFaqsData'
import { englishFaqsData } from '@/data/englishFaqsData'
import { portugeseFaqsData } from '@/data/portugeseFaqsData'

export function Accordion1({ locale }) {
  const f = useTranslations('Faqs')
  const [localeData, setLocaleData] = useState(spanishFaqsData)

  useEffect(() => {
    if (locale === 'es') {
      setLocaleData(spanishFaqsData)
    }
    if (locale === 'en') {
      setLocaleData(englishFaqsData)
    }
    if (locale === 'pt') {
      setLocaleData(portugeseFaqsData)
    }
  }, [locale])

  return (
    <div className="relative flex w-full flex-col items-center justify-center bg-bg-dark py-8">
      <div className="mb-10">
        <h2 className="text-center text-4xl font-semibold text-white">{f('accordion')}</h2>
      </div>

      <Accordion type="single" collapsible className="z-10 mx-auto w-full max-w-6xl">
        {localeData ? localeData.map((item) => (
          <AccordionItem key={item.id} value={item.id} className="mb-2">
            <AccordionTrigger
              className="flex items-center justify-between rounded-md bg-blue-dark px-5 py-3 text-lg font-medium text-white hover:brightness-110"
            >
              {item.title}
            </AccordionTrigger>
            <AccordionContent className="rounded-b-md bg-bg-dark p-6 text-lg font-medium text-gray-300">
              { item.content }
            </AccordionContent>
          </AccordionItem>
        )) : null}
      </Accordion>
      <Image
        src="/lightSoluciones.png"
        width={200}
        height={200}
        alt="light"
        className="absolute bottom-[-50%] left-0 h-full w-[300px] rotate-180"
      />
    </div>
  )
}

export default Accordion1
