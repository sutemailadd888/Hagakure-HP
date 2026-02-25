"use client"

import { FadeIn } from "@/components/fade-in"

export function PhilosophySection() {
  return (
    <section className="px-6 py-32 md:py-48 bg-background">
      <div className="mx-auto max-w-3xl text-center">
        
        {/* セクションタイトル（無機質・極小の英語） */}
        <FadeIn>
          <h2 className="font-sans text-xs tracking-[0.35em] text-foreground/40 uppercase mb-20 md:mb-28">
            Philosophy
          </h2>
        </FadeIn>

        {/* キラーフレーズ（極大・明朝体・高コントラスト） */}
        <FadeIn delay={0.1}>
          <p className="font-serif text-2xl leading-loose tracking-[0.15em] text-foreground md:text-4xl md:leading-loose">
            目的はただ一つ。<br />
            洗練された日本酒文化を、<br className="md:hidden" />
            次世代へ継承すること。
          </p>
        </FadeIn>

        {/* 補足説明（極小・色を落として控えめに） */}
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
    </section>
  )
}