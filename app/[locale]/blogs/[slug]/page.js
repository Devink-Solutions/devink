import Image from 'next/image'
import Markdown from 'react-markdown'

const getBlog = async (slug) => {
  const res = await fetch(
    `https://devink-cms.cap.devink.site/api/blogs?filters[slug][$eq]=${(slug)}&populate[cover][populate][]=media`,
  )
    .then((r) => r.json())
    .catch((err) => console.log(err))
  return res.data[0]
}

const Blog = async ({ params }) => {
  const { slug } = params
  const blog = await getBlog(slug)

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

        <article className="prose prose-sm md:prose-lg lg:prose-xl prose-headings:underline prose-h1:text-xl prose-a:text-blue-600 w-full">
          <Markdown>{blog.attributes.content}</Markdown>
        </article>
      </section>
    </main>
  )
}

export default Blog
