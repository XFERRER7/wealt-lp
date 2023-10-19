import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import localFont from '@next/font/local'

const inter = Inter({ subsets: ['latin'] })

const lilac = localFont({
  src: [
    {
      path: '../assets/fonts/Lilac-BF65042aad8fb15.otf'
    }
  ],
  variable: '--font-lilac'
})

const sfProDisplay = localFont({
  src: [
    {
      path: '../assets/fonts/SF-Pro-Display-Thin.otf',
      weight: '400'
    },
    {
      path: '../assets/fonts/SF-Pro-Display-Light.otf',
      weight: '500'
    },
    {
      path: '../assets/fonts/SF-Pro-Display-Bold.otf',
      weight: '700'
    }
  ],
  variable: '--font-sf-pro-display'
})

export const metadata: Metadata = {
  title: 'Wealt',
  description: 'App para gestão de finanças pessoais',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={`${lilac.variable} ${sfProDisplay.variable} font-sans tracking-wider h-full bg-black text-white`}>{children}</body>
    </html>
  )
}
