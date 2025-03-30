import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Utensils, CakeSlice, Coffee, Salad } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import BookingForm from "@/components/booking-form"

export default function DiningPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh]">
        <Image
          src="https://mj-ahmad.github.io/mja2025/img/dining00.png"
          alt="Dining Services"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 flex items-center">
          <div className="container">
            <div className="max-w-2xl space-y-4 animate-fade-up">
              <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Culinary Delights Await</h1>
              <p className="text-lg md:text-xl text-white/90">
                Experience the authentic flavors of Bangladesh and international cuisine in Cox's Bazar
              </p>
              <Button size="lg" className="mt-4 shadow-lg" asChild>
                <a href="#booking">Reserve a Table</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                Our Dining Experience
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">A Taste of Paradise</h2>
              <p className="text-muted-foreground text-lg">
                TRUSTED-ALLY partners with the finest restaurants and chefs in Cox's Bazar to bring you an unforgettable
                dining experience. From fresh seafood caught daily to authentic local dishes and international
                favorites, we cater to all tastes and dietary preferences.
              </p>
              <div className="grid grid-cols-1 gap-4">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Utensils className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Local Cuisine</h3>
                    <p className="text-muted-foreground">Authentic Bengali dishes prepared with traditional recipes</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <CakeSlice className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Fresh Seafood</h3>
                    <p className="text-muted-foreground">Delicious seafood caught daily from the Bay of Bengal</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Coffee className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">International Options</h3>
                    <p className="text-muted-foreground">Diverse menu selections from around the world</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative rounded-xl overflow-hidden h-[400px]">
              <Image src="https://mj-ahmad.github.io/mja2025/img/dining01.png" alt="Dining Services" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Dining Options */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
              Dining Options
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Choose Your Dining Experience</h2>
            <p className="text-muted-foreground text-lg">
              From casual beach cafes to fine dining restaurants, we have options for every occasion
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <Image src="https://mj-ahmad.github.io/mja2025/img/dining0.png" alt="Casual Dining" fill className="object-cover" />
              </div>
              <CardHeader>
                <CardTitle>Casual Dining</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-primary" />
                    <span>Relaxed beach cafes and local eateries</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-primary" />
                    <span>Street food experiences</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-primary" />
                    <span>Family-friendly options</span>
                  </li>
                </ul>
                <div className="mt-4">
                  <span className="text-2xl font-bold">৳799</span>
                  <span className="text-muted-foreground ml-1">/ person</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <a href="#booking">Reserve Now</a>
                </Button>
              </CardFooter>
            </Card>

            <Card className="overflow-hidden border-primary hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <Image
                  src="https://mj-ahmad.github.io/mja2025/img/dining01.png"
                  alt="Seafood Specialties"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-2 right-2">
                  <span className="bg-primary text-white text-xs px-2 py-1 rounded-full">Popular</span>
                </div>
              </div>
              <CardHeader>
                <CardTitle>Seafood Specialties</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-primary" />
                    <span>Fresh catches prepared in various styles</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-primary" />
                    <span>Signature seafood platters</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-primary" />
                    <span>Beachside dining options</span>
                  </li>
                </ul>
                <div className="mt-4">
                  <span className="text-2xl font-bold">৳1,499</span>
                  <span className="text-muted-foreground ml-1">/ person</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full" asChild>
                  <a href="#booking">Reserve Now</a>
                </Button>
              </CardFooter>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <Image src="https://mj-ahmad.github.io/mja2025/img/dining00.png" alt="Fine Dining" fill className="object-cover" />
              </div>
              <CardHeader>
                <CardTitle>Fine Dining</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-primary" />
                    <span>Elegant restaurants with ocean views</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-primary" />
                    <span>Gourmet multi-course meals</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-primary" />
                    <span>Premium wine and beverage pairings</span>
                  </li>
                </ul>
                <div className="mt-4">
                  <span className="text-2xl font-bold">৳2,999</span>
                  <span className="text-muted-foreground ml-1">/ person</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <a href="#booking">Reserve Now</a>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Special Dining Experiences */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
              Special Experiences
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Unforgettable Dining Moments</h2>
            <p className="text-muted-foreground text-lg">
              Create memories with these unique dining experiences in Cox's Bazar
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="grid md:grid-cols-2">
                <div className="relative h-full min-h-[200px]">
                  <Image
                    src="https://mj-ahmad.github.io/mja2025/img/sunset00.png"
                    alt="Sunset Beach Dinner"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">Sunset Beach Dinner</h3>
                  <p className="text-muted-foreground mb-4">
                    Dine under the stars with a private table set up directly on the beach. Enjoy a customized menu as
                    you watch the sun set over the Bay of Bengal.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-muted px-2 py-1 text-xs rounded-full">Romantic</span>
                    <span className="bg-muted px-2 py-1 text-xs rounded-full">Private</span>
                    <span className="bg-muted px-2 py-1 text-xs rounded-full">Customized Menu</span>
                  </div>
                  <Button size="sm" asChild>
                    <a href="#booking">Book This Experience</a>
                  </Button>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="grid md:grid-cols-2">
                <div className="relative h-full min-h-[200px]">
                  <Image
                    src="/https://mj-ahmad.github.io/mja2025/img/dining01.png"
                    alt="Cooking Class"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">Bengali Cooking Class</h3>
                  <p className="text-muted-foreground mb-4">
                    Learn to prepare authentic Bengali dishes in this hands-on cooking class. Visit a local market,
                    prepare traditional recipes, and enjoy the meal you've created.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-muted px-2 py-1 text-xs rounded-full">Interactive</span>
                    <span className="bg-muted px-2 py-1 text-xs rounded-full">Cultural</span>
                    <span className="bg-muted px-2 py-1 text-xs rounded-full">Educational</span>
                  </div>
                  <Button size="sm" asChild>
                    <a href="#booking">Book This Experience</a>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="py-16 bg-muted/30">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
              Reserve Your Table
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Book Your Dining Experience</h2>
            <p className="text-muted-foreground text-lg">
              Complete the form below to reserve your culinary adventure in Cox's Bazar
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <BookingForm serviceType="dining" />
          </div>
        </div>
      </section>

      {/* Special Diets Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
              Special Diets
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">We Cater to All Dietary Needs</h2>
            <p className="text-muted-foreground text-lg">
              Our restaurant partners can accommodate various dietary requirements
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Card className="text-center p-6">
              <div className="mx-auto mb-4">
                <Salad className="h-12 w-12 text-primary" />
              </div>
              <h3 className="text-lg font-medium mb-2">Vegetarian</h3>
              <p className="text-muted-foreground text-sm">
                Wide selection of vegetarian dishes across all dining options
              </p>
            </Card>

            <Card className="text-center p-6">
              <div className="mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-primary"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
                  <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" />
                  <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" />
                  <line x1="2" x2="22" y1="2" y2="22" />
                </svg>
              </div>
              <h3 className="text-lg font-medium mb-2">Gluten-Free</h3>
              <p className="text-muted-foreground text-sm">
                Specially prepared gluten-free options available on request
              </p>
            </Card>

            <Card className="text-center p-6">
              <div className="mx-auto mb-4">
                <svg
                  className="h-12 w-12 text-primary"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium mb-2">Allergies</h3>
              <p className="text-muted-foreground text-sm">
                Inform us of any allergies, and we'll ensure safe meal preparation
              </p>
            </Card>

            <Card className="text-center p-6">
              <div className="mx-auto mb-4">
                <svg
                  className="h-12 w-12 text-primary"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M11 3C11 2.44772 11.4477 2 12 2C12.5523 2 13 2.44772 13 3V5C13 5.55228 12.5523 6 12 6C11.4477 6 11 5.55228 11 5V3Z" />
                  <path d="M14 3C14 2.44772 14.4477 2 15 2C15.5523 2 16 2.44772 16 3V5C16 5.55228 15.5523 6 15 6C14.4477 6 14 5.55228 14 5V3Z" />
                  <path d="M8 3C8 2.44772 8.44772 2 9 2C9.55228 2 10 2.44772 10 3V5C10 5.55228 9.55228 6 9 6C8.44772 6 8 5.55228 8 5V3Z" />
                  <path d="M4 10C4 9.44772 4.44772 9 5 9H19C19.5523 9 20 9.44772 20 10C20 10.5523 19.5523 11 19 11H5C4.44772 11 4 10.5523 4 10Z" />
                  <path d="M9 14C9 13.4477 9.44772 13 10 13H14C14.5523 13 15 13.4477 15 14C15 14.5523 14.5523 15 14 15H10C9.44772 15 9 14.5523 9 14Z" />
                  <path d="M9 18C9 17.4477 9.44772 17 10 17H14C14.5523 17 15 17.4477 15 18C15 18.5523 14.5523 19 14 19H10C9.44772 19 9 18.5523 9 18Z" />
                  <path d="M5 7H19C20.1046 7 21 7.89543 21 9V18C21 20.2091 19.2091 22 17 22H7C4.79086 22 3 20.2091 3 18V9C3 7.89543 3.89543 7 5 7Z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium mb-2">Halal</h3>
              <p className="text-muted-foreground text-sm">Halal-certified options available at selected restaurants</p>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary mb-4">FAQs</div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground text-lg">Everything you need to know about our dining services</p>
          </div>

          <div className="max-w-3xl mx-auto grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle>What is the traditional cuisine of Cox's Bazar?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Cox's Bazar is known for its fresh seafood dishes, particularly fish curries, grilled prawns, and crab
                  preparations. Traditional Bengali dishes like rice, lentils, and vegetable curries are also common,
                  often featuring local spices and cooking methods.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Do I need to make reservations in advance?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We highly recommend making dining reservations at least 24-48 hours in advance, especially for special
                  experiences like the beach dinner or during peak tourist seasons. Some casual dining options may not
                  require reservations.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Are there international food options in Cox's Bazar?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes, many hotels and restaurants in Cox's Bazar offer international cuisine, including Chinese, Thai,
                  Continental, and Indian dishes. Your TRUSTED-ALLY representative can help you find the type of food
                  you're craving.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
        <p className="text-xs text-center text-muted-foreground">
          For any assistance, please contact our customer support at t-ally@outlook.com or +880 1892051303
        </p>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Taste the Flavors of Cox's Bazar</h2>
            <p className="text-xl mb-8 text-white/80">
              Book your culinary adventure today and experience the best local and international cuisine
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="#booking">Reserve Your Table</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20" asChild>
                <Link href="/contact">Special Requests</Link>
              </Button>
            </div>
            <p className="text-xs text-center text-white/80 mt-4">
              For any assistance, please contact our customer support at t-ally@outlook.com or +880 1892051303
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}

