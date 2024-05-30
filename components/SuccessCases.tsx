'use client'

import Image from 'next/image'
import { useTranslations } from 'next-intl'
import Link from 'next/link'

export default function SuccessCases() {
  const s = useTranslations('SuccessCases')
  return (
    <div className="relative w-full bg-bg-dark text-white ">
      <div className=" mx-auto flex h-full w-[90%] max-w-[1340px] items-center justify-between gap-20">
        <div className="relative hidden  md:block">
          <Image
            src="/creativity.png"
            width={400}
            height={400}
            alt="Creatividad y energía en cada idea"
            className="ml-8 object-contain"
          />
        </div>
        <div className="flex h-full w-full flex-col items-center justify-center gap-4 text-center md:w-[60%] md:items-start md:text-start">
          <h2 className="mb-4 text-4xl font-semibold text-cyan-bright">{s('title')}</h2>
          <Image
            src="/creativity.png"
            width={300}
            height={300}
            alt="Creatividad y energía en cada idea"
            className="object-contain md:hidden"
          />
          <p className=" text-pretty text-lg">
            {s('description')}
          </p>
          <h4 className=" text-pretty text-xl sm:mr-20">
            {s('callToAction')}
          </h4>
          <Link
            href="https://calendly.com/devinksolutions/30min"
            target="_blank"
            className=" rounded-full border-2 border-cyan-bright px-16 py-2 text-lg font-medium
               text-cyan transition duration-150 ease-in hover:bg-cyan-bright hover:text-bg-dark
               focus:outline-none focus:ring-2 focus:ring-cyan-bright focus:ring-offset-2"
          >
            {s('button')}
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
