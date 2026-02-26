"use client"

import { FadeIn } from "@/components/fade-in"

export function DirectorsNoteSection() {
  return (
    // Sakeセクションとの間隔を絶妙に保つための余白（py-24 md:py-32）
    <section className="px-6 py-24 md:py-32 bg-background">
      <div className="mx-auto max-w-2xl">
        <FadeIn>
          {/* ▼ エディトリアル・デザインの要：左側の極細ラインによるインデント ▼ */}
          {/* 引用や手紙のような「親密さ」と「静寂」を演出するため、左に線を引きます */}
          <div className="border-l border-foreground/20 pl-6 md:pl-10">
            
            <h2 className="font-sans text-[10px] tracking-[0.35em] text-foreground/40 uppercase">
              Director's Note
            </h2>
            
            {/* ▼ 手紙のような、行間（leading-[2.4]）をたっぷりとった明朝体の文章 ▼ */}
            <div className="mt-12 space-y-8 md:mt-16">
              <p className="font-serif text-sm leading-[2.4] tracking-[0.1em] text-foreground/70 md:text-base md:leading-[2.4]">
                春は、すべてが新しく生まれ変わる季節です。<br />
                しかし同時に、過ぎ去る時間への静かな郷愁を伴う季節でもあります。
              </p>
              
              <p className="font-serif text-sm leading-[2.4] tracking-[0.1em] text-foreground/70 md:text-base md:leading-[2.4]">
                私たちが今月の特集「春の四篇。」として選んだ4つの日本酒は、<br className="hidden md:inline" />
                単なる味覚のキュレーションではありません。<br />
                微睡みから目覚め、生命の息吹を感じ、やがて時の蓄積を思索する。<br className="hidden md:inline" />
                それは春という季節が持つ「移ろい」を、<br className="hidden md:inline" />
                論理と感覚の狭間で再構築した一つの物語です。
              </p>
              
              <p className="font-serif text-sm leading-[2.4] tracking-[0.1em] text-foreground/70 md:text-base md:leading-[2.4]">
                私が葉隠というシステムを通じて試みているのは、<br className="hidden md:inline" />
                「愛するものに確かな形を与える」という、極めて個人的な実践に他なりません。<br />
                この静かな熱狂が、グラスを通じて誰かの美学と共鳴することを願って。
              </p>
              
              {/* ▼ 調香師のサインのような、控えめな署名 ▼ */}
              <div className="pt-6 md:pt-8">
                <p className="font-serif text-[11px] tracking-[0.2em] text-foreground/40 uppercase">
                  Director — Kubo
                </p>
              </div>
            </div>

          </div>
        </FadeIn>
      </div>
    </section>
  )
}
