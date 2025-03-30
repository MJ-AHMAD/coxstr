import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Clock, Users, Book, History } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"

export default function BuddhistTemplesPage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[50vh] md:h-[60vh]">
        <Image
          src="https://mj-ahmad.github.io/mja2025/img/buddhist00.png"
          alt="Buddhist Temples"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="container text-center text-white space-y-4">
            <Badge className="bg-primary hover:bg-primary text-white text-sm py-1">Religious Heritage</Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Buddhist Temples</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Ancient temples showcasing the rich Buddhist heritage of the region
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
            <span className="text-muted-foreground">Buddhist Temples</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container py-12">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Left Content - Details */}
          <div className="md:col-span-2 space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight">About Buddhist Temples in Cox's Bazar</h2>
              <p className="text-muted-foreground leading-relaxed">
                The Cox's Bazar region is home to numerous Buddhist temples that represent both the religious and
                cultural heritage of the area. Dating back several centuries, these temples showcase distinct
                architectural styles, intricate carvings, and serene environments for meditation and worship. The
                Buddhist population in the area has preserved their traditions and religious practices, creating a
                unique spiritual atmosphere.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Visitors can explore temples such as Aggmeda Khyang, a major Buddhist monastery in the area that houses
                ancient manuscripts and Buddha statues. The Rakhaine Buddha Vihar is another significant religious site
                associated with the Rakhaine community. These temples not only serve as places of worship but also as
                important cultural and historical landmarks that offer insights into the Buddhist heritage of
                Bangladesh.
              </p>
            </div>

            {/* Key Features */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold tracking-tight">Temple Highlights</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <Card className="bg-muted/50">
                  <CardContent className="p-4 flex gap-4 items-start">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <History className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-base">Aggmeda Khyang</h4>
                      <p className="text-sm text-muted-foreground">
                        A historic monastery housing ancient manuscripts and Buddha statues from Myanmar
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-muted/50">
                  <CardContent className="p-4 flex gap-4 items-start">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Book className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-base">Sacred Artifacts</h4>
                      <p className="text-sm text-muted-foreground">
                        View ancient Buddha statues, manuscripts, and sacred relics
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
                      <h4 className="font-medium text-base">Cultural Ceremonies</h4>
                      <p className="text-sm text-muted-foreground">
                        Witness traditional Buddhist ceremonies and rituals during religious festivals
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-muted/50">
                  <CardContent className="p-4 flex gap-4 items-start">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-base">Meditation Spaces</h4>
                      <p className="text-sm text-muted-foreground">
                        Experience peaceful meditation areas surrounded by natural beauty
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
                    src="https://mj-ahmad.github.io/mja2025/img/buddhist01.png"
                    alt="Temple Exterior"
                    fill
                    className="object-cover hover:scale-105 transition-transform"
                  />
                </div>
                <div className="relative h-48 rounded-lg overflow-hidden">
                  <Image
                    src="https://mj-ahmad.github.io/mja2025/img/buddhist02.png"
                    alt="Buddha Statue"
                    fill
                    className="object-cover hover:scale-105 transition-transform"
                  />
                </div>
                <div className="relative h-48 rounded-lg overflow-hidden">
                  <Image
                    src="https://mj-ahmad.github.io/mja2025/img/buddhist03.png"
                    alt="Meditation Hall"
                    fill
                    className="object-cover hover:scale-105 transition-transform"
                  />
                </div>
                <div className="relative h-48 rounded-lg overflow-hidden">
                  <Image
                    src="https://mj-ahmad.github.io/mja2025/img/buddhist04.png"
                    alt="Ancient Manuscripts"
                    fill
                    className="object-cover hover:scale-105 transition-transform"
                  />
                </div>
                <div className="relative h-48 rounded-lg overflow-hidden">
                  <Image
                    src="https://mj-ahmad.github.io/mja2025/img/buddhist05.png"
                    alt="Temple Carvings"
                    fill
                    className="object-cover hover:scale-105 transition-transform"
                  />
                </div>
                <div className="relative h-48 rounded-lg overflow-hidden">
                  <Image
                    src="https://mj-ahmad.github.io/mja2025/img/buddhist06.png"
                    alt="Religious Ceremony"
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
                    <span className="font-medium">6:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Days Open:</span>
                    <span className="font-medium">Daily</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Entry Fee:</span>
                    <span className="font-medium">Free (Donations Welcome)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Dress Code:</span>
                    <span className="font-medium">Modest Attire Required</span>
                  </div>
                </div>

                <Separator />

                <div className="space-y-2">
                  <h4 className="font-medium">Contact</h4>
                  <p className="text-sm text-muted-foreground">
                    Phone: +880 1892051303
                    <br />
                    Email: t-ally@outlook.com
                  </p>
                </div>

                <Separator />

                <div className="space-y-2">
                  <h4 className="font-medium">Location</h4>
                  <p className="text-sm text-muted-foreground">
                    Various locations around Cox's Bazar district, with Aggmeda Khyang located 2 km from the town center
                  </p>
                </div>

                <Button className="w-full">Book Guided Tour</Button>
              </CardContent>
            </Card>

            {/* Best Time to Visit */}
            <Card>
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-bold">Best Time to Visit</h3>
                <p className="text-sm text-muted-foreground">The best time to visit the Buddhist Temples is during:</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <div className="bg-primary/10 p-1 rounded-full mt-0.5">
                      <ChevronRight className="h-3 w-3 text-primary" />
                    </div>
                    <span>
                      <span className="font-medium">Early morning:</span> For peaceful meditation and fewer visitors
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="bg-primary/10 p-1 rounded-full mt-0.5">
                      <ChevronRight className="h-3 w-3 text-primary" />
                    </div>
                    <span>
                      <span className="font-medium">Buddhist festivals:</span> To witness traditional ceremonies and
                      celebrations
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="bg-primary/10 p-1 rounded-full mt-0.5">
                      <ChevronRight className="h-3 w-3 text-primary" />
                    </div>
                    <span>
                      <span className="font-medium">Dry season (Nov-Mar):</span> For comfortable weather conditions
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
                        src="/placeholder.svg?height=100&width=100&text=Rakhaine+Village"
                        alt="Rakhaine Village"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium">Rakhaine Village</h4>
                      <p className="text-sm text-muted-foreground">Experience Rakhaine cultural heritage</p>
                      <Link
                        href="/attractions/culture/rakhaine-village"
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

