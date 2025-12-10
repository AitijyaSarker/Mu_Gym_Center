import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Plans from './pages/Plans'
import Features from './pages/Features'
import Support from './pages/Support'
import Auth from './pages/Auth'
import ProtectedRoute from './components/ProtectedRoute'
import DashboardLayout from './components/dashboard/DashboardLayout'
import AdminDashboard from './pages/dashboard/AdminDashboard'
import ManageMembers from './pages/dashboard/ManageMembers'
import ManageTrainers from './pages/dashboard/ManageTrainers'
import ManagePlans from './pages/dashboard/ManagePlans'
import Attendance from './pages/dashboard/Attendance'
import Payments from './pages/dashboard/Payments'
import MemberDashboard from './pages/dashboard/MemberDashboard'

function App() {
  const location = useLocation()
  const isDashboard = location.pathname.startsWith('/dashboard')

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100 text-slate-900 transition-colors dark:from-slate-950 dark:via-slate-950 dark:to-slate-900 dark:text-slate-100">
      {!isDashboard && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/features" element={<Features />} />
        <Route path="/support" element={<Support />} />
        <Route path="/auth" element={<Auth />} />

        <Route
          path="/dashboard/*"
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<AdminDashboard />} />
          <Route path="overview" element={<AdminDashboard />} />
          <Route path="members" element={<ManageMembers />} />
          <Route path="trainers" element={<ManageTrainers />} />
          <Route path="plans" element={<ManagePlans />} />
          <Route path="attendance" element={<Attendance />} />
          <Route path="payments" element={<Payments />} />
          <Route path="profile" element={<MemberDashboard />} />
        </Route>

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      {!isDashboard && <Footer />}
    </div>
  )
}

export default App
