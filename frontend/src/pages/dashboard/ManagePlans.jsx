import { useState } from 'react'
import { mockPlans } from '../../data/mockData'
import { PencilIcon, TrashIcon, PlusIcon } from '@heroicons/react/24/outline'

const ManagePlans = () => {
  const [plans] = useState(mockPlans)

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Manage Plans</h2>
          <p className="text-slate-600 dark:text-slate-300">View and manage membership plans</p>
        </div>
        <button className="btn-primary flex items-center gap-2">
          <PlusIcon className="h-5 w-5" />
          Add Plan
        </button>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {plans.map((plan) => (
          <div key={plan.id} className="card">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">{plan.name}</h3>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{plan.duration}</p>
                <p className="mt-2 text-2xl font-bold text-primary">{plan.price}</p>
              </div>
              <div className="flex items-center gap-2">
                <button className="rounded-lg border border-slate-200 px-3 py-1 text-sm text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800">
                  <PencilIcon className="h-4 w-4" />
                </button>
                <button className="rounded-lg border border-red-200 px-3 py-1 text-sm text-red-600 hover:bg-red-50 dark:border-red-800 dark:hover:bg-red-900/20">
                  <TrashIcon className="h-4 w-4" />
                </button>
              </div>
            </div>
            <ul className="mt-4 space-y-2">
              {plan.facilities.map((facility, idx) => (
                <li key={idx} className="text-sm text-slate-600 dark:text-slate-300">• {facility}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ManagePlans


