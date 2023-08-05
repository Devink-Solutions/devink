import Card from "../components/Card"
import GearColumn from "../components/GearColumn"
const cards = [
  {
    logo: "01.",
    title: "Planeamiento y estrategia",
    text: "El camino inicia en el primer momento cuando te pones en contacto y nos cuentas tu problema. Rápidamente nos pondremos sobre ello a pensar cuál es la mejor forma de resolver la problemática, que genere valor, sea sostenible  y escalable en el tiempo, ya que queremos que crezcas y nos recomiendes.",
  },
  {
    logo: "02.",
    title: "Desarrollo y entrega",
    text: "Luego te presentaremos software funcional de acuerdo a tus requerimientos: frontend, experiencia de usuario, backend, bases de datos, tableros de análisis o la solución integral, si es que tu proyecto así lo requiere. Esto es una aproximación y que se puede pulir en base a la respuesta de su necesidad.",
    special: "animate-delay-150",
  },
  {
    logo: "03.",
    title: "Mantenimiento y evaluacion de resultados",
    text: "Una vez finalizado nuestro servicio y puesto en marcha, se brinda un seguimiento a la solucion brindada, dándole así mantenimiento y apoyo en el tiempo, generando una sólida relación de confianza entre el cliente y nuestra empresa.",
    special: "animate-delay-300",
  },
]
const Steps = () => {
  return (
    <section className="relative flex w-full items-center justify-center bg-white">
      <div className="absolute left-10 z-10">
        <GearColumn />
      </div>
      <div className="flex w-11/12 items-center justify-between px-2 py-10 md:px-32">
        <div className="w flex w-full flex-col items-start gap-4 md:pr-32 lg:w-4/5">
          <h3 className="w-fit text-xl font-medium text-cyan lg:text-2xl">
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
        <figure className="hidden w-1/5 lg:inline-flex">
          <img src="/Ai-development.png" alt="AI development" />
        </figure>
      </div>
      <div className="absolute right-10 z-10">
        <GearColumn />
      </div>
    </section>
  )
}

export default Steps
