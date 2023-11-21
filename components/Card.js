import { useEffect } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import useObserver from '@/hooks/useObserver'

const Card = ({
  logo, title, text, className,
}) => {
  const [ref, inView] = useObserver({ threshold: 0.7 })

  return (
    <section
      ref={ref}
      className={classNames(
        'flex w-full flex-col',
        className,
        { 'animate-fade-right animate-ease-in-out': inView },
        { 'opacity-0': !inView },
      )}
    >
      <h3 className="text-xl font-medium leading-5 text-cyan md:text-2xl">
        {logo}
        {' '}
        {title}
      </h3>
      <p className="text-lg text-blue-mid1 md:text-xl">{text}</p>
    </section>
  )
}

Card.propTypes = {
  logo: PropTypes.string,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
}

Card.defaultProps = {
  logo: '',
  className: '',
}

export default Card
