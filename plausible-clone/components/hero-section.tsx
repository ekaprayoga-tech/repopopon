import { Button } from "@/components/ui/button"
import Image from "next/image"


export function HeroSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
          Easy to use and privacy-friendly <span className="text-primary">Google Analytics alternative</span>
        </h1>

        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          Plausible is powerful, intuitive and lightweight analytics. No cookies and insights. Made and hosted in the
          EU, powered by European-owned infrastructure. 🇪🇺
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="px-8 py-3 text-base">
            Get started
          </Button>
          <Button variant="outline" size="lg" className="px-8 py-3 text-base bg-transparent">
            Live demo
          </Button>
        </div>
        </div>
      <div className="mt-16 mb-0 flex justify-center items-center">
       <Image
         src={"https://plausible.io/assets/images/privacy-focused-web-analytics.png"}
         alt="popon ganteng"
         width={1000}
         height={1000}
        />
      </div>
    </section>
  );
}
