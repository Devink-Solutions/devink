/* eslint-disable max-len */
import React from 'react'
import { Red_Hat_Display as redHatDisplay } from 'next/font/google'
import { notFound } from 'next/navigation'
import Navbar from '@/components/Navbar'
import NextIntlProvider from './NextIntlProvider'
import Footer from '@/components/Footer'
import './globals.css'
import AmplitudeProvider from '../providers/AmplitudeProvider'

const RedHatDisplay = redHatDisplay({ subsets: ['latin'] })

export const metadata = {
  title: 'Devink - Soluciones IT',
  description: 'En Devink, ofrecemos soluciones IT personalizadas, análisis de datos avanzados, y desarrollo de aplicaciones móviles para impulsar el crecimiento empresarial.Descubre cómo nuestra tecnología puede transformar tu negocio.',
  keywords: 'soluciones IT, analytics, desarrollo móvil, transformación digital, tecnología empresarial',
  authors: [{ name: 'Devink Solutions' }],
}
const locales = ['es', 'en', 'pt']

export default async function RootLayout({ children, params: { locale } }: { children: React.ReactNode, params: { locale: string } }) {
  if (!locales.includes(locale as any)) notFound()
  let messages
  try {
    messages = (await import(`../../messages/${locale}.json`))
      .default
  } catch (error) {
    notFound()
  }

  return (
    <html lang={locale}>
      <body className={`${RedHatDisplay.className} flex flex-col overflow-x-hidden bg-blue-dark`}>
        <AmplitudeProvider>
          <NextIntlProvider
            locale={locale}
            messages={messages}
            timeZone="America/Montevideo"
            now={new Date()}
          >
            <Navbar />
            <div className="flex-1 grow">
              {children}
            </div>
            <Footer />
          </NextIntlProvider>
        </AmplitudeProvider>
        <script defer data-domain="devink.tech" src="http://plausible.cap.devink.site/js/script.js"></script>
      </body>
    </html>
  )
}
