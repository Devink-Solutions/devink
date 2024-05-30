"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious,
} from './ui/carousel'
import { useTranslations } from 'next-intl'
import { PostsOrPages } from '@tryghost/content-api'

export default function StudyCases({ blogPosts, locale }: { blogPosts: PostsOrPages, locale: string }) {
  const s = useTranslations("Success-cases")

  if (!blogPosts?.length) return null

  return (
    <section id="cases" style={{ scrollMarginTop: "140px" }}
      className="flex w-full bg-bg-dark">
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-semibold leading-9 text-white">
            {s('title')}
          </h2>
        </div>
        <div className="mt-10 xl:max-w-[1440px]">
          <Carousel className="mx-auto h-full w-[90%]" opts={{ align: 'start' }}>
            <CarouselContent className="mx-auto">
              {blogPosts.map((blog) => (

                <CarouselItem
                  key={blog.id}
                  className="flex basis-full flex-col items-start px-2 text-left
             transition-transform md:basis-1/2 xl:basis-1/3"
                >
                  <div className="mx-auto w-[360px]">
                    <div className="mb-4 flex h-72 items-center justify-center rounded-lg lg:h-96 lg:max-h-96">
                      {blog.feature_image
                        && (
                          <Image
                            src={blog?.feature_image}
                            width={1440}
                            height={1440}
                            alt="featured image"
                            className=" h-full w-full rounded-xl object-contain object-center"
                          />
                        )}
                    </div>
                    <h3 className="text-lg font-medium leading-6 text-white">{blog.title}</h3>
                    <p className="mt-2 line-clamp-3 text-base text-white">{blog.excerpt}</p>
                    <Link
                      href={`/${locale}/${blog.slug}`}
                      passHref
                      className="mt-3 flex cursor-pointer items-center "
                    >
                      <div className="mr-3 flex h-[40px] w-[40px] items-center justify-center rounded-full bg-cyan-bright">
                        <svg width="24" height="24" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949
                      10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584
                      11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673a
                       3.64036 5.95694 3.32394 6.1584 3.13508Z"
                            fill="white"
                            fillRule="evenodd"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>

                      <span className="font-normal text-white hover:underline">{s("button")}</span>
                    </Link>
                  </div>
                </CarouselItem>

              ))}

            </CarouselContent>
            <CarouselPrevious className="ml-4" />
            <CarouselNext className="mr-4" />
          </Carousel>
        </div>
      </div>
    </section>
  )
}
