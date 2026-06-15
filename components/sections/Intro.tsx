'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Intro() {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (contentRef.current) {
      gsap.from(contentRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top center',
          end: 'bottom center',
          scrub: 1,
          markers: false,
        },
        opacity: 0,
        y: 50,
        duration: 1,
      })
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-dark-secondary flex items-center justify-center py-16 sm:py-20 px-4 sm:px-6 md:px-8"
    >
      <div className="max-w-4xl mx-auto w-full">
        <div ref={contentRef} className="text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-8 sm:mb-12">
            <span className="text-white">なぜこのサイトを</span>
            <br />
            <span className="neon-glow">作ったのか</span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-gray-300 font-light">
            この自己紹介ページを通じて、より多くの人に自分の人生や世界観を知ってもらうことで、たくさんの出会いが生まれ、多くの貢献をできると思い立ち上げました。
          </p>

          <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-gray-700">
            <p className="text-xs sm:text-sm text-gray-500 uppercase tracking-widest">
              ↓ スクロールして物語を追体験してください
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
