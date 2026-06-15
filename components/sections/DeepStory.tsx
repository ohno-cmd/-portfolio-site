'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const storyItems = [
  {
    title: '出生→小学校',
    year: '2002',
    content:
      '2002年に青森県で生まれ、優しい家族に育てられました。しかし、小学生の頃から「自分はもう一人で生きていける」という謎の自信があり、何度も自転車で家出を繰り返し警察官の父親に何度も捕まりました。友人や弟と近所のハチの巣を狩りに行ったり、川遊びや戦いごっこなど、平成の子どもらしくない「昭和児」と呼ばれていました。',
  },
  {
    title: '中学→高校',
    year: '2015',
    content:
      '中学では学年最下位クラスの成績で、「悪いことをするのがかっこいい」と恥ずかしながら悪ぶっていた時期でした。しかし、拓人（後の一番の親友）という名前の友人にテストの点数で勝負を挑まれ、そこから本気で勉強し、偏差値69の市内最高偏差値の弘前高等学校へ入学が決まりました。勉強していく中で、「悪いこと」よりも「優しく誠実である人間」の方がよっぽどかっこいいと、拓人と当時の担任の先生から学びました。',
  },
  {
    title: '高校→大学',
    year: '2018',
    content:
      'その高校に入学して最初に感じたのは、生徒も教師も「勉強が全て」といった感じでした。当時の僕は「勉強よりももっと大切なものがあるだろ」と反骨心を抱き、一切勉強せず最下位という称号を取得しました。それを機に教育指導の強面教師がある授業で「大野お前ちゃんとやれや」と激怒した際に、「先生の授業はわかりづらいので自分でやってTOP10入ります」と宣言し、実際に7位を取ることができます。結局、その教師には根性を認められ仲良くなりましたが、今振り返ってもすごく清々しい経験でした。基本的に周りがみな頭が良かったので、自分がちゃんとしなくてもみんながなんとかしてくれる精神で楽観的に生きてました。',
  },
  {
    title: '大学→中退',
    year: '2020',
    content:
      'その後、特にやりたいこともないまま埼玉大学経済学部に進学しました。大学の授業はすごく退屈に感じ、授業はほとんどサボり何も頭を使わず新宿や渋谷で朝方まで遊ぶ生活を1年半ほど続けました。そんな時、突然の出来事でしたが、親友の拓人が病気で亡くなったと連絡がありました。拓人は病気で高校受験ができなく、同級生が高校を卒業して楽しんでいる中たった一人で浪人し勉強し続けていました。東北大学もB判定が出るほどに勉強し共通テストまで後1週間というときに亡くなってしましました。',
  },
  {
    title: '運命の瞬間',
    year: '2020',
    content:
      'その瞬間、僕は自分自身への嫌悪感と死という現実を信じたくない気持ちで気が狂いそうでした。でも、もし自分が拓人の立場だったら自分が死んだことで大切な人たちが悲しんで堕落していく姿なんて見たくないと強く思いました。だから、これからは拓人が安心して見てられるように自分の力で大好きな人たちを守れるようになると心に誓いました。',
  },
  {
    title: '自己啓発と決意',
    year: '2020',
    content:
      'そこからは、「非常識な成功法則」など自分をとにかく変えたくて自己啓発本を読み漁りました。その中の1節にこんな問いかけがありました。「もしあと1年であなたの人生が終わるとしたら、あなたは何をしますか？あなたには無限の財力と人脈と技術と知恵があります。」僕はその本に直接書き込みました。「どうせ1年で死ぬなら、家族、友人、恩人に1人あたり億超えるくらいのとびっきりの恩返しをする」そして、次のページにはこう書いてました。「それがあなたの死ぬまでのミッションです。」当時の僕のリアクション「...。笑」と一瞬固まりましたが、どうせ2年間で単位数も19！やりたいことも特に見つからない！なら目指してみてもいいかと、「億を超える恩返し」をするなら経営者しか道はないなと、大学をすぐに中退し、華やかな起業ロードスタートだぜ！と勢いに乗っていました。',
  },
  {
    title: '中退後→起業',
    year: '2020-2021',
    content:
      '大学を中退し1日8時間程経営に関する本を読み漁りました。が、勉強してばかりで実務をしなきゃ意味がないと思い、バイトを頑張り実践型の起業スクールに通いました。そこで、アフィリエイト事業、イベント開催事業と実際に事業を立ち上げる経験を積みましたが、結果は惨敗、、月数万円しか稼げませんでした。ちょっと勉強したら月100万なんて余裕でしょなんて甘さは一瞬で打ち砕かれ、バイトしていたすき家でも米を炊き忘れて戦力外通告を受け、お金もなくなり青森の実家に帰ることにしました。',
  },
  {
    title: 'ニート→希望',
    year: '2021',
    content:
      '大学も途中でやめ、バイトもクビになり、お金もなく、その上実家暮らしのニート。人生終わりくらい思ってましたが、それでも自分を受け入れてくれた家族から無償の愛を感じ、すごく人の温かさの心地よさを感じました。母親は将来を心配して公務員試験の参考書など、いろんなものを買ってきてくれましたが、僕はまだどうしても拓人と約束した「億を超える恩返し」という夢を諦めきれませんでした。そんな時に通っていた起業スクールからの紹介で出会ったのが株式会社タツミコーポレーションでした。',
  },
  {
    title: 'タツミコーポレーション 採用試験',
    year: '2021',
    content:
      '「経営幹部候補生採用」を掲げ、未来の経営者を育成するという目標を掲げた会社でした。すぐに応募し「無給で掃除でもなんでもするので経営を教えてくださいお願いします」と頭を下げました。そこで当時人事主任の山根さん（今は仕事のパートナー関係）と10回以上will can must面談を重ね、当時人事課長の亀井さん（今は友達、たまに遊びます）の1次選考を通過し、当時人事役員の高橋さん（現在は株式会社Dream Accelarator代表：パートナー関係）の2次選考を突破し、代表取締役の李社長の最終選考を突破することができました。内定率は約1%ほどだったらしく、この掴んだチャンスを絶対に離さないと決め、同期とは違い大学を中退して自由の身だったのですぐに神戸に引っ越しました。',
  },
  {
    title: 'タツミコーポレーション 内定時代',
    year: '2021-2022',
    content:
      '内定が決まった瞬間次のようなミッションが提示されました。「君たち内定者チームである施設の売上を月100万円UPさせてほしい。明日までにそれぞれアイディアを持ってきて」このミッションが提示されたその日に僕はその施設に実際に行きました（なぜなら現場が大事だと本に書いてたからです）そして顧客層を調べました、サービスを実際に受けてみました、店舗周りを探索しました。この自分の足で情報を集め、戦略を考え実行していくという楽しさに異常なほど快感を覚えていました。そして僕は既存サービスとのシナジーと競合状況から「セルフエステ」を新規事業として始めることを提案しチームの合意を得て事業を進めることになりました。その過程で、PL管理、営業、webマーケ、もっと具体で行くとカスタマージャーニーマップの使い方など経営の基礎を学びました。結果としては、単月で見るとわずかな黒字。投資回収は程遠い、成功とは呼べない結果でした。すごく悔しかったことを覚えています。',
  },
  {
    title: 'タツミコーポレーション 入社後',
    year: '2022-2023',
    content:
      'プロジェクトは成功とはいえなかったものの行動力と熱量を認められ、財務課課長＆バッティング事業部プロジェクトマネージャーと高い役職に配属をいただき、そこから1年ほど、財務課としては銀行周りのご挨拶や担当事業のPL管理、全社の資金繰り表の更新などお金の流れを掴む仕事そしてバッティング事業では、バッティングセンターでの新規事業として野球用品のリユース事業を始め、5か月で投資回収を達成し初めて経営という分野で成功体験を積むことができました。同時に2か月で簿記2級、6か月で宅地建物取引士も取得し、社長からエンポリオアルマーニのコートをもらって、正直調子に乗っていました。',
  },
  {
    title: '葛藤と退社',
    year: '2023',
    content:
      '働いて 1年が過ぎたころ、自分にはある葛藤がありました。店舗型のBtoCビジネスが主軸であったので毎日の繰り返し業務のようなものも多く、店舗を運営する上でもチームビルディングの観点でもその繰り返しの業務が大切なことは理解していましたが、自分はもっと早く売上を上げる力や成果を出さないいけないと焦っていました。ここで毎日接客しているような時間があるなら、自分で事業をしたい、それか経営で困っている人、本気で人生を頑張っている誰かの力になりたいとそう思っていました。そこで辞めることを伝え、当時リファラルで声のかかっていたコンサル会社へ入社することを決めました。',
  },
  {
    title: '株式会社Arinos→倒産',
    year: '2023',
    content:
      'Arinosは全国に拠点があり、僕はその中で1番勢いがあると言われていた富山拠点に配属が決まりました。初めに驚いたのは社内でのコミュニケーションコストの軽さでした。中にはIQ130の天才もいて、基本的に全員論理的なので、話がスムーズに伝わり、会話ってこんなに楽だったっけと驚いたことを覚えています。実務では、数多くのマーケティングフレーム、聞きなれないカタカナ、もっと働きたいと刺激に飢えていた自分にとっては最高すぎる環境でした。入社して2か月、徐々に1人でアサインされる案件も増えてきたそんな時まさかのArinosが倒産しました。いきなり2か月分の給料が消え、倒産を伝える場の空気の重さ、経営の残酷さを目の当たりにしました。',
  },
  {
    title: '株式会社ミギウデ 誕生',
    year: '2023-現在',
    content:
      '富山拠点を単体で見ると業績は好調で株式会社ミギウデの創業メンバーとして働くことを選択しました。倒産とスタートアップを同時に経験できるなんて、滅多にない経験だと思い、もし1人でも失敗したら給料が消えるかもしれないというハラハラ感に胸が躍りました。そこからは、実務を積みながら多くを学び、webマーケである店舗の予約数を6倍まで改善したり、ECサイトの月平均売上を150万円UPさせたりと段々実績を作れるようになってきました。AIエンジニア領域も勉強し、HP/LP制作やアプリ開発もできるようになりました。そして現在に繋がります。',
  },
]

