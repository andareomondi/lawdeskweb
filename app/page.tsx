import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { UpcomingFeatures } from "@/components/upcoming-features"
import { Newsletter } from "@/components/newsletter"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Features />
      <UpcomingFeatures />
      <Newsletter />
      <Footer />
    </main>
  )
}
