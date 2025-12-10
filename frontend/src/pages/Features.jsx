import { CheckIcon } from '@heroicons/react/24/solid'

const features = [
  { title: 'Smart Attendance', description: 'Automated check-in system with real-time tracking' },
  { title: 'Trainer Assignment', description: 'Get matched with certified trainers based on your goals' },
  { title: 'Secure Payments', description: 'Safe and encrypted payment processing' },
  { title: 'Membership Tracking', description: 'Monitor your membership status and expiry dates' },
  { title: 'Admin Dashboard', description: 'Comprehensive management tools for administrators' },
  { title: 'Member Dashboard', description: 'Personal dashboard to track your progress and payments' },
]

const Features = () => {
  return (
    <section className="section">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white">System Features</h1>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
            Everything you need to manage your gym membership
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, idx) => (
            <div key={idx} className="card">
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-primary/10 p-2">
                  <CheckIcon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">{feature.title}</h3>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features


