import { Link } from 'react-router-dom'

const columns = [
  {
    title: 'Pages',
    links: [
      { to: '/', label: 'Home' },
      { to: '/about', label: 'About' },
      { to: '/products', label: 'Products' },
    ],
  },
  {
    title: 'Support',
    links: [
      { to: '/contact', label: 'Contact' },
      { to: '/settings', label: 'Settings' },
    ],
  },
]

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:grid-cols-2 md:grid-cols-4">
        <div className="sm:col-span-2">
          <Link to="/" className="flex items-center gap-2">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-slate-900 text-sm font-bold text-white">
              G
            </span>
            <span className="text-lg font-semibold text-slate-900">MyApp</span>
          </Link>
          <p className="mt-3 max-w-sm text-sm text-slate-600">
            React, React Router va Tailwind CSS asosida qurilgan oddiy shablon.
          </p>
        </div>

        {columns.map((col) => (
          <div key={col.title}>
            <h3 className="text-sm font-semibold text-slate-900">{col.title}</h3>
            <ul className="mt-3 space-y-2">
              {col.links.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-slate-600 transition-colors hover:text-slate-900"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-slate-200">
        <div className="mx-auto max-w-6xl px-4 py-6 text-center text-sm text-slate-500">
          &copy; {new Date().getFullYear()} MyApp. Barcha huquqlar himoyalangan.
        </div>
      </div>
    </footer>
  )
}

export default Footer
