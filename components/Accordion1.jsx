import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export function Accordion1() {
  return (
    <div className="flex max-h-[70vh] w-full flex-col items-center justify-center bg-bg-dark py-8">
      <div className="mb-10">
        <h2 className="text-center text-4xl font-semibold text-white">FAQ</h2>
      </div>

      <Accordion type="single" collapsible className="mx-auto w-full max-w-6xl">
        <AccordionItem value="item-1" className="mb-2">
          <AccordionTrigger className="flex items-center justify-between rounded-md bg-blue-dark px-5 py-3 text-lg font-medium text-white hover:bg-blue-mid2">
            ¿Qué tecnologías utilizan en el desarrollo de aplicaciones web?
          </AccordionTrigger>
          <AccordionContent className="rounded-b-md bg-bg-dark p-6 text-lg font-medium text-gray-300">
            Nuestra empresa se especializa en tecnologías modernas de desarrollo web, incluyendo JavaScript, React, Next.js, Redux, Astro y Zustand para la gestión de estado. Utilizamos bases de datos SQL y NoSQL y aplicamos las mejores prácticas de UI/UX para asegurar aplicaciones eficientes, atractivas y funcionales.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2" className="mb-2">
          <AccordionTrigger className="flex items-center justify-between rounded-md bg-blue-dark px-5 py-3 text-lg font-medium text-white hover:bg-blue-mid2">
            ¿Cómo aseguran la calidad y el rendimiento en los proyectos?
          </AccordionTrigger>
          <AccordionContent className="rounded-b-md bg-bg-dark p-6 text-lg font-medium text-gray-300">
            Empleamos diversas técnicas y herramientas para garantizar la calidad y el rendimiento. Esto incluye revisiones de código, pruebas automatizadas, y el uso de Shadow CN para optimizar el rendimiento de las aplicaciones web. Nuestro enfoque se centra en la eficiencia, seguridad y escalabilidad de cada proyecto.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3" className="mb-2">
          <AccordionTrigger className="flex items-center justify-between rounded-md bg-blue-dark px-5 py-3 text-lg font-medium text-white hover:bg-blue-mid2">
            ¿Ofrecen servicios personalizados para e-commerce?
          </AccordionTrigger>
          <AccordionContent className="rounded-b-md bg-bg-dark p-6 text-lg font-medium text-gray-300">
            Sí, ofrecemos soluciones de comercio electrónico personalizadas, centrándonos en la creación de una experiencia de usuario excepcional. Utilizamos tecnologías como React y Next.js para construir interfaces dinámicas y funcionales, integrando sistemas de gestión de contenido y pasarelas de pago para proporcionar una solución e-commerce completa.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4" className="mb-2">
          <AccordionTrigger className="flex items-center justify-between rounded-md bg-blue-dark px-5 py-3 text-lg font-medium text-white hover:bg-blue-mid2">
            ¿Cómo abordan la seguridad en el desarrollo de aplicaciones?
          </AccordionTrigger>
          <AccordionContent className="rounded-b-md bg-bg-dark p-6 text-lg font-medium text-gray-300">
            La seguridad es una prioridad en cada fase de desarrollo. Implementamos prácticas como la codificación segura, análisis estático y dinámico de código, pruebas de penetración, y cumplimiento de normativas de seguridad de datos. Además, educamos a nuestro equipo regularmente sobre las últimas tendencias en seguridad cibernética para prevenir vulnerabilidades.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5" className="mb-2">
          <AccordionTrigger className="flex items-center justify-between rounded-md bg-blue-dark px-5 py-3 text-lg font-medium text-white hover:bg-blue-mid2">
            ¿Qué procesos siguen para el diseño de interfaces de usuario?
          </AccordionTrigger>
          <AccordionContent className="rounded-b-md bg-bg-dark p-6 text-lg font-medium text-gray-300">
            Nuestro proceso de diseño de interfaces se centra en la experiencia del usuario. Comenzamos con la investigación y la definición de los usuarios, seguido de wireframing y creación de prototipos. Utilizamos herramientas modernas y seguimos las últimas tendencias en diseño UI/UX para asegurar que nuestras interfaces sean intuitivas, accesibles y estéticamente agradables. La retroalimentación de los usuarios es clave en nuestro proceso iterativo.
          </AccordionContent>
        </AccordionItem>

      </Accordion>

    </div>
  )
}

export default Accordion1
