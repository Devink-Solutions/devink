'use client'
import Link from 'next/link'
import Image from 'next/image'
import useObserver from '@/hooks/useObserver'
import { useEffect, useState } from 'react'

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
      id="makeacall"
      className=" px-auto flex h-full w-full items-center justify-center pb-8 pt-12"
      ref={ref}
    >
      <div className="flex w-full flex-col items-center md:max-w-[70%] justify-center xl:ml-10 xl:flex-row">
        <figure className="w-[60%] sm:w-fit">
          <Image
            width={360}
            height={344}
            src="/Chatgpt.png"
            alt=""
            className="mx-auto object-contain object-center"
          />
        </figure>
        <div className="relative mt-8 flex h-2/3 w-screen flex-col justify-between p-2 text-center text-blue-dark md:w-3/5 md:px-3 xl:ml-12 xl:mt-0 xl:w-4/6 xl:text-left">
          <div>
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
            className={`md:w-120 mt-2 w-fit self-center rounded-xl bg-blue-dark px-8 py-2 text-center text-xl font-medium text-white shadow-lg transition-colors duration-300 hover:bg-cyan-bright hover:text-blue-dark xl:self-start ${isInView ? 'animate-shake animate-ease-in-out' : undefined
              }`}
          >
            Agendar una reunion
          </Link>
        </div>
      </div>
    </section>
  )
}

export default OurExperience
