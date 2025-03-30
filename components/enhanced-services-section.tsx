"use client"

import { useState, useEffect } from "react"
import { Plane, Umbrella, Utensils, Coffee, Map, Bed, Car, Compass } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import EnhancedServiceCard from "./enhanced-service-card"
import ServiceFilter from "./service-filter"
import { motion } from "framer-motion"

const allServices = [
  {
    id: "transportation",
    icon: <Plane className="h-5 w-5" />,
    title: "Transportation",
    description:
      "Comfortable and reliable transportation options including flights, private cars, and local transport.",
    imageSrc: "https://mj-ahmad.github.io/mja2025/img/transportation00.png",
    link: "/services/transportation",
    specialOffer: "10% OFF",
    testimonial: {
      content: "Their transportation service was excellent. The driver arrived on time and was very helpful.",
      author: "Rahul Ahmed",
      rating: 5,
    },
    features: ["Airport pick-up and drop-off", "Private car hire", "Group shuttle service", "Luxury transport options"],
    category: "transportation",
    price: 2000,
    popularity: 85,
  },
  {
    id: "flights",
    icon: <Plane className="h-5 w-5" />,
    title: "Flight Services",
    description:
      "Direct flights to Cox's Bazar from major cities in Bangladesh with competitive prices and flexible schedules.",
    imageSrc: "https://mj-ahmad.github.io/mja2025/img/flights00.png",
    link: "/services/flights",
    specialOffer: "15% OFF for early booking",
    testimonial: {
      content: "The flight booking process was seamless and the prices were better than other platforms I checked.",
      author: "Imran Hossain",
      rating: 5,
    },
    features: ["Multiple daily flights", "Major airlines covered", "Baggage included", "Free date changes"],
    category: "transportation",
    price: 3500,
    popularity: 92,
  },
  {
    id: "accommodation",
    icon: <Umbrella className="h-5 w-5" />,
    title: "Accommodation",
    description: "Handpicked hotels and resorts ranging from budget-friendly to luxury beachfront properties.",
    imageSrc: "https://mj-ahmad.github.io/mja2025/img/cox1.png",
    link: "/services/accommodation",
    specialOffer: "Pay for 2 nights, stay for 3",
    testimonial: {
      content: "Our hotel room with sea view was incredible. All amenities were first class.",
      author: "Sumi Khan",
      rating: 4,
    },
    features: ["Rooms with sea view", "Swimming pool access", "Free WiFi", "In-house restaurant"],
    category: "accommodation",
    price: 5000,
    popularity: 90,
  },
  {
    id: "dining",
    icon: <Utensils className="h-5 w-5" />,
    title: "Dining",
    description: "Authentic local cuisine and international dining options with special dietary accommodations.",
    imageSrc: "https://mj-ahmad.github.io/mja2025/img/dining00.png",
    link: "/services/dining",
    specialOffer: "15% OFF for groups",
    testimonial: {
      content: "The seafood dinner was exceptional. It was prepared with fresh ingredients and local spices.",
      author: "Tania Rahman",
      rating: 5,
    },
    features: [
      "Fresh seafood specialties",
      "Local Bangladeshi cuisine",
      "International cuisine",
      "Special diet accommodations",
    ],
    category: "dining",
    price: 1500,
    popularity: 80,
  },
  {
    id: "guided-tours",
    icon: <Coffee className="h-5 w-5" />,
    title: "Guided Tours",
    description: "Expert local guides providing insightful tours to all major attractions and hidden gems.",
    imageSrc: "https://mj-ahmad.github.io/mja2025/img/expert01.png",
    link: "/services/guided-tours",
    specialOffer: "Free photography session",
    testimonial: {
      content:
        "Our guide was incredibly knowledgeable and showed us hidden spots in Cox's Bazar we wouldn't have found on our own.",
      author: "Kamal Hossain",
      rating: 5,
    },
    features: [
      "Experienced local guides",
      "Customized tour plans",
      "Historical and cultural site visits",
      "Photography support",
    ],
    category: "guided-tours",
    price: 3000,
    popularity: 95,
  },
  {
    id: "adventure",
    icon: <Compass className="h-5 w-5" />,
    title: "Adventure Package",
    description: "Exciting adventure activities like parasailing, jet skiing, and hiking.",
    imageSrc: "https://mj-ahmad.github.io/mja2025/img/stay00.png",
    link: "/services/guided-tours",
    specialOffer: "20% OFF for groups",
    testimonial: {
      content: "The parasailing experience was incredible! The view from above the sea was amazing.",
      author: "Farhan Ali",
      rating: 5,
    },
    features: ["Parasailing", "Jet skiing", "Snorkeling", "Hiking trails"],
    category: "guided-tours",
    price: 4000,
    popularity: 88,
  },
  {
    id: "luxury-transport",
    icon: <Car className="h-5 w-5" />,
    title: "Luxury Transport",
    description: "Premium vehicles and chauffeurs for luxurious transportation services.",
    imageSrc: "https://mj-ahmad.github.io/mja2025/img/transportation03.png",
    link: "/services/transportation",
    specialOffer: "Free upgrade",
    testimonial: {
      content: "The luxury SUV was extremely comfortable and the driver was very professional.",
      author: "Zahid Hassan",
      rating: 5,
    },
    features: ["Premium SUVs", "Professional drivers", "Air conditioned", "Free WiFi"],
    category: "transportation",
    price: 6000,
    popularity: 75,
  },
  {
    id: "beach-resort",
    icon: <Bed className="h-5 w-5" />,
    title: "Beach Resort",
    description: "Luxurious resorts located right next to the beach.",
    imageSrc: "https://mj-ahmad.github.io/mja2025/img/stay03.png",
    link: "/services/accommodation",
    specialOffer: "Honeymoon special",
    testimonial: {
      content: "The resort was heavenly. The sea view, service, and food were all exceptional.",
      author: "Nazmul Islam",
      rating: 5,
    },
    features: ["Private beach access", "Infinity pool", "Spa services", "Multiple restaurants"],
    category: "accommodation",
    price: 15000,
    popularity: 92,
  },
  {
    id: "island-tour",
    icon: <Map className="h-5 w-5" />,
    title: "Island Tour",
    description: "Guided tours to St. Martin's and other nearby islands.",
    imageSrc: "https://mj-ahmad.github.io/mja2025/img/island0.png",
    link: "/services/guided-tours",
    specialOffer: "Early bird discount",
    testimonial: {
      content: "The St. Martin's Island tour was one of the best experiences of my life.",
      author: "Sabrina Akter",
      rating: 4,
    },
    features: ["Boat transport", "Island exploration", "Snorkeling options", "Lunch included"],
    category: "guided-tours",
    price: 8000,
    popularity: 85,
  },
]

