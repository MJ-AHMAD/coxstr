"use client"

import type React from "react"

import Link from "next/link"
import { useState } from "react"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// First, import the useRouter hook
import { useRouter } from "next/navigation"

// Define the site structure
const siteStructure = [
  {
    category: "Main Pages",
    pages: [
      { title: "Home", path: "/", description: "Main landing page with overview of Cox's Bazar" },
      { title: "About", path: "/about", description: "Information about TRUSTED-ALLY Tourism" },
      { title: "Contact", path: "/contact", description: "Contact information and inquiry form" },
      { title: "Site Map", path: "/site-map", description: "Overview of website structure" },
    ],
  },
  {
    category: "Destinations",
    pages: [
      { title: "Sea Beach", path: "/destinations/sea-beach", description: "Information about Cox's Bazar sea beach" },
    ],
  },
  {
    category: "Packages",
    pages: [
      { title: "Package Booking", path: "/packages/booking", description: "Book tourism packages" },
      { title: "Booking Confirmation", path: "/packages/confirmation", description: "Confirm package bookings" },
    ],
  },
  {
    category: "Services",
    pages: [
      { title: "Transportation", path: "/services/transportation", description: "Transportation services" },
      { title: "Accommodation", path: "/services/accommodation", description: "Accommodation options" },
      { title: "Dining", path: "/services/dining", description: "Dining options and restaurants" },
      { title: "Guided Tours", path: "/services/guided-tours", description: "Guided tour services" },
      { title: "Flight Services", path: "/services/flights", description: "Flight booking services" },
      { title: "Flight Booking", path: "/services/flights/booking", description: "Book flights" },
      {
        title: "Flight Confirmation",
        path: "/services/flights/confirmation",
        description: "Flight booking confirmation",
      },
      { title: "Flight Payment", path: "/services/flights/payment", description: "Payment for flight bookings" },
      {
        title: "Payment Success",
        path: "/services/flights/payment-success",
        description: "Successful payment confirmation",
      },
      { title: "Manage Bookings", path: "/services/flights/manage", description: "Manage flight bookings" },
      { title: "Service Confirmation", path: "/services/confirmation", description: "Confirm service bookings" },
    ],
  },
  {
    category: "Attractions",
    pages: [
      // Beaches
      { title: "Inani Beach", path: "/attractions/beaches/inani", description: "Information about Inani Beach" },
      { title: "Laboni Beach", path: "/attractions/beaches/laboni", description: "Information about Laboni Beach" },
      {
        title: "Himchari Beach",
        path: "/attractions/beaches/himchari",
        description: "Information about Himchari Beach",
      },

      // Islands
      {
        title: "St. Martin's Island",
        path: "/attractions/islands/st-martins",
        description: "Information about St. Martin's Island",
      },
      {
        title: "Maheshkhali Island",
        path: "/attractions/islands/maheshkhali",
        description: "Information about Maheshkhali Island",
      },
      {
        title: "Sonadia Island",
        path: "/attractions/islands/sonadia",
        description: "Information about Sonadia Island",
      },

      // Culture
      {
        title: "Rakhaine Village",
        path: "/attractions/culture/rakhaine-village",
        description: "Information about Rakhaine Village",
      },
      {
        title: "Buddhist Temples",
        path: "/attractions/culture/buddhist-temples",
        description: "Information about Buddhist Temples",
      },
      {
        title: "Local Markets",
        path: "/attractions/culture/local-markets",
        description: "Information about Local Markets",
      },

      // Adventure
      {
        title: "Water Sports",
        path: "/attractions/adventure/water-sports",
        description: "Information about Water Sports",
      },
      {
        title: "Marine Drive",
        path: "/attractions/adventure/marine-drive",
        description: "Information about Marine Drive",
      },
      {
        title: "Hiking Trails",
        path: "/attractions/adventure/hiking-trails",
        description: "Information about Hiking Trails",
      },
    ],
  },
  {
    category: "Economic Hub",
    pages: [
      {
        title: "Economic Hub Overview",
        path: "/economic-hub",
        description: "Overview of Cox's Bazar economic opportunities",
      },
      {
        title: "Marine Products Export",
        path: "/economic-hub/exports/marine-products",
        description: "Information about marine products export potential",
      },
      {
        title: "Handcrafted Products Export",
        path: "/economic-hub/exports/handcrafted-products",
        description: "Information about handcrafted products export potential",
      },
      {
        title: "Agricultural Products Export",
        path: "/economic-hub/exports/agricultural-products",
        description: "Information about agricultural products export potential",
      },
      {
        title: "Salt Production Export",
        path: "/economic-hub/exports/salt-production",
        description: "Information about salt production export potential",
      },
      {
        title: "Eco-Tourism Investment",
        path: "/economic-hub/investments/eco-tourism",
        description: "Investment opportunities in eco-tourism",
      },
      {
        title: "Seafood Processing Investment",
        path: "/economic-hub/investments/seafood-processing",
        description: "Investment opportunities in seafood processing",
      },
      {
        title: "Renewable Energy Investment",
        path: "/economic-hub/investments/renewable-energy",
        description: "Investment opportunities in renewable energy",
      },
      {
        title: "Digital Infrastructure Investment",
        path: "/economic-hub/investments/digital-infrastructure",
        description: "Investment opportunities in digital infrastructure",
      },
    ],
  },
  {
    category: "Educational Hub",
    pages: [
      {
        title: "Educational Hub Overview",
        path: "/educational-hub",
        description: "Overview of Cox's Bazar educational initiatives and opportunities",
      },
      {
        title: "Primary Education",
        path: "/educational-hub/primary-education",
        description: "Initiatives to transform primary education in Cox's Bazar",
      },
      {
        title: "Secondary & Higher Education",
        path: "/educational-hub/secondary-higher-education",
        description: "Programs for secondary schools and higher education institutions in Cox's Bazar",
      },
      {
        title: "Vocational Training",
        path: "/educational-hub/vocational-training",
        description: "Vocational training programs focused on tourism, hospitality and digital skills",
      },
      {
        title: "Digital Literacy",
        path: "/educational-hub/digital-literacy",
        description: "Programs to bridge the digital divide in Cox's Bazar through technology education",
      },
    ],
  },
  {
    category: "Booking",
    pages: [{ title: "Booking Page", path: "/booking", description: "Main booking page" }],
  },
  {
    category: "Legal & Policies",
    pages: [
      { title: "Privacy Policy", path: "/privacy-policy", description: "Privacy policy information" },
      { title: "Terms & Conditions", path: "/terms-conditions", description: "Terms and conditions" },
      { title: "Travel Policy", path: "/travel-policy", description: "Travel policy information" },
      { title: "Cookie Policy", path: "/cookie-policy", description: "Cookie policy information" },
    ],
  },
  {
    category: "Management & Administration",
    pages: [
      { title: "Team Dashboard", path: "/team-dashboard", description: "Dashboard for team members" },
      { title: "Management", path: "/management", description: "Management portal" },
      { title: "Employee Dashboard", path: "/employee-dashboard", description: "Dashboard for employees" },
      { title: "Admin Dashboard", path: "/admin-dashboard", description: "Dashboard for administrators" },
      { title: "Funding Proposal", path: "/funding-proposal", description: "Funding proposal information" },
      { title: "Investment Proposal", path: "/investment-proposal", description: "Investment proposal information" },
      { title: "Roles", path: "/roles", description: "Organizational roles and responsibilities" },
      { title: "Schedule", path: "/schedule", description: "Staff scheduling system" },
      { title: "Guidance", path: "/guidance", description: "Technical guidance and instructions" },
    ],
  },
  {
    category: "Other Pages",
    pages: [
      {
        title: "Student Team Application",
        path: "/student-team-application",
        description: "Apply to join MJ Ahmad's special student team",
      },
    ],
  },
]

