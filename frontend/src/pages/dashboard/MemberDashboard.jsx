import { useAuth } from '../../providers/AuthProvider'
import { UserCircleIcon, CalendarIcon, CreditCardIcon } from '@heroicons/react/24/outline'

const MemberDashboard = () => {
  const { user } = useAuth()

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">My Profile</h2>
        <p className="text-slate-600 dark:text-slate-300">View your membership details</p>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="card">
          <div className="flex items-center gap-4">
            <div className="rounded-full bg-primary/10 p-4">
              <UserCircleIcon className="h-8 w-8 text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">{user?.name || 'Member'}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">{user?.email}</p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="flex items-center gap-4">
            <CalendarIcon className="h-8 w-8 text-primary" />
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Membership Status</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">Active - Expires: 2025-12-09</p>
            </div>
          </div>
        </div>
        <div className="card">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Attendance History</h3>
          <p className="text-sm text-slate-600 dark:text-slate-300">No attendance records yet</p>
        </div>
        <div className="card">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Payment History</h3>
          <p className="text-sm text-slate-600 dark:text-slate-300">No payment records yet</p>
        </div>
      </div>
    </div>
  )
}

export default MemberDashboard


