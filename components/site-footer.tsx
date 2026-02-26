import { Instagram } from "lucide-react"

export function SiteFooter() {
  return (
    // 上部に極細の線（border-t）を引き、そこから広大な余白（py-32 md:py-48）を取る
    <footer className="border-t border-foreground/5 bg-background px-6 py-32 md:py-48">
      <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
        
        {/* ▼ ブランドロゴ（ヘッダーと呼応する明朝体） ▼ */}
        <span className="font-serif text-lg tracking-[0.2em] text-foreground md:text-xl">
          葉隠 <span className="text-sm tracking-[0.15em] md:text-base">- HAGAKURE -</span>
        </span>
        
        {/* ▼ 店舗情報（無機質なゴシック体で、記号のように扱う） ▼ */}
        <div className="mt-12 font-sans text-[10px] leading-[2.2] tracking-[0.15em] text-foreground/50 md:mt-16 md:text-xs">
          <p className="tracking-[0.2em] text-foreground/70 uppercase">
            Blooming Kitchen
          </p>
          <p className="mt-4">
            ADD. 大阪市北区大深町6-38<br />
            グラングリーン大阪北館 3階 JAM BASE内
          </p>
          <p className="mt-2">
            OPEN. 10:00 - 20:00<br />
            CLOSE. 不定休
          </p>
        </div>

        {/* ▼ Instagramへの美しい導線 ▼ */}
        <a
          href="https://www.instagram.com/blooming_kitchen0906?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" // 実際のInstagramのURLに差し替えてください
          target="_blank"
          rel="noopener noreferrer"
          className="mt-16 inline-flex items-center gap-3 border-b border-foreground/20 pb-1 font-sans text-[10px] tracking-[0.2em] text-foreground/50 uppercase transition-all duration-500 hover:border-foreground hover:text-foreground md:text-xs"
        >
          <Instagram className="h-3 w-3 md:h-4 md:w-4" strokeWidth={1.5} />
          <span>Official Instagram</span>
        </a>

        {/* ▼ コピーライト（最も小さく、控えめに） ▼ */}
        <p className="mt-24 font-sans text-[9px] tracking-[0.3em] text-foreground/30 uppercase md:mt-32 md:text-[10px]">
          &copy; 2026 HAGAKURE
        </p>

      </div>
    </footer>
  )
}