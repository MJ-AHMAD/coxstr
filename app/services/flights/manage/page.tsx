"use client"

import { CardFooter } from "@/components/ui/card"

import { useState, useEffect } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import Image from "next/image"
import { format } from "date-fns"
import { Download, CreditCard, AlertTriangle, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

export default function ManageBookingPage() {
  const searchParams = useSearchParams()
  const router = useRouter()

  const bookingNumber = searchParams.get("bookingNumber") || ""

  // Mock booking data - in a real app, this would be fetched from an API
  const [bookingData, setBookingData] = useState({
    bookingNumber,
    status: "Pending Payment",
    flightNumber: "BS 141",
    airline: "US-Bangla Airlines",
    departureTime: "07:15",
    arrivalTime: "08:20",
    from: "DAC",
    to: "CXB",
    date: new Date().toISOString().split("T")[0],
    passengerCount: 1,
    class: "Economy",
    totalPrice: 3500,
    passengerName: "Mr John Doe",
    email: "t-ally@outlook.com",
    phone: "+880 1892051303",
  })

  // Countdown timer
  const [timeLeft, setTimeLeft] = useState(20 * 60) // 20 minutes in seconds
  const [progress, setProgress] = useState(100)

  useEffect(() => {
    if (bookingData.status === "Pending Payment") {
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(timer)
            setBookingData({
              ...bookingData,
              status: "Cancelled",
            })
            return 0
          }
          return prevTime - 1
        })
      }, 1000)

      return () => clearInterval(timer)
    }
  }, [bookingData])

  useEffect(() => {
    const totalTime = 20 * 60 // 20 minutes in seconds
    setProgress((timeLeft / totalTime) * 100)
  }, [timeLeft])

  // Format time to MM:SS
  const formatTimeLeft = () => {
    const minutes = Math.floor(timeLeft / 60)
    const seconds = timeLeft % 60
    return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
  }

  // Format time to 12-hour format
  const formatTime = (time: string) => {
    if (!time) return ""
    const [hours, minutes] = time.split(":")
    const hour = Number.parseInt(hours)
    const ampm = hour >= 12 ? "PM" : "AM"
    const formattedHour = hour % 12 || 12
    return `${formattedHour}:${minutes} ${ampm}`
  }

  // Handle Pay Now button click
  const handlePayNow = () => {
    router.push(`/services/flights/payment?bookingNumber=${bookingNumber}&totalPrice=${bookingData.totalPrice}`)
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
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight">Manage Booking</h1>
          <p className="text-muted-foreground">View and manage your flight booking</p>
        </div>

        <Card>
          <CardHeader className="border-b pb-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <div>
                <CardTitle>Booking Reference: {bookingNumber}</CardTitle>
                <CardDescription>Created on {format(new Date(), "MMMM d, yyyy")}</CardDescription>
              </div>
              <Badge
                className={
                  bookingData.status === "Confirmed"
                    ? "bg-green-500"
                    : bookingData.status === "Pending Payment"
                      ? "bg-amber-500"
                      : "bg-red-500"
                }
              >
                {bookingData.status}
              </Badge>
            </div>
          </CardHeader>

          <CardContent className="pt-6">
            {bookingData.status === "Pending Payment" && (
              <div className="mb-6 bg-amber-50 border border-amber-200 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5" />
                  <div className="space-y-2 flex-1">
                    <h4 className="font-medium text-amber-700">Payment Required</h4>
                    <p className="text-sm text-amber-600">
                      Please complete your payment to confirm your booking. Your reservation will be held for:
                    </p>
                    <div className="space-y-1">
                      <div className="flex justify-between items-center text-sm">
                        <span className="font-medium text-amber-700">{formatTimeLeft()}</span>
                        <span className="text-amber-600">remaining</span>
                      </div>
                      <Progress value={progress} className="h-2" />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {bookingData.status === "Cancelled" && (
              <div className="mb-6 bg-red-50 border border-red-200 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-red-700">Booking Cancelled</h4>
                    <p className="text-sm text-red-600">
                      This booking has been cancelled due to non-payment within the required timeframe.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {bookingData.status === "Confirmed" && (
              <div className="mb-6 bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-green-700">Booking Confirmed</h4>
                    <p className="text-sm text-green-600">
                      Your booking has been confirmed. You can download your e-ticket below.
                    </p>
                  </div>
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="font-medium">Flight Details</h3>

                <div className="flex items-center gap-3">
                  <Image
                    src={
                      bookingData.airline.includes("US-Bangla")
                        ? "https://mj-ahmad.github.io/mja2025/img/usb.png"
                        : bookingData.airline.includes("NovoAir")
                          ? "https://mj-ahmad.github.io/mja2025/img/nov.png"
                          : bookingData.airline.includes("Air Astra")
                            ? "https://mj-ahmad.github.io/mja2025/img/air.png"
                            : "https://mj-ahmad.github.io/mja2025/img/bim.png"
                    }
                    alt={bookingData.airline}
                    width={80}
                    height={30}
                    className="object-contain"
                  />
                  <div>
                    <div className="font-medium">{bookingData.airline}</div>
                    <div className="text-sm text-muted-foreground">{bookingData.flightNumber}</div>
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="text-sm text-muted-foreground">
                    {format(new Date(bookingData.date), "EEEE, MMMM d, yyyy")}
                  </div>

                  <div className="flex justify-between items-start">
                    <div>
                      <div className="text-lg font-bold">{formatTime(bookingData.departureTime)}</div>
                      <div className="text-sm text-muted-foreground">{bookingData.from}</div>
                    </div>
                    <div className="text-sm text-muted-foreground">to</div>
                    <div>
                      <div className="text-lg font-bold">{formatTime(bookingData.arrivalTime)}</div>
                      <div className="text-sm text-muted-foreground">{bookingData.to}</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="text-sm font-medium">Class</div>
                  <div>{bookingData.class}</div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-medium">Passenger Information</h3>

                <div className="space-y-1">
                  <div className="text-sm font-medium">Passenger Name</div>
                  <div>{bookingData.passengerName}</div>
                </div>

                <div className="space-y-1">
                  <div className="text-sm font-medium">Contact Information</div>
                  <div>{bookingData.email}</div>
                  <div>{bookingData.phone}</div>
                </div>

                <div className="space-y-1">
                  <div className="text-sm font-medium">Number of Passengers</div>
                  <div>{bookingData.passengerCount}</div>
                </div>
              </div>
            </div>

            <Separator className="my-6" />

            <div className="space-y-4">
              <h3 className="font-medium">Payment Information</h3>

              <div className="flex justify-between">
                <span>Total Amount</span>
                <span className="font-bold text-lg">৳{bookingData.totalPrice.toLocaleString()}</span>
              </div>

              {bookingData.status === "Pending Payment" && (
                <div className="bg-muted/30 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Bank Account Details</h4>
                  <div className="space-y-1 text-sm">
                    <div className="flex justify-between">
                      <span>Bank Name:</span>
                      <span className="font-medium">Dutch-Bangla Bank Limited</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Account Name:</span>
                      <span className="font-medium">Trusted Ally Tourism Ltd.</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Account Number:</span>
                      <span className="font-medium">117.110.12345</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Branch:</span>
                      <span className="font-medium">Gulshan Branch, Dhaka</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Reference:</span>
                      <span className="font-medium">{bookingNumber}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </CardContent>

          <CardFooter className="flex flex-col space-y-4 border-t pt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
              {bookingData.status === "Pending Payment" && (
                <>
                  <Button onClick={handlePayNow} size="lg" className="w-full">
                    <CreditCard className="mr-2 h-4 w-4" />
                    Pay Now
                  </Button>
                  <Button onClick={handleDownloadPDF} variant="outline" size="lg" className="w-full">
                    <Download className="mr-2 h-4 w-4" />
                    Download Payment Instructions
                  </Button>
                </>
              )}

              {bookingData.status === "Confirmed" && (
                <>
                  <Button onClick={handleDownloadPDF} size="lg" className="w-full">
                    <Download className="mr-2 h-4 w-4" />
                    Download E-Ticket
                  </Button>
                  <Button onClick={() => router.push("/")} variant="outline" size="lg" className="w-full">
                    Return to Home
                  </Button>
                </>
              )}

              {bookingData.status === "Cancelled" && (
                <>
                  <Button onClick={() => router.push("/services/flights")} size="lg" className="w-full">
                    Book New Flight
                  </Button>
                  <Button onClick={() => router.push("/")} variant="outline" size="lg" className="w-full">
                    Return to Home
                  </Button>
                </>
              )}
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

