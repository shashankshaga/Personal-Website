import { useState } from 'react'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

interface FormState {
  name: string
  email: string
  subject: string
  message: string
}

type Status = 'idle' | 'sending' | 'sent' | 'error'

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
    href: 'https://github.com',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    label: 'LinkedIn',
    value: 'linkedin.com/in/shashankshaga',
    href: 'https://linkedin.com',
  },
]

export default function Contact() {
  const { ref, isVisible } = useIntersectionObserver(0.1)
  const [form, setForm] = useState<FormState>({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState<Status>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    await new Promise(r => setTimeout(r, 1800))
    setStatus('sent')
    setForm({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setStatus('idle'), 4000)
  }



  return (
    <section id="contact" ref={ref} className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className={`mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-orange-500 font-mono-code text-sm mb-2 tracking-wider">// 05. contact</p>
          <h2 className="text-4xl md:text-5xl font-black">Get In Touch</h2>
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
                  Contact.ts
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
            {/* Left Panel: The Code Form */}
            <div className="flex-1 p-4 sm:p-6 md:p-8 font-mono-code text-sm sm:text-base border-b lg:border-b-0 lg:border-r border-white/5 bg-[#0d1117]/50 relative">
              <div className="absolute top-0 left-0 bottom-0 w-12 bg-[#0d1117] border-r border-white/5 z-0"></div>

              <form onSubmit={handleSubmit} className="relative z-10 w-full overflow-hidden">
                <div className="flex text-neutral-500 mb-6 group/line">
                  <span className="w-8 flex-shrink-0 text-right mr-4 sm:mr-6 text-neutral-700 select-none group-hover/line:text-neutral-500 transition-colors">1</span>
                  <span className="break-words w-full"><span className="text-purple-400">import</span> {'{'} <span className="text-blue-300">ContactSystem</span> {'}'} <span className="text-purple-400">from</span> <span className="text-green-400">'@shashank/api'</span>;</span>
                </div>

                <div className="flex text-neutral-500 mb-2 group/line">
                  <span className="w-8 flex-shrink-0 text-right mr-4 sm:mr-6 text-neutral-700 select-none group-hover/line:text-neutral-500 transition-colors">2</span>
                  <span className="break-words w-full"><span className="text-purple-400">const</span> <span className="text-blue-400">messagePayload</span> <span className="text-white">=</span> {'{'}</span>
                </div>

                {/* Name Input */}
                <div className="flex text-neutral-500 mb-2 group/line">
                  <span className="w-8 flex-shrink-0 text-right mr-4 sm:mr-6 text-neutral-700 select-none pt-1 group-hover/line:text-neutral-500 transition-colors">3</span>
                  <div className="flex-1 flex flex-wrap items-center ml-4 sm:ml-8 gap-1">
                    <span className="text-blue-300">name</span><span className="text-white">:</span> <span className="text-green-400 ml-1 sm:ml-2">"</span>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      className="bg-transparent border-b border-dashed border-white/20 focus:border-orange-500/60 focus:bg-white/5 focus:outline-none text-green-300 w-full max-w-[12rem] sm:max-w-xs transition-all px-1 placeholder-green-400/20"
                      placeholder="John Doe"
                      required
                    />
                    <span className="text-green-400">"</span><span className="text-white">,</span>
                  </div>
                </div>

                {/* Email Input */}
                <div className="flex text-neutral-500 mb-2 group/line">
                  <span className="w-8 flex-shrink-0 text-right mr-4 sm:mr-6 text-neutral-700 select-none pt-1 group-hover/line:text-neutral-500 transition-colors">4</span>
                  <div className="flex-1 flex flex-wrap items-center ml-4 sm:ml-8 gap-1">
                    <span className="text-blue-300">email</span><span className="text-white">:</span> <span className="text-green-400 ml-1 sm:ml-2">"</span>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      className="bg-transparent border-b border-dashed border-white/20 focus:border-orange-500/60 focus:bg-white/5 focus:outline-none text-green-300 w-full max-w-[14rem] sm:max-w-sm transition-all px-1 placeholder-green-400/20"
                      placeholder="hello@example.com"
                      required
                    />
                    <span className="text-green-400">"</span><span className="text-white">,</span>
                  </div>
                </div>

                {/* Subject Input */}
                <div className="flex text-neutral-500 mb-2 group/line">
                  <span className="w-8 flex-shrink-0 text-right mr-4 sm:mr-6 text-neutral-700 select-none pt-1 group-hover/line:text-neutral-500 transition-colors">5</span>
                  <div className="flex-1 flex flex-wrap items-center ml-4 sm:ml-8 gap-1">
                    <span className="text-blue-300">subject</span><span className="text-white">:</span> <span className="text-green-400 ml-1 sm:ml-2">"</span>
                    <input
                      type="text"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      className="bg-transparent border-b border-dashed border-white/20 focus:border-orange-500/60 focus:bg-white/5 focus:outline-none text-green-300 w-full max-w-[12rem] sm:max-w-md transition-all px-1 placeholder-green-400/20"
                      placeholder="Project Inquiry"
                      required
                    />
                    <span className="text-green-400">"</span><span className="text-white">,</span>
                  </div>
                </div>

                {/* Message Textarea */}
                <div className="flex text-neutral-500 group/line">
                  <span className="w-8 flex-shrink-0 text-right mr-4 sm:mr-6 text-neutral-700 select-none pt-1 group-hover/line:text-neutral-500 transition-colors">6</span>
                  <div className="flex-1 ml-4 sm:ml-8 pt-1 max-w-[calc(100%-3rem)]">
                    <span className="text-blue-300">body</span><span className="text-white">:</span> <span className="text-green-400 ml-1 sm:ml-2">`</span>
                    <div className="relative group/textarea mt-2 mb-2">
                      <div className="absolute -left-3 sm:-left-4 top-0 bottom-0 w-0.5 bg-white/10 group-focus-within/textarea:bg-orange-500/50 transition-colors"></div>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        className="w-full bg-black/20 focus:bg-[#0f111a] border border-white/5 focus:border-orange-500/30 rounded-lg focus:outline-none text-green-300 p-3 sm:p-4 min-h-[140px] resize-none transition-all placeholder-green-400/20 block font-mono-code leading-relaxed shadow-inner"
                        placeholder="Hi there! I'd like to chat about..."
                        required
                      />
                    </div>
                    <span className="text-green-400">`</span>
                  </div>
                </div>

                <div className="flex text-neutral-500 mb-8 group/line">
                  <span className="w-8 flex-shrink-0 text-right mr-4 sm:mr-6 text-neutral-700 select-none group-hover/line:text-neutral-500 transition-colors">7</span>
                  <span className="break-words w-full"><span className="text-white">{'};'}</span></span>
                </div>

                <div className="flex text-neutral-500 mb-2 group/line">
                  <span className="w-8 flex-shrink-0 text-right mr-4 sm:mr-6 text-neutral-700 select-none group-hover/line:text-neutral-500 transition-colors">8</span>
                  <span className="text-neutral-500 italic flex-1 break-words w-full min-w-0 pr-4">{'// Initialize secure connection & dispatch'}</span>
                </div>

                <div className="flex text-neutral-500 mb-8 group/line items-start sm:items-center justify-between flex-col sm:flex-row gap-4">
                  <div className="flex items-center min-w-0 pr-4 flex-wrap">
                    <span className="w-8 flex-shrink-0 text-right mr-4 sm:mr-6 text-neutral-700 select-none group-hover/line:text-neutral-500 transition-colors">9</span>
                    <span className="break-words whitespace-pre-wrap flex-1"><span className="text-orange-400">await</span> <span className="text-blue-300">ContactSystem</span>.<span className="text-yellow-200">send</span><span className="text-white">(</span><span className="text-blue-400 break-all">messagePayload</span><span className="text-white">);</span></span>
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'sending' || status === 'sent'}
                    className={`self-start sm:self-auto ml-12 sm:ml-4 px-6 py-2.5 rounded-lg font-sans text-sm font-bold tracking-wide transition-all duration-300 flex items-center justify-center gap-2 group/btn relative overflow-hidden flex-shrink-0 ${status === 'sent'
                        ? 'bg-green-500/20 text-green-400 cursor-default border border-green-500/30 shadow-[0_0_20px_rgba(34,197,94,0.2)]'
                        : status === 'sending'
                          ? 'bg-orange-500/20 text-orange-400 cursor-not-allowed border border-orange-500/30'
                          : 'bg-white/5 hover:bg-orange-500/10 text-white hover:text-orange-400 border border-white/10 hover:border-orange-500/50 shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:shadow-[0_0_20px_rgba(249,115,22,0.3)]'
                      }`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/10 to-orange-500/0 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-1000"></div>
                    {status === 'sending' ? (
                      <>
                        <svg className="w-4 h-4 animate-spin text-orange-500" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Executing...
                      </>
                    ) : status === 'sent' ? (
                      <>
                        <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                        Compiled & Sent
                      </>
                    ) : (
                      <>
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                        Run Script
                      </>
                    )}
                  </button>
                </div>

                {/* Simulated terminal logs at the bottom */}
                <div className="flex text-neutral-500 group/line mt-8 border-t border-white/5 pt-4 bg-[#0a0a0f]/50 p-4 rounded-b-xl -my-4 sm:-my-6 md:-my-8 mx-[-1rem] sm:mx-[-1.5rem] md:mx-[-2rem] mt-4 px-8 sm:px-10 md:px-12 relative">
                  <div className="absolute top-0 bottom-0 left-0 w-12 bg-transparent z-0"></div>
                  <span className="w-8 flex-shrink-0 text-right mr-4 sm:mr-6 text-neutral-700 select-none group-hover/line:text-neutral-500 transition-colors z-10">10</span>
                  <div className="flex-1 font-mono-code text-xs md:text-sm z-10">
                    <div className="flex items-center gap-2 text-neutral-500 mb-2">
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M4 15h16a2 2 0 002-2V7a2 2 0 00-2-2H4a2 2 0 00-2 2v6a2 2 0 002 2z" /></svg>
                      Terminal output
                    </div>
                    {status === 'idle' && <div className="text-neutral-500 animate-pulse">&gt; _</div>}
                    {status === 'sending' && (
                      <div className="text-yellow-400/80 leading-relaxed space-y-1">
                        <div><span className="text-blue-400">[info]</span> Compiling message parameters...</div>
                        <div className="opacity-75"><span className="text-blue-400">[info]</span> Establishing secure connection via wss://api.shashank.dev/send...</div>
                        <div className="text-orange-400 animate-pulse"><span className="text-purple-400">[verbose]</span> Sending payload...</div>
                      </div>
                    )}
                    {status === 'sent' && (
                      <div className="text-green-400 leading-relaxed space-y-1">
                        <div>&gt; Payload delivered successfully.</div>
                        <div className="opacity-75 text-green-500/70 border-l-2 border-green-500/30 pl-2 ml-1 mt-1">Status: 200 OK</div>
                        <div className="text-neutral-500 mt-2">&gt; Process exited with code 0.</div>
                      </div>
                    )}
                  </div>
                </div>

              </form>
            </div>

            {/* Right Panel: Info / Socials */}
            <div className="lg:w-80 xl:w-96 bg-[#0f111a] p-6 lg:p-8 font-mono-code flex flex-col justify-between border-t lg:border-t-0 border-white/5 relative z-10 box-border">
              <div>
                <div className="flex items-center justify-between text-xs text-neutral-500 mb-6 uppercase tracking-widest border-b border-white/5 pb-3">
                  <span>Exports</span>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
                </div>

                <div className="space-y-6">
                  {contactInfo.map((item, i) => (
                    <div key={i} className="group">
                      <div className="text-xs text-neutral-600 mb-1.5 flex items-center gap-1.5">
                        <span className="text-purple-400">export const</span> <span className="text-blue-400">{item.label.toLowerCase()}</span> =
                      </div>
                      <a
                        href={item.href}
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel="noopener noreferrer"
                        className="text-sm text-green-400/80 hover:text-green-300 flex items-center gap-2 transition-colors break-all bg-black/20 p-2.5 rounded-lg border border-white/5 hover:border-orange-500/30"
                      >
                        <span className="text-neutral-500">"</span>
                        <span className="truncate">{item.value}</span>
                        <span className="text-neutral-500">"</span>
                      </a>
                    </div>
                  ))}

                  <div className="pt-6 mt-6 border-t border-white/5">
                    <div className="text-xs text-neutral-600 mb-2">
                      <span className="text-purple-400">export const</span> <span className="text-blue-400 mr-1">status</span> =
                    </div>
                    <div className="flex items-center gap-2 text-sm text-yellow-200/90 bg-yellow-500/10 border border-yellow-500/20 p-2.5 rounded-lg w-max">
                      <span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse shadow-[0_0_10px_rgba(234,179,8,0.5)]"></span>
                      "Available"
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
