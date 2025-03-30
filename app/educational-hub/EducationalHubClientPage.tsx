"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import {
  Book,
  Users,
  GraduationCap,
  Globe,
  Heart,
  Lightbulb,
  Laptop,
  UserPlus,
  ChurchIcon as Mosque,
  Briefcase,
  Clock,
  Trophy,
  Music,
  Recycle,
  ShieldCheck,
  Building,
  Sparkles,
  Calendar,
  ArrowRight,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MainHeader } from "@/components/main-header"
import { HeroSection } from "@/components/hero-section"

export default function EducationalHubClientPage() {
  const [activeTab, setActiveTab] = useState("all")
  const [stats, setStats] = useState({ students: 0, programs: 0, centers: 0, teachers: 0 })

  useEffect(() => {
    const interval = setInterval(() => {
      setStats((prev) => ({
        students: Math.min(prev.students + 123, 25000),
        programs: Math.min(prev.programs + 2, 50),
        centers: Math.min(prev.centers + 1, 35),
        teachers: Math.min(prev.teachers + 5, 450),
      }))
    }, 100)

    return () => clearInterval(interval)
  }, [])

  const programs = [
    {
      id: 1,
      title: "Primary Education Program",
      description: "Ensuring quality primary education for all children in Cox's Bazar district",
      icon: <Book className="h-6 w-6" />,
      category: "children",
      link: "/educational-hub/children/primary",
    },
    {
      id: 2,
      title: "Women's Education Development",
      description: "Empowering women through education and skill development",
      icon: <Users className="h-6 w-6" />,
      category: "women",
      link: "/educational-hub/women-empowerment",
    },
    {
      id: 3,
      title: "Digital Learning Centers",
      description: "Improving education quality through modern technology",
      icon: <Laptop className="h-6 w-6" />,
      category: "digital",
      link: "/educational-hub/digital-learning-centers",
    },
    {
      id: 4,
      title: "Rohingya Education Support",
      description: "Special educational programs for Rohingya refugee children",
      icon: <Heart className="h-6 w-6" />,
      category: "rohingya",
      link: "/educational-hub/rohingya-education",
    },
    {
      id: 5,
      title: "Islamic Education Program",
      description: "Integrated program of Islamic values and education",
      icon: <Mosque className="h-6 w-6" />,
      category: "islamic",
      link: "/educational-hub/islamic-education",
    },
    {
      id: 6,
      title: "Tourism & Hospitality Training",
      description: "Special training to create skilled workforce in tourism sector",
      icon: <Globe className="h-6 w-6" />,
      category: "tourism",
      link: "/educational-hub/tourism-hospitality",
    },
    {
      id: 7,
      title: "Vocational Training",
      description: "Providing youth with necessary skills for employment",
      icon: <GraduationCap className="h-6 w-6" />,
      category: "vocational",
      link: "/educational-hub/vocational-training",
    },
    {
      id: 8,
      title: "Teacher Training Program",
      description: "Improving education quality through teacher development",
      icon: <UserPlus className="h-6 w-6" />,
      category: "teachers",
      link: "/educational-hub/teacher-training",
    },
    {
      id: 9,
      title: "Creative Education Activities",
      description: "Special educational activities for children's creativity development",
      icon: <Lightbulb className="h-6 w-6" />,
      category: "children",
      link: "/educational-hub/creative-learning",
    },
    {
      id: 10,
      title: "Holiday Employment Program",
      description: "Opportunity for students to earn through work on holidays",
      icon: <Clock className="h-6 w-6" />,
      category: "employment",
      link: "/educational-hub/student-employment",
    },
    {
      id: 11,
      title: "Widow & Divorced Women Empowerment",
      description: "Safe employment for widowed and divorced women",
      icon: <ShieldCheck className="h-6 w-6" />,
      category: "women",
      link: "/educational-hub/widow-empowerment",
    },
    {
      id: 12,
      title: "Islamic Women Empowerment Program",
      description: "Employment for women while preserving Islamic values",
      icon: <Sparkles className="h-6 w-6" />,
      category: "women",
      link: "/educational-hub/islamic-women-empowerment",
    },
    {
      id: 13,
      title: "Online Competition Platform",
      description: "Organizing online competitions among district students",
      icon: <Trophy className="h-6 w-6" />,
      category: "digital",
      link: "/educational-hub/online-competitions",
    },
    {
      id: 14,
      title: "Student Entertainment Activities",
      description: "Recreational activities for students' mental health development",
      icon: <Music className="h-6 w-6" />,
      category: "entertainment",
      link: "/educational-hub/student-entertainment",
    },
    {
      id: 15,
      title: "Ocean Conservation Training",
      description: "Training to keep the sea free from plastic and waste",
      icon: <Recycle className="h-6 w-6" />,
      category: "environment",
      link: "/educational-hub/sea-conservation",
    },
    {
      id: 16,
      title: "Al-Quran Journey",
      description: "Depths of Divine Knowledge",
      icon: <Book className="h-6 w-6" />,
      category: "islamic",
      link: "/educational-hub/al-quran-journey",
    },
  ]

  const filteredPrograms = activeTab === "all" ? programs : programs.filter((program) => program.category === activeTab)

  return (
    <>
      <MainHeader />
      <HeroSection />
      <div className="container mx-auto py-8">
        {/* Hero Section - Improved for mobile */}
        <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-12 md:py-20">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-blue-900/70"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <Badge className="mb-4 bg-blue-600 hover:bg-blue-700 text-white">TRUSTED ALLY EDUCATION CENTER</Badge>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">
                Educational Hub
                <br />
                <span className="text-yellow-300">Empowering Communities Through Knowledge</span>
              </h1>
              <p className="text-base md:text-xl mb-6 md:mb-8 max-w-3xl mx-auto">
                TRUSTED ALLY's commitment to ensuring enriched and advanced education for every child, student, and
                woman in Cox's Bazar district
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black w-full sm:w-auto">
                  View Our Programs
                </Button>
                <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black border-0 w-full sm:w-auto">
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section - Improved for mobile */}
        <section className="py-8 md:py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 text-center">
              <div className="bg-blue-50 rounded-lg p-3 md:p-6">
                <h3 className="text-2xl md:text-4xl font-bold text-blue-700 mb-1 md:mb-2">
                  {stats.students.toLocaleString()}+
                </h3>
                <p className="text-sm md:text-base text-gray-600">Students</p>
              </div>

              <div className="bg-green-50 rounded-lg p-3 md:p-6">
                <h3 className="text-2xl md:text-4xl font-bold text-green-700 mb-1 md:mb-2">{stats.programs}+</h3>
                <p className="text-sm md:text-base text-gray-600">Education Programs</p>
              </div>

              <div className="bg-amber-50 rounded-lg p-3 md:p-6">
                <h3 className="text-2xl md:text-4xl font-bold text-amber-700 mb-1 md:mb-2">{stats.centers}</h3>
                <p className="text-sm md:text-base text-gray-600">Education Centers</p>
              </div>

              <div className="bg-purple-50 rounded-lg p-3 md:p-6">
                <h3 className="text-2xl md:text-4xl font-bold text-purple-700 mb-1 md:mb-2">{stats.teachers}+</h3>
                <p className="text-sm md:text-base text-gray-600">Teachers & Mentors</p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content with separated tabs and content */}
        <div className="bg-gray-50 py-8 md:py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">Our Educational Programs</h2>

            {/* Tab Navigation Section */}
            <section className="mb-12 bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-center">Browse Programs by Category</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-9 gap-2 w-full max-w-6xl mx-auto">
                <button
                  onClick={() => setActiveTab("all")}
                  className={`px-4 py-2 rounded-md transition-all h-full flex items-center justify-center text-center ${
                    activeTab === "all" ? "bg-primary text-white" : "bg-gray-100 hover:bg-gray-200"
                  }`}
                >
                  <span className="text-sm">All Programs</span>
                </button>
                <button
                  onClick={() => setActiveTab("children")}
                  className={`px-4 py-2 rounded-md transition-all h-full flex items-center justify-center text-center ${
                    activeTab === "children" ? "bg-primary text-white" : "bg-gray-100 hover:bg-gray-200"
                  }`}
                >
                  <span className="text-sm">Children's Education</span>
                </button>
                <button
                  onClick={() => setActiveTab("women")}
                  className={`px-4 py-2 rounded-md transition-all h-full flex items-center justify-center text-center ${
                    activeTab === "women" ? "bg-primary text-white" : "bg-gray-100 hover:bg-gray-200"
                  }`}
                >
                  <span className="text-sm">Women's Education</span>
                </button>
                <button
                  onClick={() => setActiveTab("digital")}
                  className={`px-4 py-2 rounded-md transition-all h-full flex items-center justify-center text-center ${
                    activeTab === "digital" ? "bg-primary text-white" : "bg-gray-100 hover:bg-gray-200"
                  }`}
                >
                  <span className="text-sm">Digital Education</span>
                </button>
                <button
                  onClick={() => setActiveTab("rohingya")}
                  className={`px-4 py-2 rounded-md transition-all h-full flex items-center justify-center text-center ${
                    activeTab === "rohingya" ? "bg-primary text-white" : "bg-gray-100 hover:bg-gray-200"
                  }`}
                >
                  <span className="text-sm">Rohingya Education</span>
                </button>
                <button
                  onClick={() => setActiveTab("islamic")}
                  className={`px-4 py-2 rounded-md transition-all h-full flex items-center justify-center text-center ${
                    activeTab === "islamic" ? "bg-primary text-white" : "bg-gray-100 hover:bg-gray-200"
                  }`}
                >
                  <span className="text-sm">Islamic Education</span>
                </button>
                <button
                  onClick={() => setActiveTab("tourism")}
                  className={`px-4 py-2 rounded-md transition-all h-full flex items-center justify-center text-center ${
                    activeTab === "tourism" ? "bg-primary text-white" : "bg-gray-100 hover:bg-gray-200"
                  }`}
                >
                  <span className="text-sm">Tourism Education</span>
                </button>
                <button
                  onClick={() => setActiveTab("employment")}
                  className={`px-4 py-2 rounded-md transition-all h-full flex items-center justify-center text-center ${
                    activeTab === "employment" ? "bg-primary text-white" : "bg-gray-100 hover:bg-gray-200"
                  }`}
                >
                  <span className="text-sm">Employment</span>
                </button>
                <button
                  onClick={() => setActiveTab("environment")}
                  className={`px-4 py-2 rounded-md transition-all h-full flex items-center justify-center text-center ${
                    activeTab === "environment" ? "bg-primary text-white" : "bg-gray-100 hover:bg-gray-200"
                  }`}
                >
                  <span className="text-sm">Environment</span>
                </button>
              </div>
            </section>

            {/* Tab Content Section */}
            <section className="mt-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filteredPrograms.map((program) => (
                  <div key={program.id}>
                    <Card className="h-full flex flex-col overflow-hidden border-2 hover:border-primary transition-all duration-300">
                      <CardHeader className="pb-2">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2">
                          {program.icon}
                        </div>
                        <CardTitle className="text-lg md:text-xl">{program.title}</CardTitle>
                        <CardDescription className="text-sm md:text-base">{program.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="flex-grow">
                        <ul className="list-disc list-inside text-muted-foreground space-y-1 text-sm md:text-base">
                          <li>Suitable for students of all ages</li>
                          <li>Teaching by experienced educators</li>
                          <li>Using modern educational materials</li>
                        </ul>
                      </CardContent>
                      <CardFooter>
                        <Link href={program.link} className="w-full">
                          <Button className="w-full">View Details</Button>
                        </Link>
                      </CardFooter>
                    </Card>
                  </div>
                ))}
              </div>
            </section>

            {/* Featured Programs Section - Mobile Friendly */}
            <div className="space-y-6 md:space-y-10 mt-16">
              {/* Holiday Employment Program */}
              <div className="bg-blue-50 rounded-xl p-4 md:p-8 border border-blue-100">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
                  <div>
                    <Badge className="mb-3 md:mb-4 bg-blue-600 hover:bg-blue-700 text-white">NEW PROGRAM</Badge>
                    <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Holiday Employment Program</h2>
                    <p className="mb-3 md:mb-4 text-gray-700 text-sm md:text-base">
                      Creating earning opportunities for students during their holidays - from Thursday 2 PM to Friday
                      for high school students and from Thursday 2 PM to Saturday for college students.
                    </p>
                    <ul className="space-y-2 mb-4 md:mb-6 text-sm md:text-base">
                      <li className="flex items-start">
                        <Briefcase className="h-5 w-5 mr-2 text-blue-700 mt-0.5 flex-shrink-0" />
                        <span>Assistance in Cox's Bazar city traffic management</span>
                      </li>
                      <li className="flex items-start">
                        <Building className="h-5 w-5 mr-2 text-blue-700 mt-0.5 flex-shrink-0" />
                        <span>Part-time work in hotels and restaurants</span>
                      </li>
                      <li className="flex items-start">
                        <Globe className="h-5 w-5 mr-2 text-blue-700 mt-0.5 flex-shrink-0" />
                        <span>Job opportunities in tourism-focused businesses</span>
                      </li>
                    </ul>
                    <Link href="/educational-hub/student-employment" className="w-full sm:w-auto inline-block">
                      <Button className="gap-2 w-full sm:w-auto">
                        Learn More
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                  <div className="bg-white p-4 md:p-6 rounded-xl shadow-lg mt-4 md:mt-0">
                    <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-center">Work Schedule</h3>
                    <div className="space-y-3 md:space-y-4">
                      <div className="bg-blue-50 p-3 md:p-4 rounded-lg">
                        <h4 className="font-semibold flex items-center gap-2 text-sm md:text-base">
                          <Calendar className="h-4 w-4 text-blue-700" />
                          High School
                        </h4>
                        <p className="text-xs md:text-sm mt-1 md:mt-2">Thursday (from 2 PM) and Friday (all day)</p>
                      </div>
                      <div className="bg-blue-50 p-3 md:p-4 rounded-lg">
                        <h4 className="font-semibold flex items-center gap-2 text-sm md:text-base">
                          <Calendar className="h-4 w-4 text-blue-700" />
                          College
                        </h4>
                        <p className="text-xs md:text-sm mt-1 md:mt-2">
                          Thursday (from 2 PM), Friday & Saturday (all day)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Islamic Women Empowerment Program */}
              <div className="bg-green-50 rounded-xl p-4 md:p-8 border border-green-100">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
                  <div>
                    <Badge className="mb-3 md:mb-4 bg-green-600 hover:bg-green-700 text-white">
                      ISLAMIC WOMEN EMPOWERMENT
                    </Badge>
                    <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Islamic Women Empowerment Program</h2>
                    <p className="mb-3 md:mb-4 text-gray-700 text-sm md:text-base">
                      Creating employment opportunities for women while preserving Islamic values, allowing them to
                      become financially self-sufficient while maintaining their religious sentiments and values.
                    </p>
                    <ul className="space-y-2 mb-4 md:mb-6 text-sm md:text-base">
                      <li className="flex items-start">
                        <Mosque className="h-5 w-5 mr-2 text-green-700 mt-0.5 flex-shrink-0" />
                        <span>Work environment according to Islamic values</span>
                      </li>
                      <li className="flex items-start">
                        <Mosque className="h-5 w-5 mr-2 text-green-700 mt-0.5 flex-shrink-0" />
                        <span>Separate workplaces for women</span>
                      </li>
                      <li className="flex items-start">
                        <Mosque className="h-5 w-5 mr-2 text-green-700 mt-0.5 flex-shrink-0" />
                        <span>Islamic clothing and food production</span>
                      </li>
                    </ul>
                    <Link href="/educational-hub/islamic-women-empowerment" className="w-full sm:w-auto inline-block">
                      <Button className="gap-2 w-full sm:w-auto">
                        Learn More
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                  <div className="bg-white p-4 md:p-6 rounded-xl shadow-lg mt-4 md:mt-0">
                    <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-center">Training & Workplace</h3>
                    <div className="space-y-3 md:space-y-4">
                      <div className="bg-green-50 p-3 md:p-4 rounded-lg">
                        <h4 className="font-semibold flex items-center gap-2 text-sm md:text-base">
                          <Sparkles className="h-4 w-4 text-green-700" />
                          Islamic Clothing Design
                        </h4>
                        <p className="text-xs md:text-sm mt-1 md:mt-2">
                          Designing and creating modern and traditional Islamic clothing
                        </p>
                      </div>
                      <div className="bg-green-50 p-3 md:p-4 rounded-lg">
                        <h4 className="font-semibold flex items-center gap-2 text-sm md:text-base">
                          <Sparkles className="h-4 w-4 text-green-700" />
                          Halal Food Processing
                        </h4>
                        <p className="text-xs md:text-sm mt-1 md:mt-2">Processing and marketing halal food</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Al-Quran Journey Section */}
              <div className="bg-amber-50 rounded-xl p-4 md:p-8 border border-amber-100">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
                  <div>
                    <Badge className="mb-3 md:mb-4 bg-amber-600 hover:bg-amber-700 text-white">ISLAMIC EDUCATION</Badge>
                    <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">
                      Al-Quran Journey: Depths of Divine Knowledge
                    </h2>
                    <p className="mb-3 md:mb-4 text-gray-700 text-sm md:text-base">
                      A comprehensive program designed to provide deep understanding of the Holy Quran, its teachings,
                      and its application in modern life, guided by qualified Islamic scholars.
                    </p>
                    <ul className="space-y-2 mb-4 md:mb-6 text-sm md:text-base">
                      <li className="flex items-start">
                        <Book className="h-5 w-5 mr-2 text-amber-700 mt-0.5 flex-shrink-0" />
                        <span>Tajweed and proper recitation techniques</span>
                      </li>
                      <li className="flex items-start">
                        <Book className="h-5 w-5 mr-2 text-amber-700 mt-0.5 flex-shrink-0" />
                        <span>Understanding Quranic verses and their meanings</span>
                      </li>
                      <li className="flex items-start">
                        <Book className="h-5 w-5 mr-2 text-amber-700 mt-0.5 flex-shrink-0" />
                        <span>Application of Quranic teachings in daily life</span>
                      </li>
                    </ul>
                    <Link href="/educational-hub/al-quran-journey" className="w-full sm:w-auto inline-block">
                      <Button className="gap-2 w-full sm:w-auto">
                        Learn More
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                  <div className="bg-white p-4 md:p-6 rounded-xl shadow-lg mt-4 md:mt-0">
                    <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-center">Program Features</h3>
                    <div className="space-y-3 md:space-y-4">
                      <div className="bg-amber-50 p-3 md:p-4 rounded-lg">
                        <h4 className="font-semibold flex items-center gap-2 text-sm md:text-base">
                          <Users className="h-4 w-4 text-amber-700" />
                          Qualified Teachers
                        </h4>
                        <p className="text-xs md:text-sm mt-1 md:mt-2">
                          Learn from experienced Islamic scholars and Hafiz
                        </p>
                      </div>
                      <div className="bg-amber-50 p-3 md:p-4 rounded-lg">
                        <h4 className="font-semibold flex items-center gap-2 text-sm md:text-base">
                          <Calendar className="h-4 w-4 text-amber-700" />
                          Flexible Schedule
                        </h4>
                        <p className="text-xs md:text-sm mt-1 md:mt-2">
                          Morning, evening, and weekend classes available
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action - Improved for mobile */}
        <section className="py-10 md:py-20 bg-blue-900 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6">Join TRUSTED ALLY Education Center Today</h2>
              <p className="text-base md:text-xl mb-6 md:mb-8">
                Join us to ensure quality education for all children, students, and women in Cox's Bazar district
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black w-full sm:w-auto">
                  Join Our Programs
                </Button>
                <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black border-0 w-full sm:w-auto">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

