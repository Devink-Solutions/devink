/* eslint-disable tailwindcss/no-custom-classname */
import {
  FaLinkedin,
  FaInstagram,
  FaRocket,
  FaHeart,
} from 'react-icons/fa'
import { IoIosMail } from 'react-icons/io'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => (
  <footer className="flex min-h-[180px] w-full flex-col items-center justify-center bg-bg-dark p-10 text-white">
    <div className="flex w-full flex-col items-center justify-center gap-8 md:grid md:grid-cols-3">
      <div className="flex flex-col items-center gap-6 ">
        <Image
          width={200}
          height={100}
          src="/logoFooter.png"
          alt="logo"
          className="mt-4 w-40"
        />
        <p className="flex gap-4 text-center text-sm font-bold">
          Desde la web para el mundo
          <FaRocket className="text-2xl text-cyan-bright" />
        </p>
      </div>

      <div className=" flex flex-col items-center  ">
        <div className="flex flex-col  items-center gap-3">
          <h3 className="text-lg font-medium">Contáctanos:</h3>
          <Link
            href="mailto:info@devink.tech"
            className="flex items-center justify-center gap-4 text-base font-semibold transition-colors duration-200 hover:text-blue-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoIosMail />
            info@devink.tech
          </Link>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-3">
        <h3 className="text-lg font-medium">Síguenos:</h3>
        <div className="flex  gap-5">
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

    <hr className="my-10 w-full  max-w-[1440px] border border-slate-700 shadow-xl  shadow-white" />

    <div className="mb-4 flex w-full items-center justify-center gap-1 text-white">
      &#169; 2024, This website is made with
      {' '}
      <FaHeart color="red" />
      {' '}
      by
      <span className="font-bold text-cyan-bright"> Devink</span>
    </div>

  </footer>
)

export default Footer
