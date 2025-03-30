"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { cn } from "@/lib/utils"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Adventure Traveler",
    content:
      "Our trip to Cox's Bazar with TRUSTED-ALLY was absolutely amazing! The beach was pristine, and the service was impeccable. Our guide knew all the best spots and made sure we had an unforgettable experience.",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Family Vacationer",
    content:
      "We booked the Premium Package for our family vacation, and it exceeded all our expectations. The accommodations were luxurious, and the activities were perfect for both adults and children. Highly recommended!",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Solo Traveler",
    content:
      "As a solo traveler, safety and experience were my top priorities. TRUSTED-ALLY delivered on both fronts. The guided tours were informative, and I felt safe and well-taken care of throughout my journey.",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 4,
  },
  {
    name: "David Wilson",
    role: "Honeymoon Trip",
    content:
      "We chose Cox's Bazar for our honeymoon, and TRUSTED-ALLY made it magical. The sunset beach dinner they arranged was the highlight of our trip. Perfect service and attention to detail!",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 5,
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const itemsPerPage = 3
  const totalPages = Math.ceil(testimonials.length / itemsPerPage)

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPages)
  }

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalPages) % totalPages)
  }

  const visibleTestimonials = testimonials.slice(currentIndex * itemsPerPage, (currentIndex + 1) * itemsPerPage)

  return (
    <div className="relative">
      <div className="grid md:grid-cols-3 gap-6">
        {visibleTestimonials.map((testimonial, index) => (
          <Card key={index} className="overflow-hidden">
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="relative h-12 w-12 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-medium">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={cn(
                      "h-4 w-4",
                      i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-muted-foreground",
                    )}
                  />
                ))}
              </div>
              <p className="text-muted-foreground">{testimonial.content}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {testimonials.length > itemsPerPage && (
        <div className="flex justify-center mt-8 gap-2">
          <button
            onClick={goToPrevious}
            className="p-2 rounded-full border hover:bg-muted transition-colors"
            aria-label="Previous testimonials"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={goToNext}
            className="p-2 rounded-full border hover:bg-muted transition-colors"
            aria-label="Next testimonials"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      )}
    </div>
  )
}

