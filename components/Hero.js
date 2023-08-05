import React from "react"
import { AiOutlineDown } from "react-icons/ai"

const Hero = () => {
  return (
    <section className="z-20 h-screen w-full bg-[url('/laptop.jpeg')] bg-cover bg-fixed bg-no-repeat text-cyan-bright">
      <header className="flex h-full flex-col items-center justify-center gap-4 bg-gradient-to-br from-[#0B132B] to-transparent bg-fixed text-center">
        <h3 className="animate-fade-up text-2xl font-medium animate-delay-75">
          En Devink
        </h3>
        <h1 className="animate-fade-up text-5xl font-medium animate-delay-75">
          Sabemos como ayudarte a resolver lo que necesites
        </h1>
        <h4 className="animate-fade-up text-xl animate-delay-75">
          Desarrollamos soluciones de IT para tu empresa.
        </h4>
        <button className="animate-fade-up rounded-full border border-[#6fffe9] bg-[#0B132B] px-8 py-2 text-xl font-medium  text-[#6FFFE9] animate-delay-75">
          Contáctanos
        </button>
        <figure className="absolute bottom-4">
          <AiOutlineDown color="#6fffe9" className="animate-bounce text-2xl" />
        </figure>
      </header>
    </section>
  )
}

export default Hero
