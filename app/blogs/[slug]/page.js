import React from 'react'
import Image from 'next/image'
import Markdown from 'react-markdown'

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
    <main className='h-full flex flex-col justify-center items-center bg-white'>
        <section className='w-full max-w-4xl   flex flex-col items-center justify-center bg-white p-4 md:p-8 shadow-md'>
            <figure className='flex flex-col w-full max-w-sm md:max-w-lg mb-4 overflow-hidden'>
                <Image
                  src={blog.attributes.cover.data.attributes.formats.small.url}
                  alt="Descripción de la imagen"
                  layout='intrinsic'
                  height={500}
                  width={500}
                  className='object-cover w-full m-4'
                />
            </figure>
            
            <h3 className='text-xl md:text-3xl font-semibold m-4 md:m-6'>{blog.attributes.title}</h3>
            
            <article className='prose prose-sm md:prose-lg lg:prose-xl prose-headings:underline prose-a:text-blue-600 prose-h1:text-xl w-full'>
                <Markdown>{blog.attributes.content}</Markdown>
            </article>
        </section>
    </main>
)
}

export default page

