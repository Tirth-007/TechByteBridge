import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image';
import { Moon, Sun } from "lucide-react";


export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [theme, setTheme] = useState('light')
  const router = useRouter()
  const currentPath = router.pathname


  useEffect(() => {
    const stored = localStorage.getItem('theme')
    if (stored === 'dark') {
      document.documentElement.classList.add('dark')
      setTheme('dark')
    }
  }, [])


  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    document.documentElement.classList.toggle("dark", next === "dark");
    localStorage.setItem("theme", next);
  };

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/logo.png"
              alt="Tech Byte Bridge Logo"
              width={60}
              height={70}
              className="rounded-sm object-contain"
            />
            {/* <span className="text-xl font-bold text-blue-600">Tech Byte Bridge</span> */}
          </Link>

          <span className="text-xl font-bold text-indigo-600 dark:text-indigo-400">Tech Byte Bridge</span>
        </div>
        <div className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-link ${currentPath === link.href ? 'active' : ''}`}
            >
              {link.label}
            </Link>
          ))}

          <button
            type="button"
            onClick={toggleTheme}
            className="ml-2 text-lg hover:scale-110 transition-transform"
            aria-label="Toggle theme"
            title="Toggle theme"
          >
            {/* {theme === "light" ? "🌙" : "☀️"} */}
            {theme === "light" ? (
              <Moon className="w-5 h-5 text-gray-500" />   // Golden moon
            ) : (
              <Sun className="w-5 h-5 text-orange-400" />   // Warm sun
            )}
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen((v) => !v)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label="Toggle menu"
        >
          {menuOpen ? "✖" : "☰"}
        </button>
      </div>


      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={[
          "md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-out",
          menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        ].join(" ")}
      >
        <div className="px-4 pb-4 space-y-2">
          {navLinks.map((link) => {
            const active = currentPath === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={[
                  "block px-3 py-2 rounded-md transition-colors",
                  active
                    ? "bg-indigo-100 dark:bg-gray-800 text-indigo-700 dark:text-indigo-300 font-semibold"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                ].join(" ")}
              >
                {link.label}
              </Link>
            );
          })}

          <button
            type="button"
            onClick={toggleTheme}
            className="w-full px-3 py-2 rounded-md bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          >
            {/* {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"} */}
            {theme === "light" ? (
              <>
                <Moon className="w-5 h-5 text-gray-500" /> Dark Mode
              </>
            ) : (
              <>
                <Sun className="w-5 h-5 text-orange-400" /> Light Mode
              </>
            )}
          </button>
        </div>
      </div>
    </nav>
  )
}



