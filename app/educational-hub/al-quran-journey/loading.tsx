import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="container mx-auto py-10 space-y-8">
      <div className="text-center space-y-4">
        <Skeleton className="h-10 w-3/4 mx-auto" />
        <Skeleton className="h-4 w-2/3 mx-auto" />
        <Skeleton className="h-4 w-1/2 mx-auto" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <Skeleton className="h-[400px] w-full rounded-lg" />
        <div className="space-y-4">
          <Skeleton className="h-8 w-1/3" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <div className="grid grid-cols-2 gap-4 pt-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex items-center gap-2">
                <Skeleton className="h-5 w-5 rounded-full" />
                <Skeleton className="h-4 w-24" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div>
        <Skeleton className="h-10 w-full mb-6" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="border rounded-lg p-6 space-y-4">
              <Skeleton className="h-6 w-2/3" />
              <Skeleton className="h-4 w-1/2" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-10 w-full" />
            </div>
          ))}
        </div>
      </div>

      <Skeleton className="h-[200px] w-full rounded-lg" />

      <div className="text-center">
        <Skeleton className="h-8 w-1/3 mx-auto mb-4" />
        <Skeleton className="h-4 w-2/3 mx-auto mb-2" />
        <Skeleton className="h-4 w-1/2 mx-auto mb-6" />
        <Skeleton className="h-12 w-48 mx-auto" />
      </div>
    </div>
  )
}

