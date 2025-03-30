"use client"

import { useState } from "react"
import { Calendar, Download, Mail, MapPin, Phone, Printer, Share2, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Progress } from "@/components/ui/progress"

export default function FundingProposalClientPage() {
  const [selectedOrganization, setSelectedOrganization] = useState("iom")
  const [showSuccess, setShowSuccess] = useState(false)

  const organizations = {
    iom: {
      name: "International Organization for Migration (IOM)",
      addressee: "The Director",
      branch: "Cox's Bazar Branch",
      address: "Cox's Bazar, Bangladesh",
    },
    undp: {
      name: "United Nations Development Programme (UNDP)",
      addressee: "The Country Director",
      branch: "Bangladesh Office",
      address: "Cox's Bazar, Bangladesh",
    },
    usaid: {
      name: "United States Agency for International Development (USAID)",
      addressee: "The Mission Director",
      branch: "Bangladesh Mission",
      address: "Cox's Bazar, Bangladesh",
    },
    worldBank: {
      name: "The World Bank",
      addressee: "The Country Director",
      branch: "Bangladesh Office",
      address: "Cox's Bazar, Bangladesh",
    },
    custom: {
      name: "Custom Organization",
      addressee: "The Director/CEO",
      branch: "Main Office",
      address: "Address",
    },
  }

  const handlePrint = () => {
    window.print()
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setShowSuccess(true)
    setTimeout(() => setShowSuccess(false), 5000)
  }

  return (
    <div className="container mx-auto py-10 print:py-0">
      {showSuccess && (
        <div className="fixed top-4 right-4 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded z-50 shadow-md">
          <p>Proposal submitted successfully! A confirmation has been sent to your email.</p>
        </div>
      )}

      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md print:shadow-none">
        <div className="p-6 print:p-0">
          <div className="flex justify-between items-center print:hidden mb-6">
            <h1 className="text-2xl font-bold text-primary">Funding Proposal</h1>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm" onClick={handlePrint}>
                <Printer className="h-4 w-4 mr-2" />
                Print
              </Button>
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Download PDF
              </Button>
              <Button variant="outline" size="sm">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
            </div>
          </div>

          <div className="print:hidden mb-6">
            <Tabs defaultValue="letter" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="letter">Application Letter</TabsTrigger>
                <TabsTrigger value="proposal">Full Proposal</TabsTrigger>
                <TabsTrigger value="customize">Customize</TabsTrigger>
              </TabsList>
              <TabsContent value="letter" className="mt-4">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Select Organization</label>
                    <select
                      className="w-full p-2 border rounded-md"
                      value={selectedOrganization}
                      onChange={(e) => setSelectedOrganization(e.target.value)}
                    >
                      <option value="iom">International Organization for Migration (IOM)</option>
                      <option value="undp">United Nations Development Programme (UNDP)</option>
                      <option value="usaid">United States Agency for International Development (USAID)</option>
                      <option value="worldBank">The World Bank</option>
                      <option value="custom">Custom Organization</option>
                    </select>
                  </div>

                  {selectedOrganization === "custom" && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-1">Organization Name</label>
                        <input className="w-full p-2 border rounded-md" type="text" placeholder="Organization Name" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">Addressee Title</label>
                        <input
                          className="w-full p-2 border rounded-md"
                          type="text"
                          placeholder="e.g., The Director, CEO"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">Branch/Department</label>
                        <input
                          className="w-full p-2 border rounded-md"
                          type="text"
                          placeholder="Branch or Department"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">Address</label>
                        <input className="w-full p-2 border rounded-md" type="text" placeholder="Address" />
                      </div>
                    </div>
                  )}

                  <div>
                    <label className="block text-sm font-medium mb-1">Funding Amount (USD)</label>
                    <input
                      className="w-full p-2 border rounded-md"
                      type="text"
                      placeholder="e.g., 500,000"
                      defaultValue="500,000"
                    />
                  </div>

                  <div className="flex justify-end">
                    <Button onClick={handleSubmit}>Generate & Submit Proposal</Button>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="proposal" className="mt-4">
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Project Title</label>
                      <input
                        className="w-full p-2 border rounded-md"
                        type="text"
                        defaultValue="Cox's Bazar Tourism Development Initiative"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Project Duration</label>
                      <input className="w-full p-2 border rounded-md" type="text" defaultValue="3 years (2025-2028)" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">Project Summary</label>
                    <textarea
                      className="w-full p-2 border rounded-md h-24"
                      defaultValue="A comprehensive tourism development project aimed at transforming Cox's Bazar into a world-class tourist destination while creating sustainable employment opportunities and economic growth for the local community."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">Budget Breakdown</label>
                    <div className="border rounded-md p-4 space-y-3">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Platform Development</span>
                          <span>$150,000 (30%)</span>
                        </div>
                        <Progress value={30} className="h-2" />
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Marketing & Promotion</span>
                          <span>$100,000 (20%)</span>
                        </div>
                        <Progress value={20} className="h-2" />
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Local Partner Development</span>
                          <span>$125,000 (25%)</span>
                        </div>
                        <Progress value={25} className="h-2" />
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Training & Capacity Building</span>
                          <span>$75,000 (15%)</span>
                        </div>
                        <Progress value={15} className="h-2" />
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Administration & Operations</span>
                          <span>$50,000 (10%)</span>
                        </div>
                        <Progress value={10} className="h-2" />
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <Button onClick={handleSubmit}>Submit Full Proposal</Button>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="customize" className="mt-4">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Custom Sections</label>
                    <div className="border rounded-md p-4">
                      <div className="flex items-center mb-2">
                        <input type="checkbox" id="executive-summary" defaultChecked className="mr-2" />
                        <label htmlFor="executive-summary">Executive Summary</label>
                      </div>
                      <div className="flex items-center mb-2">
                        <input type="checkbox" id="project-background" defaultChecked className="mr-2" />
                        <label htmlFor="project-background">Project Background</label>
                      </div>
                      <div className="flex items-center mb-2">
                        <input type="checkbox" id="objectives" defaultChecked className="mr-2" />
                        <label htmlFor="objectives">Objectives & Goals</label>
                      </div>
                      <div className="flex items-center mb-2">
                        <input type="checkbox" id="methodology" defaultChecked className="mr-2" />
                        <label htmlFor="methodology">Methodology</label>
                      </div>
                      <div className="flex items-center mb-2">
                        <input type="checkbox" id="timeline" defaultChecked className="mr-2" />
                        <label htmlFor="timeline">Timeline</label>
                      </div>
                      <div className="flex items-center mb-2">
                        <input type="checkbox" id="budget" defaultChecked className="mr-2" />
                        <label htmlFor="budget">Budget</label>
                      </div>
                      <div className="flex items-center mb-2">
                        <input type="checkbox" id="team" defaultChecked className="mr-2" />
                        <label htmlFor="team">Team & Organization</label>
                      </div>
                      <div className="flex items-center mb-2">
                        <input type="checkbox" id="sustainability" defaultChecked className="mr-2" />
                        <label htmlFor="sustainability">Sustainability Plan</label>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" id="monitoring" defaultChecked className="mr-2" />
                        <label htmlFor="monitoring">Monitoring & Evaluation</label>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">Add Custom Section</label>
                    <div className="flex space-x-2">
                      <input className="flex-1 p-2 border rounded-md" type="text" placeholder="Section Title" />
                      <Button variant="outline">Add Section</Button>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <Button onClick={handleSubmit}>Generate Custom Proposal</Button>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Application Letter */}
          <div className="space-y-6">
            <div className="flex justify-between">
              <div>
                <h2 className="font-bold text-xl">Trusted Ally Tourism</h2>
                <p className="text-sm text-gray-600">Cox's Bazar Tourism Development Initiative</p>
                <p className="text-sm text-gray-600">Cox's Bazar, Bangladesh</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-600 flex items-center justify-end">
                  <Calendar className="h-4 w-4 mr-1" />
                  {new Date().toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
                <p className="text-sm text-gray-600 flex items-center justify-end mt-1">
                  <Mail className="h-4 w-4 mr-1" />
                  contact@trustedallytourism.com
                </p>
                <p className="text-sm text-gray-600 flex items-center justify-end mt-1">
                  <Phone className="h-4 w-4 mr-1" />
                  +880 1234 567890
                </p>
              </div>
            </div>

            <div>
              <p className="font-medium">{organizations[selectedOrganization].addressee}</p>
              <p>{organizations[selectedOrganization].name}</p>
              <p>{organizations[selectedOrganization].branch}</p>
              <p>{organizations[selectedOrganization].address}</p>
            </div>

            <div>
              <p className="font-bold">
                Subject: Request for Financial Support for Cox's Bazar Tourism Development Initiative
              </p>
            </div>

            <div className="space-y-4">
              <p>Dear {organizations[selectedOrganization].addressee},</p>

              <p>
                I am writing on behalf of Trusted Ally Tourism to request financial support for our Cox's Bazar Tourism
                Development Initiative, a comprehensive project aimed at transforming Cox's Bazar into a world-class
                tourist destination while creating sustainable employment opportunities and driving economic growth in
                the region.
              </p>

              <p>
                Cox's Bazar, home to the world's longest natural sea beach, possesses immense potential as a global
                tourism hub. However, this potential remains largely untapped due to infrastructural limitations,
                inadequate promotion, and lack of coordinated tourism services. Our initiative seeks to address these
                challenges through a holistic approach that combines digital innovation with community-based tourism
                development.
              </p>

              <p className="font-medium">Project Impact:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <span className="font-medium">Job Creation:</span> The project will generate over 500 direct and 2,000
                  indirect employment opportunities across various sectors including hospitality, transportation, tour
                  operations, and digital services.
                </li>
                <li>
                  <span className="font-medium">Educational Advancement:</span> Through partnerships with local
                  educational institutions, we will implement tourism and hospitality training programs, enhancing the
                  skills and employability of local youth.
                </li>
                <li>
                  <span className="font-medium">Business Growth:</span> Our platform will connect tourists with local
                  businesses, creating new market opportunities for small and medium enterprises in the region.
                </li>
                <li>
                  <span className="font-medium">Regional Development:</span> The initiative will contribute to the
                  overall development of Cox's Bazar by improving infrastructure, promoting sustainable tourism
                  practices, and showcasing the region's natural and cultural heritage.
                </li>
              </ul>

              <p>Our comprehensive digital platform will offer the following services:</p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4">
                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-medium mb-2">Accommodation Booking</h3>
                    <p className="text-sm text-gray-600">
                      Seamless booking of hotels, resorts, and local homestays with verified reviews and secure payment
                      options.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-medium mb-2">Transportation Services</h3>
                    <p className="text-sm text-gray-600">
                      Comprehensive transportation solutions including flights, local vehicles, and guided tours.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-medium mb-2">Attraction Guides</h3>
                    <p className="text-sm text-gray-600">
                      Detailed information about beaches, islands, cultural sites, and adventure activities.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-medium mb-2">Dining Experiences</h3>
                    <p className="text-sm text-gray-600">
                      Curated dining options featuring local cuisine and international restaurants.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-medium mb-2">Package Tours</h3>
                    <p className="text-sm text-gray-600">
                      All-inclusive packages for various budgets and preferences, designed to showcase the best of Cox's
                      Bazar.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-medium mb-2">Local Experiences</h3>
                    <p className="text-sm text-gray-600">
                      Community-based tourism activities that provide authentic cultural experiences and support local
                      communities.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <p>
                To initiate this transformative project, we are seeking financial support of USD 500,000. This funding
                will be utilized for platform development, marketing and promotion, local partner development, training
                and capacity building, and initial operational costs. A detailed budget breakdown and project timeline
                are available in the attached comprehensive proposal.
              </p>

              <p>
                We believe that {organizations[selectedOrganization].name}, with its commitment to sustainable
                development and community empowerment, is an ideal partner for this initiative. Your support will not
                only help us launch this project but will also contribute significantly to the socio-economic
                development of Cox's Bazar and position it as a premier global tourist destination.
              </p>

              <p>
                We would welcome the opportunity to discuss this proposal in detail and address any questions you may
                have. Thank you for considering our request. We look forward to your positive response and the
                possibility of a fruitful partnership.
              </p>

              <div className="mt-8">
                <p>Sincerely,</p>
                <p className="mt-4 font-medium">Mohammad Rahman</p>
                <p>Project Director</p>
                <p>Trusted Ally Tourism</p>
                <p>Email: director@trustedallytourism.com</p>
                <p>Phone: +880 1712 345678</p>
              </div>
            </div>
          </div>

          <div className="mt-8 print:hidden">
            <Separator />
            <div className="flex justify-between items-center mt-4">
              <p className="text-sm text-gray-500">
                This proposal was generated on {new Date().toLocaleDateString()} using the Trusted Ally Tourism Proposal
                System.
              </p>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" size="sm">
                    <User className="h-4 w-4 mr-2" />
                    Contact Us
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Contact Our Team</DialogTitle>
                    <DialogDescription>
                      Have questions about our funding proposal? Reach out to our team for more information.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4 mt-4">
                    <div className="flex items-start space-x-4">
                      <User className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <p className="font-medium">Mohammad Rahman</p>
                        <p className="text-sm text-gray-500">Project Director</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <Mail className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <p className="font-medium">director@trustedallytourism.com</p>
                        <p className="text-sm text-gray-500">Email us anytime</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <Phone className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <p className="font-medium">+880 1712 345678</p>
                        <p className="text-sm text-gray-500">Mon-Fri from 9am to 5pm</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <MapPin className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <p className="font-medium">Cox's Bazar, Bangladesh</p>
                        <p className="text-sm text-gray-500">Kolatoli Road, Cox's Bazar</p>
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

