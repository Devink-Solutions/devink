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
    <section className="relative flex w-full items-center  justify-between px-10 py-12">
      <GearColumn />
      <div className="flex w-full flex-col items-center gap-4 md:w-4/5">
        <h3 className="w-fit border-b-2 border-orange-300 text-xl text-orange-500 lg:text-2xl">
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
      <GearColumn />
    </section>
  )
}

export default Steps
