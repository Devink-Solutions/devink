import React from "react"

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 flex h-20 w-full items-center justify-between bg-blue-dark px-12 text-white">
      <figure className="w-[140px] pt-2">
        <img src="/logo.svg" alt="logo" className="object-contain" />
      </figure>
      <ul className="flex gap-4 text-xl">
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
    </nav>
  )
}

export default Navbar
