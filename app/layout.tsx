import Link from 'next/link'
import './globals.css'
import { Inter } from 'next/font/google'

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
        <div className="flex min-h-screen flex-col justify-between">
          <header>
            <nav className="flex h-12 items-center px-4 justify-between shadow-md">
              <Link
                href="/"
                className="text-lg font-bold"
              >
                Amazona
              </Link>
              <div>
                <Link
                  href="/cart"
                  className="p-2"
                >
                  Cart
                </Link>
                <Link
                  href="/login"
                  className="p-2"
                >
                  Login
                </Link>
              </div>
            </nav>
          </header>
          <main className="container m-auto mt-4 px-4">{children}</main>
          <footer className="flex h-10 justify-center items-center shadow-inner">
            <p>Copyright 2023 Amazona</p>
          </footer>
        </div>
      </body>
    </html>
  )
}
