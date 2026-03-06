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

// Replace these src values with your actual photos
const photos = [
  { src: '/iamge11.jpg', alt: 'Photo 1', flex: 1.4 },
  { src: '/iamge2.jpg', alt: 'Photo 2', flex: 0.8 },
  { src: '/iamge3.jpg', alt: 'Photo 3', flex: 1.1 },
  { src: '/iamge4.jpg', alt: 'Photo 4', flex: 0.7 },
  { src: '/iamge5.jpg', alt: 'Photo 5', flex: 1.35 },
  { src: '/iamge6.jpg', alt: 'Photo 6', flex: 0.85 },
  { src: '/iamge6.jpg', alt: 'Photo 7', flex: 1.1 },
]

const totalFlex = photos.reduce((s, p) => s + p.flex, 0)

export default function About() {
  const { ref, isVisible } = useIntersectionObserver(0.15)
  const [visibleLines, setVisibleLines] = useState(0)
  const [counts, setCounts] = useState(stats.map(() => 0))
  const [hoveredImg, setHoveredImg] = useState<number | null>(null)

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

      {/* Photo Collage — full width, breaks out of px-6 */}
      {/* onMouseLeave on the container prevents flicker when moving between images */}
      <div
        className={`-mx-6 overflow-hidden transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        onMouseLeave={() => setHoveredImg(null)}
      >
        <div className="flex h-80">
          {photos.map((photo, i) => {
            const isHov = hoveredImg === i
            const anyHov = hoveredImg !== null
            // Width-based transitions are reliable across all browsers; flex animation is not
            const baseW = `${(photo.flex / totalFlex * 100).toFixed(2)}%`
            const width = anyHov ? (isHov ? '40%' : `${60 / (photos.length - 1)}%`) : baseW

            return (
              <div
                key={i}
                onMouseEnter={() => setHoveredImg(i)}
                className="relative overflow-hidden flex-shrink-0"
                style={{ width, transition: 'width 0.5s cubic-bezier(0.4,0,0.2,1)' }}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  draggable={false}
                  className="w-full h-full object-cover select-none"
                  style={{
                    transform: isHov ? 'scale(1.08)' : 'scale(1)',
                    filter: anyHov && !isHov ? 'brightness(0.22) blur(1px)' : 'brightness(1)',
                    transition: 'transform 0.5s ease, filter 0.4s ease',
                  }}
                />

                {/* Permanent bottom vignette for depth */}
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/55 to-transparent pointer-events-none" />

                {/* Hover: orange gradient + ring — single div, always mounted for smooth transition */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    opacity: isHov ? 1 : 0,
                    transition: 'opacity 0.4s ease',
                    background: 'linear-gradient(to top, rgba(249,115,22,0.28) 0%, transparent 55%)',
                    boxShadow: 'inset 0 0 0 2px rgba(249,115,22,0.7), inset 0 0 60px rgba(249,115,22,0.18)',
                  }}
                />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
