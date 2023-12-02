'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Markdown from 'react-markdown'

const Blog = ({ params }) => {
  const { slug } = params
  const [blog, setBlog] = useState(null)

  const getBlog = async () => {
    const res = await fetch(
      `https://strapi-cms.devink.tech/api/blogs/${slug}?populate[cover][populate][]=media`,
    )
      .then((r) => r.json())
      .catch((err) => console.log(err))
    return setBlog(res.data)
  }

  useEffect(() => {
    getBlog()
  }, [])
  console.log(blog)

  if (!blog) return null
  return (
    <main className="flex h-full flex-col items-center justify-center bg-white">
      <section className="flex w-full   max-w-4xl flex-col items-center justify-center bg-white p-4 shadow-md md:p-8">
        <figure className="mb-2 flex w-full max-w-[800px] flex-col overflow-hidden">
          <Image
            src={blog.attributes.cover.media.data.attributes.url}
            alt="Descripción de la imagen"
            height={1080}
            width={1920}
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

export default Blog
