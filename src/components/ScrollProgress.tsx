import { useEffect, useState } from 'react'

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="fixed top-0 left-0 w-full h-[2px] z-[9997] bg-white/5">
      <div
        className="h-full bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400 transition-none"
        style={{ width: `${progress}%`, boxShadow: '0 0 8px rgba(249,115,22,0.8)' }}
      />
    </div>
  )
}
