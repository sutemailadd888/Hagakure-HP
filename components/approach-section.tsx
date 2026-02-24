"use client"

import { FadeIn } from "@/components/fade-in"

const approaches = [
  {
    number: "01",
    title: "Curation",
    subtitle: "日本酒の空間ディレクション",
    description:
      "好きを深める空間の設計。既存のバー空間にて、葉隠の美学に基づいた日本酒メニューを厳選。毎月アップデートされるラインナップで、洗練された日本酒体験を提供します。",
  },
  {
    number: "02",
    title: "Experience",
    subtitle: "「日本酒×〇〇」の体験設計",
    description:
      "出会いの入り口の創出。日本酒のハードルを下げるため、固定概念を覆す新しいイベントや企画を他団体と連携して継続的に実施します。",
  },
  {
    number: "03",
    title: "Media",
    subtitle: "知識とデザインの発信",
    description:
      "当サイトおよびSNSを通じ、デザインと論理で日本酒を紐解く独自のコンテンツを発信。感覚だけでなく、知識としても日本酒の魅力を次世代へ翻訳します。",
  },
]

export function ApproachSection() {
  return (
    <section className="px-6 py-32 md:py-40">
      <div className="mx-auto max-w-2xl">
        <FadeIn>
          <h2 className="font-sans text-xs tracking-[0.35em] text-foreground/40 uppercase">
            Approach
          </h2>
        </FadeIn>
        <div className="mt-16 space-y-20 md:mt-24 md:space-y-28">
          {approaches.map((item, index) => (
            <FadeIn key={item.number} delay={index * 0.1}>
              <article>
                <div className="flex items-baseline gap-4">
                  <span className="font-sans text-xs tracking-[0.3em] text-foreground/30">
                    {item.number}.
                  </span>
                  <h3 className="font-serif text-xl tracking-[0.12em] text-foreground md:text-2xl">
                    {item.title}
                  </h3>
                </div>
                <p className="mt-3 font-sans text-xs tracking-[0.15em] text-foreground/50">
                  {item.subtitle}
                </p>
                <p className="mt-6 font-sans text-sm leading-[2] tracking-[0.04em] text-foreground/60 md:text-base md:leading-[2]">
                  {item.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
