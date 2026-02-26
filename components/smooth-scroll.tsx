"use client"

import { useEffect } from "react"
import Lenis from "lenis"

export function SmoothScroll() {
  useEffect(() => {
    // 慣性スクロールの設定（durationが長さ、easingが滑らかさのカーブ）
    const lenis = new Lenis({
      duration: 1.5, // 数字を大きくすると、より氷のように滑ります
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })

    // アニメーションを画面の描画に合わせて更新し続けるループ処理
    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  // 裏側で動くシステムなので、画面には何も表示（レンダリング）しません
  return null
}
