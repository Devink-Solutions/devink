import React from 'react'

const Hero = () => {
  return (
    <section className="h-screen w-screen bg-[url('/laptop.jpeg')] bg-cover bg-no-repeat text-black" >
      <header className='text-center items-center flex flex-col justify-center h-full bg-gradient-to-br from-orange-600 to-transparent gap-4 [&>&]:animate-fade-up 
      [&>&]:animate-delay-75'>
        <h3 className='text-2xl font-medium'>En Devink</h3>
        <h1 className='text-5xl font-medium'>Sabemos como ayudarte a resolver lo que necesites</h1>
        <h4 className='text-xl'>Desarrollamos soluciones de IT para tu empresa.</h4>
        <button className='py-2 px-8 rounded-full font-medium bg-white text-black text-xl'>Contáctanos</button>
      </header>
    </section>
  )
}

export default Hero