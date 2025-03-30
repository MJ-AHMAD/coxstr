import { Button } from "@/components/ui/button"
import { Section } from "@/components/ui/section"
import { Separator } from "@/components/ui/separator"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

const HomeSections = () => {
  return (
    <>
      <Section className="bg-secondary">
        <div className="container">
          <h2 className="text-3xl font-semibold tracking-tight">Explore Bangladesh</h2>
          <p className="mt-4 text-muted-foreground">
            Discover the beauty and diversity of Bangladesh through its landscapes, culture, and history.
          </p>
          <Separator className="my-6" />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Sundarbans Mangrove Forest</CardTitle>
                <CardDescription>The world's largest mangrove forest, a UNESCO World Heritage site.</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Home to the Royal Bengal Tiger and a rich ecosystem of flora and fauna.</p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Badge>Nature</Badge>
                <Button>
                  <Link href="/destinations/sundarbans">Discover More</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Cox's Bazar Sea Beach</CardTitle>
                <CardDescription>The World's Longest Natural Sea Beach.</CardDescription>
              </CardHeader>
              <CardContent>
                <p>A popular tourist destination known for its unbroken 120 km sandy sea beach.</p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Badge>Beach</Badge>
                <Button asChild>
                  <Link href="/destinations/sea-beach">Discover More</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Lalbagh Fort</CardTitle>
                <CardDescription>An incomplete 17th-century Mughal fort complex.</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Represents the Mughal architecture and history of Bangladesh.</p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Badge>History</Badge>
                <Button>
                  <Link href="/destinations/lalbagh-fort">Discover More</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </Section>
    </>
  )
}

export default HomeSections

