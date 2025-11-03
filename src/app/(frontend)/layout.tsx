import React from 'react'
import "./globals.css"
import Container from '@/components/custom/container'
import { Metadata } from 'next'
import { Noto_Serif } from 'next/font/google'
import { cn } from '@/lib/utils'
import Providers from '@/components/custom/providers'
import Navbar from '@/components/custom/navbar'

const noto = Noto_Serif({
  weight: 'variable',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  description: 'A personal portfolio website for Noah Pittman. Programmer, creative, enjoyer of things.',
  title: 'noahriley dot online',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en" className={cn(noto.className)}>
      <body>
        <main>
          <Container>
            <Providers>
              <Navbar />
              {children}
            </Providers>
          </Container>
        </main>
      </body>
    </html >
  )
}
