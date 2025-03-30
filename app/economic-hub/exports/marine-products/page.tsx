import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Download, TrendingUp, Globe, Award, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export const metadata = {
  title: "Marine Products Export | Cox's Bazar Economic Hub",
  description:
    "Explore Cox's Bazar's marine products export potential including shrimp, lobster, crab, and various fish species with established export channels.",
}

export default function MarineProductsPage() {
  return (
    <div className="container mx-auto py-12">
      <div className="mb-8">
        <Link href="/economic-hub" className="flex items-center text-muted-foreground hover:text-primary mb-4">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Economic Hub
        </Link>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-4xl font-bold mb-2">Marine Products Export</h1>
            <p className="text-xl text-muted-foreground">
              High-quality seafood with established export channels to global markets
            </p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" className="flex items-center">
              <Download className="mr-2 h-4 w-4" /> Export Guide
            </Button>
            <Button>Contact Export Specialist</Button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <div className="lg:col-span-2">
          <div className="relative h-[400px] rounded-lg overflow-hidden mb-6">
            <Image
              src="/placeholder.svg?height=800&width=1200"
              alt="Marine Products from Cox's Bazar"
              fill
              className="object-cover"
            />
          </div>
          <div className="prose max-w-none">
            <p className="text-lg leading-relaxed">
              Cox's Bazar is home to one of Bangladesh's most vibrant marine product industries, with a rich variety of
              seafood that meets international quality standards. The region's strategic location on the Bay of Bengal
              provides access to abundant marine resources, supporting a thriving export sector valued at over $120
              million annually.
            </p>
            <p className="leading-relaxed">
              The marine products sector employs over 35,000 people in the region and has seen consistent growth of
              8-12% annually over the past decade. With modern processing facilities, established cold chains, and
              increasing compliance with international standards, Cox's Bazar's marine exports are positioned for
              continued expansion into premium markets worldwide.
            </p>
          </div>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>Export Highlights</CardTitle>
              <CardDescription>Key statistics and information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center pb-2 border-b">
                <span className="text-muted-foreground">Annual Export Value</span>
                <span className="font-medium">$120 Million</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b">
                <span className="text-muted-foreground">Growth Rate</span>
                <span className="font-medium">8-12% Annually</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b">
                <span className="text-muted-foreground">Employment</span>
                <span className="font-medium">35,000+ Jobs</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b">
                <span className="text-muted-foreground">Processing Facilities</span>
                <span className="font-medium">24 Certified</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b">
                <span className="text-muted-foreground">Primary Markets</span>
                <span className="font-medium">EU, USA, Japan</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Key Products</span>
                <span className="font-medium">Shrimp, Fish, Crab</span>
              </div>
            </CardContent>
          </Card>

          <div className="mt-6 bg-blue-50 rounded-lg p-6">
            <h3 className="text-lg font-medium mb-4 flex items-center">
              <TrendingUp className="mr-2 h-5 w-5 text-blue-600" /> Market Opportunity
            </h3>
            <p className="mb-4 text-muted-foreground">
              The global seafood market is projected to reach $193 billion by 2027, with premium and sustainable seafood
              segments growing at 11% annually.
            </p>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="bg-white p-3 rounded-lg">
                <p className="text-2xl font-bold text-blue-600">62%</p>
                <p className="text-xs text-muted-foreground">Of consumers prefer sustainable seafood</p>
              </div>
              <div className="bg-white p-3 rounded-lg">
                <p className="text-2xl font-bold text-blue-600">$38B</p>
                <p className="text-xs text-muted-foreground">Premium seafood market size</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Tabs defaultValue="products" className="mb-16">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="products">Key Products</TabsTrigger>
          <TabsTrigger value="markets">Target Markets</TabsTrigger>
          <TabsTrigger value="regulations">Regulations</TabsTrigger>
          <TabsTrigger value="investment">Investment</TabsTrigger>
        </TabsList>

        <TabsContent value="products" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Shrimp Products"
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardHeader>
                <CardTitle>Shrimp & Prawns</CardTitle>
                <CardDescription>Black tiger, freshwater, and white shrimp</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Export Volume</span>
                    <span className="text-sm font-medium">12,500 tons/year</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Value</span>
                    <span className="text-sm font-medium">$85 million</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Key Markets</span>
                    <span className="text-sm font-medium">EU, USA, Japan</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Certifications</span>
                    <span className="text-sm font-medium">HACCP, BAP, ASC</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Fish Products"
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardHeader>
                <CardTitle>Fish Products</CardTitle>
                <CardDescription>Hilsa, pomfret, sea bass, and snapper</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Export Volume</span>
                    <span className="text-sm font-medium">8,200 tons/year</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Value</span>
                    <span className="text-sm font-medium">$24 million</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Key Markets</span>
                    <span className="text-sm font-medium">Middle East, UK</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Certifications</span>
                    <span className="text-sm font-medium">HACCP, MSC</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Crab and Lobster"
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardHeader>
                <CardTitle>Crab & Lobster</CardTitle>
                <CardDescription>Mud crab, blue swimming crab, spiny lobster</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Export Volume</span>
                    <span className="text-sm font-medium">3,800 tons/year</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Value</span>
                    <span className="text-sm font-medium">$11 million</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Key Markets</span>
                    <span className="text-sm font-medium">China, Singapore</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Certifications</span>
                    <span className="text-sm font-medium">HACCP, BAP</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="markets" className="mt-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold mb-4">Target Export Markets</h3>
              <p className="text-muted-foreground mb-6">
                Cox's Bazar marine products are exported to over 25 countries worldwide, with key markets in Europe,
                North America, and Asia.
              </p>

              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Region</TableHead>
                    <TableHead>Key Countries</TableHead>
                    <TableHead>Market Share</TableHead>
                    <TableHead>Growth Trend</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">European Union</TableCell>
                    <TableCell>Belgium, Netherlands, Germany, Italy</TableCell>
                    <TableCell>42%</TableCell>
                    <TableCell className="text-green-600">↑ 8% annually</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">North America</TableCell>
                    <TableCell>USA, Canada</TableCell>
                    <TableCell>28%</TableCell>
                    <TableCell className="text-green-600">↑ 12% annually</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">East Asia</TableCell>
                    <TableCell>Japan, South Korea, China</TableCell>
                    <TableCell>18%</TableCell>
                    <TableCell className="text-green-600">↑ 15% annually</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Middle East</TableCell>
                    <TableCell>UAE, Saudi Arabia, Qatar</TableCell>
                    <TableCell>8%</TableCell>
                    <TableCell className="text-green-600">↑ 10% annually</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Others</TableCell>
                    <TableCell>Australia, Singapore, Malaysia</TableCell>
                    <TableCell>4%</TableCell>
                    <TableCell className="text-amber-600">↑ 5% annually</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>

            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Globe className="mr-2 h-5 w-5" /> Market Entry Requirements
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">European Union</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• EU Health Certificate</li>
                      <li>• HACCP Compliance</li>
                      <li>• Traceability Documentation</li>
                      <li>• IUU Fishing Certification</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">United States</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• FDA Registration</li>
                      <li>• HACCP Compliance</li>
                      <li>• Prior Notice of Shipment</li>
                      <li>• Seafood Import Monitoring Program</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Japan</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Health Certificate</li>
                      <li>• Certificate of Origin</li>
                      <li>• Quality Inspection Report</li>
                      <li>• Antibiotic Residue Testing</li>
                    </ul>
                  </div>
                  <Button variant="outline" className="w-full flex items-center justify-center">
                    <FileText className="mr-2 h-4 w-4" /> Download Full Requirements Guide
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="regulations" className="mt-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-4">Regulations & Certifications</h3>
                <p className="text-muted-foreground mb-6">
                  Cox's Bazar marine product exporters adhere to strict international and national regulations to ensure
                  product quality, safety, and sustainability.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Award className="mr-2 h-5 w-5 text-amber-600" /> Quality Certifications
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="bg-amber-100 text-amber-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          ✓
                        </div>
                        <div>
                          <p className="font-medium">HACCP Certification</p>
                          <p className="text-sm text-muted-foreground">
                            Hazard Analysis Critical Control Point system implementation
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-amber-100 text-amber-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          ✓
                        </div>
                        <div>
                          <p className="font-medium">BAP Certification</p>
                          <p className="text-sm text-muted-foreground">
                            Best Aquaculture Practices for responsible farming
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-amber-100 text-amber-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          ✓
                        </div>
                        <div>
                          <p className="font-medium">ISO 22000</p>
                          <p className="text-sm text-muted-foreground">Food safety management systems</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-amber-100 text-amber-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          ✓
                        </div>
                        <div>
                          <p className="font-medium">BRC Global Standard</p>
                          <p className="text-sm text-muted-foreground">
                            British Retail Consortium food safety standard
                          </p>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Award className="mr-2 h-5 w-5 text-green-600" /> Sustainability Certifications
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="bg-green-100 text-green-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          ✓
                        </div>
                        <div>
                          <p className="font-medium">MSC Certification</p>
                          <p className="text-sm text-muted-foreground">
                            Marine Stewardship Council sustainable fishing
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-green-100 text-green-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          ✓
                        </div>
                        <div>
                          <p className="font-medium">ASC Certification</p>
                          <p className="text-sm text-muted-foreground">
                            Aquaculture Stewardship Council responsible farming
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-green-100 text-green-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          ✓
                        </div>
                        <div>
                          <p className="font-medium">Friend of the Sea</p>
                          <p className="text-sm text-muted-foreground">Sustainable seafood certification</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-green-100 text-green-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          ✓
                        </div>
                        <div>
                          <p className="font-medium">Naturland</p>
                          <p className="text-sm text-muted-foreground">Organic aquaculture certification</p>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div>
                <h4 className="text-xl font-medium mb-4">National Regulatory Framework</h4>
                <p className="text-muted-foreground mb-4">
                  The Bangladesh government has established a comprehensive regulatory framework to ensure the quality
                  and safety of seafood exports:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Department of Fisheries (DoF) inspection and certification</li>
                  <li>• Bangladesh Food Safety Authority (BFSA) oversight</li>
                  <li>• Fish and Fish Products (Inspection and Quality Control) Rules</li>
                  <li>• Marine Fisheries Ordinance for sustainable fishing practices</li>
                  <li>• Export Promotion Bureau (EPB) export facilitation</li>
                </ul>
              </div>
            </div>

            <div>
              <Card className="bg-blue-50 border-blue-200">
                <CardHeader>
                  <CardTitle>Regulatory Support Services</CardTitle>
                  <CardDescription>Available assistance for exporters</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Certification Assistance</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      Expert guidance through certification processes for international standards.
                    </p>
                    <Button variant="outline" size="sm" className="w-full">
                      Request Assistance
                    </Button>
                  </div>

                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Laboratory Testing</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      Accredited testing facilities for quality, safety, and compliance verification.
                    </p>
                    <Button variant="outline" size="sm" className="w-full">
                      Schedule Testing
                    </Button>
                  </div>

                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Export Documentation</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      Streamlined processing of required export certificates and documentation.
                    </p>
                    <Button variant="outline" size="sm" className="w-full">
                      Documentation Guide
                    </Button>
                  </div>

                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Training Programs</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      Regular training on international standards and best practices.
                    </p>
                    <Button variant="outline" size="sm" className="w-full">
                      View Schedule
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="investment" className="mt-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold mb-4">Investment Opportunities</h3>
              <p className="text-muted-foreground mb-6">
                The marine products sector in Cox's Bazar offers numerous investment opportunities across the value
                chain, from production to processing and export.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Modern Processing Facilities</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Investment in state-of-the-art processing facilities with advanced freezing, packaging, and
                      value-addition capabilities.
                    </p>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Investment Range</span>
                        <span className="text-sm font-medium">$2-10 million</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Estimated ROI</span>
                        <span className="text-sm font-medium">18-22% annually</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Payback Period</span>
                        <span className="text-sm font-medium">4-5 years</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Aquaculture Expansion</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Development of sustainable aquaculture farms using modern techniques for shrimp, fish, and crab
                      production.
                    </p>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Investment Range</span>
                        <span className="text-sm font-medium">$1-5 million</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Estimated ROI</span>
                        <span className="text-sm font-medium">15-20% annually</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Payback Period</span>
                        <span className="text-sm font-medium">3-4 years</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Cold Chain Infrastructure</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Investment in cold storage, refrigerated transport, and logistics to maintain product quality from
                      harvest to export.
                    </p>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Investment Range</span>
                        <span className="text-sm font-medium">$0.5-3 million</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Estimated ROI</span>
                        <span className="text-sm font-medium">12-16% annually</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Payback Period</span>
                        <span className="text-sm font-medium">5-6 years</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Value-Added Products</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Development of ready-to-cook, ready-to-eat, and premium seafood products for international
                      markets.
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
                        <span className="text-sm text-muted-foreground">Payback Period</span>
                        <span className="text-sm font-medium">3-4 years</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="text-xl font-medium mb-4">Success Story: Marine Harvest Bangladesh</h4>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <div className="relative h-48 rounded-lg overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=400&width=600"
                        alt="Marine Harvest Bangladesh Facility"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-muted-foreground mb-4">
                      Marine Harvest Bangladesh invested $4.2 million in a modern shrimp processing facility in Cox's
                      Bazar in 2018. Within 3 years, the company achieved:
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Export growth from $1.8 million to $7.5 million annually</li>
                      <li>• Expansion to 5 new international markets</li>
                      <li>• Creation of 280 direct jobs and 500+ indirect jobs</li>
                      <li>• Return on investment of 22% by year 3</li>
                      <li>• Multiple international quality certifications</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Investment Incentives</CardTitle>
                  <CardDescription>Government support for investors</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="pb-3 border-b">
                    <h4 className="font-medium mb-1">Tax Holidays</h4>
                    <p className="text-sm text-muted-foreground">
                      5-10 year tax exemptions for new investments in seafood processing.
                    </p>
                  </div>

                  <div className="pb-3 border-b">
                    <h4 className="font-medium mb-1">Duty-Free Imports</h4>
                    <p className="text-sm text-muted-foreground">
                      Exemption from import duties on capital machinery and equipment.
                    </p>
                  </div>

                  <div className="pb-3 border-b">
                    <h4 className="font-medium mb-1">Land Allocation</h4>
                    <p className="text-sm text-muted-foreground">
                      Preferential land allocation in industrial zones and special economic zones.
                    </p>
                  </div>

                  <div className="pb-3 border-b">
                    <h4 className="font-medium mb-1">Export Incentives</h4>
                    <p className="text-sm text-muted-foreground">
                      10% cash incentive on export value for processed seafood products.
                    </p>
                  </div>

                  <div className="pb-3 border-b">
                    <h4 className="font-medium mb-1">Repatriation Benefits</h4>
                    <p className="text-sm text-muted-foreground">
                      100% profit repatriation allowed for foreign investors.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-medium mb-1">Low-Cost Financing</h4>
                    <p className="text-sm text-muted-foreground">
                      Access to special credit schemes with preferential interest rates.
                    </p>
                  </div>

                  <Button className="w-full mt-4">Investment Facilitation Support</Button>
                </CardContent>
              </Card>

              <div className="mt-6 p-6 bg-blue-50 rounded-lg">
                <h4 className="font-medium mb-4">Investment Process</h4>
                <ol className="space-y-3">
                  <li className="flex items-start">
                    <div className="bg-blue-100 text-blue-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      1
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Initial consultation with Investment Promotion Agency
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 text-blue-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      2
                    </div>
                    <p className="text-sm text-muted-foreground">Registration with Board of Investment (BOI)</p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 text-blue-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      3
                    </div>
                    <p className="text-sm text-muted-foreground">Land acquisition and environmental clearance</p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 text-blue-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      4
                    </div>
                    <p className="text-sm text-muted-foreground">Company registration and trade license</p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 text-blue-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      5
                    </div>
                    <p className="text-sm text-muted-foreground">Utility connections and construction permits</p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 text-blue-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      6
                    </div>
                    <p className="text-sm text-muted-foreground">Operational permits and certifications</p>
                  </li>
                </ol>
                <Button variant="outline" className="w-full mt-4 text-sm">
                  Download Complete Investment Guide
                </Button>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-8 text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Ready to Export from Cox's Bazar?</h2>
            <p className="mb-6">
              Connect with our export facilitation team to explore opportunities, certifications, and support for your
              marine products business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="secondary" size="lg">
                Schedule Consultation
              </Button>
              <Button variant="outline" className="bg-transparent text-white border-white hover:bg-white/10" size="lg">
                Download Export Guide
              </Button>
            </div>
          </div>
          <div className="bg-white/10 p-6 rounded-lg">
            <h3 className="text-xl font-medium mb-4">Export Support Services</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="bg-white text-blue-600 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                  ✓
                </div>
                <p>Market research and buyer matching</p>
              </li>
              <li className="flex items-start">
                <div className="bg-white text-blue-600 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                  ✓
                </div>
                <p>Certification and compliance assistance</p>
              </li>
              <li className="flex items-start">
                <div className="bg-white text-blue-600 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                  ✓
                </div>
                <p>Export documentation and logistics support</p>
              </li>
              <li className="flex items-start">
                <div className="bg-white text-blue-600 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                  ✓
                </div>
                <p>Trade fair participation and promotion</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

