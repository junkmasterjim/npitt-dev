import React from 'react'
import "./globals.css"
import Container from '@/components/custom/container'
import { Metadata } from 'next'
import { Noto_Serif } from 'next/font/google'
import { cn } from '@/lib/utils'
import Providers from '@/components/custom/providers'
import Navbar from '@/components/custom/navbar'
import { fetchCMSData } from '@/lib/api'

const noto = Noto_Serif({
  weight: 'variable',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  description: 'A personal portfolio website for Noah Pittman. Programmer, creative, enjoyer of things.',
  title: 'noahriley dot online',
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  // Fetch server-side
  const cmsData = await fetchCMSData();

  return (
    <html id='htmlRoot' lang="en" className={cn(noto.className)} suppressHydrationWarning>
      <body>
        <main>
          <Container>
            <Providers initialData={cmsData}>
              <Navbar />
              {children}
            </Providers>
          </Container>
        </main>
      </body>
    </html>
  )
}
