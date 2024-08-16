// app/components/Header.tsx
"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Header = () => {
  const pathname = usePathname()

  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">UltronXchange</Link>
        <ul className="flex space-x-4">
          <li>
            <Link href="/dashboard" className={pathname === '/dashboard' ? 'text-blue-400' : ''}>
              Dashboard
            </Link>
          </li>
          <li>
            <Link href="/trade" className={pathname === '/trade' ? 'text-blue-400' : ''}>
              Trade
            </Link>
          </li>
          <li>
            <Link href="/login" className={pathname === '/login' ? 'text-blue-400' : ''}>
              Login
            </Link>
          </li>
          <li>
            <Link href="/register" className={pathname === '/register' ? 'text-blue-400' : ''}>
              Register
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header