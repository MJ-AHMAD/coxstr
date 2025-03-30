import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="container mx-auto py-10 space-y-8">
      <div className="space-y-4">
        <Skeleton className="h-12 w-48" />
        <Skeleton className="h-6 w-full max-w-2xl" />
      </div>

      <div className="h-[60vh] w-full">
        <Skeleton className="h-full w-full rounded-lg" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <Skeleton className="h-8 w-36" />
          <Skeleton className="h-6 w-full" />
          <Skeleton className="h-6 w-full" />
          <Skeleton className="h-6 w-3/4" />
          <Skeleton className="h-10 w-32" />
        </div>
        <Skeleton className="h-[300px] rounded-lg" />
      </div>

      <div className="space-y-4">
        <div className="text-center">
          <Skeleton className="h-8 w-48 mx-auto" />
          <Skeleton className="h-6 w-full max-w-xl mx-auto mt-2" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Skeleton className="h-[300px] rounded-lg" />
          <Skeleton className="h-[300px] rounded-lg" />
          <Skeleton className="h-[300px] rounded-lg" />
        </div>
      </div>
    </div>
  )
}

