import { SmoothScroll } from "@/components/smooth-scroll"
import { CustomCursor } from "@/components/custom-cursor"
import { Preloader } from "@/components/preloader"
import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { PhilosophySection } from "@/components/philosophy-section"
import { ApproachSection } from "@/components/approach-section"
import { SakeSection } from "@/components/sake-section"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <main className="relative bg-background text-foreground">
      {/* ▼ 極上のUXシステムを追加 ▼ */}
      <SmoothScroll />
      <CustomCursor />
      
      <Preloader />
      
      <SiteHeader />
      <HeroSection />
      <PhilosophySection />
      <ApproachSection />
      <SakeSection />
      <SiteFooter />
    </main>
  )
}
