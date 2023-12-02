/* eslint-disable tailwindcss/migration-from-tailwind-2 */
import Image from 'next/image'
import Link from 'next/link'

const BlogCard = ({ blog }) => (
  <Link key={blog.id} href={`/blogs/${blog.id}`} className="relative">
    <div className="h-full min-h-[400px] rounded-lg bg-white bg-opacity-70 p-4 shadow-md transition-all
    duration-200 hover:scale-[1.01] hover:shadow-lg"
    >
      <div className="relative h-60 w-full">
        <Image
          src={blog.attributes.cover.media.data.attributes.url}
          alt="Descripción de la imagen"
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
      </div>
      <h3 className="mt-4 text-lg font-semibold leading-tight text-gray-900">{blog.attributes.title}</h3>
      <p className="mt-2 text-sm text-gray-700">{blog.attributes.description}</p>
    </div>
  </Link>
)

export default BlogCard
