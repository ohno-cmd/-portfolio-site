'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const passions = [
  {
    category: '学びたいこと',
    items: [
      { title: '英語', desc: 'やっぱり英語話せるってかっこいい' },
      { title: '写真', desc: 'オシャレな写真とか撮ってインスタ載せたい' },
      { title: 'カルチャー', desc: 'どんなカルチャーでも構いません、文化に興味があります' },
      { title: '海外', desc: '世界の文化、特色に興味があります' },
    ],
  },
  {
    category: '好きなこと',
    items: [
      { title: '犬', desc: '犬の事業支援をきっかけに好きになりました' },
      { title: '格闘技', desc: '空手やってました、RIZIN見てます' },
      { title: '朝活', desc: '朝に太陽を浴びてジムで鍛える、朝を制する者は人生を制す' },
      { title: '食', desc: 'オシャレな空間が好きです' },
      { title: 'ドラマ・映画・アニメ', desc: 'VIVANTとか今際の国のアリスとか面白すぎるでしょ' },
    ],
  },
]

const PassionCard = ({
  item,
  index,
}: {
  item: (typeof passions[0]['items'])[0]
  index: number
}) => {
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!cardRef.current) return

    gsap.from(cardRef.current, {
      scrollTrigger: {
        trigger: cardRef.current,
        start: 'top 85%',
        end: 'top 50%',
        scrub: 0.3,
        markers: false,
      },
      opacity: 0,
      y: 30,
      duration: 0.7,
    })

    const card = cardRef.current
    card.addEventListener('mouseenter', () => {
      gsap.to(card, { y: -8, duration: 0.3, overwrite: 'auto' })
    })
    card.addEventListener('mouseleave', () => {
      gsap.to(card, { y: 0, duration: 0.3, overwrite: 'auto' })
    })
  }, [])

  return (
    <div
      ref={cardRef}
      className="group relative p-4 sm:p-6 rounded-lg border border-gray-700 backdrop-blur-md bg-gradient-to-br from-gray-900/50 to-gray-800/30 hover:border-neon-orange transition-all duration-500 cursor-pointer overflow-hidden"
    >
      {/* Background animation */}
      <div className="absolute inset-0 bg-gradient-to-r from-neon-orange via-transparent to-electric-blue opacity-0 group-hover:opacity-20 transition-opacity duration-500" />

      {/* Content */}
      <div className="relative z-10">
        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-neon-orange/20 to-electric-blue/20 flex items-center justify-center mb-3 group-hover:from-neon-orange/40 group-hover:to-electric-blue/40 transition-all duration-300">
          <span className="text-lg font-bold text-neon-orange">◆</span>
        </div>
        <h4 className="text-base sm:text-lg md:text-xl font-bold mb-1 sm:mb-2 text-white">
          {item.title}
        </h4>
        <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
      </div>

      {/* Glow */}
      <div className="absolute -inset-1 bg-gradient-to-r from-neon-orange to-electric-blue rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl" />
    </div>
  )
}

export default function Passions() {
  const sectionRef = useRef<HTMLElement>(null)

  return (
    <section
      ref={sectionRef}
      className="relative bg-dark-bg py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-8 overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-8 -z-10"
        style={{
          backgroundImage: 'url(/image/S__10199045_0.jpg)',
        }}
      />

      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-0 w-96 h-96 bg-neon-orange/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-electric-blue/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-center mb-12 sm:mb-16 md:mb-24 leading-tight">
          <span className="block text-white mb-2">大野修斗の</span>
          <span className="neon-glow block">パッション</span>
        </h2>

        <div className="space-y-12 sm:space-y-16 md:space-y-20">
          {passions.map((section, sectionIdx) => (
            <div key={sectionIdx}>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-center text-white">
                {section.category}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
                {section.items.map((item, idx) => (
                  <PassionCard key={idx} item={item} index={idx} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
