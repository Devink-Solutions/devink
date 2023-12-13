/* eslint-disable linebreak-style */
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

const Blogs = ({ blogs }) => (
  <div
    style={{ scrollMarginTop: '80px' }}
    id="blogs"
    className="z-20 flex w-full  flex-col items-center justify-center bg-blue-dark py-10"
  >
    <h3 className="pb-4 text-3xl font-bold text-cyan-bright md:pb-10">Nuestros Blogs</h3>
    <section className=" flex h-[500px] w-[90%]  items-center overflow-hidden xl:h-[430px]">
      {blogs?.length > 1 && (
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={10}
          breakpoints={{
            450: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="flex h-[430px] w-full max-w-[1200px] flex-row 2xl:max-w-[1440px]"
          navigation
          autoplay={{
            delay: 9500,
            disableOnInteraction: true,
          }}
        >
          {blogs?.map((blog) => (
            <SwiperSlide key={blog.id}>
              <BlogCard blog={blog} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </section>
  </div>
)

export default Blogs
