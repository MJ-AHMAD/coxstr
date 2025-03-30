import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { MapPin, Clock, Calendar, Waves, Sun, Camera, Info, ChevronRight, Mountain, Leaf } from "lucide-react"

export default function HimchariBeachPage() {
  return (
    <>
      <div className="flex min-h-screen flex-col">
        {/* Hero Section */}
        <section className="relative h-[60vh] w-full">
          <Image
            src="https://mj-ahmad.github.io/mja2025/img/himchari00.png"
            alt="Himchari Beach"
            fill
            className="object-cover brightness-75"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12 container">
            <Badge className="mb-4 w-fit">BEACH</Badge>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Himchari Beach</h1>
            <p className="text-white/90 max-w-3xl text-lg mb-6">
              Beautiful waterfalls meeting the sea with lush greenery, offering a unique coastal experience.
            </p>
            <div className="flex flex-wrap gap-4 mb-2">
              <div className="flex items-center gap-2 text-white/90">
                <MapPin className="h-4 w-4" />
                <span>8 km south of Cox&apos;s Bazar</span>
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
                <h2>About Himchari Beach</h2>
                <p>
                  Himchari Beach is a picturesque coastal area located approximately 8 kilometers south of Cox&apos;s
                  Bazar town. What makes this beach truly special is its unique combination of sea, hills, and
                  waterfalls, creating a diverse natural landscape that captivates visitors.
                </p>
                <p>
                  The beach is part of Himchari National Park, which adds to its appeal with lush green forests, diverse
                  wildlife, and panoramic viewpoints. The most famous attraction at Himchari is its waterfall, which
                  cascades down the hills and eventually meets the Bay of Bengal, creating a rare and beautiful natural
                  phenomenon.
                </p>
                <p>
                  Himchari Beach offers a more serene and natural experience compared to the main Cox&apos;s Bazar
                  beach. The golden sands, clear waters, and surrounding hills make it an ideal spot for nature lovers,
                  photographers, and those seeking a peaceful retreat away from the crowds.
                </p>
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

            {/* Tabs for Different Information */}
            <div className="lg:col-span-2">
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
                            Enjoy swimming in the clear waters of the Bay of Bengal.
                          </p>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="p-4 flex items-start gap-3">
                        <div className="bg-primary/10 p-2 rounded-full">
                          <Mountain className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium">Hiking</h4>
                          <p className="text-sm text-muted-foreground">
                            Explore the hills and trails of Himchari National Park.
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
                            Capture stunning landscapes where hills, waterfalls, and sea meet.
                          </p>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="p-4 flex items-start gap-3">
                        <div className="bg-primary/10 p-2 rounded-full">
                          <Leaf className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium">Nature Walks</h4>
                          <p className="text-sm text-muted-foreground">
                            Enjoy peaceful walks through the natural surroundings.
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <h3 className="text-xl font-semibold mt-6">Waterfall Experience</h3>
                  <p className="text-muted-foreground mb-4">
                    The Himchari waterfall is the main attraction of the area, especially during the monsoon season when
                    it&apos;s at its fullest:
                  </p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      <span>Visit the main waterfall viewpoint</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      <span>Take refreshing dips in natural pools</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      <span>Enjoy picnics near the waterfall</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      <span>Photograph the waterfall meeting the sea</span>
                    </li>
                  </ul>
                </TabsContent>

                <TabsContent value="tips" className="space-y-4 mt-4">
                  <h3 className="text-xl font-semibold">Travel Tips</h3>

                  <div className="space-y-4">
                    <Card>
                      <CardContent className="p-4">
                        <h4 className="font-medium text-lg">Best Time to Visit</h4>
                        <p className="text-sm text-muted-foreground">
                          The best time to visit Himchari Beach is from November to March when the weather is dry and
                          pleasant. If you want to see the waterfall at its fullest, visit during or just after the
                          monsoon season (July to October), but be prepared for occasional rain.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="p-4">
                        <h4 className="font-medium text-lg">How to Get There</h4>
                        <p className="text-sm text-muted-foreground">
                          Himchari Beach is located about 8 km south of Cox&apos;s Bazar town. You can hire a local
                          taxi, auto-rickshaw, or join a tour to reach the beach. The journey takes approximately 20-30
                          minutes from Cox&apos;s Bazar.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="p-4">
                        <h4 className="font-medium text-lg">What to Bring</h4>
                        <ul className="text-sm text-muted-foreground space-y-2">
                          <li>• Comfortable walking shoes for hiking</li>
                          <li>• Sunscreen, sunglasses, and hat for sun protection</li>
                          <li>• Insect repellent for forest areas</li>
                          <li>• Towels and change of clothes if planning to swim</li>
                          <li>• Drinking water and snacks</li>
                          <li>• Camera for photography</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="p-4">
                        <h4 className="font-medium text-lg">Safety Tips</h4>
                        <ul className="text-sm text-muted-foreground space-y-2">
                          <li>• Be careful when hiking, especially during wet conditions</li>
                          <li>• Stay on designated paths in the national park</li>
                          <li>• Be cautious while swimming as there are no lifeguards</li>
                          <li>• Watch out for slippery rocks near the waterfall</li>
                          <li>• Keep track of tide times when on the beach</li>
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
                          The beach is part of this national park, which offers hiking trails, diverse wildlife, and
                          panoramic viewpoints.
                        </p>
                        <div className="flex items-center gap-2 text-sm">
                          <MapPin className="h-3 w-3" />
                          <span>Surrounds Himchari Beach</span>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="p-4">
                        <h4 className="font-medium text-lg">Inani Beach</h4>
                        <p className="text-sm text-muted-foreground mb-2">
                          Known for its unique coral stones and crystal clear waters, Inani Beach is another beautiful
                          coastal destination.
                        </p>
                        <div className="flex items-center gap-2 text-sm">
                          <MapPin className="h-3 w-3" />
                          <span>10 km south of Himchari</span>
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
                          <span>15 km from Himchari</span>
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
                        <p className="text-sm text-muted-foreground">8 km south of Cox&apos;s Bazar, Bangladesh</p>
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
                        <p className="text-sm text-muted-foreground">4-5 hours</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Info className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <h4 className="font-medium">Known For</h4>
                        <p className="text-sm text-muted-foreground">Waterfall, hills, natural beauty, national park</p>
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
                    Explore our curated tour packages that include a visit to Himchari Beach and other attractions.
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
                    src="https://mj-ahmad.github.io/mja2025/img/inani00.png"
                    alt="Inani Beach"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">Inani Beach</h3>
                  <p className="text-muted-foreground mb-4">
                    Known for its unique coral stones and crystal clear waters, located 18 km south of Cox&apos;s Bazar.
                  </p>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/attractions/beaches/inani">
                      Explore Inani Beach <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

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
                    The main beach with vibrant activities and entertainment, located in the heart of Cox&apos;s Bazar.
                  </p>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/attractions/beaches/laboni">
                      Explore Laboni Beach <ChevronRight className="h-4 w-4 ml-1" />
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
              <h2 className="text-2xl md:text-3xl font-bold">Ready to Experience Himchari Beach?</h2>
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
      </div>
    </>
  )
}

