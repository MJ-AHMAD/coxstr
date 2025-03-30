"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { AlertCircle, Eye, EyeOff } from "lucide-react"

// This would typically come from an API, but for demo purposes we'll import it directly
import userData from "../../data/users.json"

type UserType = "coreTeam" | "employees" | "boardOfDirectors" | "investors"

export default function LoginClientPage() {
  const router = useRouter()
  const [userType, setUserType] = useState<UserType>("coreTeam")
  const [selectedId, setSelectedId] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  // Reset selected ID when user type changes
  useEffect(() => {
    setSelectedId("")
    setPassword("")
    setError("")
  }, [userType])

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    // Simulate API call with timeout
    setTimeout(() => {
      const users = userData[userType]
      const user = users.find((u: any) => u.id === selectedId)

      if (!user) {
        setError("User not found")
        setLoading(false)
        return
      }

      if (user.password !== password) {
        setError("Invalid password")
        setLoading(false)
        return
      }

      // Successful login - redirect to appropriate dashboard
      setLoading(false)

      // Redirect based on user type
      if (userType === "coreTeam") {
        router.push(`/core-team-dashboard/${selectedId}`)
      } else if (userType === "employees") {
        router.push(`/employee-dashboard/${selectedId}`)
      } else if (userType === "boardOfDirectors") {
        router.push(`/board-dashboard/${selectedId}`)
      } else if (userType === "investors") {
        router.push(`/investor-dashboard/${selectedId}`)
      }
    }, 1000)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1 flex flex-col items-center">
          <div className="mb-4">
            <Image
              src="/placeholder.svg?height=80&width=80"
              alt="TRUSTED-ALLY Logo"
              width={80}
              height={80}
              className="mx-auto"
            />
          </div>
          <CardTitle className="text-2xl font-bold text-center">Sign in to your account</CardTitle>
          <CardDescription className="text-center">Enter your credentials to access your dashboard</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="userType">User Type</Label>
              <Select value={userType} onValueChange={(value) => setUserType(value as UserType)}>
                <SelectTrigger id="userType">
                  <SelectValue placeholder="Select user type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="coreTeam">Core Team</SelectItem>
                  <SelectItem value="employees">Employee</SelectItem>
                  <SelectItem value="boardOfDirectors">Board of Directors</SelectItem>
                  <SelectItem value="investors">Investor</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="userId">User ID</Label>
              <Select value={selectedId} onValueChange={setSelectedId} disabled={!userType}>
                <SelectTrigger id="userId">
                  <SelectValue placeholder="Select your ID" />
                </SelectTrigger>
                <SelectContent>
                  {userType &&
                    userData[userType].map((user: any) => (
                      <SelectItem key={user.id} value={user.id}>
                        {user.id} - {user.name}
                      </SelectItem>
                    ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
              </div>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pr-10"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {error && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            <Button type="submit" className="w-full" disabled={loading || !selectedId || !password}>
              {loading ? "Signing in..." : "Sign in"}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <div className="text-sm text-center text-gray-500">
            This is a secure login portal for authorized personnel only.
          </div>
          <div className="text-xs text-center text-gray-400">
            © {new Date().getFullYear()} TRUSTED-ALLY Tourism. All rights reserved.
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}

