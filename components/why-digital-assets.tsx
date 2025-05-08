import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, TrendingUp } from "lucide-react"
import Image from "next/image"

export function WhyDigitalAssets() {
  return (
    <section id="why-digital-assets" className="py-16 md:py-24 bg-slate-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Why Digital Assets?</h2>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-4">
            <p className="text-gray-500">
              Digital Assets or Cryptocurrencies like Bitcoin and Ethereum are increasingly seen as hedges against
              inflation and stores of value. With numerous countries and companies holding digital assets as treasury
              reserves, they're becoming a proven strategy for long-term wealth preservation.
            </p>
            <Card className="overflow-hidden">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  Proven Returns
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">
                  Investing $200/month in Bitcoin from May 2020 to April 2025 ($12,000 total) would yield 0.31736 BTC,
                  worth $30,199.10 at $95,157.33 per BTC—a 151.66% return.
                </p>
              </CardContent>
            </Card>
            <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-md text-amber-800 text-sm">
              <p className="font-medium">Important Risk Disclosure:</p>
              <p>
                Cryptocurrency is a highly volatile asset class without government backed protections. Past performance
                does not guarantee future results, and your invested capital is at risk.
              </p>
            </div>
            <p className="text-gray-500">
              Join the growing number of professionals and businesses building their Strategic Digital Asset Reserve
              with us.
            </p>
            <Button variant="outline" className="gap-1">
              <Download className="h-4 w-4" />
              Download Our Free Crypto Investing Guide
            </Button>
          </div>
          <div className="mx-auto lg:mx-0">
            <div className="relative rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image%20%284%29.jpg-6IIFb5ocJAex6UxkO6xpbnvzSLYlYG.jpeg"
                alt="Digital asset growth chart showing upward trends"
                width={500}
                height={400}
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
