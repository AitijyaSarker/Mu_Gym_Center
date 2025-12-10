import { useState } from 'react'
import { mockTrainers } from '../../data/mockData'
import { PencilIcon, TrashIcon, PlusIcon } from '@heroicons/react/24/outline'

const ManageTrainers = () => {
  const [trainers] = useState(mockTrainers)

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Manage Trainers</h2>
          <p className="text-slate-600 dark:text-slate-300">View and manage all trainers</p>
        </div>
        <button className="btn-primary flex items-center gap-2">
          <PlusIcon className="h-5 w-5" />
          Add Trainer
        </button>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {trainers.map((trainer) => (
          <div key={trainer.id} className="card">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">{trainer.name}</h3>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{trainer.specialization}</p>
            <p className="mt-2 text-sm font-semibold text-primary">${trainer.salary}/month</p>
            <div className="mt-4 flex items-center gap-2">
              <button className="rounded-lg border border-slate-200 px-3 py-1 text-sm text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800">
                <PencilIcon className="h-4 w-4" />
              </button>
              <button className="rounded-lg border border-red-200 px-3 py-1 text-sm text-red-600 hover:bg-red-50 dark:border-red-800 dark:hover:bg-red-900/20">
                <TrashIcon className="h-4 w-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ManageTrainers


