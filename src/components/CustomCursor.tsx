import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  
  const posRef = useRef({ x: 0, y: 0 })
  const ringPosRef = useRef({ x: 0, y: 0 })
  
  const hoverState = useRef({ isHoveringLink: false, isHoveringInput: false })
  const scaleRef = useRef({ dot: 1, ring: 1 })
  const rafRef = useRef<number>(0)

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY }
    }

    const animate = () => {
      // Ring follow lag
      ringPosRef.current.x += (posRef.current.x - ringPosRef.current.x) * 0.35
      ringPosRef.current.y += (posRef.current.y - ringPosRef.current.y) * 0.35

      // Determine target states
      const targetDotScale = hoverState.current.isHoveringInput || hoverState.current.isHoveringLink ? 0 : 1
      const targetRingScale = hoverState.current.isHoveringInput ? 0 : (hoverState.current.isHoveringLink ? 2.5 : 1)

      // Lerp scale
      scaleRef.current.dot += (targetDotScale - scaleRef.current.dot) * 0.2
      scaleRef.current.ring += (targetRingScale - scaleRef.current.ring) * 0.2

      // Apply transforms
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${posRef.current.x - 4}px, ${posRef.current.y - 4}px) scale(${scaleRef.current.dot})`
      }
      
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringPosRef.current.x - 16}px, ${ringPosRef.current.y - 16}px) scale(${scaleRef.current.ring})`
      }
      
      rafRef.current = requestAnimationFrame(animate)
    }

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.closest('a, button, [data-hover]')) {
        hoverState.current.isHoveringLink = true
        ringRef.current?.classList.add('!border-orange-400', '!bg-orange-500/10')
      } else if (target.closest('input, textarea, [contenteditable="true"]')) {
        hoverState.current.isHoveringInput = true
      }
    }

    const onMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.closest('a, button, [data-hover]')) {
        hoverState.current.isHoveringLink = false
        ringRef.current?.classList.remove('!border-orange-400', '!bg-orange-500/10')
      } else if (target.closest('input, textarea, [contenteditable="true"]')) {
        hoverState.current.isHoveringInput = false
      }
    }

    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseover', onMouseOver)
    window.addEventListener('mouseout', onMouseOut)
    rafRef.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseover', onMouseOver)
      window.removeEventListener('mouseout', onMouseOut)
      cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 bg-orange-500 rounded-full pointer-events-none z-[9999]"
        style={{ willChange: 'transform' }}
      />
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-8 h-8 border border-orange-500/40 rounded-full pointer-events-none z-[9998] transition-[border-color,background-color] duration-300"
        style={{ willChange: 'transform' }}
      />
    </>
  )
}
