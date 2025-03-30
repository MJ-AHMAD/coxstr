"use client"

import { useState } from "react"
import Link from "next/link"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ChevronDown, Menu } from "lucide-react"

export function MainHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="font-bold text-xl text-primary">
            TRUSTED-ALLY (cox's bazar)
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
            Home
          </Link>
          <Link href="/tourist-home" className="text-sm font-medium transition-colors hover:text-primary">
            Tourist Hub
          </Link>
          <Link href="/educational-hub" className="text-sm font-medium transition-colors hover:text-primary">
            Education Hub
          </Link>
          <Link href="/economic-hub" className="text-sm font-medium transition-colors hover:text-primary">
            Economic Hub
          </Link>
          <Link href="/climate-hub" className="text-sm font-medium transition-colors hover:text-primary">
            Climate Hub
          </Link>
          <Link href="/social-initiatives" className="text-sm font-medium transition-colors hover:text-primary">
            Social Initiatives
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="gap-1 p-0 px-2 h-8">
                More
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem asChild>
                <Link href="/health-hub" className="w-full cursor-pointer">
                  Health Hub
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/marine-resources" className="w-full cursor-pointer">
                  Marine Resources
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/infrastructure" className="w-full cursor-pointer">
                  Infrastructure
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/research" className="w-full cursor-pointer">
                  Research
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/water-resources" className="w-full cursor-pointer">
                  Water Resources
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/community" className="w-full cursor-pointer">
                  Community
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/sustainable-development" className="w-full cursor-pointer">
                  Sustainable Development
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col gap-4 mt-8">
              <Link href="/" className="text-lg font-medium hover:text-primary" onClick={() => setOpen(false)}>
                Home
              </Link>
              <Link
                href="/tourist-home"
                className="text-lg font-medium hover:text-primary"
                onClick={() => setOpen(false)}
              >
                Tourist Hub
              </Link>
              <Link
                href="/educational-hub"
                className="text-lg font-medium hover:text-primary"
                onClick={() => setOpen(false)}
              >
                Education Hub
              </Link>
              <Link
                href="/economic-hub"
                className="text-lg font-medium hover:text-primary"
                onClick={() => setOpen(false)}
              >
                Economic Hub
              </Link>
              <Link
                href="/climate-hub"
                className="text-lg font-medium hover:text-primary"
                onClick={() => setOpen(false)}
              >
                Climate Hub
              </Link>
              <Link
                href="/social-initiatives"
                className="text-lg font-medium hover:text-primary"
                onClick={() => setOpen(false)}
              >
                Social Initiatives
              </Link>
              <Link
                href="/health-hub"
                className="text-lg font-medium hover:text-primary"
                onClick={() => setOpen(false)}
              >
                Health Hub
              </Link>
              <Link
                href="/marine-resources"
                className="text-lg font-medium hover:text-primary"
                onClick={() => setOpen(false)}
              >
                Marine Resources
              </Link>
              <Link
                href="/infrastructure"
                className="text-lg font-medium hover:text-primary"
                onClick={() => setOpen(false)}
              >
                Infrastructure
              </Link>
              <Link href="/research" className="text-lg font-medium hover:text-primary" onClick={() => setOpen(false)}>
                Research
              </Link>
              <Link
                href="/water-resources"
                className="text-lg font-medium hover:text-primary"
                onClick={() => setOpen(false)}
              >
                Water Resources
              </Link>
              <Link href="/community" className="text-lg font-medium hover:text-primary" onClick={() => setOpen(false)}>
                Community
              </Link>
              <Link
                href="/sustainable-development"
                className="text-lg font-medium hover:text-primary"
                onClick={() => setOpen(false)}
              >
                Sustainable Development
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

