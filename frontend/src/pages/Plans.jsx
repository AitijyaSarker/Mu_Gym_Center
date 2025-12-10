import PlanCard from '../components/PlanCard'

const plans = [
  {
    name: 'Gold Plan',
    price: '$99',
    duration: 'month',
    facilities: ['Gym Access', 'Group Classes', 'Locker', 'Progress Tracking'],
  },
  {
    name: 'Silver Plan',
    price: '$59',
    duration: 'month',
    facilities: ['Gym Access', 'Group Classes', 'Locker'],
  },
]

const Plans = () => {
  return (
    <section className="section">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white">Membership Plans</h1>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
            Choose the perfect plan for your fitness journey
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
          {plans.map((plan, idx) => (
            <PlanCard key={idx} plan={plan} featured={idx === 0} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Plans


