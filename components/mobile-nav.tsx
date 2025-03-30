"use client"

import { useState } from "react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Menu } from "lucide-react"

export function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <nav className="flex flex-col gap-4 mt-8">
          <Link href="#" className="text-lg font-medium hover:text-primary" onClick={() => setOpen(false)}>
            Home
          </Link>
          <Link href="#about" className="text-lg font-medium hover:text-primary" onClick={() => setOpen(false)}>
            About
          </Link>
          <Link href="#packages" className="text-lg font-medium hover:text-primary" onClick={() => setOpen(false)}>
            Packages
          </Link>
          <Link href="#services" className="text-lg font-medium hover:text-primary" onClick={() => setOpen(false)}>
            Services
          </Link>
          <Link href="#testimonials" className="text-lg font-medium hover:text-primary" onClick={() => setOpen(false)}>
            Testimonials
          </Link>
          <Link href="#contact" className="text-lg font-medium hover:text-primary" onClick={() => setOpen(false)}>
            Contact
          </Link>
          <Button className="mt-4" asChild>
            <Link href="/booking" onClick={() => setOpen(false)}>
              Book Now
            </Link>
          </Button>
        </nav>
      </SheetContent>
    </Sheet>
  )
}

