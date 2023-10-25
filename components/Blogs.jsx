import BlogCard from "./BlogCard"

const fetchData = async () => {
  const response = await fetch('https://devink-cms.onrender.com/api/blogs?populate=cover', {cache: 'no-cache'})
  // if kevin want to revalidate data he has to use { cache: 'no-cache' } as a second parameter of the fetch
  const data = response.json()
  return data
}

export async function Blogs () {
  const blogsData = await fetchData()
  
  return (
    <div className='flex flex-col items-center justify-center w-full bg-blue-dark py-6 z-20'>
      <h3 className="text-white font-semibold text-2xl py-6">Nuestros Blogs</h3>
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-[1300px]'>
      {blogsData.data?.map((blog) => (
        <BlogCard blog={blog} key={blog.id} />
      ))}
    </div>
  </div>

  )
}
