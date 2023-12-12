/* eslint-disable tailwindcss/no-custom-classname */
import {
  FaLinkedin,
  FaEnvelope,
  FaWhatsapp,
  FaRocket,
  FaInstagram,
} from 'react-icons/fa'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => (
  <footer className="flex min-h-[250px] w-full flex-col items-center space-y-6  bg-blue-dark p-10 text-white md:space-y-10 md:px-20">
    <div className="flex w-full max-w-[1440px] flex-col space-y-5 md:flex-row md:justify-between md:space-y-0">
      <figure className="hidden flex-col items-center md:flex">
        <Image
          width={152}
          height={136}
          src="/logo-without-name.svg"
          alt="logo"
          className="mt-4 w-32"
        />
      </figure>
      <div className="flex flex-col items-center md:items-end">
        <span className="flex w-full flex-col items-center justify-center pb-4 md:flex-row">
          <h3 className="space-x-2 text-center text-2xl sm:text-left">Devink desde la web para el mundo</h3>
          <FaRocket className="mt-4 text-3xl text-cyan  md:ml-2 md:mt-0" />
        </span>
        <span className="flex items-center space-x-4">
          <FaEnvelope />
          <a
            className="text-lg transition-colors duration-200  hover:text-blue-400"
            href="mailto:devinksolutions@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            team@devink.tech
          </a>
        </span>
        <div className="mt-8 flex flex-col items-center justify-end gap-5  md:flex-row">
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
    <div className="my-4 w-full max-w-[1440px] border-t border-slate-500" />
    <div className="mt-4 flex w-full max-w-[1440px] flex-col items-center justify-end md:flex-row">
      <span className="mt-4 font-semibold md:mt-0">
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

export default Footer
