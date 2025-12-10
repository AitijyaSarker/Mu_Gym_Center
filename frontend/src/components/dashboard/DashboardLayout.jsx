import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import DashboardTopbar from './DashboardTopbar'

const DashboardLayout = () => {
  return (
    <div className="flex min-h-screen bg-slate-100 text-slate-900 transition-colors dark:bg-slate-950 dark:text-slate-100">
      <Sidebar />
      <div className="flex flex-1 flex-col">
        <DashboardTopbar />
        <main className="flex-1 bg-gradient-to-b from-white/60 to-slate-100 p-6 dark:from-slate-900/60 dark:to-slate-950">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default DashboardLayout


