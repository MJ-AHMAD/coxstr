import { Skeleton } from "@/components/ui/skeleton"

export default function ContactLoading() {
  return (
    <div className="container py-12 px-4 md:px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <Skeleton className="h-10 w-[200px] mx-auto mb-4" />
          <Skeleton className="h-4 w-full max-w-2xl mx-auto" />
          <Skeleton className="h-4 w-full max-w-xl mx-auto mt-2" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information Skeleton */}
          <div className="space-y-8">
            <div>
              <Skeleton className="h-8 w-[150px] mb-6" />
              <div className="grid gap-6">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="flex items-start gap-4">
                    <Skeleton className="h-12 w-12 rounded-full" />
                    <div className="space-y-2">
                      <Skeleton className="h-5 w-[100px]" />
                      <Skeleton className="h-4 w-[200px]" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <Skeleton className="h-8 w-[150px] mb-6" />
              <div className="flex space-x-4">
                {[1, 2, 3, 4].map((i) => (
                  <Skeleton key={i} className="h-12 w-12 rounded-full" />
                ))}
              </div>
            </div>

            <div>
              <Skeleton className="h-8 w-[150px] mb-6" />
              <Skeleton className="aspect-video w-full rounded-lg" />
            </div>
          </div>

          {/* Contact Form Skeleton */}
          <div>
            <Skeleton className="h-8 w-[200px] mb-6" />
            <div className="space-y-6">
              <Skeleton className="h-[400px] w-full rounded-lg" />
            </div>
          </div>
        </div>

        {/* FAQ Section Skeleton */}
        <div className="mt-16">
          <Skeleton className="h-8 w-[250px] mx-auto mb-6" />
          <div className="grid gap-6 md:grid-cols-2">
            {[1, 2, 3, 4].map((i) => (
              <Skeleton key={i} className="h-[120px] w-full rounded-lg" />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

