"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import {
  CheckCircle,
  ChevronDown,
  ChevronRight,
  Users,
  BookOpen,
  GraduationCap,
  Award,
  Clock,
  Calendar,
  Video,
  FileText,
  MessageSquare,
  BarChart,
  Briefcase,
  Globe,
  Laptop,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function JoinClientPage() {
  const [activeTab, setActiveTab] = useState("student")
  const [expandedCourseCategory, setExpandedCourseCategory] = useState<string | null>(null)

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const toggleCourseCategory = (category: string) => {
    if (expandedCourseCategory === category) {
      setExpandedCourseCategory(null)
    } else {
      setExpandedCourseCategory(category)
    }
  }

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-indigo-800 text-white py-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-blue-900/70"></div>
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Cox's Bazar beach"
            fill
            className="object-cover mix-blend-overlay"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div className="max-w-4xl mx-auto text-center" initial="hidden" animate="visible" variants={fadeIn}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">আমাদের অনলাইন শিক্ষা প্ল্যাটফর্মে যোগ দিন</h1>
            <p className="text-xl md:text-2xl mb-8">
              কক্সবাজার এর শিক্ষার্থীদের জন্য বিশেষভাবে ডিজাইন করা কোর্স ও শিক্ষা উপকরণ অ্যাক্সেস করুন
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50">
                শিক্ষার্থী রেজিস্ট্রেশন
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                শিক্ষক রেজিস্ট্রেশন
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeIn} className="p-6">
              <div className="text-3xl font-bold text-blue-600 mb-2">১০,০০০+</div>
              <div className="text-gray-600">নিবন্ধিত শিক্ষার্থী</div>
            </motion.div>
            <motion.div variants={fadeIn} className="p-6">
              <div className="text-3xl font-bold text-blue-600 mb-2">৫০০+</div>
              <div className="text-gray-600">অভিজ্ঞ শিক্ষক</div>
            </motion.div>
            <motion.div variants={fadeIn} className="p-6">
              <div className="text-3xl font-bold text-blue-600 mb-2">২০০+</div>
              <div className="text-gray-600">অনলাইন কোর্স</div>
            </motion.div>
            <motion.div variants={fadeIn} className="p-6">
              <div className="text-3xl font-bold text-blue-600 mb-2">৯৫%</div>
              <div className="text-gray-600">সন্তুষ্টি হার</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Main Content Tabs */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="student" className="w-full" onValueChange={setActiveTab}>
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
              <TabsTrigger value="student">শিক্ষার্থীদের জন্য</TabsTrigger>
              <TabsTrigger value="teacher">শিক্ষকদের জন্য</TabsTrigger>
            </TabsList>

            <TabsContent value="student" className="space-y-16">
              {/* Student Benefits */}
              <motion.div
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: activeTab === "student" ? 1 : 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="relative h-[400px] rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=800&width=800"
                    alt="Students learning online"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h2 className="text-3xl font-bold mb-6">শিক্ষার্থীদের জন্য সুবিধাসমূহ</h2>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-green-500 h-6 w-6 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium">বিষয়ভিত্তিক ভিডিও লেকচার ও অনুশীলনী</p>
                        <p className="text-gray-600">সকল বিষয়ের উপর বিস্তারিত ভিডিও লেকচার এবং অনুশীলনী সমাধান</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-green-500 h-6 w-6 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium">লাইভ ক্লাস ও প্রশ্নোত্তর সেশন</p>
                        <p className="text-gray-600">সরাসরি শিক্ষকদের সাথে লাইভ ক্লাস এবং প্রশ্নোত্তর সেশন</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-green-500 h-6 w-6 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium">অনলাইন কুইজ ও পরীক্ষা</p>
                        <p className="text-gray-600">নিয়মিত অনলাইন কুইজ এবং পরীক্ষার মাধ্যমে নিজের প্রস্তুতি যাচাই</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-green-500 h-6 w-6 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium">পাঠ্য বই ও সহায়ক উপকরণ</p>
                        <p className="text-gray-600">ডিজিটাল পাঠ্য বই, নোট এবং অন্যান্য সহায়ক শিক্ষা উপকরণ</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-green-500 h-6 w-6 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium">প্রতিটি বিষয়ে অভিজ্ঞ শিক্ষকের সাহায্য</p>
                        <p className="text-gray-600">যেকোনো সময় অভিজ্ঞ শিক্ষকদের কাছ থেকে সাহায্য নিন</p>
                      </div>
                    </li>
                  </ul>
                  <Button className="mt-8" size="lg">
                    শিক্ষার্থী রেজিস্ট্রেশন
                  </Button>
                </div>
              </motion.div>

              {/* Student Registration Form */}
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h2 className="text-2xl font-bold mb-6 text-center">শিক্ষার্থী রেজিস্ট্রেশন ফর্ম</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="student-name">পূর্ণ নাম</Label>
                      <Input id="student-name" placeholder="আপনার পূর্ণ নাম লিখুন" />
                    </div>
                    <div>
                      <Label htmlFor="student-email">ইমেইল</Label>
                      <Input id="student-email" type="email" placeholder="আপনার ইমেইল ঠিকানা লিখুন" />
                    </div>
                    <div>
                      <Label htmlFor="student-phone">মোবাইল নম্বর</Label>
                      <Input id="student-phone" placeholder="আপনার মোবাইল নম্বর লিখুন" />
                    </div>
                    <div>
                      <Label htmlFor="student-password">পাসওয়ার্ড</Label>
                      <Input id="student-password" type="password" placeholder="একটি শক্তিশালী পাসওয়ার্ড সেট করুন" />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="student-education-level">শিক্ষাগত স্তর</Label>
                      <Select>
                        <SelectTrigger id="student-education-level">
                          <SelectValue placeholder="আপনার শিক্ষাগত স্তর নির্বাচন করুন" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="primary">প্রাথমিক (১ম-৫ম শ্রেণি)</SelectItem>
                          <SelectItem value="junior">নিম্ন মাধ্যমিক (৬ষ্ঠ-৮ম শ্রেণি)</SelectItem>
                          <SelectItem value="secondary">মাধ্যমিক (৯ম-১০ম শ্রেণি)</SelectItem>
                          <SelectItem value="higher-secondary">উচ্চ মাধ্যমিক (১১শ-১২শ শ্রেণি)</SelectItem>
                          <SelectItem value="undergraduate">স্নাতক</SelectItem>
                          <SelectItem value="graduate">স্নাতকোত্তর</SelectItem>
                          <SelectItem value="other">অন্যান্য</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="student-institution">প্রতিষ্ঠানের নাম</Label>
                      <Input id="student-institution" placeholder="আপনার শিক্ষা প্রতিষ্ঠানের নাম লিখুন" />
                    </div>
                    <div>
                      <Label htmlFor="student-address">ঠিকানা</Label>
                      <Textarea id="student-address" placeholder="আপনার বর্তমান ঠিকানা লিখুন" />
                    </div>
                    <div>
                      <Label htmlFor="student-interests">আগ্রহের বিষয়সমূহ</Label>
                      <Select>
                        <SelectTrigger id="student-interests">
                          <SelectValue placeholder="আপনার আগ্রহের বিষয় নির্বাচন করুন" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="science">বিজ্ঞান</SelectItem>
                          <SelectItem value="commerce">বাণিজ্য</SelectItem>
                          <SelectItem value="arts">মানবিক</SelectItem>
                          <SelectItem value="computer">কম্পিউটার বিজ্ঞান</SelectItem>
                          <SelectItem value="language">ভাষা শিক্ষা</SelectItem>
                          <SelectItem value="vocational">ভোকেশনাল</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
                <div className="mt-8 text-center">
                  <Button size="lg" className="px-8">
                    রেজিস্ট্রেশন সম্পন্ন করুন
                  </Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="teacher" className="space-y-16">
              {/* Teacher Benefits */}
              <motion.div
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: activeTab === "teacher" ? 1 : 0 }}
                transition={{ duration: 0.5 }}
              >
                <div>
                  <h2 className="text-3xl font-bold mb-6">শিক্ষকদের জন্য সুবিধাসমূহ</h2>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-green-500 h-6 w-6 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium">ডিজিটাল শিক্ষা উপকরণ তৈরির টুলস</p>
                        <p className="text-gray-600">আকর্ষণীয় ও কার্যকর ডিজিটাল শিক্ষা উপকরণ তৈরির সহজ টুলস</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-green-500 h-6 w-6 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium">শিক্ষার্থীদের অগ্রগতি পর্যবেক্ষণ</p>
                        <p className="text-gray-600">শিক্ষার্থীদের অগ্রগতি সহজেই পর্যবেক্ষণ ও বিশ্লেষণ করার সুবিধা</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-green-500 h-6 w-6 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium">আধুনিক শিক্ষাদান কৌশল প্রশিক্ষণ</p>
                        <p className="text-gray-600">আধুনিক ও কার্যকর শিক্ষাদান কৌশল সম্পর্কে নিয়মিত প্রশিক্ষণ</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-green-500 h-6 w-6 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium">শিক্ষক সম্প্রদায়ের সাথে সংযোগ</p>
                        <p className="text-gray-600">অন্যান্য শিক্ষকদের সাথে সংযোগ স্থাপন ও অভিজ্ঞতা বিনিময়</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-green-500 h-6 w-6 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium">বিশেষজ্ঞ শিক্ষকদের মেন্টরশিপ</p>
                        <p className="text-gray-600">বিষয়ভিত্তিক বিশেষজ্ঞ শিক্ষকদের কাছ থেকে মেন্টরশিপ</p>
                      </div>
                    </li>
                  </ul>
                  <Button className="mt-8" size="lg">
                    শিক্ষক রেজিস্ট্রেশন
                  </Button>
                </div>
                <div className="relative h-[400px] rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=800&width=800"
                    alt="Teachers teaching online"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>

              {/* Teacher Registration Form */}
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h2 className="text-2xl font-bold mb-6 text-center">শিক্ষক রেজিস্ট্রেশন ফর্ম</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="teacher-name">পূর্ণ নাম</Label>
                      <Input id="teacher-name" placeholder="আপনার পূর্ণ নাম লিখুন" />
                    </div>
                    <div>
                      <Label htmlFor="teacher-email">ইমেইল</Label>
                      <Input id="teacher-email" type="email" placeholder="আপনার ইমেইল ঠিকানা লিখুন" />
                    </div>
                    <div>
                      <Label htmlFor="teacher-phone">মোবাইল নম্বর</Label>
                      <Input id="teacher-phone" placeholder="আপনার মোবাইল নম্বর লিখুন" />
                    </div>
                    <div>
                      <Label htmlFor="teacher-password">পাসওয়ার্ড</Label>
                      <Input id="teacher-password" type="password" placeholder="একটি শক্তিশালী পাসওয়ার্ড সেট করুন" />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="teacher-qualification">শিক্ষাগত যোগ্যতা</Label>
                      <Input id="teacher-qualification" placeholder="আপনার সর্বোচ্চ শিক্ষাগত যোগ্যতা লিখুন" />
                    </div>
                    <div>
                      <Label htmlFor="teacher-institution">প্রতিষ্ঠানের নাম</Label>
                      <Input id="teacher-institution" placeholder="আপনার বর্তমান শিক্ষা প্রতিষ্ঠানের নাম লিখুন" />
                    </div>
                    <div>
                      <Label htmlFor="teacher-subject">বিশেষজ্ঞ বিষয়</Label>
                      <Select>
                        <SelectTrigger id="teacher-subject">
                          <SelectValue placeholder="আপনার বিশেষজ্ঞ বিষয় নির্বাচন করুন" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="bangla">বাংলা</SelectItem>
                          <SelectItem value="english">ইংরেজি</SelectItem>
                          <SelectItem value="math">গণিত</SelectItem>
                          <SelectItem value="science">বিজ্ঞান</SelectItem>
                          <SelectItem value="social-science">সমাজ বিজ্ঞান</SelectItem>
                          <SelectItem value="ict">তথ্য ও যোগাযোগ প্রযুক্তি</SelectItem>
                          <SelectItem value="physics">পদার্থবিজ্ঞান</SelectItem>
                          <SelectItem value="chemistry">রসায়ন</SelectItem>
                          <SelectItem value="biology">জীববিজ্ঞান</SelectItem>
                          <SelectItem value="accounting">হিসাববিজ্ঞান</SelectItem>
                          <SelectItem value="business">ব্যবসায় শিক্ষা</SelectItem>
                          <SelectItem value="other">অন্যান্য</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="teacher-experience">শিক্ষকতা অভিজ্ঞতা</Label>
                      <Textarea id="teacher-experience" placeholder="আপনার শিক্ষকতা অভিজ্ঞতা সম্পর্কে সংক্ষেপে লিখুন" />
                    </div>
                  </div>
                </div>
                <div className="mt-8 text-center">
                  <Button size="lg" className="px-8">
                    রেজিস্ট্রেশন সম্পন্ন করুন
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Course Catalog */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-12" initial="hidden" animate="visible" variants={fadeIn}>
            <h2 className="text-3xl font-bold mb-4">কোর্স ক্যাটালগ</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              আমাদের বিস্তৃত কোর্স ক্যাটালগ থেকে আপনার প্রয়োজন অনুযায়ী কোর্স নির্বাচন করুন
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card
              className="cursor-pointer hover:shadow-lg transition-all"
              onClick={() => toggleCourseCategory("primary")}
            >
              <CardContent className="p-6">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <BookOpen className="h-6 w-6 text-blue-600" />
                    <h3 className="text-lg font-medium">প্রাথমিক শিক্ষা</h3>
                  </div>
                  <ChevronDown
                    className={`h-5 w-5 transition-transform ${expandedCourseCategory === "primary" ? "rotate-180" : ""}`}
                  />
                </div>
                {expandedCourseCategory === "primary" && (
                  <div className="mt-4 space-y-2 pl-9">
                    <p className="text-gray-600 hover:text-blue-600 flex items-center gap-2">
                      <ChevronRight className="h-4 w-4" />
                      <span>বাংলা (১ম-৫ম শ্রেণি)</span>
                    </p>
                    <p className="text-gray-600 hover:text-blue-600 flex items-center gap-2">
                      <ChevronRight className="h-4 w-4" />
                      <span>ইংরেজি (১ম-৫ম শ্রেণি)</span>
                    </p>
                    <p className="text-gray-600 hover:text-blue-600 flex items-center gap-2">
                      <ChevronRight className="h-4 w-4" />
                      <span>গণিত (১ম-৫ম শ্রেণি)</span>
                    </p>
                    <p className="text-gray-600 hover:text-blue-600 flex items-center gap-2">
                      <ChevronRight className="h-4 w-4" />
                      <span>প্রাথমিক বিজ্ঞান (১ম-৫ম শ্রেণি)</span>
                    </p>
                    <p className="text-gray-600 hover:text-blue-600 flex items-center gap-2">
                      <ChevronRight className="h-4 w-4" />
                      <span>বাংলাদেশ ও বিশ্বপরিচয় (১ম-৫ম শ্রেণি)</span>
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>

            <Card
              className="cursor-pointer hover:shadow-lg transition-all"
              onClick={() => toggleCourseCategory("secondary")}
            >
              <CardContent className="p-6">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <GraduationCap className="h-6 w-6 text-green-600" />
                    <h3 className="text-lg font-medium">মাধ্যমিক শিক্ষা</h3>
                  </div>
                  <ChevronDown
                    className={`h-5 w-5 transition-transform ${expandedCourseCategory === "secondary" ? "rotate-180" : ""}`}
                  />
                </div>
                {expandedCourseCategory === "secondary" && (
                  <div className="mt-4 space-y-2 pl-9">
                    <p className="text-gray-600 hover:text-blue-600 flex items-center gap-2">
                      <ChevronRight className="h-4 w-4" />
                      <span>বাংলা (৬ষ্ঠ-১০ম শ্রেণি)</span>
                    </p>
                    <p className="text-gray-600 hover:text-blue-600 flex items-center gap-2">
                      <ChevronRight className="h-4 w-4" />
                      <span>ইংরেজি (৬ষ্ঠ-১০ম শ্রেণি)</span>
                    </p>
                    <p className="text-gray-600 hover:text-blue-600 flex items-center gap-2">
                      <ChevronRight className="h-4 w-4" />
                      <span>গণিত (৬ষ্ঠ-১০ম শ্রেণি)</span>
                    </p>
                    <p className="text-gray-600 hover:text-blue-600 flex items-center gap-2">
                      <ChevronRight className="h-4 w-4" />
                      <span>বিজ্ঞান (৬ষ্ঠ-১০ম শ্রেণি)</span>
                    </p>
                    <p className="text-gray-600 hover:text-blue-600 flex items-center gap-2">
                      <ChevronRight className="h-4 w-4" />
                      <span>ইতিহাস (৬ষ্ঠ-১০ম শ্রেণি)</span>
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>

            <Card
              className="cursor-pointer hover:shadow-lg transition-all"
              onClick={() => toggleCourseCategory("higher")}
            >
              <CardContent className="p-6">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <Award className="h-6 w-6 text-purple-600" />
                    <h3 className="text-lg font-medium">উচ্চ মাধ্যমিক</h3>
                  </div>
                  <ChevronDown
                    className={`h-5 w-5 transition-transform ${expandedCourseCategory === "higher" ? "rotate-180" : ""}`}
                  />
                </div>
                {expandedCourseCategory === "higher" && (
                  <div className="mt-4 space-y-2 pl-9">
                    <p className="text-gray-600 hover:text-blue-600 flex items-center gap-2">
                      <ChevronRight className="h-4 w-4" />
                      <span>পদার্থবিজ্ঞান (১১শ-১২শ শ্রেণি)</span>
                    </p>
                    <p className="text-gray-600 hover:text-blue-600 flex items-center gap-2">
                      <ChevronRight className="h-4 w-4" />
                      <span>রসায়ন (১১শ-১২শ শ্রেণি)</span>
                    </p>
                    <p className="text-gray-600 hover:text-blue-600 flex items-center gap-2">
                      <ChevronRight className="h-4 w-4" />
                      <span>জীববিজ্ঞান (১১শ-১২শ শ্রেণি)</span>
                    </p>
                    <p className="text-gray-600 hover:text-blue-600 flex items-center gap-2">
                      <ChevronRight className="h-4 w-4" />
                      <span>উচ্চতর গণিত (১১শ-১২শ শ্রেণি)</span>
                    </p>
                    <p className="text-gray-600 hover:text-blue-600 flex items-center gap-2">
                      <ChevronRight className="h-4 w-4" />
                      <span>ব্যবসায় শিক্ষা (১১শ-১২শ শ্রেণি)</span>
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>

            <Card
              className="cursor-pointer hover:shadow-lg transition-all"
              onClick={() => toggleCourseCategory("vocational")}
            >
              <CardContent className="p-6">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <Briefcase className="h-6 w-6 text-amber-600" />
                    <h3 className="text-lg font-medium">ভোকেশনাল কোর্স</h3>
                  </div>
                  <ChevronDown
                    className={`h-5 w-5 transition-transform ${expandedCourseCategory === "vocational" ? "rotate-180" : ""}`}
                  />
                </div>
                {expandedCourseCategory === "vocational" && (
                  <div className="mt-4 space-y-2 pl-9">
                    <p className="text-gray-600 hover:text-blue-600 flex items-center gap-2">
                      <ChevronRight className="h-4 w-4" />
                      <span>কম্পিউটার প্রোগ্রামিং</span>
                    </p>
                    <p className="text-gray-600 hover:text-blue-600 flex items-center gap-2">
                      <ChevronRight className="h-4 w-4" />
                      <span>ওয়েব ডিজাইন</span>
                    </p>
                    <p className="text-gray-600 hover:text-blue-600 flex items-center gap-2">
                      <ChevronRight className="h-4 w-4" />
                      <span>গ্রাফিক ডিজাইন</span>
                    </p>
                    <p className="text-gray-600 hover:text-blue-600 flex items-center gap-2">
                      <ChevronRight className="h-4 w-4" />
                      <span>ইলেকট্রিক্যাল</span>
                    </p>
                    <p className="text-gray-600 hover:text-blue-600 flex items-center gap-2">
                      <ChevronRight className="h-4 w-4" />
                      <span>টুরিজম এন্ড হসপিটালিটি</span>
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>

            <Card
              className="cursor-pointer hover:shadow-lg transition-all"
              onClick={() => toggleCourseCategory("computer")}
            >
              <CardContent className="p-6">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <Laptop className="h-6 w-6 text-blue-600" />
                    <h3 className="text-lg font-medium">কম্পিউটার শিক্ষা</h3>
                  </div>
                  <ChevronDown
                    className={`h-5 w-5 transition-transform ${expandedCourseCategory === "computer" ? "rotate-180" : ""}`}
                  />
                </div>
                {expandedCourseCategory === "computer" && (
                  <div className="mt-4 space-y-2 pl-9">
                    <p className="text-gray-600 hover:text-blue-600 flex items-center gap-2">
                      <ChevronRight className="h-4 w-4" />
                      <span>বেসিক কম্পিউটার</span>
                    </p>
                    <p className="text-gray-600 hover:text-blue-600 flex items-center gap-2">
                      <ChevronRight className="h-4 w-4" />
                      <span>মাইক্রোসফট অফিস</span>
                    </p>
                    <p className="text-gray-600 hover:text-blue-600 flex items-center gap-2">
                      <ChevronRight className="h-4 w-4" />
                      <span>প্রোগ্রামিং ভাষা</span>
                    </p>
                    <p className="text-gray-600 hover:text-blue-600 flex items-center gap-2">
                      <ChevronRight className="h-4 w-4" />
                      <span>ওয়েব ডেভেলপমেন্ট</span>
                    </p>
                    <p className="text-gray-600 hover:text-blue-600 flex items-center gap-2">
                      <ChevronRight className="h-4 w-4" />
                      <span>মোবাইল অ্যাপ ডেভেলপমেন্ট</span>
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>

            <Card
              className="cursor-pointer hover:shadow-lg transition-all"
              onClick={() => toggleCourseCategory("language")}
            >
              <CardContent className="p-6">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <Globe className="h-6 w-6 text-green-600" />
                    <h3 className="text-lg font-medium">ভাষা শিক্ষা</h3>
                  </div>
                  <ChevronDown
                    className={`h-5 w-5 transition-transform ${expandedCourseCategory === "language" ? "rotate-180" : ""}`}
                  />
                </div>
                {expandedCourseCategory === "language" && (
                  <div className="mt-4 space-y-2 pl-9">
                    <p className="text-gray-600 hover:text-blue-600 flex items-center gap-2">
                      <ChevronRight className="h-4 w-4" />
                      <span>ইংরেজি ভাষা</span>
                    </p>
                    <p className="text-gray-600 hover:text-blue-600 flex items-center gap-2">
                      <ChevronRight className="h-4 w-4" />
                      <span>আরবি ভাষা</span>
                    </p>
                    <p className="text-gray-600 hover:text-blue-600 flex items-center gap-2">
                      <ChevronRight className="h-4 w-4" />
                      <span>হিন্দি ভাষা</span>
                    </p>
                    <p className="text-gray-600 hover:text-blue-600 flex items-center gap-2">
                      <ChevronRight className="h-4 w-4" />
                      <span>জাপানি ভাষা</span>
                    </p>
                    <p className="text-gray-600 hover:text-blue-600 flex items-center gap-2">
                      <ChevronRight className="h-4 w-4" />
                      <span>কোরিয়ান ভাষা</span>
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>

            <Card
              className="cursor-pointer hover:shadow-lg transition-all"
              onClick={() => toggleCourseCategory("exam")}
            >
              <CardContent className="p-6">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <FileText className="h-6 w-6 text-red-600" />
                    <h3 className="text-lg font-medium">পরীক্ষা প্রস্তুতি</h3>
                  </div>
                  <ChevronDown
                    className={`h-5 w-5 transition-transform ${expandedCourseCategory === "exam" ? "rotate-180" : ""}`}
                  />
                </div>
                {expandedCourseCategory === "exam" && (
                  <div className="mt-4 space-y-2 pl-9">
                    <p className="text-gray-600 hover:text-blue-600 flex items-center gap-2">
                      <ChevronRight className="h-4 w-4" />
                      <span>পিএসসি প্রস্তুতি</span>
                    </p>
                    <p className="text-gray-600 hover:text-blue-600 flex items-center gap-2">
                      <ChevronRight className="h-4 w-4" />
                      <span>জেএসসি প্রস্তুতি</span>
                    </p>
                    <p className="text-gray-600 hover:text-blue-600 flex items-center gap-2">
                      <ChevronRight className="h-4 w-4" />
                      <span>এসএসসি প্রস্তুতি</span>
                    </p>
                    <p className="text-gray-600 hover:text-blue-600 flex items-center gap-2">
                      <ChevronRight className="h-4 w-4" />
                      <span>এইচএসসি প্রস্তুতি</span>
                    </p>
                    <p className="text-gray-600 hover:text-blue-600 flex items-center gap-2">
                      <ChevronRight className="h-4 w-4" />
                      <span>বিশ্ববিদ্যালয় ভর্তি প্রস্তুতি</span>
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>

            <Card
              className="cursor-pointer hover:shadow-lg transition-all"
              onClick={() => toggleCourseCategory("teacher")}
            >
              <CardContent className="p-6">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <Users className="h-6 w-6 text-purple-600" />
                    <h3 className="text-lg font-medium">শিক্ষক প্রশিক্ষণ</h3>
                  </div>
                  <ChevronDown
                    className={`h-5 w-5 transition-transform ${expandedCourseCategory === "teacher" ? "rotate-180" : ""}`}
                  />
                </div>
                {expandedCourseCategory === "teacher" && (
                  <div className="mt-4 space-y-2 pl-9">
                    <p className="text-gray-600 hover:text-blue-600 flex items-center gap-2">
                      <ChevronRight className="h-4 w-4" />
                      <span>আধুনিক শিক্ষাদান পদ্ধতি</span>
                    </p>
                    <p className="text-gray-600 hover:text-blue-600 flex items-center gap-2">
                      <ChevronRight className="h-4 w-4" />
                      <span>ডিজিটাল কন্টেন্ট তৈরি</span>
                    </p>
                    <p className="text-gray-600 hover:text-blue-600 flex items-center gap-2">
                      <ChevronRight className="h-4 w-4" />
                      <span>শ্রেণিকক্ষ ব্যবস্থাপনা</span>
                    </p>
                    <p className="text-gray-600 hover:text-blue-600 flex items-center gap-2">
                      <ChevronRight className="h-4 w-4" />
                      <span>শিক্ষার্থী মূল্যায়ন কৌশল</span>
                    </p>
                    <p className="text-gray-600 hover:text-blue-600 flex items-center gap-2">
                      <ChevronRight className="h-4 w-4" />
                      <span>অনলাইন শিক্ষাদান কৌশল</span>
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="px-8">
              সম্পূর্ণ কোর্স ক্যাটালগ দেখুন
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-12" initial="hidden" animate="visible" variants={fadeIn}>
            <h2 className="text-3xl font-bold mb-4">আমাদের প্ল্যাটফর্মের বৈশিষ্ট্য</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              আমাদের অনলাইন শিক্ষা প্ল্যাটফর্ম আপনার শিক্ষা অভিজ্ঞতাকে আরও সমৃদ্ধ ও কার্যকর করার জন্য বিভিন্ন বৈশিষ্ট্য প্রদান করে
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Video className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-medium">ইন্টারেক্টিভ ভিডিও লেকচার</h3>
                </div>
                <p className="text-gray-600">
                  আকর্ষণীয় ও ইন্টারেক্টিভ ভিডিও লেকচারের মাধ্যমে জটিল বিষয়গুলো সহজে বুঝুন। ভিডিওর মধ্যে কুইজ ও প্রশ্নোত্তর অংশ রয়েছে।
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <Clock className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-medium">২৪/৭ অ্যাক্সেস</h3>
                </div>
                <p className="text-gray-600">
                  যেকোনো সময়, যেকোনো স্থান থেকে আমাদের সকল কোর্স ও শিক্ষা উপকরণে অ্যাক্সেস পান। আপনার সুবিধামত সময়ে শিখুন।
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-purple-100 p-3 rounded-full">
                    <MessageSquare className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-medium">লাইভ সাপোর্ট</h3>
                </div>
                <p className="text-gray-600">
                  অভিজ্ঞ শিক্ষকদের সাথে লাইভ চ্যাট ও ভিডিও কল এর মাধ্যমে আপনার প্রশ্ন ও সমস্যাগুলো সমাধান করুন।
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-amber-100 p-3 rounded-full">
                    <Calendar className="h-6 w-6 text-amber-600" />
                  </div>
                  <h3 className="text-xl font-medium">নিয়মিত লাইভ ক্লাস</h3>
                </div>
                <p className="text-gray-600">
                  প্রতি সপ্তাহে নিয়মিত লাইভ ক্লাসের মাধ্যমে শিক্ষকদের সাথে সরাসরি যোগাযোগ ও প্রশ্নোত্তর সেশনে অংশগ্রহণ করুন।
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-red-100 p-3 rounded-full">
                    <BarChart className="h-6 w-6 text-red-600" />
                  </div>
                  <h3 className="text-xl font-medium">অগ্রগতি ট্র্যাকিং</h3>
                </div>
                <p className="text-gray-600">
                  আপনার শিক্ষা অগ্রগতি সহজেই ট্র্যাক করুন। বিস্তারিত রিপোর্ট ও বিশ্লেষণের মাধ্যমে আপনার দুর্বল দিকগুলো চিহ্নিত করুন।
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <FileText className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-medium">ডাউনলোডেবল রিসোর্স</h3>
                </div>
                <p className="text-gray-600">
                  সকল কোর্সের জন্য ডাউনলোডেবল পিডিএফ, নোট, ওয়ার্কশিট ও অন্যান্য শিক্ষা উপকরণ অ্যাক্সেস করুন।
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-12" initial="hidden" animate="visible" variants={fadeIn}>
            <h2 className="text-3xl font-bold mb-4">আমাদের শিক্ষার্থীদের মতামত</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">আমাদের প্ল্যাটফর্মে শিক্ষা গ্রহণকারী শিক্ষার্থীদের অভিজ্ঞতা জানুন</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden">
                    <Image src="/placeholder.svg?height=100&width=100" alt="Student" fill className="object-cover" />
                  </div>
                  <div>
                    <h3 className="font-medium">সাদিয়া আক্তার</h3>
                    <p className="text-sm text-gray-600">১০ম শ্রেণি, কক্সবাজার সরকারি বালিকা উচ্চ বিদ্যালয়</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "এই প্ল্যাটফর্মে যোগ দেওয়ার পর থেকে আমার পড়াশোনায় অনেক উন্নতি হয়েছে। বিশেষ করে গণিত ও বিজ্ঞান বিষয়ে আমার দুর্বলতাগুলো
                  কাটিয়ে উঠতে সক্ষম হয়েছি। শিক্ষকদের সহজ ব্যাখ্যা ও ইন্টারেক্টিভ কন্টেন্ট আমাকে অনেক সাহায্য করেছে।"
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden">
                    <Image src="/placeholder.svg?height=100&width=100" alt="Student" fill className="object-cover" />
                  </div>
                  <div>
                    <h3 className="font-medium">রাফি হাসান</h3>
                    <p className="text-sm text-gray-600">১২শ শ্রেণি, কক্সবাজার সরকারি কলেজ</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "উচ্চ মাধ্যমিক পরীক্ষার প্রস্তুতির জন্য এই প্ল্যাটফর্ম আমার জন্য অত্যন্ত কার্যকর হয়েছে। পদার্থবিজ্ঞান ও রসায়নের জটিল অধ্যায়গুলো
                  এখানে খুব সহজভাবে ব্যাখ্যা করা হয়েছে। লাইভ ক্লাসগুলো বিশেষভাবে উপকারী, যেখানে আমি সরাসরি প্রশ্ন করতে পারি।"
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden">
                    <Image src="/placeholder.svg?height=100&width=100" alt="Teacher" fill className="object-cover" />
                  </div>
                  <div>
                    <h3 className="font-medium">আবদুল করিম</h3>
                    <p className="text-sm text-gray-600">গণিত শিক্ষক, কক্সবাজার মডেল স্কুল</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "একজন শিক্ষক হিসেবে এই প্ল্যাটফর্ম আমাকে আধুনিক শিক্ষাদান পদ্ধতি ও ডিজিটাল কন্টেন্ট তৈরিতে সাহায্য করেছে। শিক্ষক প্রশিক্ষণ
                  কোর্সগুলো অত্যন্ত উপকারী। এখন আমি আমার ছাত্রছাত্রীদের আরও কার্যকরভাবে শিক্ষা দিতে পারি।"
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-12" initial="hidden" animate="visible" variants={fadeIn}>
            <h2 className="text-3xl font-bold mb-4">সাধারণ জিজ্ঞাসা</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">আমাদের প্ল্যাটফর্ম সম্পর্কে সাধারণ প্রশ্ন ও উত্তর</p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border rounded-lg p-2">
                <AccordionTrigger className="text-lg font-medium px-4">
                  এই প্ল্যাটফর্মে কীভাবে রেজিস্ট্রেশন করব?
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4 text-gray-600">
                  রেজিস্ট্রেশন করার জন্য "শিক্ষার্থী রেজিস্ট্রেশন" বা "শিক্ষক রেজিস্ট্রেশন" বাটনে ক্লিক করুন। তারপর প্রয়োজনীয় তথ্য দিয়ে ফর্ম
                  পূরণ করুন। রেজিস্ট্রেশন সম্পন্ন হওয়ার পর আপনি আপনার ইমেইলে একটি নিশ্চিতকরণ লিংক পাবেন।
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border rounded-lg p-2">
                <AccordionTrigger className="text-lg font-medium px-4">কোর্সগুলোর ফি কত?</AccordionTrigger>
                <AccordionContent className="px-4 pb-4 text-gray-600">
                  আমাদের কোর্সগুলোর ফি বিভিন্ন ধরনের। কিছু বেসিক কোর্স বিনামূল্যে উপলব্ধ, আবার কিছু প্রিমিয়াম কোর্সের জন্য ফি প্রযোজ্য।
                  প্রতিটি কোর্সের বিস্তারিত পেইজে ফি সম্পর্কে তথ্য দেওয়া আছে। কক্সবাজার জেলার মেধাবী ও অসচ্ছল শিক্ষার্থীদের জন্য বিশেষ
                  স্কলারশিপ সুবিধা রয়েছে।
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border rounded-lg p-2">
                <AccordionTrigger className="text-lg font-medium px-4">
                  কোর্স কন্টেন্ট কতদিন অ্যাক্সেস করতে পারব?
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4 text-gray-600">
                  একবার কোর্সে এনরোল করলে আপনি সাধারণত ১ বছর পর্যন্ত সেই কোর্সের সকল কন্টেন্ট অ্যাক্সেস করতে পারবেন। কিছু বিশেষ কোর্সের
                  ক্ষেত্রে এই সময়সীমা ভিন্ন হতে পারে, যা কোর্স বিবরণীতে উল্লেখ করা থাকবে।
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border rounded-lg p-2">
                <AccordionTrigger className="text-lg font-medium px-4">লাইভ ক্লাস কখন অনুষ্ঠিত হয়?</AccordionTrigger>
                <AccordionContent className="px-4 pb-4 text-gray-600">
                  লাইভ ক্লাসগুলো সাধারণত সপ্তাহান্তে (শুক্রবার-শনিবার) এবং বিকেল ৪টা থেকে রাত ৯টার মধ্যে অনুষ্ঠিত হয়। প্রতিটি কোর্সের জন্য
                  নির্দিষ্ট সময়সূচি রয়েছে, যা আপনার ড্যাশবোর্ডে দেখতে পাবেন। লাইভ ক্লাসের আগে ইমেইল ও এসএমএস নোটিফিকেশন পাঠানো হয়।
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border rounded-lg p-2">
                <AccordionTrigger className="text-lg font-medium px-4">
                  আমি কি মোবাইল ফোন থেকে কোর্স অ্যাক্সেস করতে পারব?
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4 text-gray-600">
                  হ্যাঁ, আমাদের প্ল্যাটফর্ম মোবাইল ফ্রেন্ডলি। আপনি যেকোনো স্মার্টফোন বা ট্যাবলেট থেকে আমাদের ওয়েবসাইট ব্যবহার করতে পারবেন।
                  এছাড়াও, আমাদের অ্যান্ড্রয়েড ও আইওএস অ্যাপ রয়েছে, যা ডাউনলোড করে আরও সহজে কোর্স অ্যাক্সেস করতে পারবেন।
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="border rounded-lg p-2">
                <AccordionTrigger className="text-lg font-medium px-4">
                  ইন্টারনেট কানেকশন না থাকলে কি কোর্স দেখতে পারব?
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4 text-gray-600">
                  হ্যাঁ, আমাদের মোবাইল অ্যাপে অফলাইন মোড রয়েছে। আপনি ইন্টারনেট কানেকশন থাকাকালীন ভিডিও ও কন্টেন্ট ডাউনলোড করে রাখতে পারেন,
                  যা পরে অফলাইনে দেখতে পারবেন। তবে লাইভ ক্লাস ও কুইজে অংশগ্রহণের জন্য ইন্টারনেট কানেকশন প্রয়োজন।
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-indigo-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div className="max-w-3xl mx-auto" initial="hidden" animate="visible" variants={fadeIn}>
            <h2 className="text-3xl font-bold mb-6">আজই আমাদের অনলাইন শিক্ষা প্ল্যাটফর্মে যোগ দিন</h2>
            <p className="text-xl mb-8">
              কক্সবাজারের শিক্ষার্থীদের জন্য বিশেষভাবে ডিজাইন করা আমাদের প্ল্যাটফর্মে যোগ দিয়ে আপনার শিক্ষা জীবনকে আরও সমৃদ্ধ করুন
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50">
                শিক্ষার্থী হিসেবে যোগ দিন
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                শিক্ষক হিসেবে যোগ দিন
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

