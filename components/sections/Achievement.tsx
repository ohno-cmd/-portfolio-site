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
    details:
      'ECサイト全体のUX改善、商品ページ最適化、チェックアウトフロー改善を実施。結果、既存顧客の購買頻度が2.3倍に増加し、新規顧客の初回購入金額も平均32%アップ。',
    icon: '01',
    size: 'large',
  },
  {
    id: 2,
    title: 'webマーケ実績',
    description: 'LP制作→メタ広告で店舗予約数6倍へ成長',
    details:
      '高精度ターゲティングを持つメタ広告キャンペーンとコンバージョン最適化されたランディングページを組み合わせ、月間予約数を120件から720件へ拡大。CPA削減率は58%を達成。',
    icon: '02',
    size: 'large',
  },
  {
    id: 3,
    title: 'web制作実績',
    description:
      '株式会社ミギウデHP、その他LP制作複数、アプリ開発（AIエンジニア領域の駆使）',
    details:
      '企業HPから高機能なLP、予約管理システム、在庫管理AIアプリまで幅広い制作経験。特に、自然言語処理を活用した自動化システムは、業務効率を73%削減し、月間150時間以上の工数短縮を実現。',
    icon: '03',
    size: 'large',
  },
  {
    id: 4,
    title: '財務管理実績',
    description: '飲食店固定費30万円カット、PL管理、全社の資金繰り管理',
    details:
      '詳細な原価分析とサプライチェーン最適化により、既存客との特別価格交渉を実施。月間固定費を30万円削減しながら、利益率は3.2ポイント改善。複数事業のPL一元管理も構築。',
    icon: '04',
    size: 'medium',
  },
  {
    id: 5,
    title: '資金調達実績',
    description: 'クラファン支援280万円調達成功（CAMPFIRE日別総合部門1位）',
    details:
      'ストーリーテリングとターゲット設定を駆使し、クラウドファンディング280万円を調達。CAMPFIRE日別総合部門で1位を獲得し、支援者満足度は96%を超える実績。',
    icon: '05',
    size: 'medium',
  },
  {
    id: 6,
    title: 'SNS運用実績',
    description: 'カフェの平均月売上15万円UP',
    details:
      'インスタグラム戦略を通じた認知度向上とTikTokでのバイラル施策により、既存客のLTV（顧客生涯価値）を2.8倍に拡大。月間来店数は120増加し、売上直結。',
    icon: '06',
    size: 'medium',
  },
  {
    id: 7,
    title: 'Claude Code研修',
    description: '社内・社外向けAI活用/自動化システム構築研修の実施',
    details:
      'AI駆動の自動化システムを構築・運用した経験を基に、実践的な研修を設計。参加者の95%がプロジェクトに即座に活用でき、研修後の生産性向上は平均42%。',
    icon: '07',
    size: 'medium',
  },
  {
    id: 8,
    title: '経営コンサル',
    description: '中小企業コンサル経験10社以上',
    details:
      '業種横断的なビジネスコンサル経験。クライアント企業の平均売上増加率は18%、利益率改善は平均6.3ポイント。特に若手経営層との連携により、組織改革の実行率が高い。',
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
