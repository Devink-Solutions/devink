"use client"
import useObserver from "@/hooks/useObserver"

const Card = ({ logo, title, text, className }) => {
  const [ref, inView] = useObserver({ threshold: 0.5 })
  return (
    <section
      ref={ref}
      className={`flex flex-col md:w-2/3 ${className} w-full ${
        inView ? "animate-fade-right animate-ease-in-out" : "opacity-0"
      }`}
    >
      <h3 className="text-2xl font-medium  leading-5 text-orange-500">
        {logo || ""}
      </h3>
      <h4 className="text-2xl  text-black">{title || ""}</h4>
      <p className="text-xl font-light text-black">{text || ""}</p>
    </section>
  )
}
export default Card
