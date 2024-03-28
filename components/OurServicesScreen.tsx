/* eslint-disable max-len */
import { useEffect, useState } from 'react'
import spanishServicesData from '@/data/spanishServicesData'

function ServiceCard({ Icon, title, description }: { Icon: any, title: string, description: string }) {
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

export default function OurServicesScreen({ locale }: { locale: string }) {
  const [localeData, setLocaleData] = useState(spanishServicesData)

  useEffect(() => {
    if (locale === 'es') {
      setLocaleData(spanishServicesData)
    }
    // to-do arreglar estas traducciones, ian arreglo la de sp

    // if (locale === 'en') {
    //   setLocaleData(englishServicesData)
    // }
    // if (locale === 'pt') {
    //   setLocaleData(portugueseServicesData)
    // }
  }, [locale])
  return (
    <div className="relative w-full">
      <div className="mx-auto flex w-[90%] max-w-[1440px] flex-col items-center bg-bg-dark text-white ">
        <h2 className="mb-8 text-4xl font-semibold">Nuestros servicios</h2>
        <p className="mb-8 text-center text-gray-400">
          Ofrecemos una amplia gama de servicios para ayudarte a alcanzar tus objetivos empresariales.
        </p>
        <div className="grid max-w-[1440px] grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 ">
          {localeData.map((service) => (
            <ServiceCard
              key={service.id}
              Icon={service.icon}
              title={service.title}
              description={service.content}
            />
          ))}
        </div>

      </div>
      {/* comentada hasta agregar la seccion de casos de exito nuevamente */}
      {/* <Image
        src="/lightSoluciones.png"
        width={200}
        height={200}
        alt="light"
        className="absolute bottom-[-50%] left-0 h-full w-[300px] rotate-180"
      /> */}
    </div>
  )
}
