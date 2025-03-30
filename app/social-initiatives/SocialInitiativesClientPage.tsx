"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import {
  HeartHandshake,
  Users,
  Home,
  Book,
  Briefcase,
  Baby,
  Heart,
  ShipWheelIcon as Wheelchair,
  MapPin,
  CalendarDays,
  ArrowRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

export default function SocialInitiativesClientPage() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="container mx-auto py-10 px-4">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Badge className="mb-4" variant="outline">
          ট্রাস্টেড অ্যালাই সামাজিক উদ্যোগ
        </Badge>
        <h1 className="text-4xl font-bold mb-4">কক্সবাজার সামাজিক উন্নয়ন প্রকল্প</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          সমাজের বিভিন্ন অবহেলিত শ্রেণীর মানুষের জীবনমান উন্নয়নে আমাদের বিশেষ প্রকল্পসমূহ
        </p>
      </motion.div>

      <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="mb-12">
        <TabsList className="grid grid-cols-1 md:grid-cols-5 gap-2 w-full max-w-4xl mx-auto">
          <TabsTrigger value="overview">সামগ্রিক পরিচিতি</TabsTrigger>
          <TabsTrigger value="women">নারী ও শিশু</TabsTrigger>
          <TabsTrigger value="rohingya">রোহিঙ্গা সহায়তা</TabsTrigger>
          <TabsTrigger value="disability">প্রতিবন্ধিতা সহায়তা</TabsTrigger>
          <TabsTrigger value="elderly">বয়স্ক সহায়তা</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="mt-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <div className="bg-pink-50 p-6 rounded-xl">
                <h2 className="text-2xl font-bold mb-4">আমাদের লক্ষ্য</h2>
                <p className="mb-4">
                  কক্সবাজারের সকল মানুষের জন্য সম-অধিকার ও সম-সুযোগ নিশ্চিত করা এবং সমাজের অবহেলিত শ্রেণীর মানুষের জীবনমান উন্নয়নে কাজ করা
                  আমাদের মূল লক্ষ্য।
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { icon: <HeartHandshake className="h-5 w-5" />, text: "সামাজিক সম্প্রীতি" },
                    { icon: <Users className="h-5 w-5" />, text: "নারী ক্ষমতায়ন" },
                    { icon: <Home className="h-5 w-5" />, text: "আশ্রয়ন প্রকল্প" },
                    { icon: <Book className="h-5 w-5" />, text: "শিক্ষা সহায়তা" },
                    { icon: <Briefcase className="h-5 w-5" />, text: "কর্মসংস্থান সৃষ্টি" },
                    { icon: <Heart className="h-5 w-5" />, text: "স্বাস্থ্যসেবা" },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center p-3 bg-white rounded-lg shadow-sm">
                      <div className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center text-pink-700 mr-3">
                        {item.icon}
                      </div>
                      <span className="font-medium">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-pink-50 p-6 rounded-xl">
                <h2 className="text-2xl font-bold mb-4">আমাদের সেবাসমূহ</h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-pink-200 flex items-center justify-center text-pink-700 mt-0.5">
                      <span className="text-xs">✓</span>
                    </div>
                    <span>নারী ও শিশুদের জন্য বিশেষ সামাজিক সুরক্ষা কর্মসূচি</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-pink-200 flex items-center justify-center text-pink-700 mt-0.5">
                      <span className="text-xs">✓</span>
                    </div>
                    <span>রোহিঙ্গা জনগোষ্ঠীর জন্য মানবিক সহায়তা</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-pink-200 flex items-center justify-center text-pink-700 mt-0.5">
                      <span className="text-xs">✓</span>
                    </div>
                    <span>প্রতিবন্ধী ব্যক্তিদের সামাজিক অন্তর্ভুক্তি ও পুনর্বাসন</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-pink-200 flex items-center justify-center text-pink-700 mt-0.5">
                      <span className="text-xs">✓</span>
                    </div>
                    <span>বয়স্ক ও প্রবীণদের সেবা ও সামাজিক সুরক্ষা</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-pink-200 flex items-center justify-center text-pink-700 mt-0.5">
                      <span className="text-xs">✓</span>
                    </div>
                    <span>দুর্যোগকালীন জরুরি সহায়তা ও পুনর্বাসন</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-white rounded-xl shadow-lg overflow-hidden h-full">
                <div className="relative h-64 w-full">
                  <Image
                    src="/placeholder.svg?height=400&width=800"
                    alt="কক্সবাজার সামাজিক উন্নয়ন"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-4">আমাদের প্রভাব</h3>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center p-4 bg-pink-50 rounded-lg">
                      <p className="text-3xl font-bold text-pink-700">১৫,০০০+</p>
                      <p className="text-sm">উপকারভোগী</p>
                    </div>
                    <div className="text-center p-4 bg-pink-50 rounded-lg">
                      <p className="text-3xl font-bold text-pink-700">৫০+</p>
                      <p className="text-sm">সামাজিক উদ্যোগ</p>
                    </div>
                    <div className="text-center p-4 bg-pink-50 rounded-lg">
                      <p className="text-3xl font-bold text-pink-700">১০০+</p>
                      <p className="text-sm">স্বেচ্ছাসেবক</p>
                    </div>
                    <div className="text-center p-4 bg-pink-50 rounded-lg">
                      <p className="text-3xl font-bold text-pink-700">২০+</p>
                      <p className="text-sm">অংশীদার সংস্থা</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">কর্মক্ষেত্র:</h4>
                    <div className="flex flex-wrap gap-2">
                      {["কক্সবাজার সদর", "টেকনাফ", "উখিয়া", "রামু", "চকরিয়া", "মহেশখালী"].map((area, index) => (
                        <Badge key={index} variant="outline" className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {area}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </TabsContent>

        <TabsContent value="women" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center mb-4">
                  <Baby className="h-6 w-6 text-pink-700" />
                </div>
                <CardTitle>শিশু উন্নয়ন প্রকল্প</CardTitle>
                <CardDescription>কক্সবাজারের শিশুদের সার্বিক উন্নয়ন ও সুরক্ষা</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">আমাদের শিশু উন্নয়ন প্রকল্পে রয়েছে:</p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-pink-100 flex items-center justify-center text-pink-700 mt-0.5">
                      <span className="text-xs">✓</span>
                    </div>
                    <span>শিশুদের জন্য নিরাপদ আবাসন</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-pink-100 flex items-center justify-center text-pink-700 mt-0.5">
                      <span className="text-xs">✓</span>
                    </div>
                    <span>বিনামূল্যে শিক্ষা ও পুষ্টি সেবা</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-pink-100 flex items-center justify-center text-pink-700 mt-0.5">
                      <span className="text-xs">✓</span>
                    </div>
                    <span>শিশু নির্যাতন প্রতিরোধ</span>
                  </li>
                </ul>
                <div className="flex justify-between items-center">
                  <Badge variant="outline">৫০০+ উপকারভোগী</Badge>
                  <Badge variant="outline" className="bg-pink-50">
                    চলমান
                  </Badge>
                </div>
              </CardContent>
              <CardFooter>
                <Link href="/social-initiatives/children">
                  <Button className="w-full">বিস্তারিত দেখুন</Button>
                </Link>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-pink-700" />
                </div>
                <CardTitle>নারী ক্ষমতায়ন প্রকল্প</CardTitle>
                <CardDescription>নারীদের আত্মনির্ভরশীল ও স্বাবলম্বী করে তোলা</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">আমাদের নারী ক্ষমতায়ন প্রকল্পে রয়েছে:</p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-pink-100 flex items-center justify-center text-pink-700 mt-0.5">
                      <span className="text-xs">✓</span>
                    </div>
                    <span>বিধবা ও বিবাহবিচ্ছিন্ন নারী সহায়তা</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-pink-100 flex items-center justify-center text-pink-700 mt-0.5">
                      <span className="text-xs">✓</span>
                    </div>
                    <span>মহিলাদের জন্য ক্ষুদ্র ঋণ</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-pink-100 flex items-center justify-center text-pink-700 mt-0.5">
                      <span className="text-xs">✓</span>
                    </div>
                    <span>দক্ষতা উন্নয়ন প্রশিক্ষণ</span>
                  </li>
                </ul>
                <div className="flex justify-between items-center">
                  <Badge variant="outline">২,০০০+ উপকারভোগী</Badge>
                  <Badge variant="outline" className="bg-pink-50">
                    চলমান
                  </Badge>
                </div>
              </CardContent>
              <CardFooter>
                <Link href="/social-initiatives/women">
                  <Button className="w-full">বিস্তারিত দেখুন</Button>
                </Link>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center mb-4">
                  <Home className="h-6 w-6 text-pink-700" />
                </div>
                <CardTitle>নিরাপদ মাতৃত্ব প্রকল্প</CardTitle>
                <CardDescription>গর্ভবতী ও নবজাতকের মা-শিশু স্বাস্থ্যসেবা</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">আমাদের নিরাপদ মাতৃত্ব প্রকল্পে রয়েছে:</p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-pink-100 flex items-center justify-center text-pink-700 mt-0.5">
                      <span className="text-xs">✓</span>
                    </div>
                    <span>গর্ভকালীন স্বাস্থ্য পরীক্ষা</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-pink-100 flex items-center justify-center text-pink-700 mt-0.5">
                      <span className="text-xs">✓</span>
                    </div>
                    <span>নিরাপদ প্রসব ও পরবর্তী সেবা</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-pink-100 flex items-center justify-center text-pink-700 mt-0.5">
                      <span className="text-xs">✓</span>
                    </div>
                    <span>নবজাতক স্বাস্থ্যসেবা</span>
                  </li>
                </ul>
                <div className="flex justify-between items-center">
                  <Badge variant="outline">১,২০০+ উপকারভোগী</Badge>
                  <Badge variant="outline" className="bg-pink-50">
                    চলমান
                  </Badge>
                </div>
              </CardContent>
              <CardFooter>
                <Link href="/social-initiatives/maternity">
                  <Button className="w-full">বিস্তারিত দেখুন</Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="rohingya" className="mt-6">
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <h2 className="text-2xl font-bold mb-4">রোহিঙ্গা সহায়তা প্রকল্প</h2>
              <p className="mb-6">
                কক্সবাজারে আশ্রয় নেওয়া রোহিঙ্গা জনগোষ্ঠীর জন্য আমাদের বিভিন্ন মানবিক সহায়তা প্রকল্প। এসব প্রকল্পের মাধ্যমে আমরা রোহিঙ্গা
                জনগোষ্ঠীর মৌলিক অধিকার, যেমন - খাদ্য, বাসস্থান, স্বাস্থ্যসেবা, শিক্ষা ইত্যাদি নিশ্চিত করতে কাজ করি।
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4">আমাদের সেবাসমূহ</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 mt-0.5">
                        <span className="text-xs">✓</span>
                      </div>
                      <span>খাদ্য ও পুষ্টি সহায়তা</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 mt-0.5">
                        <span className="text-xs">✓</span>
                      </div>
                      <span>স্বাস্থ্যসেবা ও স্বাস্থ্য শিক্ষা</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 mt-0.5">
                        <span className="text-xs">✓</span>
                      </div>
                      <span>শিশু ও নারী সুরক্ষা</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 mt-0.5">
                        <span className="text-xs">✓</span>
                      </div>
                      <span>আশ্রয় ও অবকাঠামো উন্নয়ন</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 mt-0.5">
                        <span className="text-xs">✓</span>
                      </div>
                      <span>শিক্ষা ও দক্ষতা উন্নয়ন</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">আমাদের প্রভাব</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center bg-white p-3 rounded-md shadow-sm">
                      <p className="text-2xl font-bold text-blue-700">৮,০০০+</p>
                      <p className="text-sm">উপকারভোগী</p>
                    </div>
                    <div className="text-center bg-white p-3 rounded-md shadow-sm">
                      <p className="text-2xl font-bold text-blue-700">১০+</p>
                      <p className="text-sm">ক্যাম্প কভারেজ</p>
                    </div>
                    <div className="text-center bg-white p-3 rounded-md shadow-sm">
                      <p className="text-2xl font-bold text-blue-700">৫+</p>
                      <p className="text-sm">স্বাস্থ্য শিবির</p>
                    </div>
                    <div className="text-center bg-white p-3 rounded-md shadow-sm">
                      <p className="text-2xl font-bold text-blue-700">১৫+</p>
                      <p className="text-sm">শিক্ষা কেন্দ্র</p>
                    </div>
                  </div>
                </div>
              </div>

              <Link href="/social-initiatives/rohingya">
                <Button>বিস্তারিত দেখুন</Button>
              </Link>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="disability" className="mt-6">
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <h2 className="text-2xl font-bold mb-4">প্রতিবন্ধী ব্যক্তিদের সহায়তা প্রকল্প</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <p className="mb-4">
                    প্রতিবন্ধী ব্যক্তিদের জন্য আমাদের প্রকল্পের উদ্দেশ্য হলো তাদের সামাজিক অন্তর্ভুক্তি, সম-অধিকার এবং আত্মনির্ভরশীলতা নিশ্চিত
                    করা। আমরা বিশ্বাস করি, সমাজের সকল সদস্যের সমান অধিকার রয়েছে এবং প্রতিবন্ধী ব্যক্তিরাও সমাজের পূর্ণাঙ্গ সদস্য।
                  </p>

                  <h3 className="text-xl font-semibold mb-2">আমাদের কার্যক্রম</h3>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full bg-purple-100 flex items-center justify-center text-purple-700 mt-0.5">
                        <span className="text-xs">✓</span>
                      </div>
                      <span>সহায়ক উপকরণ বিতরণ (হুইলচেয়ার, শ্রবণযন্ত্র, ক্রাচ ইত্যাদি)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full bg-purple-100 flex items-center justify-center text-purple-700 mt-0.5">
                        <span className="text-xs">✓</span>
                      </div>
                      <span>ফিজিওথেরাপি ও পুনর্বাসন সেবা</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full bg-purple-100 flex items-center justify-center text-purple-700 mt-0.5">
                        <span className="text-xs">✓</span>
                      </div>
                      <span>বিশেষ শিক্ষা ও দক্ষতা উন্নয়ন</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full bg-purple-100 flex items-center justify-center text-purple-700 mt-0.5">
                        <span className="text-xs">✓</span>
                      </div>
                      <span>কর্মসংস্থান ও আয়বর্ধক কার্যক্রম</span>
                    </li>
                  </ul>
                </div>

                <div className="relative h-64 w-full rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="প্রতিবন্ধী ব্যক্তিদের সহায়তা"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-4">
                    <Badge variant="outline" className="bg-white text-black self-start mb-2">
                      ৮০০+ উপকারভোগী
                    </Badge>
                    <h3 className="text-white text-xl font-semibold">প্রতিবন্ধিতা সহায়তা কেন্দ্র</h3>
                    <p className="text-white text-sm">কক্সবাজার সদর</p>
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center mt-6">
                <div>
                  <h4 className="font-medium">সুবিধাভোগীদের সংখ্যা বৃদ্ধি</h4>
                  <Progress value={65} className="h-2 w-64 mt-1" />
                </div>
                <Link href="/social-initiatives/disability">
                  <Button>
                    <Wheelchair className="h-4 w-4 mr-2" />
                    বিস্তারিত দেখুন
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="elderly" className="mt-6">
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <h2 className="text-2xl font-bold mb-4">বয়স্ক ও প্রবীণ সহায়তা প্রকল্প</h2>
              <p className="mb-6">
                বয়স্ক ও প্রবীণদের সম্মান, সেবা ও সুরক্ষা নিশ্চিত করাই আমাদের এই প্রকল্পের মূল লক্ষ্য। আমরা বিশ্বাস করি, প্রবীণরা আমাদের সমাজের
                মূল্যবান সম্পদ এবং তাদের জ্ঞান ও অভিজ্ঞতা পরবর্তী প্রজন্মের জন্য গুরুত্বপূর্ণ।
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <Card>
                  <CardHeader>
                    <CardTitle>স্বাস্থ্যসেবা</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <div className="w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center text-amber-700 mt-0.5">
                          <span className="text-xs">✓</span>
                        </div>
                        <span>নিয়মিত স্বাস্থ্য পরীক্ষা</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center text-amber-700 mt-0.5">
                          <span className="text-xs">✓</span>
                        </div>
                        <span>ফিজিওথেরাপি সেবা</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center text-amber-700 mt-0.5">
                          <span className="text-xs">✓</span>
                        </div>
                        <span>বিনামূল্যে ওষুধ সরবরাহ</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>সামাজিক সেবা</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <div className="w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center text-amber-700 mt-0.5">
                          <span className="text-xs">✓</span>
                        </div>
                        <span>দিবাযত্ন কেন্দ্র</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center text-amber-700 mt-0.5">
                          <span className="text-xs">✓</span>
                        </div>
                        <span>সামাজিক অনুষ্ঠান</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center text-amber-700 mt-0.5">
                          <span className="text-xs">✓</span>
                        </div>
                        <span>বিনোদন কার্যক্রম</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>আর্থিক সহায়তা</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <div className="w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center text-amber-700 mt-0.5">
                          <span className="text-xs">✓</span>
                        </div>
                        <span>মাসিক ভাতা</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center text-amber-700 mt-0.5">
                          <span className="text-xs">✓</span>
                        </div>
                        <span>আয়বর্ধক কার্যক্রম</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center text-amber-700 mt-0.5">
                          <span className="text-xs">✓</span>
                        </div>
                        <span>খাদ্য সহায়তা</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <Badge variant="outline" className="bg-amber-50">
                    <CalendarDays className="h-4 w-4 mr-1" />
                    ১,২০০+ উপকারভোগী
                  </Badge>
                  <Badge variant="outline" className="bg-amber-50">
                    <MapPin className="h-4 w-4 mr-1" />৫ উপজেলা
                  </Badge>
                </div>
                <Link href="/social-initiatives/elderly">
                  <Button>বিস্তারিত দেখুন</Button>
                </Link>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-pink-50 p-8 rounded-xl border border-pink-200 mt-10"
      >
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">আমাদের সাথে যোগ দিন</h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            কক্সবাজারের সামাজিক উন্নয়নে আপনিও অংশগ্রহণ করুন। আমাদের সাথে যোগ দিন এবং একটি ন্যায়সঙ্গত ও সমতাভিত্তিক সমাজ গড়তে সাহায্য করুন।
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/social-initiatives/join">
            <Button size="lg" className="gap-2">
              স্বেচ্ছাসেবক হিসেবে যোগ দিন
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
          <Link href="/hubs">
            <Button size="lg" variant="outline" className="gap-2">
              সকল হাব দেখুন
            </Button>
          </Link>
        </div>
      </motion.div>
    </div>
  )
}

