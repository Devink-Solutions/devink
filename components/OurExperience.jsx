"use client"
import Link from "next/link"
import Image from "next/image"
import useObserver from "@/hooks/useObserver"

const OurExperience = () => {
  const [ref, inView] = useObserver({ threshold: 0.7 })

  return (
    <section
      id="makeacall"
      className=" px-auto flex h-full w-full items-center justify-center pb-8 pt-12"
      ref={ref}
    >
      <div className="flex w-full flex-col items-center justify-center xl:flex-row">
        <figure className={`h-auto w-screen px-4 md:w-3/5 xl:mx-0 xl:w-1/5`}>
          <Image width={360} height={344} src="/Chatgpt.png" alt="" />
        </figure>
        <div className="relative mt-8 flex h-2/3 w-screen flex-col justify-between px-3 text-center text-blue-dark md:w-3/5 xl:ml-8 xl:mt-0 xl:w-2/6 xl:text-left">
          <div>
            <h4 className="text-xl font-medium text-cyan-bright">
              Creativos, Energicos y Dedicados
            </h4>
            <h3 className="pt-2 text-xl font-medium md:pt-4 md:text-2xl">
              Venimos a cambiar el paradigma tecnologico de nuestros clientes!
            </h3>
            <p className="py-2 text-lg font-light md:py-4">
              Somos una nueva empresa de IT formada por un equipo ded
              profesionales especializados en la creacion de software de alto
              rendimiento nuestras soluciones implementan toda la creatividad de
              nuestro equipo, junto con las ultimas tecnologias para satisfacer
              los requerimientos de nuestros clientes.
            </p>
          </div>
          <Link
            href="https://usemotion.com/meet/ian-duhamel/devink?d=20"
            target="_blank"
            className={`w-120 self-center-mid1 mt-2 rounded-xl bg-blue-dark px-8 py-2 text-center text-xl font-medium text-white shadow-lg transition-colors duration-300 hover:bg-cyan-bright hover:text-blue-dark xl:self-start ${
              inView ? "animate-shake animate-ease-in-out" : undefined
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