// Add a list of protected routes
const protectedRoutes = [
  "/team-dashboard",
  "/management",
  "/employee-dashboard",
  "/admin-dashboard",
  "/funding-proposal",
  "/investment-proposal",
  "/roles",
  "/schedule",
  "/guidance",
  "/core-team-dashboard",
  "/board-dashboard",
  "/investor-dashboard",
]

// Update the export default function to include the router
export default function SiteMapClientPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeTab, setActiveTab] = useState("all")
  const router = useRouter()

  // Add a function to handle link clicks
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    // Check if the path or any parent path is protected
    const isProtected = protectedRoutes.some((route) => path === route || path.startsWith(`${route}/`))

    if (isProtected) {
      e.preventDefault()
      router.push("/login")
    }
  }

  // Filter pages based on search query
  const filteredStructure = siteStructure
    .map((category) => {
      return {
        ...category,
        pages: category.pages.filter(
          (page) =>
            page.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            page.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
            page.path.toLowerCase().includes(searchQuery.toLowerCase()),
        ),
      }
    })
    .filter((category) => category.pages.length > 0)

  // Get all pages for "All" tab
  const allPages = siteStructure
    .flatMap((category) => category.pages.map((page) => ({ ...page, category: category.category })))
    .filter(
      (page) =>
        page.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        page.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        page.path.toLowerCase().includes(searchQuery.toLowerCase()),
    )

  // Update the return statement to use the handleLinkClick function
  // Replace the Link components in the "all" TabsContent
  return (
    <div className="container py-10">
      {/* Keep the existing header and search */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Site Map</h1>
        <p className="text-muted-foreground text-lg mb-8">
          Complete overview of all pages and sections of the TRUSTED-ALLY Cox's Bazar Tourism website.
        </p>

        <div className="relative max-w-md mx-auto mb-8">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search pages..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid grid-cols-4 md:grid-cols-8 mb-8">
          <TabsTrigger value="all">All</TabsTrigger>
          {siteStructure.map((category, index) => (
            <TabsTrigger key={index} value={category.category.toLowerCase().replace(/\s+/g, "-")}>
              {category.category}
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value="all" className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {allPages.map((page, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="text-xs text-muted-foreground mb-1">{page.category}</div>
                  <Link
                    href={page.path}
                    className="text-lg font-medium hover:text-primary transition-colors"
                    onClick={(e) => handleLinkClick(e, page.path)}
                  >
                    {page.title}
                    {protectedRoutes.some((route) => page.path === route || page.path.startsWith(`${route}/`)) && (
                      <span className="ml-2 text-xs bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full">
                        Protected
                      </span>
                    )}
                  </Link>
                  <p className="text-sm text-muted-foreground mt-1">{page.description}</p>
                  <div className="text-xs text-muted-foreground mt-2">{page.path}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Update the category tabs as well */}
        {siteStructure.map((category, index) => (
          <TabsContent key={index} value={category.category.toLowerCase().replace(/\s+/g, "-")} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {category.pages
                .filter(
                  (page) =>
                    page.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    page.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    page.path.toLowerCase().includes(searchQuery.toLowerCase()),
                )
                .map((page, pageIndex) => (
                  <Card key={pageIndex} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <Link
                        href={page.path}
                        className="text-lg font-medium hover:text-primary transition-colors"
                        onClick={(e) => handleLinkClick(e, page.path)}
                      >
                        {page.title}
                        {protectedRoutes.some((route) => page.path === route || page.path.startsWith(`${route}/`)) && (
                          <span className="ml-2 text-xs bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full">
                            Protected
                          </span>
                        )}
                      </Link>
                      <p className="text-sm text-muted-foreground mt-1">{page.description}</p>
                      <div className="text-xs text-muted-foreground mt-2">{page.path}</div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>

      {/* Keep the existing site structure visualization */}
      <div className="mt-16 border-t pt-8">
        <h2 className="text-2xl font-bold mb-6">Site Structure Visualization</h2>
        <div className="overflow-x-auto">
          <div className="min-w-[800px]">
            <div className="flex flex-col items-center">
              <div className="bg-primary text-primary-foreground px-4 py-2 rounded-lg mb-4">Home (/)</div>
              <div className="h-8 border-l-2 border-gray-300"></div>
              <div className="grid grid-cols-6 gap-4 w-full">
                {["Main Pages", "Services", "Attractions", "Economic Hub", "Educational Hub", "Management"].map(
                  (section, i) => (
                    <div key={i} className="flex flex-col items-center">
                      <div className="bg-secondary text-secondary-foreground px-3 py-1.5 rounded-lg mb-4 text-sm">
                        {section}
                      </div>
                      <div className="h-8 border-l-2 border-gray-300"></div>
                      <div className="grid gap-2 w-full">
                        {Array(3)
                          .fill(0)
                          .map((_, j) => (
                            <div
                              key={j}
                              className="bg-muted text-muted-foreground px-2 py-1 rounded text-xs text-center"
                            >
                              {section === "Main Pages" && j === 0 && "About"}
                              {section === "Main Pages" && j === 1 && "Contact"}
                              {section === "Main Pages" && j === 2 && "Site Map"}

                              {section === "Services" && j === 0 && "Transportation"}
                              {section === "Services" && j === 1 && "Accommodation"}
                              {section === "Services" && j === 2 && "Flights"}

                              {section === "Attractions" && j === 0 && "Beaches"}
                              {section === "Attractions" && j === 1 && "Islands"}
                              {section === "Attractions" && j === 2 && "Culture"}

                              {section === "Economic Hub" && j === 0 && "Exports"}
                              {section === "Economic Hub" && j === 1 && "Investments"}
                              {section === "Economic Hub" && j === 2 && "Trade Info"}

                              {section === "Educational Hub" && j === 0 && "Primary Education"}
                              {section === "Educational Hub" && j === 1 && "Secondary Education"}
                              {section === "Educational Hub" && j === 2 && "Digital Literacy"}

                              {section === "Management" && j === 0 && (
                                <span className="flex items-center justify-center">
                                  Admin Dashboard
                                  <span className="ml-1 bg-amber-100 text-amber-800 px-1 rounded-full text-[10px]">
                                    Protected
                                  </span>
                                </span>
                              )}
                              {section === "Management" && j === 1 && (
                                <span className="flex items-center justify-center">
                                  Team Dashboard
                                  <span className="ml-1 bg-amber-100 text-amber-800 px-1 rounded-full text-[10px]">
                                    Protected
                                  </span>
                                </span>
                              )}
                              {section === "Management" && j === 2 && (
                                <span className="flex items-center justify-center">
                                  Roles
                                  <span className="ml-1 bg-amber-100 text-amber-800 px-1 rounded-full text-[10px]">
                                    Protected
                                  </span>
                                </span>
                              )}
                            </div>
                          ))}
                      </div>
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

