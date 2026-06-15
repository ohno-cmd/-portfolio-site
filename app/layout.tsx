import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'

export const metadata: Metadata = {
  title: '大野修斗 - ポートフォリオ',
  description: '人生を面白くする側で生きる。大野修斗のポートフォリオサイト。',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className="bg-dark-bg text-white">
        <Header />
        {children}
      </body>
    </html>
  )
}
