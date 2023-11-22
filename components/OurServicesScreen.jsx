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

import { MdOutlineDeveloperMode } from 'react-icons/md'
import { FaHourglassHalf, FaRobot } from 'react-icons/fa'
// import { GiConnectedWorld } from 'react-icons/gi'
import { IoMdSync } from 'react-icons/io'
import { IoAnalytics } from 'react-icons/io5'

import ServicesCard from './ServicesCard'

const OurServicesScreen = () => {
  const cards = [
    {
      logo: <MdOutlineDeveloperMode color="#6FFFE9" />,
      title: 'Desarrollo Personalizado',
      text: 'Ofrecemos soluciones de software hechas a la medida de tus necesidades. Ya sea una aplicación móvil, una web corporativa o sistemas integrados, nuestros expertos trabajan de cerca contigo para crear una solución que se ajuste perfectamente a tus requisitos y expectativas.',
    },
    {
      logo: <FaHourglassHalf color="#6FFFE9" />,
      title: 'Plazos de Entrega Ágiles',
      text: 'Entendemos la importancia del tiempo en el mundo de los negocios. Por eso, nos comprometemos a entregar proyectos en plazos ajustados, garantizando calidad y eficiencia. Nuestro equipo utiliza métodos ágiles para asegurar una entrega rápida sin sacrificar la calidad del producto final.',
    },
    {
      logo: <IoAnalytics color="#6FFFE9" />,
      title: 'Integraciones de Analytics',
      text: 'Nos especializamos en integrar una amplia gama de servicios de analisis de datos en tus sistemas. Esto te permite obtener información valiosa sobre tus clientes y operaciones, lo que te ayuda a tomar decisiones más informadas y a mejorar la eficiencia de tu negocio.',
    },
    {
      logo: <FaRobot color="#6FFFE9" />,
      title: 'Servicios de Chatbots',
      text: 'Implementamos soluciones de chatbots inteligentes para mejorar la interacción con tus clientes. Estos chatbots están diseñados para ser intuitivos, eficientes y capaces de manejar una amplia gama de consultas, lo que mejora la experiencia del cliente y reduce la carga de trabajo del equipo de soporte.',
    },
    {
      logo: <IoMdSync color="#6FFFE9" />,
      title: 'Migraciones a Nuevas Tecnologías',
      text: 'Te ayudamos a mantener tu negocio actualizado con las últimas tecnologías. Nuestro equipo puede guiar tu migración a sistemas más modernos y eficientes, asegurando una transición suave y minimizando el impacto en tus operaciones diarias.',
    },
  ]
  return (
    <section
      id="services"
      style={{ scrollMarginTop: '80px' }}
      className="z-20 flex w-full flex-col items-center  justify-center bg-blue-dark py-8"
    >
      <h3 className="mb-4 text-3xl font-medium text-cyan-bright">Nuestros Servicios</h3>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 5,
          },
          750: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1020: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1320: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
        }}
        className="flex h-[480px] w-[95%] max-w-[1440px] flex-row sm:w-[90%]  "
        navigation
        autoplay={{
          delay: 7500,
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
    </section>
  )
}

export default OurServicesScreen
