import Image from 'next/image'

export default function SuccessCases() {
  return (
    <div className="h-[600px] max-w-[1440px] bg-bg-dark px-4 py-12 text-white sm:px-6 lg:px-8">
      <div className="mx-auto ">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
          <div className="relative h-96 w-full">
            <Image
              src="/amico1.png" // Asegúrate de reemplazar esta ruta con la ruta de tu imagen
              alt="Creatividad y energía en cada idea"
              layout="fill"
              objectFit="contain" // Cambiar a 'cover' si quieres que la imagen cubra todo el espacio
              className=""
            />
          </div>
          <div>
            <h2 className="text-4xl font-semibold text-cyan-bright">Creatividad y energía en cada idea</h2>
            <p className="mt-4 max-w-[90%] text-lg">
              Somos una empresa emergente en el sector IT, comprometida en marcar una diferencia.
              Nuestro equipo de profesionales combina creatividad y experiencia, ofreciéndote
              soluciones innovadoras que superan las expectativas. ¿Estás listo para llevar tu negocio
              al siguiente nivel con soluciones tecnológicas a medida?
            </p>
            <button
              type="submit"
              onClick={() => console.log('Iniciar')}
              className="mt-8 rounded-full border-2 border-cyan-bright px-10 py-4 text-lg font-medium
               text-white transition duration-150 ease-in hover:bg-cyan-bright focus:outline-none
               focus:ring-2 focus:ring-cyan-bright focus:ring-offset-2"
            >
              Empezar
            </button>

          </div>
        </div>
      </div>
    </div>
  )
}
