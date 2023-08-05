import Footer from "@/components/Footer"
import Hero from "@/components/Hero"
import OurExperience from "@/components/OurExperience"
import OurServicesScreen from "@/components/OurServicesScreen"
import Steps from "@/components/Steps"

export default function Home() {
  return (
    <main className="flex flex-col items-center scroll-smooth">
      <Hero />
      <Steps />
      <OurServicesScreen />
      <OurExperience />
      <Footer />
    </main>
  )
}
