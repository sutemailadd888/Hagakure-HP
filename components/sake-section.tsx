"use client"

import { FadeIn } from "@/components/fade-in"

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

        {/* ▼ リストUI ▼ */}
        <div className="mt-16 space-y-16 md:mt-24 md:space-y-24">
          {sakeList.map((sake, index) => (
            <FadeIn key={sake.number} delay={index * 0.1}>
              <article className="group">
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
                <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 pl-8">
                  {sake.tags.map((tag) => (
                    <span key={tag} className="font-sans text-xs tracking-[0.08em] text-foreground/40">
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="mt-5 pl-8 font-serif text-sm leading-[2.2] tracking-[0.08em] text-foreground/70 md:text-base md:leading-[2.2]">
                  {sake.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>

        {/* ▼ TASTING MAP (マトリクス) ▼ */}
        <div className="mt-32 border-t border-foreground/10 pt-24 md:mt-40 md:pt-32">
          <FadeIn>
            {/* タイトルエリア */}
            <div className="flex flex-col items-center text-center">
              <span className="font-sans text-xs tracking-[0.35em] text-foreground/40 uppercase">
                Tasting Map
              </span>
              <span className="mt-4 font-serif text-sm tracking-[0.15em] text-foreground/60">
                葉隠の日本酒マトリクス
              </span>
            </div>

            {/* マトリクス描画エリア（CSSによる図形構築） */}
            <div className="relative mx-auto mt-24 h-64 w-64 md:h-80 md:w-80">
              
              {/* 軸線（十字の1pxライン） */}
              <div className="absolute left-0 top-1/2 h-[1px] w-full -translate-y-1/2 bg-foreground/20"></div>
              <div className="absolute left-1/2 top-0 h-full w-[1px] -translate-x-1/2 bg-foreground/20"></div>

              {/* 軸のラベル（上下左右） */}
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 font-serif text-[10px] tracking-[0.1em] text-foreground/50 md:text-xs">
                香りが高い
              </span>
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 font-serif text-[10px] tracking-[0.1em] text-foreground/50 md:text-xs">
                香りが低い
              </span>
              <span className="absolute -left-14 top-1/2 -translate-y-1/2 font-serif text-[10px] tracking-[0.1em] text-foreground/50 md:-left-16 md:text-xs">
                味が淡い
              </span>
              <span className="absolute -right-14 top-1/2 -translate-y-1/2 font-serif text-[10px] tracking-[0.1em] text-foreground/50 md:-right-16 md:text-xs">
                味が濃い
              </span>

              {/* ▼ プロット点（4つのお酒の座標配置） ▼ */}
              
              {/* 01. ひめぜん (左上) */}
              <div className="absolute left-1/4 top-1/4 -translate-x-1/2 -translate-y-1/2 text-center">
                <div className="mx-auto h-1 w-1 rounded-full bg-foreground/40"></div>
                <span className="mt-3 block font-serif text-[10px] tracking-[0.1em] text-foreground/80 md:text-xs">
                  01. ひめぜん
                </span>
              </div>
              
              {/* 03. 達磨正宗 (右上) */}
              <div className="absolute right-1/4 top-1/4 -translate-y-1/2 translate-x-1/2 text-center">
                <div className="mx-auto h-1 w-1 rounded-full bg-foreground/40"></div>
                <span className="mt-3 block font-serif text-[10px] tracking-[0.1em] text-foreground/80 md:text-xs">
                  03. 達磨正宗
                </span>
              </div>
              
              {/* 02. 春鹿 (左下) */}
              <div className="absolute bottom-1/4 left-1/4 -translate-x-1/2 translate-y-1/2 text-center">
                <div className="mx-auto h-1 w-1 rounded-full bg-foreground/40"></div>
                <span className="mt-3 block font-serif text-[10px] tracking-[0.1em] text-foreground/80 md:text-xs">
                  02. 春鹿
                </span>
              </div>
              
              {/* 04. 奥播磨 (右下) */}
              <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 text-center">
                <div className="mx-auto h-1 w-1 rounded-full bg-foreground/40"></div>
                <span className="mt-3 block font-serif text-[10px] tracking-[0.1em] text-foreground/80 md:text-xs">
                  04. 奥播磨
                </span>
              </div>

            </div>
          </FadeIn>
        </div>
        
      </div>
    </section>
  )
}