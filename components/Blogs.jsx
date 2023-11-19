/* eslint-disable import/prefer-default-export */
import Image from 'next/image'
import BlogCard from './BlogCard'

const fetchData = async () => {
  const response = await fetch('https://devink-cms.onrender.com/api/blogs?populate=cover', { next: { revalidate: 86400 } })
  const data = response.json()
  return data
}

export async function Blogs() {
  const blogsData = await fetchData()

  // Si no hay blogs, retornar null
  if (!blogsData.data || blogsData.data.length === 0) {
    return null
  }

  return (
    <div
      id="Blogs"
      style={{ scrollMarginTop: '80px' }}
      className="relative z-20 flex h-full w-full flex-col items-center justify-center bg-blue-dark "
    >
      <figure className="max-h-[70vh] overflow-hidden ">
        <Image
          src="/HERO8.jpg"
          alt="Combria Logo"
          width={2000}
          height={400}
          className=" "
        />
        <div className="absolute inset-0 bg-[#0B132B] opacity-60" />
      </figure>
      <div className="absolute inset-0  z-10 flex flex-col items-center justify-center  text-center">
        <h3 className=" mb-12 text-6xl font-semibold text-cyan-bright">Nuestros Blogs</h3>
        <div className="grid max-w-[1300px] animate-fade-up grid-cols-1 gap-2 animate-delay-75 md:grid-cols-2 md:gap-10 lg:grid-cols-3 ">
          {blogsData.data?.map((blog) => (
            <BlogCard blog={blog} key={blog.id} />
          ))}
        </div>
      </div>
    </div>
  )
}
