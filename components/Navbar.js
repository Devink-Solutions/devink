import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className=" sticky top-0 z-50 flex h-20 w-full items-center justify-between bg-blue-dark px-12 text-white">
      <figure className="hidden w-[140px] pt-2 md:inline-flex">
        <img src="/logo.svg" alt="logo" className="object-contain" />
      </figure>

      <figure className="inline-flex w-[80px] pt-2 md:hidden">
        <img
          src="/logo-without-name.svg"
          alt="logo"
          className="object-contain"
        />
      </figure>
      <ul className=" hidden gap-4 text-xl md:inline-flex">
        <li>
          <Link href="#about">Nosotros</Link>
        </li>
        <li>
          <Link href="#services">Servicios</Link>
        </li>
        <li>
          <Link href="#makeacall">Agenda una llamada</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
