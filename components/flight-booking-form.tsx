"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon, Plane, ArrowRight } from "lucide-react"
import { format } from "date-fns"
import { cn } from "@/lib/utils"

export default function FlightBookingForm() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    from: "",
    to: "cox-bazar",
    passengers: "1",
    class: "economy",
    specialRequests: "",
  })
  const [departureDate, setDepartureDate] = useState<Date | undefined>(undefined)
  const [returnDate, setReturnDate] = useState<Date | undefined>(undefined)
  const [tripType, setTripType] = useState("one-way")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleTripTypeChange = (value: string) => {
    setTripType(value)
    if (value === "one-way") {
      setReturnDate(undefined)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)

      // Redirect to confirmation page
      router.push(`/services/confirmation?type=flight&name=${formData.name}&email=${formData.email}`)
    }, 1500)
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Flight Booking</CardTitle>
        <CardDescription>Enter your details to book your flight to Cox's Bazar</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <Label htmlFor="tripType">Trip Type</Label>
                <Select value={tripType} onValueChange={handleTripTypeChange}>
                  <SelectTrigger id="tripType">
                    <SelectValue placeholder="Select trip type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="one-way">One Way</SelectItem>
                    <SelectItem value="round-trip">Round Trip</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex-1">
                <Label htmlFor="class">Class</Label>
                <Select value={formData.class} onValueChange={(value) => handleSelectChange("class", value)}>
                  <SelectTrigger id="class">
                    <SelectValue placeholder="Select class" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="economy">Economy</SelectItem>
                    <SelectItem value="business">Business</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex-1">
                <Label htmlFor="passengers">Passengers</Label>
                <Select value={formData.passengers} onValueChange={(value) => handleSelectChange("passengers", value)}>
                  <SelectTrigger id="passengers">
                    <SelectValue placeholder="Select passengers" />
                  </SelectTrigger>
                  <SelectContent>
                    {[1, 2, 3, 4, 5, 6].map((num) => (
                      <SelectItem key={num} value={num.toString()}>
                        {num} {num === 1 ? "Passenger" : "Passengers"}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="from">From</Label>
                <Select value={formData.from} onValueChange={(value) => handleSelectChange("from", value)}>
                  <SelectTrigger id="from">
                    <SelectValue placeholder="Select departure city" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="dhaka">Dhaka</SelectItem>
                    <SelectItem value="chittagong">Chittagong</SelectItem>
                    <SelectItem value="sylhet">Sylhet</SelectItem>
                    <SelectItem value="saidpur">Saidpur</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="relative">
                <Label htmlFor="to">To</Label>
                <div className="flex items-center">
                  <Select value={formData.to} onValueChange={(value) => handleSelectChange("to", value)} disabled>
                    <SelectTrigger id="to">
                      <SelectValue placeholder="Select destination" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="cox-bazar">Cox's Bazar</SelectItem>
                    </SelectContent>
                  </Select>
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-background rounded-full p-1 z-10">
                    <ArrowRight className="h-4 w-4 text-primary" />
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="departureDate">Departure Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !departureDate && "text-muted-foreground",
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {departureDate ? format(departureDate, "PPP") : "Select date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={departureDate}
                      onSelect={setDepartureDate}
                      initialFocus
                      disabled={(date) => date < new Date()}
                    />
                  </PopoverContent>
                </Popover>
              </div>

              {tripType === "round-trip" && (
                <div>
                  <Label htmlFor="returnDate">Return Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !returnDate && "text-muted-foreground",
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {returnDate ? format(returnDate, "PPP") : "Select date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={returnDate}
                        onSelect={setReturnDate}
                        initialFocus
                        disabled={(date) => date < new Date() || (departureDate ? date < departureDate : false)}
                      />
                    </PopoverContent>
                  </Popover>
                </div>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                name="name"
                placeholder="Your full name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Your email address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  name="phone"
                  placeholder="Your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="specialRequests">Special Requests (Optional)</Label>
              <Textarea
                id="specialRequests"
                name="specialRequests"
                placeholder="Any special requests or requirements"
                value={formData.specialRequests}
                onChange={handleChange}
                rows={3}
              />
            </div>
          </div>

          <Button
            type="submit"
            className="w-full"
            disabled={isSubmitting || !departureDate || (tripType === "round-trip" && !returnDate)}
          >
            {isSubmitting ? "Processing..." : "Book Flight"}
          </Button>
        </form>
      </CardContent>
      <CardFooter className="flex flex-col space-y-4 border-t pt-6">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Plane className="h-4 w-4" />
          <span>All flights include 20kg checked baggage and 7kg carry-on</span>
        </div>
        <div className="text-xs text-muted-foreground">
          By booking, you agree to our terms and conditions. Cancellation fees may apply.
        </div>
      </CardFooter>
    </Card>
  )
}

