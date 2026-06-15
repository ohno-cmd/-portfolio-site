'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const passions = {
  learn: [
    {
      title: '英語',
      desc: 'グローバルビジネスの舞台で活躍するために、英語スキルは必須。海外のトップリーダーたちと直接対話し、世界中の最新トレンドをキャッチする力を身につけたい。言語の壁を越えることで、ビジネスの可能性は無限に広がる。',
      image: '/image/英語.jpg'
    },
    {
      title: '写真',
      desc: 'ビジュアルでストーリーを伝える力。一枚の写真には数千の言葉より強いメッセージが込められている。プロダクト撮影からブランディング、SNS映えするコンテンツまで。視覚的表現スキルは現代ビジネスの最強武器。',
      image: '/image/写真.jpg'
    },
    {
      title: 'カルチャー',
      desc: '異なる文化を学ぶことで、固定概念を打ち破り、新しい視点を獲得できる。様々なカルチャーの背景にある思想や価値観を理解することで、より深いビジネス戦略が立てられる。文化的素養は究極の競争優位。',
      image: '/image/カルチャー.jpg'
    },
    {
      title: '海外',
      desc: '世界中を舞台にビジネスを展開するために、各地域の独特な特色やニーズを理解することは必須。現地の空気を肌で感じ、習慣や市場の動きを学ぶことで、国際的なビジネスの目利きが養われる。',
      image: '/image/海外.jpg'
    },
  ],
  love: [
    {
      title: '犬',
      desc: 'ペット関連の事業支援を通じて、犬への愛情が深まった。動物へのケアと向き合う姿勢は、ビジネスにおいても重要。信頼と絆を大切にするスタンスが、チームマネジメントにも繋がっている。',
      image: '/image/犬.jpg'
    },
    {
      title: '格闘技',
      desc: '空手の修行で培った精神力と身体能力。RIZINなどの格闘技を観戦することで、チャレンジと努力の哲学を学ぶ。限界に向き合い、自分を超える覚悟。これはビジネス戦場でも同じ。',
      image: '/image/格闘技.jpg'
    },
    {
      title: '朝活',
      desc: '朝日を浴びながらジムで鍛え、心身をリセット。朝を制する者は人生を制す。毎朝のルーティンで自分の土台を整えることで、ビジネスパフォーマンスの質が劇的に向上。成功者の多くが朝活家。',
      image: '/image/朝活.jpg'
    },
    {
      title: '食',
      desc: 'オシャレで洗練された空間での食事を通じて、ブランディングとお客様体験を学ぶ。食文化はビジネスそのもの。プロダクト、空間、サービスの総合的な満足度を設計する力が磨かれる。',
      image: '/image/食事.jpg'
    },
    {
      title: 'ドラマ・映画・アニメ',
      desc: 'VIVANTや今際の国のアリスなど、質の高いストーリーテリングから学ぶ。人を惹きつけるナラティブの構造、緊張感とカタルシスの波。これらの要素はマーケティングやプロダクト設計にも応用できる最高の教材。',
    },
  ],
}

const PassionCard = ({ item }: { item: typeof passions.learn[0] }) => {
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
      className="group relative rounded-lg border border-gray-700 backdrop-blur-md bg-gradient-to-br from-gray-900/50 to-gray-800/30 hover:border-neon-orange transition-all duration-500 cursor-pointer overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-neon-orange via-transparent to-electric-blue opacity-0 group-hover:opacity-20 transition-opacity duration-500" />

      <div className="relative z-10">
        {item.image && (
          <img src={item.image} alt={item.title} className="w-full h-40 object-cover" />
        )}

        <div className={item.image ? 'p-4 sm:p-6' : 'p-4 sm:p-6'}>
          <h4 className="text-base sm:text-lg md:text-xl font-bold mb-1 sm:mb-2 text-white">
            {item.title}
          </h4>
          <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
        </div>
      </div>

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

      <div className="max-w-5xl mx-auto w-full">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-center mb-12 sm:mb-16 md:mb-24 leading-tight">
          <span className="block text-white mb-2">大野修斗の</span>
          <span className="neon-glow block">パッション</span>
        </h2>

        <div className="space-y-16">
          {/* 学びたいこと */}
          <div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-white">学びたいこと</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {passions.learn.map((item, idx) => (
                <PassionCard key={idx} item={item} />
              ))}
            </div>
          </div>

          {/* 好きなこと */}
          <div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-white">好きなこと</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {passions.love.map((item, idx) => (
                <PassionCard key={idx} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
