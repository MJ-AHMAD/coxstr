"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, MapPin } from "lucide-react"
import { useState } from "react"

const sportsActivities = [
  {
    id: 1,
    title: "Beach Volleyball Tournament",
    description: "Every year in January",
    locationIcon: MapPin,
    location: "Laboni Beach, Cox's Bazar",
    details:
      "Teams from various educational institutions participate in this volleyball tournament held on the beach. It increases students' interest in sports and builds team spirit.",
    buttonText: "View Details",
  },
  {
    id: 2,
    title: "Football League",
    description: "Every year in November-December",
    locationIcon: MapPin,
    location: "Cox's Bazar Stadium",
    details:
      "Various school and college teams from Cox's Bazar participate in this football league. It increases students' interest in sports and builds team spirit.",
    buttonText: "View Details",
  },
  {
    id: 3,
    title: "Swimming Competition",
    description: "Every year in April",
    locationIcon: MapPin,
    location: "Cox's Bazar Swimming Pool",
    details:
      "In this competition, students participate in swimming competitions in various categories. It helps them increase their swimming skills and encourages a healthy lifestyle.",
    buttonText: "View Details",
  },
]

const artsActivities = [
  {
    id: 4,
    title: "Annual Cultural Festival",
    description: "Every year in December",
    locationIcon: MapPin,
    location: "Cox's Bazar Central Auditorium",
    details:
      "At the Annual Cultural Festival, students perform songs, dances, dramas, recitations, and other cultural performances. It is a great opportunity for them to develop their creativity and talent.",
    buttonText: "View Details",
  },
  {
    id: 5,
    title: "Quarterly Music Evening",
    description: "Once every three months",
    locationIcon: MapPin,
    location: "Laboni Beach Point",
    details:
      "At this music evening held on the beach, students perform various types of songs. This event at sunset on the beach provides a unique experience.",
    buttonText: "View Details",
  },
  {
    id: 6,
    title: "Drama Festival",
    description: "Every year in March",
    locationIcon: MapPin,
    location: "Cox's Bazar City College Auditorium",
    details:
      "In this festival, students perform various types of dramas. It helps them increase their acting skills, confidence, and experience in teamwork.",
    buttonText: "View Details",
  },
]

const eventsActivities = [
  {
    id: 7,
    title: "Online Quiz Competition",
    description: "Once a month",
    locationIcon: Clock,
    location: "First Saturday of every month, 10 AM",
    details:
      "In this online quiz competition, students can test their knowledge on various subjects. It helps them increase their knowledge and build a competitive spirit.",
    buttonText: "Participate",
  },
  {
    id: 8,
    title: "Creative Writing Competition",
    description: "Once every three months",
    locationIcon: Clock,
    location: "Online submission deadline: 7 days",
    details:
      "In this competition, students submit stories, poems, essays, etc. It helps them increase their creativity and writing skills.",
    buttonText: "Participate",
  },
  {
    id: 9,
    title: "Photography Competition",
    description: "Every year in October",
    locationIcon: Clock,
    location: "Online submission deadline: 15 days",
    details:
      "In this competition, students submit photos of Cox's Bazar's natural beauty, lifestyle, culture, etc. It helps them increase their perspective and creativity.",
    buttonText: "Participate",
  },
]

const tabs = [
  { value: "sports", label: "Sports Programs" },
  { value: "arts", label: "Cultural Activities" },
  { value: "events", label: "Online Competitions" },
]

function ActivityCard({ activity }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{activity.title}</CardTitle>
        <CardDescription>{activity.description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center gap-2">
          <activity.locationIcon className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm">{activity.location}</span>
        </div>
        <p>{activity.details}</p>
      </CardContent>
      <CardFooter>
        <Button className="w-full">{activity.buttonText}</Button>
      </CardFooter>
    </Card>
  )
}

export default function StudentEntertainmentClientPage() {
  const [activeTab, setActiveTab] = useState("sports")

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center mb-8">Student Entertainment Programs</h1>

      {/* Tab Navigation Section */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-12">
        <h2 className="text-xl font-semibold mb-4 text-center">Browse Activities by Category</h2>
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
        {activeTab === "sports" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sportsActivities.map((activity) => (
              <ActivityCard key={activity.id} activity={activity} />
            ))}
          </div>
        )}
        {activeTab === "arts" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {artsActivities.map((activity) => (
              <ActivityCard key={activity.id} activity={activity} />
            ))}
          </div>
        )}
        {activeTab === "events" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {eventsActivities.map((activity) => (
              <ActivityCard key={activity.id} activity={activity} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

