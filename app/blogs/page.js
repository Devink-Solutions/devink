'use client'

import Image from 'next/image'
import { Blogs } from '@/components/Blogs'

const page = () => (
  <main className="flex min-h-screen flex-col items-center overflow-x-hidden scroll-smooth bg-white ">
    <header className="mx-auto mt-5 flex w-[90%] max-w-[1300px] flex-col justify-start">
      <div className="flex items-center">
        <Image src="/favicon.ico" width={80} height={60} />
        <h1 className="ml-2 text-[30px] font-semibold md:text-[50px]">
          Devink
          {' '}
          <span className="italic ">Blogs</span>
        </h1>
      </div>
      <h2 className="mt-5 text-[20px] font-light md:text-[30px] ">
        Descubre cómo las empresas exitosas se reinventan con la ayuda de la
        tecnología y la ciencia de vanguardia.
      </h2>
    </header>
    <section className="mt-5 flex w-full max-w-[1300px] flex-col rounded-3xl md:flex-row">
      <Blogs />
    </section>
  </main>
)

export default page
