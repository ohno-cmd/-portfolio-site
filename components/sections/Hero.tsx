'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ParticleBackground from '@/components/3d/ParticleBackground'

const CharcterAnimation = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const chars = containerRef.current.querySelectorAll('.char-animate')
    gsap.from(chars, {
      opacity: 0,
      y: 40,
      stagger: 0.08,
      duration: 0.6,
      ease: 'back.out',
      delay: delay,
    })
  }, [delay])

  return (
    <div ref={containerRef}>
      {text.split('').map((char, i) => (
        <span key={i} className={`char-animate inline-block ${char === ' ' ? 'w-3' : ''}`}>
          {char}
        </span>
      ))}
    </div>
  )
}

export default function Hero() {
  const contentRef = useRef<HTMLDivElement>(null)

  return (
    <section className="relative min-h-screen overflow-hidden bg-dark-bg flex items-center justify-center py-16 md:py-0">
      {/* Particle Background */}
      <ParticleBackground />

      {/* Background Image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-15"
        style={{
          backgroundImage: 'url(/image/S__10199043_0.jpg)',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-bg/50 to-dark-bg" />

      {/* Content */}
      <div ref={contentRef} className="relative z-10 text-center px-4 sm:px-6 md:px-8 max-w-full">
        {/* Main Catchphrase - Character by character */}
        <div className="mb-10 sm:mb-14 md:mb-16">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-black leading-tight tracking-tight">
            <div className="mb-4 sm:mb-6 text-white">
              <CharcterAnimation text="人生を" delay={0} />
            </div>
            <div className="mb-4 sm:mb-6 neon-glow glow-animate">
              <CharcterAnimation text="面白くする側" delay={0.4} />
            </div>
            <div className="text-white">
              <CharcterAnimation text="で生きる" delay={0.8} />
            </div>
          </h1>
        </div>

        {/* Subtitle - Full text with proper line breaks and animation */}
        <div className="max-w-3xl mx-auto">
          <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-gray-300 font-light space-y-3">
            <span className="block">面白い未来は、面白い人から生まれる。</span>
            <span className="block">常識を疑う人と共に生きたい。</span>
            <span className="block">仕事の話よりあなたの野望を聞かせてください。</span>
            <span className="block">正論より熱狂できるストーリーを。</span>
          </p>
        </div>
      </div>

      {/* Animated Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="animate-bounce">
          <svg
            className="w-7 h-7 text-electric-blue"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.5"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  )
}
