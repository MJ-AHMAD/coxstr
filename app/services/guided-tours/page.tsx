import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Map, Mountain, Camera } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import BookingForm from "@/components/booking-form"

export default function GuidedToursPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh]">
        <Image
          src="https://mj-ahmad.github.io/mja2025/img/expert05.png"
          alt="Guided Tours"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 flex items-center">
          <div className="container">
            <div className="max-w-2xl space-y-4 animate-fade-up">
              <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Explore with Expert Guides</h1>
              <p className="text-lg md:text-xl text-white/90">
                Discover the hidden gems and iconic attractions of Cox's Bazar with our knowledgeable local guides
              </p>
              <Button size="lg" className="mt-4 shadow-lg" asChild>
                <a href="#booking">Book a Tour</a>
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
                Our Guided Tours
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Discover with the Experts</h2>
              <p className="text-muted-foreground text-lg">
                TRUSTED-ALLY's guided tours offer an immersive experience of Cox's Bazar. Our experienced local guides
                share their in-depth knowledge of the region's history, culture, and natural wonders, ensuring you
                discover both popular attractions and hidden treasures.
              </p>
              <div className="grid grid-cols-1 gap-4">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Map className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Expert Local Guides</h3>
                    <p className="text-muted-foreground">Knowledgeable guides who know every corner of Cox's Bazar</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Mountain className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Diverse Tour Options</h3>
                    <p className="text-muted-foreground">From beach walks to cultural tours and adventure treks</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Camera className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Memorable Experiences</h3>
                    <p className="text-muted-foreground">Create lasting memories with unique photo opportunities</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative rounded-xl overflow-hidden h-[400px]">
              <Image src="https://mj-ahmad.github.io/mja2025/img/expert04.png" alt="Tour Guide" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Tour Options */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
              Tour Options
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Choose Your Adventure</h2>
            <p className="text-muted-foreground text-lg">
              Select from our range of guided tours, each offering a unique perspective of Cox's Bazar
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <Image
                  src="https://mj-ahmad.github.io/mja2025/img/expert03.png"
                  alt="Beach Explorer Tour"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Beach Explorer Tour</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-primary" />
                    <span>3-hour guided walk along the main beach</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-primary" />
                    <span>Learn about coastal ecology and conservation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-primary" />
                    <span>Perfect sunset photo opportunities</span>
                  </li>
                </ul>
                <div className="mt-4">
                  <span className="text-2xl font-bold">৳999</span>
                  <span className="text-muted-foreground ml-1">/ person</span>
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
                  src="https://mj-ahmad.github.io/mja2025/img/expert02.png"
                  alt="Cultural Discovery Tour"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-2 right-2">
                  <span className="bg-primary text-white text-xs px-2 py-1 rounded-full">Popular</span>
                </div>
              </div>
              <CardHeader>
                <CardTitle>Cultural Discovery Tour</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-primary" />
                    <span>Full-day exploration of local villages and markets</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-primary" />
                    <span>Visit to Buddhist temples and ethnic communities</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-primary" />
                    <span>Traditional lunch with local family included</span>
                  </li>
                </ul>
                <div className="mt-4">
                  <span className="text-2xl font-bold">৳1,899</span>
                  <span className="text-muted-foreground ml-1">/ person</span>
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
                <Image src="https://mj-ahmad.github.io/mja2025/img/expert01.png" alt="Adventure Trek" fill className="object-cover" />
              </div>
              <CardHeader>
                <CardTitle>Adventure Trek</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-primary" />
                    <span>Guided hike through hills and forests</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-primary" />
                    <span>Visit to Himchari National Park and waterfalls</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-primary" />
                    <span>Wildlife spotting opportunities</span>
                  </li>
                </ul>
                <div className="mt-4">
                  <span className="text-2xl font-bold">৳2,499</span>
                  <span className="text-muted-foreground ml-1">/ person</span>
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

      {/* Featured Attractions */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
              Featured Attractions
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Must-Visit Destinations</h2>
            <p className="text-muted-foreground text-lg">Explore these incredible attractions on our guided tours</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="grid md:grid-cols-2">
                <div className="relative h-full min-h-[200px]">
                  <Image src="https://mj-ahmad.github.io/mja2025/img/inani00.png" alt="Inani Beach" fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">Inani Beach</h3>
                  <p className="text-muted-foreground mb-4">
                    Known for its unique coral stones and crystal clear waters, Inani Beach is a pristine stretch of
                    coastline located about 18km south of Cox's Bazar.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-muted px-2 py-1 text-xs rounded-full">Scenic</span>
                    <span className="bg-muted px-2 py-1 text-xs rounded-full">Coral Stones</span>
                    <span className="bg-muted px-2 py-1 text-xs rounded-full">Photography</span>
                  </div>
                  <Button size="sm" asChild>
                    <a href="#booking">Book a Tour</a>
                  </Button>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="grid md:grid-cols-2">
                <div className="relative h-full min-h-[200px]">
                  <Image
                    src="https://mj-ahmad.github.io/mja2025/img/himchari00.png"
                    alt="Himchari National Park"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">Himchari National Park</h3>
                  <p className="text-muted-foreground mb-4">
                    Located about 8km from Cox's Bazar, this national park features breathtaking waterfalls, dense
                    forests, and diverse wildlife, along with panoramic views of the Bay of Bengal.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-muted px-2 py-1 text-xs rounded-full">Nature</span>
                    <span className="bg-muted px-2 py-1 text-xs rounded-full">Waterfalls</span>
                    <span className="bg-muted px-2 py-1 text-xs rounded-full">Hiking</span>
                  </div>
                  <Button size="sm" asChild>
                    <a href="#booking">Book a Tour</a>
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
              Book Your Tour
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Ready to Explore Cox's Bazar?</h2>
            <p className="text-muted-foreground text-lg">Complete the form below to book your guided tour experience</p>
          </div>

          <div className="max-w-3xl mx-auto">
            <BookingForm serviceType="guided-tour" />
          </div>
        </div>
      </section>

      {/* Meet Our Guides */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary mb-4">Our Guides</div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Meet Your Expert Guides</h2>
            <p className="text-muted-foreground text-lg">
              Our professional guides are passionate about sharing the beauty and culture of Cox's Bazar
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <Card className="text-center overflow-hidden">
              <CardHeader>
                <CardTitle>Rahul</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-2">
                  Local historian with 10+ years of experience guiding cultural tours
                </p>
                <div className="flex justify-center gap-2">
                  <span className="bg-muted px-2 py-1 text-xs rounded-full">Cultural Expert</span>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center overflow-hidden">
              <CardHeader>
                <CardTitle>Priya</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-2">
                  Marine biologist specializing in beach ecology and conservation
                </p>
                <div className="flex justify-center gap-2">
                  <span className="bg-muted px-2 py-1 text-xs rounded-full">Nature Expert</span>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center overflow-hidden">
              <CardHeader>
                <CardTitle>Ahmed</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-2">
                  Adventure guide with extensive knowledge of local hiking trails
                </p>
                <div className="flex justify-center gap-2">
                  <span className="bg-muted px-2 py-1 text-xs rounded-full">Adventure Guide</span>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center overflow-hidden">
              <CardHeader>
                <CardTitle>Maya</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-2">Photography enthusiast who knows all the best photo spots</p>
                <div className="flex justify-center gap-2">
                  <span className="bg-muted px-2 py-1 text-xs rounded-full">Photo Expert</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary mb-4">FAQs</div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground text-lg">Everything you need to know about our guided tours</p>
          </div>

          <div className="max-w-3xl mx-auto grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle>What should I bring on a guided tour?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We recommend bringing comfortable walking shoes, sunscreen, a hat, sunglasses, a water bottle, and a
                  camera. For hiking tours, bring appropriate clothing layers and insect repellent.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>How many people are typically in a tour group?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our standard tours usually accommodate 8-12 people to ensure a personalized experience. Private tours
                  are also available for families or small groups who prefer an exclusive experience.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Are your tours suitable for children?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Most of our tours are family-friendly and suitable for children. The Beach Explorer and Cultural
                  Discovery tours are particularly good for families. We recommend checking the specific tour details
                  for any age restrictions or physical requirements.
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Discover Cox's Bazar with the Experts</h2>
            <p className="text-xl mb-8 text-white/80">Book your guided tour today and create unforgettable memories</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="#booking">Book a Tour Now</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20" asChild>
                <Link href="/contact">Custom Tour Request</Link>
              </Button>
            </div>
            <p className="text-xs text-center mt-4">
              For inquiries, contact us at{" "}
              <a href="mailto:t-ally@outlook.com" className="underline">
                t-ally@outlook.com
              </a>{" "}
              or call us at{" "}
              <a href="tel:+8801892051303" className="underline">
                +880 1892051303
              </a>
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}

