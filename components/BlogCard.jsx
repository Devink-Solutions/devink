import Image from 'next/image'
import Link from 'next/link'

const BlogCard = ({blog}) => {
  return (
  <Link key={blog.id} href={`/blogs/${blog.id}`} className='relative'>
    <div className='m-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-[1.01]'>
      <div className='relative h-60 w-full'>
        <Image
          src={blog.attributes.cover.data.attributes.formats.small.url}
          alt="Descripción de la imagen"
          layout="fill"
          objectFit="cover"
          className='rounded-t-lg'
        />
      </div>
      <h3 className='mt-4 text-lg leading-tight font-semibold text-gray-900'>{blog.attributes.title}</h3>
      <p className='text-sm text-gray-700 mt-2'>{blog.attributes.description}</p>
    </div>
  </Link>
  )
}

export default BlogCard