"use client"
import useObserver from "@/hooks/useObserver"
import { useEffect, useState } from "react"

const Card = ({ logo, title, text, className }) => {
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
      className={`flex flex-col ${className} w-full ${
        isInView ? "animate-fade-right animate-ease-in-out" : "opacity-0"
      }`}
    >
      <h3 className="text-2xl font-medium  leading-5 text-cyan">
        {logo || ""} {title}
      </h3>
      <p className="text-xl  text-blue-mid1  ">{text || ""}</p>
    </section>
  )
}
export default Card
