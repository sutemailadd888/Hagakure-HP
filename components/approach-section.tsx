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
    <section className="px-6 py-32 md:py-48 bg-background">
      <div className="mx-auto max-w-2xl">
        
        <FadeIn>
          <h2 className="font-sans text-xs tracking-[0.35em] text-foreground/40 uppercase">
            Approach
          </h2>
        </FadeIn>

        <div className="mt-16 space-y-16 md:mt-24 md:space-y-24">
          {approaches.map((item, index) => (
            <FadeIn key={item.number} delay={index * 0.1}>
              {/* ▼ 修正箇所：index（順番）を使って、最初（0番目）以外の時だけ線と余白を追加する ▼ */}
              <article 
                className={
                  index === 0 
                    ? "" // 最初の要素は線も上の余白もなし（スッキリさせる）
                    : "border-t border-foreground/10 pt-8 md:pt-12" // 2つ目以降にヘアラインと余白を追加
                }
              >
                
                <div className="flex flex-col gap-2">
                  <span className="font-sans text-[10px] tracking-[0.3em] text-foreground/40 uppercase">
                    Approach Nº {item.number}
                  </span>
                  
                  <div className="flex flex-col md:flex-row md:items-baseline md:gap-6 mt-2">
                    <h3 className="font-serif text-2xl tracking-[0.12em] text-foreground md:text-3xl">
                      {item.title}
                    </h3>
                    <p className="mt-2 font-serif text-sm tracking-[0.15em] text-foreground/60 md:mt-0">
                      — {item.subtitle}
                    </p>
                  </div>
                </div>

                <p className="mt-6 font-serif text-sm leading-[2.2] tracking-[0.08em] text-foreground/70 md:mt-8 md:text-base md:leading-[2.2]">
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