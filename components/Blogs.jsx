import BlogCard from './BlogCard'

const fetchData = async () => {
  const response = await fetch('https://devink-cms.onrender.com/api/blogs?populate=cover', { cache: 'no-cache' })
  // if kevin want to revalidate data he has to use { cache: 'no-cache' } as a second parameter of the fetch
  const data = response.json()
  return data
}

export default async function Blogs() {
  const blogsData = await fetchData()

  return (
    <div className="z-20 flex w-full flex-col items-center justify-center bg-blue-dark px-2 py-8 md:px-6">
      <h3 className="py-6 text-2xl font-bold text-cyan-bright">Nuestros Blogs</h3>
      <div className="grid max-w-[1300px] grid-cols-1 gap-2 px-2 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 ">
        {blogsData.data?.map((blog) => (
          <BlogCard blog={blog} key={blog.id} />
        ))}
      </div>
    </div>
  )
}
