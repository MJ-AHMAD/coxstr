"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, MapPin } from "lucide-react"
import { useState } from "react"

const tabs = [
  { value: "education", label: "Marine Education" },
  { value: "cleanup", label: "Beach Cleanup Initiatives" },
  { value: "research", label: "Conservation Programs" },
]

const educationPrograms = [
  {
    id: 1,
    title: "Waste Management Training",
    description: "4-week training course",
    content: (
      <>
        <p>In this training course, students will learn:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Types and classification of waste</li>
          <li>Waste separation and collection</li>
          <li>Recycling and upcycling</li>
          <li>Environmental impact of waste management</li>
        </ul>
        <div className="flex items-center gap-2 mt-2">
          <Clock className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm">Every Saturday, 10 AM to 1 PM</span>
        </div>
      </>
    ),
    buttonText: "Register",
  },
  {
    id: 2,
    title: "Sea Conservation Training",
    description: "6-week training course",
    content: (
      <>
        <p>In this training course, students will learn:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Marine environment and biodiversity</li>
          <li>Sea pollution causes and effects</li>
          <li>Sea conservation strategies</li>
          <li>Community role in sea conservation</li>
        </ul>
        <div className="flex items-center gap-2 mt-2">
          <Clock className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm">Every Thursday, 3 PM to 6 PM</span>
        </div>
      </>
    ),
    buttonText: "Register",
  },
]

const cleanupPrograms = [
  {
    id: 3,
    title: "Beach Cleaning Campaign",
    description: "Every Saturday from 8 AM to 12 PM",
    content: (
      <>
        <div className="flex items-center gap-2">
          <MapPin className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm">Laboni Sea Beach, Cox's Bazar</span>
        </div>
        <p>
          Every Saturday, we conduct a cleaning campaign at Laboni Sea Beach. Participants are provided with gloves,
          waste collection bags, and other necessary equipment.
        </p>
      </>
    ),
    buttonText: "Participate",
  },
  {
    id: 4,
    title: "Plastic Recycling Workshop",
    description: "Every Wednesday from 4 PM to 6 PM",
    content: (
      <>
        <div className="flex items-center gap-2">
          <MapPin className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm">Cox's Bazar City College, Cox's Bazar</span>
        </div>
        <p>
          In this workshop, students learn to create various types of artwork from collected plastic waste. This helps
          raise awareness about plastic waste recycling.
        </p>
      </>
    ),
    buttonText: "Participate",
  },
  {
    id: 5,
    title: "Marine Biodiversity Observation",
    description: "Last Friday of every month",
    content: (
      <>
        <div className="flex items-center gap-2">
          <MapPin className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm">Inani Sea Beach, Cox's Bazar</span>
        </div>
        <p>
          In this program, students observe marine biodiversity and learn about the impact of marine pollution. Experts
          educate students about marine biodiversity.
        </p>
      </>
    ),
    buttonText: "Participate",
  },
]

const researchPrograms = [
  {
    id: 6,
    title: "Environmental Impact",
    content: (
      <>
        <p>As a result of our activities:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Plastic waste on the beach has decreased by 40%</li>
          <li>Marine biodiversity has improved</li>
          <li>Beach cleanliness has increased</li>
          <li>Tourist experience has improved</li>
        </ul>
      </>
    ),
  },
  {
    id: 7,
    title: "Social Impact",
    content: (
      <>
        <p>As a result of our activities:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>1000+ students have become environmentally conscious</li>
          <li>Awareness has increased among the local community</li>
          <li>Community participation in environmental protection has increased</li>
          <li>Students' teamwork skills have increased</li>
        </ul>
      </>
    ),
  },
  {
    id: 8,
    title: "Economic Impact",
    content: (
      <>
        <p>As a result of our activities:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>The tourism industry has been positively impacted</li>
          <li>Production of recyclable products has increased</li>
          <li>Local economy has been positively impacted</li>
          <li>Sustainable tourism has increased</li>
        </ul>
      </>
    ),
  },
]

function ProgramCard({ program }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{program.title}</CardTitle>
        {program.description && <CardDescription>{program.description}</CardDescription>}
      </CardHeader>
      <CardContent className="space-y-4">{program.content}</CardContent>
      {program.buttonText && (
        <CardFooter>
          <Button className="w-full">{program.buttonText}</Button>
        </CardFooter>
      )}
    </Card>
  )
}

export default function SeaConservationClientPage() {
  const [activeTab, setActiveTab] = useState(tabs[0].value)

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center mb-8">Sea Conservation Training Programs</h1>

      {/* Tab Navigation Section */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-12">
        <h2 className="text-xl font-semibold mb-4 text-center">Browse Programs by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
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
        {activeTab === "education" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {educationPrograms.map((program) => (
              <ProgramCard key={program.id} program={program} />
            ))}
          </div>
        )}
        {activeTab === "cleanup" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cleanupPrograms.map((program) => (
              <ProgramCard key={program.id} program={program} />
            ))}
          </div>
        )}
        {activeTab === "research" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {researchPrograms.map((program) => (
              <ProgramCard key={program.id} program={program} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

