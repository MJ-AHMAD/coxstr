import { Suspense } from "react"
import InvestmentProposalClientPage from "./InvestmentProposalClientPage"
import { Skeleton } from "@/components/ui/skeleton"

export const metadata = {
  title: "Investment Proposal | Cox's Bazar Tourism",
  description:
    "Exclusive investment opportunities in the thriving tourism sector of Cox's Bazar, Bangladesh's premier beach destination.",
}

export default function InvestmentProposalPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      <Suspense
        fallback={
          <div className="container mx-auto py-10 space-y-8">
            <Skeleton className="h-12 w-3/4 mx-auto" />
            <Skeleton className="h-64 w-full rounded-xl" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Skeleton className="h-40 rounded-lg" />
              <Skeleton className="h-40 rounded-lg" />
              <Skeleton className="h-40 rounded-lg" />
            </div>
            <Skeleton className="h-96 w-full rounded-xl" />
          </div>
        }
      >
        <InvestmentProposalClientPage />
      </Suspense>
    </main>
  )
}

