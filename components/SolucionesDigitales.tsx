'use client'

import React from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

export default function SolucionesDigitales() {
  const t = useTranslations('OurServices')

  return (
    <div className="relative mt-12 flex h-full w-full items-center justify-center bg-bg-dark text-white">
      <div className=" flex w-full max-w-[1440px] flex-col items-center justify-between">
        <h2 className="mb-6 text-center text-4xl font-semibold text-cyan-bright">Soluciones digitales integradas</h2>

        <div className="mt-8 flex w-[80%] items-center justify-between gap-12">

          {/* Columna de texto */}
          <div className="flex flex-col gap-4">
            {/* Estrategia personalizada */}
            <div className="mb-6 flex sm:items-center">
              <Image
                src="/Frame 428.png"
                width={130}
                height={130}
                alt=""
                className="h-12 w-12"
              />
              <div className="ml-4">
                <h3 className="text-xl font-semibold">{t('title1')}</h3>
                <p className="mt-1">
                  {t('description1')}
                </p>
              </div>
            </div>

            {/* Desarrollo */}
            <div className="mb-6 flex sm:items-center">
              <Image
                src="/Frame 429.png"
                width={150}
                height={150}
                alt=""
                className="h-12 w-12 "
              />
              <div className="ml-4">
                <h3 className="text-xl font-semibold">{t('title2')}</h3>
                <p className="mt-1">
                  {t('description2')}
                </p>
              </div>
            </div>

            {/* Soporte integral */}
            <div className="mb-6 flex sm:items-center">
              <Image
                src="/Frame 430.png"
                width={100}
                height={100}
                alt=""
                className="h-12 w-12"
              />
              <div className="ml-4">
                <h3 className="text-xl font-semibold">{t('title3')}</h3>
                <p className="mt-1">{t('description3')}</p>
              </div>
            </div>
          </div>

          {/* Columna de imagen */}
          <Image
            src="/amico.png"
            width={400}
            height={400}
            alt=""
            className="hidden  lg:inline-flex"
          />

        </div>
      </div>
      <Image
        src="/lightSoluciones.png"
        width={300}
        height={300}
        alt="light"
        className="absolute right-0 top-10 hidden h-full w-[300px] sm:inline-flex"
      />
    </div>

  )
}
