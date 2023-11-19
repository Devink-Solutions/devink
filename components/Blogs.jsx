/* eslint-disable import/prefer-default-export */
import BlogCard from './BlogCard'
import BlogsData from '@/public/Blogs.json'

export async function Blogs() {
  const blogsData = BlogsData

  // Si no hay blogs, retornar null
  if (!blogsData.data || blogsData.data.length === 0) {
    return null
  }

  return (
    <div
      id="Blogs"
      style={{ scrollMarginTop: '80px' }}
      className="z-20 flex h-full w-full flex-col items-center justify-center bg-blue-dark px-2 py-8 md:px-6"
    >
      <h3 className="mb-4 text-2xl font-semibold text-cyan-bright">Nuestros Blogs</h3>
      <div className="grid max-w-[1300px] grid-cols-1 gap-2 md:grid-cols-2 md:gap-10 lg:grid-cols-3">
        {blogsData.data?.map((blog) => (
          <BlogCard blog={blog} key={blog.id} />
        ))}
      </div>
    </div>
  )
}
