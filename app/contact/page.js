import Image from 'next/image'
import Link from 'next/link'
import ContactForm from '../../components/ContactForm'

const page = async () => (
  <main className="flex min-h-screen flex-col items-center overflow-x-hidden scroll-smooth">
    <header className="mt-5 flex w-full max-w-[1300px] flex-col justify-start">
      <div className="flex items-center">
        <Image src="/favicon.ico" width={80} height={60} />
        <h1 className="ml-2 text-[50px] font-semibold">
          Devink
          {' '}
          <span className="italic ">Contact</span>
        </h1>
      </div>
    </header>
    <ContactForm className="max-w-[1300px]" isAvailbleAnimation={false} />
    <div className="mb-5 flex w-full max-w-[1300px] flex-col items-start justify-center">
      <h3 className="mx-auto mb-10 flex w-[90%] items-center text-[24px] font-light ">
        Si no, tambien puedes agendar una llamada aqui directo
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" className="ml-4 ">
          <path fill="#65f2e1" d="M11 4v12.175l-5.6-5.6L4 12l8 8l8-8l-1.4-1.425l-5.6 5.6V4h-2Z" />
        </svg>

      </h3>
      <Link
        href="https://usemotion.com/meet/ian-duhamel/devink?d=20"
        target="_blank"
        className={`mx-auto mt-2 w-fit self-center rounded-xl bg-cyan-bright px-8 py-2 text-center text-xl 
            font-medium text-white shadow-lg transition-colors duration-300 hover:bg-blue-dark  md:min-w-[90%] xl:self-start 
            `}
      >
        Agendar una reunion
      </Link>
    </div>
  </main>
)

export default page
