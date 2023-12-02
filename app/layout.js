/* eslint-disable max-len */
import { Red_Hat_Display as redHatDisplay } from 'next/font/google'
import Navbar from '@/components/Navbar'
import './globals.css'
import Footer from '@/components/Footer'

const RedHatDisplay = redHatDisplay({ subsets: ['latin'] })

export const metadata = {
  title: 'Devink - Soluciones IT',
  description: 'En Devink, ofrecemos soluciones IT personalizadas, análisis de datos avanzados, y desarrollo de aplicaciones móviles para impulsar el crecimiento empresarial.Descubre cómo nuestra tecnología puede transformar tu negocio.',
  keywords: 'soluciones IT, analytics, desarrollo móvil, transformación digital, tecnología empresarial',
  author: 'Devink Solutions',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${RedHatDisplay.className}flex bg-blue-dark`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
