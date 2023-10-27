'use client'

const error = () => (
  <main className="flex h-full grow flex-col items-center justify-center bg-white">
    <section className="flex w-full   max-w-4xl flex-col items-center justify-center bg-white p-4 shadow-md md:p-8">
      <h3 className="m-4 text-xl font-semibold md:m-6 md:text-3xl">Error 500</h3>
      <article className="prose prose-sm w-full md:prose-lg lg:prose-xl prose-headings:underline prose-h1:text-xl prose-a:text-blue-600">
        <p>Parece que hubo un error del lado del servidor</p>
      </article>
    </section>
  </main>
)

export default error