export default function EnhancedServicesSection() {
  const [activeTab, setActiveTab] = useState("all")
  const [filteredServices, setFilteredServices] = useState(allServices)
  const [filters, setFilters] = useState({
    search: "",
    priceRange: [0, 30000] as [number, number],
    category: "all",
    sortBy: "recommended",
  })

  useEffect(() => {
    let result = allServices

    // Filter by tab/category
    if (activeTab !== "all") {
      result = result.filter((service) => service.category === activeTab)
    }

    // Filter by search
    if (filters.search) {
      const searchLower = filters.search.toLowerCase()
      result = result.filter(
        (service) =>
          service.title.toLowerCase().includes(searchLower) || service.description.toLowerCase().includes(searchLower),
      )
    }

    // Filter by price range
    result = result.filter(
      (service) => service.price >= filters.priceRange[0] && service.price <= filters.priceRange[1],
    )

    // Sort
    switch (filters.sortBy) {
      case "price-low":
        result = [...result].sort((a, b) => a.price - b.price)
        break
      case "price-high":
        result = [...result].sort((a, b) => b.price - a.price)
        break
      case "popularity":
        result = [...result].sort((a, b) => b.popularity - a.popularity)
        break
      default:
        // Keep default order for "recommended"
        break
    }

    setFilteredServices(result)
  }, [activeTab, filters])

  const handleFilterChange = (newFilters: {
    search: string
    priceRange: [number, number]
    category: string
    sortBy: string
  }) => {
    setFilters(newFilters)
    if (newFilters.category !== "all" && newFilters.category !== filters.category) {
      setActiveTab(newFilters.category)
    }
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="md:col-span-1">
          <ServiceFilter onFilterChange={handleFilterChange} />
        </div>

        <div className="md:col-span-3">
          <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab}>
            <div className="flex items-center justify-between mb-4">
              <TabsList className="grid grid-cols-5">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="transportation">Transportation</TabsTrigger>
                <TabsTrigger value="accommodation">Accommodation</TabsTrigger>
                <TabsTrigger value="dining">Dining</TabsTrigger>
                <TabsTrigger value="guided-tours">Guided Tours</TabsTrigger>
              </TabsList>
              <Button variant="outline" size="sm">
                View All
              </Button>
            </div>

            <TabsContent value={activeTab} className="mt-0">
              {filteredServices.length > 0 ? (
                <motion.div
                  className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
                  variants={container}
                  initial="hidden"
                  animate="show"
                >
                  {filteredServices.map((service) => (
                    <motion.div key={service.id} variants={item}>
                      <EnhancedServiceCard
                        icon={service.icon}
                        title={service.title}
                        description={service.description}
                        imageSrc={service.imageSrc}
                        link={service.link}
                        specialOffer={service.specialOffer}
                        testimonial={service.testimonial}
                        features={service.features}
                      />
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                <div className="text-center py-12">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-8 h-8 text-muted-foreground"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium">No services found</h3>
                  <p className="text-muted-foreground mt-2">Try changing your filters and try again</p>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

