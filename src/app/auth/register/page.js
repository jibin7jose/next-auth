'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/hooks/useAuth'

export default function RegisterPage() {
  const { register } = useAuth()
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    const res = register(email, password)
    if (res.success) {
      setSuccess('Registration successful! Redirecting...')
      setTimeout(() => router.push('/auth/login'), 2000)
    } else {
      setError(res.error)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto mt-24 space-y-4">
      <h1 className="text-2xl font-bold text-center">Register</h1>
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
      {success && <p className="text-green-600">{success}</p>}
      <button type="submit" className="w-full bg-green-600 text-white py-2 rounded">Register</button>
      <p className="text-center mt-2">
        Already have an account? <a href="/auth/login" className="text-blue-600">Login</a>
      </p>
    </form>
  )
}
