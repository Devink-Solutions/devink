/* eslint-disable import/prefer-default-export */
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
      className="z-20 flex h-[60vh] w-full flex-col items-center justify-center bg-blue-dark"
    >
      <h3 className="mb-4 text-2xl font-semibold text-cyan-bright">Nuestros Blogs</h3>
      <div className="grid max-w-[1300px] grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {blogsData.data?.map((blog) => (
          <BlogCard blog={blog} key={blog.id} />
        ))}
      </div>
    </div>
  )
}
