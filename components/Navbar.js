import React from "react"
import Link from "next/link"

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
          <a href="/">Inicio</a>
        </li>
        <li>
          <a href="/about">Nosotros</a>
        </li>
        <li>
          <a href="/services">Servicios</a>
        </li>
        <li>
          <a href="/contact">Contacto</a>
        </li>
      </ul>
      <Link
        className={`mt-2 rounded-xl bg-cyan-bright px-8 py-2 text-center text-xl font-medium text-blue-dark shadow-lg transition-colors duration-300 md:hidden`}
        href="https://usemotion.com/meet/ian-duhamel/devink?d=20"
        target="_blank"
      >
        Contáctanos
      </Link>
    </nav>
  )
}

export default Navbar
