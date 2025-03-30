import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="container py-12">
      <Skeleton className="h-8 w-64 mb-2" />
      <Skeleton className="h-4 w-96 mb-8" />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <Skeleton className="h-[500px] w-full rounded-lg" />
        </div>

        <div className="lg:col-span-2">
          <Skeleton className="h-[700px] w-full rounded-lg" />
        </div>
      </div>
    </div>
  )
}

