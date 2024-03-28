/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable no-console */
/* eslint-disable max-len */

'use client'

import emailjs from '@emailjs/browser'
import React, { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'

const ContactForm = () => {
  const [send, setSend] = useState(false)

  function sendEmail(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    emailjs
      .sendForm(
        'service_if4cb5g',
        'template_uqmz0gp',
        e.target,
        'r5e0ULGMbZDfNqhQ3',
      )
      .then(
        () => {
          setSend(true)
        },
        (error) => {
          console.log(error.text)
        },
      )
    e.target.reset()
  }

  return (
    <section className="relative z-10 w-[90%] max-w-[1440px] ">
      <div
        className="relative mx-auto flex max-w-6xl flex-col items-center rounded-lg p-8 sm:p-12 lg:flex-row lg:items-start"
        style={{ backgroundImage: "url('/Rectangle 39.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}
      >

        <div className="flex flex-col items-center justify-center text-white md:w-1/2">
          <h2 className="mb-6 items-center text-center text-4xl font-semibold">Transforma tus ideas en realidad. ¡Contáctanos!</h2>
          <p className="mb-10 pt-4 text-center text-xl font-normal">
            Comparte más detalles sobre tu idea, proyecto o desafío. Cuanta más información nos proporciones, mejor podremos trabajar para encontrar la solución más adecuada para ti.
          </p>
        </div>
        <div className="w-full max-w-lg  bg-transparent sm:p-8 lg:w-1/2">
          <form onSubmit={sendEmail} className="flex flex-col gap-4">
            <Input
              className="w-full rounded-md border-0 bg-bg-light px-4 py-3 text-bg-dark placeholder:text-gray-400"
              type="text"
              placeholder="Nombre"
              name="name"
              required
            />
            <Input
              className="w-full rounded-md border-0 bg-bg-light px-4 py-3 text-bg-dark placeholder:text-gray-400"
              type="email"
              placeholder="Mail"
              name="email"
              required
            />
            <Input
              className="w-full rounded-md border-0 bg-bg-light px-4 py-3 text-bg-dark placeholder:text-gray-400"
              type="text"
              placeholder="Asunto"
              name="affair"
              required
            />
            <Textarea
              className="h-24 w-full resize-none rounded-md border-0 bg-bg-light px-4 py-3 text-bg-dark placeholder:text-gray-400"
              placeholder="Escribe tu idea o consulta aquí"
              name="message"
              required
            />
            <div className="mt-6 flex justify-center">
              {send
                ? (
                  <span className="text-cyan-bright">
                    ¡El formulario ha sido enviado correctamente! Pronto nuestro equipo te contactará :)
                  </span>
                )
                : (
                  <Button
                    type="submit"
                    className="hover:bg-cyan-light rounded-full bg-cyan-bright px-12 py-4 text-lg font-medium text-blue-dark"
                  >
                    Enviar
                  </Button>
                )}
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactForm
