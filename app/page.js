import Hero from '@/components/Hero'
import OurExperience from '@/components/OurExperience'
import OurServicesScreen from '@/components/OurServicesScreen'
import Steps from '@/components/Steps'
import ContactForm from '@/components/ContactForm'
import { Blogs } from '@/components/Blogs'

export default function Home () {
  return (
    <main className="flex flex-col items-center overflow-x-hidden scroll-smooth">
      <Hero />
      <Steps />
      <Blogs />
      <OurExperience />
      <OurServicesScreen />
      <ContactForm />
    </main>
  )
}
