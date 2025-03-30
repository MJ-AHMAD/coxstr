"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, MapPin } from "lucide-react"
import { useState } from "react"

// Define program card component
const ProgramCard = ({ program }) => (
  <Card>
    <CardHeader>
      <CardTitle>{program.title}</CardTitle>
      <CardDescription>{program.description}</CardDescription>
    </CardHeader>
    <CardContent className="space-y-4">
      <div className="flex items-center gap-2">
        <MapPin className="h-4 w-4 text-muted-foreground" />
        <span className="text-sm">{program.location}</span>
      </div>
      <p>{program.details}</p>
      <div className="flex items-center gap-2 mt-2">
        <Clock className="h-4 w-4 text-muted-foreground" />
        <span className="text-sm">{program.duration}</span>
      </div>
    </CardContent>
    <CardFooter>
      <Button className="w-full" asChild>
        <a href={program.link} target="_blank" rel="noopener noreferrer">
          View Details
        </a>
      </Button>
    </CardFooter>
  </Card>
)

export default function AlQuranJourneyClientPage() {
  const [activeTab, setActiveTab] = useState("tafsir")

  const tabs = [
    { value: "tafsir", label: "Tafsir Programs" },
    { value: "tajweed", label: "Tajweed Programs" },
    { value: "hifz", label: "Hifz Programs" },
  ]

  const tafsirPrograms = [
    {
      id: "tafsir1",
      title: "Quranic Exegesis (Tafsir)",
      description: "Advanced interpretation studies",
      location: "Cox's Bazar Islamic Center",
      details:
        "This course explores classical and contemporary approaches to Quranic interpretation, examining major tafsir works and methodologies for understanding divine revelation in context.",
      duration: "6-month program, twice weekly",
      link: "https://tac-plum.vercel.app/al-quran-journey",
    },
    {
      id: "tafsir2",
      title: "In-Depth Tafsir Analysis",
      description: "Comprehensive study of selected Surahs",
      location: "Online Platform",
      details:
        "A detailed analysis of specific Surahs, focusing on linguistic nuances, historical context, and practical applications.",
      duration: "8-week course, weekends",
      link: "https://tac-plum.vercel.app/al-quran-journey",
    },
    {
      id: "tafsir3",
      title: "Tafsir for Contemporary Issues",
      description: "Applying Quranic principles to modern challenges",
      location: "Local Mosque",
      details:
        "This course addresses contemporary issues through the lens of Quranic teachings, providing guidance and solutions based on Tafsir.",
      duration: "Monthly seminars",
      link: "https://tac-plum.vercel.app/al-quran-journey",
    },
  ]

  const tajweedPrograms = [
    {
      id: "tajweed1",
      title: "Tajweed Fundamentals",
      description: "Mastering the basics of Quranic recitation",
      location: "Cox's Bazar Islamic Center",
      details:
        "Learn the essential rules of Tajweed to recite the Quran with accuracy and beauty. Suitable for beginners.",
      duration: "3-month program, weekly sessions",
      link: "https://tac-plum.vercel.app/al-quran-journey",
    },
    {
      id: "tajweed2",
      title: "Advanced Tajweed Techniques",
      description: "Enhancing recitation with advanced rules",
      location: "Online Platform",
      details: "This course covers advanced Tajweed rules and techniques to improve the quality of Quranic recitation.",
      duration: "6-week course, evenings",
      link: "https://tac-plum.vercel.app/al-quran-journey",
    },
    {
      id: "tajweed3",
      title: "Tajweed Certification Program",
      description: "Achieve certification in Quranic recitation",
      location: "Local Mosque",
      details: "A comprehensive program leading to Tajweed certification, recognized by leading Islamic institutions.",
      duration: "12-month program, weekends",
      link: "https://tac-plum.vercel.app/al-quran-journey",
    },
  ]

  const hifzPrograms = [
    {
      id: "hifz1",
      title: "Hifz Program for Beginners",
      description: "Memorizing the Quran from scratch",
      location: "Cox's Bazar Islamic Center",
      details:
        "A structured program for memorizing the Quran, with personalized guidance and support from experienced teachers.",
      duration: "Flexible, self-paced",
      link: "https://tac-plum.vercel.app/al-quran-journey",
    },
    {
      id: "hifz2",
      title: "Hifz Revision and Improvement",
      description: "Perfecting your Quran memorization",
      location: "Online Platform",
      details: "This course focuses on revising and improving existing Hifz, ensuring accuracy and fluency.",
      duration: "4-week course, daily sessions",
      link: "https://tac-plum.vercel.app/al-quran-journey",
    },
    {
      id: "hifz3",
      title: "Hifz with Meaning and Context",
      description: "Understanding the Quran while memorizing",
      location: "Local Mosque",
      details: "A unique program that combines Hifz with understanding the meaning and context of the verses.",
      duration: "Ongoing, weekly classes",
      link: "https://tac-plum.vercel.app/al-quran-journey",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center mb-8">Al-Quran Journey: Depths of Divine Knowledge</h1>

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
        {activeTab === "tafsir" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tafsirPrograms.map((program) => (
              <ProgramCard key={program.id} program={program} />
            ))}
          </div>
        )}
        {activeTab === "tajweed" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tajweedPrograms.map((program) => (
              <ProgramCard key={program.id} program={program} />
            ))}
          </div>
        )}
        {activeTab === "hifz" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hifzPrograms.map((program) => (
              <ProgramCard key={program.id} program={program} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

