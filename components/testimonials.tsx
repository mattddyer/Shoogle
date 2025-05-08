import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Quote } from "lucide-react"

export function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Our Clients Say</h2>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
          <Card className="overflow-hidden">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage src="/professional-man.png" alt="Ewan Forrest" />
                  <AvatarFallback>EF</AvatarFallback>
                </Avatar>
                <div className="grid gap-1">
                  <div className="font-semibold">Ewan F</div>
                  <div className="text-sm text-gray-500">VP Operations</div>
                </div>
              </div>
              <div className="mt-4 flex">
                <Quote className="h-8 w-8 text-gray-300" />
                <p className="ml-2 text-gray-500">
                  Shoogle simplified crypto investing, making it easy to understand. Initially hesitant to invest, I
                  benefited from their tailored strategy that aligned with my risk tolerance, along with a secure setup
                  for my crypto portfolio, giving me confidence to build a more diversified reserve. Matt's extensive
                  experience inspires trust and reassurance.
                </p>
              </div>
            </CardContent>
          </Card>
          <Card className="overflow-hidden">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage src="/professional-doctor.png" alt="John Conquest" />
                  <AvatarFallback>JC</AvatarFallback>
                </Avatar>
                <div className="grid gap-1">
                  <div className="font-semibold">John C</div>
                  <div className="text-sm text-gray-500">Managing Director</div>
                </div>
              </div>
              <div className="mt-4 flex">
                <Quote className="h-8 w-8 text-gray-300" />
                <p className="ml-2 text-gray-500">
                  As a MD, I lacked the time to navigate cryptocurrency investments. Shoogle's automated crypto
                  purchasing methodology and comprehensive estate planning services have streamlined my portfolio
                  growth, saved me valuable time, and provided peace of mind that my assets are secure. Matt and the
                  team's professionalism is truly world class.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
