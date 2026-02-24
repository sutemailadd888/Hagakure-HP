"use client"

import { useState, useEffect } from "react"
import { Instagram } from "lucide-react"

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false)

  // スクロール位置を監視するシステム
  useEffect(() => {
    const handleScroll = () => {
      // 50px以上スクロールしたら状態を切り替える
      setIsScrolled(window.scrollY > 50)
    }
    // ページ読み込み時にも一度判定する
    handleScroll()
    
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-background shadow-[0_4px_30px_rgba(0,0,0,0.05)]" // スクロール時：ぼかし無し、背景色(グレー)＋薄いスモーク(影)
          : "bg-[#1A1A1A]/20 backdrop-blur-md" // ヒーロー時：薄い黒のスモーク(20%)＋ぼかし
      }`}
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5 md:px-8">
        {/* スクロールに合わせて文字色を「白」⇔「スミクロ」に滑らかに反転 */}
        <span 
          className={`font-serif text-lg tracking-[0.2em] transition-colors duration-500 ${
            isScrolled ? "text-foreground" : "text-[#EAEAEA]"
          }`}
        >
          葉隠 <span className="text-sm tracking-[0.15em]">- HAGAKURE -</span>
        </span>
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