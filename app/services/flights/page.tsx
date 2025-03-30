import Image from "next/image"
import Link from "next/link"
import { Plane, Calendar, Luggage } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import FlightBookingForm from "@/components/flight-booking-form"
import FlightSchedule from "@/components/flight-schedule"

export default function FlightsPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh]">
        <Image
          src="https://mj-ahmad.github.io/mja2025/img/flights01.png"
          alt="Flight Services"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 flex items-center">
          <div className="container">
            <div className="max-w-2xl space-y-4 animate-fade-up">
              <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                Direct Flights to Cox's Bazar
              </h1>
              <p className="text-lg md:text-xl text-white/90">
                Book your flight to the world's longest sea beach with our exclusive airline partners
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
                Our Flight Services
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Fly to Cox's Bazar with Ease</h2>
              <p className="text-muted-foreground text-lg">
                TRUSTED-ALLY partners with major airlines to offer you the best flight options to Cox's Bazar. Whether
                you're traveling directly from Dhaka or connecting from Sylhet or Saidpur, we have multiple daily
                flights to suit your schedule. Enjoy competitive prices, flexible booking options, and seamless travel
                experience.
              </p>
              <div className="grid grid-cols-1 gap-4">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Plane className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Multiple Airlines</h3>
                    <p className="text-muted-foreground">Choose from Biman Bangladesh, US-Bangla, Novoair, and more</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Calendar className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Flexible Scheduling</h3>
                    <p className="text-muted-foreground">Multiple daily flights with flexible booking options</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Luggage className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Baggage Included</h3>
                    <p className="text-muted-foreground">All tickets include checked baggage allowance</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative rounded-xl overflow-hidden h-[400px]">
              <Image src="https://mj-ahmad.github.io/mja2025/img/flights00.png" alt="Flight Services" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Flight Schedule Section */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
              Flight Schedules
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Complete Flight Timetable</h2>
            <p className="text-muted-foreground text-lg">
              Browse our comprehensive flight schedules to find the perfect flight for your journey
            </p>
          </div>

          <FlightSchedule />
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="py-16 bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
              Book Your Flight
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Ready to Fly to Cox's Bazar?</h2>
            <p className="text-muted-foreground text-lg">Complete the form below to book your flight to Cox's Bazar</p>
          </div>

          <div className="max-w-3xl mx-auto">
            <FlightBookingForm />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary mb-4">FAQs</div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground text-lg">Everything you need to know about our flight services</p>
          </div>

          <div className="max-w-3xl mx-auto grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle>How early should I arrive at the airport?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  For domestic flights to Cox's Bazar, we recommend arriving at the airport at least 1.5 hours before
                  your scheduled departure time. This allows sufficient time for check-in, security screening, and
                  boarding procedures.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>What is the baggage allowance for flights to Cox's Bazar?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Most airlines operating flights to Cox's Bazar offer a checked baggage allowance of 20kg and a
                  carry-on allowance of 7kg. However, this may vary slightly between airlines, so we recommend checking
                  the specific allowance for your chosen flight during the booking process.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Can I change my flight date after booking?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes, most flights can be rescheduled for a small fee, depending on the airline's policy and your fare
                  type. We recommend booking with our flexible fare option if you anticipate the possibility of changing
                  your travel dates. Please contact us at least 24 hours before your scheduled departure for any
                  changes.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for Your Cox's Bazar Adventure?</h2>
            <p className="text-xl mb-8 text-white/80">
              Book your flight today and start your journey to the world's longest sea beach
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="#booking">Book Your Flight</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

