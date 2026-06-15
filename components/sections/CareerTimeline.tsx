'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const careerData = [
  {
    year: 2002,
    age: '誕生',
    month: '11月',
    event: '青森県弘前市で生まれる',
    achievement: '',
  },
  {
    year: 2021,
    age: '18歳',
    month: '3月',
    event: '青森県立弘前高等学校卒業',
    achievement: '',
  },
  {
    year: 2021,
    age: '18歳',
    month: '4月',
    event: '埼玉大学経済学部入学',
    achievement: '',
  },
  {
    year: 2022,
    age: '19歳',
    month: '10月',
    event: '埼玉大学経済学部中退',
    achievement: '',
  },
  {
    year: 2022,
    age: '19歳',
    month: '11月',
    event: 'アフィリエイト、イベント開催事業開始',
    achievement: '大失敗',
  },
  {
    year: 2023,
    age: '20歳',
    month: '6月',
    event: 'セルフエステ事業開始',
    achievement: '辛うじて黒字化',
  },
  {
    year: 2024,
    age: '21歳',
    month: '4月',
    event: '株式会社タツミコーポレーション入社',
    achievement: '財務課課長＆バッティング事業部PM',
  },
  {
    year: 2024,
    age: '21歳',
    month: '5月',
    event: '野球用品リユース事業開始',
    achievement: '4ヶ月で投資回収完了、収益化',
  },
  {
    year: 2024,
    age: '21歳',
    month: '5月',
    event: '日商簿記2級取得',
    achievement: '',
  },
  {
    year: 2024,
    age: '21歳',
    month: '10月',
    event: '宅地建物取引士取得',
    achievement: '',
  },
  {
    year: 2025,
    age: '22歳',
    month: '8月',
    event: '株式会社タツミコーポレーション退社',
    achievement: '',
  },
  {
    year: 2025,
    age: '22歳',
    month: '9月',
    event: '株式会社Arinos 富山拠点 入社',
    achievement: '',
  },
  {
    year: 2025,
    age: '22歳',
    month: '12月',
    event: '株式会社Arinos 倒産',
    achievement: '',
  },
  {
    year: 2026,
    age: '23歳',
    month: '1月',
    event: '株式会社ミギウデ 入社',
    achievement: 'Arinos顧客100%継承＆法人化',
  },
  {
    year: 2026,
    age: '23歳',
    month: '4月',
    event: 'クラファン支援 280万円調達成功',
    achievement: 'CAMPFIRE日別総合部門1位',
  },
  {
    year: 2026,
    age: '23歳',
    month: '4月',
    event: '小売業EC改善',
    achievement: '月平均売上150万円UP',
  },
  {
    year: 2026,
    age: '23歳',
    month: '4月',
    event: 'ウェルネス事業 LP制作＆メタ広告運用',
    achievement: '予約数6倍へ成長',
  },
  {
    year: 2026,
    age: '23歳',
    month: '5月',
    event: '社内でアプリ開発成功',
    achievement: '',
  },
  {
    year: 2026,
    age: '23歳',
    month: '6月',
    event: '株式会社ミギウデHP制作',
    achievement: '',
  },
]

const CareerRow = ({ item, index }: { item: typeof careerData[0]; index: number }) => {
  const rowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!rowRef.current) return

    gsap.from(rowRef.current, {
      scrollTrigger: {
        trigger: rowRef.current,
        start: 'top 90%',
        end: 'top 60%',
        scrub: 0.3,
        markers: false,
      },
      opacity: 0,
      x: index % 2 === 0 ? -40 : 40,
      duration: 0.6,
    })
  }, [index])

  return (
    <div
      ref={rowRef}
      className="border-b border-gray-700/50 hover:border-neon-orange transition-colors duration-300 last:border-b-0"
    >
      <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 sm:gap-4 py-4 sm:py-5 px-3 sm:px-6 hover:bg-gray-900/30 transition-colors duration-300">
        {/* Year */}
        <div className="sm:col-span-1">
          <span className="sm:hidden text-xs text-gray-500 uppercase">年</span>
          <span className="text-lg sm:text-base font-bold text-electric-blue">{item.year}</span>
        </div>

        {/* Age */}
        <div className="sm:col-span-1">
          <span className="sm:hidden text-xs text-gray-500 uppercase">年齢</span>
          <span className="text-sm sm:text-base text-gray-400">{item.age}</span>
        </div>

        {/* Month */}
        <div className="sm:col-span-1">
          <span className="sm:hidden text-xs text-gray-500 uppercase">月</span>
          <span className="text-sm sm:text-base text-gray-400">{item.month}</span>
        </div>

        {/* Event */}
        <div className="sm:col-span-1">
          <span className="sm:hidden text-xs text-gray-500 uppercase">イベント</span>
          <span className="text-sm sm:text-base text-white font-medium">{item.event}</span>
        </div>

        {/* Achievement */}
        <div className="sm:col-span-1">
          <span className="sm:hidden text-xs text-gray-500 uppercase">実績</span>
          {item.achievement ? (
            <span className="inline-block px-3 py-1 bg-neon-orange/20 border border-neon-orange/50 rounded text-xs sm:text-sm text-neon-orange font-semibold">
              {item.achievement}
            </span>
          ) : (
            <span className="text-gray-600 text-xs">—</span>
          )}
        </div>
      </div>
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

      <div className="max-w-6xl mx-auto w-full">
        <h2
          ref={titleRef}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-center mb-12 sm:mb-16 md:mb-20 leading-tight"
        >
          <span className="block text-white mb-2">経歴と</span>
          <span className="neon-glow block">実績</span>
        </h2>

        {/* Career Table */}
        <div className="border border-gray-700/50 rounded-lg overflow-hidden backdrop-blur-md bg-gradient-to-br from-gray-900/30 to-gray-800/20">
          {/* Header - Desktop only */}
          <div className="hidden sm:grid sm:grid-cols-5 gap-4 bg-gradient-to-r from-neon-orange/10 to-electric-blue/10 border-b border-gray-700/50 py-4 px-6">
            <div className="text-xs font-bold uppercase text-electric-blue tracking-widest">年</div>
            <div className="text-xs font-bold uppercase text-electric-blue tracking-widest">年齢</div>
            <div className="text-xs font-bold uppercase text-electric-blue tracking-widest">月</div>
            <div className="text-xs font-bold uppercase text-electric-blue tracking-widest">イベント</div>
            <div className="text-xs font-bold uppercase text-electric-blue tracking-widest">実績</div>
          </div>

          {/* Rows */}
          <div className="divide-y divide-gray-700/50">
            {careerData.map((item, index) => (
              <CareerRow key={index} item={item} index={index} />
            ))}
          </div>
        </div>

        {/* Summary Stats */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6">
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
