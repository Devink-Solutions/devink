import Link from "next/link"
import { FaLinkedin, FaEnvelope, FaPhoneAlt } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="flex w-full items-start bg-blue-dark px-20 py-10 font-medium text-white md:justify-between">
      <div className="flex flex-col space-y-4">
        <h3 className="mb-2 text-lg font-bold">Medios de contacto</h3>
        <ul className="list-none space-y-3">
          <li className="flex items-center space-x-2">
            <FaEnvelope className="text-lg" />
            <a
              className="hover:text-blue-light transition-colors duration-200"
              href="mailto:team@devink.dev"
              target="_blank"
              rel="noopener noreferrer"
            >
              team@devink.dev
            </a>
          </li>
          <li className="flex items-center space-x-2">
            <FaPhoneAlt className="text-lg" />
            <span>Cel: +54 9 341 6366234</span>
          </li>
        </ul>
      </div>
      <div className="mt-10 md:mt-0">
        <h3 className="mb-2 text-lg font-bold">Links útiles</h3>
        <ul className="flex list-none gap-2">
          <li>
            <Link
              href="https://www.linkedin.com/company/devink-solutions/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-light transition-colors duration-200"
            >
              <FaLinkedin size={"1.4em"} />
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
