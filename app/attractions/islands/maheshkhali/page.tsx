import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { MapPin, Clock, Calendar, Sun, Camera, Info, ChevronRight, Mountain, Landmark, Bike } from "lucide-react"

export default function MaheshkhaliIslandPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full">
        <Image
          src="https://mj-ahmad.github.io/mja2025/img/maheshkhali01.png"
          alt="Maheshkhali Island"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12 container">
          <Badge className="mb-4 w-fit">ISLAND</Badge>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Maheshkhali Island</h1>
          <p className="text-white/90 max-w-3xl text-lg mb-6">
            Famous for its Buddhist temples, panoramic views, and rich cultural heritage near Cox's Bazar.
          </p>
          <div className="flex flex-wrap gap-4 mb-2">
            <div className="flex items-center gap-2 text-white/90">
              <MapPin className="h-4 w-4" />
              <span>11 km from Cox's Bazar</span>
            </div>
            <div className="flex items-center gap-2 text-white/90">
              <Calendar className="h-4 w-4" />
              <span>Best time: October to March</span>
            </div>
            <div className="flex items-center gap-2 text-white/90">
              <Clock className="h-4 w-4" />
              <span>Recommended visit: Day trip or 1-2 days</span>
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
              <h2>About Maheshkhali Island</h2>
              <p>
                Maheshkhali is a picturesque island located in the Bay of Bengal, approximately 11 kilometers from Cox's
                Bazar. The island is known for its hilly landscape, religious sites, and cultural diversity, offering
                visitors a unique blend of natural beauty and cultural heritage.
              </p>
              <p>
                The island spans about 85 square kilometers and is characterized by its hills, mangrove forests, and
                salt fields. Maheshkhali is home to several ethnic communities, including Bengalis, Rakhines, and
                indigenous groups, each contributing to the island's rich cultural tapestry.
              </p>
              <p>
                What makes Maheshkhali particularly special are its ancient Buddhist temples and Hindu shrines, some
                dating back several centuries. The island also offers stunning panoramic views from its hills, making it
                a favorite destination for photographers and nature lovers.
              </p>
            </div>

            {/* Gallery */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Gallery</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="relative aspect-square overflow-hidden rounded-lg">
                  <Image
                    src="https://mj-ahmad.github.io/mja2025/img/maheshkhali01.png"
                    alt="Maheshkhali Island Temple View"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="relative aspect-square overflow-hidden rounded-lg">
                  <Image
                    src="https://mj-ahmad.github.io/mja2025/img/maheshkhali02.png"
                    alt="Maheshkhali Island Panoramic View"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="relative aspect-square overflow-hidden rounded-lg">
                  <Image
                    src="https://mj-ahmad.github.io/mja2025/img/maheshkhali03.png"
                    alt="Maheshkhali Island Cultural Site"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="relative aspect-square overflow-hidden rounded-lg">
                  <Image
                    src="https://mj-ahmad.github.io/mja2025/img/maheshkhali04.png"
                    alt="Maheshkhali Island Landscape"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="relative aspect-square overflow-hidden rounded-lg">
                  <Image
                    src="https://mj-ahmad.github.io/mja2025/img/maheshkhali05.png"
                    alt="Maheshkhali Island Salt Fields"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="relative aspect-square overflow-hidden rounded-lg">
                  <Image
                    src="https://mj-ahmad.github.io/mja2025/img/maheshkhali06.png"
                    alt="Maheshkhali Island Traditional Village"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>

            {/* Tabs for Different Information */}
            <Tabs defaultValue="attractions" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="attractions">Attractions</TabsTrigger>
                <TabsTrigger value="activities">Activities</TabsTrigger>
                <TabsTrigger value="tips">Travel Tips</TabsTrigger>
              </TabsList>

              <TabsContent value="attractions" className="space-y-4 mt-4">
                <h3 className="text-xl font-semibold">Key Attractions</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card>
                    <CardContent className="p-4 flex items-start gap-3">
                      <div className="bg-primary/10 p-2 rounded-full">
                        <Landmark className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium">Adinath Temple</h4>
                        <p className="text-sm text-muted-foreground">
                          Ancient Hindu temple dedicated to Lord Shiva, located on a hilltop.
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-4 flex items-start gap-3">
                      <div className="bg-primary/10 p-2 rounded-full">
                        <Landmark className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium">Buddhist Monasteries</h4>
                        <p className="text-sm text-muted-foreground">
                          Several ancient Buddhist temples showcasing traditional architecture.
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
                        <h4 className="font-medium">Adinath Hill</h4>
                        <p className="text-sm text-muted-foreground">
                          Offers panoramic views of the island and the Bay of Bengal.
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
                          <rect x="3" y="8" width="18" height="4" rx="1" />
                          <path d="M12 8v-5" />
                          <path d="M8 3h8" />
                          <path d="M12 12v9" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium">Salt Fields</h4>
                        <p className="text-sm text-muted-foreground">
                          Traditional salt production fields that are part of the local economy.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <h3 className="text-xl font-semibold mt-6">Cultural Sites</h3>
                <p className="text-muted-foreground mb-4">
                  Maheshkhali Island is known for its religious and cultural significance:
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span>Chandranath Temple</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span>Rakhaine Buddhist Temple</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span>Bara Awlia Shrine</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span>Traditional Rakhaine Villages</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span>Local Handicraft Centers</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span>Mangrove Forests</span>
                  </li>
                </ul>
              </TabsContent>

              <TabsContent value="activities" className="space-y-4 mt-4">
                <h3 className="text-xl font-semibold">Island Activities</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card>
                    <CardContent className="p-4 flex items-start gap-3">
                      <div className="bg-primary/10 p-2 rounded-full">
                        <Mountain className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium">Hill Trekking</h4>
                        <p className="text-sm text-muted-foreground">
                          Explore the hills and enjoy panoramic views of the island.
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-4 flex items-start gap-3">
                      <div className="bg-primary/10 p-2 rounded-full">
                        <Landmark className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium">Temple Visits</h4>
                        <p className="text-sm text-muted-foreground">
                          Explore ancient Buddhist temples and Hindu shrines.
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
                          Capture stunning landscapes, cultural sites, and local life.
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-4 flex items-start gap-3">
                      <div className="bg-primary/10 p-2 rounded-full">
                        <Bike className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium">Cycling</h4>
                        <p className="text-sm text-muted-foreground">
                          Rent a bicycle to explore the island at your own pace.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <h3 className="text-xl font-semibold mt-6">Cultural Experiences</h3>
                <p className="text-muted-foreground mb-4">Immerse yourself in the local culture and traditions:</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span>Visit traditional Rakhaine villages</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span>Observe salt production techniques</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span>Shop for local handicrafts</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span>Try authentic local cuisine</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span>Attend local festivals (seasonal)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span>Witness traditional fishing methods</span>
                  </li>
                </ul>
              </TabsContent>

              <TabsContent value="tips" className="space-y-4 mt-4">
                <h3 className="text-xl font-semibold">Travel Tips</h3>

                <div className="space-y-4">
                  <Card>
                    <CardContent className="p-4">
                      <h4 className="font-medium text-lg">How to Get There</h4>
                      <p className="text-sm text-muted-foreground">
                        To reach Maheshkhali Island, you need to take a ferry or speed boat from Ghat No. 7 in Cox's
                        Bazar. The journey takes approximately 30-45 minutes. Boats operate throughout the day, but it's
                        advisable to check the schedule in advance.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-4">
                      <h4 className="font-medium text-lg">Best Time to Visit</h4>
                      <p className="text-sm text-muted-foreground">
                        The best time to visit Maheshkhali Island is from October to March when the weather is dry and
                        pleasant. The island can be visited during other months as well, but be prepared for occasional
                        rain during the monsoon season (June to September).
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-4">
                      <h4 className="font-medium text-lg">What to Pack</h4>
                      <ul className="text-sm text-muted-foreground space-y-2">
                        <li>• Comfortable walking shoes for hill trekking</li>
                        <li>• Light, breathable clothing</li>
                        <li>• Sunscreen, sunglasses, and hat for sun protection</li>
                        <li>• Insect repellent</li>
                        <li>• Water bottle and snacks</li>
                        <li>• Camera for photography</li>
                        <li>• Cash (there are limited ATM facilities)</li>
                        <li>• Modest clothing for temple visits</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-4">
                      <h4 className="font-medium text-lg">Local Transportation</h4>
                      <p className="text-sm text-muted-foreground">On the island, you can get around by:</p>
                      <ul className="text-sm text-muted-foreground space-y-2 mt-2">
                        <li>• Renting a bicycle</li>
                        <li>• Hiring a local auto-rickshaw or van</li>
                        <li>• Walking (for shorter distances)</li>
                        <li>• Motorcycle taxis (available in some areas)</li>
                      </ul>
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
                      <p className="text-sm text-muted-foreground">11 km from Cox's Bazar, Bangladesh</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Calendar className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h4 className="font-medium">Best Season</h4>
                      <p className="text-sm text-muted-foreground">October to March (Dry Season)</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h4 className="font-medium">Ideal Duration</h4>
                      <p className="text-sm text-muted-foreground">Day trip or 1-2 days</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Info className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h4 className="font-medium">Known For</h4>
                      <p className="text-sm text-muted-foreground">Buddhist temples, Hindu shrines, panoramic views</p>
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
                    <span>October - February</span>
                    <span className="text-sm">22°C - 28°C</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>March - May</span>
                    <span className="text-sm">25°C - 34°C</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>June - September</span>
                    <span className="text-sm">25°C - 32°C (Rainy)</span>
                  </div>
                </div>

                <div className="text-sm text-muted-foreground">
                  <Info className="h-4 w-4 inline mr-1" />
                  The weather is tropical with high humidity year-round.
                </div>
              </CardContent>
            </Card>

            {/* Cultural Etiquette */}
            <Card className="border-blue-200 bg-blue-50">
              <CardContent className="p-6 space-y-4">
                <h3 className="text-lg font-semibold flex items-center gap-2 text-blue-800">
                  <Info className="h-5 w-5" />
                  <span>Cultural Etiquette</span>
                </h3>
                <p className="text-sm text-blue-700">When visiting religious sites on Maheshkhali Island:</p>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• Dress modestly (cover shoulders and knees)</li>
                  <li>• Remove shoes before entering temples</li>
                  <li>• Ask permission before taking photos of people</li>
                  <li>• Speak softly in religious areas</li>
                  <li>• Respect local customs and traditions</li>
                </ul>
              </CardContent>
            </Card>

            {/* Book a Tour */}
            <Card className="bg-primary text-primary-foreground">
              <CardContent className="p-6 space-y-4">
                <h3 className="text-lg font-semibold">Book a Tour Package</h3>
                <p className="text-sm">
                  Explore our curated tour packages that include a visit to Maheshkhali Island with transportation and
                  guided tours.
                </p>
                <Button variant="secondary" className="w-full" asChild>
                  <Link href="/packages/booking?package=standard">View Tour Packages</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Other Islands Section */}
      <section className="bg-muted py-12">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Explore Other Islands</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="https://mj-ahmad.github.io/mja2025/img/st00.png"
                  alt="St. Martin's Island"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">St. Martin's Island</h3>
                <p className="text-muted-foreground mb-4">
                  Bangladesh's only coral island with pristine beaches, crystal clear waters, and vibrant marine life.
                </p>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/attractions/islands/st-martins">
                    Explore St. Martin's Island <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="https://mj-ahmad.github.io/mja2025/img/sonadia00.png"
                  alt="Sonadia Island"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Sonadia Island</h3>
                <p className="text-muted-foreground mb-4">
                  A paradise for birdwatchers with mangrove forests and pristine beaches.
                </p>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/attractions/islands/sonadia">
                    Explore Sonadia Island <ChevronRight className="h-4 w-4 ml-1" />
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
            <h2 className="text-2xl md:text-3xl font-bold">Ready to Experience Maheshkhali Island?</h2>
            <p className="text-white/80">
              Let us help you plan the perfect cultural tour with our customized packages and services.
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
  )
}

