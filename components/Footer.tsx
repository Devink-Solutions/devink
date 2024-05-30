'use client'

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
import { useTranslations } from 'next-intl'

const Footer = () => {
  const t = useTranslations('Footer')
  return (
    <footer className="flex min-h-[180px] w-full flex-col items-center justify-center bg-bg-dark p-6 text-white md:p-10">
      <div className="flex w-full flex-col items-center justify-center gap-4 md:grid md:grid-cols-3 md:gap-8">
        <div className="flex flex-col items-center gap-4 md:gap-6 ">
          <Image
            width={200}
            height={100}
            src="/logoFooter.png"
            alt="logo"
            className=" mt-4 w-32 md:w-40"
          />
          <p className="ml-12 flex gap-2 text-center text-sm font-bold md:gap-4">
            {t('tagline')}
            <FaRocket className="text-2xl text-cyan-bright" />
          </p>
        </div>

        <div className=" flex flex-col items-center  ">
          <div className="flex flex-col  items-center gap-3">
            <h3 className="text-lg font-medium">{t('contact_us')}</h3>
            <Link
              href="mailto:info@devink.tech"
              className="flex items-center justify-center gap-4 text-base font-semibold transition-colors duration-200 hover:text-blue-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoIosMail />
              {t('email')}
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-1">
          <h3 className="text-lg  font-medium">{t('follow_us')}</h3>
          <div className="flex gap-5">
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

      <hr className="my-6 w-full max-w-[1440px]  border border-slate-700 shadow-xl shadow-white  md:my-10" />

      <div className="mb-4 flex w-full items-center justify-center gap-1 text-white">
        {t('copyright')}
        {' '}
        <FaHeart color="red" />
        {' '}
        {t('by')}
        <span className="font-bold text-cyan-bright"> Devink</span>
      </div>

    </footer>
  )
}

export default Footer
