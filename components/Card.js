const Card = ({ logo, title, text, especial }) => {
  return (
    <section className={`flex flex-col text-center ${especial} w-full`}>
      <h3 className='text-2xl font-medium  leading-5 text-orange-500'>
        {logo || ''}
      </h3>
      <h4 className='text-2xl  text-black'>{title || ''}</h4>
      <p className='text-xl font-light text-black'>{text || ''}</p>
    </section>
  )
}
export default Card
