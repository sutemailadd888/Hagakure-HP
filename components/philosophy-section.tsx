"use client"

import { FadeIn } from "@/components/fade-in"

export function PhilosophySection() {
  return (
    <section className="px-6 py-32 md:py-40">
      <div className="mx-auto max-w-2xl">
        <FadeIn>
          <h2 className="font-sans text-xs tracking-[0.35em] text-foreground/40 uppercase">
            Philosophy
          </h2>
        </FadeIn>
        <FadeIn delay={0.15}>
          <div className="mt-16 space-y-8 md:mt-20">
            <p className="font-serif text-lg leading-[2] tracking-[0.08em] text-foreground/80 md:text-xl md:leading-[2.2]">
              私たちの目的はただ一つ。
              <br />
              日本酒という洗練された文化を、次世代へ継承することです。
            </p>
            <p className="font-serif text-lg leading-[2] tracking-[0.08em] text-foreground/80 md:text-xl md:leading-[2.2]">
              そのために葉隠が創り出すのは、日本酒に「触れるきっかけ（入り口）」と、その魅力を「深める空間」の2つ。
            </p>
            <p className="font-serif text-lg leading-[2] tracking-[0.08em] text-foreground/80 md:text-xl md:leading-[2.2]">
              空間の形態に、固定概念はありません。
            </p>
            <p className="font-serif text-lg leading-[2] tracking-[0.08em] text-foreground/80 md:text-xl md:leading-[2.2]">
              私たちがここで発信するのは、誰かの物語ではなく、モダンに再解釈された日本酒の魅力そのものです。
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
