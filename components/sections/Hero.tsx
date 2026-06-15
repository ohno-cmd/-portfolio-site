'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ParticleBackground from '@/components/3d/ParticleBackground'

export default function Hero() {
  const titleRef = useRef<HTMLDivElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    if (titleRef.current && subtitleRef.current) {
      const tl = gsap.timeline()

      tl.from(titleRef.current, {
        opacity: 0,
        y: 50,
        duration: 1.2,
        ease: 'power4.out',
      })
        .from(
          subtitleRef.current,
          {
            opacity: 0,
            y: 30,
            duration: 1,
            ease: 'power4.out',
          },
          '-=0.8'
        )
    }
  }, [])

  return (
    <section className="relative min-h-screen overflow-hidden bg-dark-bg flex items-center justify-center py-16 md:py-0">
      {/* Particle Background */}
      <ParticleBackground />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 md:px-8 max-w-full">
        <div
          ref={titleRef}
          className="mb-6 sm:mb-8"
        >
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black mb-2 sm:mb-4 leading-tight">
            <span className="text-white">人生を</span>
            <br />
            <span className="neon-glow">面白くする側</span>
            <br />
            <span className="text-white">で生きる</span>
          </h1>
        </div>

        <p
          ref={subtitleRef}
          className="text-sm sm:text-base md:text-lg lg:text-2xl max-w-3xl mx-auto leading-relaxed text-gray-300 font-light"
        >
          面白い未来は、面白い人から生まれる。常識を疑う人と共に生きたい。
          <br className="hidden md:block" />
          仕事の話よりあなたの野望を聞かせてください。
          <br className="hidden md:block" />
          正論より熱狂できるストーリーを。
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-electric-blue"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  )
}
