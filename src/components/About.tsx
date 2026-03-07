import { useEffect, useState } from 'react'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

type TerminalLine =
  | { kind: 'cmd'; text: string; delay: number }
  | { kind: 'out'; text: string; delay: number }

const terminalLines: TerminalLine[] = [
  { kind: 'cmd', text: 'Who-Am-I', delay: 0 },
  { kind: 'out', text: 'shashank_shaga', delay: 600 },
  { kind: 'cmd', text: 'cat about.txt', delay: 1200 },
  { kind: 'out', text: 'Full Stack Developer', delay: 1800 },
  { kind: 'out', text: 'Passionate about clean code & training AI models', delay: 2200 },
  { kind: 'out', text: 'Building the web, one component at a time', delay: 2700 },
  { kind: 'cmd', text: 'echo $STATUS', delay: 3300 },
  { kind: 'out', text: '>>> Open to opportunities', delay: 3900 },
]

const stats = [
  { value: 3, suffix: '+', label: 'Years Experience' },
  { value: 8, suffix: '+', label: 'Projects Shipped' },
  { value: 12, suffix: '+', label: 'Technologies' },
  { value: 100, suffix: '%', label: 'Passion' },
]

// Replace src paths with your actual photos
const codeGallery = [
  { id: 'bhangra', label: 'bhangra_performance', src: '/iamge7.jpg', comment: '9+ years of dance' },
  { id: 'chess', label: 'self_portrait', src: '/iamge2.jpg', comment: '1800+ rated player' },
  { id: 'hackathon', label: 'university_of_florida', src: '/iamge3.jpg', comment: 'go Gators!' },
  { id: 'uf', label: 'SwampHacks_hackathon', src: '/iamge4.jpg', comment: 'shipped in 36 hours!' },
  { id: 'family', label: 'hacklytics_hackathon', src: '/iamge5.jpg', comment: 'GT Hackathon' },
  { id: 'coding', label: 'first_robotics', src: '/iamge6.jpg', comment: 'midnight 26588' },
  { id: 'travel', label: 'exploring_the_world', src: '/iamge11.jpg', comment: 'adventures' },
]

