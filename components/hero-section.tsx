"use client"

import Image from "next/image"
import { FadeIn } from "@/components/fade-in"

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-6 overflow-hidden">
      
      {/* 1. 背景画像セクション（最背面） */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.jpg" /* ここに使用したい画像の名前を入れます */
          alt="葉隠 -HAGAKURE-"
          fill
          className="object-cover object-center"
          priority
        />
        {/* ダークオーバーレイ（画像を暗く沈ませてトーンを統一し、文字を読ませるフィルター） */}
        <div className="absolute inset-0 bg-[#1A1A1A]/60" />
      </div>

      {/* 2. テキストコンテンツ（前面） */}
      <div className="relative z-10 flex flex-col items-center">
        <FadeIn className="text-center">
          <h1 className="font-serif text-4xl leading-relaxed tracking-[0.15em] text-[#EAEAEA] md:text-5xl lg:text-6xl drop-shadow-md">
            猪口っと一杯を、これからも。
          </h1>
        </FadeIn>
        <FadeIn className="mt-8 text-center" delay={0.3}>
          <p className="font-serif text-base tracking-[0.2em] text-[#EAEAEA]/80 md:text-lg drop-shadow">
            伝統を、モダンに再解釈する。
          </p>
        </FadeIn>
      </div>
      
    </section>
  )
}
