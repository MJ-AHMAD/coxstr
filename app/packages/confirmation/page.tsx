"use client"

import { useSearchParams, useRouter } from "next/navigation"
import { CheckCircle, Download, Home } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

// Package details
const packageDetails = {
  economy: {
    name: "Economy Package",
    price: 12999,
    description: "Perfect for budget travelers who want to experience Cox's Bazar essentials.",
    duration: "3 Days / 2 Nights",
  },
  standard: {
    name: "Standard Package",
    price: 19999,
    description: "Our most popular package with a perfect balance of comfort and experiences.",
    duration: "4 Days / 3 Nights",
  },
  premium: {
    name: "Premium Package",
    price: 29999,
    description: "Luxury experience with premium accommodations and exclusive activities.",
    duration: "5 Days / 4 Nights",
  },
}

export default function BookingConfirmationPage() {
  const searchParams = useSearchParams()
  const router = useRouter()

  const bookingNumber = searchParams.get("bookingNumber") || ""
  const packageType = searchParams.get("package") || "standard"
  const travelers = searchParams.get("travelers") || "2"
  const dateString = searchParams.get("date") || ""
  const name = searchParams.get("name") || "Guest"

  // Get the selected package details
  const selectedPackage = packageDetails[packageType as keyof typeof packageDetails] || packageDetails.standard

  // Format date
  const formatDate = (dateString: string) => {
    if (!dateString) return "Not specified"
    try {
      const date = new Date(dateString)
      return date.toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    } catch (e) {
      return "Invalid date"
    }
  }

  // Calculate total price
  const calculateTotalPrice = () => {
    return selectedPackage.price * Number.parseInt(travelers)
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
      <div className="container max-w-2xl">
        <Card className="border-green-200">
          <CardHeader className="text-center border-b pb-6">
            <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
              <CheckCircle className="h-12 w-12 text-green-600" />
            </div>
            <CardTitle className="text-2xl">Booking Confirmed!</CardTitle>
            <CardDescription>Your package booking has been received</CardDescription>
          </CardHeader>

          <CardContent className="pt-6 space-y-6">
            <div className="text-center">
              <h3 className="font-medium text-muted-foreground">Booking Reference</h3>
              <p className="text-2xl font-bold">{bookingNumber}</p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <p className="text-center text-green-700">
                A confirmation email has been sent to your registered email address with all the details of your
                booking.
              </p>
            </div>

            <Separator />

            <div className="space-y-4">
              <h3 className="font-medium">Booking Details</h3>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Package</p>
                  <p className="font-medium">{selectedPackage.name}</p>
                </div>

                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Duration</p>
                  <p className="font-medium">{selectedPackage.duration}</p>
                </div>

                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Travel Date</p>
                  <p className="font-medium">{formatDate(dateString)}</p>
                </div>

                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Travelers</p>
                  <p className="font-medium">
                    {travelers} {Number.parseInt(travelers) === 1 ? "Person" : "People"}
                  </p>
                </div>

                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Booked By</p>
                  <p className="font-medium">{name}</p>
                </div>

                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Total Amount</p>
                  <p className="font-medium text-primary">৳{calculateTotalPrice().toLocaleString()}</p>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="font-medium">What's Next?</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                  <span>Our team will contact you within 24 hours to confirm all details</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                  <span>Complete your payment using the instructions sent to your email</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                  <span>Receive your detailed itinerary and travel vouchers</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                  <span>Get ready for your amazing Cox's Bazar adventure!</span>
                </li>
              </ul>
            </div>
          </CardContent>

          <CardFooter className="flex flex-col space-y-4 border-t pt-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              <Button onClick={handleDownloadPDF} variant="outline" className="w-full">
                <Download className="mr-2 h-4 w-4" />
                Download Booking Details
              </Button>
              <Button onClick={() => router.push("/")} className="w-full">
                <Home className="mr-2 h-4 w-4" />
                Return Home
              </Button>
            </div>
            <p className="text-xs text-center text-muted-foreground mt-4">
              For any assistance, please contact our customer support at t-ally@outlook.com
            </p>
          </CardFooter>
        </Card>
      </div>
    </main>
  )
}

