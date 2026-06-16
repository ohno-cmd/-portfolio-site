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

      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-bg/30 to-dark-bg" />

      {/* Content */}
      <div ref={contentRef} className="relative z-10 text-center px-4 sm:px-6 md:px-8 max-w-full">
        {/* Main Title */}
        <div className="mb-10 sm:mb-14 md:mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black leading-tight tracking-tight">
            <div className="neon-glow glow-animate">
              <CharcterAnimation text="大野修斗" delay={0} />
            </div>
          </h1>
        </div>

        {/* Subtitle */}
        <div className="max-w-3xl mx-auto">
          <p className="text-xl sm:text-2xl md:text-3xl leading-relaxed text-gray-300 font-light">
            自己紹介ページ
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
