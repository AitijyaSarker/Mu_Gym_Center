import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import api from '../services/api'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  // Check authentication status on mount
  useEffect(() => {
    checkAuth()
  }, [])

  const checkAuth = async () => {
    try {
      const response = await api.get('/check-auth.php')
      if (response.data.authenticated && response.data.user) {
        setUser(response.data.user)
      } else {
        setUser(null)
      }
    } catch (error) {
      console.warn('Auth check error:', error)
      setUser(null)
    } finally {
      setLoading(false)
    }
  }

  const login = async (email, password) => {
    try {
      const response = await api.post('/login.php', { email, password })
      if (response.data.success && response.data.user) {
        setUser(response.data.user)
        return { success: true, user: response.data.user }
      }
      throw new Error(response.data.message || 'Login failed')
    } catch (error) {
      const message = error.response?.data?.message || error.message || 'Login failed'
      throw new Error(message)
    }
  }

  const register = async (name, email, password) => {
    try {
      const role = email.includes('admin') ? 'admin' : 'member'

      // Use a dedicated register.php for consistency
      const response = await api.post('/register.php', { name, email, password, role })

      if (response.data.success && response.data.user) {
        setUser(response.data.user)
        return { success: true, user: response.data.user }
      }
      throw new Error(response.data.message || 'Registration failed')
    } catch (error) {
      const message = error.response?.data?.message || error.message || 'Registration failed'
      throw new Error(message)
    }
  }

  const logout = async () => {
    try {
      await api.post('/logout.php')
      setUser(null)
    } catch (error) {
      console.error('Logout error:', error)
      setUser(null)
    }
  }

  const role = useMemo(() => {
    if (!user) return 'member'
    return user.role || (user.email?.includes('admin') ? 'admin' : 'member')
  }, [user])

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout, role }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider')
  }
  return context
}
