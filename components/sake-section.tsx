"use client"

import { FadeIn } from "@/components/fade-in"

// v0が生成した美しいデータ構造をそのまま維持
const sakeList = [
  {
    number: "01",
    name: "一ノ蔵 ひめぜん",
    region: "宮城県",
    tags: ["#極甘口", "#アルコール8%", "#白ワインのような酸"],
  },
  {
    number: "02",
    name: "春鹿 純米超辛口",
    region: "奈良県",
    tags: ["#超辛口", "#キレ味", "#ドライ"],
  },
  {
    number: "03",
    name: "奥播磨 山廃純米生",
    region: "兵庫県",
    tags: ["#モダン山廃", "#米の旨味", "#ライチ"],
  },
  {
    number: "04",
    name: "達磨正宗 熟成三年",
    region: "岐阜県",
    tags: ["#3年熟成", "#ナッツ", "#紹興酒"],
  },
]

export function SakeSection() {
  return (
    <section className="px-6 py-32 md:py-40">
      <div className="mx-auto max-w-2xl">
        
        {/* ▼ 新しいタイポグラフィ（左揃えでリストと軸を合わせる） ▼ */}
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
            {/* 左揃えのレイアウトに合わせ、ダッシュで美しくインデント（字下げ）する表現 */}
            <span className="h-[1px] w-8 bg-foreground/30 md:w-12"></span>
            春の四篇。
            <span className="h-[1px] w-8 bg-foreground/30 md:w-12"></span>
          </h2>
        </FadeIn>
        {/* ▲ ここまで ▲ */}

        {/* ▼ v0の完璧なリストUIをそのまま復元 ▼ */}
        <div className="mt-16 space-y-12 md:mt-20 md:space-y-16">
          {sakeList.map((sake, index) => (
            <FadeIn key={sake.number} delay={index * 0.08}>
              <article className="group">
                <div className="flex items-baseline gap-4">
                  <span className="font-sans text-xs tracking-[0.3em] text-foreground/25">
                    {sake.number}.
                  </span>
                  <div>
                    <h3 className="font-serif text-lg tracking-[0.1em] text-foreground md:text-xl">
                      {sake.name}
                    </h3>
                    <p className="mt-1 font-sans text-xs tracking-[0.15em] text-foreground/40">
                      {sake.region}
                    </p>
                  </div>
                </div>
                {/* 絶妙な余白（pl-8）によるインデント */}
                <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 pl-8">
                  {sake.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-sans text-xs tracking-[0.08em] text-foreground/35"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
        
      </div>
    </section>
  )
}
