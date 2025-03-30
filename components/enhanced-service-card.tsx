"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
  imageSrc: string
  link: string
  specialOffer?: string
  testimonial?: {
    content: string
    author: string
    rating: number
  }
  features?: string[]
}

export default function EnhancedServiceCard({
  icon,
  title,
  description,
  imageSrc,
  link,
  specialOffer,
  testimonial,
  features = [],
}: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="relative h-full"
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div
        className={`h-full overflow-hidden rounded-lg border bg-card text-card-foreground shadow transition-all duration-300 ${
          isHovered ? "shadow-lg border-primary" : ""
        }`}
      >
        {specialOffer && (
          <div className="absolute right-2 top-2 z-10">
            <Badge className="bg-red-500 hover:bg-red-600 px-2 py-1 text-white">{specialOffer}</Badge>
          </div>
        )}

        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={imageSrc || "https://mj-ahmad.github.io/mja2025/img/logo.png"}
            alt={title}
            fill
            className={`object-cover transition-transform duration-700 ${isHovered ? "scale-110" : "scale-100"}`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white">
            <div className="rounded-full bg-primary/90 p-2">{icon}</div>
            <h3 className="text-xl font-bold">{title}</h3>
          </div>
        </div>

        <div className="space-y-4 p-4">
          <p className="text-muted-foreground">{description}</p>

          {features.length > 0 && (
            <ul className="space-y-1">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2 text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-4 w-4 text-primary"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          )}

          {testimonial && (
            <div className="rounded-lg bg-muted/50 p-3">
              <div className="flex gap-1 pb-2">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`h-4 w-4 ${i < testimonial.rating ? "text-yellow-500" : "text-gray-300"}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm italic text-muted-foreground">"{testimonial.content}"</p>
              <p className="pt-1 text-right text-xs font-medium">- {testimonial.author}</p>
            </div>
          )}

          <div className="flex gap-2">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" size="sm" className="flex-1">
                  View Details
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                  <DialogTitle className="flex items-center gap-2">
                    <span className="rounded-full bg-primary/20 p-1.5 text-primary">{icon}</span>
                    {title}
                  </DialogTitle>
                  <DialogDescription>{description}</DialogDescription>
                </DialogHeader>
                <div className="relative h-48 w-full overflow-hidden rounded-md">
                  <Image src={imageSrc || "https://mj-ahmad.github.io/mja2025/img/logo.png"} alt={title} fill className="object-cover" />
                </div>
                <div className="space-y-4">
                  {features.length > 0 && (
                    <div>
                      <h4 className="mb-2 font-medium">Features:</h4>
                      <ul className="grid grid-cols-2 gap-2">
                        {features.map((feature, index) => (
                          <li key={index} className="flex items-center gap-2 text-sm">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              className="h-4 w-4 text-primary"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                clipRule="evenodd"
                              />
                            </svg>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  <div className="flex justify-between gap-4">
                    <Button asChild className="flex-1">
                      <Link href={link}>Learn More</Link>
                    </Button>
                    <Button asChild variant="secondary" className="flex-1">
                      <Link href={`${link}#booking`}>Quick Book</Link>
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
            <Button asChild size="sm" className="flex-1">
              <Link href={`${link}#booking`}>Quick Book</Link>
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

