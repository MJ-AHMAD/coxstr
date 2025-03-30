"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  Book,
  Users,
  GraduationCap,
  Globe,
  Heart,
  BookOpen,
  School,
  Laptop,
  UserPlus,
  ChevronRight,
  CheckCircle2,
  Brain,
  Waves,
  HandHeart,
  Coins,
  UserCircle,
  Building,
  MapPin,
} from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function PrimaryEducationClientPage() {
  const [activeTab, setActiveTab] = useState("overview")

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <div className="container mx-auto py-10">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <Badge className="mb-4 px-4 py-1 text-base">TRUSTED ALLY Education Initiative</Badge>
        <h1 className="text-4xl font-bold mb-4">Cox's Bazar Integrated Education Development Project</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Integrated education system for all children, students, and women in every upazila, island, and peninsula of
          Cox's Bazar district
        </p>
      </motion.div>

      {/* Tab Navigation Section - Completely Separated */}
      <div className="bg-gray-50 rounded-xl p-6 shadow-sm mb-12">
        <h2 className="text-xl font-semibold mb-4 text-center">Program Categories</h2>
        <div className="flex flex-wrap justify-center gap-3">
          <Button
            variant={activeTab === "overview" ? "default" : "outline"}
            onClick={() => setActiveTab("overview")}
            className="min-w-[120px]"
          >
            Overall Plan
          </Button>
          <Button
            variant={activeTab === "women" ? "default" : "outline"}
            onClick={() => setActiveTab("women")}
            className="min-w-[120px]"
          >
            Women's Education
          </Button>
          <Button
            variant={activeTab === "rohingya" ? "default" : "outline"}
            onClick={() => setActiveTab("rohingya")}
            className="min-w-[120px]"
          >
            Rohingya Education
          </Button>
          <Button
            variant={activeTab === "islamic" ? "default" : "outline"}
            onClick={() => setActiveTab("islamic")}
            className="min-w-[120px]"
          >
            Islamic Education
          </Button>
          <Button
            variant={activeTab === "tourism" ? "default" : "outline"}
            onClick={() => setActiveTab("tourism")}
            className="min-w-[120px]"
          >
            Tourism Education
          </Button>
        </div>
      </div>

      {/* Tab Content Section - Completely Separated */}
      <div className="mt-8">
        {/* Overview Content */}
        {activeTab === "overview" && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-primary/5 p-6 rounded-xl">
                  <h2 className="text-2xl font-bold mb-4">Our Goals</h2>
                  <p className="mb-4">
                    Our main goal is to ensure appropriate education for all children, students, and women in every
                    upazila, island, and peninsula of Cox's Bazar district. We believe that education can make a society
                    prosperous and modern.
                  </p>
                  <ul className="space-y-2">
                    {[
                      "Quality primary education for every child",
                      "Women's empowerment and skill development",
                      "Suitable educational environment for Rohingya students",
                      "Modernization of Islamic madrasas",
                      "Tourism and hospitality education",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 mr-2 text-primary mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-primary/5 p-6 rounded-xl">
                  <h2 className="text-2xl font-bold mb-4">Our Programs</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { icon: <Book className="h-5 w-5" />, text: "Primary Education Program" },
                      { icon: <Users className="h-5 w-5" />, text: "Women's Education Development Project" },
                      { icon: <Heart className="h-5 w-5" />, text: "Rohingya Education Support" },
                      { icon: <School className="h-5 w-5" />, text: "Madrasa Modernization Project" },
                      { icon: <Globe className="h-5 w-5" />, text: "Tourism & Hospitality Training" },
                      { icon: <Waves className="h-5 w-5" />, text: "Ocean Conservation Education" },
                    ].map((item, index) => (
                      <div key={index} className="flex items-center p-3 bg-white rounded-lg shadow-sm">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3">
                          {item.icon}
                        </div>
                        <span className="font-medium">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="relative h-64 w-full">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/5 z-10"></div>
                    <Image
                      src="/placeholder.svg?height=400&width=800"
                      alt="Cox's Bazar Education Development Project"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-4">Our Achievements</h3>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="text-center p-4 bg-primary/5 rounded-lg">
                        <p className="text-3xl font-bold text-primary">15,000+</p>
                        <p className="text-sm">Students</p>
                      </div>
                      <div className="text-center p-4 bg-primary/5 rounded-lg">
                        <p className="text-3xl font-bold text-primary">100+</p>
                        <p className="text-sm">Education Centers</p>
                      </div>
                      <div className="text-center p-4 bg-primary/5 rounded-lg">
                        <p className="text-3xl font-bold text-primary">500+</p>
                        <p className="text-sm">Trained Teachers</p>
                      </div>
                      <div className="text-center p-4 bg-primary/5 rounded-lg">
                        <p className="text-3xl font-bold text-primary">98%</p>
                        <p className="text-sm">Success Rate</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <h4 className="font-semibold">Our Coverage:</h4>
                      <div className="flex flex-wrap gap-2">
                        {[
                          "Cox's Bazar Sadar",
                          "Ukhiya",
                          "Teknaf",
                          "Chakaria",
                          "Pekua",
                          "Maheshkhali",
                          "Kutubdia",
                          "Ramu",
                        ].map((area, index) => (
                          <Badge key={index} variant="outline" className="flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            {area}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: <Coins className="h-6 w-6" />,
                  title: "Income Opportunity Creation",
                  description:
                    "Opportunity to earn through providing various services on holidays for students' daily expenses",
                },
                {
                  icon: <Brain className="h-6 w-6" />,
                  title: "Mental Health Services",
                  description:
                    "Counseling and support to maintain the mental well-being of every student in the district",
                },
                {
                  icon: <UserCircle className="h-6 w-6" />,
                  title: "Social Relationship Development",
                  description: "Various activities to build intimate relationships among students across the district",
                },
              ].map((item, index) => (
                <Card key={index} className="border-2 hover:border-primary transition-all duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2">
                      {item.icon}
                    </div>
                    <CardTitle>{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{item.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Learn More
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </motion.div>
        )}

        {/* Women's Education Content */}
        {activeTab === "women" && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <div className="bg-primary/5 p-6 rounded-xl">
                  <h2 className="text-2xl font-bold mb-4">Women's Education & Empowerment</h2>
                  <p className="mb-4">
                    Our special initiative for the education, skill development, and financial self-sufficiency of women
                    in Cox's Bazar district. We believe that a society cannot be fully developed without women's
                    empowerment.
                  </p>
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h3 className="font-semibold text-lg mb-2 flex items-center">
                        <GraduationCap className="h-5 w-5 mr-2 text-primary" />
                        Educational Activities
                      </h3>
                      <ul className="ml-7 list-disc space-y-1">
                        <li>Support from primary to higher education</li>
                        <li>Special scholarships</li>
                        <li>Safe transportation for female students</li>
                      </ul>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h3 className="font-semibold text-lg mb-2 flex items-center">
                        <Laptop className="h-5 w-5 mr-2 text-primary" />
                        Skill Development
                      </h3>
                      <ul className="ml-7 list-disc space-y-1">
                        <li>Computer training</li>
                        <li>Handicrafts and artisanship</li>
                        <li>Food processing</li>
                        <li>Tourism and hospitality training</li>
                      </ul>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h3 className="font-semibold text-lg mb-2 flex items-center">
                        <Coins className="h-5 w-5 mr-2 text-primary" />
                        Financial Self-Sufficiency
                      </h3>
                      <ul className="ml-7 list-disc space-y-1">
                        <li>Microcredit support</li>
                        <li>Entrepreneurship development training</li>
                        <li>Marketing assistance</li>
                        <li>Savings and investment education</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="bg-white rounded-xl shadow-lg overflow-hidden h-full">
                  <div className="relative h-64 w-full">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/5 z-10"></div>
                    <Image
                      src="/placeholder.svg?height=400&width=800"
                      alt="Women's Education & Empowerment"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-4">Success Stories</h3>
                    <div className="space-y-4">
                      <div className="p-4 border border-primary/20 rounded-lg">
                        <p className="italic text-muted-foreground mb-2">
                          "I received computer training through the TRUSTED ALLY education project. Now I work at an IT
                          company and can financially support my family."
                        </p>
                        <p className="font-semibold">- Sabrina Akter, Ukhiya</p>
                      </div>
                      <div className="p-4 border border-primary/20 rounded-lg">
                        <p className="italic text-muted-foreground mb-2">
                          "I've started my own small business through handicraft training. My products are now sold to
                          tourists."
                        </p>
                        <p className="font-semibold">- Nazma Begum, Maheshkhali</p>
                      </div>
                    </div>
                    <div className="mt-6">
                      <h4 className="font-semibold mb-2">Our Targets:</h4>
                      <div className="space-y-3">
                        <div>
                          <div className="flex justify-between mb-1">
                            <span>Increase in women's education rate</span>
                            <span>75%</span>
                          </div>
                          <div className="w-full bg-primary/10 rounded-full h-2.5">
                            <div className="bg-primary h-2.5 rounded-full" style={{ width: "75%" }}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between mb-1">
                            <span>Skill development training</span>
                            <span>80%</span>
                          </div>
                          <div className="w-full bg-primary/10 rounded-full h-2.5">
                            <div className="bg-primary h-2.5 rounded-full" style={{ width: "80%" }}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between mb-1">
                            <span>Financial self-sufficiency</span>
                            <span>65%</span>
                          </div>
                          <div className="w-full bg-primary/10 rounded-full h-2.5">
                            <div className="bg-primary h-2.5 rounded-full" style={{ width: "65%" }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Rohingya Education Content */}
        {activeTab === "rohingya" && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <div className="bg-primary/5 p-6 rounded-xl">
                  <h2 className="text-2xl font-bold mb-4">Rohingya Education Support</h2>
                  <p className="mb-4">
                    Creating an appropriate environment for Rohingya refugee children and adolescents to receive
                    education is one of our main goals. We believe that education can brighten their future.
                  </p>
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h3 className="font-semibold text-lg mb-2 flex items-center">
                        <Book className="h-5 w-5 mr-2 text-primary" />
                        Educational Activities
                      </h3>
                      <ul className="ml-7 list-disc space-y-1">
                        <li>Basic education (Bengali, English, Mathematics)</li>
                        <li>Life skills education</li>
                        <li>Sports and creative activities</li>
                        <li>Mental health support</li>
                      </ul>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h3 className="font-semibold text-lg mb-2 flex items-center">
                        <Users className="h-5 w-5 mr-2 text-primary" />
                        Teacher Training
                      </h3>
                      <ul className="ml-7 list-disc space-y-1">
                        <li>Training for teachers from the Rohingya community</li>
                        <li>Bilingual education method</li>
                        <li>Providing psychosocial support</li>
                      </ul>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h3 className="font-semibold text-lg mb-2 flex items-center">
                        <Building className="h-5 w-5 mr-2 text-primary" />
                        Education Centers
                      </h3>
                      <ul className="ml-7 list-disc space-y-1">
                        <li>Temporary education centers in refugee camps</li>
                        <li>Multimedia educational materials</li>
                        <li>Safe and friendly environment</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="bg-white rounded-xl shadow-lg overflow-hidden h-full">
                  <div className="relative h-64 w-full">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/5 z-10"></div>
                    <Image
                      src="/placeholder.svg?height=400&width=800"
                      alt="Rohingya Education Support"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-4">Our Impact</h3>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="text-center p-4 bg-primary/5 rounded-lg">
                        <p className="text-3xl font-bold text-primary">50+</p>
                        <p className="text-sm">Education Centers</p>
                      </div>
                      <div className="text-center p-4 bg-primary/5 rounded-lg">
                        <p className="text-3xl font-bold text-primary">10,000+</p>
                        <p className="text-sm">Students</p>
                      </div>
                      <div className="text-center p-4 bg-primary/5 rounded-lg">
                        <p className="text-3xl font-bold text-primary">200+</p>
                        <p className="text-sm">Trained Teachers</p>
                      </div>
                      <div className="text-center p-4 bg-primary/5 rounded-lg">
                        <p className="text-3xl font-bold text-primary">85%</p>
                        <p className="text-sm">Attendance Rate</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold">Challenges & Solutions:</h4>
                      <div className="space-y-3">
                        <div className="flex items-start">
                          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3 flex-shrink-0">
                            <CheckCircle2 className="h-4 w-4" />
                          </div>
                          <div>
                            <p className="font-medium">Language Barrier</p>
                            <p className="text-sm text-muted-foreground">
                              Being addressed through bilingual education methods and specially trained teachers
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3 flex-shrink-0">
                            <CheckCircle2 className="h-4 w-4" />
                          </div>
                          <div>
                            <p className="font-medium">Inadequate Educational Materials</p>
                            <p className="text-sm text-muted-foreground">
                              Sufficient educational materials are being supplied with the cooperation of international
                              organizations
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3 flex-shrink-0">
                            <CheckCircle2 className="h-4 w-4" />
                          </div>
                          <div>
                            <p className="font-medium">Mental Trauma</p>
                            <p className="text-sm text-muted-foreground">
                              Special psychosocial support and counseling services are being provided
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Islamic Education Content */}
        {activeTab === "islamic" && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <div className="bg-primary/5 p-6 rounded-xl">
                  <h2 className="text-2xl font-bold mb-4">Islamic Education Modernization</h2>
                  <p className="mb-4">
                    Creating a contemporary educational environment for Islamic madrasas in Cox's Bazar district is one
                    of our main goals. We want to integrate modern education methods alongside religious education.
                  </p>
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h3 className="font-semibold text-lg mb-2 flex items-center">
                        <BookOpen className="h-5 w-5 mr-2 text-primary" />
                        Integrated Education Method
                      </h3>
                      <ul className="ml-7 list-disc space-y-1">
                        <li>Inclusion of modern subjects alongside religious education</li>
                        <li>Science and technology education</li>
                        <li>Strengthening English language education</li>
                        <li>Computer education</li>
                      </ul>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h3 className="font-semibold text-lg mb-2 flex items-center">
                        <School className="h-5 w-5 mr-2 text-primary" />
                        Physical Infrastructure Development
                      </h3>
                      <ul className="ml-7 list-disc space-y-1">
                        <li>Construction of modern classrooms</li>
                        <li>Establishment of digital libraries</li>
                        <li>Setting up computer labs</li>
                        <li>Playgrounds and recreation centers</li>
                      </ul>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h3 className="font-semibold text-lg mb-2 flex items-center">
                        <UserPlus className="h-5 w-5 mr-2 text-primary" />
                        Teacher Development
                      </h3>
                      <ul className="ml-7 list-disc space-y-1">
                        <li>Training in modern teaching methods</li>
                        <li>Digital content creation training</li>
                        <li>Teacher-student interaction improvement</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="bg-white rounded-xl shadow-lg overflow-hidden h-full">
                  <div className="relative h-64 w-full">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/5 z-10"></div>
                    <Image
                      src="/placeholder.svg?height=400&width=800"
                      alt="Islamic Education Modernization"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-4">Our Achievements</h3>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="text-center p-4 bg-primary/5 rounded-lg">
                        <p className="text-3xl font-bold text-primary">30+</p>
                        <p className="text-sm">Madrasa Modernization</p>
                      </div>
                      <div className="text-center p-4 bg-primary/5 rounded-lg">
                        <p className="text-3xl font-bold text-primary">5,000+</p>
                        <p className="text-sm">Benefited Students</p>
                      </div>
                      <div className="text-center p-4 bg-primary/5 rounded-lg">
                        <p className="text-3xl font-bold text-primary">100+</p>
                        <p className="text-sm">Trained Teachers</p>
                      </div>
                      <div className="text-center p-4 bg-primary/5 rounded-lg">
                        <p className="text-3xl font-bold text-primary">20+</p>
                        <p className="text-sm">Computer Labs</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold">Success Story:</h4>
                      <div className="p-4 border border-primary/20 rounded-lg">
                        <p className="italic text-muted-foreground mb-2">
                          "After the introduction of modern education methods and computer education in our madrasa,
                          students have developed a new enthusiasm. Now they are becoming skilled in modern knowledge
                          and science alongside religious education."
                        </p>
                        <p className="font-semibold">- Maulana Abdul Karim, Principal, Darul Ulum Madrasa</p>
                      </div>
                    </div>
                    <div className="mt-6">
                      <h4 className="font-semibold mb-2">Future Plans:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <ChevronRight className="h-5 w-5 mr-2 text-primary mt-0.5 flex-shrink-0" />
                          <span>Implementation of digital education methods in all madrasas</span>
                        </li>
                        <li className="flex items-start">
                          <ChevronRight className="h-5 w-5 mr-2 text-primary mt-0.5 flex-shrink-0" />
                          <span>Creating an online education platform</span>
                        </li>
                        <li className="flex items-start">
                          <ChevronRight className="h-5 w-5 mr-2 text-primary mt-0.5 flex-shrink-0" />
                          <span>Inclusion of technical and vocational education</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Tourism Education Content */}
        {activeTab === "tourism" && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <div className="bg-primary/5 p-6 rounded-xl">
                  <h2 className="text-2xl font-bold mb-4">Tourism & Hospitality Education</h2>
                  <p className="mb-4">
                    Our special education program aimed at providing joyful and memorable experiences to tourists
                    worldwide through Cox's Bazar district students. We believe that creating skilled workforce in the
                    tourism sector can contribute to the district's economic development.
                  </p>
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h3 className="font-semibold text-lg mb-2 flex items-center">
                        <Globe className="h-5 w-5 mr-2 text-primary" />
                        Tourism Education
                      </h3>
                      <ul className="ml-7 list-disc space-y-1">
                        <li>Tourist guide training</li>
                        <li>Knowledge about local history and heritage</li>
                        <li>Environmental conservation and sustainable tourism</li>
                        <li>Foreign language education (English, Chinese, Arabic)</li>
                      </ul>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h3 className="font-semibold text-lg mb-2 flex items-center">
                        <HandHeart className="h-5 w-5 mr-2 text-primary" />
                        Hospitality Training
                      </h3>
                      <ul className="ml-7 list-disc space-y-1">
                        <li>Hotel management</li>
                        <li>Restaurant service</li>
                        <li>Customer care</li>
                        <li>Event management</li>
                      </ul>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h3 className="font-semibold text-lg mb-2 flex items-center">
                        <Waves className="h-5 w-5 mr-2 text-primary" />
                        Environmental Conservation
                      </h3>
                      <ul className="ml-7 list-disc space-y-1">
                        <li>Beach cleanliness</li>
                        <li>Plastic avoidance and recycling</li>
                        <li>Marine biodiversity conservation</li>
                        <li>Sustainable tourism promotion</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="bg-white rounded-xl shadow-lg overflow-hidden h-full">
                  <div className="relative h-64 w-full">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/5 z-10"></div>
                    <Image
                      src="/placeholder.svg?height=400&width=800"
                      alt="Tourism & Hospitality Education"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-4">Employment Opportunities</h3>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="text-center p-4 bg-primary/5 rounded-lg">
                        <p className="text-3xl font-bold text-primary">1,000+</p>
                        <p className="text-sm">Trained Guides</p>
                      </div>
                      <div className="text-center p-4 bg-primary/5 rounded-lg">
                        <p className="text-3xl font-bold text-primary">500+</p>
                        <p className="text-sm">Hotel Staff</p>
                      </div>
                      <div className="text-center p-4 bg-primary/5 rounded-lg">
                        <p className="text-3xl font-bold text-primary">300+</p>
                        <p className="text-sm">Event Managers</p>
                      </div>
                      <div className="text-center p-4 bg-primary/5 rounded-lg">
                        <p className="text-3xl font-bold text-primary">200+</p>
                        <p className="text-sm">Environmental Conservationists</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold">Earning Opportunities:</h4>
                      <div className="space-y-3">
                        <div className="flex items-start">
                          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3 flex-shrink-0">
                            <Coins className="h-4 w-4" />
                          </div>
                          <div>
                            <p className="font-medium">Tourist Guide on Holidays</p>
                            <p className="text-sm text-muted-foreground">
                              Students can earn by working as tourist guides on holidays
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3 flex-shrink-0">
                            <Coins className="h-4 w-4" />
                          </div>
                          <div>
                            <p className="font-medium">Handicraft Sales</p>
                            <p className="text-sm text-muted-foreground">
                              Income through creating and selling local handicrafts
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3 flex-shrink-0">
                            <Coins className="h-4 w-4" />
                          </div>
                          <div>
                            <p className="font-medium">Event Assistance</p>
                            <p className="text-sm text-muted-foreground">
                              Income through providing assistance in various tourism events
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-6">
                      <h4 className="font-semibold mb-2">Success Story:</h4>
                      <div className="p-4 border border-primary/20 rounded-lg">
                        <p className="italic text-muted-foreground mb-2">
                          "Through TRUSTED ALLY tourism training, I am now a successful tour guide. I can earn good
                          income working with foreign tourists and can also cover my educational expenses."
                        </p>
                        <p className="font-semibold">- Rakib Hossain, Cox's Bazar Sadar</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="bg-primary/5 rounded-xl p-8 mb-10 mt-16"
      >
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Join Us</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Participate in the educational development of Cox's Bazar district. Join us to help build a bright future.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="border-2 hover:border-primary transition-all duration-300">
            <CardHeader>
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2">
                <UserPlus className="h-6 w-6" />
              </div>
              <CardTitle>Join as a Volunteer</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Share your knowledge and skills to support educational activities</p>
            </CardContent>
            <CardFooter>
              <Link href="/join">
                <Button className="w-full">Apply</Button>
              </Link>
            </CardFooter>
          </Card>
          <Card className="border-2 hover:border-primary transition-all duration-300">
            <CardHeader>
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2">
                <HandHeart className="h-6 w-6" />
              </div>
              <CardTitle>Make a Donation</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Your financial support will play an important role in educational development</p>
            </CardContent>
            <CardFooter>
              <Link href="/donate">
                <Button className="w-full">Donate</Button>
              </Link>
            </CardFooter>
          </Card>
          <Card className="border-2 hover:border-primary transition-all duration-300">
            <CardHeader>
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2">
                <Building className="h-6 w-6" />
              </div>
              <CardTitle>Collaborate as an Institution</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Participate in educational development as part of your institution's social responsibility</p>
            </CardContent>
            <CardFooter>
              <Link href="/corporate-partnership">
                <Button className="w-full">Contact Us</Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="text-center"
      >
        <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
        <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
          Contact us to learn more about our educational activities or to collaborate
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/contact">
            <Button size="lg" className="gap-2">
              <Users className="h-5 w-5" />
              <span>Contact Us</span>
            </Button>
          </Link>
          <Link href="/educational-hub">
            <Button size="lg" variant="outline" className="gap-2">
              <School className="h-5 w-5" />
              <span>View All Programs</span>
            </Button>
          </Link>
        </div>
      </motion.div>
    </div>
  )
}

