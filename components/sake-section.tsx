"use client"

import { FadeIn } from "@/components/fade-in"

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
        <FadeIn>
          <h2 className="font-sans text-xs tracking-[0.35em] text-foreground/40 uppercase">
            {"This Month's Sake"}
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="mt-4 font-serif text-sm tracking-[0.15em] text-foreground/50">
            葉隠選定録：2026.03
          </p>
        </FadeIn>
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
