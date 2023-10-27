'use client'

import { useEffect, useState } from 'react'
import useObserver from '@/hooks/useObserver'

const Card = ({
  logo, title, text, className,
}) => {
  const [ref, inView] = useObserver({ threshold: 0.7 })
  const [isInView, setIsInView] = useState(false)
  useEffect(() => {
    if (inView) {
      setIsInView(true)
    }
  }, [inView])
  return (
    <section
      ref={ref}
      className={`flex w-full flex-col ${className} ${
        isInView ? 'animate-fade-right animate-ease-in-out' : 'opacity-0'
      }`}
    >
      <h3 className="text-xl font-medium   leading-5  text-cyan md:text-2xl">
        {logo || ''}
        {' '}
        {title}
      </h3>
      <p className="text-lg text-blue-mid1  md:text-xl  ">{text || ''}</p>
    </section>
  )
}
export default Card
