import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

const contactInfo = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: 'Email',
    value: 'shashank@example.com',
    href: 'mailto:shashank@example.com',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
    label: 'GitHub',
    value: 'github.com/shashankshaga',
    href: 'https://github.com/shashankshaga',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    label: 'LinkedIn',
    value: 'linkedin.com/in/shashankshaga',
    href: 'https://linkedin.com/in/shashankshaga',
  },
]

// Replace this with your actual Calendly / Cal.com link
const SCHEDULE_URL = 'https://calendly.com/shashankshaga'

export default function Contact() {
  const { ref, isVisible } = useIntersectionObserver(0.1)

  return (
    <section id="contact" ref={ref} className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className={`mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-orange-500 font-mono-code text-sm mb-2 tracking-wider">// 05. contact</p>
          <h2 className="text-4xl md:text-5xl font-black">Let's Grab Coffee</h2>
        </div>

        {/* The Coding Workspace */}
        <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'} rounded-2xl overflow-hidden glass border border-white/10 shadow-2xl bg-[#0a0a0f] relative group`}>
          {/* Editor Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-[#0f111a] border-b border-white/5">
            <div className="flex items-center gap-4">
              <div className="flex gap-1.5 pl-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              </div>
              <div className="flex gap-1 bg-[#1a1d27] rounded-md p-1">
                <div className="px-3 py-1 bg-[#282c34] rounded text-xs text-orange-400 font-mono-code flex items-center gap-2">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
                  CoffeeChat.ts
                </div>
                <div className="px-3 py-1 rounded text-xs text-neutral-500 font-mono-code hover:text-neutral-300 transition-colors cursor-pointer flex items-center gap-2">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M4 4h16v16H4V4z" /></svg>
                  Info.md
                </div>
              </div>
            </div>
            <div className="text-xs text-neutral-600 font-mono-code hidden sm:flex items-center gap-4">
              <span>UTF-8</span>
              <span>TypeScript React</span>
              <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span> Prettier</span>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row">
            {/* Left Panel: Coffee Chat Code */}
            <div className="flex-1 p-4 sm:p-6 md:p-8 font-mono-code text-sm sm:text-base border-b lg:border-b-0 lg:border-r border-white/5 bg-[#0d1117]/50 relative">
              <div className="absolute top-0 left-0 bottom-0 w-12 bg-[#0d1117] border-r border-white/5 z-0"></div>

              <div className="relative z-10">
                {/* Line 1 */}
                <div className="flex text-neutral-500 mb-6">
                  <span className="w-8 flex-shrink-0 text-right mr-4 sm:mr-6 text-neutral-700 select-none">1</span>
                  <span className="break-words">
                    <span className="text-orange-500">import</span>{' '}
                    {'{ '}<span className="text-orange-300">Calendar</span>{' }'}{' '}
                    <span className="text-orange-500">from</span>{' '}
                    <span className="text-amber-400">'@shashank/meet'</span>;
                  </span>
                </div>

                {/* Line 2 blank */}
                <div className="flex mb-2">
                  <span className="w-8 flex-shrink-0 text-right mr-4 sm:mr-6 text-neutral-700 select-none">2</span>
                </div>

                {/* Line 3 */}
                <div className="flex text-neutral-500 mb-2">
                  <span className="w-8 flex-shrink-0 text-right mr-4 sm:mr-6 text-neutral-700 select-none">3</span>
                  <span>
                    <span className="text-orange-500">const</span>{' '}
                    <span className="text-amber-300">coffeeChat</span>{' '}
                    <span className="text-white">=</span>{' '}
                    <span className="text-white">{'{'}</span>
                  </span>
                </div>

                {/* Line 4 */}
                <div className="flex text-neutral-500 mb-2">
                  <span className="w-8 flex-shrink-0 text-right mr-4 sm:mr-6 text-neutral-700 select-none">4</span>
                  <span className="ml-4 sm:ml-8">
                    <span className="text-orange-300">duration</span>
                    <span className="text-white">:</span>{' '}
                    <span className="text-amber-400">"30 min"</span>,
                  </span>
                </div>

                {/* Line 5 */}
                <div className="flex text-neutral-500 mb-2">
                  <span className="w-8 flex-shrink-0 text-right mr-4 sm:mr-6 text-neutral-700 select-none">5</span>
                  <span className="ml-4 sm:ml-8">
                    <span className="text-orange-300">vibe</span>
                    <span className="text-white">:</span>{' '}
                    <span className="text-amber-400">"casual &amp; relaxed"</span>,
                  </span>
                </div>

                {/* Line 6 */}
                <div className="flex text-neutral-500 mb-2">
                  <span className="w-8 flex-shrink-0 text-right mr-4 sm:mr-6 text-neutral-700 select-none">6</span>
                  <span className="ml-4 sm:ml-8 break-words">
                    <span className="text-orange-300">topics</span>
                    <span className="text-white">:</span>{' '}
                    <span className="text-white">[</span>
                    <span className="text-orange-400">"tech"</span>,{' '}
                    <span className="text-orange-400">"startups"</span>,{' '}
                    <span className="text-orange-400">"ideas"</span>
                    <span className="text-white">]</span>,
                  </span>
                </div>

                {/* Line 7 */}
                <div className="flex text-neutral-500 mb-8">
                  <span className="w-8 flex-shrink-0 text-right mr-4 sm:mr-6 text-neutral-700 select-none">7</span>
                  <span className="text-white">{'}'}</span>
                </div>

                {/* Line 8 comment */}
                <div className="flex text-neutral-500 mb-2">
                  <span className="w-8 flex-shrink-0 text-right mr-4 sm:mr-6 text-neutral-700 select-none">8</span>
                  <span className="text-orange-600/50 italic">{'// Pick a time that works for you — no pressure'}</span>
                </div>

                {/* Line 9 — the action line + button */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-8">
                  <div className="flex items-center min-w-0">
                    <span className="w-8 flex-shrink-0 text-right mr-4 sm:mr-6 text-neutral-700 select-none">9</span>
                    <span className="break-words">
                      <span className="text-orange-400">await</span>{' '}
                      <span className="text-orange-300">Calendar</span>
                      <span className="text-white">.</span>
                      <span className="text-orange-200">schedule</span>
                      <span className="text-white">(</span>
                      <span className="text-amber-300">coffeeChat</span>
                      <span className="text-white">);</span>
                    </span>
                  </div>

                  <a
                    href="https://calendly.com/shashankshaga-reddy/new-meeting"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-12 sm:ml-4 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-sans text-sm font-bold bg-orange-500/10 text-orange-400 border border-orange-500/40 hover:bg-orange-500/20 hover:border-orange-500/70 hover:shadow-[0_0_24px_rgba(249,115,22,0.35)] transition-all duration-300 flex-shrink-0 group/btn relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/10 to-orange-500/0 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-1000" />
                    <span className="text-base">&#9749;</span>
                    Schedule Coffee Chat
                  </a>
                </div>

                {/* Terminal output — line 10 */}
                <div className="border-t border-white/5 pt-4 bg-[#0a0a0f]/50 p-4 rounded-b-xl -mx-4 sm:-mx-6 md:-mx-8 mt-4 px-8 sm:px-10 md:px-12 relative">
                  <div className="flex text-neutral-500">
                    <span className="w-8 flex-shrink-0 text-right mr-4 sm:mr-6 text-neutral-700 select-none">10</span>
                    <div className="flex-1 font-mono-code text-xs md:text-sm">
                      <div className="flex items-center gap-2 text-neutral-500 mb-2">
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M4 15h16a2 2 0 002-2V7a2 2 0 00-2-2H4a2 2 0 00-2 2v6a2 2 0 002 2z" />
                        </svg>
                        Terminal output
                      </div>
                      <div className="text-amber-400/70 animate-pulse">&gt; Ready to connect over coffee. Pick a time that works!</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Panel: Info / Socials */}
            <div className="lg:w-80 xl:w-96 bg-[#0f111a] p-6 lg:p-8 font-mono-code flex flex-col justify-between border-t lg:border-t-0 border-white/5 relative z-10 box-border">
              <div>
                <div className="flex items-center justify-between text-xs text-neutral-500 mb-6 uppercase tracking-widest border-b border-white/5 pb-3">
                  <span>Exports</span>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>

                <div className="space-y-6">
                  {contactInfo.map((item, i) => (
                    <div key={i} className="group">
                      <div className="text-xs text-neutral-600 mb-1.5 flex items-center gap-1.5">
                        <span className="text-orange-500">export const</span>{' '}
                        <span className="text-amber-300">{item.label.toLowerCase()}</span> =
                      </div>
                      <a
                        href={item.href}
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel="noopener noreferrer"
                        className="text-sm text-amber-400/80 hover:text-orange-300 flex items-center gap-2 transition-colors break-all bg-black/20 p-2.5 rounded-lg border border-white/5 hover:border-orange-500/30"
                      >
                        <span className="text-neutral-500">"</span>
                        <span className="truncate">{item.value}</span>
                        <span className="text-neutral-500">"</span>
                      </a>
                    </div>
                  ))}

                  {/* Status */}
                  <div className="pt-6 mt-2 border-t border-white/5">
                    <div className="text-xs text-neutral-600 mb-2">
                      <span className="text-orange-500">export const</span>{' '}
                      <span className="text-amber-300 mr-1">status</span> =
                    </div>
                    <div className="flex items-center gap-2 text-sm text-orange-200/90 bg-yellow-500/10 border border-yellow-500/20 p-2.5 rounded-lg w-max">
                      <span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse shadow-[0_0_10px_rgba(234,179,8,0.5)]"></span>
                      "Available"
                    </div>
                  </div>

                  {/* Coffee chat export */}
                  <div className="pt-4">
                    <div className="text-xs text-neutral-600 mb-1.5">
                      <span className="text-orange-500">export const</span>{' '}
                      <span className="text-amber-300">openTo</span> =
                    </div>
                    <div className="text-sm text-orange-400/80 bg-orange-500/5 border border-orange-500/15 p-2.5 rounded-lg">
                      <span className="text-neutral-500">"</span>
                      coffee chats &amp; collabs
                      <span className="text-neutral-500">"</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
