import { Instagram } from "lucide-react"

export function SiteHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5 md:px-8">
        <span className="font-serif text-lg tracking-[0.2em] text-foreground">
          葉隠 <span className="text-sm tracking-[0.15em]">- HAGAKURE -</span>
        </span>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="text-foreground/60 transition-colors hover:text-foreground"
        >
          <Instagram className="h-5 w-5" strokeWidth={1.5} />
        </a>
      </div>
    </header>
  )
}
