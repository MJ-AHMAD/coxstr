import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Download, TrendingUp, Globe, Award, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export const metadata = {
  title: "Agricultural Products Export | Cox's Bazar Economic Hub",
  description:
    "Explore Cox's Bazar's agricultural products export potential including organic fruits, spices, and specialty crops with growing international demand.",
}

export default function AgriculturalProductsPage() {
  return (
    <div className="container mx-auto py-12">
      <div className="mb-8">
        <Link href="/economic-hub" className="flex items-center text-muted-foreground hover:text-primary mb-4">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Economic Hub
        </Link>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-4xl font-bold mb-2">Agricultural Products Export</h1>
            <p className="text-xl text-muted-foreground">
              Organic fruits, spices, and specialty crops with growing international demand
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
              alt="Agricultural Products from Cox's Bazar"
              fill
              className="object-cover"
            />
          </div>
          <div className="prose max-w-none">
            <p className="text-lg leading-relaxed">
              Cox's Bazar's unique microclimate and fertile soil create ideal conditions for growing a diverse range of
              high-quality agricultural products. The region is increasingly recognized for its organic and specialty
              crops that meet growing international demand for sustainable, traceable food products.
            </p>
            <p className="leading-relaxed">
              The agricultural export sector employs over 25,000 farmers and workers in the region, with a focus on
              sustainable farming practices that preserve the natural environment while producing premium quality crops.
              With increasing global demand for organic and specialty food products, Cox's Bazar's agricultural exports
              are positioned for significant growth in premium markets worldwide.
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
                <span className="font-medium">$35 Million</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b">
                <span className="text-muted-foreground">Growth Rate</span>
                <span className="font-medium">14-18% Annually</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b">
                <span className="text-muted-foreground">Employment</span>
                <span className="font-medium">25,000+ Farmers</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b">
                <span className="text-muted-foreground">Organic Certification</span>
                <span className="font-medium">65% of Production</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b">
                <span className="text-muted-foreground">Primary Markets</span>
                <span className="font-medium">EU, Middle East, Asia</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Key Products</span>
                <span className="font-medium">Fruits, Spices, Nuts</span>
              </div>
            </CardContent>
          </Card>

          <div className="mt-6 bg-blue-50 rounded-lg p-6">
            <h3 className="text-lg font-medium mb-4 flex items-center">
              <TrendingUp className="mr-2 h-5 w-5 text-blue-600" /> Market Opportunity
            </h3>
            <p className="mb-4 text-muted-foreground">
              The global organic food market is projected to reach $380 billion by 2025, with specialty and exotic
              agricultural products growing at 16% annually.
            </p>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="bg-white p-3 rounded-lg">
                <p className="text-2xl font-bold text-blue-600">82%</p>
                <p className="text-xs text-muted-foreground">Of consumers prefer organic products</p>
              </div>
              <div className="bg-white p-3 rounded-lg">
                <p className="text-2xl font-bold text-blue-600">$120B</p>
                <p className="text-xs text-muted-foreground">Specialty food market size</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Tabs defaultValue="products" className="mb-16">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="products">Key Products</TabsTrigger>
          <TabsTrigger value="markets">Target Markets</TabsTrigger>
          <TabsTrigger value="regulations">Certifications</TabsTrigger>
          <TabsTrigger value="investment">Investment</TabsTrigger>
        </TabsList>

        <TabsContent value="products" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Tropical Fruits"
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardHeader>
                <CardTitle>Tropical Fruits</CardTitle>
                <CardDescription>Organic and specialty varieties</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Export Volume</span>
                    <span className="text-sm font-medium">12,500 tons/year</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Value</span>
                    <span className="text-sm font-medium">$14.5 million</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Key Markets</span>
                    <span className="text-sm font-medium">Middle East, EU, China</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Certifications</span>
                    <span className="text-sm font-medium">Organic, GlobalGAP</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Spices and Herbs"
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardHeader>
                <CardTitle>Spices and Herbs</CardTitle>
                <CardDescription>Premium quality and organic certified</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Export Volume</span>
                    <span className="text-sm font-medium">8,200 tons/year</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Value</span>
                    <span className="text-sm font-medium">$12.8 million</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Key Markets</span>
                    <span className="text-sm font-medium">EU, USA, Japan</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Certifications</span>
                    <span className="text-sm font-medium">Organic, Fair Trade</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Nuts and Specialty Crops"
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardHeader>
                <CardTitle>Nuts and Specialty Crops</CardTitle>
                <CardDescription>Cashews, betel leaf, and unique varieties</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Export Volume</span>
                    <span className="text-sm font-medium">5,800 tons/year</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Value</span>
                    <span className="text-sm font-medium">$7.7 million</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Key Markets</span>
                    <span className="text-sm font-medium">India, Middle East, UK</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Certifications</span>
                    <span className="text-sm font-medium">Organic, HACCP</span>
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
                Cox's Bazar agricultural products are exported to over 18 countries worldwide, with key markets in the
                Middle East, Europe, and Asia.
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
                    <TableCell className="font-medium">Middle East</TableCell>
                    <TableCell>UAE, Saudi Arabia, Qatar, Kuwait</TableCell>
                    <TableCell>42%</TableCell>
                    <TableCell className="text-green-600">↑ 18% annually</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">European Union</TableCell>
                    <TableCell>Germany, UK, Netherlands, France</TableCell>
                    <TableCell>28%</TableCell>
                    <TableCell className="text-green-600">↑ 15% annually</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">East Asia</TableCell>
                    <TableCell>Japan, South Korea, China</TableCell>
                    <TableCell>18%</TableCell>
                    <TableCell className="text-green-600">↑ 12% annually</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">South Asia</TableCell>
                    <TableCell>India, Nepal, Maldives</TableCell>
                    <TableCell>8%</TableCell>
                    <TableCell className="text-green-600">↑ 10% annually</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Others</TableCell>
                    <TableCell>USA, Canada, Australia</TableCell>
                    <TableCell>4%</TableCell>
                    <TableCell className="text-amber-600">↑ 8% annually</TableCell>
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
                      <li>• EU Organic certification</li>
                      <li>• Phytosanitary certificates</li>
                      <li>• Maximum Residue Limits (MRLs) compliance</li>
                      <li>• Traceability documentation</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Middle East</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Halal certification (where applicable)</li>
                      <li>• Gulf Standards Organization compliance</li>
                      <li>• Country-specific import permits</li>
                      <li>• Quality grading documentation</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">East Asia</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Pesticide residue testing</li>
                      <li>• Country-specific quarantine requirements</li>
                      <li>• Product registration (Japan, Korea)</li>
                      <li>• Packaging and labeling standards</li>
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
                <h3 className="text-2xl font-bold mb-4">Certifications & Standards</h3>
                <p className="text-muted-foreground mb-6">
                  Cox's Bazar agricultural product exporters adhere to international standards and certifications to
                  ensure product quality, safety, and market access.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Award className="mr-2 h-5 w-5 text-amber-600" /> Organic Certifications
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="bg-amber-100 text-amber-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          ✓
                        </div>
                        <div>
                          <p className="font-medium">EU Organic Certification</p>
                          <p className="text-sm text-muted-foreground">European Union organic standards compliance</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-amber-100 text-amber-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          ✓
                        </div>
                        <div>
                          <p className="font-medium">USDA Organic</p>
                          <p className="text-sm text-muted-foreground">
                            United States Department of Agriculture organic standards
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-amber-100 text-amber-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          ✓
                        </div>
                        <div>
                          <p className="font-medium">JAS Organic</p>
                          <p className="text-sm text-muted-foreground">
                            Japanese Agricultural Standard for organic products
                          </p>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Award className="mr-2 h-5 w-5 text-green-600" /> Quality & Safety Standards
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="bg-green-100 text-green-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          ✓
                        </div>
                        <div>
                          <p className="font-medium">GlobalGAP</p>
                          <p className="text-sm text-muted-foreground">Good Agricultural Practices certification</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-green-100 text-green-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          ✓
                        </div>
                        <div>
                          <p className="font-medium">HACCP</p>
                          <p className="text-sm text-muted-foreground">
                            Hazard Analysis Critical Control Points food safety system
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-green-100 text-green-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          ✓
                        </div>
                        <div>
                          <p className="font-medium">ISO 22000</p>
                          <p className="text-sm text-muted-foreground">Food safety management systems</p>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div>
                <h4 className="text-xl font-medium mb-4">Regulatory Requirements</h4>
                <p className="text-muted-foreground mb-4">
                  Agricultural exports must comply with various regulatory requirements depending on the target market:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Phytosanitary certificates from Plant Quarantine Department</li>
                  <li>• Maximum Residue Limits (MRLs) compliance for pesticides</li>
                  <li>• Food safety certifications and testing reports</li>
                  <li>• Country-specific import permits and registrations</li>
                  <li>• Packaging, labeling, and traceability requirements</li>
                </ul>
              </div>
            </div>

            <div>
              <Card className="bg-blue-50 border-blue-200">
                <CardHeader>
                  <CardTitle>Certification Support Services</CardTitle>
                  <CardDescription>Available assistance for exporters</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Organic Certification</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      Guidance through the organic certification process for farmers and processors.
                    </p>
                    <Button variant="outline" size="sm" className="w-full">
                      Request Assistance
                    </Button>
                  </div>

                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Laboratory Testing</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      Accredited testing for pesticide residues, contaminants, and quality parameters.
                    </p>
                    <Button variant="outline" size="sm" className="w-full">
                      Schedule Testing
                    </Button>
                  </div>

                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Export Documentation</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      Assistance with phytosanitary certificates, certificates of origin, and export permits.
                    </p>
                    <Button variant="outline" size="sm" className="w-full">
                      Documentation Guide
                    </Button>
                  </div>

                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Farmer Training</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      Training programs on organic farming, quality standards, and export requirements.
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
                The agricultural products sector in Cox's Bazar offers numerous investment opportunities across the
                value chain, from production to processing and export.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Organic Farming Expansion</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Investment in expanding organic farming operations with modern techniques and certification
                      support.
                    </p>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Investment Range</span>
                        <span className="text-sm font-medium">$100K-2M</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Estimated ROI</span>
                        <span className="text-sm font-medium">18-22% annually</span>
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
                    <CardTitle>Processing & Packaging Facilities</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Development of modern processing, packaging, and cold chain facilities for export-quality
                      products.
                    </p>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Investment Range</span>
                        <span className="text-sm font-medium">$500K-3M</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Estimated ROI</span>
                        <span className="text-sm font-medium">16-20% annually</span>
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
                    <CardTitle>Specialty Crop Development</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Investment in research, development, and cultivation of high-value specialty crops for niche
                      markets.
                    </p>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Investment Range</span>
                        <span className="text-sm font-medium">$200K-1M</span>
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

                <Card>
                  <CardHeader>
                    <CardTitle>Value-Added Products</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Development of processed and value-added agricultural products for premium export markets.
                    </p>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Investment Range</span>
                        <span className="text-sm font-medium">$300K-2M</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Estimated ROI</span>
                        <span className="text-sm font-medium">18-24% annually</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Payback Period</span>
                        <span className="text-sm font-medium">3-5 years</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="text-xl font-medium mb-4">Success Story: Green Valley Organics</h4>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <div className="relative h-48 rounded-lg overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=400&width=600"
                        alt="Green Valley Organics Farm"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-muted-foreground mb-4">
                      Green Valley Organics started in 2018 with an investment of $850,000 to develop 120 hectares of
                      organic fruit and spice production with integrated processing facilities. Within 4 years, the
                      company achieved:
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Export growth from $320,000 to $3.2 million annually</li>
                      <li>• Expansion to 7 international markets with premium positioning</li>
                      <li>• Employment for 450+ farmers and workers, with 60% women</li>
                      <li>• Return on investment of 22% by year 3</li>
                      <li>• Multiple organic and quality certifications for all products</li>
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
                      5-8 year tax exemptions for investments in agricultural production and processing.
                    </p>
                  </div>

                  <div className="pb-3 border-b">
                    <h4 className="font-medium mb-1">Export Incentives</h4>
                    <p className="text-sm text-muted-foreground">
                      20% cash incentive on FOB value for organic agricultural exports.
                    </p>
                  </div>

                  <div className="pb-3 border-b">
                    <h4 className="font-medium mb-1">Land Allocation</h4>
                    <p className="text-sm text-muted-foreground">
                      Preferential land allocation for agricultural projects in designated zones.
                    </p>
                  </div>

                  <div className="pb-3 border-b">
                    <h4 className="font-medium mb-1">Low-Interest Financing</h4>
                    <p className="text-sm text-muted-foreground">
                      Special agricultural credit schemes with 4-6% interest rates.
                    </p>
                  </div>

                  <div className="pb-3 border-b">
                    <h4 className="font-medium mb-1">Certification Subsidies</h4>
                    <p className="text-sm text-muted-foreground">
                      Government subsidies covering up to 70% of organic certification costs.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-medium mb-1">Duty-Free Equipment</h4>
                    <p className="text-sm text-muted-foreground">
                      Exemption from import duties on agricultural machinery and equipment.
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
                      Initial consultation with Agricultural Investment Promotion Agency
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 text-blue-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      2
                    </div>
                    <p className="text-sm text-muted-foreground">Land identification and feasibility study</p>
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
                    <p className="text-sm text-muted-foreground">Farmer engagement and training program setup</p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 text-blue-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      5
                    </div>
                    <p className="text-sm text-muted-foreground">Production and processing facility establishment</p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 text-blue-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      6
                    </div>
                    <p className="text-sm text-muted-foreground">Certification and market entry</p>
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
            <h2 className="text-3xl font-bold mb-4">Ready to Export Agricultural Products?</h2>
            <p className="mb-6">
              Connect with our agricultural export facilitation team to explore opportunities, certifications, and
              support for your business.
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
                <p>Organic certification and compliance assistance</p>
              </li>
              <li className="flex items-start">
                <div className="bg-white text-blue-600 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                  ✓
                </div>
                <p>Quality control and testing services</p>
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
                <p>International buyer connections and trade fairs</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

