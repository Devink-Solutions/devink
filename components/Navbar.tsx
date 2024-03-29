/* eslint-disable tailwindcss/migration-from-tailwind-2 */

'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { AiOutlineMenu } from 'react-icons/ai'
import { useTranslations } from 'next-intl'
import useModal from '@/hooks/useModal'
import Pild from './Pild'

export default function Navbar() {
  const { isOpen, toggleDropdown, ref } = useModal()
  const n = useTranslations('Navbar')
  return (
    <>
      <div ref={ref} className="sticky   top-0 z-50 flex lg:hidden ">
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
          className={`fixed ${isOpen ? 'translate-x-0' : 'translate-x-[100%]'} right-0 top-[80px]
       z-[30] flex w-[200px] flex-col rounded-bl-2xl bg-bg-dark py-2 text-white brightness-125 transition-transform duration-300`}
        >
          <Link href="/#services">
            <button
              type="button"
              className="flex w-full items-center px-4 py-2"
              onClick={toggleDropdown}
            >

              <span className="text-xl font-medium">{n('home')}</span>
            </button>
          </Link>
          <Link href="/#contact">

            <button
              type="button"
              className="flex w-full items-center px-4 py-2"
              onClick={toggleDropdown}
            >
              <span className="text-xl font-medium">{n('services')}</span>
            </button>
          </Link>
          <Link href="/#blogs">

            <button
              type="button"
              className="flex w-full items-center px-4 py-2"
              onClick={toggleDropdown}
            >
              <span className="text-xl font-medium">{n('cases')}</span>
            </button>
          </Link>
          <Link href="/#faq">

            <button
              type="button"
              className="flex w-full items-center px-4 py-2"
              onClick={toggleDropdown}
            >
              <span className="text-xl font-medium">{n('Faq')}</span>
            </button>
          </Link>
        </nav>
      </div>
      <nav className="relative  top-0 z-50 hidden h-20 w-full flex-row items-center
      justify-between border-b-2 border-bg-dark bg-bg-dark px-12 text-white shadow-lg lg:flex"
      >
        <div className="hidden cursor-pointer pt-2 lg:inline-flex">
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
                {n('home')}
              </Link>
            </li>
            <li>
              <Link
                className=" p-2  font-light  "
                href="/#services"
              >
                {n('services')}
              </Link>
            </li>
            <li>
              <Link
                className=" p-2  font-light "
                href="/#contact"
              >
                {n('cases')}
              </Link>
            </li>
            <li className="hidden">
              <Link
                className="hidden p-2  font-light sm:inline-flex "
                href="/#blogs"
              >
                {/* {n('Blogs')} */}
              </Link>
            </li>
            <li>
              <Link
                className="hidden p-2  font-light sm:inline-flex "
                href="/#blogs"
              >
                {n('Faq')}
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-row space-x-4">
          <Link
            href="https://calendly.com/devinksolutions/30min"
            target="_blank"
            className="w-fit rounded-full border
           border-bg-light bg-slate-700 px-8  py-2 text-lg font-medium text-bg-light hover:bg-bg-light
            hover:text-black dark:text-bg-light"
          >
            {n('contact')}
          </Link>

          <div className="relative flex flex-row gap-2">
            <Pild />
          </div>
        </div>
      </nav>
    </>
  )
}
