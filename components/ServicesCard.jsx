const Card = ({ logo, title, text }) => {
  return (
    <section
      className={`flex w-full flex-col overflow-x-hidden rounded-xl bg-white bg-opacity-70 p-8 px-6 shadow-md  md:hover:shadow-xl `}
    >
      <h3 className="py-2 text-2xl text-orange-500">{logo || ""}</h3>
      <h4 className="pb-2 text-2xl font-normal text-black">{title || ""}</h4>
      <p className="text-xl font-light">{text || ""}</p>
    </section>
  )
}
export default Card
