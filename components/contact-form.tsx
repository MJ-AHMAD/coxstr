"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPinIcon, MailIcon, PhoneIcon } from "lucide-react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    package: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handlePackageChange = (value: string) => {
    setFormData((prev) => ({ ...prev, package: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)
      setFormData({
        name: "",
        email: "",
        phone: "",
        package: "",
        message: "",
      })

      // Reset success message after 3 seconds
      setTimeout(() => {
        setIsSuccess(false)
      }, 3000)
    }, 1500)
  }

  return (
    <div className="space-y-6">
      <form onSubmit={handleSubmit} className="space-y-6 bg-muted/30 p-6 rounded-lg">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
          <Label htmlFor="package">Interested Package</Label>
          <Select value={formData.package} onValueChange={handlePackageChange}>
            <SelectTrigger id="package">
              <SelectValue placeholder="Select a package" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="economy">Economy Package</SelectItem>
              <SelectItem value="standard">Standard Package</SelectItem>
              <SelectItem value="premium">Premium Package</SelectItem>
              <SelectItem value="custom">Custom Package</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            name="message"
            placeholder="Tell us about your travel plans or any special requirements"
            value={formData.message}
            onChange={handleChange}
            rows={4}
          />
        </div>

        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>

        {isSuccess && (
          <div className="bg-green-100 text-green-700 p-3 rounded-md text-center">
            Thank you! Your message has been sent successfully.
          </div>
        )}
      </form>

      {/* Contact Information */}
      <div className="bg-muted/30 p-6 rounded-lg">
        <h3 className="text-lg font-semibold mb-3">Contact Information</h3>
        <ul className="space-y-2 text-muted-foreground">
          <li className="flex items-start gap-2">
            <MapPinIcon className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
            <span>01/A, Ally Street, Cox's Bazar, Chittagong, BD - 4701</span>
          </li>
          <li className="flex items-start gap-2">
            <MailIcon className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
            <a href="mailto:t-ally@outlook.com" className="hover:text-primary transition-colors">
              t-ally@outlook.com
            </a>
          </li>
          <li className="flex items-start gap-2">
            <PhoneIcon className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
            <a href="tel:+8801892051303" className="hover:text-primary transition-colors">
              +880 1892051303
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

