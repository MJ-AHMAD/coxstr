"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Search, BookOpen, Video, Users, Trophy, BookMarked, Clock, Monitor } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

export default function LearningClientPage() {
  const [activeTab, setActiveTab] = useState("featured")

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <div className="container mx-auto py-10 px-4">
      <motion.div className="text-center mb-12" initial="hidden" animate="visible" variants={fadeIn}>
        <h1 className="text-4xl font-bold mb-4">Learning Resources</h1>
        <p className="text-xl max-w-3xl mx-auto text-muted-foreground">Educational Materials for All Ages</p>
      </motion.div>

      <motion.div
        className="relative max-w-2xl mx-auto mb-16"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <Input type="text" placeholder="Search for courses, subjects, or teachers..." className="pl-10 py-6 text-lg" />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
        <Button className="absolute right-1 top-1/2 transform -translate-y-1/2">Search</Button>
      </motion.div>

      <motion.div
        className="mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <Tabs defaultValue="featured" value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid grid-cols-4 w-full max-w-3xl mx-auto mb-8">
            <TabsTrigger value="featured">Featured Courses</TabsTrigger>
            <TabsTrigger value="primary">Primary Education</TabsTrigger>
            <TabsTrigger value="secondary">Secondary Education</TabsTrigger>
            <TabsTrigger value="vocational">Vocational</TabsTrigger>
          </TabsList>

          <TabsContent value="featured" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Digital Education Special Course",
                  description: "Learn modern education methods through computer and internet use",
                  icon: <Monitor className="h-8 w-8 text-blue-500" />,
                  level: "All Levels",
                  enrolled: 3250,
                  duration: "6 Weeks",
                },
                {
                  title: "English Language Skills",
                  description: "Develop English language proficiency for international communication",
                  icon: <BookOpen className="h-8 w-8 text-green-500" />,
                  level: "Secondary",
                  enrolled: 4120,
                  duration: "12 Weeks",
                },
                {
                  title: "Mathematics Problem-Solving Techniques",
                  description: "Learn easy methods to solve complex mathematical problems",
                  icon: <BookMarked className="h-8 w-8 text-red-500" />,
                  level: "Higher Secondary",
                  enrolled: 2870,
                  duration: "8 Weeks",
                },
                {
                  title: "Science Projects",
                  description: "Learn the application of science in real life through simple projects",
                  icon: <BookMarked className="h-8 w-8 text-purple-500" />,
                  level: "Secondary",
                  enrolled: 2450,
                  duration: "10 Weeks",
                },
                {
                  title: "Tourism Service Training",
                  description: "Acquire necessary skills for employment in Cox's Bazar's tourism sector",
                  icon: <Users className="h-8 w-8 text-amber-500" />,
                  level: "Vocational",
                  enrolled: 1850,
                  duration: "12 Weeks",
                },
                {
                  title: "PSC Exam Preparation",
                  description: "Comprehensive preparation course for Primary School Certificate examination",
                  icon: <Trophy className="h-8 w-8 text-orange-500" />,
                  level: "Primary",
                  enrolled: 5640,
                  duration: "16 Weeks",
                },
              ].map((course, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      {course.icon}
                      <Badge variant="outline">{course.level}</Badge>
                    </div>
                    <CardTitle className="mt-4">{course.title}</CardTitle>
                    <CardDescription>{course.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between text-sm text-muted-foreground mb-2">
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        <span>{course.enrolled} Students</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{course.duration}</span>
                      </div>
                    </div>
                    <Progress value={75} className="h-2" />
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Join Course</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="primary" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Bengali Language Education",
                  description: "Primary level Bengali language and literature",
                  icon: <BookOpen className="h-8 w-8 text-blue-500" />,
                  level: "Primary",
                  enrolled: 4850,
                  duration: "24 Weeks",
                },
                {
                  title: "Primary Mathematics",
                  description: "Learn basic mathematical concepts in an easy and fun way",
                  icon: <BookMarked className="h-8 w-8 text-green-500" />,
                  level: "Primary",
                  enrolled: 5120,
                  duration: "24 Weeks",
                },
                {
                  title: "English Language Fundamentals",
                  description: "Develop basic English language skills",
                  icon: <BookOpen className="h-8 w-8 text-red-500" />,
                  level: "Primary",
                  enrolled: 4720,
                  duration: "24 Weeks",
                },
              ].map((course, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      {course.icon}
                      <Badge variant="outline">{course.level}</Badge>
                    </div>
                    <CardTitle className="mt-4">{course.title}</CardTitle>
                    <CardDescription>{course.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between text-sm text-muted-foreground mb-2">
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        <span>{course.enrolled} Students</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{course.duration}</span>
                      </div>
                    </div>
                    <Progress value={80} className="h-2" />
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Join Course</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="secondary" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Secondary education courses would go here */}
              {[
                {
                  title: "Secondary Science",
                  description: "Integrated course of physics, chemistry, and biology",
                  icon: <BookMarked className="h-8 w-8 text-purple-500" />,
                  level: "Secondary",
                  enrolled: 3520,
                  duration: "32 Weeks",
                },
                {
                  title: "SSC Mathematics Preparation",
                  description: "Complete mathematics preparation for SSC examination",
                  icon: <BookMarked className="h-8 w-8 text-blue-500" />,
                  level: "Secondary",
                  enrolled: 3850,
                  duration: "30 Weeks",
                },
                {
                  title: "English Language Proficiency",
                  description: "Secondary level English language and literature",
                  icon: <BookOpen className="h-8 w-8 text-green-500" />,
                  level: "Secondary",
                  enrolled: 3320,
                  duration: "28 Weeks",
                },
              ].map((course, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      {course.icon}
                      <Badge variant="outline">{course.level}</Badge>
                    </div>
                    <CardTitle className="mt-4">{course.title}</CardTitle>
                    <CardDescription>{course.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between text-sm text-muted-foreground mb-2">
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        <span>{course.enrolled} Students</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{course.duration}</span>
                      </div>
                    </div>
                    <Progress value={65} className="h-2" />
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Join Course</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="vocational" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Vocational courses would go here */}
              {[
                {
                  title: "Computer Programming",
                  description: "Basic course in web development and mobile app creation",
                  icon: <Monitor className="h-8 w-8 text-blue-500" />,
                  level: "Vocational",
                  enrolled: 2150,
                  duration: "16 Weeks",
                },
                {
                  title: "Hotel Management",
                  description: "Hotel management training for employment in tourism industry",
                  icon: <Users className="h-8 w-8 text-amber-500" />,
                  level: "Vocational",
                  enrolled: 1560,
                  duration: "14 Weeks",
                },
                {
                  title: "Arts and Crafts",
                  description: "Learn traditional arts and create income opportunities",
                  icon: <BookMarked className="h-8 w-8 text-green-500" />,
                  level: "Vocational",
                  enrolled: 950,
                  duration: "10 Weeks",
                },
              ].map((course, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      {course.icon}
                      <Badge variant="outline">{course.level}</Badge>
                    </div>
                    <CardTitle className="mt-4">{course.title}</CardTitle>
                    <CardDescription>{course.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between text-sm text-muted-foreground mb-2">
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        <span>{course.enrolled} Students</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{course.duration}</span>
                      </div>
                    </div>
                    <Progress value={70} className="h-2" />
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Join Course</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </motion.div>

      <motion.div
        className="mb-16 border rounded-lg shadow-lg overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="relative h-[400px]">
            <Image src="/placeholder.svg?height=800&width=1200" alt="Live Class" fill className="object-cover" />
          </div>
          <div className="p-8 flex flex-col justify-center">
            <Badge className="mb-2 w-fit">LIVE CLASSES</Badge>
            <h2 className="text-2xl font-bold mb-4">Participate in Our Live Classes</h2>
            <p className="mb-4">
              Join our live classes with experienced teachers and get the opportunity to ask questions directly. Regular
              live classes on various subjects are organized every week.
            </p>
            <div className="space-y-2 mb-6">
              <div className="flex items-center gap-2">
                <Video className="text-green-500 h-5 w-5" />
                <span>Subject-based live classes</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="text-green-500 h-5 w-5" />
                <span>Discussion with other students</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="text-green-500 h-5 w-5" />
                <span>Q&A with experienced teachers</span>
              </div>
            </div>
            <Button>View Upcoming Live Class Schedule</Button>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="text-center mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <h2 className="text-2xl font-bold mb-8">Contact Us</h2>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Button>Student Support</Button>
          <Button variant="outline">Free Demo Class</Button>
          <Button variant="outline">Phone: 018XX-XXXXXX</Button>
        </div>
      </motion.div>
    </div>
  )
}

