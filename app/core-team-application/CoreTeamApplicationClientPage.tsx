"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import {
  CheckCircle2,
  Award,
  Briefcase,
  Target,
  TrendingUp,
  Globe,
  ArrowRight,
  CheckCircle,
  DollarSign,
  Zap,
  GraduationCap,
  BookOpen,
} from "lucide-react"

export default function CoreTeamApplicationClientPage() {
  const router = useRouter()
  const [progress, setProgress] = useState(0)
  const [currentStep, setCurrentStep] = useState(1)
  const [activeTab, setActiveTab] = useState("about")
  const [formState, setFormState] = useState({
    // Personal Information
    name: "",
    email: "",
    phone: "",
    address: "",
    age: "",
    gender: "",

    // Professional Information
    education: "",
    institution: "",
    degree: "",
    experience: "",
    currentRole: "",
    currentCompany: "",

    // Skills & Expertise
    skills: "",
    languages: "",
    certifications: "",

    // Motivation & Availability
    motivation: "",
    availability: "",
    expectedSalary: "",
    noticePeriod: "",

    // References
    reference1Name: "",
    reference1Contact: "",
    reference1Relation: "",
    reference2Name: "",
    reference2Contact: "",
    reference2Relation: "",

    // Additional
    heardFrom: "",
    questions: "",

    submitted: false,
  })

  useEffect(() => {
    // Calculate progress based on current step
    const totalSteps = 5
    setProgress((currentStep / totalSteps) * 100)
  }, [currentStep])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const nextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, 5))
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1))
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would send this data to a server
    console.log("Form submitted:", formState)
    setFormState((prev) => ({ ...prev, submitted: true }))
    // Simulate form submission
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }, 500)
  }

  const scrollToApply = () => {
    setActiveTab("apply")
    const applySection = document.getElementById("apply-section")
    if (applySection) {
      applySection.scrollIntoView({ behavior: "smooth" })
    }
  }

  if (formState.submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-16 px-4">
        <Card className="max-w-3xl mx-auto border-none shadow-xl">
          <CardHeader className="text-center pb-2">
            <div className="mx-auto w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <CheckCircle2 className="h-10 w-10 text-green-600" />
            </div>
            <CardTitle className="text-3xl font-bold text-primary">আবেদন সফলভাবে জমা হয়েছে</CardTitle>
            <CardDescription className="text-xl mt-2">আপনার আবেদন আমাদের কাছে পৌঁছেছে</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 text-center pt-6">
            <p className="text-lg">
              প্রিয় {formState.name}, আপনার আগ্রহের জন্য ধন্যবাদ। আমরা আপনার আবেদন পর্যালোচনা করব এবং শীঘ্রই আপনার সাথে যোগাযোগ করব।
            </p>
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-md text-blue-700">
                আপনার প্রদত্ত ইমেইল ({formState.email}) এবং ফোন নম্বরে ({formState.phone}) আমরা যোগাযোগ করব।
              </p>
            </div>
            <div className="flex flex-col space-y-4 items-center">
              <p className="text-sm text-gray-500">
                আপনার আবেদন রেফারেন্স নম্বর: <span className="font-bold">CT-{Math.floor(Math.random() * 10000)}</span>
              </p>
              <p className="text-sm text-gray-500">আবেদন জমা দেওয়ার তারিখ: {new Date().toLocaleDateString()}</p>
            </div>
          </CardContent>
          <CardFooter className="flex justify-center pt-2 pb-8">
            <Button onClick={() => router.push("/")} variant="outline" className="mr-2">
              হোম পেইজে ফিরে যান
            </Button>
            <Button onClick={() => window.print()}>আবেদন প্রিন্ট করুন</Button>
          </CardFooter>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto py-10 px-4">
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Header Section */}
          <div className="text-center space-y-4">
            <div className="inline-block bg-blue-100 px-4 py-1 rounded-full mb-2">
              <span className="text-blue-700 font-medium">TRUSTED ALLY - Cox's Bazar</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-primary">CoreTeam of TRUSTED ALLY - Cox's Bazar</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              কক্সবাজারের পর্যটন শিল্পের ভবিষ্যৎ গড়ার অংশীদার হোন
            </p>
          </div>

          {/* Navigation Tabs */}
          <Tabs defaultValue="about" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="flex justify-center">
              <TabsList className="grid grid-cols-4 w-full max-w-2xl">
                <TabsTrigger value="about">প্রোগ্রাম সম্পর্কে</TabsTrigger>
                <TabsTrigger value="benefits">সুবিধাসমূহ</TabsTrigger>
                <TabsTrigger value="eligibility">যোগ্যতা</TabsTrigger>
                <TabsTrigger value="apply">আবেদন করুন</TabsTrigger>
              </TabsList>
            </div>

            {/* About the Program */}
            <TabsContent value="about" className="mt-6">
              <Card className="border-none shadow-lg">
                <CardHeader className="pb-2">
                  <CardTitle className="text-2xl flex items-center">
                    <BookOpen className="mr-2 h-6 w-6 text-blue-600" />
                    প্রোগ্রাম সম্পর্কে
                  </CardTitle>
                  <CardDescription className="text-lg">TRUSTED ALLY - Cox's Bazar কোর টিম সম্পর্কে জানুন</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold text-primary">আমাদের লক্ষ্য</h3>
                      <p className="text-gray-700">
                        TRUSTED ALLY - Cox's Bazar এর কোর টিম হল প্রকল্পের মূল চালিকাশক্তি। আমরা কক্সবাজারের পর্যটন শিল্পকে নতুন
                        উচ্চতায় নিয়ে যাওয়ার লক্ষ্যে কাজ করছি। আমাদের লক্ষ্য হল টেকসই, দায়িত্বশীল এবং সমৃদ্ধ পর্যটন ব্যবস্থা গড়ে তোলা যা
                        স্থানীয় সম্প্রদায়কে সমৃদ্ধ করবে এবং পর্যটকদের জন্য অবিস্মরণীয় অভিজ্ঞতা তৈরি করবে।
                      </p>
                      <h3 className="text-xl font-semibold text-primary">কোর টিমের ভূমিকা</h3>
                      <p className="text-gray-700">
                        কোর টিম সদস্যরা প্রকল্পের কৌশলগত পরিকল্পনা, বাস্তবায়ন ও পরিচালনায় গুরুত্বপূর্ণ ভূমিকা পালন করবেন। তারা শুধু কর্মচারী নন,
                        বরং প্রকল্পের ভিশনের অংশীদার হিসেবে কাজ করবেন। কোর টিম সদস্যরা নেতৃত্ব দেবেন, উদ্ভাবনী ধারণা উপস্থাপন করবেন
                        এবং প্রকল্পের সাফল্যে অবদান রাখবেন।
                      </p>
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold text-primary">প্রোগ্রামের বিবরণ</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">
                            ৫-৭ জন উদ্যমী, দক্ষ ও প্রতিশ্রুতিশীল ব্যক্তিকে নিয়ে গঠিত হবে কোর টিম
                          </span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">প্রকল্পের কৌশলগত সিদ্ধান্ত গ্রহণে অংশগ্রহণ করবেন</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">
                            পর্যটন, ব্যবসা, মার্কেটিং, আইটি, ফাইন্যান্স সহ বিভিন্ন ক্ষেত্রের বিশেষজ্ঞদের সমন্বয়ে গঠিত হবে
                          </span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">পূর্ণকালীন বা খণ্ডকালীন ভিত্তিতে কাজ করার সুযোগ</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">প্রকল্পের সাফল্যের সাথে সাথে বৃদ্ধি পাবে দায়িত্ব ও সুযোগ-সুবিধা</span>
                        </li>
                      </ul>
                      <h3 className="text-xl font-semibold text-primary">সময়কাল</h3>
                      <p className="text-gray-700">
                        কোর টিম সদস্যদের নিয়োগ দীর্ঘমেয়াদি। প্রকল্পের সাফল্য ও অগ্রগতির সাথে সাথে কোর টিম সদস্যদের দায়িত্ব ও
                        সুযোগ-সুবিধা বৃদ্ধি পাবে।
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-center mt-6">
                    <Button onClick={scrollToApply} className="px-8">
                      আবেদন করুন <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Benefits */}
            <TabsContent value="benefits" className="mt-6">
              <Card className="border-none shadow-lg">
                <CardHeader className="pb-2">
                  <CardTitle className="text-2xl flex items-center">
                    <Award className="mr-2 h-6 w-6 text-blue-600" />
                    সুবিধাসমূহ
                  </CardTitle>
                  <CardDescription className="text-lg">কোর টিম সদস্য হিসেবে আপনি যে সুবিধাগুলি পাবেন</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Card className="bg-gradient-to-br from-blue-50 to-white border-none shadow-md hover:shadow-lg transition-shadow">
                      <CardContent className="pt-6">
                        <div className="flex flex-col items-center text-center space-y-4">
                          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                            <Award className="h-6 w-6 text-blue-600" />
                          </div>
                          <h3 className="font-bold text-lg">নেতৃত্বমূলক অবস্থান</h3>
                          <p className="text-gray-600">প্রকল্পের কৌশলগত সিদ্ধান্ত গ্রহণে অংশগ্রহণ ও নেতৃত্ব দেওয়ার সুযোগ</p>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-gradient-to-br from-blue-50 to-white border-none shadow-md hover:shadow-lg transition-shadow">
                      <CardContent className="pt-6">
                        <div className="flex flex-col items-center text-center space-y-4">
                          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                            <DollarSign className="h-6 w-6 text-blue-600" />
                          </div>
                          <h3 className="font-bold text-lg">আকর্ষণীয় বেতন</h3>
                          <p className="text-gray-600">আপনার দক্ষতা ও অভিজ্ঞতা অনুযায়ী প্রতিযোগিতামূলক বেতন ও সুযোগ-সুবিধা</p>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-gradient-to-br from-blue-50 to-white border-none shadow-md hover:shadow-lg transition-shadow">
                      <CardContent className="pt-6">
                        <div className="flex flex-col items-center text-center space-y-4">
                          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                            <TrendingUp className="h-6 w-6 text-blue-600" />
                          </div>
                          <h3 className="font-bold text-lg">ক্যারিয়ার উন্নয়ন</h3>
                          <p className="text-gray-600">পেশাগত উন্নয়ন, প্রশিক্ষণ ও ক্যারিয়ার অগ্রগতির অসাধারণ সুযোগ</p>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-gradient-to-br from-blue-50 to-white border-none shadow-md hover:shadow-lg transition-shadow">
                      <CardContent className="pt-6">
                        <div className="flex flex-col items-center text-center space-y-4">
                          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                            <Globe className="h-6 w-6 text-blue-600" />
                          </div>
                          <h3 className="font-bold text-lg">নেটওয়ার্কিং</h3>
                          <p className="text-gray-600">স্থানীয় ও আন্তর্জাতিক পর্যটন শিল্পের বিশেষজ্ঞদের সাথে যোগাযোগের সুযোগ</p>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-gradient-to-br from-blue-50 to-white border-none shadow-md hover:shadow-lg transition-shadow">
                      <CardContent className="pt-6">
                        <div className="flex flex-col items-center text-center space-y-4">
                          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                            <Target className="h-6 w-6 text-blue-600" />
                          </div>
                          <h3 className="font-bold text-lg">প্রভাব সৃষ্টি</h3>
                          <p className="text-gray-600">
                            কক্সবাজারের পর্যটন শিল্পের ভবিষ্যৎ গড়ার মাধ্যমে সমাজে ইতিবাচক প্রভাব ফেলার সুযোগ
                          </p>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-gradient-to-br from-blue-50 to-white border-none shadow-md hover:shadow-lg transition-shadow">
                      <CardContent className="pt-6">
                        <div className="flex flex-col items-center text-center space-y-4">
                          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                            <Zap className="h-6 w-6 text-blue-600" />
                          </div>
                          <h3 className="font-bold text-lg">উদ্ভাবনী পরিবেশ</h3>
                          <p className="text-gray-600">নতুন ধারণা উপস্থাপন ও বাস্তবায়নের জন্য উদ্ভাবনী ও সৃজনশীল কাজের পরিবেশ</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="flex justify-center mt-8">
                    <Button onClick={scrollToApply} className="px-8">
                      আবেদন করুন <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Eligibility */}
            <TabsContent value="eligibility" className="mt-6">
              <Card className="border-none shadow-lg">
                <CardHeader className="pb-2">
                  <CardTitle className="text-2xl flex items-center">
                    <GraduationCap className="mr-2 h-6 w-6 text-blue-600" />
                    যোগ্যতা
                  </CardTitle>
                  <CardDescription className="text-lg">কোর টিম সদস্য হওয়ার জন্য প্রয়োজনীয় যোগ্যতা</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <div className="space-y-3">
                        <h3 className="text-xl font-semibold text-primary">শিক্ষাগত যোগ্যতা</h3>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">
                              পর্যটন, ব্যবসা, মার্কেটিং, আইটি, ফাইন্যান্স বা সম্পর্কিত বিষয়ে স্নাতক ডিগ্রি
                            </span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">সম্পর্কিত ক্ষেত্রে স্নাতকোত্তর ডিগ্রি থাকলে অগ্রাধিকার দেওয়া হবে</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">প্রাসঙ্গিক পেশাদার সার্টিফিকেশন থাকলে অতিরিক্ত সুবিধা</span>
                          </li>
                        </ul>
                      </div>

                      <div className="space-y-3">
                        <h3 className="text-xl font-semibold text-primary">অভিজ্ঞতা</h3>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">সম্পর্কিত ক্ষেত্রে কমপক্ষে ২-৫ বছরের কাজের অভিজ্ঞতা</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">পর্যটন শিল্পে কাজের অভিজ্ঞতা থাকলে অগ্রাধিকার দেওয়া হবে</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">
                              প্রকল্প ব্যবস্থাপনা, টিম লিডারশিপ বা ব্যবসা উন্নয়নে অভিজ্ঞতা থাকলে অতিরিক্ত সুবিধা
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div className="space-y-3">
                        <h3 className="text-xl font-semibold text-primary">দক্ষতা ও যোগ্যতা</h3>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">নেতৃত্ব দেওয়ার ক্ষমতা ও দলগত কাজে দক্ষতা</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">উদ্ভাবনী চিন্তাভাবনা ও সমস্যা সমাধানের দক্ষতা</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">ইংরেজি ও বাংলায় উন্নত যোগাযোগ দক্ষতা</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">ডিজিটাল টুলস ও প্রযুক্তি ব্যবহারে দক্ষতা</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">সময় ব্যবস্থাপনা ও সংগঠন দক্ষতা</span>
                          </li>
                        </ul>
                      </div>

                      <div className="space-y-3">
                        <h3 className="text-xl font-semibold text-primary">ব্যক্তিগত গুণাবলী</h3>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">কক্সবাজারের পর্যটন শিল্পের প্রতি আন্তরিক আগ্রহ</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">উচ্চ নৈতিক মান ও পেশাদারিত্ব</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">টেকসই ও দায়িত্বশীল পর্যটনের প্রতি অঙ্গীকার</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">উদ্যোক্তা মনোভাব ও উদ্যমী মানসিকতা</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center mt-8">
                    <Button onClick={scrollToApply} className="px-8">
                      আবেদন করুন <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Apply */}
            <TabsContent value="apply" className="mt-6" id="apply-section">
              <Card className="border-none shadow-lg">
                <CardHeader className="pb-2">
                  <CardTitle className="text-2xl flex items-center">
                    <Briefcase className="mr-2 h-6 w-6 text-blue-600" />
                    আবেদন করুন
                  </CardTitle>
                  <CardDescription className="text-lg">কোর টিম সদস্য হওয়ার জন্য আবেদন ফরম পূরণ করুন</CardDescription>
                </CardHeader>
                <CardContent>
                  {/* Progress Bar */}
                  <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden mb-4">
                    <div
                      className="bg-blue-600 h-full transition-all duration-300 ease-in-out"
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>

                  <div className="flex justify-between text-sm text-gray-500 px-1 mb-6">
                    <span className={currentStep >= 1 ? "text-blue-600 font-medium" : ""}>ব্যক্তিগত তথ্য</span>
                    <span className={currentStep >= 2 ? "text-blue-600 font-medium" : ""}>পেশাগত তথ্য</span>
                    <span className={currentStep >= 3 ? "text-blue-600 font-medium" : ""}>দক্ষতা</span>
                    <span className={currentStep >= 4 ? "text-blue-600 font-medium" : ""}>প্রেরণা</span>
                    <span className={currentStep >= 5 ? "text-blue-600 font-medium" : ""}>রেফারেন্স</span>
                  </div>

                  <Card className="border shadow-sm">
                    <CardHeader className="pb-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <CardTitle className="text-xl">
                            {currentStep === 1 && "ব্যক্তিগত তথ্য"}
                            {currentStep === 2 && "পেশাগত তথ্য"}
                            {currentStep === 3 && "দক্ষতা ও বিশেষজ্ঞতা"}
                            {currentStep === 4 && "প্রেরণা ও উপলব্ধতা"}
                            {currentStep === 5 && "রেফারেন্স ও অতিরিক্ত তথ্য"}
                          </CardTitle>
                          <CardDescription>
                            {currentStep === 1 && "আপনার ব্যক্তিগত তথ্য প্রদান করুন"}
                            {currentStep === 2 && "আপনার শিক্ষাগত ও পেশাগত অভিজ্ঞতা সম্পর্কে জানান"}
                            {currentStep === 3 && "আপনার দক্ষতা ও বিশেষজ্ঞতা সম্পর্কে বিস্তারিত লিখুন"}
                            {currentStep === 4 && "কেন আপনি কোর টিমে যোগ দিতে চান এবং আপনার উপলব্ধতা সম্পর্কে জানান"}
                            {currentStep === 5 && "আপনার রেফারেন্স ও অতিরিক্তিক্ত তথ্য প্রদান করুন"}
                          </CardDescription>
                        </div>
                        <Badge variant="outline" className="bg-blue-50 text-blue-700 px-3 py-1">
                          ধাপ {currentStep}/5
                        </Badge>
                      </div>
                    </CardHeader>

                    <CardContent>
                      <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Step 1: Personal Information */}
                        {currentStep === 1 && (
                          <div className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              <div className="space-y-2">
                                <Label htmlFor="name">পূর্ণ নাম</Label>
                                <Input
                                  id="name"
                                  name="name"
                                  placeholder="আপনার পূর্ণ নাম লিখুন"
                                  value={formState.name}
                                  onChange={handleChange}
                                  required
                                />
                              </div>

                              <div className="space-y-2">
                                <Label htmlFor="email">ইমেইল</Label>
                                <Input
                                  id="email"
                                  name="email"
                                  type="email"
                                  placeholder="আপনার ইমেইল ঠিকানা"
                                  value={formState.email}
                                  onChange={handleChange}
                                  required
                                />
                              </div>

                              <div className="space-y-2">
                                <Label htmlFor="phone">মোবাইল নম্বর</Label>
                                <Input
                                  id="phone"
                                  name="phone"
                                  placeholder="আপনার মোবাইল নম্বর"
                                  value={formState.phone}
                                  onChange={handleChange}
                                  required
                                />
                              </div>

                              <div className="space-y-2">
                                <Label htmlFor="age">বয়স</Label>
                                <Input
                                  id="age"
                                  name="age"
                                  placeholder="আপনার বয়স"
                                  value={formState.age}
                                  onChange={handleChange}
                                  required
                                />
                              </div>

                              <div className="space-y-2 md:col-span-2">
                                <Label htmlFor="address">ঠিকানা</Label>
                                <Input
                                  id="address"
                                  name="address"
                                  placeholder="আপনার বর্তমান ঠিকানা"
                                  value={formState.address}
                                  onChange={handleChange}
                                  required
                                />
                              </div>

                              <div className="space-y-2 md:col-span-2">
                                <Label htmlFor="gender">লিঙ্গ</Label>
                                <RadioGroup
                                  defaultValue={formState.gender}
                                  onValueChange={(value) => handleSelectChange("gender", value)}
                                  className="flex space-x-4"
                                >
                                  <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="male" id="male" />
                                    <Label htmlFor="male">পুরুষ</Label>
                                  </div>
                                  <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="female" id="female" />
                                    <Label htmlFor="female">মহিলা</Label>
                                  </div>
                                  <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="other" id="other" />
                                    <Label htmlFor="other">অন্যান্য</Label>
                                  </div>
                                </RadioGroup>
                              </div>
                            </div>
                          </div>
                        )}

                        {/* Step 2: Professional Information */}
                        {currentStep === 2 && (
                          <div className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              <div className="space-y-2">
                                <Label htmlFor="education">সর্বোচ্চ শিক্ষাগত যোগ্যতা</Label>
                                <Select
                                  onValueChange={(value) => handleSelectChange("education", value)}
                                  value={formState.education}
                                >
                                  <SelectTrigger>
                                    <SelectValue placeholder="আপনার শিক্ষাগত যোগ্যতা নির্বাচন করুন" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="bachelor">স্নাতক</SelectItem>
                                    <SelectItem value="masters">স্নাতকোত্তর</SelectItem>
                                    <SelectItem value="phd">পিএইচডি</SelectItem>
                                    <SelectItem value="diploma">ডিপ্লোমা</SelectItem>
                                    <SelectItem value="other">অন্যান্য</SelectItem>
                                  </SelectContent>
                                </Select>
                              </div>

                              <div className="space-y-2">
                                <Label htmlFor="degree">ডিগ্রি/বিষয়</Label>
                                <Input
                                  id="degree"
                                  name="degree"
                                  placeholder="আপনার ডিগ্রি বা বিষয়"
                                  value={formState.degree}
                                  onChange={handleChange}
                                  required
                                />
                              </div>

                              <div className="space-y-2">
                                <Label htmlFor="institution">শিক্ষা প্রতিষ্ঠানের নাম</Label>
                                <Input
                                  id="institution"
                                  name="institution"
                                  placeholder="আপনার শিক্ষা প্রতিষ্ঠানের নাম"
                                  value={formState.institution}
                                  onChange={handleChange}
                                  required
                                />
                              </div>

                              <div className="space-y-2">
                                <Label htmlFor="experience">কর্ম অভিজ্ঞতা (বছর)</Label>
                                <Input
                                  id="experience"
                                  name="experience"
                                  placeholder="আপনার কর্ম অভিজ্ঞতা (বছর)"
                                  value={formState.experience}
                                  onChange={handleChange}
                                  required
                                />
                              </div>

                              <div className="space-y-2">
                                <Label htmlFor="currentRole">বর্তমান পদবি</Label>
                                <Input
                                  id="currentRole"
                                  name="currentRole"
                                  placeholder="আপনার বর্তমান পদবি"
                                  value={formState.currentRole}
                                  onChange={handleChange}
                                />
                              </div>

                              <div className="space-y-2">
                                <Label htmlFor="currentCompany">বর্তমান প্রতিষ্ঠান</Label>
                                <Input
                                  id="currentCompany"
                                  name="currentCompany"
                                  placeholder="আপনার বর্তমান প্রতিষ্ঠানের নাম"
                                  value={formState.currentCompany}
                                  onChange={handleChange}
                                />
                              </div>
                            </div>
                          </div>
                        )}

                        {/* Step 3: Skills & Expertise */}
                        {currentStep === 3 && (
                          <div className="space-y-6">
                            <div className="space-y-4">
                              <div className="space-y-2">
                                <Label htmlFor="skills">দক্ষতা ও বিশেষজ্ঞতা</Label>
                                <Textarea
                                  id="skills"
                                  name="skills"
                                  placeholder="আপনার প্রধান দক্ষতা ও বিশেষজ্ঞতা বিস্তারিত লিখুন (যেমন: প্রকল্প ব্যবস্থাপনা, মার্কেটিং, ফাইন্যান্স, আইটি, ইত্যাদি)"
                                  value={formState.skills}
                                  onChange={handleChange}
                                  required
                                  className="min-h-[150px]"
                                />
                              </div>

                              <div className="space-y-2">
                                <Label htmlFor="languages">ভাষাগত দক্ষতা</Label>
                                <Textarea
                                  id="languages"
                                  name="languages"
                                  placeholder="আপনি কোন কোন ভাষায় দক্ষ? প্রতিটি ভাষার জন্য দক্ষতার মাত্রা উল্লেখ করুন (যেমন: বাংলা - মাতৃভাষা, ইংরেজি - উন্নত, হিন্দি - মাঝারি)"
                                  value={formState.languages}
                                  onChange={handleChange}
                                  required
                                />
                              </div>

                              <div className="space-y-2">
                                <Label htmlFor="certifications">সার্টিফিকেশন ও প্রশিক্ষণ</Label>
                                <Textarea
                                  id="certifications"
                                  name="certifications"
                                  placeholder="আপনার প্রাপ্ত গুরুত্বপূর্ণ সার্টিফিকেশন ও প্রশিক্ষণের তালিকা দিন"
                                  value={formState.certifications}
                                  onChange={handleChange}
                                />
                              </div>
                            </div>
                          </div>
                        )}

                        {/* Step 4: Motivation & Availability */}
                        {currentStep === 4 && (
                          <div className="space-y-6">
                            <div className="space-y-4">
                              <div className="space-y-2">
                                <Label htmlFor="motivation">
                                  কেন আপনি TRUSTED ALLY - Cox's Bazar কোর টিমে যোগ দিতে চান?
                                </Label>
                                <Textarea
                                  id="motivation"
                                  name="motivation"
                                  placeholder="আপনি কেন কোর টিমে যোগ দিতে চান এবং আপনি কীভাবে প্রকল্পে অবদান রাখতে পারেন তা বিস্তারিত লিখুন"
                                  value={formState.motivation}
                                  onChange={handleChange}
                                  required
                                  className="min-h-[150px]"
                                />
                              </div>

                              <div className="space-y-2">
                                <Label htmlFor="availability">উপলব্ধতা</Label>
                                <Select
                                  onValueChange={(value) => handleSelectChange("availability", value)}
                                  value={formState.availability}
                                >
                                  <SelectTrigger>
                                    <SelectValue placeholder="আপনার উপলব্ধতা নির্বাচন করুন" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="full_time">পূর্ণকালীন</SelectItem>
                                    <SelectItem value="part_time">খণ্ডকালীন</SelectItem>
                                    <SelectItem value="contract">চুক্তিভিত্তিক</SelectItem>
                                    <SelectItem value="flexible">নমনীয় সময়সূচি</SelectItem>
                                  </SelectContent>
                                </Select>
                              </div>

                              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                  <Label htmlFor="expectedSalary">প্রত্যাশিত বেতন (মাসিক, টাকা)</Label>
                                  <Input
                                    id="expectedSalary"
                                    name="expectedSalary"
                                    placeholder="আপনার প্রত্যাশিত মাসিক বেতন"
                                    value={formState.expectedSalary}
                                    onChange={handleChange}
                                    required
                                  />
                                </div>

                                <div className="space-y-2">
                                  <Label htmlFor="noticePeriod">নোটিশ পিরিয়ড (দিন)</Label>
                                  <Input
                                    id="noticePeriod"
                                    name="noticePeriod"
                                    placeholder="বর্তমান চাকরি থেকে নোটিশ পিরিয়ড (যদি প্রযোজ্য হয়)"
                                    value={formState.noticePeriod}
                                    onChange={handleChange}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        )}

                        {/* Step 5: References & Additional Information */}
                        {currentStep === 5 && (
                          <div className="space-y-6">
                            <div className="space-y-4">
                              <h3 className="text-lg font-medium">রেফারেন্স ১</h3>
                              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div className="space-y-2">
                                  <Label htmlFor="reference1Name">নাম</Label>
                                  <Input
                                    id="reference1Name"
                                    name="reference1Name"
                                    placeholder="রেফারেন্সের নাম"
                                    value={formState.reference1Name}
                                    onChange={handleChange}
                                    required
                                  />
                                </div>

                                <div className="space-y-2">
                                  <Label htmlFor="reference1Contact">যোগাযোগ (ইমেইল/ফোন)</Label>
                                  <Input
                                    id="reference1Contact"
                                    name="reference1Contact"
                                    placeholder="রেফারেন্সের যোগাযোগ তথ্য"
                                    value={formState.reference1Contact}
                                    onChange={handleChange}
                                    required
                                  />
                                </div>

                                <div className="space-y-2">
                                  <Label htmlFor="reference1Relation">সম্পর্ক</Label>
                                  <Input
                                    id="reference1Relation"
                                    name="reference1Relation"
                                    placeholder="আপনার সাথে সম্পর্ক"
                                    value={formState.reference1Relation}
                                    onChange={handleChange}
                                    required
                                  />
                                </div>
                              </div>

                              <Separator className="my-4" />

                              <h3 className="text-lg font-medium">রেফারেন্স ২</h3>
                              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div className="space-y-2">
                                  <Label htmlFor="reference2Name">নাম</Label>
                                  <Input
                                    id="reference2Name"
                                    name="reference2Name"
                                    placeholder="রেফারেন্সের নাম"
                                    value={formState.reference2Name}
                                    onChange={handleChange}
                                  />
                                </div>

                                <div className="space-y-2">
                                  <Label htmlFor="reference2Contact">যোগাযোগ (ইমেইল/ফোন)</Label>
                                  <Input
                                    id="reference2Contact"
                                    name="reference2Contact"
                                    placeholder="রেফারেন্সের যোগাযোগ তথ্য"
                                    value={formState.reference2Contact}
                                    onChange={handleChange}
                                  />
                                </div>

                                <div className="space-y-2">
                                  <Label htmlFor="reference2Relation">সম্পর্ক</Label>
                                  <Input
                                    id="reference2Relation"
                                    name="reference2Relation"
                                    placeholder="আপনার সাথে সম্পর্ক"
                                    value={formState.reference2Relation}
                                    onChange={handleChange}
                                  />
                                </div>
                              </div>

                              <Separator className="my-4" />

                              <div className="space-y-2">
                                <Label htmlFor="heardFrom">আপনি কীভাবে আমাদের সম্পর্কে জেনেছেন?</Label>
                                <Select
                                  onValueChange={(value) => handleSelectChange("heardFrom", value)}
                                  value={formState.heardFrom}
                                >
                                  <SelectTrigger>
                                    <SelectValue placeholder="নির্বাচন করুন" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="facebook">ফেসবুক</SelectItem>
                                    <SelectItem value="linkedin">লিংকডইন</SelectItem>
                                    <SelectItem value="website">ওয়েবসাইট</SelectItem>
                                    <SelectItem value="friend">বন্ধু/পরিচিত</SelectItem>
                                    <SelectItem value="other">অন্যান্য</SelectItem>
                                  </SelectContent>
                                </Select>
                              </div>

                              <div className="space-y-2">
                                <Label htmlFor="questions">আপনার কোন প্রশ্ন বা মন্তব্য থাকলে লিখুন</Label>
                                <Textarea
                                  id="questions"
                                  name="questions"
                                  placeholder="আপনার কোন প্রশ্ন বা অতিরিক্ত তথ্য থাকলে এখানে লিখুন"
                                  value={formState.questions}
                                  onChange={handleChange}
                                />
                              </div>
                            </div>
                          </div>
                        )}
                      </form>
                    </CardContent>

                    <CardFooter className="flex justify-between pt-6">
                      {currentStep > 1 && (
                        <Button type="button" variant="outline" onClick={prevStep}>
                          পূর্ববর্তী ধাপ
                        </Button>
                      )}
                      {currentStep < 5 ? (
                        <Button type="button" className="ml-auto" onClick={nextStep}>
                          পরবর্তী ধাপ <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      ) : (
                        <Button type="button" className="ml-auto" onClick={handleSubmit}>
                          আবেদন জমা দিন <CheckCircle className="ml-2 h-4 w-4" />
                        </Button>
                      )}
                    </CardFooter>
                  </Card>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* FAQ Section */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-center mb-8">সাধারণ জিজ্ঞাসা</h2>
            <div className="space-y-4">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-bold text-lg mb-2">কোর টিম সদস্য হিসেবে আমার দায়িত্ব কী হবে?</h3>
                  <p className="text-gray-600">
                    কোর টিম সদস্য হিসেবে আপনি প্রকল্পের কৌশলগত পরিকল্পনা, বাস্তবায়ন ও পরিচালনায় গুরুত্বপূর্ণ ভূমিকা পালন করবেন। আপনার
                    নির্দিষ্ট দায়িত্ব আপনার দক্ষতা, অভিজ্ঞতা ও প্রকল্পের প্রয়োজনীয়তার উপর নির্ভর করবে।
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-bold text-lg mb-2">আবেদন প্রক্রিয়া কী?</h3>
                  <p className="text-gray-600">
                    আবেদন জমা দেওয়ার পর, আমরা আপনার আবেদন পর্যালোচনা করব। যোগ্য প্রার্থীদের প্রাথমিক সাক্ষাৎকারের জন্য আমন্ত্রণ জানানো হবে।
                    এরপর দ্বিতীয় পর্যায়ের সাক্ষাৎকার এবং সফল প্রার্থীদের চূড়ান্ত নির্বাচন করা হবে।
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-bold text-lg mb-2">কোর টিম সদস্যদের কাজের সময়সূচি কেমন হবে?</h3>
                  <p className="text-gray-600">
                    কোর টিম সদস্যদের সাধারণত পূর্ণকালীন ভিত্তিতে কাজ করতে হবে। তবে, নির্দিষ্ট ভূমিকা ও প্রকল্পের প্রয়োজনীয়তা অনুযায়ী নমনীয়
                    সময়সূচি বা খণ্ডকালীন ব্যবস্থাও বিবেচনা করা যেতে পারে।
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-bold text-lg mb-2">আবেদনের শেষ তারিখ কবে?</h3>
                  <p className="text-gray-600">
                    আবেদনের শেষ তারিখ [তারিখ]। তবে, যোগ্য প্রার্থী পাওয়া গেলে আগেই আবেদন গ্রহণ বন্ধ করা হতে পারে, তাই যত দ্রুত সম্ভব
                    আবেদন করার পরামর্শ দেওয়া হচ্ছে।
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-12 text-center">
            <h2 className="text-2xl font-bold mb-4">আজই আবেদন করুন</h2>
            <p className="text-lg text-gray-600 mb-6">কক্সবাজারের পর্যটন শিল্পের ভবিষ্যৎ গড়ার অংশীদার হোন</p>
            <Button size="lg" className="px-8" onClick={() => setActiveTab("apply")}>
              আবেদন ফরমে যান <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

