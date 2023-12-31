/* eslint-disable linebreak-style */
/* eslint-disable react/no-array-index-key */
/* eslint-disable max-len */

'use client'

import {
  Navigation, Pagination, Scrollbar, A11y, Autoplay,
} from 'swiper/modules'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/effect-fade'
import 'swiper/css/zoom'
import { useState, useEffect } from 'react'
import { LuLoader2 } from 'react-icons/lu'

import { MdOutlineDeveloperMode } from 'react-icons/md'
import { FaHourglassHalf, FaRobot } from 'react-icons/fa'
import { FaMobileScreenButton } from 'react-icons/fa6'
import { IoMdSync } from 'react-icons/io'
import { IoAnalytics } from 'react-icons/io5'

import ServicesCard from './ServicesCard'

const OurServicesScreen = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 300)
    return () => clearTimeout(timer)
  }, [])

  const cards = [
    {
      logo: <FaMobileScreenButton color="#6FFFE9" />,
      title: 'Desarrollo de Apps',
      text: 'Transformamos tus ideas en aplicaciones móviles excepcionales. Utilizando React Native, creamos aplicaciones rápidas, responsivas y visualmente atractivas que funcionan a la perfección tanto en iOS como en Android.',
      id: 1,
    },
    {
      logo: <IoMdSync color="#6FFFE9" />,
      title: 'Consultoría ',
      text: 'Ofrecemos servicios expertos de consultoría para modernizar tu infraestructura tecnológica. Te guiaremos en cada paso de la migración hacia sistemas más avanzados y eficientes, minimizando las interrupciones en tus operaciones diarias y maximizando el retorno de tu inversión tecnológica.',
      id: 2,
    },
    {
      logo: <MdOutlineDeveloperMode color="#6FFFE9" />,
      title: 'Desarrollo Personalizado',
      text: 'Ofrecemos soluciones de software hechas a la medida de tus necesidades. Ya sea una aplicación móvil, una web corporativa o sistemas integrados, nuestros expertos trabajan de cerca contigo para crear una solución que se ajuste perfectamente a tus requisitos y expectativas.',
      id: 3,
    },
    {
      logo: <IoAnalytics color="#6FFFE9" />,
      title: 'Analytics',
      text: 'Nos especializamos en integrar servicios de análisis de datos en tus sistemas. Esta integración te ofrece insights valiosos sobre tus clientes y operaciones, ayudándote a tomar decisiones informadas y a mejorar la eficiencia de tu negocio.',
      id: 4,
    },
    {
      logo: <FaRobot color="#6FFFE9" />,
      title: 'Chatbots',
      text: 'Implementamos chatbots inteligentes para mejorar la interacción con tus clientes. Estos sistemas son intuitivos y eficientes, capaces de manejar una variedad de consultas, mejorando así la experiencia del cliente y reduciendo la carga de trabajo de tu equipo de soporte.',
      id: 5,
    },
    {
      logo: <FaHourglassHalf color="#6FFFE9" />,
      title: 'Plazos de Entrega Ágiles',
      text: 'Entendemos la importancia del tiempo en el mundo de los negocios. Por eso, nos comprometemos a entregar proyectos en plazos ajustados, garantizando calidad y eficiencia. Nuestro equipo utiliza métodos ágiles para asegurar una entrega rápida sin sacrificar la calidad del producto final.',
      id: 6,
    },
  ]
  return (
    <section
      id="services"
      style={{ scrollMarginTop: '80px' }}
      className="z-20 flex w-full flex-col items-center justify-center  bg-blue-dark py-8  md:py-12"
    >
      <h3 className="mb-4 text-3xl font-medium text-cyan-bright md:mb-2">Nuestros Servicios</h3>
      <h4 className="mb-8 hidden px-4 text-center text-xl text-white md:flex">Una pequeña guía para conocer mas en que te podemos ayudar</h4>
      {isLoading
        ? (
          <div className="flex h-[440px] w-full items-center justify-center">
            <LuLoader2 className=" animate-spin text-cyan-bright" size={50} />
          </div>
        )
        : (
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              750: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              1020: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
            }}
            className="flex h-[440px] w-[95%] max-w-[1200px] flex-row sm:w-[90%] 2xl:max-w-[1440px]  "
            navigation
            autoplay={{
              delay: 9500,
              disableOnInteraction: false,
            }}
          >
            {cards.map((card, index) => (
              <SwiperSlide key={card.id}>
                <ServicesCard
                  logo={card.logo}
                  title={card.title}
                  text={card.text}
                  image={card.image}
                  key={index}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
    </section>
  )
}

export default OurServicesScreen
