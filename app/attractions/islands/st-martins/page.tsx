import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { MapPin, Clock, Calendar, Waves, Sun, Camera, Info, ChevronRight, Anchor, Fish } from "lucide-react"

export default function StMartinsIslandPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full">
        <Image
          src="https://mj-ahmad.github.io/mja2025/img/st00.png"
          alt="St. Martin's Island"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12 container">
          <Badge className="mb-4 w-fit">ISLAND</Badge>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">St. Martin's Island</h1>
          <p className="text-white/90 max-w-3xl text-lg mb-6">
            Bangladesh's only coral island with pristine beaches, crystal clear waters, and vibrant marine life.
          </p>
          <div className="flex flex-wrap gap-4 mb-2">
            <div className="flex items-center gap-2 text-white/90">
              <MapPin className="h-4 w-4" />
              <span>Bay of Bengal, 9 km south of Cox's Bazar</span>
            </div>
            <div className="flex items-center gap-2 text-white/90">
              <Calendar className="h-4 w-4" />
              <span>Best time: November to February</span>
            </div>
            <div className="flex items-center gap-2 text-white/90">
              <Clock className="h-4 w-4" />
              <span>Recommended stay: 2-3 days</span>
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
              <h2>About St. Martin's Island</h2>
              <p>
                St. Martin's Island, locally known as "Narikel Jinjira" (Coconut Island), is Bangladesh's only coral
                island and a tropical paradise located in the northeastern part of the Bay of Bengal. This small island,
                spanning just 8 square kilometers, is about 9 kilometers south of Cox's Bazar and can be reached by boat
                or ship.
              </p>
              <p>
                The island is famous for its pristine beaches with crystal clear turquoise waters, vibrant coral reefs,
                and diverse marine life. The beaches are adorned with coconut palms and the shoreline is decorated with
                colorful coral stones. St. Martin's offers a tranquil escape from the mainland, with its laid-back
                atmosphere and natural beauty.
              </p>
              <p>
                The island is divided into several parts, including the main island and a small adjoining island called
                Chera Dwip (Broken Island), which can be reached on foot during low tide. The local community consists
                mainly of fishermen, and the island's economy is based on fishing and tourism.
              </p>
            </div>

            {/* Gallery */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Gallery</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="relative aspect-square overflow-hidden rounded-lg">
                  <Image
                    src="https://mj-ahmad.github.io/mja2025/img/st01.png"
                    alt="St. Martin's Island beach with palm tree and fishing boats"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="relative aspect-square overflow-hidden rounded-lg">
                  <Image
                    src="https://mj-ahmad.github.io/mja2025/img/st02.png"
                    alt="Crystal clear waters and coral reefs of St. Martin's Island"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="relative aspect-square overflow-hidden rounded-lg">
                  <Image
                    src="https://mj-ahmad.github.io/mja2025/img/st03.png"
                    alt="Sunset view from St. Martin's Island beach"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="relative aspect-square overflow-hidden rounded-lg">
                  <Image
                    src="https://mj-ahmad.github.io/mja2025/img/st04.png"
                    alt="Colorful coral stones on St. Martin's Island"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="relative aspect-square overflow-hidden rounded-lg">
                  <Image
                    src="https://mj-ahmad.github.io/mja2025/img/st05.png"
                    alt="Beachside coconut trees and relaxation spots"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="relative aspect-square overflow-hidden rounded-lg">
                  <Image
                    src="https://mj-ahmad.github.io/mja2025/img/st06.png"
                    alt="Aerial view of St. Martin's Island coastline"
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
                <TabsTrigger value="accommodation">Accommodation</TabsTrigger>
              </TabsList>

              <TabsContent value="activities" className="space-y-4 mt-4">
                <h3 className="text-xl font-semibold">Island Activities</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card>
                    <CardContent className="p-4 flex items-start gap-3">
                      <div className="bg-primary/10 p-2 rounded-full">
                        <Waves className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium">Swimming & Snorkeling</h4>
                        <p className="text-sm text-muted-foreground">
                          Enjoy the crystal clear waters and explore the vibrant coral reefs.
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
                        <h4 className="font-medium">Beach Relaxation</h4>
                        <p className="text-sm text-muted-foreground">
                          Unwind on the pristine beaches and enjoy the tropical atmosphere.
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
                          Capture stunning landscapes, sunsets, and marine life.
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-4 flex items-start gap-3">
                      <div className="bg-primary/10 p-2 rounded-full">
                        <Anchor className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium">Boat Tours</h4>
                        <p className="text-sm text-muted-foreground">
                          Take boat trips around the island and to Chera Dwip.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <h3 className="text-xl font-semibold mt-6">Marine Exploration</h3>
                <p className="text-muted-foreground mb-4">
                  St. Martin's Island is known for its rich marine biodiversity:
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span>Coral reef exploration</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span>Glass-bottom boat tours</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span>Observing colorful fish species</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span>Collecting seashells (responsibly)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span>Watching sea turtles (seasonal)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span>Sunset and sunrise viewing</span>
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
                        To reach St. Martin's Island, you need to take a ferry or speed boat from Teknaf, which is about
                        90 km from Cox's Bazar. The journey takes approximately 2-3 hours depending on the vessel and
                        sea conditions. Boats usually depart in the morning and return the next day.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-4">
                      <h4 className="font-medium text-lg">Best Time to Visit</h4>
                      <p className="text-sm text-muted-foreground">
                        The best time to visit St. Martin's Island is from November to February when the weather is dry
                        and pleasant. The island is closed to tourists during the monsoon season (May to September) due
                        to rough sea conditions. It's advisable to check the weather forecast before planning your trip.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-4">
                      <h4 className="font-medium text-lg">What to Pack</h4>
                      <ul className="text-sm text-muted-foreground space-y-2">
                        <li>• Sunscreen, sunglasses, and hat for sun protection</li>
                        <li>• Light, breathable clothing</li>
                        <li>• Swimwear and beach essentials</li>
                        <li>• Insect repellent</li>
                        <li>• First aid kit with basic medications</li>
                        <li>• Cash (there are no ATMs on the island)</li>
                        <li>• Power bank (electricity can be inconsistent)</li>
                        <li>• Snorkeling gear (or you can rent it there)</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-4">
                      <h4 className="font-medium text-lg">Important Information</h4>
                      <ul className="text-sm text-muted-foreground space-y-2">
                        <li>• The island has limited electricity, usually available from 6 PM to 10 PM</li>
                        <li>• Mobile network coverage can be spotty</li>
                        <li>• Respect the local culture and dress modestly when not on the beach</li>
                        <li>• Practice responsible tourism and avoid damaging coral reefs</li>
                        <li>• Book accommodations in advance, especially during peak season</li>
                        <li>• Be prepared for a simple lifestyle with basic amenities</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="accommodation" className="space-y-4 mt-4">
                <h3 className="text-xl font-semibold">Accommodation Options</h3>

                <div className="grid grid-cols-1 gap-4">
                  <Card>
                    <CardContent className="p-4">
                      <h4 className="font-medium text-lg">Luxury Resorts</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        There are a few upscale resorts on the island that offer comfortable rooms, private bathrooms,
                        and amenities like restaurants and generators for 24-hour electricity.
                      </p>
                      <div className="flex items-center gap-2 text-sm">
                        <span className="font-medium">Price Range:</span>
                        <span>৳5,000 - ৳10,000 per night</span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-4">
                      <h4 className="font-medium text-lg">Mid-range Hotels</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        Several mid-range hotels and guesthouses offer decent accommodations with basic amenities and
                        often include meals in their packages.
                      </p>
                      <div className="flex items-center gap-2 text-sm">
                        <span className="font-medium">Price Range:</span>
                        <span>৳2,500 - ৳5,000 per night</span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-4">
                      <h4 className="font-medium text-lg">Budget Accommodations</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        Budget travelers can find simple cottages and guesthouses run by locals. These offer basic
                        facilities but are clean and affordable.
                      </p>
                      <div className="flex items-center gap-2 text-sm">
                        <span className="font-medium">Price Range:</span>
                        <span>৳1,000 - ৳2,500 per night</span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-4">
                      <h4 className="font-medium text-lg">Camping</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        For the adventurous, camping on the beach is possible in designated areas. Some tour operators
                        provide camping equipment and setup.
                      </p>
                      <div className="flex items-center gap-2 text-sm">
                        <span className="font-medium">Price Range:</span>
                        <span>৳500 - ৳1,500 per night</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="bg-muted/30 p-4 rounded-lg mt-4">
                  <h4 className="font-medium mb-2">Booking Recommendation</h4>
                  <p className="text-sm text-muted-foreground">
                    It's highly recommended to book your accommodation in advance, especially during the peak tourist
                    season (December-January). Many hotels can be booked through our tour packages, which often include
                    transportation to and from the island.
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
                      <p className="text-sm text-muted-foreground">Bay of Bengal, 9 km south of Cox's Bazar</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Calendar className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h4 className="font-medium">Best Season</h4>
                      <p className="text-sm text-muted-foreground">November to February (Dry Season)</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h4 className="font-medium">Ideal Duration</h4>
                      <p className="text-sm text-muted-foreground">2-3 days</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Fish className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h4 className="font-medium">Known For</h4>
                      <p className="text-sm text-muted-foreground">Coral reefs, pristine beaches, marine life</p>
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
                    <span>March - April</span>
                    <span className="text-sm">25°C - 32°C</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>May - October</span>
                    <span className="text-sm">Closed for tourists</span>
                  </div>
                </div>

                <div className="text-sm text-muted-foreground">
                  <Info className="h-4 w-4 inline mr-1" />
                  The island is closed during monsoon season due to rough sea conditions.
                </div>
              </CardContent>
            </Card>

            {/* Special Notice */}
            <Card className="border-amber-200 bg-amber-50">
              <CardContent className="p-6 space-y-4">
                <h3 className="text-lg font-semibold flex items-center gap-2 text-amber-800">
                  <Info className="h-5 w-5" />
                  <span>Important Notice</span>
                </h3>
                <p className="text-sm text-amber-700">
                  St. Martin's Island is an ecologically sensitive area. Please follow these guidelines:
                </p>
                <ul className="text-sm text-amber-700 space-y-1">
                  <li>• Do not damage or collect coral</li>
                  <li>• Dispose of waste properly</li>
                  <li>• Use reef-safe sunscreen</li>
                  <li>• Respect marine life and their habitats</li>
                  <li>• Follow local regulations and guidelines</li>
                </ul>
              </CardContent>
            </Card>

            {/* Book a Tour */}
            <Card className="bg-primary text-primary-foreground">
              <CardContent className="p-6 space-y-4">
                <h3 className="text-lg font-semibold">Book a Tour Package</h3>
                <p className="text-sm">
                  Explore our curated tour packages that include a visit to St. Martin's Island with transportation and
                  accommodation.
                </p>
                <Button variant="secondary" className="w-full" asChild>
                  <Link href="/packages/booking?package=premium">View Tour Packages</Link>
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
            <h2 className="text-2xl md:text-3xl font-bold">Ready to Experience St. Martin's Island?</h2>
            <p className="text-white/80">
              Let us help you plan the perfect island getaway with our customized tour packages and services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/packages/booking?package=premium">Book a Tour</Link>
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

