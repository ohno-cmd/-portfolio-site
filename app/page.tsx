'use client'

import { useEffect } from 'react'
import Hero from '@/components/sections/Hero'
import Intro from '@/components/sections/Intro'
import CareerTimeline from '@/components/sections/CareerTimeline'
import DeepStory from '@/components/sections/DeepStory'
import Achievement from '@/components/sections/Achievement'
import Passions from '@/components/sections/Passions'
import Contact from '@/components/sections/Contact'

export default function Home() {
  useEffect(() => {
    // Smooth scroll
    document.documentElement.style.scrollBehavior = 'smooth'
  }, [])

  return (
    <main className="relative overflow-hidden">
      <Hero />
      <Intro />
      <CareerTimeline />
      <DeepStory />
      <Achievement />
      <Passions />
      <Contact />
    </main>
  )
}
