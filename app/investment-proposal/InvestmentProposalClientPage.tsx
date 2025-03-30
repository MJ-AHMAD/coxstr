"use client"

import { useState } from "react"
import Image from "next/image"
import { TrendingUp, Users, DollarSign, Calendar, BarChart3, Award, CheckCircle, ArrowRight, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function InvestmentProposalClientPage() {
  const [investmentAmount, setInvestmentAmount] = useState(100000)
  const [investmentYears, setInvestmentYears] = useState(5)

  // Calculate projected returns based on investment amount and years
  const calculateReturns = () => {
    const yearlyReturn = 0.18 // 18% annual return
    const returns = []
    let currentValue = investmentAmount

    for (let i = 1; i <= investmentYears; i++) {
      currentValue = currentValue * (1 + yearlyReturn)
      returns.push({
        year: i,
        value: Math.round(currentValue),
      })
    }

    return returns
  }

  const projectedReturns = calculateReturns()
  const totalReturn = projectedReturns[projectedReturns.length - 1].value
  const roi = ((totalReturn - investmentAmount) / investmentAmount) * 100

  return (
    <div className="container mx-auto py-10 px-4 md:px-6">
      {/* Hero Section */}
      <div className="relative rounded-2xl overflow-hidden mb-16">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=600&width=1200"
            alt="Cox's Bazar Beach Aerial View"
            width={1200}
            height={600}
            className="object-cover w-full h-full brightness-[0.7]"
          />
        </div>
        <div className="relative z-10 py-20 px-6 md:px-12 text-white">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Invest in Bangladesh's Premier Tourism Destination
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100">
              Exclusive opportunity to be part of Cox's Bazar's booming tourism ecosystem with projected 18% annual
              returns
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                Download Full Prospectus
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-white"
              >
                Schedule Investor Meeting
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Key Investment Highlights */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Investment Highlights</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Cox's Bazar offers unparalleled investment potential in one of South Asia's fastest-growing tourism markets
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="border-l-4 border-l-blue-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-blue-500" />
                Rapid Market Growth
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Tourism in Cox's Bazar has grown by 27% annually over the past 5 years, outpacing the national average
                by 3x
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-green-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-green-500" />
                Massive Visitor Potential
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Over 2.5 million annual visitors with projections to reach 5 million by 2028 as international tourism
                expands
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-amber-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <DollarSign className="h-5 w-5 text-amber-500" />
                Strong ROI Potential
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Average ROI of 18% annually for tourism investments, with premium properties yielding up to 22% returns
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Investment Opportunity */}
      <section className="mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">The Investment Opportunity</h2>
            <p className="text-gray-600 mb-6">
              Cox's Bazar Tourism Project represents a unique opportunity to invest in Bangladesh's premier beach
              destination at a pivotal moment in its development. With government backing, infrastructure improvements,
              and growing international recognition, the timing for investment is optimal.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-lg">Government-Backed Initiative</h3>
                  <p className="text-gray-600">Strategic national priority with regulatory support and incentives</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-lg">Infrastructure Development</h3>
                  <p className="text-gray-600">
                    $1.2B in infrastructure improvements including airport expansion and highway development
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-lg">Diversified Revenue Streams</h3>
                  <p className="text-gray-600">
                    Multiple income sources from accommodations, tours, transportation, and digital platforms
                  </p>
                </div>
              </div>
            </div>

            <Button className="gap-2">
              View Market Analysis Report
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-2xl font-bold mb-6 text-center">Investment ROI Calculator</h3>

            <div className="space-y-6 mb-8">
              <div>
                <Label htmlFor="investment-amount">Investment Amount (USD)</Label>
                <div className="relative mt-1">
                  <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 h-4 w-4" />
                  <Input
                    id="investment-amount"
                    type="number"
                    value={investmentAmount}
                    onChange={(e) => setInvestmentAmount(Number(e.target.value))}
                    className="pl-10"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="investment-years">Investment Period (Years)</Label>
                <div className="relative mt-1">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 h-4 w-4" />
                  <Select
                    value={investmentYears.toString()}
                    onValueChange={(value) => setInvestmentYears(Number(value))}
                  >
                    <SelectTrigger id="investment-years" className="pl-10">
                      <SelectValue placeholder="Select years" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="3">3 Years</SelectItem>
                      <SelectItem value="5">5 Years</SelectItem>
                      <SelectItem value="7">7 Years</SelectItem>
                      <SelectItem value="10">10 Years</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-4 mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium">Initial Investment</span>
                <span className="font-bold">${investmentAmount.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium">Projected Value (Year {investmentYears})</span>
                <span className="font-bold text-green-600">${totalReturn.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium">Total Return</span>
                <span className="font-bold text-green-600">${(totalReturn - investmentAmount).toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-medium">ROI</span>
                <span className="font-bold text-green-600">{roi.toFixed(2)}%</span>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Year 1</span>
                <span>Year {investmentYears}</span>
              </div>
              <Progress value={100} className="h-2" />
              <div className="flex justify-between items-center">
                {projectedReturns.map((year, index) => (
                  <div key={index} className="text-center">
                    <div className="text-xs text-gray-500">Year {year.year}</div>
                    <div className="font-medium">${(year.value / 1000).toFixed(0)}K</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Packages */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Investment Packages</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Choose the investment tier that aligns with your financial goals and desired level of involvement
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="relative overflow-hidden border-2 border-gray-200">
            <div className="absolute top-0 right-0 bg-blue-100 text-blue-800 px-3 py-1 text-sm font-medium rounded-bl-lg">
              Standard
            </div>
            <CardHeader>
              <CardTitle className="text-2xl">Seed Investor</CardTitle>
              <CardDescription>For early-stage investors</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <span className="text-3xl font-bold">$50,000</span>
                <span className="text-gray-500"> minimum</span>
              </div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>5% equity stake in selected property</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Quarterly dividend payments</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Annual investor retreat</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>VIP booking privileges</span>
                </li>
              </ul>
              <div className="text-sm text-gray-500 mb-4">Projected annual return: 15-17%</div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Request Information</Button>
            </CardFooter>
          </Card>

          <Card className="relative overflow-hidden border-2 border-blue-500 shadow-lg shadow-blue-100">
            <div className="absolute top-0 right-0 bg-blue-600 text-white px-3 py-1 text-sm font-medium rounded-bl-lg">
              Popular
            </div>
            <CardHeader>
              <CardTitle className="text-2xl">Growth Partner</CardTitle>
              <CardDescription>For committed investors</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <span className="text-3xl font-bold">$250,000</span>
                <span className="text-gray-500"> minimum</span>
              </div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>12% equity stake in property portfolio</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Monthly dividend payments</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Quarterly strategy meetings</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Complimentary stays (14 days/year)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Advisory board consideration</span>
                </li>
              </ul>
              <div className="text-sm text-gray-500 mb-4">Projected annual return: 18-20%</div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-blue-600 hover:bg-blue-700">Request Information</Button>
            </CardFooter>
          </Card>

          <Card className="relative overflow-hidden border-2 border-gray-200">
            <div className="absolute top-0 right-0 bg-purple-100 text-purple-800 px-3 py-1 text-sm font-medium rounded-bl-lg">
              Premium
            </div>
            <CardHeader>
              <CardTitle className="text-2xl">Strategic Partner</CardTitle>
              <CardDescription>For institutional investors</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <span className="text-3xl font-bold">$1,000,000+</span>
              </div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>25%+ equity stake with board seat</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Custom dividend structure</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Co-branding opportunities</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Executive retreat access</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Dedicated investment manager</span>
                </li>
              </ul>
              <div className="text-sm text-gray-500 mb-4">Projected annual return: 20-25%</div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Request Information</Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* Business Plan & Financials */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Business Plan & Financial Projections</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Transparent financial data and growth projections for informed investment decisions
          </p>
        </div>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="revenue">Revenue Model</TabsTrigger>
            <TabsTrigger value="projections">Projections</TabsTrigger>
            <TabsTrigger value="milestones">Milestones</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="p-6 border rounded-lg mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Business Model</h3>
                <p className="text-gray-600 mb-4">
                  The Cox's Bazar Tourism Project operates on a multi-revenue stream model that combines traditional
                  tourism services with digital platforms and premium experiences.
                </p>
                <p className="text-gray-600 mb-4">
                  Our integrated approach ensures stable income from accommodation and transportation while capturing
                  high-margin revenue from premium experiences and digital bookings.
                </p>
                <div className="flex items-center gap-4 mt-6">
                  <Button variant="outline" className="gap-2">
                    <BarChart3 className="h-4 w-4" />
                    View Full Business Plan
                  </Button>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">Key Financial Metrics</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Gross Margin</span>
                      <span className="text-sm font-medium">68%</span>
                    </div>
                    <Progress value={68} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Operating Margin</span>
                      <span className="text-sm font-medium">42%</span>
                    </div>
                    <Progress value={42} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Net Profit Margin</span>
                      <span className="text-sm font-medium">35%</span>
                    </div>
                    <Progress value={35} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Customer Acquisition Cost</span>
                      <span className="text-sm font-medium">$42</span>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Customer Lifetime Value</span>
                      <span className="text-sm font-medium">$1,250</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="revenue" className="p-6 border rounded-lg mt-6">
            <h3 className="text-xl font-bold mb-6">Diversified Revenue Streams</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2">Accommodation Services (42%)</h4>
                  <p className="text-gray-600 text-sm">
                    Premium hotels, eco-resorts, and boutique properties with average occupancy rates of 78% and ADR of
                    $120.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Transportation & Tours (28%)</h4>
                  <p className="text-gray-600 text-sm">
                    Guided experiences, private transportation, and exclusive access to attractions with 65% gross
                    margins.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Digital Platform (15%)</h4>
                  <p className="text-gray-600 text-sm">
                    Commission-based booking platform with 12-18% take rate and growing user base of 50,000+ monthly
                    active users.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Premium Experiences (10%)</h4>
                  <p className="text-gray-600 text-sm">
                    High-margin luxury experiences including private island tours, helicopter rides, and exclusive
                    dining with 75%+ margins.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Retail & Merchandise (5%)</h4>
                  <p className="text-gray-600 text-sm">
                    Branded merchandise, local artisan products, and travel essentials with 45% margins.
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-semibold mb-4">Revenue Distribution</h4>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Accommodation Services</span>
                      <span className="text-sm font-medium">42%</span>
                    </div>
                    <Progress value={42} className="h-2 bg-gray-200" indicatorClassName="bg-blue-500" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Transportation & Tours</span>
                      <span className="text-sm font-medium">28%</span>
                    </div>
                    <Progress value={28} className="h-2 bg-gray-200" indicatorClassName="bg-green-500" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Digital Platform</span>
                      <span className="text-sm font-medium">15%</span>
                    </div>
                    <Progress value={15} className="h-2 bg-gray-200" indicatorClassName="bg-purple-500" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Premium Experiences</span>
                      <span className="text-sm font-medium">10%</span>
                    </div>
                    <Progress value={10} className="h-2 bg-gray-200" indicatorClassName="bg-amber-500" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Retail & Merchandise</span>
                      <span className="text-sm font-medium">5%</span>
                    </div>
                    <Progress value={5} className="h-2 bg-gray-200" indicatorClassName="bg-red-500" />
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="font-semibold mb-4">Key Revenue Metrics</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg">
                      <div className="text-sm text-gray-500">Average Transaction Value</div>
                      <div className="text-xl font-bold">$420</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <div className="text-sm text-gray-500">Repeat Booking Rate</div>
                      <div className="text-xl font-bold">38%</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <div className="text-sm text-gray-500">Booking Conversion</div>
                      <div className="text-xl font-bold">12.5%</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <div className="text-sm text-gray-500">Revenue Growth</div>
                      <div className="text-xl font-bold">27% YoY</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="projections" className="p-6 border rounded-lg mt-6">
            <h3 className="text-xl font-bold mb-6">5-Year Financial Projections</h3>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[600px]">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4">Metric</th>
                    <th className="text-right py-3 px-4">Year 1</th>
                    <th className="text-right py-3 px-4">Year 2</th>
                    <th className="text-right py-3 px-4">Year 3</th>
                    <th className="text-right py-3 px-4">Year 4</th>
                    <th className="text-right py-3 px-4">Year 5</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-3 px-4 font-medium">Revenue (USD)</td>
                    <td className="text-right py-3 px-4">$2.8M</td>
                    <td className="text-right py-3 px-4">$4.2M</td>
                    <td className="text-right py-3 px-4">$6.5M</td>
                    <td className="text-right py-3 px-4">$9.8M</td>
                    <td className="text-right py-3 px-4">$14.2M</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4 font-medium">EBITDA</td>
                    <td className="text-right py-3 px-4">$0.9M</td>
                    <td className="text-right py-3 px-4">$1.6M</td>
                    <td className="text-right py-3 px-4">$2.8M</td>
                    <td className="text-right py-3 px-4">$4.4M</td>
                    <td className="text-right py-3 px-4">$6.7M</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4 font-medium">Net Profit</td>
                    <td className="text-right py-3 px-4">$0.7M</td>
                    <td className="text-right py-3 px-4">$1.3M</td>
                    <td className="text-right py-3 px-4">$2.3M</td>
                    <td className="text-right py-3 px-4">$3.7M</td>
                    <td className="text-right py-3 px-4">$5.8M</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4 font-medium">Cash Flow</td>
                    <td className="text-right py-3 px-4">$0.5M</td>
                    <td className="text-right py-3 px-4">$1.1M</td>
                    <td className="text-right py-3 px-4">$2.0M</td>
                    <td className="text-right py-3 px-4">$3.4M</td>
                    <td className="text-right py-3 px-4">$5.2M</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4 font-medium">ROI</td>
                    <td className="text-right py-3 px-4">12%</td>
                    <td className="text-right py-3 px-4">16%</td>
                    <td className="text-right py-3 px-4">19%</td>
                    <td className="text-right py-3 px-4">22%</td>
                    <td className="text-right py-3 px-4">25%</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">Visitors Served</td>
                    <td className="text-right py-3 px-4">85K</td>
                    <td className="text-right py-3 px-4">140K</td>
                    <td className="text-right py-3 px-4">220K</td>
                    <td className="text-right py-3 px-4">320K</td>
                    <td className="text-right py-3 px-4">450K</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-8 bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Projection Notes</h4>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Projections based on conservative growth estimates and historical tourism data</li>
                <li>• Capital expenditure front-loaded in years 1-2 for infrastructure development</li>
                <li>• Break-even point expected in month 14 of operations</li>
                <li>• Projections account for seasonal fluctuations in tourism demand</li>
                <li>• Full financial model available upon signing of NDA</li>
              </ul>
            </div>
          </TabsContent>

          <TabsContent value="milestones" className="p-6 border rounded-lg mt-6">
            <h3 className="text-xl font-bold mb-6">Development Roadmap & Milestones</h3>

            <div className="relative border-l-2 border-blue-200 pl-6 ml-4 space-y-10">
              <div className="relative">
                <div className="absolute -left-[33px] top-0 h-6 w-6 rounded-full bg-blue-500 border-4 border-white"></div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-semibold">Phase 1: Foundation</h4>
                    <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded">Completed</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">Q1-Q2 2023</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Land acquisition and permits secured</li>
                    <li>• Core team assembled</li>
                    <li>• Initial seed funding of $1.2M raised</li>
                    <li>• Market research and business plan finalized</li>
                  </ul>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -left-[33px] top-0 h-6 w-6 rounded-full bg-blue-500 border-4 border-white"></div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-semibold">Phase 2: Development</h4>
                    <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">In Progress</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">Q3 2023 - Q2 2024</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Infrastructure development (60% complete)</li>
                    <li>• Digital platform beta launch</li>
                    <li>• Strategic partnerships with 15+ local businesses</li>
                    <li>• First accommodation properties under construction</li>
                  </ul>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -left-[33px] top-0 h-6 w-6 rounded-full bg-gray-300 border-4 border-white"></div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-semibold">Phase 3: Expansion</h4>
                    <span className="text-sm bg-gray-200 text-gray-800 px-2 py-1 rounded">Upcoming</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">Q3 2024 - Q2 2025</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Full operations launch</li>
                    <li>• Marketing campaign rollout</li>
                    <li>• International partnerships</li>
                    <li>• Secondary property development</li>
                  </ul>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -left-[33px] top-0 h-6 w-6 rounded-full bg-gray-300 border-4 border-white"></div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-semibold">Phase 4: Scaling</h4>
                    <span className="text-sm bg-gray-200 text-gray-800 px-2 py-1 rounded">Upcoming</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">Q3 2025 - Q4 2026</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Regional expansion</li>
                    <li>• Premium experience portfolio expansion</li>
                    <li>• Technology infrastructure enhancement</li>
                    <li>• Potential IPO preparation</li>
                  </ul>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* Team & Leadership */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Leadership Team</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Meet the experienced team driving the success of Cox's Bazar Tourism Project
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="w-24 h-24 rounded-full bg-gray-200 mx-auto mb-4 overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=96&width=96"
                    alt="MJ Ahmad"
                    width={96}
                    height={96}
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold">MJ Ahmad</h3>
                <p className="text-gray-500 mb-2">Director General</p>
                <p className="text-sm text-gray-600 mb-4">
                  20+ years in tourism development and infrastructure projects across South Asia
                </p>
                <div className="flex justify-center gap-2">
                  <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect width="4" height="12" x="2" y="9"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="w-24 h-24 rounded-full bg-gray-200 mx-auto mb-4 overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=96&width=96"
                    alt="Sarah Rahman"
                    width={96}
                    height={96}
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold">Sarah Rahman</h3>
                <p className="text-gray-500 mb-2">Chief Financial Officer</p>
                <p className="text-sm text-gray-600 mb-4">
                  Former investment banker with expertise in tourism financing and asset management
                </p>
                <div className="flex justify-center gap-2">
                  <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect width="4" height="12" x="2" y="9"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="w-24 h-24 rounded-full bg-gray-200 mx-auto mb-4 overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=96&width=96"
                    alt="Kamal Hossain"
                    width={96}
                    height={96}
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold">Kamal Hossain</h3>
                <p className="text-gray-500 mb-2">Chief Operations Officer</p>
                <p className="text-sm text-gray-600 mb-4">
                  15+ years managing luxury resorts and tourism operations across Southeast Asia
                </p>
                <div className="flex justify-center gap-2">
                  <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect width="4" height="12" x="2" y="9"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 bg-blue-50 rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4">Advisory Board</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex gap-4 items-center">
              <div className="w-16 h-16 rounded-full bg-gray-200 overflow-hidden flex-shrink-0">
                <Image
                  src="/placeholder.svg?height=64&width=64"
                  alt="Dr. Anisul Islam"
                  width={64}
                  height={64}
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="font-semibold">Dr. Anisul Islam</h4>
                <p className="text-gray-500 text-sm">Former Tourism Minister</p>
                <p className="text-sm text-gray-600 mt-1">Government relations and policy advisor</p>
              </div>
            </div>

            <div className="flex gap-4 items-center">
              <div className="w-16 h-16 rounded-full bg-gray-200 overflow-hidden flex-shrink-0">
                <Image
                  src="/placeholder.svg?height=64&width=64"
                  alt="Maya Chen"
                  width={64}
                  height={64}
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="font-semibold">Maya Chen</h4>
                <p className="text-gray-500 text-sm">Global Hospitality Consultant</p>
                <p className="text-sm text-gray-600 mt-1">Former VP of International Operations at Marriott</p>
              </div>
            </div>

            <div className="flex gap-4 items-center">
              <div className="w-16 h-16 rounded-full bg-gray-200 overflow-hidden flex-shrink-0">
                <Image
                  src="/placeholder.svg?height=64&width=64"
                  alt="Robert Kiyosaki"
                  width={64}
                  height={64}
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="font-semibold">James Wilson</h4>
                <p className="text-gray-500 text-sm">Tech Entrepreneur</p>
                <p className="text-sm text-gray-600 mt-1">Founder of TravelTech Ventures, digital strategy advisor</p>
              </div>
            </div>

            <div className="flex gap-4 items-center">
              <div className="w-16 h-16 rounded-full bg-gray-200 overflow-hidden flex-shrink-0">
                <Image
                  src="/placeholder.svg?height=64&width=64"
                  alt="Fatima Begum"
                  width={64}
                  height={64}
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="font-semibold">Fatima Begum</h4>
                <p className="text-gray-500 text-sm">Sustainable Tourism Expert</p>
                <p className="text-sm text-gray-600 mt-1">
                  UN Sustainable Tourism Advisor, environmental impact specialist
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Common questions about investing in the Cox's Bazar Tourism Project
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>What is the minimum investment amount?</AccordionTrigger>
            <AccordionContent>
              The minimum investment starts at $50,000 for our Seed Investor package. However, we offer flexible
              investment structures for strategic partners and can discuss custom arrangements for qualified investors.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>What are the expected returns on investment?</AccordionTrigger>
            <AccordionContent>
              Based on our financial projections and market analysis, investors can expect annual returns ranging from
              15-25% depending on the investment package and timeline. Our Growth Partner tier targets 18-20% annual
              returns, while Strategic Partners may see returns of 20-25%.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>How is the investment structured legally?</AccordionTrigger>
            <AccordionContent>
              Investments are structured as equity stakes in our parent company or specific property holdings, depending
              on the investment tier. All investments are backed by legal documentation including shareholder
              agreements, with clear terms for profit distribution, exit strategies, and governance rights.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger>What are the risks associated with this investment?</AccordionTrigger>
            <AccordionContent>
              As with any investment, there are risks including market fluctuations, regulatory changes, and operational
              challenges. Specific risks include seasonal tourism patterns, potential natural events, and competition.
              We mitigate these through diversified revenue streams, comprehensive insurance, and strategic
              partnerships. A detailed risk assessment is available in our full investment prospectus.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger>What is the exit strategy for investors?</AccordionTrigger>
            <AccordionContent>
              We offer multiple exit pathways including: 1) Company buyback after year 3, 2) Sale to other investors, 3)
              Potential IPO in year 5-7, and 4) Continued equity holding with dividend payments. Each investment
              agreement includes clear terms for exit valuation and timing.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6">
            <AccordionTrigger>How is the project addressing environmental sustainability?</AccordionTrigger>
            <AccordionContent>
              Sustainability is core to our business model. We've implemented eco-friendly building practices, waste
              management systems, and renewable energy solutions. Our operations follow international sustainable
              tourism guidelines, and we allocate 3% of profits to local environmental conservation efforts. This
              approach not only protects the natural beauty of Cox's Bazar but also creates long-term value for
              investors.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* Contact Form */}
      <section className="mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-bold mb-6">Ready to Invest in the Future of Tourism?</h2>
            <p className="text-gray-600 mb-8">
              Complete the form to receive our comprehensive investment prospectus and schedule a personal consultation
              with our investment team.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <Award className="h-6 w-6 text-blue-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-lg">Exclusive Investment Opportunity</h3>
                  <p className="text-gray-600">Limited availability for premium investment tiers</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Users className="h-6 w-6 text-blue-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-lg">Dedicated Investment Manager</h3>
                  <p className="text-gray-600">Personalized support throughout your investment journey</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <BarChart3 className="h-6 w-6 text-blue-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-lg">Transparent Reporting</h3>
                  <p className="text-gray-600">Regular updates and comprehensive financial reporting</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold mb-6">Request Investment Information</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="first-name">First Name</Label>
                  <Input id="first-name" placeholder="John" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">Last Name</Label>
                  <Input id="last-name" placeholder="Doe" required />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="john.doe@example.com" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" placeholder="+1 (555) 000-0000" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="company">Company (Optional)</Label>
                <Input id="company" placeholder="Your Company" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="investment-level">Investment Level Interest</Label>
                <Select defaultValue="growth">
                  <SelectTrigger id="investment-level">
                    <SelectValue placeholder="Select investment level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="seed">Seed Investor ($50K-$200K)</SelectItem>
                    <SelectItem value="growth">Growth Partner ($250K-$750K)</SelectItem>
                    <SelectItem value="strategic">Strategic Partner ($1M+)</SelectItem>
                    <SelectItem value="custom">Custom Arrangement</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Additional Information</Label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your investment goals and any specific questions you have."
                  rows={4}
                />
              </div>

              <Button type="submit" className="w-full gap-2">
                <Send className="h-4 w-4" />
                Submit Inquiry
              </Button>

              <p className="text-xs text-gray-500 text-center">
                Your information is confidential and will only be used to provide you with investment details. By
                submitting, you agree to our privacy policy.
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

