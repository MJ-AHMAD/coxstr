import { Skeleton } from "@/components/ui/skeleton"

export default function LocalMarketsLoading() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section Skeleton */}
      <div className="relative w-full h-[50vh] md:h-[60vh]">
        <Skeleton className="h-full w-full" />
      </div>

      {/* Breadcrumb Skeleton */}
      <div className="bg-muted">
        <div className="container py-4">
          <div className="flex items-center gap-2">
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-4 w-4 rounded-full" />
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-4 w-4 rounded-full" />
            <Skeleton className="h-4 w-32" />
          </div>
        </div>
      </div>

      {/* Main Content Skeleton */}
      <div className="container py-12">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Left Content Skeleton */}
          <div className="md:col-span-2 space-y-8">
            <div className="space-y-4">
              <Skeleton className="h-10 w-3/4" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-4/5" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-2/3" />
            </div>

            {/* Key Features Skeleton */}
            <div className="space-y-4">
              <Skeleton className="h-8 w-1/2" />
              <div className="grid sm:grid-cols-2 gap-4">
                {[...Array(4)].map((_, i) => (
                  <Skeleton key={i} className="h-32 w-full" />
                ))}
              </div>
            </div>

            {/* Gallery Skeleton */}
            <div className="space-y-4">
              <Skeleton className="h-8 w-1/3" />
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[...Array(6)].map((_, i) => (
                  <Skeleton key={i} className="h-48 w-full" />
                ))}
              </div>
            </div>
          </div>

          {/* Right Sidebar Skeleton */}
          <div className="space-y-6">
            <Skeleton className="h-64 w-full" />
            <Skeleton className="h-48 w-full" />
            <Skeleton className="h-52 w-full" />
          </div>
        </div>
      </div>
    </div>
  )
}

