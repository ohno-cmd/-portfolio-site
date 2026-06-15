'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const careerData = [
  { year: 2002, items: ['11月 青森県弘前市で生まれる'] },
  { year: 2021, items: ['3月 青森県立弘前高等学校卒業', '4月 埼玉大学経済学部入学'] },
  { year: 2022, items: ['10月 埼玉大学経済学部中退', '11月 アフィリエイト、イベント開催事業開始 → 大失敗'] },
  { year: 2023, items: ['6月 セルフエステ事業開始 → 辛うじて黒字化'] },
  {
    year: 2024,
    items: [
      '4月 株式会社タツミコーポレーション入社（財務課課長＆バッティング事業部PM）',
      '5月 野球用品リユース事業開始 → 4ヶ月で投資回収完了、収益化',
      '5月 日商簿記2級取得',
      '10月 宅地建物取引士取得',
    ],
  },
  {
    year: 2025,
    items: ['8月 株式会社タツミコーポレーション退社', '9月 株式会社Arinos 富山拠点 入社', '12月 株式会社Arinos 倒産'],
  },
  {
    year: 2026,
    items: [
      '1月 株式会社ミギウデ 入社（Arinos顧客100%継承＆法人化）',
      '4月 クラファン支援 280万円調達成功（CAMPFIRE日別総合部門1位）',
      '4月 小売業EC改善 → 月平均売上150万円UP',
      '4月 ウェルネス事業 LP制作＆メタ広告運用 → 予約数6倍へ成長',
      '5月 社内でアプリ開発成功',
      '6月 株式会社ミギウデHP制作',
    ],
  },
]

const TimelineItem = ({ year, items, index }: { year: number; items: string[]; index: number }) => {
  const itemRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!itemRef.current) return

    gsap.from(itemRef.current, {
      scrollTrigger: {
        trigger: itemRef.current,
        start: 'top 85%',
        end: 'top 50%',
        scrub: 0.3,
        markers: false,
      },
      opacity: 0,
      x: index % 2 === 0 ? -40 : 40,
      duration: 0.6,
    })
  }, [index])

  return (
    <div ref={itemRef} className={`mb-8 flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
      {/* Year */}
      <div className="w-20 sm:w-24 flex-shrink-0">
        <div className="sticky top-32 text-2xl sm:text-3xl font-black text-electric-blue">{year}</div>
      </div>

      {/* Timeline dot and line */}
      <div className="flex flex-col items-center mx-4 sm:mx-6">
        <div className="w-3 h-3 rounded-full bg-neon-orange border-2 border-dark-bg" />
        {index < careerData.length - 1 && <div className="w-1 bg-gradient-to-b from-neon-orange to-electric-blue h-32 mt-2" />}
      </div>

      {/* Content */}
      <div className="flex-1">
        <ul className="space-y-2">
          {items.map((item, i) => (
            <li
              key={i}
              className="text-sm sm:text-base text-gray-300 leading-relaxed hover:text-white transition-colors pl-0"
            >
              • {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Empty space for alternating layout */}
      <div className="hidden sm:block w-20 sm:w-24 flex-shrink-0" />
    </div>
  )
}

export default function CareerTimeline() {
  const sectionRef = useRef<HTMLSection>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    if (!titleRef.current) return

    gsap.from(titleRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top center',
        end: 'center center',
        scrub: 0.5,
        markers: false,
      },
      opacity: 0,
      y: 60,
      duration: 0.8,
    })
  }, [])

  return (
    <section ref={sectionRef} className="relative bg-dark-bg py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-8 overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-6 -z-10"
        style={{
          backgroundImage: 'url(/image/S__10199046_0.jpg)',
        }}
      />

      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-neon-orange/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-electric-blue/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto w-full">
        <h2
          ref={titleRef}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-center mb-16 sm:mb-20 md:mb-24 leading-tight"
        >
          <span className="block text-white mb-2">経歴と</span>
          <span className="neon-glow block">実績</span>
        </h2>

        {/* Timeline */}
        <div className="relative">
          {careerData.map((item, index) => (
            <TimelineItem key={item.year} year={item.year} items={item.items} index={index} />
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="p-6 rounded-lg border border-neon-orange/30 bg-neon-orange/5 hover:bg-neon-orange/10 transition-colors">
            <div className="text-3xl font-black text-neon-orange mb-2">18</div>
            <p className="text-gray-400 text-sm">事業立ち上げ経験</p>
          </div>
          <div className="p-6 rounded-lg border border-electric-blue/30 bg-electric-blue/5 hover:bg-electric-blue/10 transition-colors">
            <div className="text-3xl font-black text-electric-blue mb-2">4年</div>
            <p className="text-gray-400 text-sm">実務経営経験</p>
          </div>
          <div className="p-6 rounded-lg border border-neon-orange/30 bg-neon-orange/5 hover:bg-neon-orange/10 transition-colors">
            <div className="text-3xl font-black text-neon-orange mb-2">10+</div>
            <p className="text-gray-400 text-sm">企業コンサル実績</p>
          </div>
        </div>
      </div>
    </section>
  )
}
