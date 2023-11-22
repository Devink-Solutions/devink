'use client'

/* eslint-disable max-len */
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import useObserver from '@/hooks/useObserver'
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
      className=" relative flex h-full w-full items-center justify-center bg-white py-8"
      ref={ref}
    >
      <div className="flex w-[90%] max-w-[1440px] flex-col items-center justify-center gap-4 lg:flex-row lg:gap-8 ">
        <figure className=" w-fit">
          <Image
            width={360}
            height={344}
            src="/Chatgpt.png"
            alt=""
            className="mx-auto object-contain object-center"
          />
        </figure>
        <div className="relative flex h-2/3 w-[90%] flex-col justify-between
          text-blue-dark lg:w-3/5 lg:text-left"
        >
          <div className="">
            <h4 className="text-2xl font-medium text-cyan-bright sm:text-xl">
              Creativos, Energicos y Dedicados
            </h4>
            <h3 className="pt-2 text-xl font-medium sm:pt-4 sm:text-2xl">
              Venimos a cambiar el paradigma tecnologico de nuestros clientes!
            </h3>
            <p className=" py-2 text-lg font-light sm:py-4">
              Somos una nueva empresa de IT formada por un equipo de
              profesionales especializados en la creacion de software de alto
              rendimiento nuestras soluciones implementan toda la creatividad de
              nuestro equipo, junto con las ultimas tecnologias para satisfacer
              los requerimientos de nuestros clientes.
            </p>
          </div>
          <button type="button" className=" mt-8 lg:mt-4 lg:self-start" onClick={handlePress}>
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
