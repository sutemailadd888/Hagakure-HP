"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Instagram } from "lucide-react"

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false)

  // スクロール位置を監視するシステム
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-background shadow-[0_4px_30px_rgba(0,0,0,0.05)]" // スクロール時：ぼかし無し、グレー背景
          : "bg-[#1A1A1A]/20 backdrop-blur-md" // ヒーロー時：スモーク＋ぼかし
      }`}
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4 md:px-8">
        
        {/* ▼ ロゴマーク（画像） ＆ ロゴタイプ（文字）のハイブリッド構成 ▼ */}
        <div className="flex items-center gap-3 md:gap-4">
          
          {/* 1. 画像ロゴエリア（スクロールで白⇔黒にクロスフェード） */}
          <div className="relative h-8 w-8 shrink-0 md:h-10 md:w-10">
            <Image
              src="/logo-white.png"
              alt="葉隠 ロゴマーク"
              fill
              className={`object-contain object-center transition-opacity duration-500 ${
                isScrolled ? "opacity-0" : "opacity-100"
              }`}
              priority
            />
            <Image
              src="/logo-black.png"
              alt="葉隠 ロゴマーク"
              fill
              className={`object-contain object-center transition-opacity duration-500 ${
                isScrolled ? "opacity-100" : "opacity-0"
              }`}
              priority
            />
          </div>

          {/* 2. テキストロゴエリア（スクロールで白⇔スミクロに色反転） */}
          <span 
            className={`font-serif text-base tracking-[0.2em] transition-colors duration-500 md:text-lg ${
              isScrolled ? "text-foreground" : "text-[#EAEAEA]"
            }`}
          >
            葉隠 <span className="text-xs tracking-[0.15em] md:text-sm">- HAGAKURE -</span>
          </span>
          
        </div>
        {/* ▲ ここまで ▲ */}

        {/* Instagramアイコンエリア */}
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className={`transition-colors duration-500 ${
            isScrolled 
              ? "text-foreground/60 hover:text-foreground" 
              : "text-[#EAEAEA]/80 hover:text-[#EAEAEA]"
          }`}
        >
          <Instagram className="h-5 w-5" strokeWidth={1.5} />
        </a>
      </div>
    </header>
  )
}