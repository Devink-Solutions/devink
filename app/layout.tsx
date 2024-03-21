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
      <body>{children}</body>
    </html>
  )
}
