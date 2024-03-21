/* eslint-disable tailwindcss/no-custom-classname */
import {
  FaLinkedin,
  FaInstagram,
} from 'react-icons/fa'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => (
  <footer className="flex min-h-[180px] w-full items-center justify-center space-y-6 bg-bg-dark p-10 text-white">
    <div className="flex w-full max-w-[1440px] justify-between space-y-5 md:space-y-0">
      <figure className="">
        <Image
          width={178}
          height={60}
          src="/logoFooter.png"
          alt="logo"
          className="mt-4 w-32"
        />
      </figure>
      <div className="mt-8 flex flex-col items-end gap-2 ">
        <h3>Redes Sociales:</h3>
        <div className="flex gap-5  ">
          <Link
            href="https://www.linkedin.com/company/devink-solutions/"
            className="text-2xl font-semibold transition-colors duration-200 hover:text-blue-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </Link>
          <Link
            href="https://www.instagram.com/devink_solutions/"
            className="text-2xl font-semibold transition-colors duration-200 hover:text-[#C13584]"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </Link>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
