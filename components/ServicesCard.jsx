/* eslint-disable max-len */
/* eslint-disable @next/next/no-img-element */

const Card = ({
  logo, title, text, image,
}) => (
  <section className="flex w-full flex-col overflow-x-hidden rounded-xl bg-white bg-opacity-70 p-0 shadow-md transition-shadow duration-300 md:hover:shadow-xl">
    {/* Imagen de la tarjeta */}
    {image && (
      <div className="w-full">
        <img src={image} alt={title} className="h-auto w-full rounded-t-lg object-cover" />
      </div>
    )}

    {/* Logo, si está disponible */}
    <div className="p-4">
      <h3 className=" text-2xl text-blue-dark">{logo || ''}</h3>

      {/* Título de la tarjeta */}
      <h4 className="pb-2 text-2xl font-semibold text-blue-mid2">
        {title || ''}
      </h4>

      {/* Texto de la tarjeta */}
      <p className="text-lg font-light text-blue-mid1">{text || ''}</p>
    </div>
  </section>
)

export default Card
