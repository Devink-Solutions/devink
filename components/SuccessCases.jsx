import Image from 'next/image'

export default function SuccessCases() {
  return (
    <div className="h-[600px] max-w-[1440px] bg-bg-dark px-4 py-12 text-white sm:px-6 lg:px-8">
      <div className="mx-auto  w-full">
        <div className="grid w-full grid-cols-1 items-center justify-center gap-12 md:grid-cols-2">
          <div className="relative h-96 w-full">
            <Image
              src="/amico1.png" // Asegúrate de reemplazar esta ruta con la ruta de tu imagen
              alt="Creatividad y energía en cada idea"
              layout="fill"
              objectFit="contain" // Cambiar a 'cover' si quieres que la imagen cubra todo el espacio
              className=""
            />
          </div>
          <div className="flex h-full w-full flex-col items-start justify-center">
            <h2 className="mb-4 text-4xl font-semibold text-cyan-bright">Creatividad y energía en cada idea</h2>
            <p className=" my-4 max-w-[96%] text-lg">
              Somos una empresa emergente en el sector IT, comprometida en marcar una diferencia.
              Nuestro equipo de profesionales combina creatividad y experiencia, ofreciéndote
              soluciones innovadoras que superan las expectativas. ¿Estás listo para llevar tu negocio
              al siguiente nivel con soluciones tecnológicas a medida?
            </p>
            <h4 className=" my-4 text-2xl">
              Agenda una reunion con nosotros hoy y comienza a transformar tus ideas en realidad.
            </h4>
            <button
              type="submit"
              onClick={() => console.log('Iniciar')}
              className=" rounded-full border-2 border-cyan-bright px-16 py-2 text-lg font-medium
               text-cyan transition duration-150 ease-in hover:bg-cyan-bright hover:text-bg-dark
               focus:outline-none focus:ring-2 focus:ring-cyan-bright focus:ring-offset-2"
            >
              Empezar
            </button>

          </div>
        </div>
      </div>
    </div>
  )
}
