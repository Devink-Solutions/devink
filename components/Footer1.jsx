/* eslint-disable @next/next/no-img-element */
import {
  FaLinkedin,
  FaEnvelope,
  FaPhoneAlt,
  FaGithub,
  FaWhatsapp,
  FaRocket
} from 'react-icons/fa'
import Link from 'next/link'

const Footer1 = () => {
  return (
    <footer className="flex min-h-[250px] w-full flex-col items-center space-y-6  md:space-y-10 bg-blue-dark px-10 md:px-20 py-10  text-white">
      <div className="flex w-full flex-col md:flex-row md:justify-between space-y-5 md:space-y-0">
        <figure className="hidden md:flex flex-col items-center">
          <img
            src="./logo-without-name.svg"
            alt="logo"
            className="ml-20 mt-4 w-32"
          />
        </figure>
        <div>
          <div className='flex  flex-col md:flex-row w-full justify-center items-center pb-4'>
            <h2 className="flex items-center space-x-2 text-2xl">Devink desde la web para el mundo</h2>
            <FaRocket className="text-cyan text-2xl mt-4 md:ml-6 md:text-4xl" />

          </div>
          <div className="mt-4 flex flex-col gap-4 items-center md:flex-row justify-around">
            <span className="flex items-center space-x-4">
              <FaPhoneAlt />
              <span className='text-lg'>+543513084848</span>
            </span>
            <span className="flex items-center space-x-4 ml-4">
              <FaEnvelope />
              <a
                className="hover:text-blue-400 transition-colors duration-200  text-lg"
                href="mailto:devinksolutions@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                devinksolutions@gmail.com
              </a>
            </span>
          </div>
          <div className="mt-8 flex flex-row justify-evenly items-center  gap-5">
            <span className="mb-2 text-xl block">Social Media</span>
            <Link
                href="https://www.linkedin.com/company/devink-solutions/"
                className="hover:text-blue-400 transition-colors duration-200 font-semibold text-4xl"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </Link>
              <Link
                href="https://github.com/Devink-Solutions"
                className="hover:text-purple-400 transition-colors duration-200 font-semibold text-4xl"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </Link>
              <Link
                href="https://api.whatsapp.com/send/?phone=%2B543415883040"
                className="hover:text-green-400 transition-colors duration-200 font-semibold text-4xl"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp />
              </Link>
          </div>
        </div>
      </div>
      <div className="my-4 w-full border-t border-slate-500" />
      <div className="flex flex-col mt-4 w-full md:flex-row items-center justify-end">

      <span className="flex font-semibold flex-wrap mt-8 md:mt-0">
          &copy; {new Date().getFullYear()} This website is made with ❤️ by{" "}
          <Link
            className="hover:text-cyan-400 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-500 animate-gradient-x ml-2"
            href="https://www.devink.dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Devink
          </Link>
        </span>
      </div>
    </footer>
  )
}

export default Footer1
