import Footer from "@/components/Footer"
import Hero from "@/components/Hero"
import Navbar from "@/components/Navbar"
import OurExperience from "@/components/OurExperience"
import OurServicesScreen from "@/components/OurServicesScreen"
import Steps from "@/components/Steps"

export default function Home() {
  return (
    <main className="flex flex-col items-center overflow-x-hidden scroll-smooth">
      <Navbar />
      <Hero />
      <Steps />
      <OurServicesScreen />
      <OurExperience />
      <Footer />
    </main>
  )
}
