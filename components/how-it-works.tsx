import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageSquare, ShieldCheck, TrendingUp } from "lucide-react"

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How It Works</h2>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 md:grid-cols-3 gap-6 py-12">
          <Card className="h-full">
            <CardHeader className="text-center pb-2">
              <div className="mx-auto bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <MessageSquare className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="flex items-center justify-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white">1</span>
                Consultation
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-500">
                Meet with our experts to assess your goals and create a personalized crypto strategy.
              </p>
            </CardContent>
          </Card>
          <Card className="h-full">
            <CardHeader className="text-center pb-2">
              <div className="mx-auto bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <ShieldCheck className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="flex items-center justify-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white">2</span>
                Setup
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-500">Buy and secure your assets.</p>
            </CardContent>
          </Card>
          <Card className="h-full">
            <CardHeader className="text-center pb-2">
              <div className="mx-auto bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="flex items-center justify-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white">3</span>
                Growth
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-500">
                Monitor your reserve with ongoing support and estate planning for long-term success.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
