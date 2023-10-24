import React from 'react'
import Markdown from 'react-markdown'
import Image from 'next/image'

const fetchData = async (slug) => {
  const response = await fetch(`https://devink-cms.onrender.com/api/blogs/${slug}?populate=cover`, {cache: 'no-cache'})
  const data = response.json()
  return data
}

const page = async ({ params }) => {
  const { slug } = params
  const blogData = await fetchData(slug)
  const blog = blogData.data

  return (
    <main className='h-full flex justify-center'>
      <section className='max-w-[1400px]'>
      <figure className='w-[500px] aspect-square'>
        <Image
          src={blog.attributes.cover.data.attributes.formats.small.url}
          alt="Descripción de la imagen"
          height={500}
          width={500}
          className='object-cover h-full'
        />
      </figure>
 
      {blog.attributes.title}
      <Markdown>{blog.attributes.content}</Markdown>
      </section>
    </main>
  )
}

export default page
