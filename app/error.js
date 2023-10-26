import React from 'react'

const error = () => {
  return (
    <main className='h-full flex flex-col justify-center items-center bg-white'>
        <section className='w-full max-w-4xl   flex flex-col items-center justify-center bg-white p-4 md:p-8 shadow-md'>
            <h3 className='text-xl md:text-3xl font-semibold m-4 md:m-6'>Error 500</h3>
            <article className='prose prose-sm md:prose-lg lg:prose-xl prose-headings:underline prose-a:text-blue-600 prose-h1:text-xl w-full'>
                <p>Parece que hubo un error del lado del servidor</p>
            </article>
        </section>
    </main>
  )
}

export default error