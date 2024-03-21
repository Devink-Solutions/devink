/* eslint-disable tailwindcss/no-custom-classname */

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
      className=" relative flex h-full w-full items-center justify-center bg-white py-12"
      ref={ref}
    >
      <div className="flex w-[90%] max-w-[1440px] flex-col items-center justify-center gap-4 lg:flex-row lg:gap-8 ">
        <figure className="w-fit">
          <Image
            width={318}
            height={276}
            src="/Augmented-reality.png"
            alt="form-image"
            className="mx-auto object-contain object-center"
          />
        </figure>
        <div className="relative flex h-2/3 w-[90%] flex-col justify-between
          text-blue-dark lg:w-fit lg:text-left"
        >
          <div className="">
            <h3 className="pt-2 text-xl font-medium text-cyan sm:pt-4 sm:text-2xl">
              Creatividad y Energía en Cada Soluciónxd:
            </h3>
            <p className=" max-w-[720px] py-2 text-lg font-light sm:py-4">
              Estamos aquí para marcar una diferencia en el mundo tecnológico. Como una empresa emergente en el sector IT, nuestro equipo de profesionales aporta una combinación única de creatividad y especialización técnica.
              Con nosotros, tu proyecto no es solo un trabajo más, es nuestra oportunidad de innovar y superar expectativas.
            </p>
            <p className="hidden max-w-[660px] pb-2 md:flex">

              ¿Listo para llevar tu negocio al siguiente nivel con soluciones tecnológicas a medida? Agenda una reunión con nosotros hoy y comienza a transformar tus ideas en realidad.
            </p>
          </div>
          <button type="button" className=" mt-8 lg:mt-4 lg:self-start" onClick={handlePress}>
            <Link
              href="https://calendly.com/devinksolutions/30min"
              target="_blank"
              className={`w-fit self-center rounded-full border-[2px] border-cyan-bright bg-blue-dark px-10 py-3 text-center 
              text-xl font-semibold text-cyan-bright shadow-lg transition-colors duration-300 md:w-[180px] xl:mt-2 xl:self-start ${isInView ? 'animate-shake animate-ease-in-out' : undefined}`}
            >
              Empezar
            </Link>

          </button>
        </div>
      </div>
    </section>
  )
}

export default OurExperience
