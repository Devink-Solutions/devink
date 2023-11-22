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
    <div
      style={{ scrollMarginTop: '80px' }}
      id="blogs"
      className="z-20 flex w-full  flex-col items-center justify-center bg-blue-dark py-10"
    >
      <h3 className="pb-4 text-3xl font-bold text-cyan-bright md:pb-10">Nuestros Blogs</h3>
      <section className=" flex h-[500px] w-[90%]  items-center overflow-hidden xl:h-[430px]">
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
          className="flex h-[430px] w-full max-w-[1440px] flex-row"
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
