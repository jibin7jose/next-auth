'use client'
import { createContext, useState, useEffect, useContext } from 'react'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const savedUser = localStorage.getItem('user')
    if (savedUser) setUser(JSON.parse(savedUser))
  }, [])

  const login = (email, password) => {
    const users = JSON.parse(localStorage.getItem('users') || '[]')
    const found = users.find(u => u.email === email && u.password === password)
    if (found) {
      setUser(found)
      localStorage.setItem('user', JSON.stringify(found))
      return { success: true }
    }
    return { success: false, error: 'Invalid credentials' }
  }

  const register = (email, password) => {
    let users = JSON.parse(localStorage.getItem('users') || '[]')
    if (users.find(u => u.email === email)) {
      return { success: false, error: 'User already exists' }
    }
    const newUser = { email, password }
    users.push(newUser)
    localStorage.setItem('users', JSON.stringify(users))
    setUser(newUser)
    localStorage.setItem('user', JSON.stringify(newUser))
    return { success: true }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('user')
  }

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
