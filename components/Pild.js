'use client'

import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import useModal from '@/hooks/useModal'
import useLocation from '@/hooks/useLocation'

const Pild = ({ className, direction }) => {
  const options = [
    {
      flagImg: '/flags/spain.png',
      lang: 'es',
    },

    {
      flagImg: '/flags/united-states.png',
      lang: 'en',
    },
    {
      flagImg: '/flags/brazil.png',
      lang: 'pt',
    },
  ]
  const [selectedOption, setSelectedOption] = useState(options[0])

  const { isOpen, toggleDropdown, ref } = useModal()
  const path = useLocation()

  const selectOption = (option) => {
    if (options.map((opt) => opt.lang).includes(option.lang)) setSelectedOption(option)
    toggleDropdown()
  }

  useEffect(() => {
    const currentPath = typeof path === 'string' ? path : path.pathname
    const currentOption = options.find((opt) => opt.lang === currentPath)
    setSelectedOption(currentOption || options[0])
  }, [path])

  const posibleOptions = useMemo(() => options.filter((option) => option.lang !== selectedOption.lang), [selectedOption])

  return (
    <div ref={ref} className="relative">
      <button
        type="button" // Add the type attribute with a value of "button"
        onClick={toggleDropdown}
        className="flex items-center justify-center gap-2 rounded-2xl px-3 font-medium md:px-6 md:py-1"
      >
        <Image src={selectedOption.flagImg} alt={selectedOption.lang} width={32} height={32} className="mr-1" />
        {selectedOption ? selectedOption.lang.toUpperCase() : null}
      </button>
      {isOpen && (
        <div className={`${direction} absolute z-50  mt-2 flex flex-col items-center justify-center`}>
          {posibleOptions.map((option) => (
            <Link key={option.lang} href={`/${option.lang}`} locale={option.lang}>
              <button
                className={`${className}  flex items-center justify-center
               gap-2 rounded-2xl px-3 font-medium md:px-6 md:py-1`}
                onClick={() => selectOption(option)}
                type="button"
              >
                <Image src={option.flagImg} alt={option.lang} width={32} height={32} className="mr-1" />
                {option.lang.toUpperCase()}
              </button>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export default Pild
