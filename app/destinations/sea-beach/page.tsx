import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { MapPin, Calendar, Clock, Waves, Sun, Umbrella, Ship, Fish, Utensils, Hotel, Car, Info } from "lucide-react"
import TouristHomeFooter from "@/components/tourist-home-footer"

export const metadata: Metadata = {
  title: "Cox's Bazar Sea Beach | Trusted Ally Tourism",
  description:
    "Explore the world's longest natural sea beach at Cox's Bazar, Bangladesh. Discover its beauty, activities, and plan your perfect beach getaway.",
}

export default function SeaBeachPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[70vh] w-full">
          <Image
            src="https://mj-ahmad.github.io/mja2025/img/discover01.png"
            alt="Cox's Bazar Sea Beach"
            fill
            className="object-cover brightness-75"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12 container">
            <Badge className="mb-4 w-fit">DESTINATION</Badge>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Cox's Bazar: The World's Longest Natural Sea Beach
            </h1>
            <p className="text-white/90 max-w-3xl text-lg mb-6">
              Stretching an unbroken 120 kilometers along the Bay of Bengal, Cox's Bazar is a natural wonder and
              Bangladesh's premier beach destination.
            </p>
            <div className="flex flex-wrap gap-4 mb-2">
              <div className="flex items-center gap-2 text-white/90">
                <MapPin className="h-4 w-4" />
                <span>Cox's Bazar, Bangladesh</span>
              </div>
              <div className="flex items-center gap-2 text-white/90">
                <Calendar className="h-4 w-4" />
                <span>Best time: November to March</span>
              </div>
              <div className="flex items-center gap-2 text-white/90">
                <Clock className="h-4 w-4" />
                <span>Recommended stay: 3-5 days</span>
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
                <h2>About Cox's Bazar Sea Beach</h2>
                <p>
                  Cox's Bazar, named after Captain Hiram Cox, is home to the world's longest natural sea beach,
                  stretching an unbroken 120 kilometers (75 miles) along the Bay of Bengal. This magnificent beach is
                  the pride of Bangladesh and a must-visit destination for travelers from around the world.
                </p>
                <p>
                  The gentle slope of the beach makes it perfect for swimming and sunbathing, while the stunning views
                  of sunrise and sunset over the Bay of Bengal create unforgettable moments. The beach is lined with
                  coconut and palm trees, adding to its tropical charm.
                </p>
                <p>
                  Beyond its natural beauty, Cox's Bazar offers a rich cultural experience with local fishing
                  communities, seafood cuisine, and traditional handicrafts. The area is also home to several
                  attractions including Himchari National Park, Inani Beach, and the Buddhist temples of Ramu.
                </p>
              </div>

              {/* Gallery */}
              <div>
                <h2 className="text-2xl font-bold mb-4">Gallery</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="relative aspect-square overflow-hidden rounded-lg">
                    <Image
                      src="https://mj-ahmad.github.io/mja2025/img/discover01.png"
                      alt="Cox's Bazar Beach Panoramic View"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="relative aspect-square overflow-hidden rounded-lg">
                    <Image
                      src="https://mj-ahmad.github.io/mja2025/img/discover02.png"
                      alt="Cox's Bazar Beach Sunset"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="relative aspect-square overflow-hidden rounded-lg">
                    <Image
                      src="https://mj-ahmad.github.io/mja2025/img/discover03.png"
                      alt="Cox's Bazar Beach Activities"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="relative aspect-square overflow-hidden rounded-lg">
                    <Image
                      src="https://mj-ahmad.github.io/mja2025/img/the0.png"
                      alt="Cox's Bazar Shoreline"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="relative aspect-square overflow-hidden rounded-lg">
                    <Image
                      src="https://mj-ahmad.github.io/mja2025/img/sonadia05.png"
                      alt="Cox's Bazar Coastal Landscape"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="relative aspect-square overflow-hidden rounded-lg">
                    <Image
                      src="https://mj-ahmad.github.io/mja2025/img/sonadia06.png"
                      alt="Cox's Bazar Beach Scenery"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              </div>

              {/* Tabs for Different Information */}
              <Tabs defaultValue="activities" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="activities">Activities</TabsTrigger>
                  <TabsTrigger value="attractions">Attractions</TabsTrigger>
                  <TabsTrigger value="tips">Travel Tips</TabsTrigger>
                  <TabsTrigger value="history">History</TabsTrigger>
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
                            Enjoy swimming in the Bay of Bengal with gentle waves perfect for all skill levels.
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
                            Relax on the golden sands and soak up the tropical sun.
                          </p>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="p-4 flex items-start gap-3">
                        <div className="bg-primary/10 p-2 rounded-full">
                          <Umbrella className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium">Beach Camping</h4>
                          <p className="text-sm text-muted-foreground">
                            Set up camp on designated areas and enjoy a night under the stars.
                          </p>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="p-4 flex items-start gap-3">
                        <div className="bg-primary/10 p-2 rounded-full">
                          <Ship className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium">Boat Rides</h4>
                          <p className="text-sm text-muted-foreground">
                            Take a traditional boat ride along the coast or to nearby islands.
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <h3 className="text-xl font-semibold mt-6">Water Sports</h3>
                  <p className="text-muted-foreground mb-4">
                    Cox's Bazar offers various water sports activities for adventure enthusiasts:
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
                      <span>Surfing (seasonal)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      <span>Beach Volleyball</span>
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

                <TabsContent value="attractions" className="space-y-4 mt-4">
                  <h3 className="text-xl font-semibold">Nearby Attractions</h3>
                  <div className="grid grid-cols-1 gap-4">
                    <Card>
                      <CardContent className="p-4">
                        <h4 className="font-medium text-lg">Himchari National Park</h4>
                        <p className="text-sm text-muted-foreground mb-2">
                          Located about 8 km south of Cox's Bazar, Himchari National Park offers lush green hills,
                          waterfalls, and breathtaking views of the Bay of Bengal.
                        </p>
                        <div className="flex items-center gap-2 text-sm">
                          <MapPin className="h-3 w-3" />
                          <span>8 km from Cox's Bazar town</span>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="p-4">
                        <h4 className="font-medium text-lg">Inani Beach</h4>
                        <p className="text-sm text-muted-foreground mb-2">
                          Known for its unique coral stones and clearer waters, Inani Beach is a more secluded
                          alternative to the main beach.
                        </p>
                        <div className="flex items-center gap-2 text-sm">
                          <MapPin className="h-3 w-3" />
                          <span>23 km south of Cox's Bazar</span>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="p-4">
                        <h4 className="font-medium text-lg">Ramu</h4>
                        <p className="text-sm text-muted-foreground mb-2">
                          A Buddhist village known for its monasteries, pagodas, and handicrafts. The village offers a
                          glimpse into the local Buddhist culture.
                        </p>
                        <div className="flex items-center gap-2 text-sm">
                          <MapPin className="h-3 w-3" />
                          <span>10 km east of Cox's Bazar</span>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="p-4">
                        <h4 className="font-medium text-lg">Maheshkhali Island</h4>
                        <p className="text-sm text-muted-foreground mb-2">
                          An island with hills, mangrove forests, and salt fields. It's home to several Hindu and
                          Buddhist temples.
                        </p>
                        <div className="flex items-center gap-2 text-sm">
                          <MapPin className="h-3 w-3" />
                          <span>Accessible by boat from Cox's Bazar</span>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="p-4">
                        <h4 className="font-medium text-lg">Marine Drive</h4>
                        <p className="text-sm text-muted-foreground mb-2">
                          A 80 km scenic road along the coastline from Cox's Bazar to Teknaf, offering stunning views of
                          the Bay of Bengal on one side and hills on the other.
                        </p>
                        <div className="flex items-center gap-2 text-sm">
                          <MapPin className="h-3 w-3" />
                          <span>Starts from Cox's Bazar town</span>
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
                          The best time to visit Cox's Bazar is from November to March when the weather is dry and
                          pleasant. Avoid the monsoon season (June to September) as heavy rainfall can disrupt travel
                          plans.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="p-4">
                        <h4 className="font-medium text-lg">Local Customs</h4>
                        <p className="text-sm text-muted-foreground">
                          Bangladesh is a conservative Muslim country. While Cox's Bazar is a tourist destination, it's
                          advisable to dress modestly, especially when away from the beach. Respect local customs and
                          traditions.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="p-4">
                        <h4 className="font-medium text-lg">Safety</h4>
                        <ul className="text-sm text-muted-foreground space-y-2">
                          <li>• Be cautious while swimming as there are no lifeguards on most parts of the beach</li>
                          <li>• Keep your valuables secure, especially on crowded beaches</li>
                          <li>• Avoid swimming during high tide or rough sea conditions</li>
                          <li>• Stay hydrated and use sun protection</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="p-4">
                        <h4 className="font-medium text-lg">What to Pack</h4>
                        <ul className="text-sm text-muted-foreground space-y-2">
                          <li>• Lightweight, breathable clothing</li>
                          <li>• Swimwear and beach essentials</li>
                          <li>• Sunscreen, sunglasses, and hat</li>
                          <li>• Insect repellent</li>
                          <li>• Comfortable walking shoes</li>
                          <li>• Basic first aid kit</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="history" className="space-y-4 mt-4">
                  <h3 className="text-xl font-semibold">History and Culture</h3>

                  <div className="prose max-w-none">
                    <p>
                      Cox's Bazar is named after Captain Hiram Cox, an officer of the British East India Company who was
                      appointed as the Superintendent of Palongkee (now Cox's Bazar) in 1799. Captain Cox was tasked
                      with settling Burmese refugees in the area and worked tirelessly to rehabilitate them. He died in
                      1799 before completing his work, and a market was established in his memory, which later became
                      known as Cox's Bazar.
                    </p>

                    <h4>Cultural Significance</h4>
                    <p>
                      The area around Cox's Bazar is home to diverse ethnic communities, including Bengali Muslims,
                      Rakhine Buddhists, and indigenous groups like the Chakma and Marma. This cultural diversity is
                      reflected in the local cuisine, festivals, and handicrafts.
                    </p>

                    <h4>Traditional Lifestyle</h4>
                    <p>
                      Fishing is a major occupation for the local population, and traditional fishing methods can still
                      be observed along the coast. The local markets sell fresh seafood, and visitors can enjoy
                      authentic Bengali and Rakhine cuisine.
                    </p>

                    <h4>Development as a Tourist Destination</h4>
                    <p>
                      While Cox's Bazar has been known to Bangladeshis for generations, it began to develop as a major
                      tourist destination in the 1980s and 1990s. Today, it is the most visited tourist destination in
                      Bangladesh, with millions of domestic and international tourists visiting annually.
                    </p>

                    <h4>Conservation Efforts</h4>
                    <p>
                      As tourism has grown, so have concerns about environmental conservation. Various initiatives are
                      underway to protect the natural beauty of Cox's Bazar, including beach cleaning programs, marine
                      conservation efforts, and sustainable tourism practices.
                    </p>
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
                        <p className="text-sm text-muted-foreground">Cox's Bazar, Chittagong Division, Bangladesh</p>
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
                        <p className="text-sm text-muted-foreground">3-5 days</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Fish className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <h4 className="font-medium">Known For</h4>
                        <p className="text-sm text-muted-foreground">
                          World's longest natural sea beach, seafood, sunsets
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Services */}
              <Card>
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-lg font-semibold">Services</h3>

                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Hotel className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <h4 className="font-medium">Accommodation</h4>
                        <p className="text-sm text-muted-foreground">Wide range from luxury resorts to budget hotels</p>
                        <Link href="/services/accommodation" className="text-sm text-primary hover:underline">
                          View Options
                        </Link>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Utensils className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <h4 className="font-medium">Dining</h4>
                        <p className="text-sm text-muted-foreground">Fresh seafood and local Bengali cuisine</p>
                        <Link href="/services/dining" className="text-sm text-primary hover:underline">
                          Explore Restaurants
                        </Link>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Car className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <h4 className="font-medium">Transportation</h4>
                        <p className="text-sm text-muted-foreground">Flights, buses, and local transport options</p>
                        <Link href="/services/transportation" className="text-sm text-primary hover:underline">
                          Transport Details
                        </Link>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Book a Tour */}
              <Card className="bg-primary text-primary-foreground">
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-lg font-semibold">Book a Tour Package</h3>
                  <p className="text-sm">
                    Explore our curated tour packages for Cox's Bazar and enjoy a hassle-free beach vacation.
                  </p>
                  <Button variant="secondary" className="w-full" asChild>
                    <Link href="/services/tours">View Tour Packages</Link>
                  </Button>
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
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-muted py-12">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold">Ready to Experience Cox's Bazar?</h2>
              <p className="text-muted-foreground">
                Let us help you plan the perfect beach getaway with our customized tour packages and services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button size="lg" asChild>
                  <Link href="/services/tours">Book a Tour</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
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

