import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Clock, MapPin, Calendar, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function WaterSportsPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh] bg-black">
        <Image
          src="https://mj-ahmad.github.io/mja2025/img/water00.png"
          alt="Water Sports in Cox's Bazar"
          fill
          className="object-cover opacity-70"
          priority
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-4">
          <div className="text-center max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Water Sports in Cox's Bazar</h1>
            <p className="text-xl md:text-2xl">
              Experience thrilling aquatic adventures on the world's longest natural sea beach
            </p>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <section className="bg-muted py-4">
        <div className="container">
          <div className="flex items-center text-sm gap-2">
            <Link href="/" className="text-muted-foreground hover:text-primary">
              Home
            </Link>
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
            <Link href="/#attractions" className="text-muted-foreground hover:text-primary">
              Attractions
            </Link>
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
            <span>Water Sports</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container py-12">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">Thrilling Water Adventures</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Cox's Bazar offers a wide range of exciting water sports activities for adventure enthusiasts. With its
                long coastline and favorable water conditions, it's the perfect destination for aquatic adventures in
                Bangladesh.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                From surfing the waves to jet skiing across the bay, there's something for everyone regardless of
                experience level. Professional instructors and quality equipment ensure both safety and enjoyment for
                all participants.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">Popular Water Sports Activities</h3>
              <div className="grid sm:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <h4 className="text-xl font-semibold mb-2">Surfing</h4>
                    <p className="text-muted-foreground">
                      Catch the perfect wave at Laboni Beach or Inani Beach. Surfboards are available for rent, and
                      lessons are offered for beginners.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h4 className="text-xl font-semibold mb-2">Jet Skiing</h4>
                    <p className="text-muted-foreground">
                      Experience the thrill of speeding across the water on a jet ski. Available at multiple locations
                      along the beach.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h4 className="text-xl font-semibold mb-2">Parasailing</h4>
                    <p className="text-muted-foreground">
                      Soar high above the beach for breathtaking aerial views of Cox's Bazar coastline.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h4 className="text-xl font-semibold mb-2">Banana Boat Rides</h4>
                    <p className="text-muted-foreground">
                      Enjoy a fun-filled group activity on an inflatable banana-shaped boat pulled by a speedboat.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Gallery */}
            <div>
              <h3 className="text-2xl font-bold mb-4">Gallery</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="relative h-48 rounded-lg overflow-hidden">
                  <Image
                    src="https://mj-ahmad.github.io/mja2025/img/water01.png"
                    alt="Surfing in Cox's Bazar"
                    fill
                    className="object-cover hover:scale-105 transition-transform"
                  />
                </div>
                <div className="relative h-48 rounded-lg overflow-hidden">
                  <Image
                    src="https://mj-ahmad.github.io/mja2025/img/water02.png"
                    alt="Jet Skiing in Cox's Bazar"
                    fill
                    className="object-cover hover:scale-105 transition-transform"
                  />
                </div>
                <div className="relative h-48 rounded-lg overflow-hidden">
                  <Image
                    src="https://mj-ahmad.github.io/mja2025/img/water03.png"
                    alt="Parasailing in Cox's Bazar"
                    fill
                    className="object-cover hover:scale-105 transition-transform"
                  />
                </div>
                <div className="relative h-48 rounded-lg overflow-hidden">
                  <Image
                    src="https://mj-ahmad.github.io/mja2025/img/water04.png"
                    alt="Banana Boat Rides in Cox's Bazar"
                    fill
                    className="object-cover hover:scale-105 transition-transform"
                  />
                </div>
                <div className="relative h-48 rounded-lg overflow-hidden">
                  <Image
                    src="https://mj-ahmad.github.io/mja2025/img/water05.png"
                    alt="Beach Activities in Cox's Bazar"
                    fill
                    className="object-cover hover:scale-105 transition-transform"
                  />
                </div>
                <div className="relative h-48 rounded-lg overflow-hidden">
                  <Image
                    src="https://mj-ahmad.github.io/mja2025/img/water06.png"
                    alt="Water Sports in Cox's Bazar"
                    fill
                    className="object-cover hover:scale-105 transition-transform"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <Card>
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-bold">Visiting Information</h3>
                <Separator />

                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-medium">Location</h4>
                    <p className="text-muted-foreground">
                      Various locations along Cox's Bazar beach, primarily at Laboni Beach and Inani Beach
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-medium">Operating Hours</h4>
                    <p className="text-muted-foreground">
                      Most activities: 8:00 AM - 5:00 PM daily
                      <br />
                      (Weather permitting)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Info className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-medium">Price Range</h4>
                    <p className="text-muted-foreground">
                      Surfing: 500-1500 BDT
                      <br />
                      Jet Skiing: 800-2000 BDT
                      <br />
                      Parasailing: 1500-3000 BDT
                      <br />
                      Banana Boat: 300-600 BDT per person
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-bold">Best Time to Visit</h3>
                <Separator />

                <div className="flex items-start gap-3">
                  <Calendar className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="text-muted-foreground">
                      The best time for water sports in Cox's Bazar is from November to March when the weather is
                      pleasant and the sea is relatively calm.
                    </p>
                    <p className="text-muted-foreground mt-2">
                      Avoid the monsoon season (June to September) when water activities are often suspended due to
                      rough seas.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-bold">Safety Tips</h3>
                <Separator />
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Always follow instructions from trained professionals</li>
                  <li>• Wear appropriate safety gear (life jackets, helmets)</li>
                  <li>• Check weather conditions before planning activities</li>
                  <li>• Don't participate in water sports after consuming alcohol</li>
                  <li>• Inform about any medical conditions before participating</li>
                  <li>• Stay hydrated and use sunscreen</li>
                </ul>
              </CardContent>
            </Card>

            <div className="space-y-4">
              <h3 className="text-xl font-bold">Related Attractions</h3>
              <div className="grid gap-4">
                <Button variant="outline" className="justify-start" asChild>
                  <Link href="/attractions/adventure/marine-drive">
                    <span>Marine Drive</span>
                    <ChevronRight className="h-4 w-4 ml-auto" />
                  </Link>
                </Button>
                <Button variant="outline" className="justify-start" asChild>
                  <Link href="/attractions/adventure/hiking-trails">
                    <span>Hiking Trails</span>
                    <ChevronRight className="h-4 w-4 ml-auto" />
                  </Link>
                </Button>
                <Button variant="outline" className="justify-start" asChild>
                  <Link href="/attractions/beaches/laboni">
                    <span>Laboni Beach</span>
                    <ChevronRight className="h-4 w-4 ml-auto" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary/10 py-12">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Ready for an Adventure?</h2>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Book your water sports adventure today and experience the thrill of Cox's Bazar's beautiful waters.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/packages/booking">Book Now</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}

