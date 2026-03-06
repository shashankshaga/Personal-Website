import { useEffect, useState } from 'react'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

type TerminalLine =
  | { kind: 'cmd'; text: string; delay: number }
  | { kind: 'out'; text: string; delay: number }

const terminalLines: TerminalLine[] = [
  { kind: 'cmd', text: 'whoami', delay: 0 },
  { kind: 'out', text: 'shashank_shaga', delay: 600 },
  { kind: 'cmd', text: 'cat about.txt', delay: 1200 },
  { kind: 'out', text: 'Full Stack Developer | India', delay: 1800 },
  { kind: 'out', text: 'Passionate about clean code & great UX', delay: 2200 },
  { kind: 'out', text: 'Building the web, one component at a time', delay: 2700 },
  { kind: 'cmd', text: 'echo $STATUS', delay: 3300 },
  { kind: 'out', text: '>>> Open to opportunities', delay: 3900 },
]

const stats = [
  { value: 3, suffix: '+', label: 'Years Experience' },
  { value: 50, suffix: '+', label: 'Projects Shipped' },
  { value: 20, suffix: '+', label: 'Technologies' },
  { value: 100, suffix: 'k+', label: 'Lines of Code' },
]

export default function About() {
  const { ref, isVisible } = useIntersectionObserver(0.15)
  const [visibleLines, setVisibleLines] = useState(0)
  const [counts, setCounts] = useState(stats.map(() => 0))

  useEffect(() => {
    if (!isVisible) return

    const timeouts: ReturnType<typeof setTimeout>[] = []
    const intervals: ReturnType<typeof setInterval>[] = []

    terminalLines.forEach((line, i) => {
      timeouts.push(setTimeout(() => setVisibleLines(v => Math.max(v, i + 1)), line.delay))
    })

    stats.forEach((stat, i) => {
      const steps = 60
      const inc = stat.value / steps
      let current = 0
      const iv = setInterval(() => {
        current = Math.min(current + inc, stat.value)
        setCounts(prev => {
          const next = [...prev]
          next[i] = Math.floor(current)
          return next
        })
        if (current >= stat.value) clearInterval(iv)
      }, 2000 / steps)
      intervals.push(iv)
    })

    return () => {
      timeouts.forEach(clearTimeout)
      intervals.forEach(clearInterval)
    }
  }, [isVisible])

  return (
    <section id="about" ref={ref} className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className={`mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-orange-500 font-mono-code text-sm mb-2 tracking-wider">// 01. about me</p>
          <h2 className="text-4xl md:text-5xl font-black">Who Am I?</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Terminal */}
          <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50">
              <div className="flex items-center gap-2 px-4 py-3 bg-neutral-900/80 border-b border-white/5">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="ml-3 text-neutral-500 text-xs font-mono-code">~/shashank — bash</span>
              </div>
              <div className="bg-[#0c0c0c] p-6 font-mono-code text-sm min-h-[280px]">
                {terminalLines.slice(0, visibleLines).map((line, i) => (
                  <div key={i} className="mb-1.5">
                    {line.kind === 'cmd' ? (
                      <div className="flex gap-2 flex-wrap">
                        <span className="text-orange-500">shashank</span>
                        <span className="text-neutral-600">@</span>
                        <span className="text-blue-400">portfolio</span>
                        <span className="text-neutral-500">~$</span>
                        <span className="text-green-400">{line.text}</span>
                      </div>
                    ) : (
                      <div className={`pl-2 ${line.text.startsWith('>>>') ? 'text-orange-400 font-medium' : 'text-neutral-300'}`}>
                        {line.text}
                      </div>
                    )}
                  </div>
                ))}
                <div className="flex gap-2 mt-1.5">
                  <span className="text-orange-500">shashank</span>
                  <span className="text-neutral-600">@</span>
                  <span className="text-blue-400">portfolio</span>
                  <span className="text-neutral-500">~$</span>
                  <span className="w-2 h-4 bg-orange-500 opacity-80 animate-pulse rounded-sm" />
                </div>
              </div>
            </div>
          </div>

          {/* Text + stats */}
          <div className={`transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <h3 className="text-2xl font-bold mb-4 leading-snug">
              Building products with{' '}
              <span className="text-gradient">passion & precision</span>
            </h3>
            <p className="text-neutral-400 leading-relaxed mb-4">
              I'm a full-stack developer who loves turning complex problems into elegant solutions.
              With a strong foundation in modern web technologies, I build fast, accessible, and
              beautiful applications that users love.
            </p>
            <p className="text-neutral-400 leading-relaxed mb-8">
              When I'm not writing code, I'm exploring new frameworks, contributing to open source,
              or diving deep into system design. I believe in code that not only works but is
              maintainable, scalable, and a joy to work with.
            </p>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-3">
              {stats.map((stat, i) => (
                <div key={i} className="p-4 rounded-xl glass border border-white/5 hover:border-orange-500/20 transition-colors duration-300">
                  <div className="text-2xl font-black text-orange-400 font-mono-code">
                    {counts[i]}{stat.suffix}
                  </div>
                  <div className="text-xs text-neutral-500 mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
