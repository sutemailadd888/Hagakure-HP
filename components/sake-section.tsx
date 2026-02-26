"use client"

import { FadeIn } from "@/components/fade-in"

// Instagramのコピー（description）を追加し、データ構造を拡張
const sakeList = [
  {
    number: "01",
    name: "一ノ蔵 ひめぜん",
    region: "宮城県",
    tags: ["#極甘口", "#アルコール8%", "#白ワインのような酸"],
    description: "まるで完熟した果実。白ワインを思わせる甘酸っぱさが、春の微睡（まどろみ）を優しく溶かしていく。",
  },
  {
    number: "02",
    name: "春鹿 純米超辛口",
    region: "奈良県",
    tags: ["#超辛口", "#キレ味", "#ドライ"],
    description: "凛とした春の朝気。研ぎ澄まされたキレとドライな喉越しが、背筋を静かに正してくれる。",
  },
  {
    number: "03",
    name: "奥播磨 山廃純米生",
    region: "兵庫県",
    tags: ["#モダン山廃", "#米の旨味", "#ライチ"],
    description: "野性味と洗練の共存。力強い米の旨味と鮮烈な酸が、生命力あふれる春の息吹を感じさせる。",
  },
  {
    number: "04",
    name: "達磨正宗 熟成三年",
    region: "岐阜県",
    tags: ["#3年熟成", "#ナッツ", "#紹興酒"],
    description: "時の蓄積を味わう。ナッツやカラメルのような深く複雑な熟成香が、春の夜長に思索をもたらす。",
  },
]

export function SakeSection() {
  return (
    <section className="px-6 py-32 md:py-48 bg-background">
      <div className="mx-auto max-w-2xl">
        
        {/* ▼ タイポグラフィ（左揃えで見出しを構築） ▼ */}
        <FadeIn>
          <div className="flex flex-col">
            <span className="font-sans text-xs tracking-[0.35em] text-foreground/50 uppercase">
              FEATURE Nº 01
            </span>
            <span className="mt-2 font-sans text-[10px] tracking-[0.25em] text-foreground/40">
              2026.03
            </span>
          </div>
        </FadeIn>
        
        <FadeIn delay={0.1}>
          <h2 className="mt-12 flex items-center gap-6 font-serif text-2xl tracking-[0.15em] text-foreground md:text-3xl">
            <span className="h-[1px] w-8 bg-foreground/30 md:w-12"></span>
            春の四篇。
            <span className="h-[1px] w-8 bg-foreground/30 md:w-12"></span>
          </h2>
        </FadeIn>

        {/* ▼ リストUI（文章を追加し、間隔を少し広げる） ▼ */}
        {/* 以前の space-y-12 から space-y-16 に広げ、呼吸の余白を作りました */}
        <div className="mt-16 space-y-16 md:mt-24 md:space-y-24">
          {sakeList.map((sake, index) => (
            <FadeIn key={sake.number} delay={index * 0.1}>
              <article className="group">
                
                {/* 1. 番号と名前のライン */}
                <div className="flex items-baseline gap-4">
                  <span className="font-sans text-xs tracking-[0.3em] text-foreground/30">
                    {sake.number}.
                  </span>
                  <div>
                    <h3 className="font-serif text-xl tracking-[0.1em] text-foreground md:text-2xl">
                      {sake.name}
                    </h3>
                    <p className="mt-1 font-sans text-xs tracking-[0.15em] text-foreground/40">
                      {sake.region}
                    </p>
                  </div>
                </div>

                {/* 2. タグのライン（pl-8で字下げ） */}
                <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 pl-8">
                  {sake.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-sans text-xs tracking-[0.08em] text-foreground/40"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* 3. 詩的なレビュー文（pl-8で字下げし、明朝体で美しく流す） */}
                <p className="mt-5 pl-8 font-serif text-sm leading-[2.2] tracking-[0.08em] text-foreground/70 md:text-base md:leading-[2.2]">
                  {sake.description}
                </p>

              </article>
            </FadeIn>
          ))}
        </div>
        
      </div>
    </section>
  )
}