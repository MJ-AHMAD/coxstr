"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function VocationalTrainingClientPage() {
  const [activeTab, setActiveTab] = useState("hospitality")

  const tabs = [
    { value: "hospitality", label: "Tourism & Hospitality" },
    { value: "tech", label: "Digital & Creative" },
    { value: "crafts", label: "Traditional Crafts" },
    { value: "business", label: "Business & Entrepreneurship" },
  ]

  const hospitalityPrograms = [
    { id: 1, title: "Hotel Operations & Management", duration: "6 months" },
    { id: 2, title: "Food & Beverage Service", duration: "3 months" },
    { id: 3, title: "Culinary Arts & Local Cuisine", duration: "3 months" },
  ]

  const techPrograms = [
    { id: 4, title: "Web Development & Design", duration: "6 months" },
    { id: 5, title: "Digital Marketing for Tourism", duration: "4 months" },
    { id: 6, title: "Graphic Design & Visual Communication", duration: "3 months" },
  ]

  const craftsPrograms = [
    { id: 7, title: "Traditional Textile Weaving", duration: "4 months" },
    { id: 8, title: "Bamboo & Cane Crafts", duration: "3 months" },
    { id: 9, title: "Seashell Jewelry & Ornaments", duration: "3 months" },
  ]

  const businessPrograms = [
    { id: 10, title: "Small Business Management", duration: "4 months" },
    { id: 11, title: "E-commerce & Online Business", duration: "3 months" },
    { id: 12, title: "Financial Literacy", duration: "2 months" },
  ]

  const ProgramCard = ({ program }) => (
    <Card>
      <CardHeader>
        <CardTitle>{program.title}</CardTitle>
        <CardDescription>Duration: {program.duration}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>
          {/* Add program description here if available */}A brief description of the {program.title} program.
        </p>
      </CardContent>
      <CardFooter>
        <Button>Learn More</Button>
      </CardFooter>
    </Card>
  )

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center mb-8">Vocational Training Programs</h1>

      {/* Tab Navigation Section */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-12">
        <h2 className="text-xl font-semibold mb-4 text-center">Browse Programs by Category</h2>
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
        {activeTab === "hospitality" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hospitalityPrograms.map((program) => (
              <ProgramCard key={program.id} program={program} />
            ))}
          </div>
        )}
        {activeTab === "tech" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {techPrograms.map((program) => (
              <ProgramCard key={program.id} program={program} />
            ))}
          </div>
        )}
        {activeTab === "crafts" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {craftsPrograms.map((program) => (
              <ProgramCard key={program.id} program={program} />
            ))}
          </div>
        )}
        {activeTab === "business" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {businessPrograms.map((program) => (
              <ProgramCard key={program.id} program={program} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

