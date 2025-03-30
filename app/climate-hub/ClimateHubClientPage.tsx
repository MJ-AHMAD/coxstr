"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import {
  Leaf,
  Recycle,
  Wind,
  Droplets,
  TreePine,
  Fish,
  Award,
  Users,
  CalendarDays,
  MapPin,
  ArrowRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

export default function ClimateHubClientPage() {
  const [activeTab, setActiveTab] = useState("overview")

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

  const itemVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <div className="container mx-auto py-10 px-4">
      <motion.div className="text-center mb-12" initial="hidden" animate="visible" variants={fadeIn}>
        <Badge className="mb-4" variant="outline">
          ট্রাস্টেড অ্যালাই জলবায়ু উদ্যোগ
        </Badge>
        <h1 className="text-4xl font-bold mb-4">কক্সবাজার জলবায়ু হাব</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          টেকসই পরিবেশ নিশ্চিত করতে এবং জলবায়ু পরিবর্তনের প্রভাব মোকাবেলায় আমাদের উদ্যোগসমূহ
        </p>
      </motion.div>

      <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="mb-12">
        <TabsList className="grid grid-cols-1 md:grid-cols-4 gap-2 w-full max-w-4xl mx-auto">
          <TabsTrigger value="overview">সামগ্রিক পরিকল্পনা</TabsTrigger>
          <TabsTrigger value="projects">প্রকল্পসমূহ</TabsTrigger>
          <TabsTrigger value="impact">প্রভাব ও পরিসংখ্যান</TabsTrigger>
          <TabsTrigger value="participate">অংশগ্রহণ করুন</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="mt-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <div className="bg-green-50 p-6 rounded-xl">
                <h2 className="text-2xl font-bold mb-4">আমাদের লক্ষ্য</h2>
                <p className="mb-4">
                  কক্সবাজারে জলবায়ু পরিবর্তনের প্রভাব প্রশমন করা, অভিযোজন ক্ষমতা বাড়ানো এবং বিশ্বের দীর্ঘতম সমুদ্র সৈকত ও তার পরিবেশকে
                  সংরক্ষণ করা আমাদের মূল লক্ষ্য।
                </p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium">জলবায়ু অভিযোজন</h4>
                    <Progress value={65} className="h-2 mt-2" />
                  </div>
                  <div>
                    <h4 className="font-medium">কার্বন নিরপেক্ষতা</h4>
                    <Progress value={45} className="h-2 mt-2" />
                  </div>
                  <div>
                    <h4 className="font-medium">পরিবেশ সংরক্ষণ</h4>
                    <Progress value={70} className="h-2 mt-2" />
                  </div>
                </div>
              </div>

              <div className="bg-green-50 p-6 rounded-xl">
                <h2 className="text-2xl font-bold mb-4">আমাদের কর্মসূচি</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { icon: <Recycle className="h-5 w-5" />, text: "বর্জ্য ব্যবস্থাপনা" },
                    { icon: <Wind className="h-5 w-5" />, text: "নবায়নযোগ্য শক্তি" },
                    { icon: <TreePine className="h-5 w-5" />, text: "বৃক্ষরোপণ অভিযান" },
                    { icon: <Droplets className="h-5 w-5" />, text: "পানি সংরক্ষণ" },
                    { icon: <Fish className="h-5 w-5" />, text: "সামুদ্রিক জীববৈচিত্র্য" },
                    { icon: <Leaf className="h-5 w-5" />, text: "সবুজ পর্যটন" },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center p-3 bg-white rounded-lg shadow-sm">
                      <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-700 mr-3">
                        {item.icon}
                      </div>
                      <span className="font-medium">{item.text}</span>
                    </div>
                  ))}
                </div>
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
                    alt="কক্সবাজার জলবায়ু হাব"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-4">আমাদের অর্জন</h3>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <p className="text-3xl font-bold text-green-700">১০,০০০+</p>
                      <p className="text-sm">বৃক্ষরোপণ</p>
                    </div>
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <p className="text-3xl font-bold text-green-700">৫০+</p>
                      <p className="text-sm">সচেতনতা অভিযান</p>
                    </div>
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <p className="text-3xl font-bold text-green-700">১৫+</p>
                      <p className="text-sm">সোলার প্রকল্প</p>
                    </div>
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <p className="text-3xl font-bold text-green-700">৬০+</p>
                      <p className="text-sm">সমুদ্র পরিষ্কার অভিযান</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">প্রকল্প এলাকা:</h4>
                    <div className="flex flex-wrap gap-2">
                      {["কক্সবাজার সদর", "ইনানী বিচ", "হিমছড়ি", "মহেশখালী", "টেকনাফ", "সেন্ট মার্টিন"].map((area, index) => (
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

        <TabsContent value="projects" className="mt-6">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              {
                title: "সবুজ সমুদ্র সৈকত অভিযান",
                description: "কক্সবাজারের সমুদ্র সৈকত থেকে প্লাস্টিক ও বর্জ্য অপসারণ এবং সাগর-বান্ধব পর্যটন প্রচার",
                icon: <Recycle className="h-6 w-6 text-green-700" />,
                progress: 85,
                status: "চলমান",
                link: "/climate-hub/green-beach",
              },
              {
                title: "সোলার পাওয়ার্ড হোটেল প্রকল্প",
                description: "কক্সবাজারের হোটেল ও রিসোর্টগুলোতে সোলার প্যানেল স্থাপনের মাধ্যমে নবায়নযোগ্য শক্তি ব্যবহার বৃদ্ধি",
                icon: <Wind className="h-6 w-6 text-green-700" />,
                progress: 60,
                status: "চলমান",
                link: "/climate-hub/solar-hotels",
              },
              {
                title: "ম্যানগ্রোভ পুনরুদ্ধার প্রকল্প",
                description: "কক্সবাজারের উপকূলীয় এলাকায় ম্যানগ্রোভ বন পুনরুদ্ধার করে জলবায়ু পরিবর্তন ও প্রাকৃতিক দুর্যোগ মোকাবেলা",
                icon: <TreePine className="h-6 w-6 text-green-700" />,
                progress: 70,
                status: "চলমান",
                link: "/climate-hub/mangrove-restoration",
              },
              {
                title: "বৃষ্টির পানি সংরক্ষণ",
                description: "কক্সবাজারের বাড়ি ও হোটেলগুলোতে বৃষ্টির পানি সংরক্ষণের ব্যবস্থা করে ভূগর্ভস্থ পানির ব্যবহার কমানো",
                icon: <Droplets className="h-6 w-6 text-green-700" />,
                progress: 50,
                status: "চলমান",
                link: "/climate-hub/rainwater-harvesting",
              },
              {
                title: "প্রবাল প্রাচীর সংরক্ষণ",
                description: "সেন্ট মার্টিন দ্বীপের প্রবাল প্রাচীর সংরক্ষণ করে সামুদ্রিক জীববৈচিত্র্য রক্ষা",
                icon: <Fish className="h-6 w-6 text-green-700" />,
                progress: 40,
                status: "চলমান",
                link: "/climate-hub/coral-reef-conservation",
              },
              {
                title: "প্লাস্টিকমুক্ত পর্যটন",
                description: "কক্সবাজারে প্লাস্টিকমুক্ত পর্যটন প্রচারে হোটেল, রেস্টুরেন্ট ও পর্যটকদের সম্পৃক্তকরণ",
                icon: <Leaf className="h-6 w-6 text-green-700" />,
                progress: 75,
                status: "চলমান",
                link: "/climate-hub/plastic-free-tourism",
              },
            ].map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariant}
                className="bg-white p-6 rounded-xl shadow-sm border border-green-100 hover:border-green-300 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center mb-4">
                  {project.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>

                <div className="space-y-2 mb-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">অগ্রগতি</span>
                    <span className="text-sm font-medium">{project.progress}%</span>
                  </div>
                  <Progress value={project.progress} className="h-2" />
                </div>

                <div className="flex justify-between items-center mb-4">
                  <Badge variant="outline" className="bg-green-50">
                    {project.status}
                  </Badge>
                  <span className="text-sm text-gray-500 flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    ৫০০+ অংশগ্রহণকারী
                  </span>
                </div>

                <Link href={project.link}>
                  <Button variant="outline" className="w-full">
                    বিস্তারিত দেখুন
                  </Button>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </TabsContent>

        <TabsContent value="impact" className="mt-6">
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-green-100">
              <h2 className="text-2xl font-bold mb-6">পরিবেশগত প্রভাব</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="text-3xl font-bold text-green-700 mb-2">২৫%</div>
                  <p className="text-gray-700">সমুদ্র সৈকতের প্লাস্টিক দূষণ হ্রাস</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="text-3xl font-bold text-green-700 mb-2">১৫০ টন</div>
                  <p className="text-gray-700">
                    CO<sub>2</sub> নির্গমন হ্রাস (বার্ষিক)
                  </p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="text-3xl font-bold text-green-700 mb-2">৩০%</div>
                  <p className="text-gray-700">পানির ব্যবহার হ্রাস (পর্যটন খাতে)</p>
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-4">সামুদ্রিক জীববৈচিত্র্য</h3>
              <div className="space-y-4 mb-6">
                <div>
                  <div className="flex justify-between mb-1">
                    <span>প্রবাল প্রাচীর পুনরুদ্ধার</span>
                    <span>৪০%</span>
                  </div>
                  <Progress value={40} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span>সামুদ্রিক কচ্ছপ সংরক্ষণ</span>
                    <span>৬৫%</span>
                  </div>
                  <Progress value={65} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span>ম্যানগ্রোভ সংরক্ষণ</span>
                    <span>৭০%</span>
                  </div>
                  <Progress value={70} className="h-2" />
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-4">সামাজিক প্রভাব</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-700 flex-shrink-0">
                    <Users className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-medium">৫,০০০+ স্থানীয় বাসিন্দা প্রশিক্ষিত</p>
                    <p className="text-sm text-gray-600">টেকসই পরিবেশ ব্যবস্থাপনা, জলবায়ু অভিযোজন ও বিপর্যয় মোকাবেলায় প্রশিক্ষণ</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-700 flex-shrink-0">
                    <Award className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-medium">৩০+ হোটেল/রিসোর্ট সবুজ সার্টিফিকেশন প্রাপ্ত</p>
                    <p className="text-sm text-gray-600">নবায়নযোগ্য শক্তি, পানি সংরক্ষণ ও বর্জ্য ব্যবস্থাপনায় সর্বোত্তম চর্চার জন্য</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-green-100">
              <h2 className="text-2xl font-bold mb-6">আসন্ন কার্যক্রম</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border border-green-100 rounded-lg p-4 hover:border-green-300 transition-all duration-300">
                  <div className="flex items-center gap-2 mb-3">
                    <CalendarDays className="h-5 w-5 text-green-700" />
                    <span className="font-medium">১৫ জুন, ২০২৩</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">বিশ্ব পরিবেশ দিবস উদযাপন</h3>
                  <p className="text-gray-600 mb-4">কক্সবাজার সমুদ্র সৈকতে ব্যাপক পরিষ্কার অভিযান ও বৃক্ষরোপণ কর্মসূচি</p>
                  <div className="flex justify-between items-center">
                    <Badge variant="outline" className="bg-green-50">
                      সবার জন্য উন্মুক্ত
                    </Badge>
                    <Link href="/climate-hub/events">
                      <Button variant="outline" size="sm">
                        অংশগ্রহণ করুন
                      </Button>
                    </Link>
                  </div>
                </div>

                <div className="border border-green-100 rounded-lg p-4 hover:border-green-300 transition-all duration-300">
                  <div className="flex items-center gap-2 mb-3">
                    <CalendarDays className="h-5 w-5 text-green-700" />
                    <span className="font-medium">১০ জুলাই, ২০২৩</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">জলবায়ু কর্মশালা</h3>
                  <p className="text-gray-600 mb-4">
                    স্থানীয় ব্যবসায়ী ও হোটেল মালিকদের জন্য শক্তি সাশ্রয় ও টেকসই ব্যবস্থাপনা বিষয়ক কর্মশালা
                  </p>
                  <div className="flex justify-between items-center">
                    <Badge variant="outline" className="bg-green-50">
                      নিবন্ধিত অংশগ্রহণকারী
                    </Badge>
                    <Link href="/climate-hub/events">
                      <Button variant="outline" size="sm">
                        নিবন্ধন করুন
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="participate" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-green-100">
              <h2 className="text-2xl font-bold mb-6">কীভাবে অংশগ্রহণ করবেন</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-700 flex-shrink-0">
                    <Users className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-medium">স্বেচ্ছাসেবক হিসেবে যোগ দিন</p>
                    <p className="text-sm text-gray-600 mb-2">
                      আমাদের বিভিন্ন জলবায়ু ও পরিবেশ সংরক্ষণ কার্যক্রমে স্বেচ্ছাসেবক হিসেবে অংশগ্রহণ করুন
                    </p>
                    <Link href="/climate-hub/volunteer">
                      <Button variant="outline" size="sm" className="mt-1">
                        আবেদন করুন
                      </Button>
                    </Link>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-700 flex-shrink-0">
                    <Award className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-medium">সবুজ পর্যটন চার্টারে স্বাক্ষর করুন</p>
                    <p className="text-sm text-gray-600 mb-2">
                      আপনার হোটেল, রিসোর্ট বা ব্যবসা প্রতিষ্ঠানকে টেকসই ও পরিবেশবান্ধব করতে সবুজ পর্যটন চার্টারে স্বাক্ষর করুন
                    </p>
                    <Link href="/climate-hub/green-tourism">
                      <Button variant="outline" size="sm" className="mt-1">
                        বিস্তারিত দেখুন
                      </Button>
                    </Link>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-700 flex-shrink-0">
                    <Leaf className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-medium">বৃক্ষরোপণ কর্মসূচিতে অংশ নিন</p>
                    <p className="text-sm text-gray-600 mb-2">
                      আমাদের নিয়মিত বৃক্ষরোপণ কর্মসূচিতে অংশ নিয়ে পরিবেশ রক্ষায় অবদান রাখুন
                    </p>
                    <Link href="/climate-hub/tree-plantation">
                      <Button variant="outline" size="sm" className="mt-1">
                        রেজিস্ট্রেশন করুন
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-green-100">
              <h2 className="text-2xl font-bold mb-6">আমাদের সাথে যোগাযোগ করুন</h2>
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-green-700" />
                  <span>কক্সবাজার সদর, লাবণী পয়েন্ট, কক্সবাজার</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-green-700" />
                  <span>+৮৮ ০১৭১২-৩৪৫৬৭৮</span>
                </div>
                <div className="flex items-center gap-3">
                  <Award className="h-5 w-5 text-green-700" />
                  <span>climate@trustedally.coxsbazar.org</span>
                </div>
              </div>

              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    নাম
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-green-500 focus:border-green-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    ইমেইল
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-green-500 focus:border-green-500"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">
                    বার্তা
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-green-500 focus:border-green-500"
                  ></textarea>
                </div>
                <Button>পাঠিয়ে দিন</Button>
              </form>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-green-50 p-8 rounded-xl border border-green-200 mt-10"
      >
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">আমাদের সাথে যোগ দিন</h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            কক্সবাজারের পরিবেশ রক্ষা ও জলবায়ু পরিবর্তন মোকাবেলায় আপনারও ভূমিকা রাখুন। আমাদের সাথে যোগ দিন এবং একটি সবুজ ও টেকসই ভবিষ্যত
            গড়তে সাহায্য করুন।
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/climate-hub/join">
            <Button size="lg" className="gap-2">
              আমাদের সাথে যোগ দিন
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

