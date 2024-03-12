import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export function Accordion1() {
  return (
    <div className="flex min-h-[70vh] w-full flex-col items-center justify-center bg-bg-dark py-8">
      <div className="mb-10">
        <h2 className="text-center text-4xl font-bold text-white">FAQ</h2>
      </div>

      <Accordion type="single" collapsible className="mx-auto w-full max-w-4xl">
        <AccordionItem value="item-1" className="mb-2">
          <AccordionTrigger className="flex items-center justify-between rounded-md bg-blue-dark px-5 py-3 text-lg font-medium text-white hover:bg-blue-mid2  ">
            Inserte pregunta
          </AccordionTrigger>
          <AccordionContent className="rounded-b-md bg-gray-800 p-6 text-lg font-medium text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam repellendus recusandae error quisquam adipisci maxime odio dicta a vero temporibus.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2" className="mb-2">
          <AccordionTrigger className="flex items-center justify-between rounded-md bg-blue-dark px-5 py-3 text-lg font-medium text-white hover:bg-blue-mid2 ">
            Inserte pregunta
          </AccordionTrigger>
          <AccordionContent className="rounded-b-md bg-gray-800 p-6 text-lg font-medium text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam repellendus recusandae error quisquam adipisci maxime odio dicta a vero temporibus.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3" className="mb-2">
          <AccordionTrigger className="flex items-center justify-between rounded-md bg-blue-dark px-5 py-3 text-lg font-medium text-white hover:bg-blue-mid2 ">
            Inserte pregunta
          </AccordionTrigger>
          <AccordionContent className="rounded-b-md bg-gray-800 p-6 text-lg font-medium text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam repellendus recusandae error quisquam adipisci maxime odio dicta a vero temporibus.
          </AccordionContent>

        </AccordionItem>
      </Accordion>
    </div>
  )
}

export default Accordion1
