/* eslint-disable max-len */
import { v4 as uuidv4 } from 'uuid'
import {
  FaCode, FaBusinessTime, FaChartBar, FaRobot,
} from 'react-icons/fa'
import { SlEnergy } from 'react-icons/sl'
import { TbColorSwatch } from 'react-icons/tb'

const services = [
  {
    Icon: FaCode,
    title: 'Desarrollo de Apps',
    description: 'Con React Native, creamos apps rápidas, responsivas y visualmente atractivas, garantizando un rendimiento óptimo en iOS y Android.',
  },
  {
    Icon: FaBusinessTime,
    title: 'Consultoría',
    description: 'Te asesoraremos en la migración hacia sistemas más avanzados y eficientes, minimizando interrupciones y maximizando tu retorno de inversión.',
  },
  {
    Icon: TbColorSwatch,
    title: 'Diseños personalizados',
    description: 'Diseñamos aplicaciones móviles, plataformas web corporativas o sistemas integrados,\n nuestro equipo trabaja contigo para crear soluciones que se adapten a tus expectativas.',
  },
  {
    Icon: FaChartBar,
    title: 'Advanced Analytics',
    description: 'Nos destacamos en integrar análisis de sistemas de datos en tus sistemas. Proporcionándote información clave sobre tus clientes y sus procesos, permitiéndote tomar decisiones informadas y optimizando la eficiencia de tu negocio.',
  },
  {
    Icon: FaRobot,
    title: 'Chatbot',
    description: 'Mejoramos la interacción con tus clientes mediante chatbots inteligentes. Los mismos son capaces de manejar consultas diversas, optimizando la experiencia del cliente y aliviando la carga de trabajo para tu equipo de soporte.',
  },

  {
    Icon: SlEnergy,
    title: 'Entregas',
    description: 'Valoramos la eficiencia en el mundo empresarial y nos comprometemos a entregar proyectos con calidad y rapidez.\n Nuestro equipo utiliza métodos ágiles para garantizar una entrega precisa y satisfactoria del producto final.',
  },
]

function ServiceCard({ Icon, title, description }) {
  return (
    <div className="rounded-lg bg-blue-dark p-6 shadow-md transition-shadow duration-300 hover:shadow-lg">
      <div className="mb-2 flex h-14 w-14 items-center justify-center rounded-lg bg-bg-dark ">
        <Icon className=" h-8 w-9 text-white" />
      </div>

      <h3 className="mb-4 text-lg font-semibold text-white">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  )
}

function Services() {
  return (
    <div className="flex max-w-[1440px] flex-col items-center bg-bg-dark p-12 text-white ">
      <h2 className="mb-8 text-4xl font-semibold">Nuestros servicios</h2>
      <p className="mb-8 text-center text-gray-400">
        Ofrecemos una amplia gama de servicios para ayudarte a alcanzar tus objetivos empresariales.
      </p>
      <div className="mb-20 grid max-w-[1440px] grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 ">
        {services.map((service) => (
          <ServiceCard
            key={uuidv4()}
            Icon={service.Icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </div>
  )
}

export default Services
