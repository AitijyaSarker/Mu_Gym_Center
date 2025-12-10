import StatCard from '../../components/StatCard'
import RevenueChart from '../../components/RevenueChart'
import { UsersIcon, BanknotesIcon, ClipboardDocumentCheckIcon } from '@heroicons/react/24/outline'
import { mockRevenue } from '../../data/mockData'

const AdminDashboard = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Admin Dashboard</h2>
        <p className="text-slate-600 dark:text-slate-300">Overview of gym management system</p>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <StatCard title="Total Members" value="150" icon={UsersIcon} trend="up" trendValue="+12%" />
        <StatCard title="Total Revenue" value="$45,000" icon={BanknotesIcon} trend="up" trendValue="+8%" />
        <StatCard title="Active Plans" value="120" icon={ClipboardDocumentCheckIcon} trend="up" trendValue="+5%" />
      </div>
      <RevenueChart data={mockRevenue} />
    </div>
  )
}

export default AdminDashboard

