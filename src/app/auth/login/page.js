'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/hooks/useAuth'

export default function LoginPage() {
  const { login } = useAuth()
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    const res = login(email, password)
    if (res.success) {
      router.push('/dashboard')
    } else {
      setError(res.error)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto mt-24 space-y-4">
      <h1 className="text-2xl font-bold text-center">Login</h1>
      <input
        type="email" placeholder="Email" required
        value={email} onChange={e => setEmail(e.target.value)}
        className="w-full border rounded px-3 py-2"
      />
      <input
        type="password" placeholder="Password" required
        value={password} onChange={e => setPassword(e.target.value)}
        className="w-full border rounded px-3 py-2"
      />
      {error && <p className="text-red-600">{error}</p>}
      <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded">Login</button>
      <p className="text-center mt-2">
        Don't have an account? <a href="/auth/register" className="text-blue-600">Register</a>
        <br />
        <a href="/auth/forget" className="text-blue-600">Forgot Password?</a>
      </p>
    </form>
  )
}
