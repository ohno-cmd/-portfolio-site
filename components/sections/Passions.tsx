'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const passions = {
  learn: [
    '英語（やっぱり英語話せるってかっこいい）',
    '写真（オシャレな写真とか撮ってインスタ載せたい）',
    'カルチャー（どんなカルチャーでも構いません、文化に興味があります）',
    '海外（世界の文化、特色に興味があります）',
  ],
  love: [
    '犬（犬の事業支援をきっかけに好きになりました）',
    '格闘技（空手やってました、RIZIN見てます）',
    '朝活（朝に太陽を浴びてジムで鍛える、朝を制する者は人生を制す）',
    '食（オシャレな空間が好きです）',
    'ドラマ・映画・アニメ（VIVANTとか今際の国のアリスとか面白すぎるでしょ）',
  ],
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

      <div className="max-w-4xl mx-auto w-full">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-center mb-12 sm:mb-16 md:mb-24 leading-tight">
          <span className="block text-white mb-2">大野修斗の</span>
          <span className="neon-glow block">パッション</span>
        </h2>

        <div className="space-y-16">
          {/* 学びたいこと */}
          <div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-white">学びたいこと</h3>
            <ul className="space-y-3">
              {passions.learn.map((item, idx) => (
                <li
                  key={idx}
                  className="text-base sm:text-lg text-gray-300 leading-relaxed hover:text-neon-orange transition-colors"
                >
                  • {item}
                </li>
              ))}
            </ul>
          </div>

          {/* 好きなこと */}
          <div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-white">好きなこと</h3>
            <ul className="space-y-3">
              {passions.love.map((item, idx) => (
                <li
                  key={idx}
                  className="text-base sm:text-lg text-gray-300 leading-relaxed hover:text-electric-blue transition-colors"
                >
                  • {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
