"use client"

import { useState, useEffect } from "react"
import { Instagram } from "lucide-react"

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false)

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
          ? "bg-background shadow-[0_4px_30px_rgba(0,0,0,0.05)]" 
          : "bg-[#1A1A1A]/20 backdrop-blur-md" 
      }`}
    >
      {/* 変更点：スマホ時の余白を「px-8」に拡大（より内側へ）。
        PC時は変わらずワイドに（md:px-12 lg:px-16）。
      */}
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-8 py-5 md:px-12 lg:px-16">
        
        {/* 文字のみのストイックなロゴ */}
        <span 
          className={`font-serif text-lg tracking-[0.2em] transition-colors duration-500 ${
            isScrolled ? "text-foreground" : "text-[#EAEAEA]"
          }`}
        >
          葉隠 <span className="text-sm tracking-[0.15em]">- HAGAKURE -</span>
        </span>
        
        {/* Instagramアイコン */}
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