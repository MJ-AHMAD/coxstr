"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export default function SecondaryHigherEducationClientPage() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="container mx-auto py-10 px-4 md:px-6">
      <div className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Secondary & Higher Education</h1>
          <p className="text-muted-foreground">
            Transforming secondary and higher education in Cox's Bazar to nurture future leaders and innovators
          </p>
        </div>

        <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="space-y-4">
          <TabsList className="grid grid-cols-1 md:grid-cols-4 gap-2">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="secondary">Secondary Education</TabsTrigger>
            <TabsTrigger value="higher">Higher Education</TabsTrigger>
            <TabsTrigger value="initiatives">Key Initiatives</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Educational Transformation Vision</CardTitle>
                <CardDescription>
                  Building world-class secondary and higher education for the guardians of the world's longest natural
                  sea beach
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="prose max-w-none">
                  <p>
                    The custodians of Cox's Bazar's magnificent 120km shoreline deserve an education system that matches
                    the grandeur of their natural heritage. Our vision is to transform secondary and higher education in
                    Cox's Bazar to create a generation of educated, skilled, and environmentally conscious citizens who
                    can both preserve their unique ecosystem and lead sustainable development.
                  </p>

                  <h3>Current Educational Landscape</h3>
                  <ul>
                    <li>Secondary schools: 185 institutions serving 87,000+ students</li>
                    <li>Higher education: 12 colleges and 1 university campus</li>
                    <li>Secondary completion rate: 68% (national average: 72%)</li>
                    <li>Higher education enrollment: 22% (national average: 28%)</li>
                    <li>Science and technology focus: Only 35% of secondary students in STEM tracks</li>
                  </ul>

                  <h3>Our Vision</h3>
                  <p>By 2030, Cox's Bazar will be recognized for educational excellence with:</p>
                  <ul>
                    <li>90% secondary school completion rate</li>
                    <li>50% higher education enrollment</li>
                    <li>A world-class Cox's Bazar University of Marine Sciences and Sustainable Tourism</li>
                    <li>
                      Centers of Excellence in Environmental Conservation, Hospitality Management, and Digital
                      Technology
                    </li>
                    <li>
                      International research partnerships focused on marine ecology and sustainable coastal development
                    </li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild>
                  <Link href="/educational-hub/secondary-higher-education/strategic-plan">View Strategic Plan</Link>
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="secondary" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Secondary School Transformation</CardTitle>
                  <CardDescription>Modernizing 185 secondary schools across Cox's Bazar</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    Comprehensive program to upgrade infrastructure, enhance teaching quality, and modernize curriculum
                    in all secondary schools in Cox's Bazar.
                  </p>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2">Infrastructure Upgrades</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span>Schools with modern science labs</span>
                          <span>62/185</span>
                        </div>
                        <Progress value={33} />

                        <div className="flex justify-between">
                          <span>Schools with computer labs</span>
                          <span>78/185</span>
                        </div>
                        <Progress value={42} />

                        <div className="flex justify-between">
                          <span>Schools with libraries</span>
                          <span>105/185</span>
                        </div>
                        <Progress value={57} />
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium mb-2">Teacher Development</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span>Teachers trained in modern pedagogy</span>
                          <span>1,250/3,600</span>
                        </div>
                        <Progress value={35} />
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" asChild>
                    <Link href="/educational-hub/secondary-higher-education/secondary-transformation">Learn More</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>STEM Education Initiative</CardTitle>
                  <CardDescription>Preparing students for careers in science and technology</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    Specialized program to strengthen science, technology, engineering, and mathematics education with a
                    focus on marine sciences and environmental conservation.
                  </p>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2">Key Components</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <Badge>Active</Badge>
                          Marine Science Curriculum Development
                        </li>
                        <li className="flex items-center gap-2">
                          <Badge>Active</Badge>
                          Annual Science & Innovation Fair
                        </li>
                        <li className="flex items-center gap-2">
                          <Badge>Active</Badge>
                          Teacher Training in STEM Pedagogy
                        </li>
                        <li className="flex items-center gap-2">
                          <Badge variant="outline">Planned</Badge>
                          Mobile Science Labs for Remote Schools
                        </li>
                        <li className="flex items-center gap-2">
                          <Badge variant="outline">Planned</Badge>
                          STEM Career Guidance Program
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" asChild>
                    <Link href="/educational-hub/secondary-higher-education/stem-initiative">Learn More</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="higher" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Cox's Bazar University of Marine Sciences and Sustainable Tourism</CardTitle>
                <CardDescription>
                  A world-class institution dedicated to coastal ecosystem preservation and sustainable development
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="prose max-w-none">
                  <p>
                    Our flagship higher education initiative is the establishment of Cox's Bazar University of Marine
                    Sciences and Sustainable Tourism.
                  </p>
                  <p>
                    This university will offer specialized programs in marine sciences, sustainable tourism, and coastal
                    management, preparing students to become leaders in these critical fields.
                  </p>

                  <h3>Key Features</h3>
                  <ul>
                    <li>
                      <strong>Cutting-edge research facilities:</strong> Equipped with advanced laboratories and
                      research vessels for marine studies.
                    </li>
                    <li>
                      <strong>International collaborations:</strong> Partnerships with leading universities worldwide
                      for research and exchange programs.
                    </li>
                    <li>
                      <strong>Sustainable campus design:</strong> Eco-friendly infrastructure that minimizes
                      environmental impact.
                    </li>
                    <li>
                      <strong>Community engagement programs:</strong> Initiatives to involve local communities in
                      research and conservation efforts.
                    </li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" asChild>
                  <Link href="/educational-hub/secondary-higher-education/university">Explore the University</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Higher Education Opportunities</CardTitle>
                <CardDescription>Expanding access to quality higher education</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Supporting students in their pursuit of higher education through scholarships, grants, and mentorship
                  programs.
                </p>
                <ul className="list-disc pl-5">
                  <li>Scholarship programs for underprivileged students</li>
                  <li>Grants for innovative research projects</li>
                  <li>Mentorship programs with industry professionals</li>
                  <li>Internship opportunities in relevant fields</li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="initiatives" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Preparing Students for Future Success</CardTitle>
                <CardDescription>
                  Equipping students with the skills and knowledge for a rapidly evolving world
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Academic Support</h4>
                    <p>Providing comprehensive academic support to help students succeed in their studies.</p>
                    <ul className="list-disc pl-5">
                      <li>Tutoring programs in core subjects</li>
                      <li>Study skills workshops</li>
                      <li>Access to online learning resources</li>
                      <li>Personalized academic advising</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">Career Guidance</h4>
                    <p>Guiding students towards fulfilling and successful careers.</p>
                    <ul className="list-disc pl-5">
                      <li>Career counseling services</li>
                      <li>Job search assistance</li>
                      <li>Resume and cover letter writing workshops</li>
                      <li>Interview skills training</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

