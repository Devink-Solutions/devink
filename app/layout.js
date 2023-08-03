import './globals.css'
import { Red_Hat_Display } from 'next/font/google'

const RedHatDisplay = Red_Hat_Display({ subsets: ['latin'] })

export const metadata = {
  title: 'Devink',
  description: 'Soluciones IT para tu empresa'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={RedHatDisplay.className}>{children}</body>
    </html>
  )
}
