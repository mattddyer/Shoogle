import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, BookOpen, Briefcase, Lock, CreditCard, HeadphonesIcon } from "lucide-react"

export function Services() {
  return (
    <section id="services" className="py-16 md:py-24 bg-slate-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Services</h2>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-12">
          <Card className="h-full">
            <CardHeader className="pb-2">
              <BookOpen className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Education and Personalised Guidance</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                One-on-one consultations to demystify cryptocurrencies and align investments with your wealth
                preservation goals.
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="h-full">
            <CardHeader className="pb-2">
              <Briefcase className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Investment Framework</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Tailored strategies to build your digital asset reserve, customized to your risk tolerance and goals.
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="h-full">
            <CardHeader className="pb-2">
              <Shield className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Digital Asset Estate Planning</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Guidance on incorporating cryptocurrencies into your estate plan for secure transfer to heirs.
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="h-full">
            <CardHeader className="pb-2">
              <Lock className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Securing Your Digital Assets</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Secure wallet setup and storage solutions to safeguard your cryptocurrencies from hacks or loss
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="h-full">
            <CardHeader className="pb-2">
              <CreditCard className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Purchasing Your Digital Assets</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Automated purchases of cryptocurrencies like Bitcoin and Ethereum on trusted exchanges.
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="h-full">
            <CardHeader className="pb-2">
              <HeadphonesIcon className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Ongoing Support</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Continuous guidance and support to help you navigate market changes and optimize your digital asset
                strategy.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
