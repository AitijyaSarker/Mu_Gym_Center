import { NavLink } from 'react-router-dom'
import {
  ChartPieIcon,
  UsersIcon,
  CreditCardIcon,
  ClipboardDocumentCheckIcon,
  UserCircleIcon,
  AcademicCapIcon,
} from '@heroicons/react/24/outline'
import Logo from '../Logo'

const links = [
  { to: '/dashboard/overview', label: 'Overview', icon: ChartPieIcon },
  { to: '/dashboard/members', label: 'Members', icon: UsersIcon },
  { to: '/dashboard/trainers', label: 'Trainers', icon: AcademicCapIcon },
  { to: '/dashboard/plans', label: 'Plans', icon: ClipboardDocumentCheckIcon },
  { to: '/dashboard/attendance', label: 'Attendance', icon: ClipboardDocumentCheckIcon },
  { to: '/dashboard/payments', label: 'Payments', icon: CreditCardIcon },
  { to: '/dashboard/profile', label: 'Profile', icon: UserCircleIcon },
]

const Sidebar = () => {
  return (
    <aside className="hidden w-64 flex-col border-r border-slate-200 bg-white/80 px-4 py-6 backdrop-blur dark:border-slate-800 dark:bg-slate-900/70 md:flex">
      <div className="mb-8 flex items-center gap-2 px-2">
        <Logo className="h-10 w-10" />
        <span className="hidden lg:inline text-xl font-bold text-primary">Dashboard</span>
      </div>
      <nav className="flex flex-1 flex-col gap-2">
        {links.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-semibold transition hover:bg-primary/10 ${
                isActive
                  ? 'bg-primary/10 text-primary'
                  : 'text-slate-700 dark:text-slate-200'
              }`
            }
          >
            <Icon className="h-5 w-5" />
            {label}
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}

export default Sidebar


