/* eslint-disable react/no-array-index-key */
/* eslint-disable max-len */
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
      className=" relative z-20 grid w-full gap-5 bg-blue-dark px-6 py-8 sm:grid-cols-2 md:px-20 2xl:grid-cols-5 2xl:py-12 "
    >
      {cards.map((card, index) => (
        <ServicesCard
          logo={card.logo}
          title={card.title}
          text={card.text}
          image={card.image}
          key={index}
        />
      ))}
    </section>
  )
}

export default OurServicesScreen
