import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

const experiences = [
  {
    role: 'Machine Learning Engineer',
    company: 'Gator AI',
    period: '2026 – Present',
    description:
      'Led the frontend team building a SaaS analytics platform serving 10k+ users. Improved performance by 40% through code splitting and lazy loading. Mentored 3 junior developers.',
    tags: ['React', 'TypeScript', 'GraphQL', 'AWS', 'Cypress'],
    current: true,
  },
  {
    role: 'Software Programmer',
    company: 'Machine Intelligence Labaratory',
    period: '2025 – 2026',
    description:
      'Built and shipped 5 full-stack features in 3 months. Integrated Stripe payments, designed RESTful APIs, maintained PostgreSQL databases, and reduced API response times by 35%.',
    tags: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe', 'Redis'],
    current: false,
  },
  {
    role: 'Full-stack Developer',
    company: 'Sase WebDev Team',
    period: '2021 – 2022',
    description:
      'Developed responsive websites for 15+ clients across e-commerce, fintech, and healthcare sectors. Specialized in React, performance optimization, and accessibility.',
    tags: ['React', 'Sass', 'Webpack', 'WordPress', 'PHP'],
    current: false,
  },
  {
    role: 'Web Developer',
    company: 'Open Source Club',
    period: '2020 – 2021',
    description:
      'Worked with local businesses to build and launch web presence. First exposure to full-stack development and client communication.',
    tags: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    current: false,
  },
]

export default function Experience() {
  const { ref, isVisible } = useIntersectionObserver(0.1)

  return (
    <section id="experience" ref={ref} className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <div className={`mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-orange-500 font-mono-code text-sm mb-2 tracking-wider">// 04. experience</p>
          <h2 className="text-4xl md:text-5xl font-black">Where I've Worked</h2>
        </div>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-[19px] md:left-[27px] top-2 bottom-2 w-px bg-gradient-to-b from-orange-500 via-orange-500/30 to-transparent" />

          <div className="space-y-6">
            {experiences.map((exp, i) => (
              <div
                key={i}
                className={`relative pl-12 md:pl-20 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                  }`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                {/* Timeline dot */}
                <div className={`absolute left-0 md:left-2 top-5 w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-300 ${exp.current
                    ? 'bg-orange-500 border-orange-400 glow-orange'
                    : 'bg-neutral-900 border-white/10'
                  }`}>
                  {exp.current ? (
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  ) : (
                    <div className="w-2 h-2 rounded-full bg-neutral-500" />
                  )}
                </div>

                <div className={`p-5 md:p-6 rounded-2xl glass border transition-all duration-300 hover:border-orange-500/20 ${exp.current ? 'border-orange-500/20' : 'border-white/5'
                  }`}>
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div>
                      <h3 className="text-lg font-bold">{exp.role}</h3>
                      <p className="text-orange-400 font-semibold text-sm">{exp.company}</p>
                    </div>
                    <div className="flex flex-col items-end gap-1.5">
                      <span className="text-xs text-neutral-500 font-mono-code bg-white/5 px-2 py-1 rounded-md">{exp.period}</span>
                      {exp.current && (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-green-500/15 text-green-400 text-xs rounded-full border border-green-500/20">
                          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                          Current
                        </span>
                      )}
                    </div>
                  </div>

                  <p className="text-neutral-400 text-sm leading-relaxed mb-4">{exp.description}</p>

                  <div className="flex flex-wrap gap-1.5">
                    {exp.tags.map(tag => (
                      <span key={tag} className="px-2 py-0.5 text-xs font-mono-code bg-white/5 text-neutral-400 rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
