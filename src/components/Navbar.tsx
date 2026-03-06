import { useState, useEffect } from 'react'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60)
      const sections = navItems.map(i => i.href.slice(1))
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(id)
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`fixed z-50 transition-all duration-500 ${scrolled
        ? 'top-3 left-1/2 -translate-x-1/2 w-auto'
        : 'top-0 left-0 w-full px-6'
      }`}>
      <div className={`flex items-center justify-between gap-6 px-5 py-3 rounded-2xl transition-all duration-500 ${scrolled
          ? 'glass border border-white/10 shadow-2xl shadow-black/60'
          : 'bg-transparent border border-transparent'
        }`}>
        {/* Logo */}
        <a href="#home" className="font-mono-code font-bold text-xl text-orange-500 glow-text shrink-0">
          SS<span className="text-white">.</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map(item => (
            <a
              key={item.href}
              href={item.href}
              className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all duration-300 ${activeSection === item.href.slice(1)
                  ? 'bg-orange-500/20 text-orange-400'
                  : 'text-neutral-400 hover:text-white hover:bg-white/5'
                }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Hire Me CTA */}
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center gap-2 px-4 py-1.5 bg-orange-500 hover:bg-orange-400 text-white text-sm font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/30 shrink-0"
        >
          Resume
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>


        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-orange-500 transition-all duration-300 origin-center ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-orange-500 transition-all duration-300 ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-orange-500 transition-all duration-300 origin-center ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden mt-2 glass border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}>
        <div className="p-3 flex flex-col gap-1">
          {navItems.map(item => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${activeSection === item.href.slice(1)
                  ? 'bg-orange-500/20 text-orange-400'
                  : 'text-neutral-400 hover:text-white hover:bg-white/5'
                }`}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
