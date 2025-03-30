"use client"

import { Button } from "@/components/ui/button"
import { useState } from "react"

const educationPrograms = [
  {
    id: 1,
    title: "আল-কুরআন জার্নি: ডিভাইন জ্ঞানের গভীরতা",
    description: "উন্নত কুরআন শিক্ষা",
    details:
      "কুরআনের জ্ঞানের গভীরে এক গভীর যাত্রা শুরু করুন, যেখানে প্রাচীন ঐশ্বরিক প্রত্যাদেশ আধুনিক বৈজ্ঞানিক বোঝাপড়ার সাথে মিলিত হয় এবং শাশ্বত নির্দেশনার মাধ্যমে জীবন পরিবর্তন করে।",
    features: [
      "ঐশ্বরিক প্রত্যাদেশ বিশ্লেষণ",
      "কুরআনে বৈজ্ঞানিক অলৌকিক ঘটনা",
      "আধ্যাত্মিক বিকাশ",
      "সমসাময়িক প্রয়োগ",
      "শাস্ত্রীয় গবেষণা পদ্ধতি",
    ],
    link: "https://tac-plum.vercel.app/al-quran-journey",
    buttonText: "বিস্তারিত দেখুন",
  },
  {
    id: 2,
    title: "কুরআন শিক্ষা",
    description: "বিভিন্ন স্তরের কোর্স",
    details: "আমরা নিম্নলিখিত কুরআন শিক্ষা কোর্সগুলি অফার করি:",
    features: ["কুরআন তেলাওয়াত", "তাজবীদ", "হিফজ", "তাফসীর", "কুরআনিক আরবি"],
    buttonText: "এখনই যোগ দিন",
  },
  {
    id: 3,
    title: "ইসলামিক স্টাডিজ",
    description: "বিভিন্ন বিষয়ে কোর্স",
    details: "আমরা নিম্নলিখিত ইসলামিক স্টাডিজ কোর্সগুলি অফার করি:",
    features: ["ফিকহ", "হাদীস", "আকীদাহ", "সিরাত", "ইসলামিক ইতিহাস"],
    buttonText: "এখনই যোগ দিন",
  },
]

const businessPrograms = [
  {
    id: 4,
    title: "নারী-বান্ধব কর্মক্ষেত্র",
    description: "বিভিন্ন পদ",
    details: "কক্সবাজারে বিভিন্ন সংস্থায় নারী-বান্ধব পরিবেশে কাজ করার সুযোগ রয়েছে:",
    features: ["নারী-বান্ধব অফিস", "পৃথক কর্মক্ষেত্র", "নামাজের সুবিধা", "হিজাব পরার সুযোগ", "ইসলামিক পোশাক কোড"],
    additionalText: "এই চাকরিগুলো ইসলামিক মূল্যবোধ বজায় রেখে কাজ করার সুযোগ দেয়।",
    buttonText: "এখনই আবেদন করুন",
  },
  {
    id: 5,
    title: "ইসলামিক পণ্য উৎপাদন ও বিক্রয়",
    description: "একজন স্বাধীন উদ্যোক্তা হিসেবে কাজ করুন",
    details: "প্রশিক্ষিত নারীরা তাদের নিজস্ব ইসলামিক পণ্য তৈরি ও বিক্রি করতে পারে। আমরা নিম্নলিখিত সহায়তা প্রদান করি:",
    features: ["কাঁচামাল সরবরাহ", "উৎপাদন সাইট", "বিক্রয় কেন্দ্র", "অনলাইন মার্কেটিং", "সুদ-মুক্ত অর্থায়ন"],
    buttonText: "যোগাযোগ করুন",
  },
  {
    id: 6,
    title: "ইসলামিক শিক্ষা প্রতিষ্ঠান",
    description: "বিভিন্ন পদ",
    details: "কক্সবাজারে বিভিন্ন ইসলামিক শিক্ষা প্রতিষ্ঠানে নিম্নলিখিত পদে কাজ করার সুযোগ রয়েছে:",
    features: ["শিক্ষক", "কুরআন শিক্ষক", "ইসলামিক স্টাডিজ শিক্ষক", "প্রশাসনিক কর্মকর্তা", "লাইব্রেরিয়ান"],
    additionalText: "এই চাকরিগুলো ইসলামিক মূল্যবোধ বজায় রেখে কাজ করার সুযোগ দেয়।",
    buttonText: "এখনই আবেদন করুন",
  },
]

