import Link from "next/link"
import React from "react"
import { AiOutlineDown } from "react-icons/ai"

const Hero = () => {
  return (
    <header className="z-20 flex h-[92vh] w-full flex-col items-center justify-center gap-4 bg-[#0B132B]   text-cyan-bright">
      <section className="flex justify-between">
        <div className="flex h-2/5 w-3/5 flex-col gap-2 text-left">
          <h3 className="animate-fade-up text-2xl font-medium animate-delay-75">
            En Devink
          </h3>
          <h1 className="animate-fade-up text-5xl font-medium animate-delay-75">
            Sabemos como ayudarte a resolver lo que necesites
          </h1>
          <h4 className="animate-fade-up text-xl animate-delay-75">
            Desarrollamos soluciones de IT para tu empresa.
          </h4>
          <Link
            href="#makeacall"
            className="w-fit animate-fade-up rounded-full border border-[#6fffe9] bg-[#0B132B] px-8 py-2 text-xl font-medium  text-[#6FFFE9] animate-delay-75"
          >
            Contáctanos
          </Link>
        </div>
        <figure className="h-full">
          <img src="/logo-without-name.svg" className="h-full" alt="" />
        </figure>
      </section>
      <figure className="absolute bottom-4">
        <AiOutlineDown color="#6fffe9" className="animate-bounce text-2xl" />
      </figure>
    </header>
  )
}

export default Hero
