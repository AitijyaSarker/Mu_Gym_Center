import { Link, NavLink, useLocation } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'
import { useAuth } from '../providers/AuthProvider'
import Logo from './Logo'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/#about' },
  { label: 'Pricing', to: '/plans' },
  { label: 'Features', to: '/features' },
  { label: 'Support', to: '/support' },
]

const Navbar = () => {
  const { user } = useAuth()
  const location = useLocation()

  const linkClass = ({ isActive }) =>
    `text-sm font-semibold transition hover:text-primary ${
      isActive ? 'text-primary' : 'text-slate-700 dark:text-slate-100'
    }`

  const isHashLink = (to) => to.includes('#')

  const handleHashNav = (to) => {
    if (isHashLink(to)) {
      const elementId = to.split('#')[1]
      const el = document.getElementById(elementId)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const renderNavLink = (item) =>
    isHashLink(item.to) ? (
      <button
        key={item.label}
        onClick={() => handleHashNav(item.to)}
        className="text-sm font-semibold text-slate-700 transition hover:text-primary dark:text-slate-100"
      >
        {item.label}
      </button>
    ) : (
      <NavLink key={item.label} to={item.to} className={linkClass}>
        {item.label}
      </NavLink>
    )

  return (
    <header className="sticky top-0 z-30 w-full border-b border-slate-200 bg-white/80 backdrop-blur dark:border-slate-800 dark:bg-slate-950/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-10">
        <Link to="/" className="flex items-center gap-2">
         <Logo className="h-24 w-24 shrink-0" />

          <span className="hidden sm:inline text-xl font-bold text-primary">MUGymCenter</span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">{navItems.map(renderNavLink)}</nav>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link
            to={user ? '/dashboard' : '/auth'}
            className="btn-primary hidden sm:inline-flex"
          >
            Join The Gym
          </Link>
        </div>
      </div>
      <div className="block border-t border-slate-200 bg-slate-50 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-slate-500 dark:border-slate-800 dark:bg-slate-900/60 dark:text-slate-400 md:hidden">
        {location.pathname.replace('/', '') || 'home'}
      </div>
    </header>
  )
}

export default Navbar


