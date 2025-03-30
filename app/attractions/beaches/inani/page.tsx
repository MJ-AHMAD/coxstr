import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { MapPin, Clock, Calendar, Waves, Sun, Camera, Info, ChevronRight } from "lucide-react"
import TouristHomeFooter from "@/components/tourist-home-footer"

export default function InaniBeachPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[60vh] w-full">
          <Image
            src="https://mj-ahmad.github.io/mja2025/img/inani00.png"
            alt="Inani Beach"
            fill
            className="object-cover brightness-75"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12 container">
            <Badge className="mb-4 w-fit">BEACH</Badge>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Inani Beach</h1>
            <p className="text-white/90 max-w-3xl text-lg mb-6">
              Known for its unique coral stones and crystal clear waters, Inani Beach offers a more secluded experience
              away from the crowds.
            </p>
            <div className="flex flex-wrap gap-4 mb-2">
              <div className="flex items-center gap-2 text-white/90">
                <MapPin className="h-4 w-4" />
                <span>18 km south of Cox's Bazar</span>
              </div>
              <div className="flex items-center gap-2 text-white/90">
                <Calendar className="h-4 w-4" />
                <span>Best time: November to March</span>
              </div>
              <div className="flex items-center gap-2 text-white/90">
                <Clock className="h-4 w-4" />
                <span>Recommended visit: Full day</span>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="container py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content Area */}
            <div className="lg:col-span-2 space-y-8">
              {/* Overview */}
              <div className="prose max-w-none">
                <h2>About Inani Beach</h2>
                <p>
                  Inani Beach is a beautiful stretch of coastline located about 18 kilometers south of Cox's Bazar town.
                  What makes this beach unique are the remarkable coral stones and rocks that are scattered across the
                  shoreline, creating a stunning contrast with the golden sands.
                </p>
                <p>
                  The beach is less crowded than the main Cox's Bazar beach, offering a more peaceful and serene
                  environment for visitors. The crystal clear blue waters of the Bay of Bengal provide excellent
                  opportunities for swimming and other water activities.
                </p>
                <p>
                  Inani Beach is also known for its spectacular sunrise and sunset views. The surrounding hills and lush
                  greenery add to the natural beauty of this coastal paradise, making it a must-visit destination for
                  nature lovers and photographers.
                </p>
              </div>

              {/* Gallery */}
              <div>
                <h2 className="text-2xl font-bold mb-4">Gallery</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="relative aspect-square overflow-hidden rounded-lg">
                    <Image
                      src="https://mj-ahmad.github.io/mja2025/img/inani01.png"
                      alt="Inani Beach Scene 1"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="relative aspect-square overflow-hidden rounded-lg">
                    <Image
                      src="https://mj-ahmad.github.io/mja2025/img/inani02.png"
                      alt="Inani Beach Scene 2"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="relative aspect-square overflow-hidden rounded-lg">
                    <Image
                      src="https://mj-ahmad.github.io/mja2025/img/inani03.png"
                      alt="Inani Beach Scene 3"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="relative aspect-square overflow-hidden rounded-lg">
                    <Image
                      src="https://mj-ahmad.github.io/mja2025/img/inani04.png"
                      alt="Inani Beach Scene 4"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="relative aspect-square overflow-hidden rounded-lg">
                    <Image
                      src="https://mj-ahmad.github.io/mja2025/img/inani05.png"
                      alt="Inani Beach Scene 5"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="relative aspect-square overflow-hidden rounded-lg">
                    <Image
                      src="https://mj-ahmad.github.io/mja2025/img/inani06.png"
                      alt="Inani Beach Scene 6"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              </div>

              {/* Tabs for Different Information */}
              <Tabs defaultValue="activities" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="activities">Activities</TabsTrigger>
                  <TabsTrigger value="tips">Travel Tips</TabsTrigger>
                  <TabsTrigger value="nearby">Nearby Attractions</TabsTrigger>
                </TabsList>

                <TabsContent value="activities" className="space-y-4 mt-4">
                  <h3 className="text-xl font-semibold">Beach Activities</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card>
                      <CardContent className="p-4 flex items-start gap-3">
                        <div className="bg-primary/10 p-2 rounded-full">
                          <Waves className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium">Swimming</h4>
                          <p className="text-sm text-muted-foreground">
                            Enjoy swimming in the crystal clear waters of the Bay of Bengal.
                          </p>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="p-4 flex items-start gap-3">
                        <div className="bg-primary/10 p-2 rounded-full">
                          <Sun className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium">Sunbathing</h4>
                          <p className="text-sm text-muted-foreground">
                            Relax on the golden sands and enjoy the tropical sun.
                          </p>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="p-4 flex items-start gap-3">
                        <div className="bg-primary/10 p-2 rounded-full">
                          <Camera className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium">Photography</h4>
                          <p className="text-sm text-muted-foreground">
                            Capture the unique coral stones and beautiful landscapes.
                          </p>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="p-4 flex items-start gap-3">
                        <div className="bg-primary/10 p-2 rounded-full">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-5 w-5 text-primary"
                          >
                            <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
                            <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                            <line x1="6" y1="1" x2="6" y2="4"></line>
                            <line x1="10" y1="1" x2="10" y2="4"></line>
                            <line x1="14" y1="1" x2="14" y2="4"></line>
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-medium">Beach Picnic</h4>
                          <p className="text-sm text-muted-foreground">
                            Enjoy a picnic with family and friends on the beautiful beach.
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="tips" className="space-y-4 mt-4">
                  <h3 className="text-xl font-semibold">Travel Tips</h3>

                  <div className="space-y-4">
                    <Card>
                      <CardContent className="p-4">
                        <h4 className="font-medium text-lg">Best Time to Visit</h4>
                        <p className="text-sm text-muted-foreground">
                          The best time to visit Inani Beach is from November to March when the weather is dry and
                          pleasant. Avoid the monsoon season (June to September) as heavy rainfall can make the beach
                          less enjoyable.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="p-4">
                        <h4 className="font-medium text-lg">How to Get There</h4>
                        <p className="text-sm text-muted-foreground">
                          Inani Beach is located about 18 km south of Cox's Bazar town. You can hire a local taxi,
                          auto-rickshaw, or join a tour to reach the beach. The journey takes approximately 30-40
                          minutes from Cox's Bazar.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="p-4">
                        <h4 className="font-medium text-lg">What to Bring</h4>
                        <ul className="text-sm text-muted-foreground space-y-2">
                          <li>• Sunscreen, sunglasses, and hat for sun protection</li>
                          <li>• Towels and change of clothes</li>
                          <li>• Drinking water and snacks</li>
                          <li>• Camera for photography</li>
                          <li>• Cash as there are limited ATM facilities</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="p-4">
                        <h4 className="font-medium text-lg">Safety Tips</h4>
                        <ul className="text-sm text-muted-foreground space-y-2">
                          <li>• Be cautious while swimming as there are no lifeguards</li>
                          <li>• Watch out for the coral stones which can be sharp</li>
                          <li>• Keep track of tide times</li>
                          <li>• Stay hydrated and protect yourself from the sun</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="nearby" className="space-y-4 mt-4">
                  <h3 className="text-xl font-semibold">Nearby Attractions</h3>

                  <div className="grid grid-cols-1 gap-4">
                    <Card>
                      <CardContent className="p-4">
                        <h4 className="font-medium text-lg">Himchari National Park</h4>
                        <p className="text-sm text-muted-foreground mb-2">
                          A beautiful national park with hills, waterfalls, and diverse flora and fauna. It's located
                          just a short drive from Inani Beach.
                        </p>
                        <div className="flex items-center gap-2 text-sm">
                          <MapPin className="h-3 w-3" />
                          <span>10 km from Inani Beach</span>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="p-4">
                        <h4 className="font-medium text-lg">Buddhist Temples of Ramu</h4>
                        <p className="text-sm text-muted-foreground mb-2">
                          Explore the ancient Buddhist temples and monasteries in Ramu, showcasing beautiful
                          architecture and cultural heritage.
                        </p>
                        <div className="flex items-center gap-2 text-sm">
                          <MapPin className="h-3 w-3" />
                          <span>15 km from Inani Beach</span>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="p-4">
                        <h4 className="font-medium text-lg">Marine Drive</h4>
                        <p className="text-sm text-muted-foreground mb-2">
                          Enjoy a scenic drive along the 80 km Marine Drive that connects Cox's Bazar to Teknaf,
                          offering stunning views of the Bay of Bengal.
                        </p>
                        <div className="flex items-center gap-2 text-sm">
                          <MapPin className="h-3 w-3" />
                          <span>Passes through Inani Beach</span>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Info */}
              <Card>
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-lg font-semibold">Quick Information</h3>

                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <h4 className="font-medium">Location</h4>
                        <p className="text-sm text-muted-foreground">18 km south of Cox's Bazar, Bangladesh</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Calendar className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <h4 className="font-medium">Best Season</h4>
                        <p className="text-sm text-muted-foreground">November to March (Dry Season)</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Clock className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <h4 className="font-medium">Ideal Duration</h4>
                        <p className="text-sm text-muted-foreground">3-4 hours</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Info className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <h4 className="font-medium">Known For</h4>
                        <p className="text-sm text-muted-foreground">Coral stones, clear waters, less crowded</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Weather */}
              <Card>
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    <Sun className="h-5 w-5 text-primary" />
                    <span>Weather</span>
                  </h3>

                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span>November - February</span>
                      <span className="text-sm">22°C - 28°C</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>March - May</span>
                      <span className="text-sm">25°C - 34°C</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>June - October</span>
                      <span className="text-sm">25°C - 32°C (Rainy)</span>
                    </div>
                  </div>

                  <div className="text-sm text-muted-foreground">
                    <Info className="h-4 w-4 inline mr-1" />
                    The weather is tropical with high humidity year-round.
                  </div>
                </CardContent>
              </Card>

              {/* Book a Tour */}
              <Card className="bg-primary text-primary-foreground">
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-lg font-semibold">Book a Tour Package</h3>
                  <p className="text-sm">
                    Explore our curated tour packages that include a visit to Inani Beach and other attractions.
                  </p>
                  <Button variant="secondary" className="w-full" asChild>
                    <Link href="/packages/booking?package=standard">View Tour Packages</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Other Beaches Section */}
        <section className="bg-muted py-12">
          <div className="container">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">Explore Other Beaches</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="https://mj-ahmad.github.io/mja2025/img/laboni00.png"
                    alt="Laboni Beach"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">Laboni Beach</h3>
                  <p className="text-muted-foreground mb-4">
                    The main beach with vibrant activities and entertainment, located in the heart of Cox's Bazar.
                  </p>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/attractions/beaches/laboni">
                      Explore Laboni Beach <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="https://mj-ahmad.github.io/mja2025/img/himchari00.png"
                    alt="Himchari Beach"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">Himchari Beach</h3>
                  <p className="text-muted-foreground mb-4">
                    Beautiful waterfalls meeting the sea with lush greenery, offering a unique coastal experience.
                  </p>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/attractions/beaches/himchari">
                      Explore Himchari Beach <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-primary text-white py-12">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold">Ready to Experience Inani Beach?</h2>
              <p className="text-white/80">
                Let us help you plan the perfect beach getaway with our customized tour packages and services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/packages/booking?package=standard">Book a Tour</Link>
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

