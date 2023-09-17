import Link from 'next/link'
import { FaLinkedin, FaEnvelope, FaPhoneAlt, FaGithub, FaWhatsapp } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="flex flex-col  md:flex-row w-full items-center md:items-start justify-between bg-blue-dark px-20 py-10 font-medium text-white">
      <div className="flex flex-col justify-center items-center gap-4">
        <h3 className="text-2xl font-bold">Medios de contacto</h3>
        <ul className="list-none flex flex-col gap-4">
          <li className="flex items-center space-x-4">
            <FaEnvelope className="text-2xl" />
            <a
              className="hover:text-blue-400 transition-colors duration-200 font-semibold text-lg"
              href="mailto:team@devink.dev"
              target="_blank"
              rel="noopener noreferrer"
            >
              team@devink.dev
            </a>
          </li>
          <li className="flex items-center space-x-4">
            <FaPhoneAlt className="text-2xl" />
            <span className="font-semibold text-lg">Cel: +54 9 341 6366234</span>
          </li>
        </ul>
      </div>
      <div className="mt-10 items-center justify-center flex flex-col gap-4 md:mt-0">
        <h3 className="mb-2 text-2xl font-bold">Links útiles</h3>

        <ul className="flex list-none gap-10">
          <li>
            <Link
              href="https://api.whatsapp.com/send/?phone=%2B543416366234"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 hover:text-green-600 transition-colors duration-200"
            >
              <FaWhatsapp size="3em" />
              </Link>
          </li>
          <li>
            <Link
              href="https://www.linkedin.com/company/devink-solutions/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-600 transition-colors duration-200"
            >
              <FaLinkedin size="3em" />
            </Link>
          </li>
          <li>
            <Link
              href="https://github.com/orgs/Devink-Solutions"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-500 hover:text-purple-600 transition-colors duration-200"
            >
            <FaGithub size="3em" />
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
