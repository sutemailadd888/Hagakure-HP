"use client"

import { useState, useEffect } from "react"

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true)
  const [logoVisible, setLogoVisible] = useState(false)
  const [logoFadingOut, setLogoFadingOut] = useState(false)
  const [bgFadingOut, setBgFadingOut] = useState(false)

  useEffect(() => {
    // 1. 【出現】0.3秒後：ロゴがフワッと浮かび上がる（1.5秒かけて）
    const appearTimer = setTimeout(() => {
      setLogoVisible(true)
    }, 300)

    // 2. 【ロゴの溶暗】2.5秒後：ロゴだけが先に煙のように消え始める
    const logoFadeTimer = setTimeout(() => {
      setLogoFadingOut(true)
    }, 2500)

    // 3. 【背景の溶暗】3.5秒後：ロゴが消えゆく余韻の中、スミクロの背景が消え始める（2秒かけて）
    const bgFadeTimer = setTimeout(() => {
      setBgFadingOut(true)
    }, 3500)

    // 4. 【完了】6.0秒後：システムから完全に削除し、裏側の操作を可能にする
    const removeTimer = setTimeout(() => {
      setIsLoading(false)
    }, 6000)

    return () => {
      clearTimeout(appearTimer)
      clearTimeout(logoFadeTimer)
      clearTimeout(bgFadeTimer)
      clearTimeout(removeTimer)
    }
  }, [])

  if (!isLoading) return null

  return (
    <div
      // ▼ 背景のレイヤー（ロゴが消えた後、duration-[2000ms]でゆっくり透けていく）
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-[#111111] transition-opacity duration-[2000ms] ease-in-out ${
        bgFadingOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* ▼ ロゴのレイヤー（3段階の状態遷移） ▼ */}
      <span 
        className={`font-serif text-xl tracking-[0.2em] text-[#EAEAEA] md:text-2xl transition-all duration-[1500ms] ease-out ${
          !logoVisible 
            ? "translate-y-4 opacity-0 blur-sm scale-100" // 初期状態：下から
            : logoFadingOut 
              ? "translate-y-0 opacity-0 blur-md scale-105" // 消滅時：少し拡大＆ぼやけながら消える（煙の表現）
              : "translate-y-0 opacity-100 blur-0 scale-100" // 表示中：くっきり静止
        }`}
      >
        葉隠 <span className="text-sm tracking-[0.15em] md:text-base">- HAGAKURE -</span>
      </span>
    </div>
  )
}