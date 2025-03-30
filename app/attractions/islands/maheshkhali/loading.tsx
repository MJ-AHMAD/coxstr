import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Skeleton */}
      <div className="relative h-[60vh] w-full">
        <Skeleton className="h-full w-full" />
      </div>

      {/* Content Skeleton */}
      <div className="container py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview */}
            <div className="space-y-4">
              <Skeleton className="h-10 w-1/3" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
            </div>

            {/* Gallery */}
            <div className="space-y-4">
              <Skeleton className="h-10 w-1/4" />
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <Skeleton key={item} className="aspect-square rounded-lg" />
                ))}
              </div>
            </div>

            {/* Tabs */}
            <div className="space-y-4">
              <div className="grid grid-cols-3 gap-2">
                {[1, 2, 3].map((item) => (
                  <Skeleton key={item} className="h-10" />
                ))}
              </div>
              <Skeleton className="h-[400px] w-full" />
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {[1, 2, 3, 4].map((item) => (
              <Skeleton key={item} className="h-[200px] w-full rounded-lg" />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

