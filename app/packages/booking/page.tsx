"use client"

import type React from "react"

import { useState } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import Image from "next/image"
import { ChevronRight, Calendar, CreditCard } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
import { format } from "date-fns"
import { Calendar as CalendarComponent } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"

// Package details
const packageDetails = {
  economy: {
    name: "Economy Package",
    price: 12999,
    description: "Perfect for budget travelers who want to experience Cox's Bazar essentials.",
    duration: "3 Days / 2 Nights",
    image: "https://mj-ahmad.github.io/mja2025/img/stay00.png",
    features: ["Standard Hotel Accommodation", "Daily Breakfast", "Airport Transfers", "Half-day City Tour"],
  },
  standard: {
    name: "Standard Package",
    price: 19999,
    description: "Our most popular package with a perfect balance of comfort and experiences.",
    duration: "4 Days / 3 Nights",
    image: "https://mj-ahmad.github.io/mja2025/img/stay01.png",
    features: [
      "Deluxe Hotel Accommodation",
      "Daily Breakfast & Dinner",
      "Airport Transfers",
      "Full-day City Tour",
      "Beach Activities",
      "Guided Tours",
    ],
  },
  premium: {
    name: "Premium Package",
    price: 29999,
    description: "Luxury experience with premium accommodations and exclusive activities.",
    duration: "5 Days / 4 Nights",
    image: "https://mj-ahmad.github.io/mja2025/img/stay02.png",
    features: [
      "Premium Resort Accommodation",
      "All Meals Included",
      "Private Airport Transfers",
      "Full-day City Tour",
      "Beach Activities & Water Sports",
      "Private Guided Tours",
      "Premium Dining Experiences",
    ],
  },
}

