'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const achievements = [
  {
    id: 1,
    title: 'EC改善実績',
    description: '閲覧率152%向上、購入率114%向上',
    details:
      'ECサイト全体のUX改善、商品ページ最適化、チェックアウトフロー改善を実施。ユーザー行動分析に基づいた施策で、サイト閲覧者の質が大幅に向上し、購入転換につながりました。',
    icon: '01',
    size: 'large',
  },
  {
    id: 2,
    title: 'webマーケ実績',
    description: '月間予約数5.3倍へ成長',
    details:
      'LP制作とメタ広告による統合マーケティングキャンペーン。高精度ターゲティングと最適化により、大幅な予約数増加を実現。',
    icon: '02',
    size: 'large',
  },
  {
    id: 4,
    title: '財務管理実績',
    description: '飲食店30万円のコストカット、経営アドバイス',
    details:
      '詳細な原価計算と様々な財務指標の分析を通じ、実行可能なコスト最適化施策を提案。サプライチェーン改善と仕入れ交渉により、月間30万円の固定費削減を実現。同時に複数の財務指標（原価率、労務費率、営業外費用など）から包括的な経営アドバイスを提供。',
    icon: '04',
    size: 'medium',
  },
  {
    id: 5,
    title: '資金調達実績',
    description: 'クラファン280万円調達成功（CAMPFIRE日別部門1位）',
    details:
      'SNSを駆使したストーリーテリングとターゲット設定により、クラウドファンディング280万円を調達。CAMPFIRE日別総合部門で1位を獲得。',
    icon: '05',
    size: 'medium',
  },
  {
    id: 6,
    title: 'SNS運用実績',
    description: '新規来店者150人獲得',
    details:
      'インスタグラム戦略を通じた認知度向上とTikTokでのバイラル施策により、新規来店者を150人獲得。ブランド認知の拡大と顧客ベース強化を実現。',
    icon: '06',
    size: 'medium',
  },
  {
    id: 7,
    title: 'Claude Code研修',
    description: '社内・社外向けAI活用/自動化システム構築研修',
    details:
      'AI駆動の自動化システムを構築・運用した経験を基に、実践的な研修を設計・実施。研修参加者の満足度は98%。',
    icon: '07',
    size: 'medium',
  },
  {
    id: 8,
    title: '経営コンサル',
    description: '平均月売上143%向上',
    details:
      '業種横断的なビジネスコンサル経験。クライアント企業の経営課題を分析し、実行可能な施策を提案・実装。平均で月売上が143%向上した実績。',
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
        <p className="text-gray-400 text-xs sm:text-sm md:text-base leading-relaxed font-semibold mb-3">
          {item.description}
        </p>
        <p className="text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed">
          {item.details}
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
