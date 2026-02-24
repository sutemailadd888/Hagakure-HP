"use client"

import Image from "next/image"
import { FadeIn } from "@/components/fade-in"

export function HeroSection() {
  return (
    // スマホのURLバーを考慮した完璧な全画面高さ (dvh)
    <section className="relative flex min-h-[100dvh] flex-col items-center justify-center px-6 overflow-hidden">
      
      {/* 背景画像セクション */}
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

      {/* メインテキスト */}
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

      {/* 筆文字風スクロールインジケーター */}
      <FadeIn className="absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-4" delay={0.8}>
        <span className="font-serif text-[10px] tracking-[0.3em] text-[#EAEAEA]/80 uppercase">
          Scroll
        </span>
        
        {/* SVGによる筆の縦線アニメーション */}
        <div className="relative h-20 w-6">
          <svg
            viewBox="0 0 16 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-full w-full"
          >
            {/* 筆の質感を持ったパスデータ。真っ直ぐではなく、微妙な揺らぎと墨の溜まりを表現。
              strokeDasharray と strokeDashoffset をCSSで操作して「描く」動きを作る。
            */}
            <path
              d="M8.5 2C8.5 2 7.5 15 8 25C8.5 35 9 45 8.5 55C8 65 7 78 7 78"
              stroke="#EAEAEA"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="brush-stroke opacity-80"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
        </div>
      </FadeIn>

      {/* 筆で描くようなアニメーションのCSS定義 */}
      <style dangerouslySetInnerHTML={{__html: `
        .brush-stroke {
          stroke-dasharray: 80; /* パスの長さ */
          stroke-dashoffset: 80; /* 初期状態は線を隠す */
          animation: brushDraw 2.5s ease-in-out infinite;
        }

        @keyframes brushDraw {
          0% {
            stroke-dashoffset: 80;
            opacity: 0;
          }
          15% {
            opacity: 1;
          }
          50% {
            stroke-dashoffset: 0; /* 線が完全に描画された状態 */
          }
          85% {
            opacity: 1;
          }
          100% {
            stroke-dashoffset: 0;
            opacity: 0; /* 最後はフッと消える */
          }
        }
      `}} />
      
    </section>
  )
}