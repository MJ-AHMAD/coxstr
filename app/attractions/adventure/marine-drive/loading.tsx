import { Skeleton } from "@/components/ui/skeleton"

export default function MarineDriveLoading() {
  return (
    <div className="min-h-screen">
      {/* Hero Section Skeleton */}
      <div className="relative h-[50vh] md:h-[60vh] bg-muted">
        <div className="absolute inset-0 flex flex-col justify-center items-center p-4">
          <div className="text-center max-w-4xl w-full space-y-4">
            <Skeleton className="h-12 w-3/4 mx-auto" />
            <Skeleton className="h-6 w-2/3 mx-auto" />
          </div>
        </div>
      </div>

      {/* Breadcrumb Skeleton */}
      <div className="bg-muted py-4">
        <div className="container">
          <Skeleton className="h-5 w-64" />
        </div>
      </div>

      {/* Main Content Skeleton */}
      <div className="container py-12">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-8">
            <div className="space-y-4">
              <Skeleton className="h-8 w-64" />
              <Skeleton className="h-24 w-full" />
            </div>

            <div className="space-y-4">
              <Skeleton className="h-8 w-72" />
              <div className="grid sm:grid-cols-2 gap-6">
                {[...Array(4)].map((_, i) => (
                  <Skeleton key={i} className="h-40 w-full" />
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <Skeleton className="h-8 w-32" />
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[...Array(6)].map((_, i) => (
                  <Skeleton key={i} className="h-48 w-full" />
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <Skeleton className="h-64 w-full" />
            <Skeleton className="h-48 w-full" />
            <Skeleton className="h-64 w-full" />
            <Skeleton className="h-48 w-full" />
          </div>
        </div>
      </div>

      {/* CTA Section Skeleton */}
      <div className="bg-muted py-12">
        <div className="container text-center">
          <Skeleton className="h-8 w-64 mx-auto mb-4" />
          <Skeleton className="h-16 w-full max-w-2xl mx-auto mb-6" />
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Skeleton className="h-12 w-32 mx-auto sm:mx-2" />
            <Skeleton className="h-12 w-32 mx-auto sm:mx-2" />
          </div>
        </div>
      </div>
    </div>
  )
}

