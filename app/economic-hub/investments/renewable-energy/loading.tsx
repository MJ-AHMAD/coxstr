import { Skeleton } from "@/components/ui/skeleton"

export default function RenewableEnergyLoading() {
  return (
    <div className="container mx-auto py-12">
      <div className="mb-8">
        <Skeleton className="h-4 w-32 mb-4" />
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <Skeleton className="h-10 w-64 mb-2" />
            <Skeleton className="h-6 w-96" />
          </div>
          <div className="flex gap-3">
            <Skeleton className="h-10 w-40" />
            <Skeleton className="h-10 w-40" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <div className="lg:col-span-2">
          <Skeleton className="h-[400px] w-full rounded-lg mb-6" />
          <Skeleton className="h-6 w-full mb-4" />
          <Skeleton className="h-6 w-full mb-4" />
          <Skeleton className="h-6 w-3/4" />
        </div>

        <div>
          <div className="border rounded-lg p-6">
            <Skeleton className="h-6 w-40 mb-2" />
            <Skeleton className="h-4 w-full mb-6" />
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-2 border-b">
                <Skeleton className="h-4 w-32" />
                <Skeleton className="h-4 w-16" />
              </div>
              <div className="flex justify-between items-center pb-2 border-b">
                <Skeleton className="h-4 w-32" />
                <Skeleton className="h-4 w-16" />
              </div>
              <div className="flex justify-between items-center pb-2 border-b">
                <Skeleton className="h-4 w-32" />
                <Skeleton className="h-4 w-16" />
              </div>
              <div className="flex justify-between items-center pb-2 border-b">
                <Skeleton className="h-4 w-32" />
                <Skeleton className="h-4 w-16" />
              </div>
              <div className="flex justify-between items-center">
                <Skeleton className="h-4 w-32" />
                <Skeleton className="h-4 w-16" />
              </div>
            </div>
          </div>

          <div className="mt-6 rounded-lg p-6">
            <Skeleton className="h-6 w-40 mb-4" />
            <Skeleton className="h-4 w-full mb-4" />
            <div className="grid grid-cols-2 gap-4">
              <Skeleton className="h-20 w-full rounded-lg" />
              <Skeleton className="h-20 w-full rounded-lg" />
            </div>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <div className="border-b">
          <div className="flex gap-4 mb-6">
            <Skeleton className="h-10 w-32" />
            <Skeleton className="h-10 w-32" />
            <Skeleton className="h-10 w-32" />
            <Skeleton className="h-10 w-32" />
          </div>
        </div>

        <div className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="border rounded-lg">
                <Skeleton className="h-48 w-full rounded-t-lg" />
                <div className="p-6">
                  <Skeleton className="h-6 w-32 mb-2" />
                  <Skeleton className="h-4 w-48 mb-4" />
                  <Skeleton className="h-4 w-full mb-4" />
                  <Skeleton className="h-4 w-full mb-4" />
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <Skeleton className="h-4 w-24" />
                      <Skeleton className="h-4 w-20" />
                    </div>
                    <div className="flex justify-between">
                      <Skeleton className="h-4 w-24" />
                      <Skeleton className="h-4 w-20" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Skeleton className="h-64 w-full rounded-xl" />
    </div>
  )
}

