'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const achievements = [
  {
    id: 1,
    title: 'EC改善実績',
    description: '月平均売上150万円UP',
    icon: '01',
    size: 'large',
  },
  {
    id: 2,
    title: 'webマーケ実績',
    description: 'LP制作→メタ広告で店舗予約数6倍へ成長',
    icon: '02',
    size: 'large',
  },
  {
    id: 3,
    title: 'web制作実績',
    description:
      '株式会社ミギウデHP、その他LP制作複数、アプリ開発（AIエンジニア領域の駆使）',
    icon: '03',
    size: 'large',
  },
  {
    id: 4,
    title: '財務管理実績',
    description: '飲食店固定費30万円カット、PL管理、全社の資金繰り管理',
    icon: '04',
    size: 'medium',
  },
  {
    id: 5,
    title: '資金調達実績',
    description: 'クラファン支援280万円調達成功（CAMPFIRE日別総合部門1位）',
    icon: '05',
    size: 'medium',
  },
  {
    id: 6,
    title: 'SNS運用実績',
    description: 'カフェの平均月売上15万円UP',
    icon: '06',
    size: 'medium',
  },
  {
    id: 7,
    title: 'Claude Code研修',
    description: '社内・社外向けAI活用/自動化システム構築研修の実施',
    icon: '07',
    size: 'medium',
  },
  {
    id: 8,
    title: '経営コンサル',
    description: '中小企業コンサル経験10社以上',
    icon: '08',
    size: 'medium',
  },
]

const AchievementCard = ({
  item,
  index,
}: {
  item: (typeof achievements)[0]
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
      y: 40,
      duration: 0.6,
    })

    const card = cardRef.current
    const handleMouseEnter = () => {
      gsap.to(card, { y: -10, duration: 0.3 })
    }
    const handleMouseLeave = () => {
      gsap.to(card, { y: 0, duration: 0.3 })
    }

    card.addEventListener('mouseenter', handleMouseEnter)
    card.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      card.removeEventListener('mouseenter', handleMouseEnter)
      card.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  const isLarge = item.size === 'large'

  return (
    <div
      ref={cardRef}
      className={`
        relative p-4 sm:p-6 md:p-8 rounded-lg sm:rounded-xl border border-gray-700 backdrop-blur-md
        bg-gradient-to-br from-gray-900/50 to-gray-800/30
        hover:border-neon-orange transition-all duration-500
        ${isLarge ? 'sm:col-span-2 lg:col-span-2' : 'col-span-1'}
        overflow-hidden group
      `}
    >
      {/* Neon border animation on hover */}
      <div className="absolute inset-0 rounded-lg sm:rounded-xl bg-gradient-to-r from-neon-orange via-transparent to-electric-blue opacity-0 group-hover:opacity-20 transition-opacity duration-500" />

      {/* Content */}
      <div className="relative z-10">
        <div className="text-4xl sm:text-5xl md:text-6xl font-black text-neon-orange mb-4 opacity-20 select-none">
          {item.icon}
        </div>
        <h3 className="text-base sm:text-lg md:text-2xl font-bold mb-2 sm:mb-3 text-white">
          {item.title}
        </h3>
        <p className="text-gray-400 text-xs sm:text-sm md:text-base leading-relaxed">
          {item.description}
        </p>
      </div>

      {/* Glow effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-neon-orange to-electric-blue rounded-lg sm:rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl" />
    </div>
  )
}

export default function Achievement() {
  const sectionRef = useRef<HTMLElement>(null)

  return (
    <section
      ref={sectionRef}
      className="relative bg-dark-secondary py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-8 overflow-hidden"
    >
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-8 -z-10"
        style={{
          backgroundImage: 'url(/image/S__10199044_0.jpg)',
        }}
      />

      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-80 h-80 bg-electric-blue/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-neon-orange/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-center mb-4 sm:mb-6 leading-tight">
          <span className="block text-white mb-2">大野修斗が</span>
          <span className="neon-glow block">できること</span>
        </h2>

        <p className="text-center text-gray-400 mb-12 sm:mb-16 md:mb-24 text-xs sm:text-sm md:text-base font-light">
          実績ベースで、実装可能な領域
        </p>

        {/* Bento Grid - responsive columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
          {achievements.map((item, index) => (
            <AchievementCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
