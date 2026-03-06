import { useState, useEffect } from 'react'

export default function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowBackToTop(window.scrollY > 400)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      {/* Back to top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-8 right-8 z-40 w-11 h-11 rounded-xl bg-orange-500 hover:bg-orange-400 text-white flex items-center justify-center shadow-xl shadow-orange-500/30 transition-all duration-300 hover:-translate-y-1 ${
          showBackToTop ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
        aria-label="Back to top"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 15l7-7 7 7" />
        </svg>
      </button>

      <footer className="relative z-10 border-t border-white/5 py-10 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo + tagline */}
            <div className="flex flex-col items-center md:items-start gap-1">
              <span className="font-mono-code font-bold text-xl text-orange-500 glow-text">
                SS<span className="text-white">.</span>
              </span>
              <span className="text-xs text-neutral-600 font-mono-code">
                Crafting digital experiences
              </span>
            </div>

            {/* Links */}
            <div className="flex items-center gap-6 text-sm text-neutral-500">
              {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'].map(item => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-orange-400 transition-colors duration-200"
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Social */}
            <div className="flex items-center gap-3">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer"
                className="p-2 rounded-lg text-neutral-600 hover:text-orange-400 transition-colors duration-200"
                aria-label="GitHub"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                className="p-2 rounded-lg text-neutral-600 hover:text-orange-400 transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                className="p-2 rounded-lg text-neutral-600 hover:text-orange-400 transition-colors duration-200"
                aria-label="Twitter"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-white/5 text-center">
            <p className="text-xs text-neutral-700 font-mono-code">
              Designed & built by{' '}
              <span className="text-orange-500/80">Shashank Shaga</span>
              {' '}· {new Date().getFullYear()} · Built with React, TypeScript & Tailwind CSS
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}
