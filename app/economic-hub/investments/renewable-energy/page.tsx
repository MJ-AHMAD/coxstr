import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Download, TrendingUp, Globe, Award, Building, Users, Leaf } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata = {
  title: "Renewable Energy Investment | Cox's Bazar Economic Hub",
  description:
    "Explore investment opportunities in solar, wind, and other renewable energy projects in Cox's Bazar with high ROI potential and government incentives.",
}

export default function RenewableEnergyPage() {
  return (
    <div className="container mx-auto py-12">
      <div className="mb-8">
        <Link href="/economic-hub" className="flex items-center text-muted-foreground hover:text-primary mb-4">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Economic Hub
        </Link>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-4xl font-bold mb-2">Renewable Energy Investment</h1>
            <p className="text-xl text-muted-foreground">
              Solar, wind, and biomass energy projects with strong growth potential and incentives
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
              alt="Renewable Energy in Cox's Bazar"
              fill
              className="object-cover"
            />
          </div>
          <div className="prose max-w-none">
            <p className="text-lg leading-relaxed">
              Cox's Bazar offers exceptional opportunities for renewable energy investment, with abundant solar
              radiation, consistent coastal winds, and growing energy demand. With the renewable energy sector growing
              at 20-25% annually and government prioritization of clean energy development, the region presents
              compelling investment potential.
            </p>
            <p className="leading-relaxed">
              The Bangladesh government has designated Cox's Bazar as a priority zone for renewable energy development
              with special incentives for clean energy projects. Investors can benefit from tax holidays, duty
              exemptions, and streamlined approval processes while contributing to sustainable economic growth in the
              region.
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
                <span className="text-muted-foreground">Annual Sector Growth</span>
                <span className="font-medium">20-25%</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b">
                <span className="text-muted-foreground">Solar Radiation</span>
                <span className="font-medium">4.5-5.5 kWh/m²/day</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b">
                <span className="text-muted-foreground">Average ROI</span>
                <span className="font-medium">15-20%</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b">
                <span className="text-muted-foreground">Payback Period</span>
                <span className="font-medium">5-7 Years</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b">
                <span className="text-muted-foreground">Tax Holiday</span>
                <span className="font-medium">Up to 15 Years</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Energy Demand Growth</span>
                <span className="font-medium">12% Annually</span>
              </div>
            </CardContent>
          </Card>

          <div className="mt-6 bg-green-50 rounded-lg p-6">
            <h3 className="text-lg font-medium mb-4 flex items-center">
              <TrendingUp className="mr-2 h-5 w-5 text-green-600" /> Market Opportunity
            </h3>
            <p className="mb-4 text-muted-foreground">
              The renewable energy market in Bangladesh is projected to reach $1.5 billion by 2025, with Cox's Bazar
              positioned as a key development zone.
            </p>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="bg-white p-3 rounded-lg">
                <p className="text-2xl font-bold text-green-600">40%</p>
                <p className="text-xs text-muted-foreground">Energy supply gap in coastal regions</p>
              </div>
              <div className="bg-white p-3 rounded-lg">
                <p className="text-2xl font-bold text-green-600">30%</p>
                <p className="text-xs text-muted-foreground">Renewable energy target by 2030</p>
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
          <TabsTrigger value="guidelines">Sustainability</TabsTrigger>
        </TabsList>

        <TabsContent value="opportunities" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Solar Power Plants"
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardHeader>
                <CardTitle>Solar Power Plants</CardTitle>
                <CardDescription>Utility-scale and commercial installations</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Development of grid-connected and off-grid solar power plants to serve local communities and
                  businesses.
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Investment Range</span>
                    <span className="text-sm font-medium">$2-20 million</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Estimated ROI</span>
                    <span className="text-sm font-medium">15-18% annually</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Solar Potential</span>
                    <span className="text-sm font-medium">Excellent</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Wind Energy"
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardHeader>
                <CardTitle>Wind Energy</CardTitle>
                <CardDescription>Coastal wind farms and hybrid systems</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Establishment of wind farms along the coastal areas with consistent wind patterns and hybrid
                  wind-solar installations.
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Investment Range</span>
                    <span className="text-sm font-medium">$5-30 million</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Estimated ROI</span>
                    <span className="text-sm font-medium">14-16% annually</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Wind Speed</span>
                    <span className="text-sm font-medium">5-7 m/s average</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Biomass Energy"
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardHeader>
                <CardTitle>Biomass Energy</CardTitle>
                <CardDescription>Waste-to-energy and biofuel production</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Conversion of agricultural waste, seafood processing by-products, and other biomass into energy and
                  biofuels.
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Investment Range</span>
                    <span className="text-sm font-medium">$1-8 million</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Estimated ROI</span>
                    <span className="text-sm font-medium">16-20% annually</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Feedstock</span>
                    <span className="text-sm font-medium">Abundant</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Energy Storage"
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardHeader>
                <CardTitle>Energy Storage</CardTitle>
                <CardDescription>Battery systems and innovative solutions</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Development of energy storage solutions to enhance reliability of renewable energy systems and provide
                  backup power.
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
                  alt="Microgrids"
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardHeader>
                <CardTitle>Microgrids</CardTitle>
                <CardDescription>Community and commercial power systems</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Installation of renewable-powered microgrids for remote communities, tourism facilities, and
                  industrial users.
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Investment Range</span>
                    <span className="text-sm font-medium">$0.5-5 million</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Estimated ROI</span>
                    <span className="text-sm font-medium">20-25% annually</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Demand</span>
                    <span className="text-sm font-medium">High</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Green Hydrogen"
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardHeader>
                <CardTitle>Green Hydrogen</CardTitle>
                <CardDescription>Future-focused energy technology</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Early-stage investment in green hydrogen production using renewable energy for industrial applications
                  and export.
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Investment Range</span>
                    <span className="text-sm font-medium">$5-25 million</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Estimated ROI</span>
                    <span className="text-sm font-medium">Long-term</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Growth Potential</span>
                    <span className="text-sm font-medium">Exponential</span>
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
                The Bangladesh government has established a comprehensive package of incentives to attract renewable
                energy investment in Cox's Bazar.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <Card className="bg-green-50 border-green-200">
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center text-green-700">
                      <Award className="mr-2 h-5 w-5" /> Fiscal Incentives
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="bg-green-100 text-green-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          ✓
                        </div>
                        <div>
                          <p className="font-medium">Tax Holidays</p>
                          <p className="text-sm text-muted-foreground">
                            10-15 year income tax exemption for renewable energy projects
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-green-100 text-green-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          ✓
                        </div>
                        <div>
                          <p className="font-medium">Duty Exemptions</p>
                          <p className="text-sm text-muted-foreground">
                            Import duty exemption on renewable energy equipment and components
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-green-100 text-green-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          ✓
                        </div>
                        <div>
                          <p className="font-medium">Accelerated Depreciation</p>
                          <p className="text-sm text-muted-foreground">
                            Special depreciation allowances for renewable energy assets
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-green-100 text-green-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          ✓
                        </div>
                        <div>
                          <p className="font-medium">VAT Exemptions</p>
                          <p className="text-sm text-muted-foreground">
                            VAT exemption on renewable energy equipment and services
                          </p>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-blue-50 border-blue-200">
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center text-blue-700">
                      <Globe className="mr-2 h-5 w-5" /> Market Incentives
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="bg-blue-100 text-blue-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          ✓
                        </div>
                        <div>
                          <p className="font-medium">Feed-in Tariffs</p>
                          <p className="text-sm text-muted-foreground">
                            Guaranteed purchase of renewable energy at premium rates for 20 years
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-blue-100 text-blue-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          ✓
                        </div>
                        <div>
                          <p className="font-medium">Net Metering</p>
                          <p className="text-sm text-muted-foreground">
                            Policy allowing sale of excess energy back to the grid
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-blue-100 text-blue-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          ✓
                        </div>
                        <div>
                          <p className="font-medium">Priority Dispatch</p>
                          <p className="text-sm text-muted-foreground">
                            Guaranteed priority for renewable energy in the grid system
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-blue-100 text-blue-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          ✓
                        </div>
                        <div>
                          <p className="font-medium">Carbon Credits</p>
                          <p className="text-sm text-muted-foreground">
                            Support for accessing international carbon credit markets
                          </p>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-purple-50 border-purple-200">
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center text-purple-700">
                      <Building className="mr-2 h-5 w-5" /> Land & Infrastructure
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="bg-purple-100 text-purple-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          ✓
                        </div>
                        <div>
                          <p className="font-medium">Land Allocation</p>
                          <p className="text-sm text-muted-foreground">
                            Dedicated renewable energy zones with pre-approved land
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-purple-100 text-purple-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          ✓
                        </div>
                        <div>
                          <p className="font-medium">Grid Connection</p>
                          <p className="text-sm text-muted-foreground">
                            Prioritized grid connection and infrastructure for renewable projects
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-purple-100 text-purple-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          ✓
                        </div>
                        <div>
                          <p className="font-medium">Special Economic Zones</p>
                          <p className="text-sm text-muted-foreground">
                            Inclusion of renewable energy in special economic zone benefits
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-purple-100 text-purple-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          ✓
                        </div>
                        <div>
                          <p className="font-medium">Fast-Track Approvals</p>
                          <p className="text-sm text-muted-foreground">
                            Streamlined permitting for renewable energy projects
                          </p>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-amber-50 border-amber-200">
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center text-amber-700">
                      <Users className="mr-2 h-5 w-5" /> Technical Support
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="bg-amber-100 text-amber-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          ✓
                        </div>
                        <div>
                          <p className="font-medium">Resource Assessment</p>
                          <p className="text-sm text-muted-foreground">
                            Government-funded solar and wind resource mapping and data
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-amber-100 text-amber-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          ✓
                        </div>
                        <div>
                          <p className="font-medium">Technical Assistance</p>
                          <p className="text-sm text-muted-foreground">
                            Expert support for project design and implementation
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-amber-100 text-amber-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          ✓
                        </div>
                        <div>
                          <p className="font-medium">Workforce Development</p>
                          <p className="text-sm text-muted-foreground">
                            Subsidized training programs for renewable energy workforce
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
                            Collaboration with research institutions for technology adaptation
                          </p>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="text-xl font-medium mb-4">Renewable Energy Investment Promotion Agency</h4>
                <p className="text-muted-foreground mb-4">
                  The Sustainable and Renewable Energy Development Authority (SREDA) has established a dedicated
                  Renewable Energy Investment Promotion Agency to facilitate investments in Cox's Bazar:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Single window clearance for renewable energy projects</li>
                  <li>• Dedicated investment advisors for each project</li>
                  <li>• Assistance with resource assessment and feasibility studies</li>
                  <li>• Facilitation of power purchase agreements and grid connections</li>
                  <li>• Coordination with relevant government agencies</li>
                </ul>
              </div>
            </div>

            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Financing Options</CardTitle>
                  <CardDescription>Special financing for renewable energy</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="pb-3 border-b">
                    <h4 className="font-medium mb-1">Green Energy Fund</h4>
                    <p className="text-sm text-muted-foreground">
                      Dedicated fund offering low-interest loans for renewable energy projects.
                    </p>
                    <div className="mt-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Interest Rate</span>
                        <span className="font-medium">3-5%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Loan Term</span>
                        <span className="font-medium">Up to 15 years</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Grace Period</span>
                        <span className="font-medium">2-3 years</span>
                      </div>
                    </div>
                  </div>

                  <div className="pb-3 border-b">
                    <h4 className="font-medium mb-1">Viability Gap Funding</h4>
                    <p className="text-sm text-muted-foreground">
                      Government grants covering part of the capital cost for innovative projects.
                    </p>
                    <div className="mt-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Grant Coverage</span>
                        <span className="font-medium">Up to 30%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Focus Areas</span>
                        <span className="font-medium">New technologies</span>
                      </div>
                    </div>
                  </div>

                  <div className="pb-3 border-b">
                    <h4 className="font-medium mb-1">International Climate Finance</h4>
                    <p className="text-sm text-muted-foreground">
                      Access to international climate funds and green financing mechanisms.
                    </p>
                    <div className="mt-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Available From</span>
                        <span className="font-medium">GCF, ADB, World Bank</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Focus Areas</span>
                        <span className="font-medium">Climate Mitigation</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium mb-1">Green Bonds</h4>
                    <p className="text-sm text-muted-foreground">
                      Support for issuing green bonds to finance large renewable energy projects.
                    </p>
                    <div className="mt-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Target Projects</span>
                        <span className="font-medium">Large-scale renewables</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Minimum Size</span>
                        <span className="font-medium">$10 million+</span>
                      </div>
                    </div>
                  </div>

                  <Button className="w-full mt-4">Financing Consultation</Button>
                </CardContent>
              </Card>

              <div className="mt-6 p-6 bg-green-50 rounded-lg">
                <h4 className="font-medium mb-4">Application Process</h4>
                <ol className="space-y-3">
                  <li className="flex items-start">
                    <div className="bg-green-100 text-green-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      1
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Submit project concept to Renewable Energy Investment Promotion Agency
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-green-100 text-green-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      2
                    </div>
                    <p className="text-sm text-muted-foreground">Initial assessment and feedback (2-3 weeks)</p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-green-100 text-green-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      3
                    </div>
                    <p className="text-sm text-muted-foreground">Detailed project proposal with feasibility study</p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-green-100 text-green-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      4
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Review and approval by investment committee (4-6 weeks)
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-green-100 text-green-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      5
                    </div>
                    <p className="text-sm text-muted-foreground">Incentive package negotiation and finalization</p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-green-100 text-green-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
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
                Several investors have already capitalized on Cox's Bazar's renewable energy potential with impressive
                results.
              </p>

              <div className="space-y-8">
                <div className="bg-green-50 p-6 rounded-lg">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/3">
                      <div className="relative h-48 rounded-lg overflow-hidden">
                        <Image
                          src="/placeholder.svg?height=400&width=600"
                          alt="Cox's Bazar Solar Park"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <div className="md:w-2/3">
                      <h4 className="text-xl font-medium mb-2">Cox's Bazar Solar Park</h4>
                      <p className="text-muted-foreground mb-4">
                        Established in 2019 with an investment of $12 million, this 10MW solar park provides clean
                        energy to the local grid and several commercial facilities.
                      </p>
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                          <p className="text-sm text-muted-foreground">Initial Investment</p>
                          <p className="font-medium">$12 million</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Annual Revenue</p>
                          <p className="font-medium">$2.2 million</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">ROI</p>
                          <p className="font-medium">16% annually</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">CO2 Reduction</p>
                          <p className="font-medium">12,500 tons/year</p>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        "The government incentives and feed-in tariff made this project financially viable from day one.
                        The streamlined approval process and technical support helped us complete the project six months
                        ahead of schedule." — Amir Khan, Project Director
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/3">
                      <div className="relative h-48 rounded-lg overflow-hidden">
                        <Image
                          src="/placeholder.svg?height=400&width=600"
                          alt="Coastal Wind Energy"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <div className="md:w-2/3">
                      <h4 className="text-xl font-medium mb-2">Coastal Wind Energy</h4>
                      <p className="text-muted-foreground mb-4">
                        Started in 2020 with $8.5 million investment, this wind farm with 5MW capacity serves the
                        growing energy needs of the tourism sector.
                      </p>
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                          <p className="text-sm text-muted-foreground">Initial Investment</p>
                          <p className="font-medium">$8.5 million</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Annual Revenue</p>
                          <p className="font-medium">$1.4 million</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">ROI</p>
                          <p className="font-medium">15% annually</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Growth Rate</p>
                          <p className="font-medium">Expansion planned</p>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        "We've created 35 direct jobs and established a reliable power source for several resorts and
                        communities. The resource assessment data provided by the government was crucial for optimal
                        turbine placement and performance." — Nadia Islam, CEO
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-amber-50 p-6 rounded-lg">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/3">
                      <div className="relative h-48 rounded-lg overflow-hidden">
                        <Image
                          src="/placeholder.svg?height=400&width=600"
                          alt="Island Microgrid Solutions"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <div className="md:w-2/3">
                      <h4 className="text-xl font-medium mb-2">Island Microgrid Solutions</h4>
                      <p className="text-muted-foreground mb-4">
                        Launched in 2021 with $3.2 million investment, this company develops solar-battery microgrids
                        for island communities and remote resorts.
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
                          <p className="font-medium">24% annually</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Communities Served</p>
                          <p className="font-medium">12 and growing</p>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        "The viability gap funding made our innovative storage solution affordable for small
                        communities. We've replaced diesel generators with clean energy systems, reducing costs for
                        users by 40% while eliminating pollution." — Dr. Mahmud Rahman, Founder
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
                  <CardDescription>Results from renewable energy investments</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="pb-3 border-b">
                    <h4 className="font-medium mb-1">Economic Impact</h4>
                    <div className="space-y-2 mt-2">
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Jobs Created</span>
                        <span className="text-sm font-medium">1,200+</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Annual Investment</span>
                        <span className="text-sm font-medium">$35 million</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Energy Cost Savings</span>
                        <span className="text-sm font-medium">$12 million/year</span>
                      </div>
                    </div>
                  </div>

                  <div className="pb-3 border-b">
                    <h4 className="font-medium mb-1">Environmental Impact</h4>
                    <div className="space-y-2 mt-2">
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">CO2 Reduction</span>
                        <span className="text-sm font-medium">45,000 tons/year</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Diesel Displacement</span>
                        <span className="text-sm font-medium">3.8 million liters</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Clean Energy Generated</span>
                        <span className="text-sm font-medium">65 GWh/year</span>
                      </div>
                    </div>
                  </div>

                  <div className="pb-3 border-b">
                    <h4 className="font-medium mb-1">Social Impact</h4>
                    <div className="space-y-2 mt-2">
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Communities Electrified</span>
                        <span className="text-sm font-medium">28</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Skills Training</span>
                        <span className="text-sm font-medium">850 people</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Energy Access</span>
                        <span className="text-sm font-medium">+35% improvement</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium mb-1">Energy Transition</h4>
                    <div className="space-y-2 mt-2">
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Renewable Capacity</span>
                        <span className="text-sm font-medium">45 MW installed</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Grid Reliability</span>
                        <span className="text-sm font-medium">+28% improvement</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Energy Mix Change</span>
                        <span className="text-sm font-medium">22% renewable</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="mt-6 bg-green-50 p-6 rounded-lg">
                <h4 className="font-medium mb-4">Investor Testimonials</h4>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg">
                    <p className="text-sm italic text-muted-foreground mb-2">
                      "The combination of excellent solar resources, government support, and growing energy demand made
                      our investment in Cox's Bazar solar energy one of our best performing assets in South Asia."
                    </p>
                    <p className="text-sm font-medium">— Global Renewable Fund</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <p className="text-sm italic text-muted-foreground mb-2">
                      "We've seen consistent 15%+ returns on our wind energy investment, with the added benefit of
                      contributing to sustainable development in the region."
                    </p>
                    <p className="text-sm font-medium">— Clean Energy Partners</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <p className="text-sm italic text-muted-foreground mb-2">
                      "The feed-in tariff structure and long-term power purchase agreements provide the stability we
                      need for infrastructure investments with predictable returns."
                    </p>
                    <p className="text-sm font-medium">— Asia Infrastructure Investments</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="guidelines" className="mt-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold mb-4">Technical & Sustainability Guidelines</h3>
              <p className="text-muted-foreground mb-6">
                Cox's Bazar has established comprehensive technical and sustainability guidelines to ensure renewable
                energy projects meet international standards and maximize benefits.
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
                          <p className="font-medium">Equipment Quality</p>
                          <p className="text-sm text-muted-foreground">
                            All equipment must meet international quality standards (IEC, IEEE) and be certified by
                            recognized bodies.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-blue-100 text-blue-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          2
                        </div>
                        <div>
                          <p className="font-medium">Grid Integration</p>
                          <p className="text-sm text-muted-foreground">
                            Compliance with grid code requirements for power quality, frequency control, and voltage
                            regulation.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-blue-100 text-blue-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          3
                        </div>
                        <div>
                          <p className="font-medium">Performance Monitoring</p>
                          <p className="text-sm text-muted-foreground">
                            Implementation of real-time monitoring systems with data sharing to regulatory authorities.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-blue-100 text-blue-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          4
                        </div>
                        <div>
                          <p className="font-medium">Safety Standards</p>
                          <p className="text-sm text-muted-foreground">
                            Adherence to international safety standards for installation, operation, and maintenance.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center">
                      <Leaf className="mr-2 h-5 w-5 text-green-600" /> Environmental Standards
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="bg-green-100 text-green-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          1
                        </div>
                        <div>
                          <p className="font-medium">Environmental Impact</p>
                          <p className="text-sm text-muted-foreground">
                            Comprehensive environmental impact assessment and mitigation measures for all projects.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-green-100 text-green-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          2
                        </div>
                        <div>
                          <p className="font-medium">Land Use</p>
                          <p className="text-sm text-muted-foreground">
                            Responsible land use practices with minimal disruption to natural habitats and biodiversity.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-green-100 text-green-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          3
                        </div>
                        <div>
                          <p className="font-medium">Water Conservation</p>
                          <p className="text-sm text-muted-foreground">
                            Minimal water use for solar panel cleaning and other operations with recycling systems.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-green-100 text-green-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          4
                        </div>
                        <div>
                          <p className="font-medium">End-of-Life Management</p>
                          <p className="text-sm text-muted-foreground">
                            Responsible decommissioning and recycling plans for equipment at end of life.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center">
                      <Users className="mr-2 h-5 w-5 text-purple-600" /> Social Responsibility
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="bg-purple-100 text-purple-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          1
                        </div>
                        <div>
                          <p className="font-medium">Community Engagement</p>
                          <p className="text-sm text-muted-foreground">
                            Meaningful consultation with local communities and stakeholders throughout project
                            lifecycle.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-purple-100 text-purple-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          2
                        </div>
                        <div>
                          <p className="font-medium">Local Employment</p>
                          <p className="text-sm text-muted-foreground">
                            Prioritization of local workforce with training and skills development programs.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-purple-100 text-purple-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          3
                        </div>
                        <div>
                          <p className="font-medium">Community Benefits</p>
                          <p className="text-sm text-muted-foreground">
                            Implementation of community benefit sharing mechanisms such as local energy access.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-purple-100 text-purple-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          4
                        </div>
                        <div>
                          <p className="font-medium">Gender Inclusion</p>
                          <p className="text-sm text-muted-foreground">
                            Promotion of gender equality and opportunities for women in the renewable energy sector.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center">
                      <Globe className="mr-2 h-5 w-5 text-amber-600" /> Operational Excellence
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="bg-amber-100 text-amber-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          1
                        </div>
                        <div>
                          <p className="font-medium">Maintenance Standards</p>
                          <p className="text-sm text-muted-foreground">
                            Implementation of preventive maintenance programs to ensure optimal performance.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-amber-100 text-amber-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          2
                        </div>
                        <div>
                          <p className="font-medium">Local Capacity Building</p>
                          <p className="text-sm text-muted-foreground">
                            Development of local technical expertise for operation and maintenance.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-amber-100 text-amber-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          3
                        </div>
                        <div>
                          <p className="font-medium">Performance Reporting</p>
                          <p className="text-sm text-muted-foreground">
                            Regular reporting on energy production, efficiency, and environmental impact.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-amber-100 text-amber-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          4
                        </div>
                        <div>
                          <p className="font-medium">Continuous Improvement</p>
                          <p className="text-sm text-muted-foreground">
                            Implementation of systems for ongoing optimization and technology upgrades.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="text-xl font-medium mb-4">Certification Programs</h4>
                <p className="text-muted-foreground mb-4">
                  Cox's Bazar renewable energy projects are encouraged to obtain recognized certifications:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <Award className="h-5 w-5 text-green-600 mr-2" />
                      <h5 className="font-medium">Gold Standard</h5>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Certification for climate and development interventions to quantify, certify and maximize their
                      impact.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <Award className="h-5 w-5 text-blue-600 mr-2" />
                      <h5 className="font-medium">IEC RE Standards</h5>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      International Electrotechnical Commission standards for renewable energy equipment and systems.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <Award className="h-5 w-5 text-amber-600 mr-2" />
                      <h5 className="font-medium">ISO 50001</h5>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Energy management system standard for enhanced energy performance and efficiency.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Technical Support</CardTitle>
                  <CardDescription>Resources for renewable energy developers</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="pb-3 border-b">
                    <h4 className="font-medium mb-1">Resource Assessment</h4>
                    <p className="text-sm text-muted-foreground">
                      Access to detailed solar radiation and wind resource data for project planning.
                    </p>
                    <Button variant="outline" size="sm" className="w-full mt-2">
                      Access Resource Maps
                    </Button>
                  </div>

                  <div className="pb-3 border-b">
                    <h4 className="font-medium mb-1">Technical Assistance</h4>
                    <p className="text-sm text-muted-foreground">
                      Expert guidance on project design, technology selection, and grid integration.
                    </p>
                    <Button variant="outline" size="sm" className="w-full mt-2">
                      Request Consultation
                    </Button>
                  </div>

                  <div className="pb-3 border-b">
                    <h4 className="font-medium mb-1">Training Programs</h4>
                    <p className="text-sm text-muted-foreground">
                      Workforce development and technical training for renewable energy projects.
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

              <div className="mt-6 bg-green-50 p-6 rounded-lg">
                <h4 className="font-medium mb-4">Benefits of Renewable Energy</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="bg-green-100 text-green-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      ✓
                    </div>
                    <div>
                      <p className="font-medium">Energy Security</p>
                      <p className="text-sm text-muted-foreground">Reduced dependence on imported fossil fuels</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-green-100 text-green-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      ✓
                    </div>
                    <div>
                      <p className="font-medium">Cost Stability</p>
                      <p className="text-sm text-muted-foreground">
                        Long-term price stability without fuel cost volatility
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-green-100 text-green-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      ✓
                    </div>
                    <div>
                      <p className="font-medium">Environmental Benefits</p>
                      <p className="text-sm text-muted-foreground">Reduced emissions and pollution</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-green-100 text-green-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      ✓
                    </div>
                    <div>
                      <p className="font-medium">Economic Development</p>
                      <p className="text-sm text-muted-foreground">Job creation and local economic benefits</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-green-100 text-green-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      ✓
                    </div>
                    <div>
                      <p className="font-medium">Tourism Enhancement</p>
                      <p className="text-sm text-muted-foreground">
                        Support for eco-tourism and sustainable development
                      </p>
                    </div>
                  </li>
                </ul>
                <Button variant="outline" className="w-full mt-4 text-sm">
                  Download Renewable Energy Guide
                </Button>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      <div className="bg-gradient-to-r from-green-600 to-green-800 rounded-xl p-8 text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Ready to Invest in Cox's Bazar Renewable Energy?</h2>
            <p className="mb-6">
              Connect with our investment facilitation team to explore opportunities, incentives, and support for your
              renewable energy venture.
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
                <div className="bg-white text-green-600 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                  1
                </div>
                <p>Initial consultation and resource assessment</p>
              </li>
              <li className="flex items-start">
                <div className="bg-white text-green-600 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                  2
                </div>
                <p>Site visit and feasibility study</p>
              </li>
              <li className="flex items-start">
                <div className="bg-white text-green-600 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                  3
                </div>
                <p>Regulatory guidance and permit facilitation</p>
              </li>
              <li className="flex items-start">
                <div className="bg-white text-green-600 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
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

