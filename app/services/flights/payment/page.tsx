"use client"

import type React from "react"

import { useState } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import Image from "next/image"
import { CreditCard, Building, Smartphone, CheckCircle, Lock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function PaymentPage() {
  const searchParams = useSearchParams()
  const router = useRouter()

  const bookingNumber = searchParams.get("bookingNumber") || ""
  const totalPrice = searchParams.get("totalPrice") || "0"

  const [paymentMethod, setPaymentMethod] = useState("card")
  const [isProcessing, setIsProcessing] = useState(false)
  const [formData, setFormData] = useState({
    // Card payment
    cardNumber: "",
    cardName: "",
    expiryDate: "",
    cvv: "",

    // Bank transfer
    bankName: "",
    accountNumber: "",
    transferDate: "",

    // Mobile banking
    mobileProvider: "bKash",
    mobileNumber: "",
    transactionId: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)

    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false)
      router.push(`/services/flights/payment-success?bookingNumber=${bookingNumber}`)
    }, 2000)
  }

  return (
    <main className="flex min-h-screen flex-col py-12">
      <div className="container max-w-4xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight">Payment</h1>
          <p className="text-muted-foreground">Complete your payment to confirm your booking</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Payment Methods */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Payment Method</CardTitle>
                <CardDescription>Choose your preferred payment method</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="card" value={paymentMethod} onValueChange={setPaymentMethod}>
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="card" className="flex items-center gap-2">
                      <CreditCard className="h-4 w-4" />
                      <span>Card</span>
                    </TabsTrigger>
                    <TabsTrigger value="bank" className="flex items-center gap-2">
                      <Building className="h-4 w-4" />
                      <span>Bank Transfer</span>
                    </TabsTrigger>
                    <TabsTrigger value="mobile" className="flex items-center gap-2">
                      <Smartphone className="h-4 w-4" />
                      <span>Mobile Banking</span>
                    </TabsTrigger>
                  </TabsList>

                  <form onSubmit={handleSubmit}>
                    <TabsContent value="card" className="mt-6 space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="cardNumber">Card Number</Label>
                        <Input
                          id="cardNumber"
                          name="cardNumber"
                          placeholder="1234 5678 9012 3456"
                          value={formData.cardNumber}
                          onChange={handleInputChange}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="cardName">Cardholder Name</Label>
                        <Input
                          id="cardName"
                          name="cardName"
                          placeholder="John Doe"
                          value={formData.cardName}
                          onChange={handleInputChange}
                          required
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="expiryDate">Expiry Date</Label>
                          <Input
                            id="expiryDate"
                            name="expiryDate"
                            placeholder="MM/YY"
                            value={formData.expiryDate}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="cvv">CVV</Label>
                          <Input
                            id="cvv"
                            name="cvv"
                            placeholder="123"
                            value={formData.cvv}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                      </div>

                      <div className="flex items-center gap-2 text-sm text-muted-foreground mt-4">
                        <Lock className="h-4 w-4" />
                        <span>Your payment information is secure and encrypted</span>
                      </div>
                    </TabsContent>

                    <TabsContent value="bank" className="mt-6 space-y-4">
                      <div className="bg-muted/30 p-4 rounded-lg mb-4">
                        <h3 className="font-medium mb-2">Bank Account Details</h3>
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
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="bankName">Your Bank Name</Label>
                        <Input
                          id="bankName"
                          name="bankName"
                          placeholder="Enter your bank name"
                          value={formData.bankName}
                          onChange={handleInputChange}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="accountNumber">Your Account Number</Label>
                        <Input
                          id="accountNumber"
                          name="accountNumber"
                          placeholder="Enter your account number"
                          value={formData.accountNumber}
                          onChange={handleInputChange}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="transferDate">Transfer Date</Label>
                        <Input
                          id="transferDate"
                          name="transferDate"
                          type="date"
                          value={formData.transferDate}
                          onChange={handleInputChange}
                          required
                        />
                      </div>

                      <p className="text-sm text-muted-foreground">
                        Please include your booking number ({bookingNumber}) as the reference when making the transfer.
                      </p>
                    </TabsContent>

                    <TabsContent value="mobile" className="mt-6 space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="mobileProvider">Mobile Banking Provider</Label>
                        <Select
                          value={formData.mobileProvider}
                          onValueChange={(value) => handleSelectChange("mobileProvider", value)}
                        >
                          <SelectTrigger id="mobileProvider">
                            <SelectValue placeholder="Select provider" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="bKash">bKash</SelectItem>
                            <SelectItem value="Nagad">Nagad</SelectItem>
                            <SelectItem value="Rocket">Rocket</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="bg-muted/30 p-4 rounded-lg mb-4">
                        <h3 className="font-medium mb-2">Payment Instructions</h3>
                        <div className="space-y-1 text-sm">
                          <p>1. Send money to the following number:</p>
                          <p className="font-medium">
                            {formData.mobileProvider === "bKash" && "01712-345678"}
                            {formData.mobileProvider === "Nagad" && "01712-345679"}
                            {formData.mobileProvider === "Rocket" && "01712-345680"}
                          </p>
                          <p>2. Use "{bookingNumber}" as reference</p>
                          <p>3. Enter the transaction ID below</p>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="mobileNumber">Your Mobile Number</Label>
                        <Input
                          id="mobileNumber"
                          name="mobileNumber"
                          placeholder="01XXX-XXXXXX"
                          value={formData.mobileNumber}
                          onChange={handleInputChange}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="transactionId">Transaction ID</Label>
                        <Input
                          id="transactionId"
                          name="transactionId"
                          placeholder="Enter transaction ID"
                          value={formData.transactionId}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </TabsContent>

                    <div className="mt-6">
                      <Button type="submit" className="w-full" size="lg" disabled={isProcessing}>
                        {isProcessing ? "Processing..." : `Pay ৳${Number.parseInt(totalPrice).toLocaleString()}`}
                      </Button>
                    </div>
                  </form>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Booking Number</span>
                    <span className="font-medium">{bookingNumber}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>৳{Number.parseInt(totalPrice).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Taxes & Fees</span>
                    <span>Included</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between font-bold">
                    <span>Total</span>
                    <span className="text-primary">৳{Number.parseInt(totalPrice).toLocaleString()}</span>
                  </div>
                </div>

                <div className="bg-muted/30 p-4 rounded-lg">
                  <h3 className="font-medium mb-2 flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Secure Payment</span>
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    All transactions are secure and encrypted. Your payment information is never stored on our servers.
                  </p>
                </div>

                <div className="flex justify-center gap-4 pt-4">
                  <Image src="/placeholder.svg?height=30&width=40" alt="Visa" width={40} height={30} />
                  <Image src="/placeholder.svg?height=30&width=40" alt="Mastercard" width={40} height={30} />
                  <Image src="/placeholder.svg?height=30&width=40" alt="American Express" width={40} height={30} />
                  <Image src="/placeholder.svg?height=30&width=40" alt="bKash" width={40} height={30} />
                  <Image src="/placeholder.svg?height=30&width=40" alt="Nagad" width={40} height={30} />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  )
}

