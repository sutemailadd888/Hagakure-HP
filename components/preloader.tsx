"use client"

import { useState, useEffect } from "react"

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true)
  const [logoVisible, setLogoVisible] = useState(false)
  const [isFadingOut, setIsFadingOut] = useState(false)

  useEffect(() => {
    // 0.3秒後にロゴを浮かび上がらせる
    const logoTimer = setTimeout(() => {
      setLogoVisible(true)
    }, 300)

    // 2.5秒後にスミクロの背景全体をフェードアウトさせる
    const fadeOutTimer = setTimeout(() => {
      setIsFadingOut(true)
    }, 2500)

    // 3.5秒後にローディング要素を完全に削除する
    const removeTimer = setTimeout(() => {
      setIsLoading(false)
    }, 3500)

    return () => {
      clearTimeout(logoTimer)
      clearTimeout(fadeOutTimer)
      clearTimeout(removeTimer)
    }
  }, [])

  // ローディング終了後は何も表示しない
  if (!isLoading) return null

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-[#111111] transition-opacity duration-1000 ease-in-out ${
        isFadingOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <span 
        className={`font-serif text-xl tracking-[0.2em] text-[#EAEAEA] md:text-2xl transition-all duration-[1500ms] ease-out ${
          logoVisible 
            ? "translate-y-0 opacity-100 blur-0" 
            : "translate-y-4 opacity-0 blur-sm"
        }`}
      >
        葉隠 <span className="text-sm tracking-[0.15em] md:text-base">- HAGAKURE -</span>
      </span>
    </div>
  )
}
