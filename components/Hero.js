import React from 'react'
import { AiOutlineDown } from 'react-icons/ai'

const Hero = () => {
  return (
    <section className="h-screen w-full bg-[url('/laptop.jpeg')] bg-cover bg-no-repeat text-black" >
      <header className='text-center items-center flex flex-col justify-center h-full bg-gradient-to-br from-orange-500 to-transparent gap-4'>
        <h3 className='text-2xl font-medium animate-fade-up animate-delay-75'>En Devink</h3>
        <h1 className='text-5xl font-medium animate-fade-up animate-delay-75'>Sabemos como ayudarte a resolver lo que necesites</h1>
        <h4 className='text-xl animate-fade-up animate-delay-75'>Desarrollamos soluciones de IT para tu empresa.</h4>
        <button className='py-2 px-8 rounded-full font-medium animate-fade-up animate-delay-75 bg-white text-black text-xl'>Contáctanos</button>
        <figure className='absolute bottom-4'>
          <AiOutlineDown color='#000' className='animate-bounce text-2xl' />
        </figure>
      </header>
    </section>
  )
}

export default Hero
