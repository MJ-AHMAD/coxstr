import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="container py-10 space-y-8">
      <Skeleton className="h-12 w-[250px] mx-auto" />
      <Skeleton className="h-6 w-full max-w-2xl mx-auto" />

      <div className="grid gap-8 mt-8">
        {Array(6)
          .fill(0)
          .map((_, i) => (
            <div key={i} className="space-y-4">
              <Skeleton className="h-8 w-[200px]" />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {Array(6)
                  .fill(0)
                  .map((_, j) => (
                    <Skeleton key={j} className="h-16 w-full" />
                  ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}

