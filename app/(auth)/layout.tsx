import { ClerkProvider } from '@clerk/nextjs'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'

const inter = Inter({subsets :["latin"]})
export const metadata: Metadata = {
  title: 'Thread',
  description: 'Created by Jutech Dev',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
        <html lang="en">
      <body className={`${inter.className} bg-dark-1 flex h-full justify-center items-center`}>{children}</body>
    </html>
    </ClerkProvider>
  )
}
