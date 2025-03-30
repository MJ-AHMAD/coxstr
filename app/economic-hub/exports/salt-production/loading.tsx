import { Skeleton } from "@/components/ui/skeleton"

export default function SaltProductionLoading() {
  return (
    <div className="container mx-auto py-12">
      <div className="mb-8">
        <div className="flex items-center text-muted-foreground mb-4">
          <Skeleton className="h-4 w-4 mr-2" />
          <Skeleton className="h-4 w-32" />
        </div>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <Skeleton className="h-10 w-3/4 mb-2" />
            <Skeleton className="h-6 w-full max-w-xl" />
          </div>
          <div className="flex gap-3">
            <Skeleton className="h-10 w-32" />
            <Skeleton className="h-10 w-40" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <div className="lg:col-span-2">
          <Skeleton className="h-[400px] w-full rounded-lg mb-6" />
          <div className="space-y-4">
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-6 w-3/4" />
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-6 w-5/6" />
          </div>
        </div>

        <div>
          <div className="border rounded-lg p-6 mb-6">
            <Skeleton className="h-6 w-1/2 mb-4" />
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-2 border-b">
                <Skeleton className="h-4 w-32" />
                <Skeleton className="h-4 w-20" />
              </div>
              <div className="flex justify-between items-center pb-2 border-b">
                <Skeleton className="h-4 w-28" />
                <Skeleton className="h-4 w-24" />
              </div>
              <div className="flex justify-between items-center pb-2 border-b">
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-4 w-20" />
              </div>
              <div className="flex justify-between items-center pb-2 border-b">
                <Skeleton className="h-4 w-36" />
                <Skeleton className="h-4 w-16" />
              </div>
              <div className="flex justify-between items-center">
                <Skeleton className="h-4 w-28" />
                <Skeleton className="h-4 w-24" />
              </div>
            </div>
          </div>

          <div className="bg-blue-50 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <Skeleton className="h-5 w-5 mr-2" />
              <Skeleton className="h-5 w-40" />
            </div>
            <Skeleton className="h-4 w-full mb-4" />
            <div className="grid grid-cols-2 gap-4">
              <Skeleton className="h-20 rounded-lg" />
              <Skeleton className="h-20 rounded-lg" />
            </div>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <Skeleton className="h-10 w-full mb-6" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="border rounded-lg overflow-hidden">
              <Skeleton className="h-48 w-full" />
              <div className="p-6">
                <Skeleton className="h-6 w-3/4 mb-2" />
                <Skeleton className="h-4 w-full mb-4" />
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <Skeleton className="h-4 w-24" />
                    <Skeleton className="h-4 w-20" />
                  </div>
                  <div className="flex justify-between">
                    <Skeleton className="h-4 w-16" />
                    <Skeleton className="h-4 w-24" />
                  </div>
                  <div className="flex justify-between">
                    <Skeleton className="h-4 w-28" />
                    <Skeleton className="h-4 w-20" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Skeleton className="h-64 w-full rounded-xl" />
    </div>
  )
}

