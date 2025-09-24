'use client'
import { useState } from 'react'

export default function ForgetPage() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    // Demo only: show success for any email
    setMessage(`If account with ${email} exists, password reset link sent (demo).`)
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto mt-24 space-y-4">
      <h1 className="text-2xl font-bold text-center">Forgot Password</h1>
      <input
        type="email" placeholder="Email" required
        value={email} onChange={e => setEmail(e.target.value)}
        className="w-full border rounded px-3 py-2"
      />
      {message && <p className="text-green-600">{message}</p>}
      <button type="submit" className="w-full bg-orange-600 text-white py-2 rounded">Send Reset Link</button>
      <p className="text-center mt-2">
        <a href="/auth/login" className="text-blue-600">Back to Login</a>
      </p>
    </form>
  )
}
