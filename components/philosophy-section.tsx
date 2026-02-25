"use client"

import { FadeIn } from "@/components/fade-in"

export function PhilosophySection() {
  return (
    <section className="px-6 py-32 md:py-48 bg-background">
      {/* 全体の text-center を外し、左寄せを基準にする */}
      <div className="mx-auto max-w-3xl">
        
        {/* ▼ セクションタイトル（左寄せで固定：Featureセクションと完全に同じスタイル） ▼ */}
        <FadeIn>
          <h2 className="font-sans text-xs tracking-[0.35em] text-foreground/50 uppercase mb-20 md:mb-28">
            Philosophy
          </h2>
        </FadeIn>

        {/* ▼ コンテンツエリア（ここだけを中央寄せにして、非対称の美しさを出す） ▼ */}
        <div className="flex flex-col items-center text-center">
          
          {/* キラーフレーズ */}
          <FadeIn delay={0.1}>
            <p className="font-serif text-2xl leading-loose tracking-[0.15em] text-foreground md:text-4xl md:leading-loose">
              目的はただ一つ。<br />
              洗練された日本酒文化を、<br className="md:hidden" />
              次世代へ継承すること。
            </p>
          </FadeIn>

          {/* 補足説明 */}
          <FadeIn delay={0.3}>
            <div className="mt-16 md:mt-24 space-y-8">
              <p className="font-serif text-sm leading-[2.2] tracking-[0.1em] text-foreground/60 md:text-base md:leading-[2.2]">
                そのために葉隠が創り出すのは、<br className="md:hidden" />
                日本酒に触れる「入り口」と、<br className="md:hidden" />
                魅力を「深める空間」の2つ。
              </p>
              <p className="font-serif text-sm leading-[2.2] tracking-[0.1em] text-foreground/60 md:text-base md:leading-[2.2]">
                空間の形態に、固定概念はありません。
              </p>
              <p className="font-serif text-sm leading-[2.2] tracking-[0.1em] text-foreground/60 md:text-base md:leading-[2.2]">
                私たちがここで発信するのは、誰かの物語ではなく、<br className="md:hidden" />
                モダンに再解釈された日本酒の魅力そのものです。
              </p>
            </div>
          </FadeIn>
          
        </div>
        
      </div>
    </section>
  )
}