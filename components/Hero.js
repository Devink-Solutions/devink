import Link from 'next/link'
import React from 'react'
import { AiOutlineDown } from 'react-icons/ai'
import Image from 'next/image'

const Hero = () => (
  <header className="z-20 flex h-[92vh] w-full flex-col items-center justify-center gap-4 bg-[#0B132B] px-10 text-cyan-bright">
    <section className="mx-auto mb-14 flex justify-between">
      <div className="flex h-full flex-col gap-2 text-left md:w-3/5">
        <h3 className="animate-fade-up text-2xl font-medium animate-delay-75">
          Devink
        </h3>
        <h1 className="animate-fade-up text-5xl font-medium animate-delay-75">
          Te ayudamos a construir la solucion digital para tu empresa.
        </h1>
        <h4 className="animate-fade-up text-xl animate-delay-75">
          Desarrollos a medida y soluciones IT
        </h4>
        <Link
          href="#makeacall"
          className="mt-2 hidden w-fit animate-fade-up rounded-full border border-[#6fffe9] bg-[#0B132B]
           px-8 py-2 text-xl font-medium text-[#6FFFE9]  animate-delay-75 md:inline-flex"
        >
          Contáctanos
        </Link>
      </div>
      <figure className="hidden h-full md:inline-flex">
        <Image
          src="/logo-without-name.svg"
          width={250}
          height={250}
          className="h-full"
          alt=""
        />
      </figure>
    </section>
    <figure className="absolute bottom-4">
      <AiOutlineDown color="#6fffe9" className="animate-bounce text-2xl" />
    </figure>
  </header>
)

export default Hero
