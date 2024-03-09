import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function ServicesCard() {
  // Tus casos de éxito pueden venir de un API o ser definidos estáticamente
  const cases = [
    {
      id: 1,
      title: 'Pomodoro Timer',
      description: 'Texto de dos a tres renglones que describe la funcionalidad de la app',
      image: '/phones/phone2.png',
      link: '/phones/phone2.png',
    },
    {
      id: 2,
      title: 'Reynaldo & Coimbra',
      description: 'Texto de dos a tres renglones que describe la funcionalidad de la app',
      image: '/Group 41.png',
      link: '/Group 41.png',
    },
    {
      id: 3,
      title: 'App',
      description: 'Texto de dos a tres renglones que describe la funcionalidad de la app',
      image: '/phones/phone2.png',
      link: '/phones/phone2.png',
    },
  ]

  return (
    <div className="flex w-full flex-wrap bg-bg-dark py-12">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-6xl font-extrabold leading-9 text-white">
            Casos de éxito
          </h2>
        </div>
        <div className="mt-10">
          <div className="flex w-full flex-wrap justify-center gap-8">
            {cases.map((caseItem) => (
              <Link
                href={caseItem.link}
                key={caseItem.id}
                passHref
                className="flex w-1/4 flex-col items-center overflow-hidden rounded-lg
            bg-gray-100 p-4 shadow-md transition-transform hover:scale-105"
              >
                <div className="mb-4 flex h-48 w-48 items-center justify-center overflow-hidden bg-white">
                  <Image
                    src={caseItem.image}
                    width={200}
                    height={200}
                    alt={caseItem.title}
                    className="aspect-video h-full w-full object-cover object-center"
                  />
                </div>
                <h3 className="text-lg font-medium leading-6 text-gray-900">{caseItem.title}</h3>
                <p className="mt-2 text-base text-gray-500">{caseItem.description}</p>
                <div className="mt-3">
                  <span className="cursor-pointer text-indigo-600 transition-colors hover:text-indigo-900">Continuar leyendo</span>
                </div>

              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>

  )
}
