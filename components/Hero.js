import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

const Hero = () => {
  const h = useTranslations('Hero')

  return (
    <>
      <header className="z-20 hidden h-full w-full  overflow-hidden  bg-bg-dark md:flex  md:flex-row">
        <div className="ml-10 flex w-[90%]  flex-col justify-center  gap-8  text-left ">

          <h1 className=" text-2xl font-medium text-white md:text-3xl xl:text-5xl">
            <span className="text-cyan-bright">{h('special-word')}</span>
            {' '}
            {h('hero-title')}
          </h1>
          <h4 className="text-base text-white md:text-lg xl:text-xl">
            {h('about-subtitle')}
          </h4>
          <Link
            href="#contact"
            className=" mt-2 w-fit rounded-full border border-[#6fffe9]
           bg-transparent px-4 py-2 text-xl font-medium text-[#6FFFE9]  md:inline-flex md:px-8"
          >
            {h('hero-bottom')}
          </Link>
        </div>
        <section className=" h-[85%] ">
          <figure class="relative flex h-[750px] w-[950px] lg:h-[650px] lg:w-[750px] 2xl:h-[750px] 2xl:w-[950px]">
            <Image
              src="/Vector.png"
              width={680}
              height={600}
              className="absolute right-[-100px] top-[-80px] z-10 "
              alt=""
            />
            <Image
              src="/phones/phone1.png"
              width={320}
              height={320}
              className="absolute bottom-0 left-[150px] z-40 object-contain 2xl:left-[250px] "
              alt=""
            />
            <Image
              src="/phones/phone2.png"
              width={320}
              height={320}
              className="absolute bottom-0 left-[400px] z-30 object-contain 2xl:left-[520px] "
              alt=""
            />
          </figure>

        </section>

      </header>
      <header className="flex h-[1000px] flex-col items-center justify-center bg-bg-dark md:hidden">
        <div className="flex flex-col items-center px-8 text-center">
          <h1 className="text-2xl font-medium text-white md:text-3xl">
            <span className="text-cyan-bright">{h('special-word')}</span>
            {' '}
            {h('hero-title')}
          </h1>
          <h4 className="mt-4 text-base text-white md:text-lg">
            {h('about-subtitle')}
          </h4>
          <Link
            href="#contact"
            className="mt-4 rounded-full border border-[#6fffe9] bg-transparent px-4 py-2 text-base font-medium text-[#6FFFE9] md:text-lg"
          >
            {h('hero-bottom')}
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
            <div className="mx-6 flex justify-center space-x-4">
              <Image
                src="/phones/phone1.png"
                layout="intrinsic"
                width={250} // Reducir tamaño para móvil
                height={250}
                className="absolute right-[180px] z-10 mx-6 "
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
}

export default Hero
