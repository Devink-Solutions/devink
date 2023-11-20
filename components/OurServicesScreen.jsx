/* eslint-disable max-len */

import ServicesCard from './ServicesCard'

const OurServicesScreen = () => {
  const cards = [
    {
      image: '/DALL·E 2023-11-19 23.38.30 - Friendly and approachable cartoon-style illustration showing a digital landscape with various brand logos prominently displayed on virtual buildings, .png',
      title: 'Desarrollo Personalizado',
      text: 'Ofrecemos soluciones de software hechas a la medida de tus necesidades. Ya sea una aplicación móvil, una web corporativa o sistemas integrados, nuestros expertos trabajan de cerca contigo para crear una solución que se ajuste perfectamente a tus requisitos y expectativas.',
    },
    {
      image: '/DALL·E 2023-11-20 17.06.16 - An.png',
      title: 'Plazos de Entrega Ágiles',
      text: 'Entendemos la importancia del tiempo en el mundo de los negocios. Por eso, nos comprometemos a entregar proyectos en plazos ajustados, garantizando calidad y eficiencia. Nuestro equipo utiliza métodos ágiles para asegurar una entrega rápida sin sacrificar la calidad del producto final.',
    },
    {
      image: '/DALL·E 2023-11-19 23.54.03 - A semi-formal but cartoonish illustration representing innovative IT solutions in a business environment. The scene includes a diverse group of profes.png',
      title: 'Integraciones de Amplitud',
      text: 'Nos especializamos en integrar una amplia gama de servicios y plataformas para amplificar las capacidades de tu negocio. Desde sistemas de CRM y ERP hasta redes sociales y plataformas de pago, nos aseguramos de que tus sistemas funcionen en perfecta armonía.',
    },
    {
      image: '/DALL·E 2023-11-20 17.08.39 - A creative representation of a large network or mesh of interconnected nodes, symbolizing various platforms and services. The nodes are connected by l.png',
      title: 'Servicios de Chatbots',
      text: 'Implementamos soluciones de chatbots inteligentes para mejorar la interacción con tus clientes. Estos chatbots están diseñados para ser intuitivos, eficientes y capaces de manejar una amplia gama de consultas, lo que mejora la experiencia del cliente y reduce la carga de trabajo del equipo de soporte.',
    },
    {
      image: '/DALL·E 2023-11-20 00.15.46 - Modern and sleek web development concept illustrating Next.js technology. Feature a minimalist and futuristic computer workstation with dual monitors .png',
      title: 'Migraciones a Nuevas Tecnologías',
      text: 'Te ayudamos a mantener tu negocio actualizado con las últimas tecnologías. Nuestro equipo puede guiar tu migración a sistemas más modernos y eficientes, asegurando una transición suave y minimizando el impacto en tus operaciones diarias.',
    },
  ]
  return (
    <section
      id="services"
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
