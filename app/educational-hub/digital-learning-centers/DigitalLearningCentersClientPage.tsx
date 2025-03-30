"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function DigitalLearningCentersClientPage() {
  const [activeTab, setActiveTab] = useState("urban")

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const tabs = [
    { label: "Urban Centers", value: "urban" },
    { label: "Rural Centers", value: "rural" },
    { label: "Mobile Centers", value: "mobile" },
    { label: "Specialized Centers", value: "specialized" },
  ]

  const urbanCenters = [
    { id: 1, name: "Urban Center 1", location: "City A" },
    { id: 2, name: "Urban Center 2", location: "City B" },
    { id: 3, name: "Urban Center 3", location: "City C" },
  ]

  const ruralCenters = [
    { id: 4, name: "Rural Center 1", location: "Village X" },
    { id: 5, name: "Rural Center 2", location: "Village Y" },
    { id: 6, name: "Rural Center 3", location: "Village Z" },
  ]

  const mobileCenters = [
    { id: 7, name: "Mobile Center 1", location: "Region P" },
    { id: 8, name: "Mobile Center 2", location: "Region Q" },
    { id: 9, name: "Mobile Center 3", location: "Region R" },
  ]

  const specializedCenters = [
    { id: 10, name: "Specialized Center 1", location: "Area L" },
    { id: 11, name: "Specialized Center 2", location: "Area M" },
    { id: 12, name: "Specialized Center 3", location: "Area N" },
  ]

  const CenterCard = ({ center }) => (
    <Card className="overflow-hidden">
      <CardHeader>
        <CardTitle>{center.name}</CardTitle>
        <CardDescription>Location: {center.location}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Details about {center.name}...</p>
      </CardContent>
      <CardFooter>
        <Button>Learn More</Button>
      </CardFooter>
    </Card>
  )

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center mb-8">Digital Learning Centers</h1>

      {/* Tab Navigation Section */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-12">
        <h2 className="text-xl font-semibold mb-4 text-center">Browse Centers by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {tabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveTab(tab.value)}
              className={`flex items-center justify-center p-3 rounded-md text-sm font-medium text-center h-full ${
                activeTab === tab.value ? "bg-primary text-white" : "bg-gray-100 hover:bg-gray-200 text-gray-800"
              }`}
            >
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content Section */}
      <div className="mt-8">
        {activeTab === "urban" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {urbanCenters.map((center) => (
              <CenterCard key={center.id} center={center} />
            ))}
          </div>
        )}
        {activeTab === "rural" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ruralCenters.map((center) => (
              <CenterCard key={center.id} center={center} />
            ))}
          </div>
        )}
        {activeTab === "mobile" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mobileCenters.map((center) => (
              <CenterCard key={center.id} center={center} />
            ))}
          </div>
        )}
        {activeTab === "specialized" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specializedCenters.map((center) => (
              <CenterCard key={center.id} center={center} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

