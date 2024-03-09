/* eslint-disable tailwindcss/migration-from-tailwind-2 */

'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { AiOutlineMenu } from 'react-icons/ai'
import { BsFillSunFill } from 'react-icons/bs'
import { IoMdGlobe } from 'react-icons/io'

import useModal from '@/hooks/useModal'

export default function Navbar() {
  const { isOpen, toggleDropdown, ref } = useModal()
  return (
    <>
      <div ref={ref} className="sticky   top-0 z-50 flex md:hidden ">
        <nav className="relative flex h-20 w-full flex-row items-center justify-between bg-bg-dark px-10  lg:px-12 ">
          <Link href="/" className="m-2 inline-flex cursor-pointer  ">
            <Image
              src="/logo-without-name.svg"
              alt="logo"
              width={60}
              height={60}
              priority
            />
          </Link>

          <button type="button" onClick={toggleDropdown}>
            <AiOutlineMenu size={40} color="cyan" />
          </button>
        </nav>
        <nav
          className={`fixed ${
            isOpen ? 'translate-x-0' : 'translate-x-[100%]'
          } right-0 top-[80px]
       z-[30] flex w-[200px] flex-col rounded-bl-2xl bg-bg-dark py-2 text-white brightness-125 transition-transform duration-300`}
        >
          <Link href="/#services">
            <button
              type="button"
              className="flex w-full items-center px-4 py-2"
              onClick={toggleDropdown}
            >

              <span className="text-xl font-medium">Servicios</span>
            </button>
          </Link>
          <Link href="/#contact">

            <button
              type="button"
              className="flex w-full items-center px-4 py-2"
              onClick={toggleDropdown}
            >
              <span className="text-xl font-medium">Contacto</span>
            </button>
          </Link>
          <Link href="/#blogs">

            <button
              type="button"
              className="flex w-full items-center px-4 py-2"
              onClick={toggleDropdown}
            >
              <span className="text-xl font-medium">Blogs</span>
            </button>
          </Link>
        </nav>
      </div>
      <nav className="relative  top-0 z-50 hidden h-20 w-full flex-row items-center
      justify-between border-b-2 border-bg-dark bg-bg-dark px-12 text-white shadow-lg md:flex"
      >
        <div className="hidden cursor-pointer pt-2 md:inline-flex">
          <Image src="/logo.svg" alt="logo" width={180} height={180} priority />
        </div>

        <div className="inline-flex cursor-pointer pt-2 md:hidden">
          <Image
            src="/logo-without-name.svg"
            alt="logo"
            width={80}
            height={100}
            priority
          />
        </div>
        <div className="">
          <ul className="flex w-full grow items-center justify-end gap-4 text-xl">
            <li>
              <Link
                className=" p-2  font-light  "
                href="/#process"
              >
                Proceso Devink
              </Link>
            </li>
            <li>
              <Link
                className=" p-2  font-light  "
                href="/#services"
              >
                Servicios
              </Link>
            </li>
            <li>
              <Link
                className=" p-2  font-light "
                href="/#contact"
              >
                Casos de éxito
              </Link>
            </li>
            <li>
              <Link
                className="hidden p-2  font-light sm:inline-flex "
                href="/#blogs"
              >
                FAQ
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-row space-x-4">
          <button type="button" className="w-fit rounded-full border border-cyan bg-bg-light px-4 py-2 text-lg font-medium text-bg-dark">
            Contáctanos
          </button>

          <button type="button" className="p-2 text-lg font-medium">
            <BsFillSunFill size={26} />
          </button>

          <div className="relative">
            <button type="button" className="p-2 text-lg font-medium">
              <IoMdGlobe size={30} />
            </button>
            {/* Menú desplegable de idiomas */}
          </div>
        </div>
      </nav>
    </>
  )
}
