'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Contact() {
  const sectionRef = useRef<HTMLSection>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!titleRef.current || !ctaRef.current) return

    gsap.from(titleRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top center',
        end: 'center center',
        scrub: 1,
        markers: false,
      },
      opacity: 0,
      y: 100,
      duration: 1,
    })

    gsap.from(ctaRef.current, {
      scrollTrigger: {
        trigger: ctaRef.current,
        start: 'top 80%',
        end: 'top 20%',
        scrub: 0.5,
        markers: false,
      },
      opacity: 0,
      scale: 0.8,
      duration: 0.8,
    })
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-gradient-to-b from-dark-secondary to-dark-bg flex items-center justify-center py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10 -z-10"
        style={{
          backgroundImage: 'url(/image/S__10199048_0.jpg)',
        }}
      />

      {/* Background effects */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-neon-orange/10 rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-0 left-1/4 w-56 sm:w-72 md:w-80 h-56 sm:h-72 md:h-80 bg-electric-blue/10 rounded-full blur-3xl opacity-20" />

      <div className="relative z-10 max-w-3xl mx-auto text-center w-full">
        <h2
          ref={titleRef}
          className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-black mb-8 sm:mb-12 leading-tight"
        >
          <div className="block text-white mb-3">仕事の話より、</div>
          <div className="neon-glow block mb-3">あなたの野望</div>
          <div className="block text-white">を聞かせてください</div>
        </h2>

        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-10 sm:mb-16 font-light leading-relaxed">
          いつでも連絡してください。
          <br className="hidden sm:block" />
          新しい出会いと協力の機会を、心待ちにしています。
        </p>

        <div ref={ctaRef} className="space-y-4 sm:space-y-6 flex flex-col items-center">
          {/* LINE Button */}
          <a
            href="https://line.me/R/ti/p/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block group relative w-full sm:w-auto"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-neon-orange via-electric-blue to-neon-orange rounded-lg sm:rounded-xl blur-xl opacity-60 group-hover:opacity-100 transition-all duration-500 group-hover:blur-2xl" />
            <button className="relative w-full sm:w-auto px-10 sm:px-14 py-5 sm:py-6 bg-dark-bg border-2 border-neon-orange rounded-lg sm:rounded-xl font-bold text-base sm:text-lg text-neon-orange hover:text-dark-bg hover:bg-neon-orange transition-all duration-300 uppercase tracking-widest hover:shadow-2xl hover:shadow-neon-orange/50">
              LINEで連絡する
            </button>
          </a>

          {/* Email */}
          <div className="pt-6 sm:pt-8">
            <p className="text-gray-500 text-xs sm:text-sm mb-2 sm:mb-4">または直接メール</p>
            <a
              href="mailto:ohno@t-migiude.com"
              className="text-electric-blue hover:text-neon-orange transition-colors duration-300 font-mono text-sm sm:text-base md:text-lg break-all"
            >
              ohno@t-migiude.com
            </a>
          </div>
        </div>

        {/* Final message */}
        <div className="mt-16 sm:mt-24 pt-8 sm:pt-16 border-t border-gray-700">
          <p className="text-gray-600 text-xs sm:text-sm uppercase tracking-widest">
            © 2026 大野修斗 Shuto Ohno
          </p>
          <p className="text-gray-700 text-xs mt-3 sm:mt-4">
            人生を面白くする側で生きる
          </p>
        </div>
      </div>
    </section>
  )
}
