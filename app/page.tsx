import { Preloader } from "@/components/preloader"
import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { PhilosophySection } from "@/components/philosophy-section"
import { ApproachSection } from "@/components/approach-section"
import { SakeSection } from "@/components/sake-section"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    // 演出を邪魔しないよう、一番外側に相対位置（relative）の指定を付与しています
    <main className="relative bg-background text-foreground">
      {/* サイトを開いた瞬間のオープニング演出 */}
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
