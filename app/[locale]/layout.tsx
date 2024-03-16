/* eslint-disable max-len */
import { Red_Hat_Display as redHatDisplay } from 'next/font/google'
import { notFound } from 'next/navigation'
import Navbar from '@/components/Navbar'
import NextIntlProvider from './NextIntlProvider'
import './globals.css'
import Footer from '@/components/Footer'

const RedHatDisplay = redHatDisplay({ subsets: ['latin'] })

export const metadata = {
  title: 'Devink - Soluciones IT',
  description: 'En Devink, ofrecemos soluciones IT personalizadas, análisis de datos avanzados, y desarrollo de aplicaciones móviles para impulsar el crecimiento empresarial.Descubre cómo nuestra tecnología puede transformar tu negocio.',
  keywords: 'soluciones IT, analytics, desarrollo móvil, transformación digital, tecnología empresarial',
  author: 'Devink Solutions',
}
const locales = ['es', 'en', 'pt', 'ru']

export default async function RootLayout({ children, params: { locale } }) {
  if (!locales.includes(locale as any)) notFound()
  let messages
  try {
    messages = (await import(`../../messages/${locale}.json`))
      .default
  } catch (error) {
    notFound()
  }

  return (
    <html lang="en">
      <body className={`${RedHatDisplay.className}flex bg-blue-dark`}>
        <NextIntlProvider
          locale={locale}
          messages={messages}
          timeZone="America/Montevideo"
          now={new Date()}
        >
          <Navbar />
          {children}
          <Footer />
        </NextIntlProvider>
      </body>
    </html>
  )
}
