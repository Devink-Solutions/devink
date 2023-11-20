'use client'

const error = () => (
  <main className="flex h-[50vh] items-center justify-center bg-gray-100">
    <section className="flex w-full max-w-4xl flex-col items-center rounded-lg bg-white p-6 shadow-xl">
      <h3 className="mb-4 text-3xl font-bold text-red-600">Error 500</h3>
      <article className="prose w-full text-center">
        <p>Parece que hubo un error del lado del servidor.</p>
        <button
          className="mt-4 rounded bg-blue-500 px-4 py-2 text-lg text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          onClick={() => window.history.back()}
        >
          Volver
        </button>
      </article>
    </section>
  </main>
)

export default error
