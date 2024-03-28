import Head from 'next/head'
import React from 'react'

export const metadata = {
  title: 'Devink',
  description: 'Soluciones Digitales',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <link
          rel="canonical"
          href="https://devink.tech/"
          key="canonical"
        />
      </Head>
      <body>{children}</body>
    </html>
  )
}
