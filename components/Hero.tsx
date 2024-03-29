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
      <section className="relative mx-auto flex w-full max-w-[1440px] flex-col-reverse items-center px-6 sm:px-0 md:flex-row md:justify-between">
        <div className="mx-auto flex w-[400px] flex-col justify-center  gap-8 text-left   md:ml-10 md:mr-0 md:w-[50%] ">
          <h1 className=" text-2xl font-medium text-white md:text-3xl xl:text-5xl">
            <span className="text-cyan-bright">{h('special-word')}</span>
            {' '}
            {h('hero-title')}
          </h1>
          <h4 className="text-base text-white md:text-lg xl:text-xl">
            {h('about-subtitle')}
          </h4>
          <Link
            href="https://calendly.com/devinksolutions/30min"
            target="_blank"
            className=" mt-2 w-fit rounded-full border border-[#6fffe9]
           bg-transparent px-4 py-2 text-xl font-medium text-[#6FFFE9]  md:inline-flex md:px-8"
          >
            {h('hero-bottom')}
          </Link>
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
        <div className="relative z-40 h-[40vh] w-[200px] md:hidden">
          <Image
            src="/phones/phone1.png"
            width={150}
            height={150}
            className=" absolute bottom-20 right-20 z-40 object-contain object-bottom "
            alt=""
          />
          <Image
            src="/phones/phone2.png"
            width={150}
            height={150}
            className="absolute bottom-20 left-20 z-30 object-contain "
            alt=""
          />
        </div>
      </section>

      <figure className="absolute bottom-0 right-0 h-full w-[40%] overflow-hidden">
        <Image
          src="/Vector.png"
          width={680}
          height={600}
          className="absolute right-[-100px] top-[-80px] z-10"
          alt=""
        />
      </figure>
      <div className="absolute -bottom-28 md:-bottom-16">
        <InfiniteSlider />
      </div>
    </header>
  )
}

export default Hero
