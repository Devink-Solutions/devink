/* eslint-disable max-len */
import Image from 'next/image'
import Card from './Card'

const cards = [
  {
    logo: '01.',
    title: 'Planeamiento y estrategia',
    text: 'Nuestro proceso empieza tan pronto como nos contactas. Nos centramos en entender tus necesidades y rápidamente empezamos a elaborar un plan que se ajuste a tus objetivos. Buscamos soluciones prácticas y eficientes, pensando siempre en el crecimiento y la escalabilidad de tu negocio.',
  },
  {
    logo: '02.',
    title: 'Desarrollo y entrega',
    text: 'Una vez definido el plan, nos ponemos manos a la obra. Desarrollamos el software que necesitas, cubriendo desde la interfaz de usuario hasta las funcionalidades de backend, siempre según tus especificaciones. Nuestro enfoque es crear algo que no solo cumpla con tus expectativas, sino que sea fácil de usar y de mantener.',
    special: 'animate-delay-150',
  },
  {
    logo: '03.',
    title: 'Mantenimiento y evaluacion de resultados',
    text: 'Después del lanzamiento, seguimos a tu lado. Ofrecemos mantenimiento y apoyo continuo para asegurar que todo funcione sin problemas. Nos importa construir una relación de confianza contigo, garantizando que tu inversión tecnológica siga siendo relevante y efectiva a largo plazo.',
    special: 'animate-delay-300',
  },
]
const Steps = () => (
  <section
    id="about"
    className="relative flex w-full items-center justify-center bg-white py-4"
  >
    <div className="flex w-11/12 max-w-[1200px]  items-center justify-between gap-12 py-12 2xl:max-w-[1440px] ">
      <div className="flex w-full flex-col items-start gap-4 xl:w-4/5">
        <h3 className="mb-2 w-fit text-xl font-medium text-cyan lg:text-2xl">
          Que pasos vamos a seguir?
        </h3>
        {cards.map((x) => (
          <Card
            logo={x.logo}
            title={x.title}
            text={x.text}
            key={cards.indexOf(x)}
            className={x.special}
          />
        ))}
      </div>
      <figure className="hidden w-fit justify-end lg:mt-4 xl:inline-flex">
        <Image
          width={318}
          height={276}
          src="/Ai-development.png"
          alt="AI development"
        />
      </figure>
    </div>
  </section>
)

export default Steps
