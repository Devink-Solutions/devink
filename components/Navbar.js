/* eslint-disable tailwindcss/migration-from-tailwind-2 */

'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { AiOutlineMenu } from 'react-icons/ai'
// import { CgProfile } from 'react-icons/cg'
import useModal from '@/hooks/useModal'

export default function Navbar() {
  const { isOpen, toggleDropdown, ref } = useModal()
  return (
    <>
      <div ref={ref} className="sticky   top-0 z-50 flex md:hidden ">
        <nav className="relative flex h-20 w-full flex-row items-center justify-between bg-blue-dark px-10  lg:px-12 ">
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
        <nav className={`fixed ${isOpen ? 'translate-x-0' : 'translate-x-[100%]'} right-0 top-[80px]
       z-[30] flex w-[200px] flex-col rounded-bl-2xl bg-blue-dark py-2 text-white brightness-125 transition-transform duration-300`}
        >
          <Link href="/#services">
            <button type="button" className="flex w-full items-center px-4 py-2" onClick={toggleDropdown}>
              {/*
              <button type="button" aria-label="Admin" className="bg-primary-yellow mr-4 flex h-12 w-12 items-center justify-center rounded-full">
                <CgProfile size={40} color="cyan" />
              </button>
              */}
              <span className="text-xl font-medium">Servicios</span>
            </button>
          </Link>
          <Link href="/#contact">
            {/*
              <button type="button" aria-label="Admin" className="bg-primary-yellow mr-4 flex h-12 w-12 items-center justify-center rounded-full">
                <CgProfile size={40} color="cyan" />
              </button>
              */}
            <button type="button" className="flex w-full items-center px-4 py-2" onClick={toggleDropdown}>
              <span className="text-xl font-medium">Contacto</span>

            </button>
          </Link>
          <Link href="/#blogs">
            {/*
              <button type="button" aria-label="Admin" className="bg-primary-yellow mr-4 flex h-12 w-12 items-center justify-center rounded-full">
                <CgProfile size={40} color="cyan" />
              </button>
              */}
            <button type="button" className="flex w-full items-center px-4 py-2" onClick={toggleDropdown}>
              <span className="text-xl font-medium">Blogs</span>
            </button>
          </Link>
        </nav>
      </div>
      <nav className=" relative top-0 z-50 hidden h-20 w-full items-center justify-between bg-blue-dark  px-12 text-white md:flex">
        {/* Logo grande para pantallas medianas y grandes */}
        <Link href="/" className="hidden  cursor-pointer pt-2 md:inline-flex">
          <Image
            src="/logo.svg"
            alt="logo"
            width={180}
            height={180}
            priority
          />
        </Link>

        {/* Logo pequeño para pantallas pequeñas */}
        <Link href="/" className="inline-flex cursor-pointer pt-2 md:hidden">
          <Image
            src="/logo-without-name.svg"
            alt="logo"
            width={80}
            height={100}
            priority
          />
        </Link>

        <ul className="flex w-full grow items-center justify-end gap-10 text-xl">

          <li>
            <Link className=" text-lg font-medium sm:text-xl xl:text-2xl " href="/#services">
              Servicios
            </Link>
          </li>
          <li>
            <Link className=" text-lg font-medium sm:text-xl xl:text-2xl " href="/#contact">
              Contacto
            </Link>
          </li>
          <li>
            <Link className="hidden text-lg font-medium sm:inline-flex sm:text-xl xl:text-2xl " href="/#blogs">
              Blogs
            </Link>
          </li>
        </ul>
      </nav>
    </>
  )
}
