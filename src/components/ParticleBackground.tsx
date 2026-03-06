import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  opacity: number
  hue: number
}

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: -9999, y: -9999 })
  const particlesRef = useRef<Particle[]>([])
  const rafRef = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const initParticles = () => {
      const count = Math.min(Math.floor((canvas.width * canvas.height) / 10000), 120)
      particlesRef.current = Array.from({ length: count }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 1.8 + 0.4,
        opacity: Math.random() * 0.6 + 0.1,
        hue: Math.random() * 30 + 15, // 15-45 orange range
      }))
    }

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initParticles()
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      const particles = particlesRef.current
      const mouse = mouseRef.current
      const W = canvas.width
      const H = canvas.height

      particles.forEach(p => {
        const dx = p.x - mouse.x
        const dy = p.y - mouse.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        const repelRadius = 130

        if (dist < repelRadius && dist > 0) {
          const force = ((repelRadius - dist) / repelRadius) * 0.6
          p.vx += (dx / dist) * force
          p.vy += (dy / dist) * force
        }

        // Speed cap + friction
        const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy)
        if (speed > 2.5) {
          p.vx = (p.vx / speed) * 2.5
          p.vy = (p.vy / speed) * 2.5
        }
        p.vx *= 0.97
        p.vy *= 0.97

        p.x = (p.x + p.vx + W) % W
        p.y = (p.y + p.vy + H) % H

        // Draw particle
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `hsla(${p.hue}, 90%, 60%, ${p.opacity})`
        ctx.fill()
      })

      // Draw connections
      const maxDist = 110
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * 0.12
            ctx.beginPath()
            ctx.strokeStyle = `rgba(249, 115, 22, ${alpha})`
            ctx.lineWidth = 0.6
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }

      // Mouse glow
      if (mouse.x > 0 && mouse.x < W) {
        const grad = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 160)
        grad.addColorStop(0, 'rgba(249,115,22,0.07)')
        grad.addColorStop(1, 'rgba(249,115,22,0)')
        ctx.fillStyle = grad
        ctx.fillRect(0, 0, W, H)
      }

      rafRef.current = requestAnimationFrame(animate)
    }

    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }
    const onMouseLeave = () => {
      mouseRef.current = { x: -9999, y: -9999 }
    }

    resize()
    animate()
    window.addEventListener('resize', resize)
    window.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseleave', onMouseLeave)

    return () => {
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseleave', onMouseLeave)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
    />
  )
}
