import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import ContactForm from "@/components/ContactForm"

export default function Contact() {
  return (
    <main className="flex flex-col items-center overflow-x-hidden scroll-smooth">
      <Navbar />
      <ContactForm />
      <Footer />
    </main>
  )
}
