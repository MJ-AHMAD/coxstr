"use client"

import { CardFooter } from "@/components/ui/card"

import { useState } from "react"
import { Check, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

const packages = [
  {
    name: "Economy",
    price: 12999,
    description: "Perfect for budget travelers who want to experience Cox's Bazar essentials.",
    features: [
      { name: "3 Days / 2 Nights", included: true },
      { name: "Standard Hotel Accommodation", included: true },
      { name: "Daily Breakfast", included: true },
      { name: "Airport Transfers", included: true },
      { name: "Half-day City Tour", included: true },
      { name: "Beach Activities", included: false },
      { name: "Guided Tours", included: false },
      { name: "Premium Dining", included: false },
    ],
    type: "economy",
  },
  {
    name: "Standard",
    price: 19999,
    description: "Our most popular package with a perfect balance of comfort and experiences.",
    features: [
      { name: "4 Days / 3 Nights", included: true },
      { name: "Deluxe Hotel Accommodation", included: true },
      { name: "Daily Breakfast & Dinner", included: true },
      { name: "Airport Transfers", included: true },
      { name: "Full-day City Tour", included: true },
      { name: "Beach Activities", included: true },
      { name: "Guided Tours", included: true },
      { name: "Premium Dining", included: false },
    ],
    type: "standard",
  },
  {
    name: "Premium",
    price: 29999,
    description: "Luxury experience with premium accommodations and exclusive activities.",
    features: [
      { name: "5 Days / 4 Nights", included: true },
      { name: "Premium Resort Accommodation", included: true },
      { name: "All Meals Included", included: true },
      { name: "Private Airport Transfers", included: true },
      { name: "Full-day City Tour", included: true },
      { name: "Beach Activities & Water Sports", included: true },
      { name: "Private Guided Tours", included: true },
      { name: "Premium Dining Experiences", included: true },
    ],
    type: "premium",
  },
]

export default function PackageCards() {
  const [duration, setDuration] = useState<"monthly" | "yearly">("monthly")

  return (
    <div className="space-y-8">
      <div className="grid lg:grid-cols-3 gap-8">
        {packages.map((pkg) => (
          <Card key={pkg.name}>
            <CardHeader>
              <CardTitle>{pkg.name} Package</CardTitle>
              <CardDescription>{pkg.description}</CardDescription>
              <div className="mt-4">
                <span className="text-3xl font-bold">৳{pkg.price.toLocaleString()}</span>
                <span className="text-muted-foreground ml-1">/ person</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {pkg.features.map((feature) => (
                  <li key={feature.name} className="flex items-center">
                    {feature.included ? (
                      <Check className="h-4 w-4 text-primary mr-2" />
                    ) : (
                      <X className="h-4 w-4 text-muted-foreground mr-2" />
                    )}
                    <span className={feature.included ? "" : "text-muted-foreground"}>{feature.name}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant="outline" asChild>
                <Link href={`/packages/booking?package=${pkg.type}`}>Book Now</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

