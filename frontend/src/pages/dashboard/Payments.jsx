import { useState } from 'react'

const Payments = () => {
  const [payments] = useState([
    { id: 1, member: 'John Doe', amount: '$99', date: '2024-12-01', method: 'Credit Card' },
    { id: 2, member: 'Jane Smith', date: '2024-12-01', amount: '$59', method: 'Debit Card' },
    { id: 3, member: 'Bob Wilson', amount: '$99', date: '2024-11-28', method: 'Cash' },
  ])

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Payment Records</h2>
        <p className="text-slate-600 dark:text-slate-300">View all payment transactions</p>
      </div>
      <div className="card overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-200 dark:border-slate-700">
              <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900 dark:text-white">Member</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900 dark:text-white">Amount</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900 dark:text-white">Date</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900 dark:text-white">Method</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment) => (
              <tr key={payment.id} className="border-b border-slate-200 dark:border-slate-700">
                <td className="px-4 py-3 text-sm text-slate-900 dark:text-white">{payment.member}</td>
                <td className="px-4 py-3 text-sm font-semibold text-primary">{payment.amount}</td>
                <td className="px-4 py-3 text-sm text-slate-600 dark:text-slate-300">{payment.date}</td>
                <td className="px-4 py-3 text-sm text-slate-600 dark:text-slate-300">{payment.method}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Payments


