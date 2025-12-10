import { Link } from 'react-router-dom'
import { ArrowRightIcon, ShieldCheckIcon, SparklesIcon } from '@heroicons/react/24/solid'

const Home = () => {
  return (
    <div>
      <section className="section flex flex-col gap-12 bg-gradient-to-br from-primary/10 via-transparent to-primary/5">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 text-center lg:flex-row lg:text-left">
          <div className="flex-1 space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary shadow-sm dark:bg-slate-900/70">
              <ShieldCheckIcon className="h-4 w-4" />
              Certified Trainers
            </span>
            <h1 className="text-4xl font-bold leading-tight text-slate-900 dark:text-white sm:text-5xl">
              Transform your body with MUGymCenter&apos;s modern training programs
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              State-of-the-art equipment, AI-powered attendance, secure payments, and
              personal coaching tailored to your goals.
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-start">
              <Link to="/auth" className="btn-primary flex items-center gap-2">
                Join The Gym <ArrowRightIcon className="h-5 w-5" />
              </Link>
              <Link
                to="/plans"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-primary hover:text-primary dark:border-slate-700 dark:text-slate-200"
              >
                View Plans
              </Link>
            </div>
            <div className="flex items-center gap-6 text-sm text-slate-500 dark:text-slate-300">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-primary" />
                24/7 Access
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-primary" />
                Smart Attendance
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-primary" />
                Gmail Login
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="relative grid grid-cols-2 gap-3">
              <div className="col-span-2 relative overflow-hidden rounded-2xl border border-slate-200 bg-white/80 shadow-xl dark:border-slate-800 dark:bg-slate-900/70">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-slate-900/40 z-10" />
                <img
                  src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1200&q=80"
                  alt="Male athlete training with gym equipment"
                  className="h-64 w-full object-cover"
                />
                <div className="absolute bottom-3 left-3 flex items-center gap-2 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-slate-700 shadow-lg backdrop-blur dark:bg-slate-900/80 dark:text-slate-100 z-20">
                  <SparklesIcon className="h-3 w-3 text-primary" />
                  Premium Equipment
                </div>
              </div>
              <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white/80 shadow-xl dark:border-slate-800 dark:bg-slate-900/70">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-slate-900/30 z-10" />
                <img
                  src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80"
                  alt="Male athlete training"
                  className="h-48 w-full object-cover"
                />
                <div className="absolute bottom-2 left-2 right-2 text-center">
                  <span className="inline-block rounded-full bg-white/90 px-2 py-1 text-xs font-semibold text-slate-700 shadow-md backdrop-blur dark:bg-slate-900/80 dark:text-slate-100">
                    Strength Training
                  </span>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white/80 shadow-xl dark:border-slate-800 dark:bg-slate-900/70">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-slate-900/30 z-10" />
                <img
                  src="https://images.unsplash.com/photo-1549060279-7e168fcee0c2?auto=format&fit=crop&w=800&q=80"
                  alt="Female athlete training"
                  className="h-48 w-full object-cover"
                />
                <div className="absolute bottom-2 left-2 right-2 text-center">
                  <span className="inline-block rounded-full bg-white/90 px-2 py-1 text-xs font-semibold text-slate-700 shadow-md backdrop-blur dark:bg-slate-900/80 dark:text-slate-100">
                    Cardio & Fitness
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="section bg-white/70 dark:bg-slate-950/40">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 md:grid-cols-2">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">About Us</p>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
              Premium coaching, elite trainers, and a community that pushes you
            </h2>
            <p className="text-slate-600 dark:text-slate-300">
              Our trainers craft science-backed routines while our digital platform keeps
              your membership, attendance, and payments in sync. Choose the perfect plan
              and hit your goals faster.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {['Strength', 'Cardio', 'Nutrition', 'Recovery'].map((item) => (
                <div key={item} className="card text-center">
                  <div className="text-lg font-bold text-primary">{item}</div>
                  <p className="text-sm text-slate-500 dark:text-slate-300">Specialized tracks</p>
                </div>
              ))}
            </div>
          </div>
          <div className="card space-y-4">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              Why members choose MUGymCenter
            </h3>
            <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
              <li>✔ Smart attendance with dashboards for admins and members</li>
              <li>✔ Trainer assignment and plan tracking for every member</li>
              <li>✔ Secure payment history and receipts</li>
              <li>✔ Dark/Light mode for comfortable viewing</li>
            </ul>
            <Link to="/features" className="btn-primary w-full text-center">
              Explore Features
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home


