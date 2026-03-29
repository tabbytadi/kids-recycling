import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const nunito = Nunito({ 
  subsets: ["latin", "cyrillic"],
  variable: '--font-nunito'
});

export const metadata: Metadata = {
  title: 'gEko - Превърни старата си бутилка в супер сила!',
  description: 'Креативни работилници за деца. Ти носиш пластмасови бутилки от вкъщи, ние носим артистичното вдъхновение.',
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="bg">
      <body className={`${nunito.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
