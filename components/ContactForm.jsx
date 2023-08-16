"use client"
import emailjs from "@emailjs/browser"
import { useState } from "react"
import Image from "next/image"

const ContactForm = () => {
  const [send, setSend] = useState(false)

  function sendEmail(e) {
    e.preventDefault()
    console.log(e.target)

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
    <section className="mx-auto w-full bg-white py-20 ">
      <div className="mx-auto flex h-[100%] w-[70%]  items-center justify-center gap-3 ">
        <div className="w-[60%]">
          <header className="mb-2 w-[90%] py-2">
            <h3 className="text-xl font-medium md:pt-4 md:text-2xl">
              Quiero que se comuniquen conmigo
            </h3>
            <p className=" text-lg font-light ">
              Si nos das más información sobre tu problema, idea o proyecto,
              podremos ayudarte de manera más efectiva.
            </p>
          </header>
          <div className="flex h-auto w-[100%] flex-col justify-center ">
            <form
              onSubmit={sendEmail}
              className="flex h-[100%] w-[90%] flex-col gap-4 "
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
                {send ? (
                  <span className="text-[#05F100]">
                    form sent successfully!
                  </span>
                ) : (
                  <button
                    type="submit"
                    className={`md:w-120 mt-2 w-full  rounded-xl bg-blue-dark px-8 py-2 text-center text-xl font-medium text-white shadow-lg transition-colors duration-300 hover:bg-cyan-bright hover:text-blue-dark xl:self-start ${
                      false ? "animate-shake animate-ease-in-out" : undefined
                    }`}
                  >
                    Enviar Mail
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
        <figure>
          <Image
            width={360}
            height={344}
            src="/Augmented-reality.png"
            alt="form-image"
            className="mx-auto object-contain object-center"
          />
        </figure>
      </div>
    </section>
  )
}

export default ContactForm
