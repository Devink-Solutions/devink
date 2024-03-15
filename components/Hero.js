import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const Hero = () => (
  <>
    <header className="z-20 hidden h-full w-full  bg-bg-dark  md:flex md:flex-row ">
      <div className="ml-10 flex w-[90%]  flex-col justify-center  gap-8  text-left ">

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
      <section className=" h-[85%] ">
        <figure class="relative flex h-[750px] w-[950px]">
          <Image
            src="/Vector.png"
            width={680}
            height={600}
            class="absolute right-[-100px] top-[-80px] z-10 "
            alt=""
          />
          <Image
            src="/phones/phone1.png"
            width={320}
            height={320}
            class="absolute bottom-0 left-[250px] z-40 object-contain "
            alt=""
          />
          <Image
            src="/phones/phone2.png"
            width={320}
            height={320}
            class="absolute bottom-0 left-[520px] z-30 object-contain "
            alt=""
          />
        </figure>

      </section>

    </header>
    <header className="flex h-[1000px] flex-col items-center justify-center bg-bg-dark md:hidden">
      <div className="flex flex-col items-center px-8 text-center">
        <h1 className="text-2xl font-medium text-white md:text-3xl">
          <span className="text-cyan-bright">Construyendo</span>
          {' '}
          la solución digital que tu empresa necesita
        </h1>
        <h4 className="mt-4 text-base text-white md:text-lg">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam sed hic qui.
        </h4>
        <Link
          href="#contact"
          className="mt-4 rounded-full border border-[#6fffe9] bg-transparent px-4 py-2 text-base font-medium text-[#6FFFE9] md:text-lg"
        >
          Agendar una llamada
        </Link>
      </div>

      <section className="mb-0 mt-8 flex w-full">
        <div className="relative mb-0  w-full">
          <Image
            src="/Vector.png"
            layout="responsive"
            width={160}
            height={160}
            className="absolute z-0 mb-0"
            alt=""
          />
          <div className="flex mx-6 justify-center space-x-4">
            <Image
              src="/phones/phone1.png"
              layout="intrinsic"
              width={250} // Reducir tamaño para móvil
              height={250}
              className="absolute right-[180px] mx-6 z-10 "
              alt=""
            />
            <Image
              src="/phones/phone2.png"
              layout="intrinsic"
              width={220} // Reducir tamaño para móvil
              height={220}
              className=" absolute right-[80px] z-10 "
              alt=""
            />
          </div>
        </div>
      </section>

    </header>

  </>
)

export default Hero
