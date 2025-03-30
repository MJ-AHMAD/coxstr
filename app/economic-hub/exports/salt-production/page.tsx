import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Download, TrendingUp, Globe, Award, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export const metadata = {
  title: "Salt Production Export | Cox's Bazar Economic Hub",
  description:
    "Explore Cox's Bazar's salt production export potential with opportunities for premium packaging and marketing in international markets.",
}

export default function SaltProductionPage() {
  return (
    <div className="container mx-auto py-12">
      <div className="mb-8">
        <Link href="/economic-hub" className="flex items-center text-muted-foreground hover:text-primary mb-4">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Economic Hub
        </Link>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-4xl font-bold mb-2">Salt Production Export</h1>
            <p className="text-xl text-muted-foreground">
              High-quality sea salt with potential for premium packaging and marketing
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
              alt="Salt Production in Cox's Bazar"
              fill
              className="object-cover"
            />
          </div>
          <div className="prose max-w-none">
            <p className="text-lg leading-relaxed">
              Cox's Bazar is home to one of Bangladesh's most significant salt production regions, with ideal conditions
              for producing high-quality sea salt through traditional and modern methods. The region's salt production
              has been a traditional industry for generations, now evolving to meet international standards and market
              demands.
            </p>
            <p className="leading-relaxed">
              The salt industry employs over 15,000 workers in the region and has significant potential for growth
              through value-added processing, premium packaging, and targeting specialty food and wellness markets
              worldwide. With increasing global demand for natural, artisanal, and specialty salts, Cox's Bazar's salt
              production is positioned for transformation from a commodity to a premium export product.
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
                <span className="font-medium">$8 Million</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b">
                <span className="text-muted-foreground">Growth Potential</span>
                <span className="font-medium">25-30% Annually</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b">
                <span className="text-muted-foreground">Employment</span>
                <span className="font-medium">15,000+ Workers</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b">
                <span className="text-muted-foreground">Production Capacity</span>
                <span className="font-medium">350,000 tons/year</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b">
                <span className="text-muted-foreground">Primary Markets</span>
                <span className="font-medium">Regional, Growing Global</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Key Products</span>
                <span className="font-medium">Sea Salt, Specialty Salts</span>
              </div>
            </CardContent>
          </Card>

          <div className="mt-6 bg-blue-50 rounded-lg p-6">
            <h3 className="text-lg font-medium mb-4 flex items-center">
              <TrendingUp className="mr-2 h-5 w-5 text-blue-600" /> Market Opportunity
            </h3>
            <p className="mb-4 text-muted-foreground">
              The global specialty salt market is projected to reach $2.4 billion by 2026, with premium and gourmet
              salts growing at 6.8% annually.
            </p>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="bg-white p-3 rounded-lg">
                <p className="text-2xl font-bold text-blue-600">58%</p>
                <p className="text-xs text-muted-foreground">Premium over commodity salt</p>
              </div>
              <div className="bg-white p-3 rounded-lg">
                <p className="text-2xl font-bold text-blue-600">$420M</p>
                <p className="text-xs text-muted-foreground">Gourmet salt market size</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Tabs defaultValue="products" className="mb-16">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="products">Key Products</TabsTrigger>
          <TabsTrigger value="markets">Target Markets</TabsTrigger>
          <TabsTrigger value="regulations">Standards</TabsTrigger>
          <TabsTrigger value="investment">Investment</TabsTrigger>
        </TabsList>

        <TabsContent value="products" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Natural Sea Salt"
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardHeader>
                <CardTitle>Natural Sea Salt</CardTitle>
                <CardDescription>Traditional sun-dried sea salt</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Export Volume</span>
                    <span className="text-sm font-medium">120,000 tons/year</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Value</span>
                    <span className="text-sm font-medium">$4.8 million</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Key Markets</span>
                    <span className="text-sm font-medium">Regional, Industrial</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Certifications</span>
                    <span className="text-sm font-medium">ISO, HACCP</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Gourmet Flake Salt"
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardHeader>
                <CardTitle>Gourmet Flake Salt</CardTitle>
                <CardDescription>Premium culinary salt with unique texture</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Export Volume</span>
                    <span className="text-sm font-medium">2,500 tons/year</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Value</span>
                    <span className="text-sm font-medium">$2.2 million</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Key Markets</span>
                    <span className="text-sm font-medium">EU, USA, Japan</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Certifications</span>
                    <span className="text-sm font-medium">Organic, Kosher</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Specialty Bath Salts"
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardHeader>
                <CardTitle>Specialty Bath Salts</CardTitle>
                <CardDescription>Wellness and spa products with natural minerals</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Export Volume</span>
                    <span className="text-sm font-medium">1,200 tons/year</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Value</span>
                    <span className="text-sm font-medium">$1 million</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Key Markets</span>
                    <span className="text-sm font-medium">EU, USA, Australia</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Certifications</span>
                    <span className="text-sm font-medium">Natural, Cruelty-Free</span>
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
                Cox's Bazar salt products are currently exported primarily to regional markets, with growing
                opportunities in premium international markets for specialty salt products.
              </p>

              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Market Segment</TableHead>
                    <TableHead>Key Countries</TableHead>
                    <TableHead>Market Share</TableHead>
                    <TableHead>Growth Potential</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Regional Industrial</TableCell>
                    <TableCell>India, Nepal, Bhutan, Myanmar</TableCell>
                    <TableCell>62%</TableCell>
                    <TableCell className="text-amber-600">↑ 5% annually</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Gourmet Culinary</TableCell>
                    <TableCell>EU, USA, Japan, Australia</TableCell>
                    <TableCell>18%</TableCell>
                    <TableCell className="text-green-600">↑ 25% annually</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Wellness & Spa</TableCell>
                    <TableCell>EU, USA, Middle East</TableCell>
                    <TableCell>12%</TableCell>
                    <TableCell className="text-green-600">↑ 30% annually</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Organic Food</TableCell>
                    <TableCell>EU, USA, Japan, South Korea</TableCell>
                    <TableCell>5%</TableCell>
                    <TableCell className="text-green-600">↑ 20% annually</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Others</TableCell>
                    <TableCell>Various global markets</TableCell>
                    <TableCell>3%</TableCell>
                    <TableCell className="text-green-600">↑ 15% annually</TableCell>
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
                    <h4 className="font-medium mb-2">Gourmet Markets</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Premium packaging and branding</li>
                      <li>• Mineral content analysis</li>
                      <li>• Artisanal production documentation</li>
                      <li>• Culinary endorsements</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Wellness Markets</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Natural/organic certification</li>
                      <li>• Therapeutic mineral content verification</li>
                      <li>• Cruelty-free and environmentally friendly certification</li>
                      <li>• Detailed ingredient and sourcing information</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Food Industry</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Food safety certification (HACCP, ISO)</li>
                      <li>• Consistent quality and supply chain</li>
                      <li>• Competitive pricing structure</li>
                      <li>• Bulk packaging options</li>
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
                <h3 className="text-2xl font-bold mb-4">Standards & Certifications</h3>
                <p className="text-muted-foreground mb-6">
                  Cox's Bazar salt producers adhere to various standards and certifications to ensure product quality,
                  safety, and market access, particularly for premium and specialty salt products.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Award className="mr-2 h-5 w-5 text-amber-600" /> Quality Standards
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="bg-amber-100 text-amber-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          ✓
                        </div>
                        <div>
                          <p className="font-medium">ISO 9001</p>
                          <p className="text-sm text-muted-foreground">Quality management systems</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-amber-100 text-amber-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          ✓
                        </div>
                        <div>
                          <p className="font-medium">HACCP</p>
                          <p className="text-sm text-muted-foreground">
                            Hazard Analysis Critical Control Points for food safety
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-amber-100 text-amber-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          ✓
                        </div>
                        <div>
                          <p className="font-medium">BSTI Standards</p>
                          <p className="text-sm text-muted-foreground">
                            Bangladesh Standards and Testing Institution compliance
                          </p>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Award className="mr-2 h-5 w-5 text-green-600" /> Specialty Certifications
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="bg-green-100 text-green-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          ✓
                        </div>
                        <div>
                          <p className="font-medium">Organic Certification</p>
                          <p className="text-sm text-muted-foreground">For natural, unprocessed salt products</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-green-100 text-green-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          ✓
                        </div>
                        <div>
                          <p className="font-medium">Kosher Certification</p>
                          <p className="text-sm text-muted-foreground">For specialty culinary salt markets</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-green-100 text-green-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          ✓
                        </div>
                        <div>
                          <p className="font-medium">Natural Product Certification</p>
                          <p className="text-sm text-muted-foreground">For wellness and spa salt products</p>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div>
                <h4 className="text-xl font-medium mb-4">Regulatory Requirements</h4>
                <p className="text-muted-foreground mb-4">
                  Salt products must comply with various regulatory requirements depending on the target market:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Food grade salt standards (iodization, purity levels)</li>
                  <li>• Heavy metal and contaminant testing</li>
                  <li>• Mineral content analysis and labeling</li>
                  <li>• Country-specific import regulations</li>
                  <li>• Packaging and labeling requirements</li>
                </ul>
              </div>
            </div>

            <div>
              <Card className="bg-blue-50 border-blue-200">
                <CardHeader>
                  <CardTitle>Quality Support Services</CardTitle>
                  <CardDescription>Available assistance for producers</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Quality Testing</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      Comprehensive testing for purity, mineral content, and contaminants.
                    </p>
                    <Button variant="outline" size="sm" className="w-full">
                      Request Testing
                    </Button>
                  </div>

                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Certification Assistance</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      Guidance through certification processes for specialty markets.
                    </p>
                    <Button variant="outline" size="sm" className="w-full">
                      Certification Guide
                    </Button>
                  </div>

                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Packaging Consultation</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      Design and material consultation for premium market positioning.
                    </p>
                    <Button variant="outline" size="sm" className="w-full">
                      Schedule Consultation
                    </Button>
                  </div>

                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Production Training</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      Training on improved production methods for premium salt.
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
                The salt production sector in Cox's Bazar offers numerous investment opportunities to transform
                traditional salt production into a premium export industry.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Modern Production Facilities</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Investment in modern salt production facilities with improved techniques for premium quality salt.
                    </p>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Investment Range</span>
                        <span className="text-sm font-medium">$500K-3M</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Estimated ROI</span>
                        <span className="text-sm font-medium">15-20% annually</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Payback Period</span>
                        <span className="text-sm font-medium">4-6 years</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Specialty Salt Processing</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Development of facilities for producing gourmet flake salt, flavored salts, and specialty culinary
                      salts.
                    </p>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Investment Range</span>
                        <span className="text-sm font-medium">$300K-1.5M</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Estimated ROI</span>
                        <span className="text-sm font-medium">20-25% annually</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Payback Period</span>
                        <span className="text-sm font-medium">3-5 years</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Wellness Product Development</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Investment in facilities for producing bath salts, spa products, and therapeutic salt products.
                    </p>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Investment Range</span>
                        <span className="text-sm font-medium">$200K-1M</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Estimated ROI</span>
                        <span className="text-sm font-medium">22-28% annually</span>
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
                    <CardTitle>Premium Packaging & Branding</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Development of premium packaging, branding, and marketing for high-end salt products.
                    </p>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Investment Range</span>
                        <span className="text-sm font-medium">$100K-500K</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Estimated ROI</span>
                        <span className="text-sm font-medium">25-35% annually</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Payback Period</span>
                        <span className="text-sm font-medium">2-3 years</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="text-xl font-medium mb-4">Success Story: Bay Salt Artisans</h4>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <div className="relative h-48 rounded-lg overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=400&width=600"
                        alt="Bay Salt Artisans Facility"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-muted-foreground mb-4">
                      Bay Salt Artisans started in 2019 with an investment of $380,000 to transform traditional salt
                      production into premium gourmet and wellness salt products. Within 3 years, the company achieved:
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Revenue growth from $120,000 to $1.4 million annually</li>
                      <li>• Expansion to 6 international markets with premium positioning</li>
                      <li>• Employment for 120+ workers, with improved working conditions</li>
                      <li>• Return on investment of 28% by year 3</li>
                      <li>• Multiple specialty certifications and culinary endorsements</li>
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
                    <h4 className="font-medium mb-1">Tax Benefits</h4>
                    <p className="text-sm text-muted-foreground">
                      5-7 year tax exemptions for investments in salt processing and value addition.
                    </p>
                  </div>

                  <div className="pb-3 border-b">
                    <h4 className="font-medium mb-1">Export Incentives</h4>
                    <p className="text-sm text-muted-foreground">
                      15% cash incentive on FOB value for specialty salt exports.
                    </p>
                  </div>

                  <div className="pb-3 border-b">
                    <h4 className="font-medium mb-1">Land Allocation</h4>
                    <p className="text-sm text-muted-foreground">
                      Preferential land allocation in salt production zones.
                    </p>
                  </div>

                  <div className="pb-3 border-b">
                    <h4 className="font-medium mb-1">Low-Interest Financing</h4>
                    <p className="text-sm text-muted-foreground">
                      Special credit schemes with 5-7% interest rates for salt processing.
                    </p>
                  </div>

                  <div className="pb-3 border-b">
                    <h4 className="font-medium mb-1">Technology Subsidies</h4>
                    <p className="text-sm text-muted-foreground">
                      Subsidies for importing modern salt processing technology.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-medium mb-1">Training Support</h4>
                    <p className="text-sm text-muted-foreground">
                      Government-funded training programs for salt workers.
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
                      Initial consultation with Salt Industry Development Board
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 text-blue-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      2
                    </div>
                    <p className="text-sm text-muted-foreground">Site selection and feasibility study</p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 text-blue-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      3
                    </div>
                    <p className="text-sm text-muted-foreground">Registration and permit acquisition</p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 text-blue-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      4
                    </div>
                    <p className="text-sm text-muted-foreground">Production facility establishment</p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 text-blue-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      5
                    </div>
                    <p className="text-sm text-muted-foreground">Quality certification and market development</p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 text-blue-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      6
                    </div>
                    <p className="text-sm text-muted-foreground">Export market entry</p>
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
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Salt Production?</h2>
            <p className="mb-6">
              Connect with our salt industry development team to explore opportunities, certifications, and support for
              your salt production business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="secondary" size="lg">
                Schedule Consultation
              </Button>
              <Button variant="outline" className="bg-transparent text-white border-white hover:bg-white/10" size="lg">
                Download Industry Guide
              </Button>
            </div>
          </div>
          <div className="bg-white/10 p-6 rounded-lg">
            <h3 className="text-xl font-medium mb-4">Development Support Services</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="bg-white text-blue-600 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                  ✓
                </div>
                <p>Production technology modernization assistance</p>
              </li>
              <li className="flex items-start">
                <div className="bg-white text-blue-600 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                  ✓
                </div>
                <p>Product development and diversification support</p>
              </li>
              <li className="flex items-start">
                <div className="bg-white text-blue-600 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                  ✓
                </div>
                <p>Quality certification and premium market access</p>
              </li>
              <li className="flex items-start">
                <div className="bg-white text-blue-600 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                  ✓
                </div>
                <p>Branding, packaging, and marketing assistance</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

