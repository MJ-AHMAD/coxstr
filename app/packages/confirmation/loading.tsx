import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="container py-12 max-w-2xl">
      <Skeleton className="h-[600px] w-full rounded-lg" />
    </div>
  )
}

