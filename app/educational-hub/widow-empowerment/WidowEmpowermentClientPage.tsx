"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, MapPin } from "lucide-react"
import { useState } from "react"

// Define the types for the program cards
interface Program {
  id: number
  title: string
  description: string
  location: string
  time: string
  buttonText: string
}

// ProgramCard component
const ProgramCard = ({ program }: { program: Program }) => (
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
      <p>{program.description}</p>
      <div className="flex items-center gap-2 mt-2">
        <Clock className="h-4 w-4 text-muted-foreground" />
        <span className="text-sm">{program.time}</span>
      </div>
    </CardContent>
    <CardFooter>
      <Button className="w-full">{program.buttonText}</Button>
    </CardFooter>
  </Card>
)

export default function WidowEmpowermentClientPage() {
  const [activeTab, setActiveTab] = useState("skills")

  const tabs = [
    { value: "skills", label: "দক্ষতা উন্নয়ন প্রোগ্রাম" },
    { value: "business", label: "ব্যবসা সহায়তা প্রোগ্রাম" },
    { value: "support", label: "সহায়তা প্রোগ্রাম" },
  ]

  const skillsPrograms = [
    {
      id: 1,
      title: "হস্তশিল্প প্রশিক্ষণ",
      description: "এই প্রশিক্ষণ কোর্সে মহিলারা বিভিন্ন হস্তশিল্প তৈরি করতে শিখবেন।",
      location: "কক্সবাজার মহিলা উন্নয়ন কেন্দ্র",
      time: "সপ্তাহে ৩ দিন, সকাল ১০টা - দুপুর ১টা",
      buttonText: "এখনই আবেদন করুন",
    },
    {
      id: 2,
      title: "খাদ্য প্রক্রিয়াকরণ",
      description: "এই প্রশিক্ষণ কোর্সে মহিলারা বিভিন্ন খাদ্য প্রক্রিয়াকরণ করতে শিখবেন।",
      location: "কক্সবাজার মহিলা উন্নয়ন কেন্দ্র",
      time: "সপ্তাহে ৩ দিন, বিকাল ৩টা - সন্ধ্যা ৬টা",
      buttonText: "এখনই আবেদন করুন",
    },
    {
      id: 3,
      title: "সেলাই ও ফ্যাশন ডিজাইন",
      description: "এই প্রশিক্ষণ কোর্সে মহিলারা সেলাই, কাটিং, ফ্যাশন ডিজাইন শিখবেন।",
      location: "কক্সবাজার মহিলা উন্নয়ন কেন্দ্র",
      time: "সপ্তাহে ৫ দিন, সকাল ১০টা - দুপুর ১টা",
      buttonText: "এখনই আবেদন করুন",
    },
  ]

  const businessPrograms = [
    {
      id: 4,
      title: "হোটেল ও রেস্টুরেন্ট সেক্টর",
      description: "কক্সবাজারে বিভিন্ন হোটেল ও রেস্টুরেন্টে চাকরির সুযোগ রয়েছে।",
      location: "কক্সবাজার",
      time: "পূর্ণ দিবস",
      buttonText: "এখনই আবেদন করুন",
    },
    {
      id: 5,
      title: "হস্তশিল্প উৎপাদন ও বিক্রয়",
      description: "প্রশিক্ষিত মহিলারা তাদের হস্তশিল্প পণ্য উৎপাদন ও বিক্রয় করতে পারবে।",
      location: "কক্সবাজার",
      time: "পূর্ণ দিবস",
      buttonText: "যোগাযোগ করুন",
    },
    {
      id: 6,
      title: "পর্যটন খাত",
      description: "কক্সবাজারে পর্যটন খাতে চাকরির সুযোগ রয়েছে।",
      location: "কক্সবাজার",
      time: "পূর্ণ দিবস",
      buttonText: "এখনই আবেদন করুন",
    },
  ]

  const supportPrograms = [
    {
      id: 7,
      title: "আইনগত সহায়তা",
      description: "আমরা বিধবাদের নিম্নলিখিত আইনি সহায়তা প্রদান করি:",
      location: "কক্সবাজার",
      time: "সপ্তাহে ৫ দিন",
      buttonText: "যোগাযোগ করুন",
    },
    {
      id: 8,
      title: "মানসিক সহায়তা",
      description: "আমরা বিধবাদের নিম্নলিখিত মানসিক সহায়তা প্রদান করি:",
      location: "কক্সবাজার",
      time: "সপ্তাহে ৫ দিন",
      buttonText: "অ্যাপয়েন্টমেন্ট করুন",
    },
    {
      id: 9,
      title: "আর্থিক সহায়তা",
      description: "আমরা বিধবাদের নিম্নলিখিত আর্থিক সহায়তা প্রদান করি:",
      location: "কক্সবাজার",
      time: "সপ্তাহে ৫ দিন",
      buttonText: "এখনই আবেদন করুন",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center mb-8">বিধবা ও বিবাহবিচ্ছিন্ন নারী ক্ষমতায়ন প্রোগ্রাম</h1>

      {/* Tab Navigation Section */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-12">
        <h2 className="text-xl font-semibold mb-4 text-center">প্রোগ্রাম ক্যাটাগরি</h2>
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
        {activeTab === "skills" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillsPrograms.map((program) => (
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
        {activeTab === "support" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {supportPrograms.map((program) => (
              <ProgramCard key={program.id} program={program} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

