import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-12">
      <Skeleton className="h-6 w-40 mb-8" />

      <div className="mb-12">
        <Skeleton className="h-10 w-3/4 mb-6" />
        <Skeleton className="h-6 w-full mb-8" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[...Array(3)].map((_, i) => (
            <Skeleton key={i} className="h-24 w-full" />
          ))}
        </div>
      </div>

      <Skeleton className="h-10 w-full mb-6" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {[...Array(4)].map((_, i) => (
          <Skeleton key={i} className="h-64 w-full" />
        ))}
      </div>

      <Skeleton className="h-40 w-full rounded-xl" />
    </div>
  )
}

