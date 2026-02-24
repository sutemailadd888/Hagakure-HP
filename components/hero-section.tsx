"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { FadeIn } from "@/components/fade-in"

export function HeroSection() {
  const [isScrolled, setIsScrolled] = useState(false)

  // スクロールを検知して状態を切り替える
  useEffect(() => {
    const handleScroll = () => {
      // 10pxでもスクロールしたら、インジケーターを消す判定にする
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
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

      {/* スクロールインジケーター（スマホのみ表示、静的な美しさ、スクロールで消失） */}
      <div 
        className={`absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-4 transition-opacity duration-700 md:hidden ${
          isScrolled ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <span className="font-serif text-[10px] tracking-[0.3em] text-[#EAEAEA]/40 uppercase">
          Scroll
        </span>
        {/* 動かない、透過した極細の縦線 */}
        <div className="h-12 w-[1px] bg-[#EAEAEA]/30" />
      </div>
      
    </section>
  )
}