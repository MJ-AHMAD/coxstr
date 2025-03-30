"use client"

import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function ConfirmationPage() {
  const searchParams = useSearchParams()
  const type = searchParams.get("type") || "service"
  const name = searchParams.get("name") || "Guest"
  const email = searchParams.get("email") || ""

  // Format the service type for display
  const formatServiceType = (type: string) => {
    switch (type) {
      case "transportation":
        return "Transportation"
      case "accommodation":
        return "Accommodation"
      case "dining":
        return "Dining"
      case "guided-tour":
        return "Guided Tour"
      default:
        return "Service"
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-muted/30 p-4">
      <Card className="max-w-md w-full">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
            <CheckCircle className="h-10 w-10 text-primary" />
          </div>
          <CardTitle className="text-2xl">Booking Confirmed!</CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <p className="mb-4">
            Thank you, <span className="font-semibold">{name}</span>, for booking with TRUSTED-ALLY!
          </p>
          <p className="mb-4">
            Your {formatServiceType(type)} booking has been confirmed. We've sent a confirmation email to{" "}
            <span className="font-semibold">{email}</span> with all the details.
          </p>
          <div className="my-6 border-t pt-6">
            <h3 className="font-medium mb-2">What's Next?</h3>
            <p className="text-muted-foreground text-sm">
              Our team will contact you within 24 hours to confirm all the details of your booking and answer any
              questions you might have.
            </p>
          </div>
          <div className="bg-muted p-4 rounded-lg text-sm">
            <p className="font-medium mb-1">Booking Reference:</p>
            <p className="font-mono">{Math.random().toString(36).substring(2, 10).toUpperCase()}</p>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col space-y-2">
          <Button className="w-full" asChild>
            <Link href="/">Return to Homepage</Link>
          </Button>
          <Button variant="outline" className="w-full" asChild>
            <Link href="/contact">Contact Us</Link>
          </Button>
        </CardFooter>
      </Card>
    </main>
  )
}

