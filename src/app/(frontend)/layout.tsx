import React from 'react'
import "./globals.css"
import Container from '@/components/custom/Container'

export const metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  title: 'Payload Blank Template',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <body>
        <main>
          <Container>
            {children}
          </Container>
        </main>
      </body>
    </html>
  )
}
