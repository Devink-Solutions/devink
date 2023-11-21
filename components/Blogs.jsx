/* eslint-disable import/prefer-default-export */

'use client'

import {
  Navigation, Pagination, Scrollbar, A11y, Autoplay,
} from 'swiper/modules'

import { Swiper, SwiperSlide } from 'swiper/react'
import BlogCard from './BlogCard'
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/effect-fade'
import 'swiper/css/zoom'
import BlogsData from '@/public/Blogs.json'

export function Blogs() {
  const blogsData = BlogsData

  // Si no hay blogs, retornar null
  if (!blogsData.data || blogsData.data.length === 0) {
    return null
  }

  return (
    <div className="z-20 flex w-full flex-col  items-center justify-center rounded-3xl bg-blue-dark px-2 py-10 md:px-6">
      <h3 className="pb-4 md:pb-10 text-4xl font-bold text-cyan-bright">Nuestros Blogs</h3>
      <section className=" flex h-[500px] w-full  items-center overflow-hidden px-4 md:px-16 xl:h-[430px]">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          breakpoints={{
            450: {
              slidesPerView: 1,
              spaceBetween: 5,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1280: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          className="flex h-[430px] w-full flex-row"
          navigation
          autoplay={{

            delay: 7500,
            disableOnInteraction: false,
          }}
        >

          {blogsData.data?.map((blog) => (
            <SwiperSlide key={blog.id}>
              <BlogCard blog={blog} />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  )
}
