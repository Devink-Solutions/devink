/* eslint-disable tailwindcss/migration-from-tailwind-2 */
/* eslint-disable max-len */
/* eslint-disable @next/next/no-img-element */
const Card = ({
  logo, title, text,
}) => (
  <section className="mx-auto flex h-full w-full max-w-[400px] flex-col overflow-hidden rounded-xl
  bg-white bg-opacity-70  p-4 shadow-md transition-shadow duration-300 md:hover:shadow-xl"
  >
    <div className="relative flex flex-col px-5 py-2">
      <div className="flex h-[72px] grow items-center justify-between gap-2">
        <h4 className="text-2xl font-semibold text-blue-mid2">
          {title || ''}
        </h4>
        <h3 className="text-4xl text-blue-dark">{logo || ''}</h3>
      </div>
      <p className=" text-lg font-light text-blue-mid1">{text || ''}</p>
    </div>
  </section>
)

export default Card
