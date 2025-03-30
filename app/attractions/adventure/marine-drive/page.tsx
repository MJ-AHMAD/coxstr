import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Clock, MapPin, Calendar, Car } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function MarineDrivePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh] bg-black">
        <Image
          src="https://mj-ahmad.github.io/mja2025/img/marine00.png"
          alt="Marine Drive in Cox's Bazar"
          fill
          className="object-cover opacity-70"
          priority
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-4">
          <div className="text-center max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Marine Drive</h1>
            <p className="text-xl md:text-2xl">Experience the scenic 80km coastal highway along the Bay of Bengal</p>
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
            <span>Marine Drive</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container py-12">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">The Breathtaking Coastal Highway</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Marine Drive is a spectacular 80-kilometer coastal road that stretches from Cox's Bazar to Teknaf,
                running parallel to the world's longest natural sea beach. This scenic highway offers one of the most
                beautiful road trips in Bangladesh, with the Bay of Bengal on one side and hills on the other.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                Completed in 2017, this engineering marvel has quickly become one of the most popular attractions in
                Cox's Bazar, allowing visitors to enjoy panoramic views of the sea while driving along the coastline.
                The road passes through several beautiful beaches, fishing villages, and natural landmarks.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">Highlights Along Marine Drive</h3>
              <div className="grid sm:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <h4 className="text-xl font-semibold mb-2">Inani Beach</h4>
                    <p className="text-muted-foreground">
                      Famous for its unique coral stones and crystal clear waters, Inani Beach is a must-stop location
                      along Marine Drive.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h4 className="text-xl font-semibold mb-2">Himchari National Park</h4>
                    <p className="text-muted-foreground">
                      A beautiful natural reserve with waterfalls, hills, and diverse wildlife accessible from Marine
                      Drive.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h4 className="text-xl font-semibold mb-2">Fishing Villages</h4>
                    <p className="text-muted-foreground">
                      Observe the traditional lifestyle of local fishermen in small villages along the route.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h4 className="text-xl font-semibold mb-2">Scenic Viewpoints</h4>
                    <p className="text-muted-foreground">
                      Multiple designated viewpoints offer spectacular panoramas of the Bay of Bengal and surrounding
                      landscapes.
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
                    src="https://mj-ahmad.github.io/mja2025/img/marine01.png"
                    alt="Marine Drive Scenic View"
                    fill
                    className="object-cover hover:scale-105 transition-transform"
                  />
                </div>
                <div className="relative h-48 rounded-lg overflow-hidden">
                  <Image
                    src="https://mj-ahmad.github.io/mja2025/img/marine02.png"
                    alt="Coastal Road"
                    fill
                    className="object-cover hover:scale-105 transition-transform"
                  />
                </div>
                <div className="relative h-48 rounded-lg overflow-hidden">
                  <Image
                    src="https://mj-ahmad.github.io/mja2025/img/marine03.png"
                    alt="Sunset on Marine Drive"
                    fill
                    className="object-cover hover:scale-105 transition-transform"
                  />
                </div>
                <div className="relative h-48 rounded-lg overflow-hidden">
                  <Image
                    src="https://mj-ahmad.github.io/mja2025/img/marine04.png"
                    alt="Beach View from Marine Drive"
                    fill
                    className="object-cover hover:scale-105 transition-transform"
                  />
                </div>
                <div className="relative h-48 rounded-lg overflow-hidden">
                  <Image
                    src="https://mj-ahmad.github.io/mja2025/img/marine05.png"
                    alt="Fishing Village along Marine Drive"
                    fill
                    className="object-cover hover:scale-105 transition-transform"
                  />
                </div>
                <div className="relative h-48 rounded-lg overflow-hidden">
                  <Image
                    src="https://mj-ahmad.github.io/mja2025/img/marine06.png"
                    alt="Scenic Viewpoint on Marine Drive"
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
                <h3 className="text-xl font-bold">Travel Information</h3>
                <Separator />

                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-medium">Route</h4>
                    <p className="text-muted-foreground">Cox's Bazar to Teknaf (approximately 80 kilometers)</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Car className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-medium">Transportation Options</h4>
                    <p className="text-muted-foreground">
                      • Private car or rental car
                      <br />• Motorcycle rental
                      <br />• Guided tour with transportation
                      <br />• Local buses (limited stops)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-medium">Travel Time</h4>
                    <p className="text-muted-foreground">
                      Full route: 2-3 hours one way (without stops)
                      <br />
                      Recommended: Full day with stops at attractions
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
                      The best time to experience Marine Drive is from November to March during the dry season when the
                      weather is pleasant and visibility is excellent.
                    </p>
                    <p className="text-muted-foreground mt-2">
                      Early morning or late afternoon drives offer the most comfortable temperatures and beautiful
                      lighting for photography.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-bold">Travel Tips</h3>
                <Separator />
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Carry sufficient water and snacks</li>
                  <li>• Fill up your vehicle's fuel tank before starting</li>
                  <li>• Download offline maps as mobile coverage can be spotty</li>
                  <li>• Wear sunscreen and sunglasses</li>
                  <li>• Drive carefully as some sections may have sharp turns</li>
                  <li>• Respect local communities and their privacy</li>
                  <li>• Do not litter - keep the coastline clean</li>
                </ul>
              </CardContent>
            </Card>

            <div className="space-y-4">
              <h3 className="text-xl font-bold">Related Attractions</h3>
              <div className="grid gap-4">
                <Button variant="outline" className="justify-start" asChild>
                  <Link href="/attractions/adventure/water-sports">
                    <span>Water Sports</span>
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
                  <Link href="/attractions/beaches/inani">
                    <span>Inani Beach</span>
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
          <h2 className="text-3xl font-bold mb-4">Explore Marine Drive</h2>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Book a guided tour of Marine Drive or rent a vehicle to explore this scenic coastal highway at your own
            pace.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/services/transportation">Transportation Options</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/services/guided-tours">Guided Tours</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}

