import Link from 'next/link'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Full Stack Demo Project',
  description: 'The aim of this project is to showcase my full stack development skills.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const links = [
    { href: '/', label: 'Home' },
    { href: '/todos', label: 'TODOs' },
  ]

  return (
    <html lang="en">
      <body className={`${inter.className} p-10 h-screen w-screen`}>
        <header className="mb-20">
          <nav>
            <ul className="flex items-center">
              {links.map(({ href, label }) => (
                <li key={href} className="px-4 text-xl">
                  <Link href={href}>{label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </header>
        {children}
      </body>
    </html>
  )
}