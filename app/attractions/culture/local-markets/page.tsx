import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Clock, ShoppingBag, Utensils, Fish } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"

export default function LocalMarketsPage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[50vh] md:h-[60vh]">
        <Image
          src="https://mj-ahmad.github.io/mja2025/img/local00.png"
          alt="Local Markets"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="container text-center text-white space-y-4">
            <Badge className="bg-primary hover:bg-primary text-white text-sm py-1">Shopping Experience</Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Local Markets</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Vibrant markets selling local crafts, seafood, and authentic souvenirs
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
            <span className="text-muted-foreground">Local Markets</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container py-12">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Left Content - Details */}
          <div className="md:col-span-2 space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight">About Local Markets</h2>
              <p className="text-muted-foreground leading-relaxed">
                The local markets of Cox's Bazar offer an authentic glimpse into the daily life and culture of the
                region. These vibrant marketplaces are filled with a diverse array of goods, from fresh seafood caught
                by local fishermen to handcrafted souvenirs that showcase traditional craftsmanship. The bustling
                atmosphere, colorful displays, and friendly vendors create an immersive cultural experience for
                visitors.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Burmese Market (Birmani Bazaar) is one of the most famous markets in the area, known for its imported
                goods from Myanmar. The Central Fish Market offers the freshest seafood caught daily from the Bay of
                Bengal. Artisan markets display a wide range of handcrafted items, including bamboo products, shell
                crafts, and traditional textiles woven by local communities. Exploring these markets provides not only
                shopping opportunities but also insights into local trade, culinary traditions, and artisanal skills.
              </p>
            </div>

            {/* Key Features */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold tracking-tight">Market Highlights</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <Card className="bg-muted/50">
                  <CardContent className="p-4 flex gap-4 items-start">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <ShoppingBag className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-base">Burmese Market</h4>
                      <p className="text-sm text-muted-foreground">
                        Browse imported goods from Myanmar including clothing, electronics, and cosmetics
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-muted/50">
                  <CardContent className="p-4 flex gap-4 items-start">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Fish className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-base">Central Fish Market</h4>
                      <p className="text-sm text-muted-foreground">
                        Experience the bustling fish market with fresh catches from the Bay of Bengal
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
                      <h4 className="font-medium text-base">Artisan Crafts</h4>
                      <p className="text-sm text-muted-foreground">
                        Shop for handcrafted souvenirs including shell art, bamboo items, and traditional textiles
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-muted/50">
                  <CardContent className="p-4 flex gap-4 items-start">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Utensils className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-base">Street Food Stalls</h4>
                      <p className="text-sm text-muted-foreground">
                        Sample local delicacies and street food specialties from vibrant food vendors
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
                    src="https://mj-ahmad.github.io/mja2025/img/local01.png"
                    alt="Burmese Market"
                    fill
                    className="object-cover hover:scale-105 transition-transform"
                  />
                </div>
                <div className="relative h-48 rounded-lg overflow-hidden">
                  <Image
                    src="https://mj-ahmad.github.io/mja2025/img/local02.png"
                    alt="Fish Market"
                    fill
                    className="object-cover hover:scale-105 transition-transform"
                  />
                </div>
                <div className="relative h-48 rounded-lg overflow-hidden">
                  <Image
                    src="https://mj-ahmad.github.io/mja2025/img/local03.png"
                    alt="Handcrafts Vendor"
                    fill
                    className="object-cover hover:scale-105 transition-transform"
                  />
                </div>
                <div className="relative h-48 rounded-lg overflow-hidden">
                  <Image
                    src="https://mj-ahmad.github.io/mja2025/img/local04.png"
                    alt="Spice Stall"
                    fill
                    className="object-cover hover:scale-105 transition-transform"
                  />
                </div>
                <div className="relative h-48 rounded-lg overflow-hidden">
                  <Image
                    src="https://mj-ahmad.github.io/mja2025/img/local05.png"
                    alt="Street Food"
                    fill
                    className="object-cover hover:scale-105 transition-transform"
                  />
                </div>
                <div className="relative h-48 rounded-lg overflow-hidden">
                  <Image
                    src="https://mj-ahmad.github.io/mja2025/img/local06.png"
                    alt="Textile Shop"
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
                    <span className="text-muted-foreground">Burmese Market:</span>
                    <span className="font-medium">8:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Fish Market:</span>
                    <span className="font-medium">Early Morning - Noon</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Artisan Markets:</span>
                    <span className="font-medium">10:00 AM - 9:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Days Open:</span>
                    <span className="font-medium">Daily (busiest on weekends)</span>
                  </div>
                </div>

                <Separator />

                <div className="space-y-2">
                  <h4 className="font-medium">Location</h4>
                  <p className="text-sm text-muted-foreground">
                    Various markets are located throughout Cox's Bazar town, with the main markets in the central area
                  </p>
                </div>

                <div className="space-y-2">
                  <h4 className="font-medium">Contact</h4>
                  <p className="text-sm text-muted-foreground">
                    Phone: +880 1892051303
                    <br />
                    Email: t-ally@outlook.com
                  </p>
                </div>

                <Button className="w-full">Book Market Tour</Button>
              </CardContent>
            </Card>

            {/* Best Time to Visit */}
            <Card>
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-bold">Best Time to Visit</h3>
                <p className="text-sm text-muted-foreground">The best time to visit the local markets is during:</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <div className="bg-primary/10 p-1 rounded-full mt-0.5">
                      <ChevronRight className="h-3 w-3 text-primary" />
                    </div>
                    <span>
                      <span className="font-medium">Early morning:</span> For the fish market to see the freshest
                      catches
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="bg-primary/10 p-1 rounded-full mt-0.5">
                      <ChevronRight className="h-3 w-3 text-primary" />
                    </div>
                    <span>
                      <span className="font-medium">Weekdays:</span> For a less crowded shopping experience
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="bg-primary/10 p-1 rounded-full mt-0.5">
                      <ChevronRight className="h-3 w-3 text-primary" />
                    </div>
                    <span>
                      <span className="font-medium">Tourist season (Nov-Mar):</span> When markets are most vibrant
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
                        src="https://mj-ahmad.github.io/mja2025/img/rakhaine00.png"
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
                        src="https://mj-ahmad.github.io/mja2025/img/buddhist00.png"
                        alt="Buddhist Temples"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium">Buddhist Temples</h4>
                      <p className="text-sm text-muted-foreground">Ancient temples with rich Buddhist heritage</p>
                      <Link
                        href="/attractions/culture/buddhist-temples"
                        className="text-primary text-sm hover:underline"
                      >
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

