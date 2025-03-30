import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="container mx-auto py-10 space-y-8">
      <Skeleton className="h-12 w-3/4 mx-auto" />
      <Skeleton className="h-6 w-1/2 mx-auto" />

      <div className="grid gap-8 mt-8">
        {Array(6)
          .fill(0)
          .map((_, i) => (
            <div key={i} className="space-y-4">
              <Skeleton className="h-8 w-64" />
              <Skeleton className="h-32 w-full" />
            </div>
          ))}
      </div>

      <div className="mt-8">
        <Skeleton className="h-8 w-64" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
          {Array(6)
            .fill(0)
            .map((_, i) => (
              <Skeleton key={i} className="h-64 w-full rounded-lg" />
            ))}
        </div>
      </div>
    </div>
  )
}

