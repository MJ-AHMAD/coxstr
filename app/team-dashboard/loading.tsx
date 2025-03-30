import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Dashboard Header Skeleton */}
      <header className="sticky top-0 z-30 bg-white border-b border-gray-200">
        <div className="px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Skeleton className="h-10 w-10 rounded-md" />
            <Skeleton className="h-6 w-24 ml-2" />
            <div className="hidden md:flex ml-10 space-x-4">
              <Skeleton className="h-8 w-24 rounded-md" />
              <Skeleton className="h-8 w-24 rounded-md" />
              <Skeleton className="h-8 w-24 rounded-md" />
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Skeleton className="h-8 w-8 rounded-full" />
            <Skeleton className="h-8 w-8 rounded-full" />
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar Skeleton */}
        <aside className="hidden md:flex flex-col w-64 h-[calc(100vh-4rem)] bg-white border-r border-gray-200 p-4">
          <div className="space-y-2">
            {[...Array(7)].map((_, i) => (
              <Skeleton key={i} className="h-10 w-full rounded-md" />
            ))}
          </div>
          <Skeleton className="h-px w-full my-4" />
          <div className="space-y-2">
            {[...Array(2)].map((_, i) => (
              <Skeleton key={i} className="h-10 w-full rounded-md" />
            ))}
          </div>
          <div className="mt-auto pt-4">
            <Skeleton className="h-20 w-full rounded-md" />
          </div>
        </aside>

        {/* Main Content Skeleton */}
        <main className="flex-1 overflow-auto p-4 sm:p-6 lg:p-8">
          {/* Dashboard Title Skeleton */}
          <div className="flex items-center justify-between mb-6">
            <Skeleton className="h-8 w-48" />
            <div className="flex items-center space-x-2">
              <Skeleton className="h-9 w-24 rounded-md" />
              <Skeleton className="h-9 w-32 rounded-md" />
            </div>
          </div>

          {/* Quick Stats Skeleton */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {[...Array(4)].map((_, i) => (
              <Skeleton key={i} className="h-32 w-full rounded-lg" />
            ))}
          </div>

          {/* Project Progress Skeleton */}
          <Skeleton className="h-80 w-full rounded-lg mb-6" />

          {/* Charts Skeleton */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <Skeleton className="h-96 w-full rounded-lg" />
            <Skeleton className="h-96 w-full rounded-lg" />
          </div>

          {/* Recent Activity Skeleton */}
          <Skeleton className="h-80 w-full rounded-lg" />
        </main>
      </div>
    </div>
  )
}

