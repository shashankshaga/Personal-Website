import { useEffect, useState, useRef } from 'react'

const roles = [
  'Full Stack Developer',
  'React Specialist',
  'TypeScript Enthusiast',
  'UI/UX Craftsman',
  'Problem Solver',
  'Open Source Contributor',
]

const codeSnippets = [
  'const dev = new Shashank()',
  'git commit -m "shipped it"',
  'npm run build --prod',
  'console.log("Hello, World!")',
]

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [charIndex, setCharIndex] = useState(0)
  const [snippetIndex, setSnippetIndex] = useState(0)
  const floatRef = useRef<HTMLDivElement>(null)

  // Typewriter
  useEffect(() => {
    const currentRole = roles[roleIndex]
    let timeout: ReturnType<typeof setTimeout>
    if (!isDeleting && charIndex < currentRole.length) {
      timeout = setTimeout(() => setCharIndex(i => i + 1), 75)
    } else if (!isDeleting && charIndex === currentRole.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2200)
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex(i => i - 1), 35)
    } else {
      setIsDeleting(false)
      setRoleIndex(i => (i + 1) % roles.length)
    }
    setDisplayText(currentRole.slice(0, charIndex))
    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, roleIndex])

  // Floating code snippet rotator
  useEffect(() => {
    const interval = setInterval(() => {
      setSnippetIndex(i => (i + 1) % codeSnippets.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  // Subtle parallax on hero content
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!floatRef.current) return
      const x = (e.clientX / window.innerWidth - 0.5) * 20
      const y = (e.clientY / window.innerHeight - 0.5) * 20
      floatRef.current.style.transform = `translate(${x}px, ${y}px)`
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
      {/* Gradient orbs */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-[100px] animate-pulse-slow" />
      <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-orange-600/5 rounded-full blur-[80px] animate-pulse-slow" style={{ animationDelay: '1.5s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/3 rounded-full blur-[120px]" />

      {/* Floating decorative code block */}
      <div className="absolute top-24 right-8 md:right-16 hidden lg:block">
        <div className="glass border border-white/10 rounded-xl px-4 py-3 font-mono-code text-xs text-orange-400/70 animate-float">
          <div className="flex items-center gap-1.5 mb-2">
            <div className="w-2 h-2 rounded-full bg-red-400/60" />
            <div className="w-2 h-2 rounded-full bg-yellow-400/60" />
            <div className="w-2 h-2 rounded-full bg-green-400/60" />
          </div>
          <div className="text-neutral-500 mb-1">// current status</div>
          <div className="transition-all duration-500">{codeSnippets[snippetIndex]}</div>
        </div>
      </div>

      {/* Floating badge bottom-left */}
      <div className="absolute bottom-24 left-8 md:left-16 hidden lg:block animate-float" style={{ animationDelay: '3s' }}>
        <div className="glass border border-orange-500/20 rounded-xl px-4 py-3 font-mono-code text-xs text-neutral-400">
          <div className="text-orange-500 font-semibold mb-1">Tech Stack</div>
          <div>React · TypeScript · Node</div>
          <div>PostgreSQL · Docker · AWS</div>
        </div>
      </div>

      <div ref={floatRef} className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center transition-transform duration-75">
        {/* Available badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-green-500/20 mb-8">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-sm text-neutral-400 font-mono-code">Available for opportunities</span>
        </div>

        {/* Name */}
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-black mb-4 leading-[1.05] tracking-tight">
          <span className="text-white">Hi, I'm</span>
          <br />
          <span className="text-gradient glow-text">Shashank</span>
          <span className="text-white"> Shaga</span>
        </h1>

        {/* Typewriter role */}
        <div className="h-10 flex items-center justify-center gap-2 mb-6 mt-2 font-mono-code text-sm sm:text-base md:text-lg">
          <span className="text-purple-400">const</span>
          <span className="text-blue-300">role</span>
          <span className="text-white">=</span>
          <span className="text-green-400 flex items-center h-full">
            '<span className="text-green-300">{displayText}</span>'
            <span className="inline-block w-2.5 h-5 bg-orange-500/80 animate-pulse ml-0.5" />
          </span>
          <span className="text-white">;</span>
        </div>

        {/* Description */}
        <p className="max-w-2xl text-neutral-400 text-base md:text-lg leading-relaxed mb-10">
          I craft exceptional digital experiences with clean code, modern technologies,
          and an eye for detail. Turning complex problems into elegant, scalable solutions.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <a
            href="#projects"
            className="group flex items-center gap-2 px-8 py-3.5 bg-orange-500 hover:bg-orange-400 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/30 hover:-translate-y-1"
          >
            View My Work
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="#contact"
            className="flex items-center gap-2 px-8 py-3.5 border border-white/10 hover:border-orange-500/40 text-neutral-300 hover:text-white font-semibold rounded-xl transition-all duration-300 hover:bg-orange-500/5 hover:-translate-y-1"
          >
            Let's Talk
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3.5 border border-white/10 hover:border-white/20 text-neutral-400 hover:text-white font-semibold rounded-xl transition-all duration-300 hover:bg-white/5 hover:-translate-y-1"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Resume
          </a>
        </div>

        {/* Social links */}
        <div className="flex items-center gap-3">
          <a href="https://github.com/shashankshaga" target="_blank" rel="noopener noreferrer"
            className="p-3 rounded-xl glass border border-white/10 hover:border-orange-500/30 hover:text-orange-400 text-neutral-400 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-orange-500/10"
            aria-label="GitHub"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
          <a href="https://linkedin.com/in/shashankshaga" target="_blank" rel="noopener noreferrer"
            className="p-3 rounded-xl glass border border-white/10 hover:border-orange-500/30 hover:text-orange-400 text-neutral-400 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-orange-500/10"
            aria-label="LinkedIn"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
          <a href="https://twitter.com/shashankshaga" target="_blank" rel="noopener noreferrer"
            className="p-3 rounded-xl glass border border-white/10 hover:border-orange-500/30 hover:text-orange-400 text-neutral-400 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-orange-500/10"
            aria-label="Twitter / X"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
          <a href="mailto:shashank@example.com"
            className="p-3 rounded-xl glass border border-white/10 hover:border-orange-500/30 hover:text-orange-400 text-neutral-400 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-orange-500/10"
            aria-label="Email"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-neutral-600 animate-bounce">
        <span className="text-xs font-mono-code tracking-[0.3em]">SCROLL</span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}
