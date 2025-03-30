import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Download, TrendingUp, Globe, Award, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export const metadata = {
  title: "Handcrafted Products Export | Cox's Bazar Economic Hub",
  description:
    "Explore Cox's Bazar's handcrafted products export potential including shell crafts, bamboo products, and traditional textiles with fair trade opportunities.",
}

export default function HandcraftedProductsPage() {
  return (
    <div className="container mx-auto py-12">
      <div className="mb-8">
        <Link href="/economic-hub" className="flex items-center text-muted-foreground hover:text-primary mb-4">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Economic Hub
        </Link>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-4xl font-bold mb-2">Handcrafted Products Export</h1>
            <p className="text-xl text-muted-foreground">
              Unique handicrafts with appeal in international boutique markets
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
              alt="Handcrafted Products from Cox's Bazar"
              fill
              className="object-cover"
            />
          </div>
          <div className="prose max-w-none">
            <p className="text-lg leading-relaxed">
              Cox's Bazar is home to a vibrant community of skilled artisans who create unique handcrafted products that
              blend traditional techniques with contemporary designs. These artisanal products have gained recognition
              in international markets for their quality, authenticity, and cultural significance.
            </p>
            <p className="leading-relaxed">
              The handcrafted products sector employs over 12,000 artisans in the region, primarily women and members of
              indigenous communities, providing sustainable livelihoods while preserving cultural heritage. With growing
              global demand for ethically sourced, handmade products, Cox's Bazar's handcrafted exports are positioned
              for significant growth in fair trade and premium markets worldwide.
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
                <span className="font-medium">$15 Million</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b">
                <span className="text-muted-foreground">Growth Rate</span>
                <span className="font-medium">12-15% Annually</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b">
                <span className="text-muted-foreground">Employment</span>
                <span className="font-medium">12,000+ Artisans</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b">
                <span className="text-muted-foreground">Production Centers</span>
                <span className="font-medium">35+ Workshops</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b">
                <span className="text-muted-foreground">Primary Markets</span>
                <span className="font-medium">EU, USA, Japan</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Key Products</span>
                <span className="font-medium">Shell, Bamboo, Textiles</span>
              </div>
            </CardContent>
          </Card>

          <div className="mt-6 bg-blue-50 rounded-lg p-6">
            <h3 className="text-lg font-medium mb-4 flex items-center">
              <TrendingUp className="mr-2 h-5 w-5 text-blue-600" /> Market Opportunity
            </h3>
            <p className="mb-4 text-muted-foreground">
              The global handicrafts market is projected to reach $1.2 trillion by 2027, with fair trade and ethically
              sourced products growing at 15% annually.
            </p>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="bg-white p-3 rounded-lg">
                <p className="text-2xl font-bold text-blue-600">78%</p>
                <p className="text-xs text-muted-foreground">Of consumers prefer ethically sourced products</p>
              </div>
              <div className="bg-white p-3 rounded-lg">
                <p className="text-2xl font-bold text-blue-600">$240B</p>
                <p className="text-xs text-muted-foreground">Fair trade market size</p>
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
                  alt="Shell Crafts"
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardHeader>
                <CardTitle>Shell Crafts</CardTitle>
                <CardDescription>Jewelry, decorative items, and souvenirs</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Export Volume</span>
                    <span className="text-sm font-medium">450,000 pieces/year</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Value</span>
                    <span className="text-sm font-medium">$6.5 million</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Key Markets</span>
                    <span className="text-sm font-medium">EU, USA, Australia</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Certifications</span>
                    <span className="text-sm font-medium">Fair Trade, WFTO</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Bamboo Products"
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardHeader>
                <CardTitle>Bamboo Products</CardTitle>
                <CardDescription>Furniture, home decor, and eco-friendly items</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Export Volume</span>
                    <span className="text-sm font-medium">120,000 pieces/year</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Value</span>
                    <span className="text-sm font-medium">$4.2 million</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Key Markets</span>
                    <span className="text-sm font-medium">Japan, EU, Canada</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Certifications</span>
                    <span className="text-sm font-medium">FSC, Eco-Cert</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Traditional Textiles"
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardHeader>
                <CardTitle>Traditional Textiles</CardTitle>
                <CardDescription>Handwoven fabrics, clothing, and accessories</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Export Volume</span>
                    <span className="text-sm font-medium">85,000 pieces/year</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Value</span>
                    <span className="text-sm font-medium">$3.8 million</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Key Markets</span>
                    <span className="text-sm font-medium">USA, UK, Germany</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Certifications</span>
                    <span className="text-sm font-medium">GOTS, Fair Trade</span>
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
                Cox's Bazar handcrafted products are exported to over 20 countries worldwide, with key markets in North
                America, Europe, and Asia.
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
                    <TableCell className="font-medium">North America</TableCell>
                    <TableCell>USA, Canada</TableCell>
                    <TableCell>38%</TableCell>
                    <TableCell className="text-green-600">↑ 15% annually</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">European Union</TableCell>
                    <TableCell>Germany, UK, France, Italy</TableCell>
                    <TableCell>32%</TableCell>
                    <TableCell className="text-green-600">↑ 12% annually</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">East Asia</TableCell>
                    <TableCell>Japan, South Korea</TableCell>
                    <TableCell>18%</TableCell>
                    <TableCell className="text-green-600">↑ 10% annually</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Australia/NZ</TableCell>
                    <TableCell>Australia, New Zealand</TableCell>
                    <TableCell>8%</TableCell>
                    <TableCell className="text-green-600">↑ 14% annually</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Others</TableCell>
                    <TableCell>UAE, Singapore, Hong Kong</TableCell>
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
                    <h4 className="font-medium mb-2">North America</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Product safety certification</li>
                      <li>• Material content labeling</li>
                      <li>• Fair trade certification (preferred)</li>
                      <li>• Country of origin labeling</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">European Union</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• CE marking (where applicable)</li>
                      <li>• REACH compliance for chemicals</li>
                      <li>• Sustainable sourcing documentation</li>
                      <li>• Fair labor practices verification</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Japan</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Product quality certification</li>
                      <li>• Material safety documentation</li>
                      <li>• Detailed craftsmanship information</li>
                      <li>• Cultural significance documentation</li>
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
                  Cox's Bazar handcrafted product exporters adhere to international standards and certifications to
                  ensure product quality, ethical production, and market access.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Award className="mr-2 h-5 w-5 text-amber-600" /> Fair Trade Certifications
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="bg-amber-100 text-amber-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          ✓
                        </div>
                        <div>
                          <p className="font-medium">World Fair Trade Organization (WFTO)</p>
                          <p className="text-sm text-muted-foreground">
                            Guarantees fair trade principles throughout the supply chain
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-amber-100 text-amber-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          ✓
                        </div>
                        <div>
                          <p className="font-medium">Fairtrade International</p>
                          <p className="text-sm text-muted-foreground">
                            Ensures fair prices and working conditions for producers
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-amber-100 text-amber-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          ✓
                        </div>
                        <div>
                          <p className="font-medium">Fair Trade Federation</p>
                          <p className="text-sm text-muted-foreground">
                            North American certification for fair trade businesses
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
                          <p className="font-medium">Global Organic Textile Standard (GOTS)</p>
                          <p className="text-sm text-muted-foreground">
                            Certification for organic textiles and processing
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-green-100 text-green-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          ✓
                        </div>
                        <div>
                          <p className="font-medium">Forest Stewardship Council (FSC)</p>
                          <p className="text-sm text-muted-foreground">Certification for bamboo and wood products</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-green-100 text-green-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          ✓
                        </div>
                        <div>
                          <p className="font-medium">Eco-Cert</p>
                          <p className="text-sm text-muted-foreground">
                            Certification for environmentally friendly products
                          </p>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div>
                <h4 className="text-xl font-medium mb-4">Quality & Safety Standards</h4>
                <p className="text-muted-foreground mb-4">
                  Handcrafted products must meet various quality and safety standards depending on the target market:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• CE marking for products sold in the European Union</li>
                  <li>• CPSC compliance for products sold in the United States</li>
                  <li>• REACH compliance for chemical content in products</li>
                  <li>• ISO 9001 quality management systems</li>
                  <li>• Product-specific safety standards (e.g., for children's items)</li>
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
                    <h4 className="font-medium mb-2">Fair Trade Certification</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      Guidance through the fair trade certification process for artisan groups.
                    </p>
                    <Button variant="outline" size="sm" className="w-full">
                      Request Assistance
                    </Button>
                  </div>

                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Product Testing</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      Testing services for safety, quality, and compliance with international standards.
                    </p>
                    <Button variant="outline" size="sm" className="w-full">
                      Schedule Testing
                    </Button>
                  </div>

                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Export Documentation</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      Assistance with certificates of origin, product labeling, and export permits.
                    </p>
                    <Button variant="outline" size="sm" className="w-full">
                      Documentation Guide
                    </Button>
                  </div>

                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Artisan Training</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      Training programs on quality standards and export market requirements.
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
                The handcrafted products sector in Cox's Bazar offers numerous investment opportunities across the value
                chain, from production to marketing and export.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Artisan Cooperatives</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Investment in artisan cooperatives that bring together skilled craftspeople with modern design and
                      business expertise.
                    </p>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Investment Range</span>
                        <span className="text-sm font-medium">$50K-500K</span>
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
                    <CardTitle>Design & Innovation Centers</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Establishment of design centers that blend traditional craftsmanship with contemporary design for
                      global markets.
                    </p>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Investment Range</span>
                        <span className="text-sm font-medium">$100K-1M</span>
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
                    <CardTitle>Export Facilitation Centers</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Development of facilities that handle quality control, packaging, and export logistics for artisan
                      products.
                    </p>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Investment Range</span>
                        <span className="text-sm font-medium">$200K-800K</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Estimated ROI</span>
                        <span className="text-sm font-medium">14-18% annually</span>
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
                    <CardTitle>E-commerce & Digital Marketing</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Investment in digital platforms that connect artisans directly with global consumers and
                      retailers.
                    </p>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Investment Range</span>
                        <span className="text-sm font-medium">$50K-300K</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Estimated ROI</span>
                        <span className="text-sm font-medium">20-25% annually</span>
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
                <h4 className="text-xl font-medium mb-4">Success Story: Cox's Craft Collective</h4>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <div className="relative h-48 rounded-lg overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=400&width=600"
                        alt="Cox's Craft Collective Workshop"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-muted-foreground mb-4">
                      Cox's Craft Collective started in 2019 with an investment of $180,000 to organize 120 artisans
                      into a cooperative with centralized quality control, design input, and export capabilities. Within
                      3 years, the collective achieved:
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Export growth from $120,000 to $1.2 million annually</li>
                      <li>• Expansion to 8 international markets with premium positioning</li>
                      <li>• Employment for 350+ artisans, 75% of whom are women</li>
                      <li>• Return on investment of 24% by year 3</li>
                      <li>• Fair Trade and GOTS certifications for all products</li>
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
                      5-7 year tax exemptions for investments in handicraft production and export.
                    </p>
                  </div>

                  <div className="pb-3 border-b">
                    <h4 className="font-medium mb-1">Export Incentives</h4>
                    <p className="text-sm text-muted-foreground">
                      15% cash incentive on FOB value for handicraft exports.
                    </p>
                  </div>

                  <div className="pb-3 border-b">
                    <h4 className="font-medium mb-1">Artisan Training Subsidies</h4>
                    <p className="text-sm text-muted-foreground">
                      Government subsidies for training and skill development programs.
                    </p>
                  </div>

                  <div className="pb-3 border-b">
                    <h4 className="font-medium mb-1">Low-Interest Financing</h4>
                    <p className="text-sm text-muted-foreground">
                      Special credit schemes with 5-7% interest rates for handicraft businesses.
                    </p>
                  </div>

                  <div className="pb-3 border-b">
                    <h4 className="font-medium mb-1">Market Access Support</h4>
                    <p className="text-sm text-muted-foreground">
                      Subsidized participation in international trade fairs and exhibitions.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-medium mb-1">Infrastructure Access</h4>
                    <p className="text-sm text-muted-foreground">
                      Preferential access to craft villages and production zones.
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
                      Initial consultation with Handicraft Development Board
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 text-blue-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      2
                    </div>
                    <p className="text-sm text-muted-foreground">Business plan development and feasibility study</p>
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
                    <p className="text-sm text-muted-foreground">Artisan engagement and training program setup</p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 text-blue-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      5
                    </div>
                    <p className="text-sm text-muted-foreground">Production facility establishment</p>
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
            <h2 className="text-3xl font-bold mb-4">Ready to Export Handcrafted Products?</h2>
            <p className="mb-6">
              Connect with our artisan export facilitation team to explore opportunities, certifications, and support
              for your handcrafted products business.
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
                <p>Artisan skill development and quality training</p>
              </li>
              <li className="flex items-start">
                <div className="bg-white text-blue-600 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                  ✓
                </div>
                <p>Product design and market adaptation assistance</p>
              </li>
              <li className="flex items-start">
                <div className="bg-white text-blue-600 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                  ✓
                </div>
                <p>Fair trade certification and compliance support</p>
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

