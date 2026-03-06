import { useState, useEffect, useRef } from 'react'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

const techBadges = [
  { name: 'React', icon: '⚛️' },
  { name: 'TypeScript', icon: '🔷' },
  { name: 'Next.js', icon: '▲' },
  { name: 'Node.js', icon: '🟢' },
  { name: 'Python', icon: '🐍' },
  { name: 'PostgreSQL', icon: '🐘' },
  { name: 'MongoDB', icon: '🍃' },
  { name: 'Redis', icon: '🔴' },
  { name: 'Docker', icon: '🐳' },
  { name: 'AWS', icon: '☁️' },
  { name: 'GraphQL', icon: '◈' },
  { name: 'Prisma', icon: '◆' },
  { name: 'Tailwind', icon: '🌊' },
  { name: 'Figma', icon: '🎨' },
  { name: 'Vite', icon: '⚡' },
  { name: 'Jest', icon: '🃏' },
]

// Stable float params per bubble (varying duration & delay)
const floatParams = techBadges.map((_, i) => ({
  duration: 2.4 + (i * 0.37) % 1.6,
  delay: (i * 0.45) % 2.8,
}))

type Pos = { x: number; y: number }

export default function Skills() {
  const { ref, isVisible } = useIntersectionObserver(0.1)
  const [positions, setPositions] = useState<Pos[]>(() => techBadges.map(() => ({ x: 0, y: 0 })))
  const [draggingIdx, setDraggingIdx] = useState<number | null>(null)
  const dragData = useRef<{
    idx: number
    startX: number
    startY: number
    origX: number
    origY: number
  } | null>(null)

  const handleMouseDown = (e: React.MouseEvent, idx: number) => {
    e.preventDefault()
    dragData.current = {
      idx,
      startX: e.clientX,
      startY: e.clientY,
      origX: positions[idx].x,
      origY: positions[idx].y,
    }
    setDraggingIdx(idx)
  }

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!dragData.current) return
      const { idx, startX, startY, origX, origY } = dragData.current
      setPositions(prev => {
        const next = [...prev]
        next[idx] = { x: origX + e.clientX - startX, y: origY + e.clientY - startY }
        return next
      })
    }
    const onUp = () => {
      dragData.current = null
      setDraggingIdx(null)
    }
    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseup', onUp)
    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseup', onUp)
    }
  }, [])

  return (
    <section id="skills" ref={ref} className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className={`mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-orange-500 font-mono-code text-sm mb-2 tracking-wider">// 02. skills</p>
          <h2 className="text-4xl md:text-5xl font-black">What I Work With</h2>
        </div>

        <p className={`text-center text-neutral-600 text-xs font-mono-code tracking-widest mb-12 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          // TECH STACK — grab & drag the bubbles
        </p>

        <div className={`flex flex-wrap justify-center gap-5 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          {techBadges.map((tech, i) => (
            <div
              key={i}
              style={{
                animation: draggingIdx === i
                  ? 'none'
                  : `bubble-float ${floatParams[i].duration}s ease-in-out infinite`,
                animationDelay: `${floatParams[i].delay}s`,
                display: 'inline-block',
              }}
            >
              <div
                onMouseDown={e => handleMouseDown(e, i)}
                style={{
                  transform: `translate(${positions[i].x}px, ${positions[i].y}px)`,
                  cursor: draggingIdx === i ? 'grabbing' : 'grab',
                  userSelect: 'none',
                  zIndex: draggingIdx === i ? 50 : 'auto',
                  position: 'relative',
                  transition: draggingIdx === i ? 'none' : 'box-shadow 0.2s ease, border-color 0.2s ease',
                }}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl glass border border-white/10 text-sm text-neutral-300 hover:text-orange-400 hover:border-orange-500/50 hover:shadow-lg hover:shadow-orange-500/20 select-none"
              >
                <span className="text-lg">{tech.icon}</span>
                <span className="font-medium">{tech.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
