import { Skeleton } from "@/components/ui/skeleton"

export default function CookiePolicyLoading() {
  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <div className="px-6 py-8 sm:p-10">
          <div className="text-center mb-8">
            <Skeleton className="h-8 w-56 mx-auto mb-2" />
            <Skeleton className="h-4 w-40 mx-auto" />
          </div>

          <div className="space-y-6">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="space-y-3">
                <Skeleton className="h-6 w-48" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
                {i % 2 === 0 && (
                  <div className="pl-6 space-y-2">
                    <Skeleton className="h-3 w-5/6" />
                    <Skeleton className="h-3 w-3/4" />
                    <Skeleton className="h-3 w-4/5" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