export default function About() {
  const { ref, isVisible } = useIntersectionObserver(0.15)
  const [visibleLines, setVisibleLines] = useState(0)
  const [counts, setCounts] = useState(stats.map(() => 0))
  const [hoveredLine, setHoveredLine] = useState<number | null>(null)

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
    <section id="about" ref={ref} className="pt-32 pb-0 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className={`mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-orange-500 font-mono-code text-sm mb-2 tracking-wider">// 01. about me</p>
          <h2 className="text-4xl md:text-5xl font-black">Who Am I?</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
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
              Building projects with{' '}
              <span className="text-gradient">passion & love!</span>
            </h3>
            <p className="text-neutral-400 leading-relaxed mb-4">
              I am a passionate computer science student at the University of Florida.
              Hackathons are a particular passion of mine—I enjoy competing, building quickly, and adapting on the fly.
              I am an extremely fast learner and a firm believer that nothing is impossible.
            </p>
            <p className="text-neutral-400 leading-relaxed mb-8">
              Outside of class, I am a dancer with 9+ years of experience in Bhangra and Bollywood fusion and enjoy learning new styles. I also play competitive chess with a rating of 1800+ and love spending time with my family watching movies together.
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

      {/* Code Gallery — full width, styled like the contact editor */}
      <div
        className={`-mx-6 overflow-hidden border-t border-white/5 bg-[#0a0a0f] transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        onMouseLeave={() => setHoveredLine(null)}
      >
        {/* Gallery editor header */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#0f111a] border-b border-white/5">
          <div className="flex items-center gap-4">
            <div className="flex gap-1.5 pl-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <div className="flex gap-1 bg-[#1a1d27] rounded-md p-1">
              <div className="px-3 py-1 bg-[#282c34] rounded text-xs text-orange-400 font-mono-code flex items-center gap-2">
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4 4h16v16H4V4z" />
                </svg>
                gallery.ts
              </div>
            </div>
          </div>
          <div className="text-xs text-neutral-600 font-mono-code hidden sm:flex items-center gap-4">
            <span>TypeScript</span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
              hover a line to preview
            </span>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row">
          {/* Left: Code panel */}
          <div className="flex-1 p-4 sm:p-6 font-mono-code text-sm border-b lg:border-b-0 lg:border-r border-white/5 bg-[#0d1117]/40 relative">
            {/* Line gutter */}
            <div className="absolute top-0 left-0 bottom-0 w-12 bg-[#0d1117] border-r border-white/5 z-0" />

            <div className="relative z-10 space-y-0.5">
              {/* Header lines */}
              <div className="flex items-center py-0.5 px-1">
                <span className="w-8 text-right mr-4 sm:mr-6 text-neutral-700 select-none flex-shrink-0">1</span>
                <span>
                  <span className="text-purple-400">import</span>{' '}
                  <span className="text-neutral-500">{'{ '}</span>
                  <span className="text-blue-300">Photo</span>
                  <span className="text-neutral-500">{' }'}</span>{' '}
                  <span className="text-purple-400">from</span>{' '}
                  <span className="text-green-400">'@shashank/life'</span>
                  <span className="text-neutral-600">;</span>
                </span>
              </div>

              <div className="flex items-center py-0.5 px-1">
                <span className="w-8 text-right mr-4 sm:mr-6 text-neutral-700 select-none flex-shrink-0">2</span>
              </div>

              <div className="flex items-center py-0.5 px-1">
                <span className="w-8 text-right mr-4 sm:mr-6 text-neutral-700 select-none flex-shrink-0">3</span>
                <span>
                  <span className="text-purple-400">const</span>{' '}
                  <span className="text-blue-400">gallery</span>
                  <span className="text-neutral-500">: </span>
                  <span className="text-blue-300">Photo</span>
                  <span className="text-neutral-500">[] = [</span>
                </span>
              </div>

              {/* Hoverable photo lines */}
              {codeGallery.map((item, i) => (
                <div
                  key={item.id}
                  onMouseEnter={() => setHoveredLine(i)}
                  className={`flex items-center py-1 px-1 cursor-default select-none transition-colors duration-150 rounded-sm ${hoveredLine === i ? 'bg-orange-500/10' : 'hover:bg-white/[0.025]'
                    }`}
                >
                  <span
                    className={`w-8 text-right mr-4 sm:mr-6 select-none flex-shrink-0 transition-colors duration-150 ${hoveredLine === i ? 'text-orange-500/60' : 'text-neutral-700'
                      }`}
                  >
                    {i + 4}
                  </span>

                  <span className="text-neutral-600 flex-shrink-0 mr-1">{'{ '}</span>

                  <span className={`flex-shrink-0 transition-colors duration-150 ${hoveredLine === i ? 'text-blue-300' : 'text-blue-300/60'}`}>
                    id
                  </span>
                  <span className="text-neutral-600 flex-shrink-0">:</span>

                  <span className={`mx-1.5 transition-colors duration-150 truncate ${hoveredLine === i ? 'text-orange-400' : 'text-orange-400/50'}`}>
                    &ldquo;{item.label}&rdquo;,
                  </span>

                  <span className={`flex-shrink-0 hidden sm:inline transition-colors duration-150 ${hoveredLine === i ? 'text-blue-300' : 'text-blue-300/60'}`}>
                    src
                  </span>
                  <span className="text-neutral-600 flex-shrink-0 hidden sm:inline">:</span>
                  <span className={`mx-1.5 hidden sm:inline transition-colors duration-150 ${hoveredLine === i ? 'text-green-400' : 'text-green-400/40'}`}>
                    &ldquo;{item.src}&rdquo;
                  </span>

                  <span className="text-neutral-600 flex-shrink-0 mr-2 hidden sm:inline">{'}'}</span>

                  <span className={`italic hidden md:inline transition-colors duration-150 whitespace-nowrap ${hoveredLine === i ? 'text-neutral-500' : 'text-neutral-700'}`}>
                    {'// '}{item.comment}
                  </span>
                </div>
              ))}

              {/* Closing lines */}
              <div className="flex items-center py-0.5 px-1">
                <span className="w-8 text-right mr-4 sm:mr-6 text-neutral-700 select-none flex-shrink-0">
                  {codeGallery.length + 4}
                </span>
                <span className="text-neutral-500">]</span>
              </div>

              <div className="flex items-center py-0.5 px-1">
                <span className="w-8 text-right mr-4 sm:mr-6 text-neutral-700 select-none flex-shrink-0">
                  {codeGallery.length + 5}
                </span>
              </div>

              <div className="flex items-center py-0.5 px-1">
                <span className="w-8 text-right mr-4 sm:mr-6 text-neutral-700 select-none flex-shrink-0">
                  {codeGallery.length + 6}
                </span>
                <span>
                  <span className="text-purple-400">export default</span>{' '}
                  <span className="text-blue-400">gallery</span>
                  <span className="text-neutral-600">;</span>
                </span>
              </div>
            </div>
          </div>

          {/* Right: Photo preview */}
          <div className="h-64 lg:h-auto lg:w-[44%] xl:w-[40%] relative bg-[#080808] overflow-hidden flex-shrink-0">
            {/* Default placeholder */}
            <div
              className="absolute inset-0 flex items-center justify-center flex-col gap-3 pointer-events-none"
              style={{ opacity: hoveredLine === null ? 1 : 0, transition: 'opacity 0.35s ease' }}
            >
              <svg className="w-10 h-10 text-neutral-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p className="text-neutral-700 font-mono-code text-xs">// hover a line to preview</p>
            </div>

            {/* Photo crossfade stack — all images mounted, opacity-switched */}
            {codeGallery.map((item, i) => (
              <img
                key={item.id}
                src={item.src}
                alt={item.label}
                draggable={false}
                className="absolute inset-0 w-full h-full object-cover select-none"
                style={{
                  opacity: hoveredLine === i ? 1 : 0,
                  transform: hoveredLine === i ? 'scale(1.04)' : 'scale(1)',
                  transition: 'opacity 0.4s ease, transform 0.5s ease',
                }}
              />
            ))}

            {/* Orange bottom gradient on active */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                opacity: hoveredLine !== null ? 1 : 0,
                transition: 'opacity 0.4s ease',
                background: 'linear-gradient(to top, rgba(249,115,22,0.35) 0%, transparent 55%)',
              }}
            />

            {/* Caption badge */}
            <div
              className="absolute bottom-4 left-4 pointer-events-none"
              style={{ opacity: hoveredLine !== null ? 1 : 0, transition: 'opacity 0.3s ease' }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-black/65 backdrop-blur-sm rounded-lg border border-white/10">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse flex-shrink-0" />
                <span className="text-xs font-mono-code text-orange-300/90">
                  {hoveredLine !== null ? codeGallery[hoveredLine].comment : ''}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
