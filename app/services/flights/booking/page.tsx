"use client"

import type React from "react"

import { useState } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import Image from "next/image"
import { format } from "date-fns"
import { Plane, Calendar, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"

// Airline logos mapping
const airlineLogos = {
  "Biman Bangladesh Airlines": "https://mj-ahmad.github.io/mja2025/img/bim.png",
  "Biman Airlines": "https://mj-ahmad.github.io/mja2025/img/bim.png",
  "US-Bangla Airlines": "https://mj-ahmad.github.io/mja2025/img/usb.png",
  NovoAir: "https://mj-ahmad.github.io/mja2025/img/nov.png",
  "Air Astra": "https://mj-ahmad.github.io/mja2025/img/air.png",
}

export default function FlightBookingPage() {
  const searchParams = useSearchParams()
  const router = useRouter()

  // Flight details from URL parameters
  const [flightDetails, setFlightDetails] = useState({
    flightNumber: searchParams.get("flightNumber") || "",
    airline: searchParams.get("airline") || "",
    departureTime: searchParams.get("departureTime") || "",
    arrivalTime: searchParams.get("arrivalTime") || "",
    from: searchParams.get("from") || "",
    to: searchParams.get("to") || "",
    price: searchParams.get("price") || "0",
    date: searchParams.get("date") || new Date().toISOString().split("T")[0],
    isConnecting: searchParams.get("isConnecting") === "true",
    layoverAirport: searchParams.get("layoverAirport") || "",
    layoverDuration: searchParams.get("layoverDuration") || "",
  })

  // Passenger details
  const [passengerDetails, setPassengerDetails] = useState({
    title: "Mr",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    nationality: "Bangladeshi",
    passportNumber: "",
    dateOfBirth: "",
  })

  const [passengerCount, setPassengerCount] = useState(1)
  const [selectedClass, setSelectedClass] = useState("Economy")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  // Format time to 12-hour format
  const formatTime = (time: string) => {
    if (!time) return ""
    if (time.includes("Next Day")) {
      return time.replace("Next Day ", "") + " (Next Day)"
    }
    const [hours, minutes] = time.split(":")
    const hour = Number.parseInt(hours)
    const ampm = hour >= 12 ? "PM" : "AM"
    const formattedHour = hour % 12 || 12
    return `${formattedHour}:${minutes} ${ampm}`
  }

  // Get airline logo
  const getAirlineLogo = (airline: string) => {
    const mainAirline = airline.split(" + ")[0]
    return airlineLogos[mainAirline as keyof typeof airlineLogos] || "/placeholder.svg"
  }

  // Calculate total price
  const calculateTotalPrice = () => {
    const basePrice = Number.parseInt(flightDetails.price)
    const classMultiplier = selectedClass === "Business" ? 1.8 : 1
    return basePrice * passengerCount * classMultiplier
  }

  // Validate form
  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!passengerDetails.firstName.trim()) {
      newErrors.firstName = "First name is required"
    }

    if (!passengerDetails.lastName.trim()) {
      newErrors.lastName = "Last name is required"
    }

    if (!passengerDetails.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(passengerDetails.email)) {
      newErrors.email = "Email is invalid"
    }

    if (!passengerDetails.phone.trim()) {
      newErrors.phone = "Phone number is required"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    // Generate a random booking number
    const bookingNumber = Math.random().toString(36).substring(2, 10).toUpperCase()

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)

      // Navigate to confirmation page with booking details
      const bookingDetails = {
        bookingNumber,
        flightNumber: flightDetails.flightNumber,
        airline: flightDetails.airline,
        departureTime: flightDetails.departureTime,
        arrivalTime: flightDetails.arrivalTime,
        from: flightDetails.from,
        to: flightDetails.to,
        date: flightDetails.date,
        passengerCount,
        class: selectedClass,
        totalPrice: calculateTotalPrice(),
        passengerName: `${passengerDetails.title} ${passengerDetails.firstName} ${passengerDetails.lastName}`,
        email: passengerDetails.email,
        phone: passengerDetails.phone,
      }

      const queryString = new URLSearchParams(
        Object.entries(bookingDetails).map(([key, value]) => [key, String(value)]),
      ).toString()

      router.push(`/services/flights/confirmation?${queryString}`)
    }, 1500)
  }

  return (
    <main className="flex min-h-screen flex-col py-12">
      <div className="container">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight">Flight Booking</h1>
          <p className="text-muted-foreground">Complete your booking details to reserve your flight</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Flight Details Card */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Flight Details</CardTitle>
                <CardDescription>Your selected flight information</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Image
                    src={getAirlineLogo(flightDetails.airline) || "/placeholder.svg"}
                    alt={flightDetails.airline}
                    width={80}
                    height={30}
                    className="object-contain"
                  />
                  <div>
                    <div className="font-medium">{flightDetails.airline}</div>
                    <div className="text-sm text-muted-foreground">{flightDetails.flightNumber}</div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium">
                      {format(new Date(flightDetails.date), "EEEE, MMMM d, yyyy")}
                    </span>
                  </div>

                  <div className="flex justify-between items-start">
                    <div>
                      <div className="text-xl font-bold">{formatTime(flightDetails.departureTime)}</div>
                      <div className="text-sm text-muted-foreground">{flightDetails.from}</div>
                    </div>
                    <div className="flex flex-col items-center px-4">
                      <div className="text-xs text-muted-foreground mb-1">
                        {flightDetails.isConnecting ? "Connecting" : "Direct"}
                      </div>
                      <div className="relative w-16 h-[1px] bg-muted">
                        <div className="absolute -top-2 right-0">
                          <Plane className="h-4 w-4 text-primary" />
                        </div>
                        {flightDetails.isConnecting && (
                          <div className="absolute -top-1 left-1/2 -translate-x-1/2">
                            <div className="h-2 w-2 rounded-full bg-primary"></div>
                          </div>
                        )}
                      </div>
                      {flightDetails.isConnecting && (
                        <div className="text-xs text-primary mt-1">
                          {flightDetails.layoverDuration} in {flightDetails.layoverAirport}
                        </div>
                      )}
                    </div>
                    <div>
                      <div className="text-xl font-bold">{formatTime(flightDetails.arrivalTime)}</div>
                      <div className="text-sm text-muted-foreground">{flightDetails.to}</div>
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Base Fare</span>
                    <span>৳{flightDetails.price}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Passengers</span>
                    <span>x {passengerCount}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Class</span>
                    <span>{selectedClass}</span>
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
                <CardTitle>Passenger Information</CardTitle>
                <CardDescription>Enter details for all passengers</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex flex-col md:flex-row gap-4">
                      <div className="flex-1">
                        <Label htmlFor="passengerCount">Number of Passengers</Label>
                        <Select
                          value={passengerCount.toString()}
                          onValueChange={(value) => setPassengerCount(Number.parseInt(value))}
                        >
                          <SelectTrigger id="passengerCount">
                            <SelectValue placeholder="Select passengers" />
                          </SelectTrigger>
                          <SelectContent>
                            {[1, 2, 3, 4, 5].map((num) => (
                              <SelectItem key={num} value={num.toString()}>
                                {num} {num === 1 ? "Passenger" : "Passengers"}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="flex-1">
                        <Label htmlFor="class">Class</Label>
                        <Select value={selectedClass} onValueChange={setSelectedClass}>
                          <SelectTrigger id="class">
                            <SelectValue placeholder="Select class" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Economy">Economy</SelectItem>
                            <SelectItem value="Business">Business</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <Separator />

                    <div className="space-y-4">
                      <h3 className="font-medium flex items-center gap-2">
                        <Users className="h-4 w-4" />
                        Primary Passenger Details
                      </h3>

                      <div className="grid grid-cols-12 gap-4">
                        <div className="col-span-3">
                          <Label htmlFor="title">Title</Label>
                          <Select
                            value={passengerDetails.title}
                            onValueChange={(value) => setPassengerDetails({ ...passengerDetails, title: value })}
                          >
                            <SelectTrigger id="title">
                              <SelectValue placeholder="Title" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="Mr">Mr</SelectItem>
                              <SelectItem value="Mrs">Mrs</SelectItem>
                              <SelectItem value="Ms">Ms</SelectItem>
                              <SelectItem value="Dr">Dr</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="col-span-4 md:col-span-5">
                          <Label htmlFor="firstName">First Name</Label>
                          <Input
                            id="firstName"
                            value={passengerDetails.firstName}
                            onChange={(e) => setPassengerDetails({ ...passengerDetails, firstName: e.target.value })}
                            className={errors.firstName ? "border-red-500" : ""}
                          />
                          {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
                        </div>
                        <div className="col-span-5 md:col-span-4">
                          <Label htmlFor="lastName">Last Name</Label>
                          <Input
                            id="lastName"
                            value={passengerDetails.lastName}
                            onChange={(e) => setPassengerDetails({ ...passengerDetails, lastName: e.target.value })}
                            className={errors.lastName ? "border-red-500" : ""}
                          />
                          {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="email">Email Address</Label>
                          <Input
                            id="email"
                            type="email"
                            value={passengerDetails.email}
                            onChange={(e) => setPassengerDetails({ ...passengerDetails, email: e.target.value })}
                            className={errors.email ? "border-red-500" : ""}
                          />
                          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                        </div>
                        <div>
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input
                            id="phone"
                            value={passengerDetails.phone}
                            onChange={(e) => setPassengerDetails({ ...passengerDetails, phone: e.target.value })}
                            className={errors.phone ? "border-red-500" : ""}
                          />
                          {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="nationality">Nationality</Label>
                          <Select
                            value={passengerDetails.nationality}
                            onValueChange={(value) => setPassengerDetails({ ...passengerDetails, nationality: value })}
                          >
                            <SelectTrigger id="nationality">
                              <SelectValue placeholder="Select nationality" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="Bangladeshi">Bangladeshi</SelectItem>
                              <SelectItem value="Indian">Indian</SelectItem>
                              <SelectItem value="Pakistani">Pakistani</SelectItem>
                              <SelectItem value="Other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label htmlFor="passportNumber">Passport Number (Optional)</Label>
                          <Input
                            id="passportNumber"
                            value={passengerDetails.passportNumber}
                            onChange={(e) =>
                              setPassengerDetails({ ...passengerDetails, passportNumber: e.target.value })
                            }
                          />
                        </div>
                      </div>
                    </div>

                    {passengerCount > 1 && (
                      <div className="bg-muted/30 p-4 rounded-lg">
                        <p className="text-sm text-muted-foreground">
                          Additional passenger details will be collected after booking confirmation.
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col space-y-4">
                    <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                      {isSubmitting ? "Processing..." : "Confirm Booking"}
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

