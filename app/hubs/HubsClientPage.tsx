"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import {
  Leaf,
  Globe,
  HeartHandshake,
  Briefcase,
  BookOpen,
  ShieldCheck,
  Palmtree,
  Building,
  Waves,
  Microscope,
  Droplets,
  Users,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function HubsClientPage() {
  const hubs = [
    {
      id: "climate",
      title: "জলবায়ু হাব",
      description: "কক্সবাজারের পরিবেশ রক্ষা এবং জলবায়ু পরিবর্তন মোকাবেলায় আমাদের উদ্যোগ",
      icon: <Leaf className="h-6 w-6" />,
      link: "/climate-hub",
      color: "bg-green-50 text-green-700 border-green-200",
    },
    {
      id: "sustainable",
      title: "টেকসই উন্নয়ন হাব",
      description: "কক্সবাজারের টেকসই ও পরিবেশ বান্ধব উন্নয়ন প্রকল্পসমূহ",
      icon: <Globe className="h-6 w-6" />,
      link: "/sustainable-development",
      color: "bg-blue-50 text-blue-700 border-blue-200",
    },
    {
      id: "social",
      title: "সামাজিক উদ্যোগ",
      description: "সমাজের বিভিন্ন অবহেলিত শ্রেণীর উন্নয়নে আমাদের বিশেষ প্রকল্পসমূহ",
      icon: <HeartHandshake className="h-6 w-6" />,
      link: "/social-initiatives",
      color: "bg-pink-50 text-pink-700 border-pink-200",
    },
    {
      id: "economic",
      title: "অর্থনৈতিক হাব",
      description: "অর্থনৈতিক উন্নয়ন ও কর্মসংস্থান সৃষ্টিতে আমাদের উদ্যোগ",
      icon: <Briefcase className="h-6 w-6" />,
      link: "/economic-hub",
      color: "bg-amber-50 text-amber-700 border-amber-200",
    },
    {
      id: "education",
      title: "শিক্ষা হাব",
      description: "কক্সবাজারের শিক্ষা ব্যবস্থার উন্নয়নে আমাদের প্রকল্পসমূহ",
      icon: <BookOpen className="h-6 w-6" />,
      link: "/educational-hub",
      color: "bg-purple-50 text-purple-700 border-purple-200",
    },
    {
      id: "health",
      title: "স্বাস্থ্য হাব",
      description: "কক্সবাজারের স্বাস্থ্যসেবা উন্নয়নে আমাদের উদ্যোগসমূহ",
      icon: <ShieldCheck className="h-6 w-6" />,
      link: "/health-hub",
      color: "bg-red-50 text-red-700 border-red-200",
    },
    {
      id: "tourism",
      title: "পর্যটন হাব",
      description: "টেকসই পর্যটন উন্নয়ন এবং পর্যটন শিল্পের সম্প্রসারণে আমাদের প্রকল্প",
      icon: <Palmtree className="h-6 w-6" />,
      link: "/tourism-hub",
      color: "bg-teal-50 text-teal-700 border-teal-200",
    },
    {
      id: "infrastructure",
      title: "অবকাঠামো হাব",
      description: "কক্সবাজারের অবকাঠামোগত উন্নয়নে আমাদের প্রকল্পসমূহ",
      icon: <Building className="h-6 w-6" />,
      link: "/infrastructure-hub",
      color: "bg-gray-50 text-gray-700 border-gray-200",
    },
    {
      id: "marine",
      title: "সামুদ্রিক সম্পদ হাব",
      description: "সামুদ্রিক সম্পদের সংরক্ষণ এবং টেকসই ব্যবহারে আমাদের উদ্যোগ",
      icon: <Waves className="h-6 w-6" />,
      link: "/marine-hub",
      color: "bg-sky-50 text-sky-700 border-sky-200",
    },
    {
      id: "research",
      title: "গবেষণা হাব",
      description: "কক্সবাজারের উন্নয়নে বিভিন্ন বিষয়ে গবেষণা ও নতুন উদ্ভাবন",
      icon: <Microscope className="h-6 w-6" />,
      link: "/research-hub",
      color: "bg-indigo-50 text-indigo-700 border-indigo-200",
    },
    {
      id: "water",
      title: "পানি সম্পদ হাব",
      description: "পানি সম্পদের সংরক্ষণ ও বিশুদ্ধ পানির সরবরাহ নিশ্চিতকরণ",
      icon: <Droplets className="h-6 w-6" />,
      link: "/water-hub",
      color: "bg-blue-50 text-blue-700 border-blue-200",
    },
    {
      id: "community",
      title: "কমিউনিটি হাব",
      description: "স্থানীয় সম্প্রদায়ের সক্ষমতা বৃদ্ধি ও সম্পৃক্ততা",
      icon: <Users className="h-6 w-6" />,
      link: "/community-hub",
      color: "bg-orange-50 text-orange-700 border-orange-200",
    },
  ]

  return (
    <div className="container mx-auto py-12">
      <div className="text-center mb-12">
        <Badge variant="outline" className="mb-2">
          আমাদের উদ্যোগসমূহ
        </Badge>
        <h1 className="text-4xl font-bold mb-4">কক্সবাজার উন্নয়ন হাব</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          কক্সবাজারের সামগ্রিক উন্নয়নে আমাদের বিভিন্ন খাতভিত্তিক উদ্যোগসমূহ। এসব উদ্যোগের মাধ্যমে আমরা কক্সবাজারকে একটি টেকসই, সমৃদ্ধ ও সবার
          জন্য বসবাসযোগ্য করে তুলতে চাই।
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {hubs.map((hub, index) => (
          <motion.div
            key={hub.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Card
              className={`border-2 ${hub.id === "education" ? "border-purple-400 shadow-md" : "hover:border-primary"} transition-all duration-300`}
            >
              <CardHeader>
                <div
                  className={`w-12 h-12 rounded-full ${hub.color.split(" ")[0]} flex items-center justify-center mb-4`}
                >
                  {hub.icon}
                </div>
                <CardTitle>{hub.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{hub.description}</p>
              </CardContent>
              <CardFooter>
                <Link href={hub.link} className="w-full">
                  <Button variant={hub.id === "education" ? "default" : "outline"} className="w-full">
                    বিস্তারিত দেখুন
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

