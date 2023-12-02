'use client'

/* eslint-disable import/extensions */
import { init } from '@amplitude/analytics-browser'
import { useState, useEffect } from 'react'
import Hero from '@/components/Hero'
import OurExperience from '@/components/OurExperience'
import OurServicesScreen from '@/components/OurServicesScreen'
import Steps from '@/components/Steps'
import ContactForm from '@/components/ContactForm'
import { Blogs } from '@/components/Blogs'
import Cover from '@/components/Cover/Cover'

export default function Home() {
  const [blogs, setBlogs] = useState([])

  const getBlogs = async () => {
    const res = await fetch(
      'https://strapi-cms.devink.tech/api/blogs?populate[cover][populate][]=media',
    )
      .then((r) => r.json())
      .catch((err) => console.log(err))
    return setBlogs(res.data)
  }
  useEffect(() => {
    getBlogs()
  }, [])
  useEffect(() => {
    init(process.env.NEXT_PUBLIC_AMPLITUDE_KEY, {
      defaultTracking: true,
    })
  }, [])

  return (
    <main className="flex flex-col items-center overflow-x-hidden scroll-smooth">
      <Hero />
      <Steps />
      <OurServicesScreen />
      <OurExperience />
      <Blogs blogs={blogs} />
      <ContactForm />
      <Cover />
    </main>
  )
}
