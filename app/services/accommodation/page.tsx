import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Bed, Coffee, Wifi } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import BookingForm from "@/components/booking-form"

export default function AccommodationPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh]">
        <Image
          src="https://mj-ahmad.github.io/mja2025/img/stay00.png"
          alt="Accommodation Services"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 flex items-center">
          <div className="container">
            <div className="max-w-2xl space-y-4 animate-fade-up">
              <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Exceptional Accommodations</h1>
              <p className="text-lg md:text-xl text-white/90">
                Stay in comfort with our handpicked selection of hotels and resorts in Cox's Bazar
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
                Our Accommodations
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Your Home Away From Home</h2>
              <p className="text-muted-foreground text-lg">
                TRUSTED-ALLY offers a wide range of accommodation options to suit every budget and preference. From
                luxury beachfront resorts to cozy boutique hotels, we ensure your stay in Cox's Bazar is comfortable and
                memorable.
              </p>
              <div className="grid grid-cols-1 gap-4">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Bed className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Quality Accommodations</h3>
                    <p className="text-muted-foreground">Carefully selected properties that meet our high standards</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Coffee className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Excellent Amenities</h3>
                    <p className="text-muted-foreground">From pools to spa services, enjoy the best facilities</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Wifi className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Modern Conveniences</h3>
                    <p className="text-muted-foreground">Stay connected with WiFi and enjoy contemporary comforts</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative rounded-xl overflow-hidden h-[400px]">
              <Image
                src="https://mj-ahmad.github.io/mja2025/img/stay00.png"
                alt="Accommodation Services"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Accommodation Options */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
              Accommodation Options
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Where Would You Like to Stay?</h2>
            <p className="text-muted-foreground text-lg">
              Choose from our selection of properties, each offering unique experiences and amenities
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <Image src="https://mj-ahmad.github.io/mja2025/img/stay01.png" alt="Budget Hotels" fill className="object-cover" />
              </div>
              <CardHeader>
                <CardTitle>Budget Hotels</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-primary" />
                    <span>Clean, comfortable rooms</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-primary" />
                    <span>Basic amenities</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-primary" />
                    <span>Convenient locations</span>
                  </li>
                </ul>
                <div className="mt-4">
                  <span className="text-2xl font-bold">৳2,999</span>
                  <span className="text-muted-foreground ml-1">/ night</span>
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
                  src="https://mj-ahmad.github.io/mja2025/img/stay02.png"
                  alt="Mid-Range Hotels"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-2 right-2">
                  <span className="bg-primary text-white text-xs px-2 py-1 rounded-full">Popular</span>
                </div>
              </div>
              <CardHeader>
                <CardTitle>Mid-Range Hotels</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-primary" />
                    <span>Spacious, well-appointed rooms</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-primary" />
                    <span>Swimming pool & restaurant</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-primary" />
                    <span>Near beach locations</span>
                  </li>
                </ul>
                <div className="mt-4">
                  <span className="text-2xl font-bold">৳5,499</span>
                  <span className="text-muted-foreground ml-1">/ night</span>
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
                <Image src="https://mj-ahmad.github.io/mja2025/img/stay03.png" alt="Luxury Resorts" fill className="object-cover" />
              </div>
              <CardHeader>
                <CardTitle>Luxury Resorts</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-primary" />
                    <span>Elegant suites with sea views</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-primary" />
                    <span>Full-service spa & multiple restaurants</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-primary" />
                    <span>Beachfront access & premium service</span>
                  </li>
                </ul>
                <div className="mt-4">
                  <span className="text-2xl font-bold">৳12,999</span>
                  <span className="text-muted-foreground ml-1">/ night</span>
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

      {/* Featured Properties */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
              Featured Properties
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Our Top Picks in Cox's Bazar</h2>
            <p className="text-muted-foreground text-lg">Discover the most loved properties by our travelers</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="grid md:grid-cols-2">
                <div className="relative h-full min-h-[200px]">
                  <Image
                    src="https://mj-ahmad.github.io/mja2025/img/stay03.png"
                    alt="Seagull Hotel"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">Seagull Hotel</h3>
                  <div className="flex items-center gap-1 text-yellow-500 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-4 h-4 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Luxury beachfront hotel with stunning views, multiple restaurants, and a beautiful swimming pool.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-muted px-2 py-1 text-xs rounded-full">Beachfront</span>
                    <span className="bg-muted px-2 py-1 text-xs rounded-full">Restaurant</span>
                    <span className="bg-muted px-2 py-1 text-xs rounded-full">Pool</span>
                    <span className="bg-muted px-2 py-1 text-xs rounded-full">Spa</span>
                  </div>
                  <Button size="sm" asChild>
                    <a href="#booking">Check Availability</a>
                  </Button>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="grid md:grid-cols-2">
                <div className="relative h-full min-h-[200px]">
                  <Image
                    src="https://mj-ahmad.github.io/mja2025/img/stay02.png"
                    alt="Ocean Paradise Hotel"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">Ocean Paradise Hotel</h3>
                  <div className="flex items-center gap-1 text-yellow-500 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-4 h-4 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Modern hotel with infinity pool, private beach access, and elegant rooms with panoramic ocean views.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-muted px-2 py-1 text-xs rounded-full">Sea View</span>
                    <span className="bg-muted px-2 py-1 text-xs rounded-full">Infinity Pool</span>
                    <span className="bg-muted px-2 py-1 text-xs rounded-full">Fitness Center</span>
                    <span className="bg-muted px-2 py-1 text-xs rounded-full">Bar</span>
                  </div>
                  <Button size="sm" asChild>
                    <a href="#booking">Check Availability</a>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="py-16 bg-muted/30">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
              Book Your Stay
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Reserve Your Perfect Accommodation</h2>
            <p className="text-muted-foreground text-lg">Complete the form below to book your stay in Cox's Bazar</p>
          </div>

          <div className="max-w-3xl mx-auto">
            <BookingForm serviceType="accommodation" />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary mb-4">FAQs</div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground text-lg">Everything you need to know about our accommodation options</p>
          </div>

          <div className="max-w-3xl mx-auto grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle>What is the best area to stay in Cox's Bazar?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  The Marine Drive and Kolatoli Beach areas are popular for tourists as they provide easy access to the
                  beach and are surrounded by restaurants and shops. Laboni Point is another excellent location near the
                  main beach entrance.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Do your accommodations offer free WiFi?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes, all our partner hotels and resorts offer complimentary WiFi for guests. However, please note that
                  internet speed may vary depending on the location and property.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Can I request special amenities or room configurations?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  During the booking process, you can specify any special requests such as room preferences, bed
                  configurations, or specific amenities. We'll do our best to accommodate your needs.
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for a Comfortable Stay?</h2>
            <p className="text-xl mb-8 text-white/80">
              Book your accommodation now and experience the best of Cox's Bazar
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="#booking">Book Your Stay</Link>
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

