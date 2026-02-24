"use client"

import Image from "next/image"
import { FadeIn } from "@/components/fade-in"

export function HeroSection() {
  return (
    // min-h-screen を min-h-[100dvh] に変更（スマホのURLバーを考慮した完璧な全画面）
    <section className="relative flex min-h-[100dvh] flex-col items-center justify-center px-6 overflow-hidden">
      
      {/* 背景画像セクション（最背面） */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.jpg" 
          alt="葉隠 -HAGAKURE-"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-[#1A1A1A]/60" />
      </div>

      {/* テキストコンテンツ（前面） */}
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

      {/* スクロールインジケーター（画面下部の縦線ギミック） */}
      <FadeIn className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3" delay={0.8}>
        <span className="font-serif text-[10px] tracking-[0.3em] text-[#EAEAEA]/70 uppercase">
          Scroll
        </span>
        {/* 縦線のレール（薄いグレー） */}
        <div className="relative h-16 w-[1px] overflow-hidden bg-[#EAEAEA]/20">
          {/* 動く光の線（白い線が上から下へ流れる） */}
          <div className="absolute left-0 top-0 h-full w-full bg-[#EAEAEA] animate-[scroll_2s_ease-in-out_infinite]" />
        </div>
      </FadeIn>

      {/* 縦線アニメーション用のCSS */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scroll {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
      `}} />
      
    </section>
  )
}