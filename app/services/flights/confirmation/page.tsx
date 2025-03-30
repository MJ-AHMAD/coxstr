"use client"

import { useState } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import Image from "next/image"
import { format } from "date-fns"
import { CheckCircle, Clock, Download, CreditCard } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"

// Airline logos mapping
const airlineLogos = {
  "Biman Bangladesh Airlines": "https://mj-ahmad.github.io/mja2025/img/bim.png",
  "Biman Airlines": "https://mj-ahmad.github.io/mja2025/img/bim.png",
  "US-Bangla Airlines": "https://mj-ahmad.github.io/mja2025/img/usb.png",
  NovoAir: "https://mj-ahmad.github.io/mja2025/img/nov.png",
  "Air Astra": "https://mj-ahmad.github.io/mja2025/img/air.png",
}

export default function FlightConfirmationPage() {
  const searchParams = useSearchParams()
  const router = useRouter()

  // Booking details from URL parameters
  const [bookingDetails, setBookingDetails] = useState({
    bookingNumber: searchParams.get("bookingNumber") || "",
    flightNumber: searchParams.get("flightNumber") || "",
    airline: searchParams.get("airline") || "",
    departureTime: searchParams.get("departureTime") || "",
    arrivalTime: searchParams.get("arrivalTime") || "",
    from: searchParams.get("from") || "",
    to: searchParams.get("to") || "",
    date: searchParams.get("date") || "",
    passengerCount: searchParams.get("passengerCount") || "1",
    class: searchParams.get("class") || "Economy",
    totalPrice: searchParams.get("totalPrice") || "0",
    passengerName: searchParams.get("passengerName") || "",
    email: searchParams.get("email") || "",
    phone: searchParams.get("phone") || "",
  })

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

  // Handle Pay Now button click
  const handlePayNow = () => {
    router.push(
      `/services/flights/payment?bookingNumber=${bookingDetails.bookingNumber}&totalPrice=${bookingDetails.totalPrice}`,
    )
  }

  // Handle Manage Booking button click
  const handleManageBooking = () => {
    router.push(`/services/flights/manage?bookingNumber=${bookingDetails.bookingNumber}`)
  }

  // Handle Download PDF
  const handleDownloadPDF = () => {
    // In a real application, this would generate a PDF
    alert(
      "PDF download functionality would be implemented here. The PDF would include booking details and payment instructions.",
    )
  }

  return (
    <main className="flex min-h-screen flex-col py-12">
      <div className="container max-w-4xl">
        <Card className="border-green-200">
          <CardHeader className="text-center border-b pb-6">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
              <CheckCircle className="h-10 w-10 text-green-600" />
            </div>
            <CardTitle className="text-2xl">Booking Confirmed!</CardTitle>
            <CardDescription>Your flight has been successfully booked</CardDescription>
          </CardHeader>

          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
              <div>
                <h3 className="font-medium">Booking Reference:</h3>
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold">{bookingDetails.bookingNumber}</span>
                  <Badge variant="outline" className="text-xs">
                    Unpaid
                  </Badge>
                </div>
              </div>
              <Button variant="outline" size="sm" className="mt-2 md:mt-0" onClick={handleDownloadPDF}>
                <Download className="mr-2 h-4 w-4" />
                Download PDF
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="font-medium">Flight Details</h3>

                <div className="flex items-center gap-3">
                  <Image
                    src={getAirlineLogo(bookingDetails.airline) || "/placeholder.svg"}
                    alt={bookingDetails.airline}
                    width={80}
                    height={30}
                    className="object-contain"
                  />
                  <div>
                    <div className="font-medium">{bookingDetails.airline}</div>
                    <div className="text-sm text-muted-foreground">{bookingDetails.flightNumber}</div>
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="text-sm text-muted-foreground">
                    {format(new Date(bookingDetails.date), "EEEE, MMMM d, yyyy")}
                  </div>

                  <div className="flex justify-between items-start">
                    <div>
                      <div className="text-lg font-bold">{formatTime(bookingDetails.departureTime)}</div>
                      <div className="text-sm text-muted-foreground">{bookingDetails.from}</div>
                    </div>
                    <div className="text-sm text-muted-foreground">to</div>
                    <div>
                      <div className="text-lg font-bold">{formatTime(bookingDetails.arrivalTime)}</div>
                      <div className="text-sm text-muted-foreground">{bookingDetails.to}</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="text-sm font-medium">Class</div>
                  <div>{bookingDetails.class}</div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-medium">Passenger Information</h3>

                <div className="space-y-1">
                  <div className="text-sm font-medium">Passenger Name</div>
                  <div>{bookingDetails.passengerName}</div>
                </div>

                <div className="space-y-1">
                  <div className="text-sm font-medium">Contact Information</div>
                  <div>t-ally@outlook.com</div>
                  <div>+880 1892051303</div>
                </div>

                <div className="space-y-1">
                  <div className="text-sm font-medium">Number of Passengers</div>
                  <div>{bookingDetails.passengerCount}</div>
                </div>
              </div>
            </div>

            <Separator className="my-6" />

            <div className="space-y-4">
              <h3 className="font-medium">Payment Information</h3>

              <div className="flex justify-between">
                <span>Total Amount</span>
                <span className="font-bold text-lg">
                  ৳{Number.parseInt(bookingDetails.totalPrice).toLocaleString()}
                </span>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 flex items-start gap-3">
                <Clock className="h-5 w-5 text-amber-500 mt-0.5" />
                <div>
                  <h4 className="font-medium text-amber-700">Payment Required</h4>
                  <p className="text-sm text-amber-600">
                    Please complete your payment within 20 minutes to secure your booking. Unpaid bookings will be
                    automatically cancelled.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>

          <CardFooter className="flex flex-col space-y-4 border-t pt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
              <Button onClick={handlePayNow} size="lg" className="w-full">
                <CreditCard className="mr-2 h-4 w-4" />
                Pay Now
              </Button>
              <Button onClick={handleManageBooking} variant="outline" size="lg" className="w-full">
                Manage Your Booking
              </Button>
            </div>
            <p className="text-xs text-center text-muted-foreground">
              For any assistance, please contact our customer support at t-ally@outlook.com
            </p>
          </CardFooter>
        </Card>
      </div>
    </main>
  )
}

