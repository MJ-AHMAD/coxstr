import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="container mx-auto py-12">
      <div className="text-center mb-16">
        <Skeleton className="h-12 w-3/4 mx-auto mb-4" />
        <Skeleton className="h-6 w-2/4 mx-auto" />
      </div>

      <div className="flex flex-col md:flex-row gap-8 mb-16">
        <div className="md:w-1/2">
          <Skeleton className="h-[400px] w-full rounded-lg mb-6" />
        </div>
        <div className="md:w-1/2 space-y-4">
          <Skeleton className="h-8 w-3/4" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
        </div>
      </div>

      <Skeleton className="h-10 w-full mb-8" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {Array(3)
          .fill(0)
          .map((_, i) => (
            <div key={i} className="space-y-4">
              <Skeleton className="h-48 w-full rounded-lg" />
              <Skeleton className="h-6 w-3/4" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-10 w-full" />
            </div>
          ))}
      </div>

      <div className="space-y-4 mb-16">
        <Skeleton className="h-8 w-1/2 mx-auto" />
        <Skeleton className="h-64 w-full rounded-lg" />
      </div>

      <div className="space-y-4">
        <Skeleton className="h-8 w-1/2 mx-auto" />
        <Skeleton className="h-10 w-1/3 mx-auto" />
      </div>
    </div>
  )
}

