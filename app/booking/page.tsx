"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { CalendarIcon, ChevronLeft } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { useState } from "react"

export default function BookingPage() {
  const [date, setDate] = useState<Date>()

  return (
    <main className="flex min-h-screen flex-col">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="font-bold text-xl text-primary">
              TRUSTED-ALLY
            </Link>
            <span className="text-xs text-muted-foreground hidden md:inline-block">
              Together Towards a Brighter Future
            </span>
          </div>
          <Button size="sm" variant="outline" asChild>
            <Link href="/" className="flex items-center gap-2">
              <ChevronLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </div>
      </header>

      <div className="container py-10">
        <div className="flex flex-col gap-6">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Book Your Cox's Bazar Experience</h1>
            <p className="text-muted-foreground mt-2">
              Fill out the form below to book your perfect getaway to Cox's Bazar.
            </p>
          </div>

          <Tabs defaultValue="package" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="package">Package Booking</TabsTrigger>
              <TabsTrigger value="custom">Custom Tour</TabsTrigger>
              <TabsTrigger value="service">Individual Services</TabsTrigger>
            </TabsList>

            <TabsContent value="package" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Package Booking</CardTitle>
                  <CardDescription>
                    Book one of our pre-designed travel packages for a hassle-free experience.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" placeholder="Enter your full name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" placeholder="Enter your email address" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" placeholder="Enter your phone number" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="package">Select Package</Label>
                      <Select>
                        <SelectTrigger id="package">
                          <SelectValue placeholder="Select a package" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="economy">Economy Package (3 Days)</SelectItem>
                          <SelectItem value="standard">Standard Package (5 Days)</SelectItem>
                          <SelectItem value="premium">Premium Package (7 Days)</SelectItem>
                          <SelectItem value="luxury">Luxury Package (10 Days)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="guests">Number of Guests</Label>
                      <Select>
                        <SelectTrigger id="guests">
                          <SelectValue placeholder="Select number of guests" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">1 Person</SelectItem>
                          <SelectItem value="2">2 People</SelectItem>
                          <SelectItem value="3">3 People</SelectItem>
                          <SelectItem value="4">4 People</SelectItem>
                          <SelectItem value="5">5 People</SelectItem>
                          <SelectItem value="6+">6+ People</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Check-in Date</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-full justify-start text-left font-normal",
                              !date && "text-muted-foreground",
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {date ? format(date, "PPP") : "Select date"}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                        </PopoverContent>
                      </Popover>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="special-requests">Special Requests</Label>
                    <Textarea
                      id="special-requests"
                      placeholder="Any special requirements or requests?"
                      className="min-h-[100px]"
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Book Package</Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="custom" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Custom Tour Booking</CardTitle>
                  <CardDescription>Design your own custom tour with our expert travel planners.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="custom-name">Full Name</Label>
                      <Input id="custom-name" placeholder="Enter your full name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="custom-email">Email Address</Label>
                      <Input id="custom-email" type="email" placeholder="Enter your email address" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="custom-phone">Phone Number</Label>
                      <Input id="custom-phone" placeholder="Enter your phone number" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="custom-duration">Tour Duration</Label>
                      <Select>
                        <SelectTrigger id="custom-duration">
                          <SelectValue placeholder="Select duration" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="2-3">2-3 Days</SelectItem>
                          <SelectItem value="4-5">4-5 Days</SelectItem>
                          <SelectItem value="6-7">6-7 Days</SelectItem>
                          <SelectItem value="8+">8+ Days</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="custom-budget">Budget Range</Label>
                      <Select>
                        <SelectTrigger id="custom-budget">
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="economy">Economy (৳10,000-20,000)</SelectItem>
                          <SelectItem value="standard">Standard (৳20,000-40,000)</SelectItem>
                          <SelectItem value="premium">Premium (৳40,000-70,000)</SelectItem>
                          <SelectItem value="luxury">Luxury (৳70,000+)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="custom-guests">Number of Guests</Label>
                      <Select>
                        <SelectTrigger id="custom-guests">
                          <SelectValue placeholder="Select number of guests" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">1 Person</SelectItem>
                          <SelectItem value="2">2 People</SelectItem>
                          <SelectItem value="3">3 People</SelectItem>
                          <SelectItem value="4">4 People</SelectItem>
                          <SelectItem value="5">5 People</SelectItem>
                          <SelectItem value="6+">6+ People</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="custom-interests">Interests & Preferences</Label>
                    <Textarea
                      id="custom-interests"
                      placeholder="Tell us about your interests, preferred activities, and places you'd like to visit"
                      className="min-h-[100px]"
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Request Custom Tour</Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="service" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Individual Services</CardTitle>
                  <CardDescription>Book individual travel services for your Cox's Bazar trip.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="service-name">Full Name</Label>
                      <Input id="service-name" placeholder="Enter your full name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="service-email">Email Address</Label>
                      <Input id="service-email" type="email" placeholder="Enter your email address" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="service-phone">Phone Number</Label>
                      <Input id="service-phone" placeholder="Enter your phone number" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="service-type">Service Type</Label>
                      <Select>
                        <SelectTrigger id="service-type">
                          <SelectValue placeholder="Select service type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="flights">Flights</SelectItem>
                          <SelectItem value="accommodation">Accommodation</SelectItem>
                          <SelectItem value="transportation">Transportation</SelectItem>
                          <SelectItem value="guided-tours">Guided Tours</SelectItem>
                          <SelectItem value="dining">Dining Reservations</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Service Date</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-full justify-start text-left font-normal",
                              !date && "text-muted-foreground",
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {date ? format(date, "PPP") : "Select date"}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                        </PopoverContent>
                      </Popover>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="service-guests">Number of Guests</Label>
                      <Select>
                        <SelectTrigger id="service-guests">
                          <SelectValue placeholder="Select number of guests" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">1 Person</SelectItem>
                          <SelectItem value="2">2 People</SelectItem>
                          <SelectItem value="3">3 People</SelectItem>
                          <SelectItem value="4">4 People</SelectItem>
                          <SelectItem value="5">5 People</SelectItem>
                          <SelectItem value="6+">6+ People</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="service-details">Service Details</Label>
                    <Textarea
                      id="service-details"
                      placeholder="Please provide specific details about the service you need"
                      className="min-h-[100px]"
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Book Service</Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </main>
  )
}

