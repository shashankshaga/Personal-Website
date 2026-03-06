import { useState } from 'react'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

const projects = [
  {
    title: 'Quantara',
    description: 'I developed a tariff prediction model using sentiment analysis and federal sources, achieving 75% accuracy.',
    tags: ['Python', 'Scikit-learn', 'NLTK', 'Pandas', 'Matplotlib'],
    github: 'https://github.com',
    live: 'https://example.com',
    accentColor: 'orange',
    featured: true,
  },
  {
    title: 'Chaos Wall',
    description: 'I developed a prediction model using linear regression to forecast the motion of a double pendulum, accurately capturing its dynamic behavior',
    tags: ['Python', 'Scikit-learn', 'NLTK', 'Pandas', 'Matplotlib'],
    github: 'https://github.com',
    live: 'https://example.com',
    accentColor: 'blue',
    featured: true,
  },
  {
    title: 'Clario - Teachers Platform',
    description: 'A student-built platform that empowers teachers to plan courses, generate worksheets, and track student progress with clear analytics, all in one simple, time-saving hub for our teachers.',
    tags: ['Next.js', 'OpenAI', 'Vercel AI SDK', 'MongoDB'],
    github: 'https://github.com/ragult419-cell/Swamphacks',
    live: 'https://example.com',
    accentColor: 'green',
    featured: true,
  },
  {
    title: 'Echo Speech Assistant',
    description: 'I built a career assistant system that tracks conversations with recruiters and provides insights, built as a full-stack application.',
    tags: ['React Native', 'Expo', 'TypeScript', 'OpenAI Whisper API', 'MongoDB'],
    github: 'https://github.com',
    live: 'https://example.com',
    accentColor: 'yellow',
    featured: false,
  },
  {
    title: 'LinkHub',
    description: 'A Linktree alternative with detailed analytics, custom themes, QR code generation, and embeddable widgets.',
    tags: ['Next.js', 'Prisma', 'PostgreSQL', 'Vercel'],
    github: 'https://github.com',
    live: 'https://example.com',
    accentColor: 'pink',
    featured: false,
  },
  {
    title: 'Subjugator',
    description: 'Productivity CLI tools for developers — smart file organizer, git workflow helper, env manager, and project scaffolder.',
    tags: ['Node.js', 'Commander.js', 'TypeScript', 'npm'],
    github: 'https://github.com/uf-mil/subjugator.org',
    live: 'https://example.com',
    accentColor: 'purple',
    featured: false,
  },
]

const accentMap: Record<string, string> = {
  orange: 'group-hover:border-orange-500/40 hover:shadow-orange-500/10',
  blue: 'group-hover:border-blue-500/40 hover:shadow-blue-500/10',
  green: 'group-hover:border-green-500/40 hover:shadow-green-500/10',
  yellow: 'group-hover:border-yellow-500/40 hover:shadow-yellow-500/10',
  pink: 'group-hover:border-pink-500/40 hover:shadow-pink-500/10',
  purple: 'group-hover:border-purple-500/40 hover:shadow-purple-500/10',
}

const bgAccentMap: Record<string, string> = {
  orange: 'from-orange-500/10 to-transparent',
  blue: 'from-blue-500/10 to-transparent',
  green: 'from-green-500/10 to-transparent',
  yellow: 'from-yellow-500/10 to-transparent',
  pink: 'from-pink-500/10 to-transparent',
  purple: 'from-purple-500/10 to-transparent',
}

export default function Projects() {
  const { ref, isVisible } = useIntersectionObserver(0.05)
  const [filter, setFilter] = useState<'all' | 'featured'>('all')

  const visible = filter === 'featured' ? projects.filter(p => p.featured) : projects

  return (
    <section id="projects" ref={ref} className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className={`mb-10 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-orange-500 font-mono-code text-sm mb-2 tracking-wider">// 03. projects</p>
          <h2 className="text-4xl md:text-5xl font-black">Things I've Built</h2>
        </div>

        {/* Filter tabs */}
        <div className={`flex gap-2 mb-10 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          {(['all', 'featured'] as const).map(tab => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`px-5 py-2 rounded-lg text-sm font-medium capitalize transition-all duration-200 ${filter === tab
                ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/20'
                : 'glass border border-white/5 text-neutral-400 hover:text-white hover:border-white/10'
                }`}
            >
              {tab === 'all' ? 'All Projects' : 'AI Projects'}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {visible.map((project, i) => (
            <div
              key={project.title}
              className={`group relative p-6 rounded-2xl glass border border-white/5 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${accentMap[project.accentColor]} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Accent gradient on hover */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${bgAccentMap[project.accentColor]} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <span className="text-3xl">{project.icon}</span>
                  <div className="flex gap-1.5">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg text-neutral-500 hover:text-white transition-colors duration-200"
                      aria-label="GitHub"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg text-neutral-500 hover:text-orange-400 transition-colors duration-200"
                      aria-label="Live demo"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>

                <h3 className="text-lg font-bold mb-2 group-hover:text-orange-400 transition-colors duration-300">{project.title}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-2 py-0.5 text-xs font-mono-code bg-orange-500/10 text-orange-400/80 rounded-md border border-orange-500/10">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={`text-center mt-12 transition-all duration-700 delay-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <a
            href="https://github.com/shashankshaga"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-white/10 hover:border-orange-500/30 rounded-xl text-neutral-400 hover:text-orange-400 transition-all duration-300 hover:-translate-y-0.5"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
            View all projects on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