const craftsPrograms = [
  {
    id: 7,
    title: "ইসলামিক হস্তশিল্প প্রশিক্ষণ",
    description: "৩ মাসের প্রশিক্ষণ কোর্স",
    details:
      "এই প্রশিক্ষণে অংশগ্রহণকারীরা ইসলামিক ক্যালিগ্রাফি, আরবি ডিজাইন, হিজাব ডিজাইন, ইসলামিক পোশাক ডিজাইন ইত্যাদি শিখবেন। এই দক্ষতা তাদের স্বাবলম্বী হতে সাহায্য করবে।",
    features: ["কক্সবাজার ইসলামিক মহিলা উন্নয়ন কেন্দ্র", "সপ্তাহে ৩ দিন, সকাল ১০টা থেকে দুপুর ১টা"],
    buttonText: "এখনই আবেদন করুন",
  },
  {
    id: 8,
    title: "হালাল খাদ্য প্রক্রিয়াকরণ",
    description: "২ মাসের প্রশিক্ষণ কোর্স",
    details:
      "এই প্রশিক্ষণে অংশগ্রহণকারীরা হালাল খাদ্য প্রক্রিয়াকরণ, হালাল সার্টিফিকেশন, হালাল খাদ্য ব্যবসা ইত্যাদি শিখবেন। এই দক্ষতা তাদের হালাল খাদ্য ব্যবসা শুরু করতে সাহায্য করবে।",
    features: ["কক্সবাজার ইসলামিক মহিলা উন্নয়ন কেন্দ্র", "সপ্তাহে ৩ দিন, বিকাল ৩টা থেকে সন্ধ্যা ৬টা"],
    buttonText: "এখনই আবেদন করুন",
  },
  {
    id: 9,
    title: "ইসলামিক ফ্যাশন ডিজাইন",
    description: "৬ মাসের প্রশিক্ষণ কোর্স",
    details:
      "এই প্রশিক্ষণে অংশগ্রহণকারীরা আবায়া, হিজাব, জিলবাব, শালীন ফ্যাশন ডিজাইন ইত্যাদি শিখবেন। এই দক্ষতা তাদের ইসলামিক ফ্যাশন ব্যবসা শুরু করতে সাহায্য করবে।",
    features: ["কক্সবাজার ইসলামিক মহিলা উন্নয়ন কেন্দ্র", "সপ্তাহে ৫ দিন, সকাল ১০টা থেকে দুপুর ১টা"],
    buttonText: "এখনই আবেদন করুন",
  },
]

function ProgramCard({ program }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="px-4 py-5 sm:p-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">{program.title}</h3>
        <p className="mt-2 max-w-2xl text-sm text-gray-500">{program.description}</p>
        <div className="mt-5">
          <p className="text-sm text-gray-700">{program.details}</p>
          {program.features && (
            <ul className="list-disc pl-5 mt-3">
              {program.features.map((feature, index) => (
                <li key={index} className="text-sm text-gray-700">
                  {feature}
                </li>
              ))}
            </ul>
          )}
          {program.additionalText && <p className="mt-2 text-sm text-gray-700">{program.additionalText}</p>}
        </div>
      </div>
      <div className="bg-gray-50 px-4 py-4 sm:px-6">
        <div className="text-right">
          <Button className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            {program.buttonText}
          </Button>
        </div>
      </div>
    </div>
  )
}

export default function IslamicWomenEmpowermentClientPage() {
  const [activeTab, setActiveTab] = useState("education")

  const tabs = [
    { label: "শিক্ষা", value: "education" },
    { label: "ব্যবসা", value: "business" },
    { label: "হস্তশিল্প", value: "crafts" },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center mb-8">ইসলামিক নারী ক্ষমতায়ন প্রোগ্রাম</h1>

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
        {activeTab === "education" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {educationPrograms.map((program) => (
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
        {activeTab === "crafts" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {craftsPrograms.map((program) => (
              <ProgramCard key={program.id} program={program} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

