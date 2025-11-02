import React from 'react'
import "./globals.css"
import Container from '@/components/custom/container'
import { Metadata } from 'next'
import { Noto_Serif } from 'next/font/google'
import { cn } from '@/lib/utils'
import Providers from '@/components/custom/providers'

const noto = Noto_Serif({
  weight: 'variable',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  title: 'Payload Blank Template',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en" className={cn(noto.className)}>
      <Providers>
        <body>
          <main>
            <Container>
              {children}
            </Container>
          </main>
        </body>
      </Providers>
    </html>
  )
}
