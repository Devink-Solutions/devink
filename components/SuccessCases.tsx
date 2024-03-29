'use client'

import Image from 'next/image'
import { useTranslations } from 'next-intl'
import Link from 'next/link'

export default function SuccessCases() {
  const s = useTranslations('SuccessCases')
  return (
    <div className="relative w-full bg-bg-dark text-white ">
      <div className=" mx-auto flex h-full w-[90%] max-w-[1440px] gap-20 items-center justify-between">
        <div className="relative hidden  md:block">
          <Image
            src="/creativity.png"
            width={400}
            height={400}
            alt="Creatividad y energía en cada idea"
            className="object-contain ml-8"
          />
        </div>
        <div className="flex h-full sm:w-[60%] flex-col items-start justify-center">
          <h2 className="mb-4 text-4xl font-semibold text-cyan-bright">{s('title')}</h2>
          <p className=" my-4 max-w-[96%] text-lg">
            {s('description')}
          </p>
          <h4 className=" my-4 text-xl sm:mr-20">
            {s('callToAction')}
          </h4>
          <Link
            href="https://calendly.com/devinksolutions/30min"
            target="_blank"
            className=" rounded-full border-2 border-cyan-bright px-16 py-2 text-lg font-medium
               text-cyan transition duration-150 ease-in hover:bg-cyan-bright hover:text-bg-dark
               focus:outline-none focus:ring-2 focus:ring-cyan-bright focus:ring-offset-2"
          >
            Empezar
          </Link>
        </div>
      </div>
      <Image
        src="/lightSoluciones.png"
        width={200}
        height={200}
        alt="light"
        className="absolute right-0 top-[-50%] h-full w-[300px]"
      />
    </div>
  )
}
