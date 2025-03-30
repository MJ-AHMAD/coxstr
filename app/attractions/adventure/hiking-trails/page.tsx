import Image from "next/image"
import Link from "next/link"
import { ChevronRight, MapPin, Calendar, Info, Mountain } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function HikingTrailsPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh] bg-black">
        <Image
          src="https://mj-ahmad.github.io/mja2025/img/hiking0.png"
          alt="Hiking Trails in Cox's Bazar"
          fill
          className="object-cover opacity-70"
          priority
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-4">
          <div className="text-center max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Hiking Trails</h1>
            <p className="text-xl md:text-2xl">Explore the lush hills and forests surrounding Cox's Bazar</p>
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
            <span>Hiking Trails</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container py-12">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">Natural Hiking Adventures</h2>
              <p className="text-lg text-muted-foreground mb-4">
                While Cox's Bazar is famous for its beaches, the surrounding hills and forests offer excellent hiking
                opportunities for nature enthusiasts. These trails provide a refreshing contrast to the coastal
                experience, allowing visitors to explore the region's diverse ecosystems and enjoy panoramic views.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                From gentle walks to more challenging treks, the hiking trails around Cox's Bazar cater to all
                experience levels. Along the way, hikers can discover waterfalls, encounter wildlife, and connect with
                local communities living in the hills.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">Popular Hiking Trails</h3>
              <div className="grid sm:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <h4 className="text-xl font-semibold mb-2">Himchari National Park Trails</h4>
                    <p className="text-muted-foreground">
                      Several well-marked trails through diverse forest ecosystems, leading to waterfalls and viewpoints
                      overlooking the Bay of Bengal.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h4 className="text-xl font-semibold mb-2">Adinath Temple Trail</h4>
                    <p className="text-muted-foreground">
                      A moderate hike up Mainak Hill in Maheshkhali Island, leading to an ancient temple with panoramic
                      views.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h4 className="text-xl font-semibold mb-2">Inani Hills Trek</h4>
                    <p className="text-muted-foreground">
                      A scenic trail through the hills behind Inani Beach, offering stunning coastal views and forest
                      exploration.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h4 className="text-xl font-semibold mb-2">Teknaf Wildlife Sanctuary</h4>
                    <p className="text-muted-foreground">
                      Guided hiking trails through Bangladesh's oldest wildlife sanctuary, home to diverse flora and
                      fauna.
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
                    src="https://mj-ahmad.github.io/mja2025/img/cox1.png"
                    alt="Himchari National Park Trail"
                    fill
                    className="object-cover hover:scale-105 transition-transform"
                  />
                </div>
                <div className="relative h-48 rounded-lg overflow-hidden">
                  <Image
                    src="https://mj-ahmad.github.io/mja2025/img/inani0.png"
                    alt="Forest Hiking Path"
                    fill
                    className="object-cover hover:scale-105 transition-transform"
                  />
                </div>
                <div className="relative h-48 rounded-lg overflow-hidden">
                  <Image
                    src="https://mj-ahmad.github.io/mja2025/img/hiking0.png"
                    alt="Waterfall on Hiking Trail"
                    fill
                    className="object-cover hover:scale-105 transition-transform"
                  />
                </div>
                <div className="relative h-48 rounded-lg overflow-hidden">
                  <Image
                    src="https://mj-ahmad.github.io/mja2025/img/marine0.png"
                    alt="Scenic Viewpoint"
                    fill
                    className="object-cover hover:scale-105 transition-transform"
                  />
                </div>
                <div className="relative h-48 rounded-lg overflow-hidden">
                  <Image
                    src="https://mj-ahmad.github.io/mja2025/img/the0.png"
                    alt="Wildlife on Trail"
                    fill
                    className="object-cover hover:scale-105 transition-transform"
                  />
                </div>
                <div className="relative h-48 rounded-lg overflow-hidden">
                  <Image
                    src="https://mj-ahmad.github.io/mja2025/img/st0.png"
                    alt="Hill View"
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
                <h3 className="text-xl font-bold">Hiking Information</h3>
                <Separator />

                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-medium">Locations</h4>
                    <p className="text-muted-foreground">
                      • Himchari National Park
                      <br />• Maheshkhali Island
                      <br />• Inani Hills
                      <br />• Teknaf Wildlife Sanctuary
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mountain className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-medium">Difficulty Levels</h4>
                    <p className="text-muted-foreground">
                      • Easy: Himchari Waterfall Trail (1-2 hours)
                      <br />• Moderate: Adinath Temple Trail (2-3 hours)
                      <br />• Moderate: Inani Hills Trek (3-4 hours)
                      <br />• Challenging: Teknaf Wildlife Trek (4-6 hours)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Info className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-medium">Guide Services</h4>
                    <p className="text-muted-foreground">
                      Local guides are available at most trailheads. Prices range from 500-1500 BDT depending on the
                      trail and duration.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-bold">Best Time to Hike</h3>
                <Separator />

                <div className="flex items-start gap-3">
                  <Calendar className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="text-muted-foreground">
                      The best time for hiking in Cox's Bazar is from November to February when the weather is cool and
                      dry.
                    </p>
                    <p className="text-muted-foreground mt-2">
                      Early morning hikes (6-10 AM) are recommended to avoid midday heat and enjoy clearer views.
                    </p>
                    <p className="text-muted-foreground mt-2">
                      Avoid hiking during the monsoon season (June-September) when trails can be slippery and dangerous.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-bold">Hiking Tips</h3>
                <Separator />
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Wear comfortable hiking shoes with good grip</li>
                  <li>• Carry sufficient water (at least 1-2 liters per person)</li>
                  <li>• Apply sunscreen and insect repellent</li>
                  <li>• Bring a hat and sunglasses</li>
                  <li>• Pack light snacks and energy bars</li>
                  <li>• Hire a local guide for unfamiliar trails</li>
                  <li>• Inform someone about your hiking plans</li>
                  <li>• Carry a basic first aid kit</li>
                  <li>• Respect wildlife and don't leave trash behind</li>
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
                  <Link href="/attractions/adventure/marine-drive">
                    <span>Marine Drive</span>
                    <ChevronRight className="h-4 w-4 ml-auto" />
                  </Link>
                </Button>
                <Button variant="outline" className="justify-start" asChild>
                  <Link href="/attractions/beaches/himchari">
                    <span>Himchari Beach</span>
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
          <h2 className="text-3xl font-bold mb-4">Ready to Explore the Trails?</h2>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Book a guided hiking tour with experienced local guides who know the best trails and viewpoints.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/services/guided-tours">Book Guided Tour</Link>
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

