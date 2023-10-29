/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable @next/next/no-img-element */
import {
  FaLinkedin,
  FaEnvelope,
  FaPhoneAlt,
  FaWhatsapp,
  FaRocket,
  FaInstagram,
} from 'react-icons/fa'
import Link from 'next/link'

const Footer1 = () => (
  <footer className="flex min-h-[250px] w-full flex-col items-center space-y-6  bg-blue-dark p-10 text-white md:space-y-10 md:px-20">
    <div className="flex w-full flex-col space-y-5 md:flex-row md:justify-between md:space-y-0">
      <figure className="hidden flex-col items-center md:flex">
        <img
          src="./logo-without-name.svg"
          alt="logo"
          className="ml-20 mt-4 w-32"
        />
      </figure>
      <div>
        <div className="flex  w-full flex-col items-center justify-center pb-4 md:flex-row">
          <h2 className="flex items-center space-x-2 text-center text-2xl sm:text-left">Devink desde la web para el mundo</h2>
          <FaRocket className="mt-4 text-2xl text-cyan md:ml-6 md:text-4xl" />

        </div>
        <div className="mt-4 flex flex-col items-center justify-around gap-4 md:flex-row">
          <span className="flex items-center space-x-4">
            <FaPhoneAlt />
            <span className="text-lg">+543513084848</span>
          </span>
          <span className="ml-4 flex items-center space-x-4">
            <FaEnvelope />
            <a
              className="text-lg transition-colors duration-200  hover:text-blue-400"
              href="mailto:devinksolutions@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              devinksolutions@gmail.com
            </a>
          </span>
        </div>
        <div className="mt-8 flex flex-col items-center justify-evenly gap-5  md:flex-row">
          <span className="mb-2 block text-xl">Social Media:</span>
          <div className="flex gap-5  ">
            <Link
              href="https://www.linkedin.com/company/devink-solutions/"
              className="text-4xl font-semibold transition-colors duration-200 hover:text-blue-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </Link>
            <Link
              href="https://www.instagram.com/devink_solutions/"
              className="text-4xl font-semibold transition-colors duration-200 hover:text-[#C13584]"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </Link>
            <Link
              href="https://api.whatsapp.com/send/?phone=%2B543415883040"
              className="text-4xl font-semibold transition-colors duration-200 hover:text-green-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />
            </Link>
          </div>
        </div>
      </div>
    </div>
    <div className="my-4 w-full border-t border-slate-500" />
    <div className="mt-4 flex w-full flex-col items-center justify-end md:flex-row">

      <span className="mt-8 font-semibold md:mt-0">
        &copy;
        {' '}
        {new Date().getFullYear()}
        {' '}
        This website is made with ❤️ by
        {' '}
        <Link
          className="hover:text-cyan-400 animate-gradient-x inline-flex bg-gradient-to-r from-blue-400 to-green-500 bg-clip-text text-transparent"
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

export default Footer1
