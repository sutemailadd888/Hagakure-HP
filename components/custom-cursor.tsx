"use client"

import { useEffect, useRef, useState } from "react"

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const [isHovering, setIsHovering] = useState(false)
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    // スマホやタブレット（タッチ操作）の時は、カスタムカーソルを出さない
    if (window.matchMedia("(pointer: coarse)").matches) return
    setIsDesktop(true)

    // マウスの動きに合わせてドットの座標を更新（Reactの再描画を使わず直接DOMを動かす超高速処理）
    const updatePosition = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`
      }
    }

    // リンク(a)やボタン(button)に重なったときの判定
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.closest("a") || target.closest("button")) {
        setIsHovering(true)
      } else {
        setIsHovering(false)
      }
    }

    window.addEventListener("mousemove", updatePosition)
    window.addEventListener("mouseover", handleMouseOver)

    // PC表示時のみ、デフォルトの矢印カーソルを消す指示（globals.cssと連動）
    document.documentElement.classList.add("hide-default-cursor")

    return () => {
      window.removeEventListener("mousemove", updatePosition)
      window.removeEventListener("mouseover", handleMouseOver)
      document.documentElement.classList.remove("hide-default-cursor")
    }
  }, [])

  if (!isDesktop) return null

  return (
    <div
      ref={cursorRef}
      // mix-blend-difference: 背景が白なら黒ドットに、背景が黒なら白ドットに自動で反転する最高級のモード演出
      className={`pointer-events-none fixed left-0 top-0 z-[9999] rounded-full bg-white mix-blend-difference ease-out ${
        isHovering ? "h-12 w-12 opacity-100" : "h-2 w-2 opacity-100"
      }`}
      style={{
        transform: "translate3d(-100px, -100px, 0)", // 初期位置を画面外に
        // ここで「フワッとした遅れ（0.25秒）」と「拡大の滑らかさ」を設定
        transition: "transform 0.15s ease-out, width 0.3s ease-out, height 0.3s ease-out, opacity 0.3s ease-out",
      }}
    />
  )
}
