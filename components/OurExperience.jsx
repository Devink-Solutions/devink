'use client'

/* eslint-disable max-len */
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import useObserver from '@/hooks/useObserver'
import GearColumn from './GearColumn'
import { trackAmplitudeEvent } from '@/utils/AmplitudeTrackers'

const OurExperience = () => {
  const [ref, inView] = useObserver({ threshold: 0.7 })
  const [isInView, setIsInView] = useState(false)
  useEffect(() => {
    if (inView) {
      setIsInView(true)
    }
  }, [inView])
  const handlePress = () => {
    trackAmplitudeEvent('call-scheduled')
  }

  return (
    <section
      id="contact"
      style={{ scrollMarginTop: '80px' }}
      className=" relative flex h-full w-full items-center justify-center bg-white pb-8 sm:pt-12"
      ref={ref}
    >
      <div className="absolute -top-20 left-10 z-10">
        <GearColumn />
      </div>
      <div className="absolute -top-20 right-10 z-10">
        <GearColumn />
      </div>
      <div className="flex w-full flex-col items-center justify-center md:max-w-[70%] xl:ml-10 xl:flex-row ">
        <figure className="hidden w-fit lg:inline-flex">
          <Image
            width={360}
            height={344}
            src="/Chatgpt.png"
            alt=""
            className="mx-auto object-contain object-center"
          />
        </figure>
        <div className="relative mt-8 flex h-2/3 w-[90%] flex-col justify-between p-2
         text-center text-blue-dark md:px-3 lg:w-3/5 xl:ml-12 xl:mt-0 xl:w-4/6 xl:text-left"
        >
          <div className="px-10 md:px-0">
            <h4 className=" text-2xl md:text-xl font-medium text-cyan-bright">
              Creativos, Energicos y Dedicados
            </h4>
            <h3 className="pt-2 text-xl font-medium md:pt-4 md:text-2xl">
              Venimos a cambiar el paradigma tecnologico de nuestros clientes!
            </h3>
            <p className="py-2 text-lg font-light md:py-4">
              Somos una nueva empresa de IT formada por un equipo de
              profesionales especializados en la creacion de software de alto
              rendimiento nuestras soluciones implementan toda la creatividad de
              nuestro equipo, junto con las ultimas tecnologias para satisfacer
              los requerimientos de nuestros clientes.
            </p>
          </div>
          <button type="button" className=" mt-8 xl:mt-4 xl:self-start" onClick={handlePress}>
            <Link
              href="https://usemotion.com/meet/ian-duhamel/devink?d=20"
              target="_blank"
              className={`w-fit self-center rounded-full border-2 border-cyan-bright bg-blue-dark px-10 py-3 text-center text-xl font-medium text-cyan-bright shadow-lg transition-colors duration-300 md:w-[180px] xl:mt-2 xl:self-start ${isInView ? 'animate-shake animate-ease-in-out' : undefined}`}
            >
              Agendar una reunion
            </Link>

          </button>
        </div>
      </div>
    </section>
  )
}

export default OurExperience
