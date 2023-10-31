import Image from 'next/image'
import BlogCard from '../../components/BlogCard'

const page = async () => {
  const fetchData = async () => {
    const response = await fetch(
      'https://devink-cms.onrender.com/api/blogs?populate=cover',
      { next: { revalidate: 86400 } },
    )
    const data = response.json()
    return data
  }

  const blogsData = await fetchData()

  if (!blogsData.data || blogsData.data.length === 0) {
    return null
  }

  return (
    <main className="flex min-h-screen flex-col items-center overflow-x-hidden scroll-smooth ">
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
      <section className="mt-5 flex w-full max-w-[1300px] flex-col md:flex-row">
        {blogsData
          ? blogsData.data?.map((blog) => (
            <BlogCard blog={blog} key={blog.id} />
          ))
          : 'No hay blogs'}
      </section>
    </main>
  )
}

export default page
