import React from 'react'
import Image from 'next/image'

const SolucionesDigitales = () => (
  <div className="relative my-20 flex w-full items-center justify-center bg-bg-dark text-white">
    <div className=" flex w-full max-w-[1440px] flex-col items-center justify-between">
      <h2 className="mb-6 text-center text-4xl font-semibold text-cyan-bright">Soluciones digitales integradas</h2>

      <div className="flex w-[80%] items-center justify-between gap-12">

        {/* Columna de texto */}
        <div className="flex flex-col gap-4">
          {/* Estrategia personalizada */}
          <div className="mb-6 flex items-center">
            <Image
              src="/Frame 428.png"
              width={130}
              height={130}
              alt=""
              className="h-12 w-12"
            />
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
          <div className="mb-6 flex items-center">
            <Image
              src="/Frame 429.png"
              width={150}
              height={150}
              alt=""
              className="h-12 w-12"
            />
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
          <div className="mb-6 flex items-center">
            <Image
              src="/Frame 430.png"
              width={100}
              height={100}
              alt=""
              className="h-12 w-12"
            />
            <div className="ml-4">
              <h3 className="text-xl font-semibold">Soporte integral</h3>
              <p className="mt-1">Tras el lanzamiento, proporcionamos mantenimiento y apoyo continuo para garantizar el correcto funcionamiento.</p>
            </div>
          </div>
        </div>

        {/* Columna de imagen */}
        <Image
          src="/amico.svg"
          width={400}
          height={400}
          alt=""
          className="self-end"
        />

      </div>
    </div>
    <Image
      src="/lightSoluciones.png"
      width={300}
      height={300}
      alt="light"
      className="absolute right-0 top-10 h-full w-[300px]"
    />
  </div>

)

export default SolucionesDigitales
