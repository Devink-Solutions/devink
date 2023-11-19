import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => (
  <nav className=" sticky top-0 z-50 flex h-20 w-full items-center justify-between bg-blue-dark px-12 text-white opacity-90">
    <Link href="/">
      <figure className="hidden w-[140px] cursor-pointer pt-2 md:inline-flex">
        <Image src="/logo.svg" alt="logo" className="object-contain" width={300} height={300} />
      </figure>
    </Link>
    <Link href="/">
      <figure className="inline-flex w-[60px] cursor-pointer pt-2 md:hidden">
        <Image
          src="/logo-without-name.svg"
          alt="logo"
          width={150}
          height={150}
          className="object-contain"
        />
      </figure>
    </Link>

    <ul className="flex w-full grow items-center justify-end gap-10 text-xl">
      <li>
        <Link href="/services" className="border-b-4 border-cyan text-2xl font-medium">Services</Link>
      </li>
      <li>
        <Link href="/blogs" className=" border-b-4 border-cyan text-2xl font-medium">Blogs</Link>
      </li>
      <li>
        <Link href="#contact" className="border-b-4 border-cyan text-2xl font-medium ">Contacto</Link>
      </li>
    </ul>
  </nav>
)

export default Navbar
