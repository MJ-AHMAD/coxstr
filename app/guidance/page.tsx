import { Suspense } from "react"
import GuidanceClientPage from "./GuidanceClientPage"
import { Skeleton } from "@/components/ui/skeleton"

export const metadata = {
  title: "Project Guidance | Cox's Bazar Tourism",
  description: "Step-by-step instructions for setting up and running the Cox's Bazar Tourism project.",
}

export default function GuidancePage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Suspense
        fallback={
          <div className="container mx-auto py-10 space-y-8">
            <Skeleton className="h-12 w-3/4 mx-auto" />
            <Skeleton className="h-64 w-full" />
            <Skeleton className="h-64 w-full" />
            <Skeleton className="h-64 w-full" />
          </div>
        }
      >
        <GuidanceClientPage />
      </Suspense>
    </main>
  )
}

