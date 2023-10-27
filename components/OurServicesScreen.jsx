/* eslint-disable max-len */
import { FaRunning, FaReact } from 'react-icons/fa'
import { AiFillDatabase } from 'react-icons/ai'
import { RiTeamFill } from 'react-icons/ri'
import { SlEnergy } from 'react-icons/sl'
import ServicesCard from './ServicesCard'

const OurServicesScreen = () => {
  const cards = [
    {
      logo: <FaRunning color="#6FFFE9" />,
      title: 'Desarrollo Agil',
      text: 'Trabajamos con metodologías ágiles. Si tu empresa también está aplicándolas, se sentirán cómodos con nosotros. Nos encanta entregar valor mediante software funcional rápidamente, para que el cliente vea a corto plazo los frutos de su inversión.',
    },
    {
      logo: <AiFillDatabase color="#6FFFE9" />,
      title: 'Analisis de Datos',
      text: 'El análisis de datos viene a simplificar la toma de decisiones dentro de cualquier industria, por eso ofrecemos un servicio personalizado que busca cumplir los requisitos para poder facilitar esta información de manera precisa y concisa.',
    },
    {
      logo: <FaReact color="#6FFFE9" />,
      title: 'Diseño UX',
      text: 'En todo modelo de negocios exitoso, la llegada a los consumidores es un tema clave. Podemos ayudarte con un sistema de interfaz de usuario especializado en tu público, buscando convertir las visitas a tu sitio en potenciales consumidores de tu producto o servicio.',
    },
    {
      logo: <RiTeamFill color="#6FFFE9" />,
      title: 'Equipo integral y soluciones a medida',
      text: '¿Tienes una idea en mente y llevarla a cabo no está del todo claro? Puedes reunirte con nosotros y explicarnos, así podremos orientarte y brindarte esa solución de software que estás buscando.',
    },
    {
      logo: <SlEnergy color="#6FFFE9" />,
      title: 'Energia',
      text: 'Dedicamos un apartado especial a este tema, ya que no es fácil encontrar un equipo joven y capacitado que pueda brindar soluciones integrales en periodos justos de tiempo, y que con estas características pueda ofrecer un servicio equilibrado en cuanto a la relación precio-calidad.',
    },
  ]
  return (
    <section
      id="services"
      className=" relative z-20 grid w-full gap-5 bg-blue-dark px-6 py-8 sm:grid-cols-2 md:px-20 2xl:grid-cols-5 2xl:py-12 "
    >
      {cards.map((x) => (
        <ServicesCard
          logo={x.logo}
          title={x.title}
          text={x.text}
          key={cards.indexOf(x)}
        />
      ))}
    </section>
  )
}

export default OurServicesScreen
