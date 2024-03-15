import React from 'react'
import Image from 'next/image'

const SolucionesDigitales = () => (
  <div className="flex h-[600px] w-full items-center justify-center bg-bg-dark py-10 text-white">
    <div className=" flex w-full max-w-[1440px] flex-col items-center justify-center">
      <h2 className="mb-6 text-center text-4xl font-semibold text-cyan-bright">Soluciones digitales integradas</h2>

      <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">

        {/* Columna de texto */}
        <div className="flex flex-col gap-4">
          {/* Estrategia personalizada */}
          <div className="mb-6 flex items-start">
            <div className="flex items-center pl-10">
              <Image
                src="/Frame 428.png"
                width={130}
                height={130}
                class="aspect-square"
                alt=""
              />

            </div>
            <div className="ml-4">
              <h3 className="text-xl font-semibold">Estrategia personalizada</h3>
              <p className="mt-1">
                Desde el primer contacto, nos centramos
                en entender tus necesidades para elaborar un plan que se ajuste a tus
                objetivos empresariales.
              </p>
            </div>
          </div>

          {/* Desarrollo */}
          <div className="mb-6 flex items-start">
            <div className="flex h-full items-center justify-center pl-10">
              <Image
                src="/Frame 429.png"
                width={150}
                height={150}
                class="aspect-square"
                alt=""
              />
            </div>
            <div className="ml-4">
              <h3 className="text-xl font-semibold">Desarrollo</h3>
              <p className="mt-1">
                Luego de definir el plan, nos enfocamos en desarrollar
                el software necesario, abarcando desde la interfaz hasta las funcionalidades de
                backend, según tus especificaciones.
              </p>
            </div>
          </div>

          {/* Soporte integral */}
          <div className="mb-6 flex items-start">
            <div className="flex pl-10">
              <Image
                src="/Frame 430.png"
                width={100}
                height={100}
                class="aspect-square"
                alt=""
              />
            </div>
            <div className="ml-4">
              <h3 className="text-xl font-semibold">Soporte integral</h3>
              <p className="mt-1">Tras el lanzamiento, proporcionamos mantenimiento y apoyo continuo para garantizar el correcto funcionamiento.</p>
            </div>
          </div>
        </div>

        {/* Columna de imagen */}
        <div className="flex justify-center">
          <Image
            src="/amico.svg"
            width={400}
            height={400}
            class=""
            alt=""
          />

        </div>

      </div>
    </div>
  </div>

)

export default SolucionesDigitales
