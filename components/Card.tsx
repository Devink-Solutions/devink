/* eslint-disable tailwindcss/no-custom-classname */

interface Props {
  logo: any
  title: string
  text: string
  className?: string
}
const Card = ({
  logo, title, text, className,
}: Props) => (
  <section
    className={`flex w-full flex-col gap-1 sm:gap-3 ${className} `}
  >
    <h3 className="text-xl font-medium leading-5 text-cyan">
      {logo}
      {' '}
      {title}
    </h3>
    <p className="text-lg font-medium leading-6 text-blue-mid1">{text}</p>
  </section>
)

export default Card
