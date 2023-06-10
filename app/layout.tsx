import Link from 'next/link'
import './globals.css'
import { Inter } from 'next/font/google'
import { Store, StoreProvider } from '@/utils/Store'
import { useContext } from 'react'
import Header from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Next Tailwind Amazona',
  description: 'Ecommerce website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>
          <RootContent>{children}</RootContent>
        </StoreProvider>
      </body>
    </html>
  )
}

function RootContent({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col justify-between">
      <Header />
      <main className="container m-auto mt-4 px-4">{children}</main>
      <footer className="flex h-10 justify-center items-center shadow-inner">
        <p>Copyright 2023 Amazona</p>
      </footer>
    </div>
  )
}
