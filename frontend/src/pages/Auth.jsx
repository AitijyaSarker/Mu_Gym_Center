import { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from '../providers/AuthProvider'
import { EnvelopeIcon, LockClosedIcon, UserIcon } from '@heroicons/react/24/outline'

const Auth = () => {
  const { login, register, user, loading } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const [isLogin, setIsLogin] = useState(true)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  })
  const [error, setError] = useState(null)
  const [submitting, setSubmitting] = useState(false)

  const from = location.state?.from?.pathname || '/dashboard'

  useEffect(() => {
    if (!loading && user) {
      navigate(from, { replace: true })
    }
  }, [user, loading, navigate, from])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
    setError(null)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    setSubmitting(true)

    try {
      if (isLogin) {
        await login(formData.email, formData.password)
      } else {
        if (!formData.name.trim()) {
          throw new Error('Name is required')
        }
       await register(formData.name, formData.email, formData.password)

      }
      navigate('/dashboard', { replace: true })
    } catch (error) {
      console.error('Auth error:', error)
      setError(error.message || 'An error occurred. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section className="section min-h-screen flex items-center justify-center py-12">
      <div className="mx-auto max-w-md w-full">
        <div className="card space-y-6">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">
              {isLogin ? 'Welcome Back' : 'Create Account'}
            </p>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-2">
              {isLogin ? 'Sign in to MUGymCenter' : 'Join MUGymCenter'}
            </h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              {isLogin
                ? 'Enter your Gmail and password to access your dashboard'
                : 'Create an account to get started with MUGymCenter'}
            </p>
          </div>

          {error && (
            <div className="rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700 dark:border-red-800 dark:bg-red-900/20 dark:text-red-400">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                  Full Name
                </label>
                <div className="relative">
                  <UserIcon className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required={!isLogin}
                    className="w-full rounded-lg border border-slate-300 bg-white py-2 pl-10 pr-4 text-slate-900 placeholder-slate-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100"
                    placeholder="John Doe"
                  />
                </div>
              </div>
            )}

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                Gmail Address
              </label>
              <div className="relative">
                <EnvelopeIcon className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-slate-300 bg-white py-2 pl-10 pr-4 text-slate-900 placeholder-slate-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100"
                  placeholder="studybug06@gmail.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                Password
              </label>
              <div className="relative">
                <LockClosedIcon className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  minLength={6}
                  className="w-full rounded-lg border border-slate-300 bg-white py-2 pl-10 pr-4 text-slate-900 placeholder-slate-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100"
                  placeholder="Enter your password"
                />
              </div>
              {!isLogin && (
                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                  Password must be at least 6 characters
                </p>
              )}
            </div>

            <button
              type="submit"
              className="btn-primary w-full py-3"
              disabled={loading || submitting}
            >
              {submitting ? (
                <>
                  <div className="mr-2 h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent inline-block" />
                  {isLogin ? 'Signing in...' : 'Creating account...'}
                </>
              ) : (
                isLogin ? 'Sign In' : 'Create Account'
              )}
            </button>
          </form>

          <div className="pt-4 border-t border-slate-200 dark:border-slate-700">
            <button
              type="button"
              onClick={() => {
                setIsLogin(!isLogin)
                setError(null)
                setFormData({ name: '', email: '', password: '' })
              }}
              className="w-full text-center text-sm text-slate-600 hover:text-primary dark:text-slate-400 dark:hover:text-primary"
            >
              {isLogin ? (
                <>
                  Don&apos;t have an account?{' '}
                  <span className="font-semibold">Sign up</span>
                </>
              ) : (
                <>
                  Already have an account?{' '}
                  <span className="font-semibold">Sign in</span>
                </>
              )}
            </button>
          </div>

          <div className="pt-2">
            <p className="text-xs text-slate-500 dark:text-slate-400 text-center">
              <span className="font-semibold">Note:</span> Accounts with &quot;admin&quot; in email are treated as admins
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Auth


