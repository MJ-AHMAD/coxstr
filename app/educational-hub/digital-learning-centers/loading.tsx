import { Skeleton } from "@/components/ui/skeleton"

export default function DigitalLearningCentersLoading() {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="space-y-10">
        <div className="text-center space-y-4">
          <Skeleton className="h-12 w-3/4 mx-auto" />
          <Skeleton className="h-6 w-2/3 mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Array(6)
            .fill(null)
            .map((_, i) => (
              <div key={i} className="border rounded-lg p-6 shadow-sm space-y-4">
                <Skeleton className="h-48 w-full rounded-md" />
                <Skeleton className="h-8 w-3/4" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-2/3" />
              </div>
            ))}
        </div>

        <div className="space-y-4">
          <Skeleton className="h-10 w-1/3 mx-auto" />
          <Skeleton className="h-[400px] w-full rounded-lg" />
        </div>
      </div>
    </div>
  )
}

