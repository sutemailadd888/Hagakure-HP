import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { PhilosophySection } from "@/components/philosophy-section"
import { ApproachSection } from "@/components/approach-section"
import { SakeSection } from "@/components/sake-section"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <main className="bg-background text-foreground">
      <SiteHeader />
      <HeroSection />
      <PhilosophySection />
      <ApproachSection />
      <SakeSection />
      <SiteFooter />
    </main>
  )
}
