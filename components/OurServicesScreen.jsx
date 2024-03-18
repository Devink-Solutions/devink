/* eslint-disable max-len */
import { v4 as uuidv4 } from 'uuid'
import {
  FaCode, FaBusinessTime, FaChartBar, FaRobot,
} from 'react-icons/fa'
import { SlEnergy } from 'react-icons/sl'
import { TbColorSwatch } from 'react-icons/tb'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { useEffect, useState } from 'react'
import { spanishServicesData } from '@/data/spanishServicesData'
import { englishServicesData } from '@/data/englishServicesData'
import { portugeseServicesData } from '@/data/portugeseServicesData'

const services ({locale}) = [
  const o = useTranslations('OurServicesScreen')
  const [localeData, setLocaleData] = useState(spanishFaqsData)

  useEffect(() => {
    if (locale === 'es') {
      setLocaleData(spanishServicesData)
    }
    if (locale === 'en') {
      setLocaleData(englishServicesData)
    }
    if (locale === 'pt') {
      setLocaleData(portugeseServicesData)
    }
  }, [locale])
  {
    Icon: FaCode,
    title: {o('title1')},
    description: {o('content1')},
  },
  {
    Icon: FaBusinessTime,
    title: {o('title2')},
    description: {o('content2')},
  },
  {
    Icon: TbColorSwatch,
    title: {o('title3')},
    description:  {o('content3')},
  },
  {
    Icon: FaChartBar,
    title: {o('title4')},
    description:  {o('content4')},
  },
  {
    Icon: FaRobot,
    title: {o('title5')},
    description:  {o('content5')},
  },

  {
    Icon: SlEnergy,
    title: {o('title6')},
    description:  {o('content6')},
  },
]

function ServiceCard({ Icon, title, description }) {
  return (
    <div className="flex flex-col gap-2 rounded-lg bg-blue-dark p-6 shadow-md transition-shadow duration-300 hover:shadow-lg">
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-bg-dark ">
        <Icon className=" h-5 w-5 object-contain object-center text-white" />
      </div>
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  )
}

function Services() {
  return (
    <div className="relative w-full">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center bg-bg-dark p-12 text-white ">
        <h2 className="mb-8 text-4xl font-semibold">Nuestros servicios</h2>
        <p className="mb-8 text-center text-gray-400">
          Ofrecemos una amplia gama de servicios para ayudarte a alcanzar tus objetivos empresariales.
        </p>
        <div className="mb-20 grid max-w-[1440px] grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 ">
          {services.map((service) => (
            <ServiceCard
              key={uuidv4()}
              Icon={service.Icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>

      </div>
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

export default Services
