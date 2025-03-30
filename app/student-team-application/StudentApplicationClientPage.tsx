"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle2, Lightbulb, Users, GraduationCap, ArrowRight, Star } from "lucide-react"

export default function StudentApplicationClientPage() {
  const router = useRouter()
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    education: "",
    institution: "",
    address: "",
    skills: "",
    interests: "",
    aspirations: "",
    whyJoin: "",
    submitted: false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormState((prev) => ({ ...prev, [name]: value }))
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

  if (formState.submitted) {
    return (
      <div className="container mx-auto py-16 px-4">
        <Card className="max-w-3xl mx-auto">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold text-primary">আবেদন সফলভাবে জমা হয়েছে</CardTitle>
            <CardDescription className="text-xl mt-2">আপনার আবেদন আমাদের কাছে পৌঁছেছে</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 text-center">
            <div className="flex justify-center">
              <CheckCircle2 className="h-24 w-24 text-green-500" />
            </div>
            <p className="text-lg">
              প্রিয় {formState.name}, আপনার আগ্রহের জন্য ধন্যবাদ। আমরা আপনার আবেদন পর্যালোচনা করব এবং শীঘ্রই আপনার সাথে যোগাযোগ করব।
            </p>
            <p className="text-md text-muted-foreground">
              আপনার প্রদত্ত ইমেইল ({formState.email}) এবং ফোন নম্বরে ({formState.phone}) আমরা যোগাযোগ করব।
            </p>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button onClick={() => router.push("/")} variant="outline">
              হোম পেইজে ফিরে যান
            </Button>
          </CardFooter>
        </Card>
      </div>
    )
  }

  return (
    <div className="container mx-auto py-10 px-4">
      <div className="max-w-5xl mx-auto space-y-10">
        <div className="text-center space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-primary">
            TRUSTED ALLY - Cox's Bazar বিশেষ শিক্ষার্থী প্রোগ্রাম
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            কক্সবাজারের উজ্জ্বল ভবিষ্যৎ নির্মাণে অংশীদার হোন - একটি অনন্য শিক্ষা ও নেতৃত্ব উন্নয়ন কর্মসূচি
          </p>
        </div>

        <Tabs defaultValue="about" className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full">
            <TabsTrigger value="about">প্রোগ্রাম সম্পর্কে</TabsTrigger>
            <TabsTrigger value="benefits">সুবিধাসমূহ</TabsTrigger>
            <TabsTrigger value="eligibility">যোগ্যতা</TabsTrigger>
            <TabsTrigger value="apply">আবেদন করুন</TabsTrigger>
          </TabsList>

          <TabsContent value="about" className="space-y-6 mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">TRUSTED ALLY বিশেষ শিক্ষার্থী প্রোগ্রাম</CardTitle>
                <CardDescription>কক্সবাজারের শিক্ষার্থীদের জন্য একটি অনন্য সুযোগ</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  TRUSTED ALLY - Cox's Bazar টুরিজম প্রজেক্ট কক্সবাজারের ৩-৭ জন প্রতিভাবান শিক্ষার্থীকে নিয়ে একটি বিশেষ উন্নয়ন প্রোগ্রাম
                  শুরু করতে যাচ্ছে।
                </p>
                <p>
                  এই প্রোগ্রামের অংশগ্রহণকারীরা সাধারণ কর্মচারী বা ইন্টার্ন হিসেবে নয়, বরং বিশেষ সহযোগী হিসেবে কাজ করবেন যারা প্রজেক্টের
                  সর্বোচ্চ সুবিধা গ্রহণ করবেন এবং নিজেদের পেশাগত ও ব্যক্তিগত উন্নয়নের অনন্য সুযোগ পাবেন।
                </p>
                <p>
                  আমাদের লক্ষ্য হল সুপরিকল্পিত পদ্ধতিতে এই শিক্ষার্থীদেরকে যোগ্য, দক্ষ, আদর্শ ও সুশিক্ষিত নেতৃত্ব হিসেবে গড়ে তোলা, যারা
                  ভবিষ্যতে কক্সবাজারের শিক্ষা ব্যবস্থার মান উন্নয়নে গুরুত্বপূর্ণ ভূমিকা পালন করবেন।
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  <div className="flex items-start space-x-3">
                    <Star className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-medium">অনন্য শিক্ষা সুযোগ</h3>
                      <p className="text-sm text-muted-foreground">বিশেষজ্ঞদের সাথে কাজ করে শেখার অনন্য সুযোগ</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Users className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-medium">পেশাদার নেটওয়ার্ক</h3>
                      <p className="text-sm text-muted-foreground">শিল্প ও শিক্ষা জগতের বিশেষজ্ঞদের সাথে সংযোগ</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Lightbulb className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-medium">নেতৃত্ব বিকাশ</h3>
                      <p className="text-sm text-muted-foreground">বাস্তব প্রকল্পে নেতৃত্ব দেওয়ার অভিজ্ঞতা</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <GraduationCap className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-medium">সামাজিক প্রভাব</h3>
                      <p className="text-sm text-muted-foreground">কক্সবাজারের শিক্ষা ব্যবস্থার উন্নয়নে অবদান</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="benefits" className="space-y-6 mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">প্রোগ্রামের সুবিধাসমূহ</CardTitle>
                <CardDescription>TRUSTED ALLY বিশেষ শিক্ষার্থী প্রোগ্রামে অংশগ্রহণের সুবিধাসমূহ</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-1" />
                    <div>
                      <h3 className="font-medium">বিশেষজ্ঞদের সরাসরি মেন্টরশিপ</h3>
                      <p className="text-muted-foreground">পর্যটন ও ব্যবস্থাপনা বিশেষজ্ঞদের কাছ থেকে সরাসরি শিক্ষা ও গাইডেন্স</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-1" />
                    <div>
                      <h3 className="font-medium">উন্নত প্রশিক্ষণ কর্মসূচি</h3>
                      <p className="text-muted-foreground">
                        নেতৃত্ব, যোগাযোগ, প্রকল্প ব্যবস্থাপনা ও ডিজিটাল দক্ষতা বিষয়ে বিশেষ প্রশিক্ষণ
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-1" />
                    <div>
                      <h3 className="font-medium">বাস্তব প্রকল্পে অভিজ্ঞতা</h3>
                      <p className="text-muted-foreground">
                        TRUSTED ALLY - Cox's Bazar প্রকল্পের বিভিন্ন উদ্যোগে সরাসরি অংশগ্রহণ
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-1" />
                    <div>
                      <h3 className="font-medium">ব্যাপক নেটওয়ার্কিং সুযোগ</h3>
                      <p className="text-muted-foreground">
                        স্থানীয় ও আন্তর্জাতিক পর্যটন শিল্পের বিশেষজ্ঞদের সাথে যোগাযোগের সুযোগ
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-1" />
                    <div>
                      <h3 className="font-medium">ক্যারিয়ার উন্নয়ন সহায়তা</h3>
                      <p className="text-muted-foreground">
                        ক্যারিয়ার পরামর্শ, রেজুমে তৈরি, ইন্টারভিউ প্রস্তুতি ও পেশাদার উন্নয়নে সহায়তা
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-1" />
                    <div>
                      <h3 className="font-medium">স্বীকৃতি ও সার্টিফিকেশন</h3>
                      <p className="text-muted-foreground">
                        প্রোগ্রাম সম্পন্ন করার পর অফিসিয়াল সার্টিফিকেট ও ভবিষ্যৎ কাজের জন্য শক্তিশালী রেফারেন্স
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-1" />
                    <div>
                      <h3 className="font-medium">সামাজিক প্রভাব সৃষ্টি</h3>
                      <p className="text-muted-foreground">কক্সবাজারের শিক্ষা ব্যবস্থার মান উন্নয়নে অবদান রাখার সুযোগ</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="eligibility" className="space-y-6 mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">যোগ্যতা ও প্রত্যাশা</CardTitle>
                <CardDescription>TRUSTED ALLY বিশেষ শিক্ষার্থী প্রোগ্রামে অংশগ্রহণের যোগ্যতা</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-2">প্রাথমিক যোগ্যতা:</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>কক্সবাজার এলাকার স্থায়ী বাসিন্দা হতে হবে</li>
                    <li>বর্তমানে কোন স্বীকৃত শিক্ষা প্রতিষ্ঠানে অধ্যয়নরত হতে হবে</li>
                    <li>উচ্চ মাধ্যমিক বা তার উপরের শিক্ষাগত যোগ্যতা থাকতে হবে</li>
                    <li>ইংরেজি ও বাংলা ভাষায় ভালো যোগাযোগ দক্ষতা থাকতে হবে</li>
                    <li>কম্পিউটার ও ইন্টারনেট ব্যবহারে দক্ষ হতে হবে</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2">আমরা যা খুঁজছি:</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>উদ্ভাবনী চিন্তাভাবনা ও সৃজনশীলতা</li>
                    <li>নতুন বিষয় শেখার প্রতি আগ্রহ ও উৎসাহ</li>
                    <li>দলগত কাজে সহযোগিতার মনোভাব</li>
                    <li>নেতৃত্বের গুণাবলী ও উদ্যোগী মনোভাব</li>
                    <li>সমাজ উন্নয়নে আগ্রহ ও প্রতিশ্রুতি</li>
                    <li>নতুন চ্যালেঞ্জ গ্রহণের মানসিকতা</li>
                    <li>সময়ানুবর্তিতা ও দায়িত্বশীলতা</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2">প্রোগ্রামের প্রত্যাশা:</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>সপ্তাহে ন্যূনতম ১০-১৫ ঘণ্টা প্রোগ্রামের কাজে সময় দেওয়া</li>
                    <li>নিয়মিত প্রশিক্ষণ সেশন ও মিটিংয়ে অংশগ্রহণ</li>
                    <li>প্রকল্পের বিভিন্ন কার্যক্রমে সক্রিয় অংশগ্রহণ</li>
                    <li>নির্ধারিত কাজ সময়মত ও মানসম্মতভাবে সম্পন্ন করা</li>
                    <li>টিমের অন্য সদস্যদের সাথে সহযোগিতামূলক আচরণ</li>
                    <li>নিজের দক্ষতা উন্নয়নে সচেষ্ট থাকা</li>
                    <li>প্রোগ্রামের নীতিমালা মেনে চলা</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="apply" className="space-y-6 mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">আবেদন ফরম</CardTitle>
                <CardDescription>TRUSTED ALLY বিশেষ শিক্ষার্থী প্রোগ্রামে যোগ দেওয়ার জন্য নিচের ফরমটি পূরণ করুন</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
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

                    <div className="space-y-2">
                      <Label htmlFor="education">শিক্ষাগত যোগ্যতা</Label>
                      <Select
                        onValueChange={(value) => handleSelectChange("education", value)}
                        value={formState.education}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="আপনার শিক্ষাগত যোগ্যতা নির্বাচন করুন" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="higher_secondary">উচ্চ মাধ্যমিক</SelectItem>
                          <SelectItem value="undergraduate">স্নাতক চলমান</SelectItem>
                          <SelectItem value="graduate">স্নাতক সম্পন্ন</SelectItem>
                          <SelectItem value="postgraduate">স্নাতকোত্তর</SelectItem>
                          <SelectItem value="other">অন্যান্য</SelectItem>
                        </SelectContent>
                      </Select>
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
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="address">ঠিকানা</Label>
                    <Input
                      id="address"
                      name="address"
                      placeholder="আপনার বর্তমান ঠিকানা (কক্সবাজার এলাকায়)"
                      value={formState.address}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="skills">দক্ষতা ও যোগ্যতা</Label>
                    <Textarea
                      id="skills"
                      name="skills"
                      placeholder="আপনার দক্ষতা, যোগ্যতা ও অর্জনসমূহ বিস্তারিত লিখুন"
                      value={formState.skills}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="interests">আগ্রহের বিষয়</Label>
                    <Textarea
                      id="interests"
                      name="interests"
                      placeholder="আপনি কোন বিষয়ে আগ্রহী? আপনার পেশাগত আগ্রহের ক্ষেত্রগুলি উল্লেখ করুন"
                      value={formState.interests}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="aspirations">ভবিষ্যৎ লক্ষ্য</Label>
                    <Textarea
                      id="aspirations"
                      name="aspirations"
                      placeholder="আপনার দীর্ঘমেয়াদী ক্যারিয়ার ও শিক্ষাগত লক্ষ্য সম্পর্কে লিখুন"
                      value={formState.aspirations}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="whyJoin">কেন আপনি এই প্রোগ্রামে যোগ দিতে চান?</Label>
                    <Textarea
                      id="whyJoin"
                      name="whyJoin"
                      placeholder="আপনি কেন TRUSTED ALLY বিশেষ শিক্ষার্থী প্রোগ্রামে যোগ দিতে চান? এই প্রোগ্রাম আপনার ক্যারিয়ার ও ব্যক্তিগত উন্নয়নে কীভাবে সাহায্য করবে?"
                      value={formState.whyJoin}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full">
                    আবেদন জমা দিন <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
              <CardFooter className="flex justify-center border-t pt-6">
                <p className="text-sm text-muted-foreground text-center">
                  আবেদন জমা দেওয়ার পর, আমরা আপনার আবেদন পর্যালোচনা করব এবং যোগ্য প্রার্থীদের সাক্ষাৎকারের জন্য যোগাযোগ করব। প্রশ্ন থাকলে
                  contact@trusted-ally.com ঠিকানায় ইমেইল করুন।
                </p>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