export default function PackageBookingPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const packageType = searchParams.get("package") || "standard"

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    specialRequests: "",
    paymentMethod: "card",
  })

  const [travelDate, setTravelDate] = useState<Date | undefined>(undefined)
  const [travelers, setTravelers] = useState("2")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  // Get the selected package details
  const selectedPackage = packageDetails[packageType as keyof typeof packageDetails] || packageDetails.standard

  // Calculate total price
  const calculateTotalPrice = () => {
    return selectedPackage.price * Number.parseInt(travelers)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSelectChange = (name: string, value: string) => {
    if (name === "travelers") {
      setTravelers(value)
    } else {
      setFormData({
        ...formData,
        [name]: value,
      })
    }
  }

  // Validate form
  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid"
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required"
    }

    if (!travelDate) {
      newErrors.travelDate = "Travel date is required"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)

      // Generate a random booking number
      const bookingNumber = Math.random().toString(36).substring(2, 10).toUpperCase()

      // Navigate to confirmation page with booking details
      router.push(
        `/packages/confirmation?bookingNumber=${bookingNumber}&package=${packageType}&travelers=${travelers}&date=${travelDate?.toISOString()}&name=${encodeURIComponent(formData.fullName)}`,
      )
    }, 1500)
  }

  return (
    <main className="flex min-h-screen flex-col py-12">
      <div className="container">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight">Book Your Package</h1>
          <p className="text-muted-foreground">Complete your booking details to reserve your Cox's Bazar package</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Package Details */}
          <div className="lg:col-span-1">
            <Card>
              <div className="relative h-48 w-full">
                <Image
                  src={selectedPackage.image || "https://mj-ahmad.github.io/mja2025/img/stay04.png"}
                  alt={selectedPackage.name}
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardHeader>
                <CardTitle>{selectedPackage.name}</CardTitle>
                <CardDescription>{selectedPackage.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-primary" />
                  <span>{selectedPackage.duration}</span>
                </div>

                <Separator />

                <div>
                  <h3 className="font-medium mb-2">Package Includes:</h3>
                  <ul className="space-y-1">
                    {selectedPackage.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <ChevronRight className="h-4 w-4 text-primary" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Separator />

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Base Price</span>
                    <span>৳{selectedPackage.price.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Travelers</span>
                    <span>x {travelers}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Taxes & Fees</span>
                    <span>Included</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between font-bold">
                    <span>Total</span>
                    <span className="text-primary">৳{calculateTotalPrice().toLocaleString()}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Booking Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Personal Information</CardTitle>
                <CardDescription>Enter your details to complete the booking</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="fullName">Full Name</Label>
                        <Input
                          id="fullName"
                          name="fullName"
                          placeholder="Enter your full name"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          className={errors.fullName ? "border-red-500" : ""}
                        />
                        {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="travelers">Number of Travelers</Label>
                        <Select value={travelers} onValueChange={(value) => handleSelectChange("travelers", value)}>
                          <SelectTrigger id="travelers">
                            <SelectValue placeholder="Select number of travelers" />
                          </SelectTrigger>
                          <SelectContent>
                            {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                              <SelectItem key={num} value={num.toString()}>
                                {num} {num === 1 ? "Traveler" : "Travelers"}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="Enter your email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className={errors.email ? "border-red-500" : ""}
                        />
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          placeholder="Enter your phone number"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className={errors.phone ? "border-red-500" : ""}
                        />
                        {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="address">Address</Label>
                      <Input
                        id="address"
                        name="address"
                        placeholder="Enter your address"
                        value={formData.address}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="travelDate">Travel Date</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className={cn(
                              "w-full justify-start text-left font-normal",
                              !travelDate && "text-muted-foreground",
                              errors.travelDate ? "border-red-500" : "",
                            )}
                          >
                            <Calendar className="mr-2 h-4 w-4" />
                            {travelDate ? format(travelDate, "PPP") : "Select date"}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <CalendarComponent
                            mode="single"
                            selected={travelDate}
                            onSelect={setTravelDate}
                            initialFocus
                            disabled={(date) => date < new Date()}
                          />
                        </PopoverContent>
                      </Popover>
                      {errors.travelDate && <p className="text-red-500 text-xs mt-1">{errors.travelDate}</p>}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="specialRequests">Special Requests (Optional)</Label>
                      <Textarea
                        id="specialRequests"
                        name="specialRequests"
                        placeholder="Any special requests or requirements"
                        value={formData.specialRequests}
                        onChange={handleInputChange}
                        rows={3}
                      />
                    </div>

                    <Separator />

                    <div className="space-y-2">
                      <Label>Payment Method</Label>
                      <Select
                        value={formData.paymentMethod}
                        onValueChange={(value) => handleSelectChange("paymentMethod", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select payment method" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="card">Credit/Debit Card</SelectItem>
                          <SelectItem value="bkash">bKash</SelectItem>
                          <SelectItem value="nagad">Nagad</SelectItem>
                          <SelectItem value="bank">Bank Transfer</SelectItem>
                        </SelectContent>
                      </Select>

                      {formData.paymentMethod === "card" && (
                        <div className="bg-muted/30 p-4 rounded-lg mt-2">
                          <p className="text-sm text-muted-foreground flex items-center gap-2">
                            <CreditCard className="h-4 w-4" />
                            <span>Payment details will be collected after booking confirmation</span>
                          </p>
                        </div>
                      )}

                      {(formData.paymentMethod === "bkash" || formData.paymentMethod === "nagad") && (
                        <div className="bg-muted/30 p-4 rounded-lg mt-2">
                          <p className="text-sm text-muted-foreground">
                            Mobile banking payment instructions will be sent to your email after booking confirmation
                          </p>
                        </div>
                      )}

                      {formData.paymentMethod === "bank" && (
                        <div className="bg-muted/30 p-4 rounded-lg mt-2">
                          <p className="text-sm text-muted-foreground">
                            Bank transfer details will be provided after booking confirmation
                          </p>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-col space-y-4">
                    <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                      {isSubmitting ? "Processing..." : `Confirm Booking - ৳${calculateTotalPrice().toLocaleString()}`}
                    </Button>
                    <p className="text-xs text-center text-muted-foreground">
                      By clicking "Confirm Booking", you agree to our terms and conditions.
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  )
}

