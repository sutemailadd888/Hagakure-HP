"use client"

import { useState, useEffect } from "react"

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true)
  const [logoVisible, setLogoVisible] = useState(false)
  const [isFadingOut, setIsFadingOut] = useState(false)

  useEffect(() => {
    // 1. 【出現】0.3秒後にロゴのアニメーション（1.5秒間）がスタート
    const logoTimer = setTimeout(() => {
      setLogoVisible(true)
    }, 300)

    // 2. 【静寂と溶暗】2.8秒後（ロゴが完全に出現して1秒後）に、全体をゆっくりフェードアウトさせる
    const fadeOutTimer = setTimeout(() => {
      setIsFadingOut(true)
    }, 2800)

    // 3. 【完了】5秒後（フェードアウトが完全に終わった後）にシステムから削除
    const removeTimer = setTimeout(() => {
      setIsLoading(false)
    }, 5000)

    return () => {
      clearTimeout(logoTimer)
      clearTimeout(fadeOutTimer)
      clearTimeout(removeTimer)
    }
  }, [])

  if (!isLoading) return null

  return (
    <div
      // ▼ 修正：duration-1000（1秒）から duration-[2000ms]（2秒）へ変更。
      // これにより、背後のヒーローセクションが「パッ」と出るのではなく、
      // 霧が晴れるように「ゆっくりと」透けて見えるようになります。
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-[#111111] transition-opacity duration-[2000ms] ease-in-out ${
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