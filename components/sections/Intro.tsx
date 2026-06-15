'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Intro() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const textRef = useRef<HTMLParagraphElement>(null)
  const dividerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top center',
        end: 'center center',
        scrub: 0.5,
        markers: false,
      },
    })

    tl.from(titleRef.current, {
      opacity: 0,
      y: 60,
      duration: 0.8,
    })
      .from(
        textRef.current,
        {
          opacity: 0,
          y: 40,
          duration: 0.8,
        },
        '-=0.5'
      )
      .from(
        dividerRef.current,
        {
          scaleX: 0,
          duration: 0.6,
        },
        '-=0.4'
      )
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-dark-secondary flex items-center justify-center py-16 sm:py-20 px-4 sm:px-6 md:px-8"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-12 -z-10"
        style={{
          backgroundImage: 'url(/image/S__10199047_0.jpg)',
        }}
      />

      {/* Background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-neon-orange/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-electric-blue/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-4xl mx-auto w-full">
        <div className="text-center">
          <h2 ref={titleRef} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-8 sm:mb-12 leading-tight">
            <span className="block text-white mb-2">このサイトを</span>
            <span className="neon-glow block">立ち上げた理由</span>
          </h2>

          <p
            ref={textRef}
            className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-gray-300 font-light mb-12"
          >
            この自己紹介ページを通じて、より多くの人に自分の人生や世界観を知ってもらうことで、
            <br className="hidden sm:block" />
            たくさんの出会いが生まれ、多くの貢献をできると思い立ち上げました。
          </p>

          <div
            ref={dividerRef}
            className="w-24 h-1 mx-auto bg-gradient-to-r from-neon-orange to-electric-blue rounded-full mb-8"
          />

          <p className="text-xs sm:text-sm text-gray-500 uppercase tracking-widest letter-spacing font-semibold">
            スクロール ↓ 物語を追体験
          </p>
        </div>
      </div>
    </section>
  )
}
