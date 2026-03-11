import { useState } from 'react';

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#courses', label: 'Courses' },
  { href: '#demo', label: 'Demo' },
  { href: '#contact', label: 'Book Demo' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleLinkClick = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur">
      <nav className="content-container flex items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-900 text-amber-400">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M8 20V8l4-4 4 4v12" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M6 20h12" strokeLinecap="round" />
            </svg>
          </span>
          <span className="font-heading text-base font-semibold tracking-wide text-gray-900 sm:text-lg">
            Madhavi Khandavilli
          </span>
        </a>

        <button
          type="button"
          className="inline-flex items-center rounded-md border border-gray-300 p-2 text-gray-800 md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        <ul className="hidden items-center gap-5 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="text-sm font-medium text-gray-700 transition hover:text-blue-900">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {open && (
        <div className="border-t border-gray-200 bg-white md:hidden">
          <ul className="space-y-1 px-4 py-3">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={handleLinkClick}
                  className="block rounded-md px-3 py-2 text-sm font-medium text-gray-700 transition hover:bg-blue-50 hover:text-blue-900"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
