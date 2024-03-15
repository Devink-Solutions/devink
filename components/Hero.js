import Link from 'next/link'
import React from 'react'
import { AiOutlineDown } from 'react-icons/ai'
import Image from 'next/image'

const Hero = () => (
  <header className="z-20 flex h-full  w-full bg-bg-dark ">
    <div className="ml-10 flex max-w-2xl  flex-col justify-center  gap-8  text-left md:w-3/5">

      <h1 className=" text-2xl font-medium text-white md:text-3xl xl:text-5xl">
        <span className="text-cyan-bright">Construyendo</span>
        {' '}
        la solucion digital que tu empresa necesita
      </h1>
      <h4 className="text-base text-white md:text-lg xl:text-xl">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam sed hic qui.
      </h4>
      <Link
        href="#contact"
        className=" mt-2 w-fit rounded-full border border-[#6fffe9]
           bg-transparent px-4 py-2 text-xl font-medium text-[#6FFFE9]  md:inline-flex md:px-8"
      >
        Agendar una llamada
      </Link>
    </div>
    <section className="h-[85%] ">
      <figure class="relative h-[750px] w-[950px]">
        <Image
          src="/Vector.png"
          width={680}
          height={600}
          class="absolute right-[-100px] top-[-80px] z-10"
          alt=""
        />
        <Image
          src="/phones/phone1.png"
          width={320}
          height={320}
          class="absolute bottom-0 left-[250px] z-40"
          alt=""
        />
        <Image
          src="/phones/phone2.png"
          width={320}
          height={320}
          class="absolute bottom-0 left-[520px] z-30"
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
