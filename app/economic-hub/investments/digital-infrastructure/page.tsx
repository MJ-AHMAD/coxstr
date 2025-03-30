import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Download, TrendingUp, Globe, Award, Building, Users, Leaf } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata = {
  title: "Digital Infrastructure Investment | Cox's Bazar Economic Hub",
  description:
    "Explore investment opportunities in digital infrastructure including data centers, connectivity solutions, and tech hubs in Cox's Bazar with high ROI potential.",
}

export default function DigitalInfrastructurePage() {
  const million = 1000000
  const fifteen = 15
  const tier = "tier"
  const data = "data"
  const center = "center"
  const provides = "provides"
  const cloud = "cloud"
  const services = "services"
  const hosting = "hosting"
  const and = "and"

  return (
    <div className="container mx-auto py-12">
      <div className="mb-8">
        <Link href="/economic-hub" className="flex items-center text-muted-foreground hover:text-primary mb-4">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Economic Hub
        </Link>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-4xl font-bold mb-2">Digital Infrastructure Investment</h1>
            <p className="text-xl text-muted-foreground">
              Data centers, connectivity solutions, and tech hubs with strategic advantages
            </p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" className="flex items-center">
              <Download className="mr-2 h-4 w-4" /> Investment Guide
            </Button>
            <Button>Contact Investment Advisor</Button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <div className="lg:col-span-2">
          <div className="relative h-[400px] rounded-lg overflow-hidden mb-6">
            <Image
              src="/placeholder.svg?height=800&width=1200"
              alt="Digital Infrastructure in Cox's Bazar"
              fill
              className="object-cover"
            />
          </div>
          <div className="prose max-w-none">
            <p className="text-lg leading-relaxed">
              Cox's Bazar offers exceptional opportunities for digital infrastructure investment, with strategic
              location, growing connectivity needs, and government prioritization of digital transformation. With the
              digital sector growing at 25-30% annually and Cox's Bazar's position as a key tourism and economic hub,
              the region presents compelling investment potential.
            </p>
            <p className="leading-relaxed">
              The Bangladesh government has designated Cox's Bazar as a priority zone for digital infrastructure
              development with special incentives for tech-focused projects. Investors can benefit from tax holidays,
              duty exemptions, and streamlined approval processes while contributing to the region's digital
              transformation.
            </p>
          </div>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>Investment Highlights</CardTitle>
              <CardDescription>Key statistics and information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center pb-2 border-b">
                <span className="text-muted-foreground">Digital Sector Growth</span>
                <span className="font-medium">25-30%</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b">
                <span className="text-muted-foreground">Internet Penetration</span>
                <span className="font-medium">Growing at 15%/year</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b">
                <span className="text-muted-foreground">Average ROI</span>
                <span className="font-medium">22-28%</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b">
                <span className="text-muted-foreground">Payback Period</span>
                <span className="font-medium">3-5 Years</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b">
                <span className="text-muted-foreground">Tax Holiday</span>
                <span className="font-medium">Up to 10 Years</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Strategic Location</span>
                <span className="font-medium">Submarine Cable Landing</span>
              </div>
            </CardContent>
          </Card>

          <div className="mt-6 bg-blue-50 rounded-lg p-6">
            <h3 className="text-lg font-medium mb-4 flex items-center">
              <TrendingUp className="mr-2 h-5 w-5 text-blue-600" /> Market Opportunity
            </h3>
            <p className="mb-4 text-muted-foreground">
              The digital infrastructure market in Bangladesh is projected to reach $3 billion by 2025, with Cox's Bazar
              positioned as a strategic connectivity hub.
            </p>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="bg-white p-3 rounded-lg">
                <p className="text-2xl font-bold text-blue-600">65%</p>
                <p className="text-xs text-muted-foreground">Annual growth in data consumption</p>
              </div>
              <div className="bg-white p-3 rounded-lg">
                <p className="text-2xl font-bold text-blue-600">40%</p>
                <p className="text-xs text-muted-foreground">Digital infrastructure gap</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Tabs defaultValue="opportunities" className="mb-16">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="opportunities">Investment Areas</TabsTrigger>
          <TabsTrigger value="incentives">Government Support</TabsTrigger>
          <TabsTrigger value="case-studies">Success Stories</TabsTrigger>
          <TabsTrigger value="guidelines">Best Practices</TabsTrigger>
        </TabsList>

        <TabsContent value="opportunities" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Data Centers"
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardHeader>
                <CardTitle>Data Centers</CardTitle>
                <CardDescription>Edge and cloud computing facilities</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Development of tier-3 and tier-4 data centers to serve the growing cloud computing and data storage
                  needs of the region.
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Investment Range</span>
                    <span className="text-sm font-medium">$5-30 million</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Estimated ROI</span>
                    <span className="text-sm font-medium">22-25% annually</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Market Demand</span>
                    <span className="text-sm font-medium">Very High</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Connectivity Solutions"
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardHeader>
                <CardTitle>Connectivity Solutions</CardTitle>
                <CardDescription>Broadband and last-mile infrastructure</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Investment in fiber optic networks, 5G infrastructure, and last-mile connectivity solutions for
                  businesses and communities.
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Investment Range</span>
                    <span className="text-sm font-medium">$2-15 million</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Estimated ROI</span>
                    <span className="text-sm font-medium">25-30% annually</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Growth Rate</span>
                    <span className="text-sm font-medium">35% annually</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Tech Hubs"
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardHeader>
                <CardTitle>Tech Hubs & Incubators</CardTitle>
                <CardDescription>Innovation centers and workspaces</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Development of technology parks, innovation hubs, and co-working spaces for startups and tech
                  companies.
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Investment Range</span>
                    <span className="text-sm font-medium">$1-10 million</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Estimated ROI</span>
                    <span className="text-sm font-medium">18-22% annually</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Ecosystem Value</span>
                    <span className="text-sm font-medium">High</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Digital Services"
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardHeader>
                <CardTitle>Digital Services</CardTitle>
                <CardDescription>Tourism tech and smart city solutions</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Development of digital platforms and services for tourism, hospitality, and smart city applications.
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Investment Range</span>
                    <span className="text-sm font-medium">$0.5-5 million</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Estimated ROI</span>
                    <span className="text-sm font-medium">28-35% annually</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Market Need</span>
                    <span className="text-sm font-medium">Critical</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Digital Skills Centers"
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardHeader>
                <CardTitle>Digital Skills Centers</CardTitle>
                <CardDescription>Training and development facilities</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Establishment of training centers for digital skills development, coding academies, and tech
                  education.
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Investment Range</span>
                    <span className="text-sm font-medium">$0.5-3 million</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Estimated ROI</span>
                    <span className="text-sm font-medium">15-20% annually</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Social Impact</span>
                    <span className="text-sm font-medium">Very High</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="IoT Infrastructure"
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardHeader>
                <CardTitle>IoT Infrastructure</CardTitle>
                <CardDescription>Smart systems for tourism and industry</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Deployment of Internet of Things (IoT) infrastructure for tourism, environmental monitoring, and smart
                  facilities.
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Investment Range</span>
                    <span className="text-sm font-medium">$1-8 million</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Estimated ROI</span>
                    <span className="text-sm font-medium">20-25% annually</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Innovation Value</span>
                    <span className="text-sm font-medium">Transformative</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="incentives" className="mt-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold mb-4">Government Support & Incentives</h3>
              <p className="text-muted-foreground mb-6">
                The Bangladesh government has established a comprehensive package of incentives to attract digital
                infrastructure investment in Cox's Bazar.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <Card className="bg-blue-50 border-blue-200">
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center text-blue-700">
                      <Award className="mr-2 h-5 w-5" /> Fiscal Incentives
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="bg-blue-100 text-blue-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          1
                        </div>
                        <div>
                          <p className="font-medium">Tax Holidays</p>
                          <p className="text-sm text-muted-foreground">
                            7-10 year income tax exemption for digital infrastructure projects
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-blue-100 text-blue-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          ✓
                        </div>
                        <div>
                          <p className="font-medium">Duty Exemptions</p>
                          <p className="text-sm text-muted-foreground">
                            Import duty exemption on IT equipment, servers, and networking hardware
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-blue-100 text-blue-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          ✓
                        </div>
                        <div>
                          <p className="font-medium">Accelerated Depreciation</p>
                          <p className="text-sm text-muted-foreground">
                            Special depreciation allowances for digital infrastructure assets
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-blue-100 text-blue-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          ✓
                        </div>
                        <div>
                          <p className="font-medium">VAT Exemptions</p>
                          <p className="text-sm text-muted-foreground">
                            VAT exemption on digital services and infrastructure development
                          </p>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-purple-50 border-purple-200">
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center text-purple-700">
                      <Globe className="mr-2 h-5 w-5" /> Operational Incentives
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="bg-purple-100 text-purple-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          ✓
                        </div>
                        <div>
                          <p className="font-medium">Bandwidth Subsidies</p>
                          <p className="text-sm text-muted-foreground">
                            Subsidized international bandwidth for data centers and tech hubs
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-purple-100 text-purple-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          ✓
                        </div>
                        <div>
                          <p className="font-medium">Power Incentives</p>
                          <p className="text-sm text-muted-foreground">
                            Priority electricity connection and backup power support
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-purple-100 text-purple-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          ✓
                        </div>
                        <div>
                          <p className="font-medium">Spectrum Allocation</p>
                          <p className="text-sm text-muted-foreground">
                            Preferential spectrum allocation for connectivity providers
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-purple-100 text-purple-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          ✓
                        </div>
                        <div>
                          <p className="font-medium">Regulatory Support</p>
                          <p className="text-sm text-muted-foreground">
                            Fast-track regulatory approvals and compliance assistance
                          </p>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-green-50 border-green-200">
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center text-green-700">
                      <Building className="mr-2 h-5 w-5" /> Land & Infrastructure
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="bg-green-100 text-green-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          ✓
                        </div>
                        <div>
                          <p className="font-medium">Land Allocation</p>
                          <p className="text-sm text-muted-foreground">
                            Dedicated tech zones with pre-approved land at preferential rates
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-green-100 text-green-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          ✓
                        </div>
                        <div>
                          <p className="font-medium">Ready Infrastructure</p>
                          <p className="text-sm text-muted-foreground">
                            Pre-built facilities with essential infrastructure for quick deployment
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-green-100 text-green-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          ✓
                        </div>
                        <div>
                          <p className="font-medium">Special Economic Zones</p>
                          <p className="text-sm text-muted-foreground">
                            Inclusion of digital infrastructure in special economic zone benefits
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-green-100 text-green-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          ✓
                        </div>
                        <div>
                          <p className="font-medium">Submarine Cable Access</p>
                          <p className="text-sm text-muted-foreground">
                            Prioritized access to submarine cable landing station
                          </p>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-amber-50 border-amber-200">
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center text-amber-700">
                      <Users className="mr-2 h-5 w-5" /> Human Capital Support
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="bg-amber-100 text-amber-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          ✓
                        </div>
                        <div>
                          <p className="font-medium">Skills Development</p>
                          <p className="text-sm text-muted-foreground">
                            Government-funded training programs for digital skills
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-amber-100 text-amber-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          ✓
                        </div>
                        <div>
                          <p className="font-medium">Visa Facilitation</p>
                          <p className="text-sm text-muted-foreground">
                            Expedited work permits and visas for international tech talent
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-amber-100 text-amber-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          ✓
                        </div>
                        <div>
                          <p className="font-medium">University Partnerships</p>
                          <p className="text-sm text-muted-foreground">
                            Facilitation of industry-academia collaborations
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-amber-100 text-amber-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          ✓
                        </div>
                        <div>
                          <p className="font-medium">R&D Support</p>
                          <p className="text-sm text-muted-foreground">
                            Matching grants for research and development initiatives
                          </p>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="text-xl font-medium mb-4">Digital Infrastructure Investment Promotion Agency</h4>
                <p className="text-muted-foreground mb-4">
                  The Bangladesh ICT Division has established a dedicated Digital Infrastructure Investment Promotion
                  Agency to facilitate investments in Cox's Bazar:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Single window clearance for digital infrastructure projects</li>
                  <li>• Dedicated investment advisors for each project</li>
                  <li>• Assistance with technical planning and implementation</li>
                  <li>• Facilitation of partnerships with local and international stakeholders</li>
                  <li>• Coordination with relevant government agencies</li>
                </ul>
              </div>
            </div>

            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Financing Options</CardTitle>
                  <CardDescription>Special financing for digital infrastructure</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="pb-3 border-b">
                    <h4 className="font-medium mb-1">Digital Bangladesh Fund</h4>
                    <p className="text-sm text-muted-foreground">
                      Dedicated fund offering low-interest loans for digital infrastructure projects.
                    </p>
                    <div className="mt-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Interest Rate</span>
                        <span className="font-medium">4-6%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Loan Term</span>
                        <span className="font-medium">Up to 10 years</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Grace Period</span>
                        <span className="font-medium">1-2 years</span>
                      </div>
                    </div>
                  </div>

                  <div className="pb-3 border-b">
                    <h4 className="font-medium mb-1">Venture Capital Matching</h4>
                    <p className="text-sm text-muted-foreground">
                      Government matching funds for venture capital investments in tech startups.
                    </p>
                    <div className="mt-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Matching Ratio</span>
                        <span className="font-medium">Up to 1:1</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Focus Areas</span>
                        <span className="font-medium">Tech startups</span>
                      </div>
                    </div>
                  </div>

                  <div className="pb-3 border-b">
                    <h4 className="font-medium mb-1">International Credit Lines</h4>
                    <p className="text-sm text-muted-foreground">
                      Special credit lines from development banks for digital infrastructure.
                    </p>
                    <div className="mt-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Available From</span>
                        <span className="font-medium">ADB, World Bank</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Focus Areas</span>
                        <span className="font-medium">Connectivity, Data</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium mb-1">Innovation Grants</h4>
                    <p className="text-sm text-muted-foreground">
                      Non-repayable grants for innovative digital infrastructure solutions.
                    </p>
                    <div className="mt-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Grant Size</span>
                        <span className="font-medium">$50K-$500K</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Focus Areas</span>
                        <span className="font-medium">Innovative tech</span>
                      </div>
                    </div>
                  </div>

                  <Button className="w-full mt-4">Financing Consultation</Button>
                </CardContent>
              </Card>

              <div className="mt-6 p-6 bg-blue-50 rounded-lg">
                <h4 className="font-medium mb-4">Application Process</h4>
                <ol className="space-y-3">
                  <li className="flex items-start">
                    <div className="bg-blue-100 text-blue-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      1
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Submit project concept to Digital Infrastructure Investment Promotion Agency
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 text-blue-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      2
                    </div>
                    <p className="text-sm text-muted-foreground">Initial assessment and feedback (2-3 weeks)</p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 text-blue-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      3
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Detailed project proposal with technical specifications
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 text-blue-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      4
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Review and approval by investment committee (4-6 weeks)
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 text-blue-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      5
                    </div>
                    <p className="text-sm text-muted-foreground">Incentive package negotiation and finalization</p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 text-blue-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      6
                    </div>
                    <p className="text-sm text-muted-foreground">Implementation with ongoing support and monitoring</p>
                  </li>
                </ol>
                <Button variant="outline" className="w-full mt-4 text-sm">
                  Download Application Guidelines
                </Button>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="case-studies" className="mt-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold mb-4">Success Stories</h3>
              <p className="text-muted-foreground mb-6">
                Several investors have already capitalized on Cox's Bazar's digital infrastructure potential with
                impressive results.
              </p>

              <div className="space-y-8">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/3">
                      <div className="relative h-48 rounded-lg overflow-hidden">
                        <Image
                          src="/placeholder.svg?height=400&width=600"
                          alt="Cox's Bazar Data Center"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <div className="md:w-2/3">
                      <h4 className="text-xl font-medium mb-2">Cox's Bazar Data Center</h4>
                      <p className="text-muted-foreground mb-4">
                        Established in 2020 with an investment of $15 million, this tier-3 data center provides cloud
                        services, hosting, and disaster recovery solutions for businesses across Bangladesh.
                      </p>
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                          <p className="text-sm text-muted-foreground">Initial Investment</p>
                          <p className="font-medium">$15 million</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Annual Revenue</p>
                          <p className="font-medium">$4.2 million</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">ROI</p>
                          <p className="font-medium">24% annually</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Clients</p>
                          <p className="font-medium">120+ businesses</p>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        "The government incentives and strategic location near the submarine cable landing station made
                        this project financially attractive from the start. The fast-track approval process helped us
                        launch six months ahead of schedule." — Farhan Rahman, CEO
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-purple-50 p-6 rounded-lg">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/3">
                      <div className="relative h-48 rounded-lg overflow-hidden">
                        <Image
                          src="/placeholder.svg?height=400&width=600"
                          alt="Bay Connect"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <div className="md:w-2/3">
                      <h4 className="text-xl font-medium mb-2">Bay Connect</h4>
                      <p className="text-muted-foreground mb-4">
                        Started in 2021 with $6.5 million investment, this company provides fiber optic and wireless
                        connectivity solutions for tourism businesses and local communities.
                      </p>
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                          <p className="text-sm text-muted-foreground">Initial Investment</p>
                          <p className="font-medium">$6.5 million</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Annual Revenue</p>
                          <p className="font-medium">$2.8 million</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">ROI</p>
                          <p className="font-medium">30% annually</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Coverage</p>
                          <p className="font-medium">85% of tourist areas</p>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        "We've created 75 direct jobs and connected over 200 businesses and 15 communities to high-speed
                        internet. The spectrum allocation and right-of-way support from the government were crucial to
                        our rapid deployment." — Nadia Islam, Founder
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 p-6 rounded-lg">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/3">
                      <div className="relative h-48 rounded-lg overflow-hidden">
                        <Image
                          src="/placeholder.svg?height=400&width=600"
                          alt="Cox Tech Hub"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <div className="md:w-2/3">
                      <h4 className="text-xl font-medium mb-2">Cox Tech Hub</h4>
                      <p className="text-muted-foreground mb-4">
                        Launched in 2022 with $3.2 million investment, this innovation center and co-working space hosts
                        35+ tech startups and provides digital skills training.
                      </p>
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                          <p className="text-sm text-muted-foreground">Initial Investment</p>
                          <p className="font-medium">$3.2 million</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Annual Revenue</p>
                          <p className="font-medium">$1.1 million</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">ROI</p>
                          <p className="font-medium">22% annually</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Startups Incubated</p>
                          <p className="font-medium">35+</p>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        "The venture capital matching program helped us secure additional funding, and the skills
                        development support has enabled us to train over 500 local youth in digital skills. Several of
                        our startups are now generating significant revenue." — Dr. Mahmud Rahman, Director
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Impact Metrics</CardTitle>
                  <CardDescription>Results from digital infrastructure investments</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="pb-3 border-b">
                    <h4 className="font-medium mb-1">Economic Impact</h4>
                    <div className="space-y-2 mt-2">
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Jobs Created</span>
                        <span className="text-sm font-medium">1,800+</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Annual Investment</span>
                        <span className="text-sm font-medium">$45 million</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Business Efficiency</span>
                        <span className="text-sm font-medium">+35% average</span>
                      </div>
                    </div>
                  </div>

                  <div className="pb-3 border-b">
                    <h4 className="font-medium mb-1">Digital Transformation</h4>
                    <div className="space-y-2 mt-2">
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Internet Penetration</span>
                        <span className="text-sm font-medium">+65% in 3 years</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Digital Services</span>
                        <span className="text-sm font-medium">120+ new services</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Data Storage</span>
                        <span className="text-sm font-medium">5 PB capacity</span>
                      </div>
                    </div>
                  </div>

                  <div className="pb-3 border-b">
                    <h4 className="font-medium mb-1">Social Impact</h4>
                    <div className="space-y-2 mt-2">
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Communities Connected</span>
                        <span className="text-sm font-medium">45+</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Digital Skills Training</span>
                        <span className="text-sm font-medium">3,500+ people</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Tech Startups</span>
                        <span className="text-sm font-medium">65+ launched</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium mb-1">Tourism Enhancement</h4>
                    <div className="space-y-2 mt-2">
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Digital Tourism Services</span>
                        <span className="text-sm font-medium">25+ platforms</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Tourist Satisfaction</span>
                        <span className="text-sm font-medium">+42% improvement</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Smart Facilities</span>
                        <span className="text-sm font-medium">85+ locations</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="mt-6 bg-blue-50 p-6 rounded-lg">
                <h4 className="font-medium mb-4">Investor Testimonials</h4>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg">
                    <p className="text-sm italic text-muted-foreground mb-2">
                      "The combination of strategic location, government support, and growing digital demand made our
                      investment in Cox's Bazar data infrastructure one of our best performing assets in South Asia."
                    </p>
                    <p className="text-sm font-medium">— Asia Digital Infrastructure Fund</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <p className="text-sm italic text-muted-foreground mb-2">
                      "We've seen consistent 25%+ returns on our connectivity investments, with the added benefit of
                      contributing to digital inclusion in the region."
                    </p>
                    <p className="text-sm font-medium">— Global Tech Ventures</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <p className="text-sm italic text-muted-foreground mb-2">
                      "The tech talent pool is growing rapidly, and the ecosystem support has helped our portfolio
                      companies scale faster than expected."
                    </p>
                    <p className="text-sm font-medium">— Bay of Bengal Ventures</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="guidelines" className="mt-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold mb-4">Technical & Best Practice Guidelines</h3>
              <p className="text-muted-foreground mb-6">
                Cox's Bazar has established comprehensive technical and best practice guidelines to ensure digital
                infrastructure projects meet international standards and maximize benefits.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center">
                      <Building className="mr-2 h-5 w-5 text-blue-600" /> Technical Standards
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="bg-blue-100 text-blue-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          1
                        </div>
                        <div>
                          <p className="font-medium">Data Center Standards</p>
                          <p className="text-sm text-muted-foreground">
                            Compliance with Uptime Institute or TIA-942 standards for data center design and operation.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-blue-100 text-blue-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          2
                        </div>
                        <div>
                          <p className="font-medium">Connectivity Standards</p>
                          <p className="text-sm text-muted-foreground">
                            Adherence to IEEE, ITU, and other international standards for network infrastructure.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-blue-100 text-blue-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          3
                        </div>
                        <div>
                          <p className="font-medium">Security Standards</p>
                          <p className="text-sm text-muted-foreground">
                            Implementation of ISO 27001 and other security frameworks for data protection.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-blue-100 text-blue-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          4
                        </div>
                        <div>
                          <p className="font-medium">Interoperability</p>
                          <p className="text-sm text-muted-foreground">
                            Open standards and interoperability requirements for all digital infrastructure.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center">
                      <Leaf className="mr-2 h-5 w-5 text-green-600" /> Sustainability Standards
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="bg-green-100 text-green-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          1
                        </div>
                        <div>
                          <p className="font-medium">Energy Efficiency</p>
                          <p className="text-sm text-muted-foreground">
                            Implementation of energy-efficient designs and renewable energy use where possible.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-green-100 text-green-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          2
                        </div>
                        <div>
                          <p className="font-medium">Water Conservation</p>
                          <p className="text-sm text-muted-foreground">
                            Water-efficient cooling systems and conservation measures for data centers.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-green-100 text-green-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          3
                        </div>
                        <div>
                          <p className="font-medium">E-Waste Management</p>
                          <p className="text-sm text-muted-foreground">
                            Responsible disposal and recycling of electronic equipment and components.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-green-100 text-green-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          4
                        </div>
                        <div>
                          <p className="font-medium">Carbon Footprint</p>
                          <p className="text-sm text-muted-foreground">
                            Monitoring and reduction of carbon emissions from digital infrastructure.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center">
                      <Users className="mr-2 h-5 w-5 text-purple-600" /> Inclusion & Access
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="bg-purple-100 text-purple-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          1
                        </div>
                        <div>
                          <p className="font-medium">Digital Inclusion</p>
                          <p className="text-sm text-muted-foreground">
                            Provisions for extending digital access to underserved communities and areas.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-purple-100 text-purple-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          2
                        </div>
                        <div>
                          <p className="font-medium">Accessibility</p>
                          <p className="text-sm text-muted-foreground">
                            Ensuring digital services and facilities are accessible to people with disabilities.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-purple-100 text-purple-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          3
                        </div>
                        <div>
                          <p className="font-medium">Local Content</p>
                          <p className="text-sm text-muted-foreground">
                            Support for local language content and culturally relevant digital services.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-purple-100 text-purple-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          4
                        </div>
                        <div>
                          <p className="font-medium">Digital Literacy</p>
                          <p className="text-sm text-muted-foreground">
                            Programs to enhance digital skills and literacy in local communities.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center">
                      <Globe className="mr-2 h-5 w-5 text-amber-600" /> Resilience & Security
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="bg-amber-100 text-amber-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          1
                        </div>
                        <div>
                          <p className="font-medium">Disaster Resilience</p>
                          <p className="text-sm text-muted-foreground">
                            Design for resilience against natural disasters including cyclones and flooding.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-amber-100 text-amber-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          2
                        </div>
                        <div>
                          <p className="font-medium">Redundancy</p>
                          <p className="text-sm text-muted-foreground">
                            Multiple layers of redundancy for critical digital infrastructure components.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-amber-100 text-amber-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          3
                        </div>
                        <div>
                          <p className="font-medium">Cybersecurity</p>
                          <p className="text-sm text-muted-foreground">
                            Comprehensive cybersecurity measures and regular security audits.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-amber-100 text-amber-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          4
                        </div>
                        <div>
                          <p className="font-medium">Data Sovereignty</p>
                          <p className="text-sm text-muted-foreground">
                            Compliance with data localization and privacy requirements.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="text-xl font-medium mb-4">Certification Programs</h4>
                <p className="text-muted-foreground mb-4">
                  Cox's Bazar digital infrastructure projects are encouraged to obtain recognized certifications:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <Award className="h-5 w-5 text-blue-600 mr-2" />
                      <h5 className="font-medium">Uptime Institute</h5>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Tier certification for data centers ensuring reliability and performance standards.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <Award className="h-5 w-5 text-green-600 mr-2" />
                      <h5 className="font-medium">ISO 27001</h5>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Information security management system certification for data protection.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <Award className="h-5 w-5 text-amber-600 mr-2" />
                      <h5 className="font-medium">LEED Certification</h5>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Green building certification for environmentally sustainable digital infrastructure.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Technical Support</CardTitle>
                  <CardDescription>Resources for digital infrastructure developers</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="pb-3 border-b">
                    <h4 className="font-medium mb-1">Technical Assistance</h4>
                    <p className="text-sm text-muted-foreground">
                      Expert guidance on infrastructure design, technology selection, and implementation.
                    </p>
                    <Button variant="outline" size="sm" className="w-full mt-2">
                      Request Consultation
                    </Button>
                  </div>

                  <div className="pb-3 border-b">
                    <h4 className="font-medium mb-1">Certification Support</h4>
                    <p className="text-sm text-muted-foreground">
                      Assistance with obtaining international certifications for digital infrastructure.
                    </p>
                    <Button variant="outline" size="sm" className="w-full mt-2">
                      Certification Guide
                    </Button>
                  </div>

                  <div className="pb-3 border-b">
                    <h4 className="font-medium mb-1">Training Programs</h4>
                    <p className="text-sm text-muted-foreground">
                      Workforce development and technical training for digital infrastructure operations.
                    </p>
                    <Button variant="outline" size="sm" className="w-full mt-2">
                      Training Calendar
                    </Button>
                  </div>

                  <div>
                    <h4 className="font-medium mb-1">Testing Services</h4>
                    <p className="text-sm text-muted-foreground">
                      Access to testing facilities for equipment verification and performance assessment.
                    </p>
                    <Button variant="outline" size="sm" className="w-full mt-2">
                      Testing Services
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <div className="mt-6 bg-blue-50 p-6 rounded-lg">
                <h4 className="font-medium mb-4">Benefits of Digital Infrastructure</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="bg-blue-100 text-blue-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      ✓
                    </div>
                    <div>
                      <p className="font-medium">Economic Growth</p>
                      <p className="text-sm text-muted-foreground">
                        Enabling digital businesses and improving efficiency
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 text-blue-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      ✓
                    </div>
                    <div>
                      <p className="font-medium">Tourism Enhancement</p>
                      <p className="text-sm text-muted-foreground">Improved visitor experience and services</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 text-blue-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      ✓
                    </div>
                    <div>
                      <p className="font-medium">Education & Skills</p>
                      <p className="text-sm text-muted-foreground">Access to digital learning and opportunities</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 text-blue-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      ✓
                    </div>
                    <div>
                      <p className="font-medium">Disaster Resilience</p>
                      <p className="text-sm text-muted-foreground">
                        Better communication and coordination during emergencies
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 text-blue-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      ✓
                    </div>
                    <div>
                      <p className="font-medium">Global Connectivity</p>
                      <p className="text-sm text-muted-foreground">Integration with global digital economy</p>
                    </div>
                  </li>
                </ul>
                <Button variant="outline" className="w-full mt-4 text-sm">
                  Download Digital Infrastructure Guide
                </Button>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      <div className="bg-gradient-to-r from-blue-600 to-indigo-800 rounded-xl p-8 text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Ready to Invest in Cox's Bazar Digital Infrastructure?</h2>
            <p className="mb-6">
              Connect with our investment facilitation team to explore opportunities, incentives, and support for your
              digital infrastructure venture.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="secondary" size="lg">
                Schedule Consultation
              </Button>
              <Button variant="outline" className="bg-transparent text-white border-white hover:bg-white/10" size="lg">
                Download Investment Guide
              </Button>
            </div>
          </div>
          <div className="bg-white/10 p-6 rounded-lg">
            <h3 className="text-xl font-medium mb-4">Investment Fast Track</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="bg-white text-blue-600 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                  1
                </div>
                <p>Initial consultation and opportunity matching</p>
              </li>
              <li className="flex items-start">
                <div className="bg-white text-blue-600 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                  2
                </div>
                <p>Technical assessment and planning</p>
              </li>
              <li className="flex items-start">
                <div className="bg-white text-blue-600 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                  3
                </div>
                <p>Regulatory guidance and permit facilitation</p>
              </li>
              <li className="flex items-start">
                <div className="bg-white text-blue-600 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                  4
                </div>
                <p>Implementation support and ongoing assistance</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

