import Image from 'next/image'
import { useTranslations } from 'next-intl'

export default function SuccessCases() {
  const s = useTranslations('SuccessCases')
  return (
    <div className="relative w-full bg-bg-dark text-white ">
      <div className=" mx-auto flex h-full w-[90%] max-w-[1440px]  items-center justify-between">
        <div className="relative hidden h-96 w-full md:block">
          <Image
            src="/amico1.png" // Asegúrate de reemplazar esta ruta con la ruta de tu imagen
            alt="Creatividad y energía en cada idea"
            layout="fill"
            objectFit="contain" // Cambiar a 'cover' si quieres que la imagen cubra todo el espacio
            className=""
          />
        </div>
        <div className="flex h-full w-full flex-col items-start justify-center">
          <h2 className="mb-4 text-4xl font-semibold text-cyan-bright">{s('title')}</h2>
          <p className=" my-4 max-w-[96%] text-lg">
            {s('description')}
          </p>
          <h4 className=" my-4 text-xl sm:mr-20">
            {s('callToAction')}
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
