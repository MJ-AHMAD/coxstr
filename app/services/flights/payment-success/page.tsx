"use client"

import { useSearchParams, useRouter } from "next/navigation"
import { CheckCircle, Download, Home, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function PaymentSuccessPage() {
  const searchParams = useSearchParams()
  const router = useRouter()

  const bookingNumber = searchParams.get("bookingNumber") || ""

  // Handle Download PDF
  const handleDownloadPDF = () => {
    // In a real application, this would generate a PDF
    alert(
      "PDF download functionality would be implemented here. The PDF would include booking details and payment confirmation.",
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
            <CardTitle className="text-2xl">Payment Successful!</CardTitle>
            <CardDescription>Your payment has been processed successfully</CardDescription>
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

            <div className="space-y-2">
              <h3 className="font-medium">What's Next?</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                  <span>Check your email for a detailed booking confirmation</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                  <span>Download your e-ticket for check-in at the airport</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                  <span>Arrive at the airport at least 2 hours before your flight</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                  <span>Present your booking reference or e-ticket at the check-in counter</span>
                </li>
              </ul>
            </div>
          </CardContent>

          <CardFooter className="flex flex-col space-y-4 border-t pt-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
              <Button onClick={handleDownloadPDF} variant="outline" className="w-full">
                <Download className="mr-2 h-4 w-4" />
                Download E-Ticket
              </Button>
              <Button
                onClick={() => router.push(`/services/flights/manage?bookingNumber=${bookingNumber}`)}
                variant="outline"
                className="w-full"
              >
                <Calendar className="mr-2 h-4 w-4" />
                Manage Booking
              </Button>
              <Button onClick={() => router.push("/")} className="w-full">
                <Home className="mr-2 h-4 w-4" />
                Return Home
              </Button>
            </div>
            <p className="text-xs text-center text-muted-foreground mt-4">
              For any assistance, please contact our customer support at support@trustedally.com
            </p>
          </CardFooter>
        </Card>
      </div>
    </main>
  )
}

