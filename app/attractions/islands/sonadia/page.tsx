import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { MapPin, Clock, Calendar, Waves, Sun, Camera, Info, ChevronRight, Bird, Leaf } from "lucide-react"

export default function SonadiaIslandPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full">
        <Image
          src="https://mj-ahmad.github.io/mja2025/img/sonadia00.png"
          alt="Sonadia Island"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12 container">
          <Badge className="mb-4 w-fit">ISLAND</Badge>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Sonadia Island</h1>
          <p className="text-white/90 max-w-3xl text-lg mb-6">
            A paradise for birdwatchers with mangrove forests, pristine beaches, and diverse wildlife.
          </p>
          <div className="flex flex-wrap gap-4 mb-2">
            <div className="flex items-center gap-2 text-white/90">
              <MapPin className="h-4 w-4" />
              <span>7 km west of Cox's Bazar</span>
            </div>
            <div className="flex items-center gap-2 text-white/90">
              <Calendar className="h-4 w-4" />
              <span>Best time: November to March</span>
            </div>
            <div className="flex items-center gap-2 text-white/90">
              <Clock className="h-4 w-4" />
              <span>Recommended visit: Day trip</span>
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
              <h2>About Sonadia Island</h2>
              <p>
                Sonadia Island is a small island located about 7 kilometers west of Cox's Bazar, known for its unspoiled
                natural beauty and ecological significance. The island spans approximately 9 square kilometers and is
                characterized by its mangrove forests, sand dunes, and pristine beaches.
              </p>
              <p>
                What makes Sonadia particularly special is its status as an important habitat for migratory birds. The
                island has been recognized as an Ecologically Critical Area (ECA) by the government of Bangladesh due to
                its rich biodiversity and ecological importance. It serves as a wintering ground for numerous species of
                migratory birds, making it a paradise for birdwatchers and nature enthusiasts.
              </p>
              <p>
                Unlike more developed tourist destinations, Sonadia Island offers a more serene and untouched
                experience. The island's natural landscapes, including its beaches, mangrove forests, and salt marshes,
                provide visitors with a glimpse of Bangladesh's coastal ecosystem in its pristine form.
              </p>
            </div>

            {/* Gallery */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Gallery</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="relative aspect-square overflow-hidden rounded-lg">
                  <Image
                    src="https://mj-ahmad.github.io/mja2025/img/sonadia01.png"
                    alt="Sonadia Island coastal view with traditional boat"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="relative aspect-square overflow-hidden rounded-lg">
                  <Image
                    src="https://mj-ahmad.github.io/mja2025/img/sonadia02.png"
                    alt="Sonadia Island landscape"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="relative aspect-square overflow-hidden rounded-lg">
                  <Image
                    src="https://mj-ahmad.github.io/mja2025/img/sonadia03.png"
                    alt="Sonadia Island beach view"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="relative aspect-square overflow-hidden rounded-lg">
                  <Image
                    src="https://mj-ahmad.github.io/mja2025/img/sonadia04.png"
                    alt="Sonadia Island mangrove forest"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="relative aspect-square overflow-hidden rounded-lg">
                  <Image
                    src="https://mj-ahmad.github.io/mja2025/img/sonadia05.png"
                    alt="Sonadia Island wildlife"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="relative aspect-square overflow-hidden rounded-lg">
                  <Image
                    src="https://mj-ahmad.github.io/mja2025/img/sonadia06.png"
                    alt="Sonadia Island sunset view"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>

            {/* Tabs for Different Information */}
            <Tabs defaultValue="wildlife" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="wildlife">Wildlife</TabsTrigger>
                <TabsTrigger value="activities">Activities</TabsTrigger>
                <TabsTrigger value="tips">Travel Tips</TabsTrigger>
              </TabsList>

              <TabsContent value="wildlife" className="space-y-4 mt-4">
                <h3 className="text-xl font-semibold">Wildlife and Biodiversity</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card>
                    <CardContent className="p-4 flex items-start gap-3">
                      <div className="bg-primary/10 p-2 rounded-full">
                        <Bird className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium">Migratory Birds</h4>
                        <p className="text-sm text-muted-foreground">
                          Home to numerous species of migratory birds during winter months.
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
                        <h4 className="font-medium">Mangrove Forests</h4>
                        <p className="text-sm text-muted-foreground">
                          Diverse mangrove ecosystem supporting various plant and animal species.
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
                          <path d="M16.5 9.4 7.55 4.24" />
                          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                          <polyline points="3.29 7 12 12 20.71 7" />
                          <line x1="12" y1="22" x2="12" y2="12" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium">Marine Life</h4>
                        <p className="text-sm text-muted-foreground">
                          Coastal waters rich in marine biodiversity, including various fish species.
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
                          <path d="m9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08" />
                          <path d="M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium">Sea Turtles</h4>
                        <p className="text-sm text-muted-foreground">
                          Nesting site for endangered sea turtles during certain seasons.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <h3 className="text-xl font-semibold mt-6">Bird Species</h3>
                <p className="text-muted-foreground mb-4">
                  Sonadia Island is known for its rich avian diversity, especially during winter months:
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span>Eurasian Curlew</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span>Great Knot</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span>Spoon-billed Sandpiper</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span>Black-tailed Godwit</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span>Northern Pintail</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span>Lesser Sand Plover</span>
                  </li>
                </ul>
              </TabsContent>

              <TabsContent value="activities" className="space-y-4 mt-4">
                <h3 className="text-xl font-semibold">Island Activities</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card>
                    <CardContent className="p-4 flex items-start gap-3">
                      <div className="bg-primary/10 p-2 rounded-full">
                        <Bird className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium">Birdwatching</h4>
                        <p className="text-sm text-muted-foreground">
                          Observe various species of migratory and local birds in their natural habitat.
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
                          Explore the mangrove forests and natural landscapes of the island.
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
                          Capture stunning wildlife, landscapes, and natural beauty.
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-4 flex items-start gap-3">
                      <div className="bg-primary/10 p-2 rounded-full">
                        <Waves className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium">Beach Relaxation</h4>
                        <p className="text-sm text-muted-foreground">
                          Enjoy the pristine and uncrowded beaches of the island.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <h3 className="text-xl font-semibold mt-6">Eco-Tourism</h3>
                <p className="text-muted-foreground mb-4">Sonadia Island offers unique eco-tourism experiences:</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span>Guided eco-tours</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span>Mangrove forest exploration</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span>Wildlife observation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span>Sustainable fishing demonstrations</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span>Environmental education programs</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span>Beach cleanup initiatives</span>
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
                        To reach Sonadia Island, you need to take a boat from Cox's Bazar. Boats can be arranged from
                        the Kolatoli beach area or through tour operators. The journey takes approximately 30-45 minutes
                        depending on sea conditions.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-4">
                      <h4 className="font-medium text-lg">Best Time to Visit</h4>
                      <p className="text-sm text-muted-foreground">
                        The best time to visit Sonadia Island is from November to March when the weather is dry and
                        pleasant. For birdwatchers, the winter months (December to February) are ideal as migratory
                        birds visit the island during this period. Avoid the monsoon season (June to September) due to
                        rough sea conditions.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-4">
                      <h4 className="font-medium text-lg">What to Pack</h4>
                      <ul className="text-sm text-muted-foreground space-y-2">
                        <li>• Binoculars for birdwatching</li>
                        <li>• Camera with zoom lens for wildlife photography</li>
                        <li>• Sunscreen, sunglasses, and hat for sun protection</li>
                        <li>• Insect repellent</li>
                        <li>• Water bottle and snacks</li>
                        <li>• Light, breathable clothing</li>
                        <li>• Comfortable walking shoes</li>
                        <li>• First aid kit</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-4">
                      <h4 className="font-medium text-lg">Important Information</h4>
                      <ul className="text-sm text-muted-foreground space-y-2">
                        <li>• There are limited facilities on the island, so come prepared</li>
                        <li>• Consider hiring a local guide for a more informative experience</li>
                        <li>• Check weather conditions before planning your trip</li>
                        <li>• Respect the natural environment and wildlife</li>
                        <li>• Follow the "leave no trace" principle</li>
                        <li>• Most visits are day trips as accommodation options are very limited</li>
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
                      <p className="text-sm text-muted-foreground">7 km west of Cox's Bazar, Bangladesh</p>
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
                      <p className="text-sm text-muted-foreground">Day trip</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Bird className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h4 className="font-medium">Known For</h4>
                      <p className="text-sm text-muted-foreground">
                        Migratory birds, mangrove forests, pristine beaches
                      </p>
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

            {/* Conservation Notice */}
            <Card className="border-green-200 bg-green-50">
              <CardContent className="p-6 space-y-4">
                <h3 className="text-lg font-semibold flex items-center gap-2 text-green-800">
                  <Info className="h-5 w-5" />
                  <span>Conservation Notice</span>
                </h3>
                <p className="text-sm text-green-700">
                  Sonadia Island is an Ecologically Critical Area (ECA) and an important habitat for endangered species.
                  Please help protect this fragile ecosystem by:
                </p>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• Not disturbing wildlife, especially birds</li>
                  <li>• Taking all trash with you when you leave</li>
                  <li>• Staying on designated paths</li>
                  <li>• Not collecting plants, shells, or other natural items</li>
                  <li>• Keeping noise levels to a minimum</li>
                </ul>
              </CardContent>
            </Card>

            {/* Book a Tour */}
            <Card className="bg-primary text-primary-foreground">
              <CardContent className="p-6 space-y-4">
                <h3 className="text-lg font-semibold">Book a Tour Package</h3>
                <p className="text-sm">
                  Explore our curated eco-tour packages that include a visit to Sonadia Island with expert guides.
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
                  src="https://mj-ahmad.github.io/mja2025/img/maheshkhali00.png"
                  alt="Maheshkhali Island"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Maheshkhali Island</h3>
                <p className="text-muted-foreground mb-4">
                  Famous for its Buddhist temples and panoramic views, offering a rich cultural experience.
                </p>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/attractions/islands/maheshkhali">
                    Explore Maheshkhali Island <ChevronRight className="h-4 w-4 ml-1" />
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
            <h2 className="text-2xl md:text-3xl font-bold">Ready to Experience Sonadia Island?</h2>
            <p className="text-white/80">
              Let us help you plan the perfect eco-tour with our customized packages and expert guides.
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

