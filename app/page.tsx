// app/page.tsx
import Link from 'next/link'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">Welcome to UltronXchange</h1>
      <p className="mb-4">Start trading cryptocurrencies today!</p>
      <div className="space-x-4">
        <Link href="/login" className="bg-blue-500 text-white px-4 py-2 rounded">
          Login
        </Link>
        <Link href="/register" className="bg-green-500 text-white px-4 py-2 rounded">
          Register
        </Link>
      </div>
    </div>
  )
}