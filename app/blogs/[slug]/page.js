import React from 'react'
import Image from 'next/image'
import Markdown from 'react-markdown'
import Blogs from '@/public/Blogs.json'

const page = async ({ params }) => {
  const blog = Blogs.data.filter((x) => x.id === params.slug)
  console.log(blog)

  return (
    <main className="flex h-full flex-col items-center justify-center bg-white">
      <section className="flex w-full   max-w-4xl flex-col items-center justify-center bg-white p-4 shadow-md md:p-8">
        <figure className="mb-4 flex w-full max-w-sm flex-col overflow-hidden md:max-w-lg">
          <Image
            src={blog.attributes.cover.data.attributes.formats.small.url}
            alt="Descripción de la imagen"
            layout="intrinsic"
            height={500}
            width={500}
            className="m-4 w-full object-cover"
          />
        </figure>

        <h3 className="m-4 text-xl font-semibold md:m-6 md:text-3xl">{blog.attributes.title}</h3>

        <article className="prose prose-sm w-full md:prose-lg lg:prose-xl prose-headings:underline prose-h1:text-xl prose-a:text-blue-600">
          <Markdown>{blog.attributes.content}</Markdown>
        </article>
      </section>
    </main>
  )
}

export default page
