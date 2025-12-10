import { useState } from 'react'

const Attendance = () => {
  const [attendance] = useState([
    { id: 1, member: 'John Doe', date: '2024-12-09', checkIn: '08:30 AM' },
    { id: 2, member: 'Jane Smith', date: '2024-12-09', checkIn: '09:15 AM' },
    { id: 3, member: 'Bob Wilson', date: '2024-12-09', checkIn: '07:45 AM' },
  ])

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Attendance Tracking</h2>
        <p className="text-slate-600 dark:text-slate-300">View member attendance records</p>
      </div>
      <div className="card overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-200 dark:border-slate-700">
              <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900 dark:text-white">Member</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900 dark:text-white">Date</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900 dark:text-white">Check In</th>
            </tr>
          </thead>
          <tbody>
            {attendance.map((record) => (
              <tr key={record.id} className="border-b border-slate-200 dark:border-slate-700">
                <td className="px-4 py-3 text-sm text-slate-900 dark:text-white">{record.member}</td>
                <td className="px-4 py-3 text-sm text-slate-600 dark:text-slate-300">{record.date}</td>
                <td className="px-4 py-3 text-sm text-slate-600 dark:text-slate-300">{record.checkIn}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Attendance


