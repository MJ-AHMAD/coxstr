"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"

export default function DigitalLiteracyClientPage() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="container mx-auto py-10 px-4 md:px-6">
      <div className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Digital Literacy Programs</h1>
          <p className="text-muted-foreground">
            Bridging the digital divide in Cox&apos;s Bazar to create a technologically empowered community
          </p>
        </div>

        <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="space-y-4">
          <TabsList className="grid grid-cols-1 md:grid-cols-4 gap-2">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="programs">Programs</TabsTrigger>
            <TabsTrigger value="impact">Impact & Metrics</TabsTrigger>
            <TabsTrigger value="partners">Partners</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Digital Transformation Vision</CardTitle>
                <CardDescription>
                  Empowering the guardians of the world&apos;s longest natural sea beach with digital skills
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  As the custodians of one of the world&apos;s most precious natural wonders, the people of Cox&apos;s
                  Bazar deserve access to the digital tools and knowledge that will enable them to both preserve their
                  natural heritage and thrive in the global digital economy.
                </p>

                <p>
                  Our Digital Literacy initiative aims to transform Cox&apos;s Bazar into a digitally empowered
                  community where every resident has the skills to leverage technology for education, economic
                  opportunity, and environmental conservation.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild>
                  <Link href="/educational-hub/digital-literacy/strategic-plan">View Strategic Plan</Link>
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="programs" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Community Technology Centers</CardTitle>
                  <CardDescription>Public access points for digital skills development</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    A network of 50 technology centers across Cox&apos;s Bazar providing free access to computers,
                    internet, and digital skills training for all residents.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" asChild>
                    <Link href="/educational-hub/digital-literacy/community-centers">Learn More</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="impact" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Impact Metrics</CardTitle>
                <CardDescription>Measuring our progress in digital transformation</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Impact metrics content will go here</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="partners" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Partnership Opportunities</CardTitle>
                <CardDescription>Join us in bridging the digital divide in Cox&apos;s Bazar</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Partnership content will go here</p>
              </CardContent>
              <CardFooter>
                <Button asChild>
                  <Link href="/contact">Contact Us for Partnership</Link>
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

