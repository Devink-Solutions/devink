import useObserver from '@/hooks/useObserver'

const Card = ({
  logo, title, text, className,
}) => {
  const [ref, inView] = useObserver({ threshold: 0.7 })

  return (
    <section
      ref={ref}
      className={`flex w-full flex-col gap-1 ${className} ${inView ? 'animate-fade-right animate-ease-in-out' : 'opacity-0'}`}
    >
      <h3 className="text-xl font-medium leading-5 text-cyan">
        {logo}
        {' '}
        {title}
      </h3>
      <p className="text-lg font-medium leading-6 text-blue-mid1">{text}</p>
    </section>
  )
}

export default Card
