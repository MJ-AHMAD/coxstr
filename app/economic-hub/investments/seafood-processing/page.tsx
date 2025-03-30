import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Download, TrendingUp, Globe, Award, Building, Users, Leaf } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata = {
  title: "Seafood Processing Investment | Cox's Bazar Economic Hub",
  description:
    "Explore investment opportunities in seafood processing facilities in Cox's Bazar with high ROI potential and government incentives.",
}

export default function SeafoodProcessingPage() {
  return (
    <div className="container mx-auto py-12">
      <div className="mb-8">
        <Link href="/economic-hub" className="flex items-center text-muted-foreground hover:text-primary mb-4">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Economic Hub
        </Link>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-4xl font-bold mb-2">Seafood Processing Investment</h1>
            <p className="text-xl text-muted-foreground">
              Modern processing facilities for export-quality seafood products with high demand
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
              alt="Seafood Processing in Cox's Bazar"
              fill
              className="object-cover"
            />
          </div>
          <div className="prose max-w-none">
            <p className="text-lg leading-relaxed">
              Cox's Bazar offers exceptional opportunities for seafood processing investment, with abundant marine
              resources, strategic location, and growing global demand for quality seafood products. With the fishing
              industry growing at 8-10% annually and government prioritization of value-added processing, the region
              presents compelling investment potential.
            </p>
            <p className="leading-relaxed">
              The Bangladesh government has designated Cox's Bazar as a priority zone for seafood processing with
              special incentives for export-oriented facilities. Investors can benefit from tax holidays, duty
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
                <span className="text-muted-foreground">Annual Industry Growth</span>
                <span className="font-medium">8-10%</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b">
                <span className="text-muted-foreground">Annual Catch Volume</span>
                <span className="font-medium">150,000+ Tons</span>
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
                <span className="text-muted-foreground">Export Potential</span>
                <span className="font-medium">$500M+ Annually</span>
              </div>
            </CardContent>
          </Card>

          <div className="mt-6 bg-blue-50 rounded-lg p-6">
            <h3 className="text-lg font-medium mb-4 flex items-center">
              <TrendingUp className="mr-2 h-5 w-5 text-blue-600" /> Market Opportunity
            </h3>
            <p className="mb-4 text-muted-foreground">
              The global seafood market is projected to reach $193.9 billion by 2027, with Asia-Pacific being the
              largest supplier and fastest-growing region.
            </p>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="bg-white p-3 rounded-lg">
                <p className="text-2xl font-bold text-blue-600">36%</p>
                <p className="text-xs text-muted-foreground">Premium for certified sustainable seafood</p>
              </div>
              <div className="bg-white p-3 rounded-lg">
                <p className="text-2xl font-bold text-blue-600">15%</p>
                <p className="text-xs text-muted-foreground">Annual growth in value-added products</p>
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
                  alt="Frozen Seafood Processing"
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardHeader>
                <CardTitle>Frozen Seafood Processing</CardTitle>
                <CardDescription>Export-oriented freezing facilities</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Development of modern freezing and packaging facilities for shrimp, fish, and other marine products
                  for export markets.
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Investment Range</span>
                    <span className="text-sm font-medium">$2-10 million</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Estimated ROI</span>
                    <span className="text-sm font-medium">25-30% annually</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Target Markets</span>
                    <span className="text-sm font-medium">EU, US, Japan</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Value-Added Products"
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardHeader>
                <CardTitle>Value-Added Products</CardTitle>
                <CardDescription>Ready-to-cook and specialty items</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Production of ready-to-cook seafood products, marinated items, and specialty preparations for domestic
                  and international markets.
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Investment Range</span>
                    <span className="text-sm font-medium">$1-5 million</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Estimated ROI</span>
                    <span className="text-sm font-medium">28-35% annually</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Growth Rate</span>
                    <span className="text-sm font-medium">15% annually</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Seafood By-Products"
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardHeader>
                <CardTitle>Seafood By-Products</CardTitle>
                <CardDescription>Fish meal, oil, and specialty items</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Processing of seafood by-products into fish meal, fish oil, collagen, and other high-value
                  derivatives.
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Investment Range</span>
                    <span className="text-sm font-medium">$1-4 million</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Estimated ROI</span>
                    <span className="text-sm font-medium">20-25% annually</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Target Market</span>
                    <span className="text-sm font-medium">Global</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Quality Testing Labs"
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardHeader>
                <CardTitle>Quality Testing Labs</CardTitle>
                <CardDescription>Certification and quality assurance</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Establishment of testing laboratories for quality certification, food safety compliance, and export
                  documentation.
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Investment Range</span>
                    <span className="text-sm font-medium">$0.5-2 million</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Estimated ROI</span>
                    <span className="text-sm font-medium">18-22% annually</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Service Demand</span>
                    <span className="text-sm font-medium">High</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Cold Chain Logistics"
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardHeader>
                <CardTitle>Cold Chain Logistics</CardTitle>
                <CardDescription>Temperature-controlled supply chain</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Development of refrigerated transportation, cold storage facilities, and logistics services for the
                  seafood industry.
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Investment Range</span>
                    <span className="text-sm font-medium">$1-6 million</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Estimated ROI</span>
                    <span className="text-sm font-medium">20-24% annually</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Market Gap</span>
                    <span className="text-sm font-medium">Significant</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Aquaculture Integration"
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardHeader>
                <CardTitle>Aquaculture Integration</CardTitle>
                <CardDescription>Farm-to-processing vertical integration</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Integrated operations combining aquaculture farming with processing facilities for consistent supply
                  and quality control.
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Investment Range</span>
                    <span className="text-sm font-medium">$3-15 million</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Estimated ROI</span>
                    <span className="text-sm font-medium">22-26% annually</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Vertical Integration</span>
                    <span className="text-sm font-medium">High value</span>
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
                The Bangladesh government has established a comprehensive package of incentives to attract seafood
                processing investment in Cox's Bazar.
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
                            5-10 year income tax exemption for export-oriented seafood processing
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
                          <p className="font-medium">Export Incentives</p>
                          <p className="text-sm text-muted-foreground">
                            Cash incentives of 10-15% on export value for processed seafood
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
                            VAT exemption on utilities and specific services for export industries
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
                          <p className="font-medium">Certification Subsidies</p>
                          <p className="text-sm text-muted-foreground">
                            Financial support for obtaining international certifications (HACCP, BRC, etc.)
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-green-100 text-green-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          ✓
                        </div>
                        <div>
                          <p className="font-medium">Waste Treatment Grants</p>
                          <p className="text-sm text-muted-foreground">
                            Grants covering up to 30% of waste treatment facility installation costs
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-green-100 text-green-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          ✓
                        </div>
                        <div>
                          <p className="font-medium">Energy Efficiency Incentives</p>
                          <p className="text-sm text-muted-foreground">
                            Special allowances for energy-efficient processing equipment
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-green-100 text-green-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          ✓
                        </div>
                        <div>
                          <p className="font-medium">By-Product Utilization Support</p>
                          <p className="text-sm text-muted-foreground">
                            Technical and financial assistance for seafood by-product utilization
                          </p>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-purple-50 border-purple-200">
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center text-purple-700">
                      <Building className="mr-2 h-5 w-5" /> Infrastructure Support
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="bg-purple-100 text-purple-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          ✓
                        </div>
                        <div>
                          <p className="font-medium">Industrial Land Allocation</p>
                          <p className="text-sm text-muted-foreground">
                            Priority land allocation in industrial zones at favorable rates
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-purple-100 text-purple-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          ✓
                        </div>
                        <div>
                          <p className="font-medium">Utility Connections</p>
                          <p className="text-sm text-muted-foreground">
                            Prioritized electricity, water, and gas connections for processing facilities
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-purple-100 text-purple-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          ✓
                        </div>
                        <div>
                          <p className="font-medium">Common Facility Centers</p>
                          <p className="text-sm text-muted-foreground">
                            Access to government-supported common testing and cold storage facilities
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
                            Streamlined permitting for seafood processing projects
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
                            Subsidized training programs for seafood processing workforce
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-amber-100 text-amber-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          ✓
                        </div>
                        <div>
                          <p className="font-medium">Export Promotion</p>
                          <p className="text-sm text-muted-foreground">
                            Support for international trade fair participation and buyer connections
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-amber-100 text-amber-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          ✓
                        </div>
                        <div>
                          <p className="font-medium">Business Facilitation</p>
                          <p className="text-sm text-muted-foreground">
                            One-stop service center for seafood industry investors
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
                            Collaboration with research institutions for product development
                          </p>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="text-xl font-medium mb-4">Seafood Processing Investment Promotion Agency</h4>
                <p className="text-muted-foreground mb-4">
                  The Bangladesh Fisheries Development Corporation has established a dedicated Seafood Processing
                  Investment Promotion Agency (SPIPA) to facilitate investments in Cox's Bazar:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Single window clearance for seafood processing projects</li>
                  <li>• Dedicated investment advisors for each project</li>
                  <li>• Assistance with regulatory compliance and export certifications</li>
                  <li>• Facilitation of partnerships with local fisheries and suppliers</li>
                  <li>• Coordination with relevant government agencies</li>
                </ul>
              </div>
            </div>

            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Financing Options</CardTitle>
                  <CardDescription>Special financing for seafood processing</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="pb-3 border-b">
                    <h4 className="font-medium mb-1">Export Development Fund</h4>
                    <p className="text-sm text-muted-foreground">
                      Low-interest loans for export-oriented seafood processing facilities.
                    </p>
                    <div className="mt-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Interest Rate</span>
                        <span className="font-medium">4-5%</span>
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
                    <h4 className="font-medium mb-1">Equity Co-Investment</h4>
                    <p className="text-sm text-muted-foreground">
                      Government equity participation in large seafood processing projects.
                    </p>
                    <div className="mt-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Equity Share</span>
                        <span className="font-medium">Up to 25%</span>
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
                      Special credit lines from development banks for seafood processing facilities.
                    </p>
                    <div className="mt-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Available From</span>
                        <span className="font-medium">ADB, World Bank</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Focus Areas</span>
                        <span className="font-medium">Modern Processing</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium mb-1">Green Processing Fund</h4>
                    <p className="text-sm text-muted-foreground">
                      Dedicated fund for environmentally sustainable seafood processing technologies.
                    </p>
                    <div className="mt-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Target Segments</span>
                        <span className="font-medium">Eco-friendly processing</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Investment Size</span>
                        <span className="font-medium">$0.5-5 million</span>
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
                      Submit project concept to Seafood Processing Investment Promotion Agency
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
                Several investors have already capitalized on Cox's Bazar's seafood processing potential with impressive
                results.
              </p>

              <div className="space-y-8">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/3">
                      <div className="relative h-48 rounded-lg overflow-hidden">
                        <Image
                          src="/placeholder.svg?height=400&width=600"
                          alt="Bay Seafoods Ltd."
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <div className="md:w-2/3">
                      <h4 className="text-xl font-medium mb-2">Bay Seafoods Ltd.</h4>
                      <p className="text-muted-foreground mb-4">
                        Established in 2018 with an investment of $3.8 million, this processing facility specializes in
                        premium frozen shrimp and fish products for export to EU and Japanese markets.
                      </p>
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                          <p className="text-sm text-muted-foreground">Initial Investment</p>
                          <p className="font-medium">$3.8 million</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Annual Revenue</p>
                          <p className="font-medium">$7.2 million</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">ROI</p>
                          <p className="font-medium">28% annually</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Export Markets</p>
                          <p className="font-medium">EU, Japan, US</p>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        "The government incentives reduced our startup costs significantly, and the export promotion
                        support helped us secure major international buyers. Our HACCP and BRC certifications have
                        allowed us to command premium prices in high-value markets." — Kamal Ahmed, CEO
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
                          alt="Ocean Harvest Processing"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <div className="md:w-2/3">
                      <h4 className="text-xl font-medium mb-2">Ocean Harvest Processing</h4>
                      <p className="text-muted-foreground mb-4">
                        Started in 2019 with $2.5 million investment, this company focuses on value-added seafood
                        products including ready-to-cook items and specialty preparations.
                      </p>
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                          <p className="text-sm text-muted-foreground">Initial Investment</p>
                          <p className="font-medium">$2.5 million</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Annual Revenue</p>
                          <p className="font-medium">$5.8 million</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">ROI</p>
                          <p className="font-medium">32% annually</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Growth Rate</p>
                          <p className="font-medium">25% year-over-year</p>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        "We've created 120 direct jobs and established a network of 300+ local fishermen suppliers. The
                        fast-track approval process and technical support for certification were crucial to our rapid
                        growth and market access." — Nadia Rahman, Founder
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
                          alt="Marine Bioproducts Ltd."
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <div className="md:w-2/3">
                      <h4 className="text-xl font-medium mb-2">Marine Bioproducts Ltd.</h4>
                      <p className="text-muted-foreground mb-4">
                        Launched in 2020 with $1.8 million investment, this innovative company processes seafood
                        by-products into high-value ingredients for pharmaceutical and nutraceutical industries.
                      </p>
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                          <p className="text-sm text-muted-foreground">Initial Investment</p>
                          <p className="font-medium">$1.8 million</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Annual Revenue</p>
                          <p className="font-medium">$3.2 million</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">ROI</p>
                          <p className="font-medium">26% annually</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">International Clients</p>
                          <p className="font-medium">12 countries</p>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        "The R&D support and collaboration with research institutions helped us develop proprietary
                        extraction processes. Our zero-waste approach has turned what was previously discarded into our
                        most profitable product line." — Dr. Sanjida Khan, Technical Director
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
                  <CardDescription>Results from seafood processing investments</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="pb-3 border-b">
                    <h4 className="font-medium mb-1">Economic Impact</h4>
                    <div className="space-y-2 mt-2">
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Jobs Created</span>
                        <span className="text-sm font-medium">8,500+</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Annual Export Revenue</span>
                        <span className="text-sm font-medium">$120 million</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Local Sourcing</span>
                        <span className="text-sm font-medium">$45 million/year</span>
                      </div>
                    </div>
                  </div>

                  <div className="pb-3 border-b">
                    <h4 className="font-medium mb-1">Environmental Impact</h4>
                    <div className="space-y-2 mt-2">
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Waste Reduction</span>
                        <span className="text-sm font-medium">65% average</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">By-product Utilization</span>
                        <span className="text-sm font-medium">48% increase</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Water Recycling</span>
                        <span className="text-sm font-medium">40% average</span>
                      </div>
                    </div>
                  </div>

                  <div className="pb-3 border-b">
                    <h4 className="font-medium mb-1">Social Impact</h4>
                    <div className="space-y-2 mt-2">
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Local Employment</span>
                        <span className="text-sm font-medium">90% of workforce</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Skills Training</span>
                        <span className="text-sm font-medium">3,200 people</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Women Employed</span>
                        <span className="text-sm font-medium">55% of workforce</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium mb-1">Industry Growth</h4>
                    <div className="space-y-2 mt-2">
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Processing Capacity</span>
                        <span className="text-sm font-medium">+35% in 3 years</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Value Addition</span>
                        <span className="text-sm font-medium">+85% per ton</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">New Markets Accessed</span>
                        <span className="text-sm font-medium">12 countries</span>
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
                      "The combination of abundant raw materials, government support, and growing export demand made our
                      investment in Cox's Bazar seafood processing one of our most successful ventures in South Asia."
                    </p>
                    <p className="text-sm font-medium">— Global Seafood Ventures</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <p className="text-sm italic text-muted-foreground mb-2">
                      "We've seen consistent 25%+ returns on our processing facility investment, with the added benefit
                      of creating significant employment in the local community."
                    </p>
                    <p className="text-sm font-medium">— Blue Economy Fund</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <p className="text-sm italic text-muted-foreground mb-2">
                      "The streamlined approval process and dedicated support team made establishing our business in
                      Cox's Bazar remarkably efficient compared to other Asian markets."
                    </p>
                    <p className="text-sm font-medium">— Pacific Rim Processors</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="guidelines" className="mt-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold mb-4">Quality & Sustainability Guidelines</h3>
              <p className="text-muted-foreground mb-6">
                Cox's Bazar has established comprehensive quality and sustainability guidelines to ensure seafood
                processing meets international standards and supports sustainable fisheries.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center">
                      <Award className="mr-2 h-5 w-5 text-blue-600" /> Quality Standards
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="bg-blue-100 text-blue-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          1
                        </div>
                        <div>
                          <p className="font-medium">HACCP Implementation</p>
                          <p className="text-sm text-muted-foreground">
                            Mandatory implementation of Hazard Analysis Critical Control Point systems for all
                            processing facilities.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-blue-100 text-blue-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          2
                        </div>
                        <div>
                          <p className="font-medium">International Certifications</p>
                          <p className="text-sm text-muted-foreground">
                            Facilities must obtain relevant certifications (BRC, IFS, FSSC 22000) based on target export
                            markets.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-blue-100 text-blue-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          3
                        </div>
                        <div>
                          <p className="font-medium">Traceability Systems</p>
                          <p className="text-sm text-muted-foreground">
                            Implementation of comprehensive traceability from catch/farm to final product.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-blue-100 text-blue-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          4
                        </div>
                        <div>
                          <p className="font-medium">Testing Protocols</p>
                          <p className="text-sm text-muted-foreground">
                            Regular testing for contaminants, antibiotics, and quality parameters to meet international
                            standards.
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
                          <p className="font-medium">Waste Management</p>
                          <p className="text-sm text-muted-foreground">
                            Proper treatment of processing waste and implementation of by-product utilization
                            strategies.
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
                            Implementation of water recycling systems and efficient water use technologies.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-green-100 text-green-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          3
                        </div>
                        <div>
                          <p className="font-medium">Energy Efficiency</p>
                          <p className="text-sm text-muted-foreground">
                            Use of energy-efficient equipment and renewable energy sources where possible.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-green-100 text-green-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          4
                        </div>
                        <div>
                          <p className="font-medium">Sustainable Sourcing</p>
                          <p className="text-sm text-muted-foreground">
                            Commitment to sourcing from sustainable fisheries and aquaculture operations.
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
                          <p className="font-medium">Fair Labor Practices</p>
                          <p className="text-sm text-muted-foreground">
                            Compliance with labor laws, fair wages, and safe working conditions for all employees.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-purple-100 text-purple-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          2
                        </div>
                        <div>
                          <p className="font-medium">Gender Equality</p>
                          <p className="text-sm text-muted-foreground">
                            Promotion of gender equality and opportunities for women in the seafood processing sector.
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
                            Support for fishing communities and contribution to local development initiatives.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-purple-100 text-purple-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          4
                        </div>
                        <div>
                          <p className="font-medium">Skills Development</p>
                          <p className="text-sm text-muted-foreground">
                            Investment in training and skills development for the local workforce.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center">
                      <Globe className="mr-2 h-5 w-5 text-amber-600" /> Supply Chain Standards
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="bg-amber-100 text-amber-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          1
                        </div>
                        <div>
                          <p className="font-medium">Responsible Sourcing</p>
                          <p className="text-sm text-muted-foreground">
                            Verification of legal and sustainable fishing practices from all suppliers.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-amber-100 text-amber-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          2
                        </div>
                        <div>
                          <p className="font-medium">Cold Chain Integrity</p>
                          <p className="text-sm text-muted-foreground">
                            Maintenance of temperature control throughout the supply chain to ensure quality.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-amber-100 text-amber-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          3
                        </div>
                        <div>
                          <p className="font-medium">Supplier Development</p>
                          <p className="text-sm text-muted-foreground">
                            Support for small-scale fishers and aquaculture farmers to meet quality standards.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-amber-100 text-amber-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          4
                        </div>
                        <div>
                          <p className="font-medium">Documentation</p>
                          <p className="text-sm text-muted-foreground">
                            Comprehensive documentation and record-keeping throughout the supply chain.
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
                  Cox's Bazar seafood processing facilities are encouraged to obtain recognized certifications:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <Award className="h-5 w-5 text-blue-600 mr-2" />
                      <h5 className="font-medium">BRC Global Standard</h5>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      International standard for food safety recognized by the Global Food Safety Initiative (GFSI).
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <Award className="h-5 w-5 text-green-600 mr-2" />
                      <h5 className="font-medium">MSC Chain of Custody</h5>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Marine Stewardship Council certification for sustainable seafood processing and traceability.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <Award className="h-5 w-5 text-amber-600 mr-2" />
                      <h5 className="font-medium">FSSC 22000</h5>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Food Safety System Certification providing a framework for effectively managing food safety
                      responsibilities.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Quality Support</CardTitle>
                  <CardDescription>Resources for seafood processors</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="pb-3 border-b">
                    <h4 className="font-medium mb-1">Technical Assistance</h4>
                    <p className="text-sm text-muted-foreground">
                      Expert guidance on processing technologies, quality systems, and certification requirements.
                    </p>
                    <Button variant="outline" size="sm" className="w-full mt-2">
                      Request Consultation
                    </Button>
                  </div>

                  <div className="pb-3 border-b">
                    <h4 className="font-medium mb-1">Certification Support</h4>
                    <p className="text-sm text-muted-foreground">
                      Assistance with obtaining international food safety and quality certifications.
                    </p>
                    <Button variant="outline" size="sm" className="w-full mt-2">
                      Certification Guide
                    </Button>
                  </div>

                  <div className="pb-3 border-b">
                    <h4 className="font-medium mb-1">Training Programs</h4>
                    <p className="text-sm text-muted-foreground">
                      Staff training on food safety, quality management, and processing techniques.
                    </p>
                    <Button variant="outline" size="sm" className="w-full mt-2">
                      Training Calendar
                    </Button>
                  </div>

                  <div>
                    <h4 className="font-medium mb-1">Testing Services</h4>
                    <p className="text-sm text-muted-foreground">
                      Access to accredited laboratories for product testing and quality verification.
                    </p>
                    <Button variant="outline" size="sm" className="w-full mt-2">
                      Testing Services
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <div className="mt-6 bg-blue-50 p-6 rounded-lg">
                <h4 className="font-medium mb-4">Benefits of Quality Certification</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="bg-blue-100 text-blue-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      ✓
                    </div>
                    <div>
                      <p className="font-medium">Market Access</p>
                      <p className="text-sm text-muted-foreground">
                        Entry to premium markets requiring specific certifications
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 text-blue-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      ✓
                    </div>
                    <div>
                      <p className="font-medium">Price Premium</p>
                      <p className="text-sm text-muted-foreground">20-35% higher prices for certified products</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 text-blue-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      ✓
                    </div>
                    <div>
                      <p className="font-medium">Operational Efficiency</p>
                      <p className="text-sm text-muted-foreground">Improved processes and reduced waste</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 text-blue-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      ✓
                    </div>
                    <div>
                      <p className="font-medium">Risk Reduction</p>
                      <p className="text-sm text-muted-foreground">Lower risk of recalls and regulatory issues</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 text-blue-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      ✓
                    </div>
                    <div>
                      <p className="font-medium">Brand Reputation</p>
                      <p className="text-sm text-muted-foreground">Enhanced credibility with buyers and consumers</p>
                    </div>
                  </li>
                </ul>
                <Button variant="outline" className="w-full mt-4 text-sm">
                  Download Certification ROI Guide
                </Button>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-8 text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Ready to Invest in Cox's Bazar Seafood Processing?</h2>
            <p className="mb-6">
              Connect with our investment facilitation team to explore opportunities, incentives, and support for your
              seafood processing venture.
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
                <p>Site visit and stakeholder meetings</p>
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

