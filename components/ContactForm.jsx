/* eslint-disable no-console */
/* eslint-disable max-len */

'use client'

import emailjs from '@emailjs/browser'
import { useState } from 'react'
import Image from 'next/image'
import { trackAmplitudeEvent } from '../utils/AmplitudeTrackers'

const ContactForm = () => {
  const [send, setSend] = useState(false)

  function sendEmail(e) {
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
          trackAmplitudeEvent('email-sent')
        },
        (error) => {
          console.log(error.text)
        },
      )
    e.target.reset()
  }

  return (
    <section className="relative z-10 w-full overflow-hidden bg-white py-8">
      <div className="mx-auto flex h-[100%] w-[90%] max-w-[1000px] flex-col-reverse items-center justify-center gap-4 md:flex-row ">
        <div className="">
          <header className="mb-2 w-full py-2 md:w-[90%]">
            <h3 className="text-xl font-medium text-cyan md:pt-4 md:text-2xl">
              Quiero que se comuniquen conmigo
            </h3>
            <p className=" text-lg font-light ">
              Cuéntanos más sobre tu idea, proyecto o desafío. Cuanta más información nos brindes, más eficazmente podremos trabajar para encontrar la mejor solución para ti.
            </p>
          </header>
          <div className="flex h-auto w-[100%] flex-col justify-center ">
            <form
              onSubmit={sendEmail}
              className="flex h-[100%] w-full flex-col gap-4 md:w-[90%] "
            >
              <input
                className="rounded-md border-2 border-blue-dark px-3 py-1 text-[18px] outline-2 transition-all duration-300 focus:outline-cyan-bright "
                type="text"
                placeholder="Nombre"
                name="name"
              />
              <input
                className="rounded-md border-2 border-blue-dark px-3 py-1 text-[18px] outline-2 transition-all duration-300 focus:outline-cyan-bright "
                type="email"
                placeholder="Email"
                name="email"
              />
              <input
                className="rounded-md border-2 border-blue-dark px-3 py-1 text-[18px] outline-2 transition-all duration-300 focus:outline-cyan-bright "
                type="text"
                placeholder="Asunto"
                name="affair"
              />
              <textarea
                className="rounded-md border-2 border-blue-dark px-3 py-1 text-[18px] outline-2 transition-all duration-300 focus:outline-cyan-bright "
                placeholder="Mensaje"
                name="message"
              />
              <div className="flex w-[100%] justify-center ">
                {send
                  ? (
                    <span className="text-blue-dark">
                      El formulario ha sido enviado correctamente! Pronto nuestro equipo te contactara :)
                    </span>
                  )
                  : (
                    <button
                      type="submit"
                      className="mt-2 flex rounded-full border-2 border-cyan-bright bg-blue-dark px-10 py-3 text-center text-xl font-medium text-cyan-bright shadow-lg transition-colors  duration-300 xl:self-start "
                    >
                      Enviar Mail
                    </button>
                  )}
              </div>
            </form>
          </div>
        </div>
        <figure className="w-[90%] sm:w-1/2">
          <Image
            width={318}
            height={276}
            src="/Chatgpt.png"
            alt=""
            className="mx-auto object-contain object-center"
          />

        </figure>
      </div>

    </section>
  )
}

export default ContactForm
