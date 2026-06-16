'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const passions = {
  learn: [
    {
      title: '①英語',
      desc: 'やっぱり英語話せるってかっこいい。海外のトップリーダー達とダイレクトに話して世界中の最新情報をキャッチしたい。',
      image: '/image/英語.jpg'
    },
    {
      title: '②写真',
      desc: 'やっぱりビジュアルは大事！オシャレな写真を撮る技術を身に付けたい。',
      image: '/image/写真.jpg'
    },
    {
      title: '③カルチャー',
      desc: 'どんな文化でも興味深い。異なる視点や価値観を学びたい。固定概念を壊して、新しい世界観をゲットしたい。',
      image: '/image/カルチャー.jpg'
    },
    {
      title: '④海外',
      desc: '世界各地を舞台にビジネスをしたい。現地の空気を肌で感じて、市場のニーズを掴みたい。いろんな国で仕事してみたいな。',
      image: '/image/海外.jpg'
    },
    {
      title: '⑤AI',
      desc: '最新のAI技術を学んでスキル向上を目指したいです。AIで仕事効率を最大限高めてその凄さを広めていきたい。',
    },
    {
      title: '⑥投資',
      desc: 'まだ初心者なので0から学んでいきたいと考えています。',
    },
  ],
  love: [
    {
      title: '①犬',
      desc: '実家で犬を飼っていて、犬の事業を支援したことをきっかけに、ペット業界の真実に触れ、より多くの幸せな犬を増やしていきたいと思うようになりました。',
      image: '/image/犬.jpg'
    },
    {
      title: '②格闘技',
      desc: '空手やってました、RIZIN見てます！好きな選手は秋元強真選手、伊藤祐樹選手、朝倉未来選手、平本蓮選手、冨澤選手',
      image: '/image/格闘技.jpg'
    },
    {
      title: '③朝活',
      desc: '朝に太陽を浴びてジムで鍛えるのが習慣です。朝を制する者は人生を制す！',
      image: '/image/朝活.jpg'
    },
    {
      title: '④食',
      desc: 'オシャレな空間でご飯食べるのが好きです。いいところあったら教えてください。一緒に行きましょう。',
      image: '/image/食事.jpg'
    },
    {
      title: '⑤ドラマ、映画、アニメ',
      desc: 'VIVANTとか今際の国のアリスとかめちゃ好きです。アニメだとダンダダンとかリゼロとか見てます。ワンピースも好きです。',
    },
    {
      title: '⑥アイドル',
      desc: 'キュースト、ILLIT、LESSERAFIM好きです。（ライブは1回も行ったことない、、）',
    },
  ],
}

type PassionItem = {
  title: string
  desc: string
  image?: string
}

const PassionCard = ({ item }: { item: PassionItem }) => {
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
      id="passion"
      ref={sectionRef}
      className="relative bg-dark-bg py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-8 overflow-hidden"
    >
      {/* Background image placeholder removed */}

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
