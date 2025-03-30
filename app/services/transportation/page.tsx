import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Car, Bus, Plane } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import BookingForm from "@/components/booking-form"
import TouristHomeFooter from "@/components/tourist-home-footer"

export default function TransportationPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full h-[60vh]">
          <Image
            src="https://mj-ahmad.github.io/mja2025/img/transportation00.png"
            alt="Transportation Services"
            fill
            className="object-cover brightness-75"
            priority
          />
          <div className="absolute inset-0 flex items-center">
            <div className="container">
              <div className="max-w-2xl space-y-4 animate-fade-up">
                <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                  Seamless Transportation Services
                </h1>
                <p className="text-lg md:text-xl text-white/90">
                  Travel in comfort and style with our premium transportation options to and around Cox's Bazar
                </p>
                <Button size="lg" className="mt-4 shadow-lg" asChild>
                  <a href="#booking">Book Now</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                  Our Transportation
                </div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Convenient & Reliable Travel Options</h2>
                <p className="text-muted-foreground text-lg">
                  At TRUSTED-ALLY, we understand that comfortable transportation is the foundation of an enjoyable trip.
                  We offer a variety of transportation services tailored to your needs, ensuring you arrive safely and
                  on time to experience the beauty of Cox's Bazar.
                </p>
                <div className="grid grid-cols-1 gap-4">
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <Car className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium">Private Cars</h3>
                      <p className="text-muted-foreground">
                        Luxury and economy vehicles for personalized, comfortable travel
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <Bus className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium">Group Shuttles</h3>
                      <p className="text-muted-foreground">
                        Comfortable buses and shuttles for larger groups and families
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <Plane className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium">Airport Transfers</h3>
                      <p className="text-muted-foreground">Hassle-free pickups and drop-offs at Cox's Bazar Airport</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative rounded-xl overflow-hidden h-[400px]">
                <Image
                  src="https://mj-ahmad.github.io/mja2025/img/transportation00.png"
                  alt="Transportation Services"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Transportation Options */}
        <section className="py-16 bg-muted/30">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
                Transport Options
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Choose Your Travel Style</h2>
              <p className="text-muted-foreground text-lg">
                From budget-friendly to luxury - we have transport solutions for every traveler's needs
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <Image
                    src="https://mj-ahmad.github.io/mja2025/img/transportation01.png"
                    alt="Economy Transport"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>Economy Transport</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-primary" />
                      <span>Shared airport transfers</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-primary" />
                      <span>Public bus service to attractions</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-primary" />
                      <span>Cost-effective transportation</span>
                    </li>
                  </ul>
                  <div className="mt-4">
                    <span className="text-2xl font-bold">৳1,999</span>
                    <span className="text-muted-foreground ml-1">/ day</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <a href="#booking">Book Now</a>
                  </Button>
                </CardFooter>
              </Card>

              <Card className="overflow-hidden border-primary hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <Image
                    src="https://mj-ahmad.github.io/mja2025/img/transportation02.png"
                    alt="Standard Transport"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-2 right-2">
                    <span className="bg-primary text-white text-xs px-2 py-1 rounded-full">Popular</span>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle>Standard Transport</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-primary" />
                      <span>Private sedan car service</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-primary" />
                      <span>Daily transportation to popular spots</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-primary" />
                      <span>Professional drivers</span>
                    </li>
                  </ul>
                  <div className="mt-4">
                    <span className="text-2xl font-bold">৳3,499</span>
                    <span className="text-muted-foreground ml-1">/ day</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" asChild>
                    <a href="#booking">Book Now</a>
                  </Button>
                </CardFooter>
              </Card>

              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <Image
                    src="https://mj-ahmad.github.io/mja2025/img/transportation03.png"
                    alt="Premium Transport"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>Premium Transport</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-primary" />
                      <span>Luxury SUV or car with chauffeur</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-primary" />
                      <span>24/7 on-demand transportation</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-primary" />
                      <span>Complimentary refreshments</span>
                    </li>
                  </ul>
                  <div className="mt-4">
                    <span className="text-2xl font-bold">৳5,999</span>
                    <span className="text-muted-foreground ml-1">/ day</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <a href="#booking">Book Now</a>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* Booking Section */}
        <section id="booking" className="py-16 bg-white">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
                Book Your Transport
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Ready to Book Your Ride?</h2>
              <p className="text-muted-foreground text-lg">
                Complete the form below to reserve your preferred transportation option
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <BookingForm serviceType="transportation" />
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-muted/30">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary mb-4">FAQs</div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Frequently Asked Questions</h2>
              <p className="text-muted-foreground text-lg">
                Everything you need to know about our transportation services
              </p>
            </div>

            <div className="max-w-3xl mx-auto grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>What types of vehicles are available?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We offer a wide range of vehicles including sedans, SUVs, vans, and mini-buses. All our vehicles are
                    well-maintained, air-conditioned, and operated by professional drivers.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>How far in advance should I book transportation?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We recommend booking at least 48 hours in advance to ensure availability, especially during peak
                    tourist seasons. For airport transfers, booking a week in advance is ideal.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Are your drivers familiar with Cox's Bazar?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Yes, all our drivers are locals with extensive knowledge of Cox's Bazar and surrounding areas. They
                    can provide recommendations and information about local attractions.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
          <p className="text-xs text-center text-muted-foreground">
            For any assistance, please contact our customer support at t-ally@outlook.com or +880 1892051303
          </p>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-white">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for an Unforgettable Journey?</h2>
              <p className="text-xl mb-8 text-white/80">
                Let us take care of your transportation needs while you focus on creating memories
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="#booking">Book Transport Now</Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20" asChild>
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <TouristHomeFooter />
    </div>
  )
}

