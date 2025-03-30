"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { CheckCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function StudentEmploymentClientPage() {
  const [activeTab, setActiveTab] = useState("tourism")

  const tabs = [
    { value: "tourism", label: "পর্যটন" },
    { value: "retail", label: "খুচরা" },
    { value: "tech", label: "প্রযুক্তি" },
  ]

  const tourismJobs = [
    { id: 1, title: "গাইড", description: "পর্যটকদের পথ দেখানো" },
    { id: 2, title: "টিকেট কাউন্টার", description: "টিকেট বিক্রি করা" },
    { id: 3, title: "হোটেল রিসেপশনিস্ট", description: "হোটেল রিসেপশনে কাজ করা" },
  ]

  const retailJobs = [
    { id: 4, title: "সেলসম্যান", description: "দোকানে পণ্য বিক্রি করা" },
    { id: 5, title: "ক্যাশিয়ার", description: "ক্যাশ কাউন্টারে কাজ করা" },
    { id: 6, title: "স্টোর সহকারী", description: "স্টোরে সাহায্য করা" },
  ]

  const techJobs = [
    { id: 7, title: "ডাটা এন্ট্রি", description: "ডাটা এন্ট্রি করা" },
    { id: 8, title: "গ্রাফিক ডিজাইন", description: "গ্রাফিক ডিজাইন করা" },
    { id: 9, title: "ওয়েব ডেভলপমেন্ট", description: "ওয়েব ডেভলপমেন্ট করা" },
  ]

  const JobCard = ({ job }) => (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h3 className="text-lg font-semibold mb-2">{job.title}</h3>
      <p className="text-gray-600">{job.description}</p>
    </div>
  )

  return (
    <div className="container mx-auto py-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <Badge className="mb-4 bg-blue-600 hover:bg-blue-700 text-white">Student Employment</Badge>
        <h1 className="text-4xl font-bold mb-4">Work Opportunities for Students</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Creating work opportunities for students, so they can earn their own expenses.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold mb-4">Program Objectives</h2>
          <p className="text-gray-700 mb-6">
            Creating income opportunities for students during their holidays. Through this program, students will be
            able to earn their own expenses, which will make them self-reliant.
          </p>

          <div className="space-y-3 mb-6">
            <h3 className="text-xl font-semibold">Program Features</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span>Work opportunities for students during holidays</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span>Opportunity to acquire skills in the tourism sector</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span>Opportunity to earn your own expenses</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span>Gain work experience</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span>Increase self-confidence through respectable work</span>
              </li>
            </ul>
          </div>

          <Link href="/educational-hub/student-employment/register">
            <Button className="gap-2">
              Register
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="relative h-[400px] rounded-lg overflow-hidden"
        >
          <Image
            src="/placeholder.svg?height=800&width=1200"
            alt="Work Opportunities for Students"
            fill
            className="object-cover"
          />
        </motion.div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-center mb-8">ছুটির দিনে কর্মসংস্থান প্রোগ্রাম</h1>

        {/* Tab Navigation Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-12">
          <h2 className="text-xl font-semibold mb-4 text-center">কর্মসংস্থান ক্যাটাগরি</h2>
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
          {activeTab === "tourism" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {tourismJobs.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
          )}
          {activeTab === "retail" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {retailJobs.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
          )}
          {activeTab === "tech" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {techJobs.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
          )}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-blue-900 text-white rounded-xl p-8 mb-10"
      >
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold mb-2">Join Today</h2>
          <p className="text-lg">Earn your own expenses and gain work experience by working on holidays</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 mt-8 mb-24 sm:mb-8">
          <Link href="/educational-hub/student-employment/register">
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black">
              Register
            </Button>
          </Link>
          <Link href="/educational-hub/student-employment/faq">
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
              FAQ
            </Button>
          </Link>
        </div>
      </motion.div>
    </div>
  )
}

