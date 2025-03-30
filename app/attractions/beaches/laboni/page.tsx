import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { MapPin, Clock, Calendar, Waves, Sun, Info, ChevronRight, Music, ShoppingBag } from "lucide-react"

export default function LaboniBeachPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full">
        <Image
          src="https://mj-ahmad.github.io/mja2025/img/laboni00.png"
          alt="Laboni Beach"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12 container">
          <Badge className="mb-4 w-fit">BEACH</Badge>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Laboni Beach</h1>
          <p className="text-white/90 max-w-3xl text-lg mb-6">
            The main beach of Cox's Bazar with vibrant activities, entertainment, and the heart of the tourist
            experience.
          </p>
          <div className="flex flex-wrap gap-4 mb-2">
            <div className="flex items-center gap-2 text-white/90">
              <MapPin className="h-4 w-4" />
              <span>Central Cox's Bazar</span>
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
              <h2>About Laboni Beach</h2>
              <p>
                Laboni Beach is the main beach area of Cox's Bazar, located near the heart of the town. It serves as the
                central hub for tourists and is the most developed and vibrant part of the world's longest natural sea
                beach.
              </p>
              <p>
                This beach is known for its lively atmosphere, with numerous activities, food stalls, souvenir shops,
                and entertainment options. The golden sands stretch as far as the eye can see, and the gentle waves of
                the Bay of Bengal create a perfect setting for beach lovers.
              </p>
              <p>
                Laboni Beach is particularly famous for its stunning sunsets, where the sky transforms into a canvas of
                vibrant colors as the sun dips below the horizon. The beach is also home to several sculptures and
                landmarks, including the famous "Cox's Bazar" sign that serves as a popular photo spot for visitors.
              </p>
            </div>

            {/* Gallery */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Gallery</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="relative aspect-square overflow-hidden rounded-lg">
                  <Image
                    src="https://mj-ahmad.github.io/mja2025/img/laboni01.png"
                    alt="Laboni Beach - Shoreline waves at sunset"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="relative aspect-square overflow-hidden rounded-lg">
                  <Image
                    src="https://mj-ahmad.github.io/mja2025/img/laboni02.png"
                    alt="Laboni Beach - Beachfront with tourists"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="relative aspect-square overflow-hidden rounded-lg">
                  <Image
                    src="https://mj-ahmad.github.io/mja2025/img/laboni03.png"
                    alt="Laboni Beach - Scenic coastline view"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="relative aspect-square overflow-hidden rounded-lg">
                  <Image
                    src="https://mj-ahmad.github.io/mja2025/img/laboni04.png"
                    alt="Laboni Beach - Beach activities and water sports"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="relative aspect-square overflow-hidden rounded-lg">
                  <Image
                    src="https://mj-ahmad.github.io/mja2025/img/laboni05.png"
                    alt="Laboni Beach - Sunset over the Bay of Bengal"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="relative aspect-square overflow-hidden rounded-lg">
                  <Image
                    src="https://mj-ahmad.github.io/mja2025/img/laboni06.png"
                    alt="Laboni Beach - Beachside relaxation area"
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
                          Enjoy swimming in the Bay of Bengal with designated safe zones.
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
                        <h4 className="font-medium">Beach Sports</h4>
                        <p className="text-sm text-muted-foreground">
                          Play beach volleyball, football, or cricket on the sandy shores.
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-4 flex items-start gap-3">
                      <div className="bg-primary/10 p-2 rounded-full">
                        <ShoppingBag className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium">Shopping</h4>
                        <p className="text-sm text-muted-foreground">
                          Browse beachside shops for souvenirs, handicrafts, and local products.
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-4 flex items-start gap-3">
                      <div className="bg-primary/10 p-2 rounded-full">
                        <Music className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium">Entertainment</h4>
                        <p className="text-sm text-muted-foreground">
                          Enjoy live music, cultural performances, and beach parties.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <h3 className="text-xl font-semibold mt-6">Water Sports</h3>
                <p className="text-muted-foreground mb-4">
                  Laboni Beach offers various water sports activities for adventure enthusiasts:
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span>Jet Skiing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span>Parasailing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span>Banana Boat Rides</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span>Speed Boat Tours</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span>Beach Cycling</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span>Horseback Riding</span>
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
                        The best time to visit Laboni Beach is from November to March when the weather is dry and
                        pleasant. Avoid the monsoon season (June to September) as heavy rainfall can make the beach less
                        enjoyable.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-4">
                      <h4 className="font-medium text-lg">Crowd Management</h4>
                      <p className="text-sm text-muted-foreground">
                        Laboni Beach is the most popular and crowded beach in Cox's Bazar. Visit early in the morning or
                        late afternoon on weekdays to avoid the largest crowds. Weekends and holidays are particularly
                        busy.
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
                        <li>• Cash for shopping and activities</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-4">
                      <h4 className="font-medium text-lg">Safety Tips</h4>
                      <ul className="text-sm text-muted-foreground space-y-2">
                        <li>• Swim only in designated areas</li>
                        <li>• Keep an eye on your belongings as the beach can get crowded</li>
                        <li>• Negotiate prices for activities and souvenirs before committing</li>
                        <li>• Stay hydrated and protect yourself from the sun</li>
                        <li>• Be respectful of local customs and dress modestly when not swimming</li>
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
                      <h4 className="font-medium text-lg">Burmese Market</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        A vibrant market selling traditional Burmese and local products, including handcrafted items,
                        jewelry, and souvenirs.
                      </p>
                      <div className="flex items-center gap-2 text-sm">
                        <MapPin className="h-3 w-3" />
                        <span>Walking distance from Laboni Beach</span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-4">
                      <h4 className="font-medium text-lg">Cox's Bazar Central Beach Park</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        A beautiful park with gardens, walking paths, and seating areas offering panoramic views of the
                        Bay of Bengal.
                      </p>
                      <div className="flex items-center gap-2 text-sm">
                        <MapPin className="h-3 w-3" />
                        <span>Adjacent to Laboni Beach</span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-4">
                      <h4 className="font-medium text-lg">Aggmeda Khyang</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        A large Buddhist monastery containing ancient artifacts and a large bronze statue of Buddha.
                      </p>
                      <div className="flex items-center gap-2 text-sm">
                        <MapPin className="h-3 w-3" />
                        <span>3 km from Laboni Beach</span>
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
                      <p className="text-sm text-muted-foreground">Central Cox's Bazar, Bangladesh</p>
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
                      <p className="text-sm text-muted-foreground">Full day</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Info className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h4 className="font-medium">Known For</h4>
                      <p className="text-sm text-muted-foreground">
                        Vibrant atmosphere, water sports, shopping, entertainment
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

            {/* Book a Tour */}
            <Card className="bg-primary text-primary-foreground">
              <CardContent className="p-6 space-y-4">
                <h3 className="text-lg font-semibold">Book a Tour Package</h3>
                <p className="text-sm">
                  Explore our curated tour packages that include a visit to Laboni Beach and other attractions.
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
                  Known for its unique coral stones and crystal clear waters, located 18 km south of Cox's Bazar.
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
            <h2 className="text-2xl md:text-3xl font-bold">Ready to Experience Laboni Beach?</h2>
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
  )
}