export default function DeepStory() {
  const sectionRef = useRef<HTMLElement>(null)
  const timelineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!timelineRef.current) return

    const items = timelineRef.current.querySelectorAll('.timeline-item')

    items.forEach((item, index) => {
      gsap.from(item, {
        scrollTrigger: {
          trigger: item,
          start: 'top 80%',
          end: 'top 20%',
          scrub: 0.5,
          markers: false,
        },
        opacity: 0,
        x: index % 2 === 0 ? -50 : 50,
        duration: 0.8,
      })
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative bg-dark-bg py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-8 overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-7 -z-10"
        style={{
          backgroundImage: 'url(/image/S__10199043_0.jpg)',
        }}
      />

      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-40 h-40 bg-neon-orange/5 rounded-full blur-3xl" />
        <div className="absolute bottom-40 right-10 w-60 h-60 bg-electric-blue/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black text-center mb-12 sm:mb-16 md:mb-24 leading-tight">
          <span className="block text-white mb-2">大野修斗の</span>
          <span className="neon-glow block">人生物語</span>
        </h2>

        {/* Timeline */}
        <div ref={timelineRef} className="relative">
          {/* Central line - hidden on mobile, visible on md+ */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-neon-orange via-electric-blue to-neon-orange transform -translate-x-1/2 hidden md:block" />

          {/* Timeline items */}
          <div className="space-y-8 sm:space-y-12 md:space-y-24">
            {storyItems.map((item, index) => (
              <div key={index}>
                <div
                  className={`timeline-item flex md:flex-row ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Content */}
                  <div className="w-full md:w-1/2 px-0 sm:px-4 md:px-8">
                    <div
                      className={`p-4 sm:p-6 md:p-8 rounded-lg border ${
                        index % 2 === 0
                          ? 'border-neon-orange bg-opacity-5 bg-neon-orange'
                          : 'border-electric-blue bg-opacity-5 bg-electric-blue'
                      } backdrop-blur-sm hover:backdrop-blur-md transition-all duration-300`}
                    >
                      <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                        <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-gray-500 whitespace-nowrap">
                          {item.year}
                        </span>
                        <div
                          className={`h-0.5 flex-1 ${
                            index % 2 === 0
                              ? 'bg-neon-orange'
                              : 'bg-electric-blue'
                          }`}
                        />
                      </div>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-4">{item.title}</h3>
                      <p className="text-gray-300 leading-relaxed text-xs sm:text-sm md:text-base">
                        {item.content}
                      </p>
                    </div>
                  </div>

                {/* Dot - hidden on mobile, visible on md+ */}
                <div className="hidden md:flex md:w-0 justify-center">
                  <div className="relative">
                    <div
                      className={`w-6 h-6 rounded-full border-4 ${
                        index % 2 === 0
                          ? 'border-neon-orange bg-dark-bg'
                          : 'border-electric-blue bg-dark-bg'
                      }`}
                    />
                    <div
                      className={`absolute inset-0 rounded-full ${
                        index % 2 === 0
                          ? 'bg-neon-orange animate-ping opacity-75'
                          : 'bg-electric-blue animate-ping opacity-75'
                      }`}
                    />
                  </div>
                </div>

                {/* Spacing - hidden on mobile */}
                <div className="hidden md:block md:w-1/2" />
                </div>

                {/* Insert photos at specific timeline points */}
                {index === 8 && (
                  <div className="w-full mt-8 mb-8">
                    <img
                      src="/image/タツミコーポレーション.jpg"
                      alt="タツミコーポレーション"
                      className="w-full max-w-2xl mx-auto rounded-lg shadow-2xl shadow-neon-orange/30 hover:shadow-neon-orange/50 transition-all duration-500"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
