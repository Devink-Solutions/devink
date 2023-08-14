"use client"
import emailjs from "@emailjs/browser"
import { useState } from "react"

export default function ContactForm() {
  const [send, setSend] = useState(false)

  function sendEmail(e) {
    e.preventDefault()

    emailjs
      .sendForm(
        "service_if4cb5g",
        "template_uqmz0gp",
        e.target,
        "r5e0ULGMbZDfNqhQ3",
      )
      .then(
        (result) => {
          setSend(true)
        },
        (error) => {
          console.log(error.text)
        },
      )
    e.target.reset()
  }

  return (
    <section className="h-[80vh] w-full bg-white ">
      <form onSubmit={sendEmail} className="h-[100%] w-[100%] ">
        <div className="mx-auto flex h-[100%]  w-[90%] flex-col items-center justify-center ">
          <h3 className="font-goldman text-center text-4xl font-semibold ">
            Contacto
          </h3>
          <p className="text-1xl m-1 text-center lg:text-2xl">
            Envianos un mail y nuestro equipo se contactara con usted para
            ayudarlo a resolver su problema lo antes posible.
          </p>
          <div className="flex h-auto w-[100%] flex-col justify-center ">
            <div className="flex w-[100%] ">
              <input
                className="mx-auto my-4 w-[90%] border-b-2 border-black px-3 py-1 text-[18px]  "
                type="text"
                placeholder="Nombre"
                name="name"
              />
            </div>
            <div className="flex w-[100%] ">
              <input
                className="mx-auto my-4 w-[90%] border-b-2 border-black px-3 py-1 text-[18px] "
                type="email"
                placeholder="Email"
                name="email"
              />
            </div>
            <div className="flex w-[100%] ">
              <input
                className="mx-auto my-4 w-[90%] border-b-2 border-black px-3 py-1 text-[18px] "
                type="text"
                placeholder="Asunto"
                name="affair"
              />
            </div>
            <div className="flex w-[100%] ">
              <textarea
                className="mx-auto my-4 w-[90%] border-b-2 border-black px-3 py-1 text-[18px] "
                placeholder="Mensaje"
                name="message"
              />
            </div>
            <div className="flex w-[100%] justify-center ">
              {send ? (
                <span className="text-[#05F100]">form sent successfully!</span>
              ) : (
                <input id="btn_enviar" type="submit" value="Enviar" />
              )}
            </div>
          </div>
        </div>
      </form>
    </section>
  )
}
