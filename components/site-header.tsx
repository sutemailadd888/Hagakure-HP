"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Instagram } from "lucide-react"

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false)

  // スクロール位置を監視するシステム
  useEffect(() => {
    const handleScroll = () => {
      // 50px以上スクロールしたら状態を切り替える
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
        
        {/* ロゴエリア：文字から画像（クロスフェード）へ変更 */}
        <div className="relative h-10 w-24 md:h-12 md:w-32">
          {/* 白ロゴ（ヒーロー時のみ表示：スクロールで透明になる） */}
          <Image
            src="/logo-white.png"
            alt="葉隠 -HAGAKURE-"
            fill
            className={`object-contain object-left transition-opacity duration-500 ${
              isScrolled ? "opacity-0" : "opacity-100"
            }`}
            priority
          />
          {/* 黒ロゴ（スクロール時のみ表示：スクロールでフワッと現れる） */}
          <Image
            src="/logo-black.png"
            alt="葉隠 -HAGAKURE-"
            fill
            className={`object-contain object-left transition-opacity duration-500 ${
              isScrolled ? "opacity-100" : "opacity-0"
            }`}
            priority
          />
        </div>

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