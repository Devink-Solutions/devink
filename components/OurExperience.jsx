'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import useObserver from '@/hooks/useObserver'
import GearColumn from './GearColumn'

const OurExperience = () => {
  const [ref, inView] = useObserver({ threshold: 0.7 })
  const [isInView, setIsInView] = useState(false)
  useEffect(() => {
    if (inView) {
      setIsInView(true)
    }
  }, [inView])

  return (
    <section
      id="contact"
      style={{ scrollMarginTop: '80px' }}
      className=" relative flex h-full w-full items-center justify-center pb-8 sm:pt-12 "
      ref={ref}
    >
      <div className="absolute -top-20 left-10 z-10">
        <GearColumn />
      </div>
      <div className="absolute -top-20 right-10 z-10">
        <GearColumn />
      </div>
      <div className="flex w-full flex-col items-center justify-center md:max-w-[70%] xl:ml-10 xl:flex-row">
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
            <h4 className="text-xl font-medium text-cyan-bright">
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
          <Link
            href="https://usemotion.com/meet/ian-duhamel/devink?d=20"
            target="_blank"
            className={`mt-2 w-fit self-center rounded-xl bg-blue-dark px-8 py-2 text-center text-xl font-medium 
            text-white shadow-lg transition-colors duration-300 hover:bg-cyan-bright hover:text-blue-dark md:w-[180px] xl:self-start 
            ${isInView ? 'animate-shake animate-ease-in-out' : undefined}`}
          >
            Agendar una reunion
          </Link>
        </div>
      </div>
    </section>
  )
}

export default OurExperience
