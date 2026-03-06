import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

const categories = [
  {
    title: 'Frontend',
    icon: '🎨',
    color: 'from-orange-500 to-red-500',
    skills: [
      { name: 'React', level: 92 },
      { name: 'TypeScript', level: 88 },
      { name: 'Next.js', level: 85 },
      { name: 'Tailwind CSS', level: 95 },
      { name: 'Three.js / WebGL', level: 68 },
    ],
  },
  {
    title: 'Backend',
    icon: '⚙️',
    color: 'from-blue-500 to-cyan-500',
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'Express / Fastify', level: 82 },
      { name: 'PostgreSQL', level: 80 },
      { name: 'MongoDB', level: 78 },
      { name: 'GraphQL', level: 74 },
    ],
  },
  {
    title: 'DevOps & Tools',
    icon: '🛠️',
    color: 'from-purple-500 to-pink-500',
    skills: [
      { name: 'Git & GitHub', level: 92 },
      { name: 'Docker', level: 75 },
      { name: 'AWS / Cloud', level: 68 },
      { name: 'CI/CD Pipelines', level: 72 },
      { name: 'Linux / Shell', level: 80 },
    ],
  },
]

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

export default function Skills() {
  const { ref, isVisible } = useIntersectionObserver(0.1)

  return (
    <section id="skills" ref={ref} className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className={`mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-orange-500 font-mono-code text-sm mb-2 tracking-wider">// 02. skills</p>
          <h2 className="text-4xl md:text-5xl font-black">What I Work With</h2>
        </div>

        {/* Skill cards with progress bars */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {categories.map((cat, ci) => (
            <div
              key={ci}
              className={`p-6 rounded-2xl glass border border-white/5 hover:border-orange-500/20 transition-all duration-700 hover:-translate-y-1 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${ci * 120}ms` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${cat.color} flex items-center justify-center text-lg`}>
                  {cat.icon}
                </div>
                <h3 className="text-lg font-bold">{cat.title}</h3>
              </div>
              <div className="space-y-4">
                {cat.skills.map((skill, si) => (
                  <div key={si}>
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-sm text-neutral-300">{skill.name}</span>
                      <span className="text-xs text-orange-400 font-mono-code font-medium">{skill.level}%</span>
                    </div>
                    <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-orange-600 to-orange-400 transition-all duration-1000 ease-out"
                        style={{
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${ci * 120 + si * 80 + 400}ms`,
                          boxShadow: '0 0 8px rgba(249,115,22,0.4)',
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tech badge cloud */}
        <div className={`transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-center text-neutral-600 text-xs font-mono-code tracking-widest mb-6">// FULL TECH STACK</p>
          <div className="flex flex-wrap justify-center gap-3">
            {techBadges.map((tech, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-4 py-2 rounded-lg glass border border-white/5 text-sm text-neutral-400 hover:text-orange-400 hover:border-orange-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-orange-500/10"
              >
                <span>{tech.icon}</span>
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
