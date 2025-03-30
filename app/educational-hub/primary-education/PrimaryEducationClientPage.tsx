"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion } from "framer-motion"

export default function PrimaryEducationClientPage() {
  const [activeTab, setActiveTab] = useState("overview")

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <div className="container mx-auto py-12">
      <motion.div className="text-center mb-16" initial="hidden" animate="visible" variants={fadeIn}>
        <h1 className="text-4xl font-bold mb-4">Primary Education</h1>
        <p className="text-xl max-w-4xl mx-auto text-muted-foreground">
          Building Strong Foundations for Children by providing world-class primary education to over 250,000 children
          across the district.
        </p>
      </motion.div>

      <div className="flex flex-col md:flex-row gap-8 mb-16">
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=800&width=1200"
              alt="Primary school children in Cox's Bazar"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-6">The Current Challenge</h2>
          <p className="text-lg mb-4">Cox's Bazar district faces significant challenges in primary education:</p>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start">
              <span className="text-primary mr-2 font-bold">•</span>
              <span>
                Over 600 primary schools serving 250,000+ children, with 42% of schools lacking adequate facilities
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2 font-bold">•</span>
              <span>Teacher-student ratio of 1:65, far exceeding the national standard of 1:30</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2 font-bold">•</span>
              <span>Only 38% of primary school teachers have received modern pedagogical training</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2 font-bold">•</span>
              <span>28% dropout rate before completing primary education, with higher rates among girls</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2 font-bold">•</span>
              <span>
                Limited access to digital learning tools, with only 12% of primary schools having computer facilities
              </span>
            </li>
          </ul>
          <p className="text-lg font-medium text-primary">
            The guardians of the world's longest natural sea beach deserve educational opportunities that match the
            magnificence of their heritage.
          </p>
        </motion.div>
      </div>

      <Tabs defaultValue="infrastructure" className="mb-16" onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-1 md:grid-cols-4 mb-8">
          <TabsTrigger value="infrastructure">Infrastructure</TabsTrigger>
          <TabsTrigger value="teacher">Teacher Development</TabsTrigger>
          <TabsTrigger value="curriculum">Curriculum Innovation</TabsTrigger>
          <TabsTrigger value="inclusion">Inclusive Education</TabsTrigger>
        </TabsList>

        <TabsContent value="infrastructure" className="space-y-8">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: activeTab === "infrastructure" ? 1 : 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Modern classroom facilities"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">Modern Classroom Facilities</h3>
                <p className="mb-4">
                  Our initiative will renovate and equip 600+ primary schools with modern classrooms, proper sanitation,
                  clean water, and electricity. Each school will be transformed into a child-friendly learning
                  environment.
                </p>
                <Link href="/educational-hub/primary-education/infrastructure">
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card>
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Digital learning centers"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">Digital Learning Centers</h3>
                <p className="mb-4">
                  Establishing 200 digital learning centers equipped with computers, internet connectivity, and
                  interactive learning software to introduce children to technology and digital literacy from an early
                  age.
                </p>
                <Link href="/educational-hub/primary-education/digital-centers">
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card>
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Mobile learning labs"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">Mobile Learning Labs</h3>
                <p className="mb-4">
                  Deploying 50 mobile learning labs to reach remote areas and underserved communities, bringing
                  educational resources, books, and technology to children who cannot access traditional schools.
                </p>
                <Link href="/educational-hub/primary-education/mobile-labs">
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>

        <TabsContent value="teacher" className="space-y-8">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: activeTab === "teacher" ? 1 : 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Teacher training programs"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">Comprehensive Teacher Training</h3>
                <p className="mb-4">
                  Training 3,000+ primary school teachers in modern pedagogical methods, child psychology, and
                  interactive teaching techniques through partnerships with international educational institutions.
                </p>
                <Link href="/educational-hub/primary-education/teacher-training">
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card>
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Digital skills for teachers"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">Digital Skills for Educators</h3>
                <p className="mb-4">
                  Equipping teachers with digital literacy skills to effectively utilize educational technology, create
                  digital content, and guide students in the digital learning environment.
                </p>
                <Link href="/educational-hub/primary-education/digital-skills">
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card>
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Teacher incentive programs"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">Teacher Incentive Programs</h3>
                <p className="mb-4">
                  Creating incentive programs to attract and retain qualified teachers in remote areas, including
                  housing support, professional development opportunities, and performance-based rewards.
                </p>
                <Link href="/educational-hub/primary-education/incentives">
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>

        <TabsContent value="curriculum" className="space-y-8">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: activeTab === "curriculum" ? 1 : 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Interactive learning methods"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">Interactive Learning Methods</h3>
                <p className="mb-4">
                  Implementing play-based, experiential learning methodologies that make education engaging and
                  effective, moving away from rote memorization to critical thinking and problem-solving.
                </p>
                <Link href="/educational-hub/primary-education/interactive-learning">
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card>
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Environmental education"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">Environmental Education</h3>
                <p className="mb-4">
                  Developing a specialized curriculum on marine conservation, environmental stewardship, and sustainable
                  practices, connecting children's education to their unique coastal environment.
                </p>
                <Link href="/educational-hub/primary-education/environmental">
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card>
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Multilingual education"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">Multilingual Education</h3>
                <p className="mb-4">
                  Creating multilingual learning materials that respect local languages while building strong
                  foundations in Bengali and English, preparing children for global opportunities.
                </p>
                <Link href="/educational-hub/primary-education/multilingual">
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>

        <TabsContent value="inclusion" className="space-y-8">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: activeTab === "inclusion" ? 1 : 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Girls education programs"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">Girls' Education Initiative</h3>
                <p className="mb-4">
                  Comprehensive programs to ensure girls complete primary education, including scholarships, safe
                  transportation, female teachers, and community awareness campaigns to address cultural barriers.
                </p>
                <Link href="/educational-hub/primary-education/girls-education">
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card>
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Special needs education"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">Inclusive Education for All</h3>
                <p className="mb-4">
                  Creating inclusive learning environments for children with disabilities, including accessible
                  infrastructure, specialized teaching materials, and trained educators for special needs.
                </p>
                <Link href="/educational-hub/primary-education/inclusive">
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card>
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="School nutrition programs"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">School Nutrition Program</h3>
                <p className="mb-4">
                  Implementing comprehensive school meal programs to address malnutrition, improve attendance, and
                  enhance learning outcomes, using locally sourced food to support the community economy.
                </p>
                <Link href="/educational-hub/primary-education/nutrition">
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>
      </Tabs>

      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Impact Visualization</h2>
        <div className="relative h-64 md:h-96 rounded-lg overflow-hidden">
          <Image
            src="/placeholder.svg?height=800&width=1600"
            alt="Educational transformation impact map of Cox's Bazar"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-6">Join Our Primary Education Transformation</h2>
        <p className="text-xl max-w-3xl mx-auto mb-8">
          Together, we can ensure that every child in Cox's Bazar receives a world-class primary education, building the
          foundation for a prosperous future
        </p>
        <Link href="/contact">
          <Button size="lg" className="px-8">
            Partner With Us
          </Button>
        </Link>
      </div>
    </div>
  )
}

