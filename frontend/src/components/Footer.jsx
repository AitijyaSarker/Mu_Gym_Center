import { Link } from 'react-router-dom'
import { PhoneIcon } from '@heroicons/react/24/outline'

const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-white/70 backdrop-blur dark:border-slate-800 dark:bg-slate-950/80">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-10">
        <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-slate-200 bg-white p-2 text-primary shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
            aria-label="Facebook"
          >
            f
          </a>
          <div className="flex items-center gap-2">
            <PhoneIcon className="h-4 w-4" />
            <span>+1 (800) 555-0199</span>
          </div>
        </div>
        <div className="text-sm text-slate-600 dark:text-slate-300">
          © {new Date().getFullYear()} MUGymCenter. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer


