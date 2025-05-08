import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { BookConsultationButton } from "@/components/book-consultation-button"

export function ClientStory() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Client Story: John's Journey
            </h2>
          </div>
        </div>
        <div className="mx-auto max-w-5xl py-12">
          <Card className="overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="relative aspect-square md:aspect-auto">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image%20%282%29.jpg-pSR4Er5UVRWmpEXnCwlObsOuYjm0Jc.jpeg"
                  alt="Busy professional navigating cryptocurrency investments"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="flex flex-col justify-center p-6 md:p-8">
                <p className="mb-4 text-gray-500">
                  John, a busy business owner, was curious about cryptocurrencies but overwhelmed and lacked time. We
                  provided personalised education, crafted a digital asset reserve strategy, planned his crypto estate
                  transfer, secured his assets with an applicable hardware wallet, and set up automated monthly
                  purchases of Bitcoin and Ethereum. After six months, he's confidently building his digital asset
                  reserve.
                </p>
                <BookConsultationButton className="w-full md:w-auto">Start Your Journey</BookConsultationButton>
              </CardContent>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
