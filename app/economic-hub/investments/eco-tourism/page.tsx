import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Download, TrendingUp, Globe, Award, Building, Users, Leaf } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata = {
  title: "Eco-Tourism Investment | Cox's Bazar Economic Hub",
  description:
    "Explore investment opportunities in sustainable eco-tourism infrastructure in Cox's Bazar with high ROI potential and government incentives.",
}

export default function EcoTourismPage() {
  return (
    <div className="container mx-auto py-12">
      <div className="mb-8">
        <Link href="/economic-hub" className="flex items-center text-muted-foreground hover:text-primary mb-4">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Economic Hub
        </Link>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-4xl font-bold mb-2">Eco-Tourism Infrastructure Investment</h1>
            <p className="text-xl text-muted-foreground">
              Sustainable resort development and tourism facilities with government incentives
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
              alt="Eco-Tourism in Cox's Bazar"
              fill
              className="object-cover"
            />
          </div>
          <div className="prose max-w-none">
            <p className="text-lg leading-relaxed">
              Cox's Bazar offers exceptional opportunities for eco-tourism investment, combining the world's longest
              natural sea beach with pristine forests, diverse wildlife, and unique cultural experiences. With tourism
              growing at 15-20% annually and government prioritization of sustainable development, the region presents
              compelling investment potential.
            </p>
            <p className="leading-relaxed">
              The Bangladesh government has designated Cox's Bazar as a priority tourism zone with special incentives
              for eco-friendly developments. Investors can benefit from tax holidays, duty exemptions, and streamlined
              approval processes while contributing to sustainable economic growth in the region.
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
                <span className="text-muted-foreground">Annual Tourism Growth</span>
                <span className="font-medium">15-20%</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b">
                <span className="text-muted-foreground">Annual Visitors</span>
                <span className="font-medium">2.5+ Million</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b">
                <span className="text-muted-foreground">Average ROI</span>
                <span className="font-medium">18-25%</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b">
                <span className="text-muted-foreground">Payback Period</span>
                <span className="font-medium">4-6 Years</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b">
                <span className="text-muted-foreground">Tax Holiday</span>
                <span className="font-medium">Up to 10 Years</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Land Lease Terms</span>
                <span className="font-medium">30-99 Years</span>
              </div>
            </CardContent>
          </Card>

          <div className="mt-6 bg-green-50 rounded-lg p-6">
            <h3 className="text-lg font-medium mb-4 flex items-center">
              <TrendingUp className="mr-2 h-5 w-5 text-green-600" /> Market Opportunity
            </h3>
            <p className="mb-4 text-muted-foreground">
              The global eco-tourism market is projected to reach $333.8 billion by 2027, with Asia-Pacific being the
              fastest-growing region at 14% CAGR.
            </p>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="bg-white p-3 rounded-lg">
                <p className="text-2xl font-bold text-green-600">73%</p>
                <p className="text-xs text-muted-foreground">Of travelers prefer sustainable accommodations</p>
              </div>
              <div className="bg-white p-3 rounded-lg">
                <p className="text-2xl font-bold text-green-600">25%</p>
                <p className="text-xs text-muted-foreground">Premium pricing for eco-friendly options</p>
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
                  alt="Eco Resorts"
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardHeader>
                <CardTitle>Eco Resorts & Lodges</CardTitle>
                <CardDescription>Sustainable accommodation facilities</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Development of environmentally sensitive resorts and lodges using sustainable materials and practices.
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Investment Range</span>
                    <span className="text-sm font-medium">$2-15 million</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Estimated ROI</span>
                    <span className="text-sm font-medium">20-25% annually</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Occupancy Rate</span>
                    <span className="text-sm font-medium">70-85%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Adventure Tourism"
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardHeader>
                <CardTitle>Adventure Tourism</CardTitle>
                <CardDescription>Outdoor activities and experiences</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Investment in water sports, hiking trails, nature tours, and adventure activities with minimal
                  environmental impact.
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Investment Range</span>
                    <span className="text-sm font-medium">$0.5-3 million</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Estimated ROI</span>
                    <span className="text-sm font-medium">25-30% annually</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Growth Rate</span>
                    <span className="text-sm font-medium">18% annually</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Wellness Tourism"
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardHeader>
                <CardTitle>Wellness Tourism</CardTitle>
                <CardDescription>Health and wellness facilities</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Development of spa resorts, yoga retreats, and wellness centers leveraging the natural healing
                  environment.
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Investment Range</span>
                    <span className="text-sm font-medium">$1-8 million</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Estimated ROI</span>
                    <span className="text-sm font-medium">18-22% annually</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Target Market</span>
                    <span className="text-sm font-medium">Premium</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Cultural Tourism"
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardHeader>
                <CardTitle>Cultural Tourism</CardTitle>
                <CardDescription>Cultural experiences and heritage</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Investment in cultural centers, artisan villages, and heritage experiences showcasing local
                  traditions.
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Investment Range</span>
                    <span className="text-sm font-medium">$0.3-2 million</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Estimated ROI</span>
                    <span className="text-sm font-medium">15-20% annually</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Community Impact</span>
                    <span className="text-sm font-medium">High</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Eco-Friendly Transportation"
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardHeader>
                <CardTitle>Green Transportation</CardTitle>
                <CardDescription>Sustainable mobility solutions</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Development of electric vehicle fleets, bicycle rentals, and eco-friendly transportation networks.
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Investment Range</span>
                    <span className="text-sm font-medium">$0.5-4 million</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Estimated ROI</span>
                    <span className="text-sm font-medium">15-18% annually</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Carbon Reduction</span>
                    <span className="text-sm font-medium">Significant</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Sustainable Dining"
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardHeader>
                <CardTitle>Sustainable Dining</CardTitle>
                <CardDescription>Farm-to-table restaurants and cafes</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Investment in organic restaurants, seafood eateries, and culinary experiences using local ingredients.
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Investment Range</span>
                    <span className="text-sm font-medium">$0.2-1.5 million</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Estimated ROI</span>
                    <span className="text-sm font-medium">22-28% annually</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Local Sourcing</span>
                    <span className="text-sm font-medium">80%+ ingredients</span>
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
                The Bangladesh government has established a comprehensive package of incentives to attract sustainable
                tourism investment in Cox's Bazar.
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
                          ✓
                        </div>
                        <div>
                          <p className="font-medium">Tax Holidays</p>
                          <p className="text-sm text-muted-foreground">
                            5-10 year income tax exemption for eco-tourism projects
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
                            Import duty exemption on capital machinery and equipment
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
                            Special depreciation allowances for eco-friendly investments
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
                            VAT exemption on specific tourism services and facilities
                          </p>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-green-50 border-green-200">
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center text-green-700">
                      <Leaf className="mr-2 h-5 w-5" /> Sustainability Incentives
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="bg-green-100 text-green-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          ✓
                        </div>
                        <div>
                          <p className="font-medium">Green Certification Subsidies</p>
                          <p className="text-sm text-muted-foreground">
                            Financial support for obtaining international green certifications
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-green-100 text-green-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          ✓
                        </div>
                        <div>
                          <p className="font-medium">Renewable Energy Grants</p>
                          <p className="text-sm text-muted-foreground">
                            Grants covering up to 30% of renewable energy installation costs
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-green-100 text-green-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          ✓
                        </div>
                        <div>
                          <p className="font-medium">Water Conservation Incentives</p>
                          <p className="text-sm text-muted-foreground">
                            Special allowances for water recycling and conservation systems
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-green-100 text-green-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          ✓
                        </div>
                        <div>
                          <p className="font-medium">Waste Management Support</p>
                          <p className="text-sm text-muted-foreground">
                            Technical and financial assistance for waste management solutions
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
                          <p className="font-medium">Preferential Land Leasing</p>
                          <p className="text-sm text-muted-foreground">
                            Long-term land leases (30-99 years) at favorable rates
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-purple-100 text-purple-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          ✓
                        </div>
                        <div>
                          <p className="font-medium">Infrastructure Development</p>
                          <p className="text-sm text-muted-foreground">
                            Government investment in access roads, utilities, and public facilities
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-purple-100 text-purple-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          ✓
                        </div>
                        <div>
                          <p className="font-medium">Special Tourism Zones</p>
                          <p className="text-sm text-muted-foreground">
                            Designated areas with pre-approved development rights
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
                            Streamlined permitting for eco-tourism projects
                          </p>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-amber-50 border-amber-200">
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center text-amber-700">
                      <Users className="mr-2 h-5 w-5" /> Operational Support
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="bg-amber-100 text-amber-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          ✓
                        </div>
                        <div>
                          <p className="font-medium">Workforce Development</p>
                          <p className="text-sm text-muted-foreground">
                            Subsidized training programs for local tourism workforce
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-amber-100 text-amber-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          ✓
                        </div>
                        <div>
                          <p className="font-medium">Marketing Support</p>
                          <p className="text-sm text-muted-foreground">
                            Inclusion in national tourism promotion campaigns
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-amber-100 text-amber-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          ✓
                        </div>
                        <div>
                          <p className="font-medium">Business Facilitation</p>
                          <p className="text-sm text-muted-foreground">One-stop service center for tourism investors</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-amber-100 text-amber-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          ✓
                        </div>
                        <div>
                          <p className="font-medium">Security Enhancement</p>
                          <p className="text-sm text-muted-foreground">
                            Special tourism police and security infrastructure
                          </p>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="text-xl font-medium mb-4">Tourism Investment Promotion Agency</h4>
                <p className="text-muted-foreground mb-4">
                  The Bangladesh Tourism Board has established a dedicated Tourism Investment Promotion Agency (TIPA) to
                  facilitate investments in Cox's Bazar:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Single window clearance for tourism projects</li>
                  <li>• Dedicated investment advisors for each project</li>
                  <li>• Assistance with land acquisition and regulatory compliance</li>
                  <li>• Facilitation of partnerships with local stakeholders</li>
                  <li>• Coordination with relevant government agencies</li>
                </ul>
              </div>
            </div>

            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Financing Options</CardTitle>
                  <CardDescription>Special financing for eco-tourism</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="pb-3 border-b">
                    <h4 className="font-medium mb-1">Green Tourism Fund</h4>
                    <p className="text-sm text-muted-foreground">
                      Dedicated fund offering low-interest loans for eco-tourism projects.
                    </p>
                    <div className="mt-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Interest Rate</span>
                        <span className="font-medium">4-6%</span>
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
                    <h4 className="font-medium mb-1">Equity Co-Investment</h4>
                    <p className="text-sm text-muted-foreground">
                      Government equity participation in large eco-tourism projects.
                    </p>
                    <div className="mt-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Equity Share</span>
                        <span className="font-medium">Up to 30%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Exit Timeline</span>
                        <span className="font-medium">5-7 years</span>
                      </div>
                    </div>
                  </div>

                  <div className="pb-3 border-b">
                    <h4 className="font-medium mb-1">International Credit Lines</h4>
                    <p className="text-sm text-muted-foreground">
                      Special credit lines from development banks for sustainable tourism.
                    </p>
                    <div className="mt-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Available From</span>
                        <span className="font-medium">ADB, World Bank</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Focus Areas</span>
                        <span className="font-medium">Green Infrastructure</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium mb-1">Venture Capital</h4>
                    <p className="text-sm text-muted-foreground">
                      Dedicated VC funds focusing on innovative tourism solutions.
                    </p>
                    <div className="mt-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Target Segments</span>
                        <span className="font-medium">Tech-enabled tourism</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Investment Size</span>
                        <span className="font-medium">$0.5-3 million</span>
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
                      Submit project concept to Tourism Investment Promotion Agency
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
                    <p className="text-sm text-muted-foreground">Detailed project proposal with sustainability plan</p>
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
                Several investors have already capitalized on Cox's Bazar's eco-tourism potential with impressive
                results.
              </p>

              <div className="space-y-8">
                <div className="bg-green-50 p-6 rounded-lg">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/3">
                      <div className="relative h-48 rounded-lg overflow-hidden">
                        <Image
                          src="/placeholder.svg?height=400&width=600"
                          alt="Mermaid Eco Resort"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <div className="md:w-2/3">
                      <h4 className="text-xl font-medium mb-2">Mermaid Eco Resort</h4>
                      <p className="text-muted-foreground mb-4">
                        Established in 2017 with an investment of $4.5 million, this eco-resort features 30 sustainable
                        cottages built with local materials and powered by renewable energy.
                      </p>
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                          <p className="text-sm text-muted-foreground">Initial Investment</p>
                          <p className="font-medium">$4.5 million</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Annual Revenue</p>
                          <p className="font-medium">$1.8 million</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">ROI</p>
                          <p className="font-medium">24% annually</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Occupancy Rate</p>
                          <p className="font-medium">82% average</p>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        "The government incentives reduced our startup costs by nearly 30%, and the ongoing support has
                        been invaluable. Our eco-friendly approach has attracted premium guests willing to pay 25% more
                        than standard accommodations." — Sarah Chen, Investor
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
                          alt="Bay of Bengal Adventures"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <div className="md:w-2/3">
                      <h4 className="text-xl font-medium mb-2">Bay of Bengal Adventures</h4>
                      <p className="text-muted-foreground mb-4">
                        Started in 2019 with $1.2 million investment, this adventure tourism company offers water
                        sports, hiking, and nature experiences with minimal environmental impact.
                      </p>
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                          <p className="text-sm text-muted-foreground">Initial Investment</p>
                          <p className="font-medium">$1.2 million</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Annual Revenue</p>
                          <p className="font-medium">$0.9 million</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">ROI</p>
                          <p className="font-medium">28% annually</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Growth Rate</p>
                          <p className="font-medium">35% year-over-year</p>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        "We've created 45 direct jobs and trained local youth as guides and instructors. The fast-track
                        approval process saved us months of bureaucracy, and the marketing support helped us reach
                        international tourists." — Rahul Khan, Founder
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
                          alt="Serenity Wellness Retreat"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <div className="md:w-2/3">
                      <h4 className="text-xl font-medium mb-2">Serenity Wellness Retreat</h4>
                      <p className="text-muted-foreground mb-4">
                        Launched in 2020 with $3.8 million investment, this wellness center combines traditional healing
                        practices with modern spa facilities in a sustainable setting.
                      </p>
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                          <p className="text-sm text-muted-foreground">Initial Investment</p>
                          <p className="font-medium">$3.8 million</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Annual Revenue</p>
                          <p className="font-medium">$1.4 million</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">ROI</p>
                          <p className="font-medium">22% annually</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">International Guests</p>
                          <p className="font-medium">65% of clientele</p>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        "The Green Tourism Fund provided favorable financing that made our project viable. Our
                        zero-waste policy and renewable energy use have become selling points for environmentally
                        conscious travelers." — Maya Patel, CEO
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
                  <CardDescription>Results from eco-tourism investments</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="pb-3 border-b">
                    <h4 className="font-medium mb-1">Economic Impact</h4>
                    <div className="space-y-2 mt-2">
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Jobs Created</span>
                        <span className="text-sm font-medium">12,500+</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Annual Revenue</span>
                        <span className="text-sm font-medium">$85 million</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Local Sourcing</span>
                        <span className="text-sm font-medium">$28 million/year</span>
                      </div>
                    </div>
                  </div>

                  <div className="pb-3 border-b">
                    <h4 className="font-medium mb-1">Environmental Impact</h4>
                    <div className="space-y-2 mt-2">
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Protected Area</span>
                        <span className="text-sm font-medium">4,200 hectares</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Carbon Reduction</span>
                        <span className="text-sm font-medium">18,500 tons/year</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Waste Reduction</span>
                        <span className="text-sm font-medium">65% average</span>
                      </div>
                    </div>
                  </div>

                  <div className="pb-3 border-b">
                    <h4 className="font-medium mb-1">Social Impact</h4>
                    <div className="space-y-2 mt-2">
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Local Employment</span>
                        <span className="text-sm font-medium">85% of workforce</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Skills Training</span>
                        <span className="text-sm font-medium">3,800 people</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Community Projects</span>
                        <span className="text-sm font-medium">$4.2 million</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium mb-1">Tourism Growth</h4>
                    <div className="space-y-2 mt-2">
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Visitor Increase</span>
                        <span className="text-sm font-medium">18% annually</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Length of Stay</span>
                        <span className="text-sm font-medium">+1.5 days average</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Repeat Visitors</span>
                        <span className="text-sm font-medium">28% increase</span>
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
                      "The combination of natural beauty, government support, and growing tourism demand made our
                      investment in Cox's Bazar one of our best performing assets in Asia."
                    </p>
                    <p className="text-sm font-medium">— Global Hospitality Ventures</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <p className="text-sm italic text-muted-foreground mb-2">
                      "We've seen consistent 20%+ returns on our eco-lodge investment, with the added benefit of
                      contributing to sustainable development in the region."
                    </p>
                    <p className="text-sm font-medium">— Green Tourism Fund</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <p className="text-sm italic text-muted-foreground mb-2">
                      "The streamlined approval process and dedicated support team made establishing our business in
                      Cox's Bazar remarkably efficient."
                    </p>
                    <p className="text-sm font-medium">— Sunrise Resorts International</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="guidelines" className="mt-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold mb-4">Sustainability Guidelines</h3>
              <p className="text-muted-foreground mb-6">
                Cox's Bazar has established comprehensive sustainability guidelines to ensure tourism development
                preserves the natural environment and benefits local communities.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
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
                          <p className="font-medium">Energy Efficiency</p>
                          <p className="text-sm text-muted-foreground">
                            Minimum 30% of energy needs must be met through renewable sources, with a roadmap to reach
                            60% within 5 years.
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
                            Implementation of rainwater harvesting, water recycling systems, and low-flow fixtures to
                            reduce consumption by 40%.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-green-100 text-green-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          3
                        </div>
                        <div>
                          <p className="font-medium">Waste Management</p>
                          <p className="text-sm text-muted-foreground">
                            Zero waste to landfill policy with comprehensive recycling, composting, and waste reduction
                            strategies.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-green-100 text-green-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          4
                        </div>
                        <div>
                          <p className="font-medium">Biodiversity Protection</p>
                          <p className="text-sm text-muted-foreground">
                            Preservation of natural habitats, use of native species in landscaping, and contribution to
                            conservation efforts.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center">
                      <Building className="mr-2 h-5 w-5 text-blue-600" /> Construction Guidelines
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="bg-blue-100 text-blue-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          1
                        </div>
                        <div>
                          <p className="font-medium">Sustainable Materials</p>
                          <p className="text-sm text-muted-foreground">
                            Minimum 60% of building materials must be locally sourced, recycled, or certified
                            sustainable.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-blue-100 text-blue-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          2
                        </div>
                        <div>
                          <p className="font-medium">Building Design</p>
                          <p className="text-sm text-muted-foreground">
                            Designs must incorporate passive cooling, natural ventilation, and maximize natural
                            lighting.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-blue-100 text-blue-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          3
                        </div>
                        <div>
                          <p className="font-medium">Site Impact</p>
                          <p className="text-sm text-muted-foreground">
                            Maximum 40% of land can be developed, with the remainder preserved as natural habitat or
                            green space.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-blue-100 text-blue-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          4
                        </div>
                        <div>
                          <p className="font-medium">Green Certification</p>
                          <p className="text-sm text-muted-foreground">
                            Projects must achieve LEED, BREEAM, or equivalent green building certification.
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
                          <p className="font-medium">Local Employment</p>
                          <p className="text-sm text-muted-foreground">
                            Minimum 70% of staff must be hired from local communities, with training programs for skills
                            development.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-purple-100 text-purple-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          2
                        </div>
                        <div>
                          <p className="font-medium">Fair Wages</p>
                          <p className="text-sm text-muted-foreground">
                            All employees must receive living wages exceeding the national minimum by at least 30%.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-purple-100 text-purple-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          3
                        </div>
                        <div>
                          <p className="font-medium">Community Development</p>
                          <p className="text-sm text-muted-foreground">
                            Allocation of 2-3% of annual profits to community development projects selected with local
                            input.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-purple-100 text-purple-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          4
                        </div>
                        <div>
                          <p className="font-medium">Cultural Preservation</p>
                          <p className="text-sm text-muted-foreground">
                            Respect for and promotion of local cultural heritage, traditions, and practices.
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
                          <p className="font-medium">Supply Chain</p>
                          <p className="text-sm text-muted-foreground">
                            Minimum 50% of supplies and services must be sourced from local providers and sustainable
                            sources.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-amber-100 text-amber-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          2
                        </div>
                        <div>
                          <p className="font-medium">Guest Education</p>
                          <p className="text-sm text-muted-foreground">
                            Implementation of programs to educate visitors about local ecology, culture, and sustainable
                            practices.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-amber-100 text-amber-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          3
                        </div>
                        <div>
                          <p className="font-medium">Monitoring & Reporting</p>
                          <p className="text-sm text-muted-foreground">
                            Regular sustainability audits and transparent reporting of environmental and social impacts.
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
                            Implementation of annual sustainability improvement plans with measurable targets.
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
                  Cox's Bazar eco-tourism projects are encouraged to obtain recognized sustainability certifications:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <Award className="h-5 w-5 text-green-600 mr-2" />
                      <h5 className="font-medium">Green Globe</h5>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      International standard for sustainable tourism operations with 44 criteria and 380 compliance
                      indicators.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <Award className="h-5 w-5 text-blue-600 mr-2" />
                      <h5 className="font-medium">EarthCheck</h5>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Scientific benchmarking, certification, and advisory group for travel and tourism with rigorous
                      standards.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <Award className="h-5 w-5 text-amber-600 mr-2" />
                      <h5 className="font-medium">Travelife</h5>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      International certification system promoting sustainability within the tourism industry.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Sustainability Support</CardTitle>
                  <CardDescription>Resources for eco-tourism investors</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="pb-3 border-b">
                    <h4 className="font-medium mb-1">Technical Assistance</h4>
                    <p className="text-sm text-muted-foreground">
                      Expert guidance on sustainable design, renewable energy, and eco-friendly operations.
                    </p>
                    <Button variant="outline" size="sm" className="w-full mt-2">
                      Request Consultation
                    </Button>
                  </div>

                  <div className="pb-3 border-b">
                    <h4 className="font-medium mb-1">Certification Support</h4>
                    <p className="text-sm text-muted-foreground">
                      Assistance with obtaining international sustainability certifications.
                    </p>
                    <Button variant="outline" size="sm" className="w-full mt-2">
                      Certification Guide
                    </Button>
                  </div>

                  <div className="pb-3 border-b">
                    <h4 className="font-medium mb-1">Training Programs</h4>
                    <p className="text-sm text-muted-foreground">
                      Staff training on sustainable practices, conservation, and eco-tourism operations.
                    </p>
                    <Button variant="outline" size="sm" className="w-full mt-2">
                      Training Calendar
                    </Button>
                  </div>

                  <div>
                    <h4 className="font-medium mb-1">Monitoring Tools</h4>
                    <p className="text-sm text-muted-foreground">
                      Software and systems for tracking environmental impact and sustainability metrics.
                    </p>
                    <Button variant="outline" size="sm" className="w-full mt-2">
                      Explore Tools
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <div className="mt-6 bg-blue-50 p-6 rounded-lg">
                <h4 className="font-medium mb-4">Benefits of Sustainable Tourism</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="bg-blue-100 text-blue-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      ✓
                    </div>
                    <div>
                      <p className="font-medium">Premium Pricing</p>
                      <p className="text-sm text-muted-foreground">
                        Eco-certified properties command 20-25% higher rates
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 text-blue-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      ✓
                    </div>
                    <div>
                      <p className="font-medium">Operational Savings</p>
                      <p className="text-sm text-muted-foreground">30-40% reduction in energy and water costs</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 text-blue-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      ✓
                    </div>
                    <div>
                      <p className="font-medium">Marketing Advantage</p>
                      <p className="text-sm text-muted-foreground">Access to growing eco-conscious market segments</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 text-blue-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      ✓
                    </div>
                    <div>
                      <p className="font-medium">Risk Reduction</p>
                      <p className="text-sm text-muted-foreground">
                        Greater resilience to climate change and resource scarcity
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 text-blue-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      ✓
                    </div>
                    <div>
                      <p className="font-medium">Enhanced Reputation</p>
                      <p className="text-sm text-muted-foreground">
                        Positive brand image and stakeholder relationships
                      </p>
                    </div>
                  </li>
                </ul>
                <Button variant="outline" className="w-full mt-4 text-sm">
                  Download Sustainability ROI Guide
                </Button>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      <div className="bg-gradient-to-r from-green-600 to-green-800 rounded-xl p-8 text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Ready to Invest in Cox's Bazar Eco-Tourism?</h2>
            <p className="mb-6">
              Connect with our investment facilitation team to explore opportunities, incentives, and support for your
              eco-tourism venture.
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
                <p>Initial consultation and opportunity matching</p>
              </li>
              <li className="flex items-start">
                <div className="bg-white text-green-600 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                  2
                </div>
                <p>Site visit and stakeholder meetings</p>
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

