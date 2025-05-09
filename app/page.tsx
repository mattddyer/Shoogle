import { Button } from "@/components/ui/button"
import { ChevronRight, Download, ArrowRight, Mail, Clock, Calendar } from "lucide-react"
import Image from "next/image"
import { Testimonials } from "@/components/testimonials"
import { Services } from "@/components/services"
import { HowItWorks } from "@/components/how-it-works"
import { WhyDigitalAssets } from "@/components/why-digital-assets"
import { ClientStory } from "@/components/client-story"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BookConsultationButton } from "@/components/book-consultation-button"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      {/* Sticky CTA Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <BookConsultationButton size="lg" className="rounded-full shadow-lg bg-primary hover:bg-primary/90">
          Book Consultation
          <ChevronRight className="ml-2 h-4 w-4" />
        </BookConsultationButton>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-b from-slate-50 to-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Build Your Digital Asset Reserve with Confidence
              </h1>
              <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Expert-Guided, Seamless Crypto Investing
              </p>
              <p className="text-gray-500 md:text-lg">
                We make cryptocurrency investing effortless for busy professionals and businesses. Secure, automated,
                and customised to your goals.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <BookConsultationButton size="lg" className="bg-primary hover:bg-primary/90">
                  Book a Free Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </BookConsultationButton>
                <Button size="lg" variant="outline" className="gap-1">
                  <Download className="h-4 w-4" />
                  Download Free Guide
                </Button>
              </div>
            </div>
            <div className="mx-auto lg:mx-0 relative">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image%20%281%29.jpg-5X8uhzjIo8jULEGFbjvJJJJcd8BhEF.jpeg"
                alt="Cryptocurrency Mining Facility"
                width={600}
                height={400}
                className="rounded-lg object-cover shadow-lg"
                priority
              />
              <div className="absolute inset-0 rounded-lg bg-black/10 pointer-events-none"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Us</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                At SHOOGLE, we shake up digital asset investing. Our mission is to make crypto simple and secure for busy professionals and businesses. You own your keys; we provide the expert guidance to make it happen.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <p className="text-gray-500">
                With digital assets like Bitcoin, Ethereum, and Solana gaining credibility as reserve assets, adopted by
                companies, institutions, and countries, we provide the guidance and tools you need, whether you are an
                individual or business to build your own Strategic Digital Asset Reserve.
              </p>
              <p className="text-gray-500">
                Our team, led by <Link href="https://www.mattdyer.xyz/#about" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Matt Dyer</Link>, a former CEO of the Zilliqa Public Blockchain with firsthand experience in
                the space, collaborates with trusted platforms to deliver secure, expert-led solutions, empowering you
                to invest in digital assets with confidence.
              </p>
            </div>
            <div className="mx-auto lg:mx-0">
              <div className="relative w-full max-w-md mx-auto">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/profile-pic-fotor-2025050514244-H7mLeBGOGrmr2YmIx7vSYSQU28nE2K.png"
                  alt="Matt Dyer, Founder of SHOOGLE"
                  width={400}
                  height={400}
                  className="rounded-lg object-cover shadow-lg"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-black/60 text-white p-3 rounded backdrop-blur-sm">
                  <p className="font-medium"><Link href="https://www.mattdyer.xyz/#about" target="_blank" rel="noopener noreferrer" className="hover:underline">Matt Dyer</Link></p>
                  <p className="text-sm text-gray-200">Founder, Former CEO of Zilliqa Blockchain</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <Services />

      {/* Client Story */}
      <ClientStory />

      {/* Testimonials */}
      <Testimonials />

      {/* How It Works */}
      <HowItWorks />

      {/* Why Digital Assets */}
      <WhyDigitalAssets />

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 bg-slate-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get in Touch</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Ready to start your digital asset journey? Book a consultation or subscribe to our insights.
              </p>
            </div>
          </div>
          <div className="mx-auto max-w-5xl py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
              <div className="bg-white rounded-lg border shadow-sm p-6 h-full flex flex-col">
                <h3 className="text-xl font-bold mb-4">Schedule a Call</h3>
                <p className="text-gray-500 mb-4">
                  Book a 15-minute no obligation call to discuss how we can help you build your digital asset reserve.
                </p>
                <div className="flex items-center space-x-3 text-gray-500 mb-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  <span>Choose a convenient time</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-500 mb-6">
                  <Clock className="h-5 w-5 text-primary" />
                  <span>15-minute consultation</span>
                </div>
                <div className="mt-auto">
                  <Link href="https://cal.com/mattdyer/15min" target="_blank" rel="noopener noreferrer">
                    <Button className="w-full bg-primary hover:bg-primary/90 h-12 text-base">
                      Book a Call
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="bg-white rounded-lg border shadow-sm p-6 h-full flex flex-col">
                <h3 className="text-xl font-bold mb-4">Shoogle Crypto Insights</h3>
                <p className="text-gray-500 mb-4">
                  Stay informed with our latest insights, market analysis, and expert tips on cryptocurrency investing.
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-500 mb-6">
                  <li>Market trends and analysis</li>
                  <li>Investment strategies</li>
                  <li>Security best practices</li>
                  <li>Regulatory updates</li>
                </ul>
                <div className="mt-auto">
                  <Link href="https://shoogle-newsletter-308559.beehiiv.com/" target="_blank" rel="noopener noreferrer">
                    <Button className="w-full bg-primary hover:bg-primary/90 h-12 text-base flex items-center justify-center gap-2">
                      <Mail className="h-4 w-4" />
                      Subscribe to Our Newsletter
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
