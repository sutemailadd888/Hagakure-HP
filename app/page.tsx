import { SmoothScroll } from "@/components/smooth-scroll"
import { CustomCursor } from "@/components/custom-cursor"
import { Preloader } from "@/components/preloader"
import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { PhilosophySection } from "@/components/philosophy-section"
import { ApproachSection } from "@/components/approach-section"
import { SakeSection } from "@/components/sake-section"
// ▼ 新しくインポート ▼
import { DirectorsNoteSection } from "@/components/directors-note-section"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <main className="relative bg-background text-foreground">
      <SmoothScroll />
      <CustomCursor />
      <Preloader />
      
      <SiteHeader />
      <HeroSection />
      <PhilosophySection />
      <ApproachSection />
      <SakeSection />
      
      {/* ▼ 特集の後に、静かに編集後記を添える ▼ */}
      <DirectorsNoteSection />
      
      <SiteFooter />
    </main>
  )
}
