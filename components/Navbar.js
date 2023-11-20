import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => (
  <nav className="sticky top-0 z-50 flex h-20 w-full items-center justify-between bg-blue-dark bg-opacity-75 px-12 text-white">
    {/* Logo grande para pantallas medianas y grandes */}
    <Link href="/" className="hidden  cursor-pointer pt-2 md:inline-flex">
      <Image
        src="/logo.svg"
        alt="logo"
        layout="fixed"
        width={300}
        height={300}
        priority
      />

    </Link>

    {/* Logo pequeño para pantallas pequeñas */}
    <Link href="/" className="inline-flex cursor-pointer pt-2 md:hidden">
      <Image
        src="/logo-without-name.svg"
        alt="logo"
        layout="fixed"
        width={80}
        height={150}
        priority
      />
    </Link>

    <ul className="flex w-full grow items-center justify-end gap-10 text-xl">
      <li>
        <Link className="border-b-4 border-cyan text-lg font-medium sm:text-xl xl:text-2xl " href="/blogs">
          Blogs
        </Link>
      </li>
      <li>
        <Link className="border-b-4 border-cyan text-lg font-medium sm:text-xl xl:text-2xl " href="#services">
          Services
        </Link>
      </li>
      <li>
        <Link className="border-b-4 border-cyan  text-lg font-medium sm:text-xl xl:text-2xl " href="#contact">
          Contacto
        </Link>
      </li>
    </ul>
  </nav>
)

export default Navbar
