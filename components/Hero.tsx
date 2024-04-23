'use client'

import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import InfiniteSlider from './InfiniteSlider'

const Hero = () => {
  const h = useTranslations('Hero')

  return (
    <header className="relative z-20  flex  h-[82vh] w-full bg-bg-dark">
      <section className="relative mx-auto flex w-full max-w-[1440px] flex-col items-center px-0 sm:px-6 md:flex-row md:justify-between">
        <div className="mx-auto flex w-[375px] flex-col items-center  justify-center
         gap-6 text-left sm:w-[400px] md:ml-10  md:mr-0 md:w-[50%] md:items-start "
        >
          <div className="flex w-full flex-row items-center justify-center text-center md:text-start">
            <h1 className=" text-pretty text-2xl  font-medium text-white  md:text-3xl xl:text-5xl">
              <span className=" text-cyan-bright">{h('special-word')}</span>
              {' '}
              {h('hero-title')}
            </h1>
          </div>
          <h4 className="text-center text-base text-white md:text-start md:text-lg xl:text-xl">
            {h('about-subtitle')}
          </h4>
          <Link
            href="https://calendly.com/devinksolutions/30min"
            target="_blank"
            className=" mt-2 hidden w-fit rounded-full border
           border-[#6fffe9] bg-transparent px-4 py-2 text-xl font-medium text-[#6FFFE9] md:inline-flex   md:px-8"
          >
            {h('hero-bottom')}
          </Link>
        </div>
        <div className="mt-6 hidden h-[60%] w-[60%] md:flex  lg:hidden">
          <Image
            src="/phones/phone1xs.png"
            width={320}
            height={320}
            className=" relative -left-10 bottom-0 z-40 object-contain object-bottom sm:left-4 md:left-8 "
            alt=""
          />
          <Image
            src="/phones/phone2xs.png"
            width={320}
            height={320}
            className="relative -left-12 bottom-0 z-30 object-contain sm:-left-2  md:-left-12 "
            alt=""
          />
        </div>
        <div className="mt-6 flex h-[60%] w-[60%]  md:hidden">
          <Image
            src="/phones/phone1xs.png"
            width={320}
            height={320}
            className=" relative  bottom-0 z-40 object-contain object-bottom sm:left-4 md:left-8 "
            alt=""
          />
          <Image
            src="/phones/phone2xs.png"
            width={320}
            height={320}
            className="relative -left-4 bottom-0 z-30 object-contain sm:-left-2  md:-left-12 "
            alt=""
          />
        </div>
        <div className="absolute bottom-0 right-[20%] hidden h-[70vh] w-[300px] lg:inline-flex ">
          <Image
            src="/phones/phone1.png"
            width={320}
            height={320}
            className=" relative bottom-0 left-20 z-40 object-contain object-bottom "
            alt=""
          />
          <Image
            src="/phones/phone2.png"
            width={320}
            height={320}
            className="relative bottom-0 z-30 object-contain "
            alt=""
          />
        </div>
        <Link
          href="https://calendly.com/devinksolutions/30min"
          target="_blank"
          className=" mt-2  flex w-fit rounded-full
           border border-[#6fffe9] bg-transparent px-4 py-2 text-lg font-medium text-[#6FFFE9] md:hidden  md:px-8 md:text-xl"
        >
          {h('hero-bottom')}
        </Link>

      </section>
      <figure className="absolute bottom-0 left-10 block h-full w-full overflow-hidden md:hidden">
        <Image
          src="/Vector.png"
          width={1280}
          height={1280}
          className="absolute right-0 top-0 z-10"
          alt=""
        />
      </figure>

      <figure className="absolute bottom-0 right-0 hidden h-full w-[40%] overflow-hidden md:block">
        <Image
          src="/Vector.png"
          width={680}
          height={600}
          className="absolute right-[-100px] top-[-80px] z-10"
          alt=""
        />
      </figure>
      <div className="absolute -bottom-36 md:-bottom-16">
        <InfiniteSlider />
      </div>
    </header>
  )
}

export default Hero
