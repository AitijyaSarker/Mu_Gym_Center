import { useState } from 'react'
import { mockMembers } from '../../data/mockData'
import { PencilIcon, TrashIcon, PlusIcon } from '@heroicons/react/24/outline'

const ManageMembers = () => {
  const [members] = useState(mockMembers)
  const [showModal, setShowModal] = useState(false)

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Manage Members</h2>
          <p className="text-slate-600 dark:text-slate-300">View and manage all gym members</p>
        </div>
        <button className="btn-primary flex items-center gap-2">
          <PlusIcon className="h-5 w-5" />
          Add Member
        </button>
      </div>
      <div className="card overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-200 dark:border-slate-700">
              <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900 dark:text-white">Name</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900 dark:text-white">Email</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900 dark:text-white">Phone</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900 dark:text-white">Plan</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900 dark:text-white">Trainer</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900 dark:text-white">Actions</th>
            </tr>
          </thead>
          <tbody>
            {members.map((member) => (
              <tr key={member.id} className="border-b border-slate-200 dark:border-slate-700">
                <td className="px-4 py-3 text-sm text-slate-900 dark:text-white">{member.name}</td>
                <td className="px-4 py-3 text-sm text-slate-600 dark:text-slate-300">{member.email}</td>
                <td className="px-4 py-3 text-sm text-slate-600 dark:text-slate-300">{member.phone}</td>
                <td className="px-4 py-3 text-sm text-slate-600 dark:text-slate-300">{member.plan}</td>
                <td className="px-4 py-3 text-sm text-slate-600 dark:text-slate-300">{member.trainer}</td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    <button className="rounded-lg p-1 text-primary hover:bg-primary/10">
                      <PencilIcon className="h-4 w-4" />
                    </button>
                    <button className="rounded-lg p-1 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20">
                      <TrashIcon className="h-4 w-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ManageMembers


