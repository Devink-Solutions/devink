import React from 'react'
import Link from 'next/link'

const Navbar = () => (
  <nav className=" sticky top-0 z-50 flex h-20 w-full items-center justify-between bg-blue-dark px-12 text-white">
    <Link href="/">
      <figure className="hidden w-[140px] cursor-pointer pt-2 md:inline-flex">
        <img src="/logo.svg" alt="logo" className="object-contain" />
      </figure>
    </Link>
    <Link href="/">
      <figure className="inline-flex w-[60px] cursor-pointer pt-2 md:hidden">
        <img
          src="/logo-without-name.svg"
          alt="logo"
          className="object-contain"
        />
      </figure>
    </Link>

    <ul className="flex w-full grow items-center justify-end gap-10 text-xl">
      <li>
        <Link href="/blogs">Blogs</Link>
      </li>
      <li>
        <Link href="#contact">Contacto</Link>
      </li>
    </ul>
  </nav>
)

export default Navbar
