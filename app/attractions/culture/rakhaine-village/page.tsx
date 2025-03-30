import Image from "next/image"
import Link from "next/link"
import { ChevronRight, MapPin, Clock, Users, CalendarDays } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"

export default function RakhaineVillagePage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[50vh] md:h-[60vh]">
        <Image
          src="https://mj-ahmad.github.io/mja2025/img/rakhaine00.png"
          alt="Rakhaine Village"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="container text-center text-white space-y-4">
            <Badge className="bg-primary hover:bg-primary text-white text-sm py-1">Cultural Experience</Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Rakhaine Village</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Experience the unique culture and traditions of the Rakhaine ethnic community
            </p>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <section className="bg-muted">
        <div className="container py-4">
          <div className="flex items-center text-sm gap-2">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/#attractions" className="hover:text-primary transition-colors">
              Attractions
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-muted-foreground">Rakhaine Village</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container py-12">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Left Content - Details */}
          <div className="md:col-span-2 space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight">About Rakhaine Village</h2>
              <p className="text-muted-foreground leading-relaxed">
                The Rakhaine community, an ethnic minority in Bangladesh, has preserved their unique cultural heritage
                over centuries. Their traditional village near Cox's Bazar offers visitors a rare glimpse into their way
                of life, traditions, and customs. The Rakhaine people are known for their colorful festivals, intricate
                handloom textiles, and traditional Buddhist practices.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Visitors to the Rakhaine village can observe traditional weaving techniques, explore their homes built
                on stilts, and learn about their rich cultural traditions. The Rakhaine are also known for their unique
                cuisine, which features seafood and locally grown vegetables prepared with distinctive spices and
                methods.
              </p>
            </div>

            {/* Key Features */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold tracking-tight">Cultural Highlights</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <Card className="bg-muted/50">
                  <CardContent className="p-4 flex gap-4 items-start">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-base">Traditional Weaving</h4>
                      <p className="text-sm text-muted-foreground">
                        Observe the intricate handloom weaving techniques passed down through generations
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-muted/50">
                  <CardContent className="p-4 flex gap-4 items-start">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <CalendarDays className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-base">Cultural Performances</h4>
                      <p className="text-sm text-muted-foreground">
                        Experience traditional dance and music performances during scheduled cultural shows
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-muted/50">
                  <CardContent className="p-4 flex gap-4 items-start">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-base">Culinary Traditions</h4>
                      <p className="text-sm text-muted-foreground">
                        Sample unique Rakhaine cuisine featuring local seafood and traditional cooking methods
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-muted/50">
                  <CardContent className="p-4 flex gap-4 items-start">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-base">Traditional Architecture</h4>
                      <p className="text-sm text-muted-foreground">
                        Visit homes built on stilts with unique architectural elements reflecting their heritage
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Gallery */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold tracking-tight">Gallery</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="relative h-48 rounded-lg overflow-hidden">
                  <Image
                    src="https://mj-ahmad.github.io/mja2025/img/rakhaine01.png"
                    alt="Rakhaine Weaving"
                    fill
                    className="object-cover hover:scale-105 transition-transform"
                  />
                </div>
                <div className="relative h-48 rounded-lg overflow-hidden">
                  <Image
                    src="https://mj-ahmad.github.io/mja2025/img/rakhaine02.png"
                    alt="Traditional Dance"
                    fill
                    className="object-cover hover:scale-105 transition-transform"
                  />
                </div>
                <div className="relative h-48 rounded-lg overflow-hidden">
                  <Image
                    src="https://mj-ahmad.github.io/mja2025/img/rakhaine03.png"
                    alt="Village Life"
                    fill
                    className="object-cover hover:scale-105 transition-transform"
                  />
                </div>
                <div className="relative h-48 rounded-lg overflow-hidden">
                  <Image
                    src="https://mj-ahmad.github.io/mja2025/img/rakhaine04.png"
                    alt="Traditional Food"
                    fill
                    className="object-cover hover:scale-105 transition-transform"
                  />
                </div>
                <div className="relative h-48 rounded-lg overflow-hidden">
                  <Image
                    src="https://mj-ahmad.github.io/mja2025/img/rakhaine05.png"
                    alt="Cultural Festival"
                    fill
                    className="object-cover hover:scale-105 transition-transform"
                  />
                </div>
                <div className="relative h-48 rounded-lg overflow-hidden">
                  <Image
                    src="https://mj-ahmad.github.io/mja2025/img/rakhaine06.png"
                    alt="Handcrafts"
                    fill
                    className="object-cover hover:scale-105 transition-transform"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Opening Hours */}
            <Card>
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-bold">Visiting Information</h3>
                <Separator />

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Opening Hours:</span>
                    <span className="font-medium">9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Days Open:</span>
                    <span className="font-medium">Daily</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Entry Fee:</span>
                    <span className="font-medium">BDT 100</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Cultural Show:</span>
                    <span className="font-medium">11 AM & 3 PM</span>
                  </div>
                </div>

                <Separator />

                <div className="space-y-2">
                  <h4 className="font-medium">Location</h4>
                  <p className="text-sm text-muted-foreground">Rakhaine Para, 15 km north of Cox's Bazar town</p>
                </div>

                <div className="space-y-2">
                  <h4 className="font-medium">Contact</h4>
                  <p className="text-sm text-muted-foreground">
                    Phone: +880 1892051303
                    <br />
                    Email: t-ally@outlook.com
                  </p>
                </div>

                <Button className="w-full">Book Guided Tour</Button>
              </CardContent>
            </Card>

            {/* Best Time to Visit */}
            <Card>
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-bold">Best Time to Visit</h3>
                <p className="text-sm text-muted-foreground">The best time to visit the Rakhaine Village is during:</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <div className="bg-primary/10 p-1 rounded-full mt-0.5">
                      <ChevronRight className="h-3 w-3 text-primary" />
                    </div>
                    <span>
                      <span className="font-medium">October to March:</span> Pleasant weather and clear skies
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="bg-primary/10 p-1 rounded-full mt-0.5">
                      <ChevronRight className="h-3 w-3 text-primary" />
                    </div>
                    <span>
                      <span className="font-medium">Cultural festivals:</span> Especially during Buddhist festivals and
                      New Year celebrations
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="bg-primary/10 p-1 rounded-full mt-0.5">
                      <ChevronRight className="h-3 w-3 text-primary" />
                    </div>
                    <span>
                      <span className="font-medium">Morning visits:</span> For the best lighting and less crowded
                      experience
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Related Attractions */}
            <Card>
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-bold">Related Attractions</h3>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <div className="relative h-16 w-16 rounded-md overflow-hidden flex-shrink-0">
                      <Image
                        src="https://mj-ahmad.github.io/mja2025/img/buddhist00.png"
                        alt="Buddhist Temples"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium">Buddhist Temples</h4>
                      <p className="text-sm text-muted-foreground">Ancient temples with rich Buddhist heritage</p>
                      <Link
                        href="/attractions/culture/buddhist-temples"
                        className="text-primary text-sm hover:underline"
                      >
                        Learn more
                      </Link>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="relative h-16 w-16 rounded-md overflow-hidden flex-shrink-0">
                      <Image
                        src="https://mj-ahmad.github.io/mja2025/img/local00.png"
                        alt="Local Markets"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium">Local Markets</h4>
                      <p className="text-sm text-muted-foreground">Vibrant markets selling crafts and souvenirs</p>
                      <Link href="/attractions/culture/local-markets" className="text-primary text-sm hover:underline">
                        Learn more
                      </Link>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  )
}

