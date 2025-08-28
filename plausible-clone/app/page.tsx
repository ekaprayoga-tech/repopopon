import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import Footer from "@/components/footer"
import Review from "@/components/review"
import PricingSection from "@/components/price"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <Review></Review>
        <PricingSection></PricingSection>
      </main>
      <Footer />
    </div>
  )
}
