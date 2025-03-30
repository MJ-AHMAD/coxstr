import { Skeleton } from "@/components/ui/skeleton"

export default function EmployeeDashboardLoading() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="sticky top-0 z-30 bg-white border-b border-gray-200">
        <div className="px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Skeleton className="h-10 w-10 rounded-md" />
            <div className="hidden md:flex ml-10 space-x-4">
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
        <aside className="hidden md:flex flex-col w-64 h-[calc(100vh-4rem)] bg-white border-r border-gray-200 p-4">
          <div className="space-y-2">
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <Skeleton key={i} className="h-10 w-full rounded-md" />
              ))}
          </div>
          <div className="mt-auto pt-4">
            <Skeleton className="h-24 w-full rounded-md" />
          </div>
        </aside>

        <main className="flex-1 overflow-auto p-4 sm:p-6 lg:p-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <Skeleton className="h-8 w-64 mb-2" />
              <Skeleton className="h-4 w-48" />
            </div>
            <Skeleton className="h-6 w-32 rounded-full" />
          </div>

          <div className="space-y-6">
            <Skeleton className="h-24 w-full rounded-md" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {Array(3)
                .fill(0)
                .map((_, i) => (
                  <Skeleton key={i} className="h-32 w-full rounded-md" />
                ))}
            </div>
            <Skeleton className="h-64 w-full rounded-md" />
          </div>
        </main>
      </div>
    </div>
  )
}

