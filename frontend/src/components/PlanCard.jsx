import { Link } from 'react-router-dom'
import { CheckIcon } from '@heroicons/react/24/solid'

const PlanCard = ({ plan, featured = false }) => {
  return (
    <div
      className={`card relative ${featured ? 'border-2 border-primary shadow-lg' : ''}`}
    >
      {featured && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-white">
          Popular
        </div>
      )}
      <div className="text-center">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white">{plan.name}</h3>
        <div className="mt-4">
          <span className="text-4xl font-bold text-primary">{plan.price}</span>
          <span className="text-slate-500 dark:text-slate-400">/{plan.duration}</span>
        </div>
        <ul className="mt-6 space-y-3 text-left">
          {plan.facilities.map((facility, idx) => (
            <li key={idx} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
              <CheckIcon className="h-5 w-5 text-primary" />
              {facility}
            </li>
          ))}
        </ul>
        <Link
          to="/auth"
          className={`mt-8 block w-full rounded-lg px-4 py-2 text-center font-semibold transition ${
            featured
              ? 'bg-primary text-white hover:bg-primary-dark'
              : 'border border-primary text-primary hover:bg-primary/10'
          }`}
        >
          Join Now
        </Link>
      </div>
    </div>
  )
}

export default PlanCard


