import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white">
      {/* Hero Section Skeleton */}
      <div className="relative py-20 px-4 sm:px-6 lg:px-8 bg-blue-600">
        <div className="max-w-7xl mx-auto text-center">
          <Skeleton className="h-12 w-3/4 mx-auto mb-4" />
          <Skeleton className="h-6 w-2/3 mx-auto" />
        </div>
      </div>

      {/* Leadership Vision Skeleton */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <Skeleton className="h-10 w-3/4 mb-6" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-3/4 mb-6" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-1/2 mb-6" />
            <Skeleton className="h-10 w-40" />
          </div>
          <Skeleton className="h-80 w-full rounded-lg" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        <Skeleton className="h-px w-full" />
      </div>

      {/* Executive Leadership Skeleton */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <Skeleton className="h-10 w-1/3 mx-auto mb-12" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="overflow-hidden rounded-lg border border-gray-200">
              <Skeleton className="h-64 w-full" />
              <div className="p-6">
                <Skeleton className="h-6 w-3/4 mb-2" />
                <Skeleton className="h-4 w-1/2 mb-4" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-3/4 mb-4" />
                <div className="flex justify-between">
                  <Skeleton className="h-10 w-28" />
                  <div className="flex space-x-2">
                    <Skeleton className="h-10 w-10 rounded-full" />
                    <Skeleton className="h-10 w-10 rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        <Skeleton className="h-px w-full" />
      </div>

      {/* Organizational Structure Skeleton */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <Skeleton className="h-10 w-1/2 mx-auto mb-12" />

        <Skeleton className="h-96 w-full rounded-lg mb-12" />

        <div className="space-y-4">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="border border-gray-200 rounded-lg">
              <div className="p-4 flex justify-between items-center">
                <Skeleton className="h-6 w-1/3" />
                <Skeleton className="h-6 w-6 rounded-full" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        <Skeleton className="h-px w-full" />
      </div>

      {/* Management Approach Skeleton */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <Skeleton className="h-10 w-1/2 mx-auto mb-12" />

        <div className="w-full">
          <div className="grid w-full grid-cols-4 mb-4">
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-10 w-full" />
          </div>
          <Skeleton className="h-80 w-full rounded-lg" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        <Skeleton className="h-px w-full" />
      </div>

      {/* Team Members Skeleton */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <Skeleton className="h-10 w-1/4 mx-auto mb-12" />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="text-center">
              <Skeleton className="h-40 w-40 mx-auto rounded-full mb-4" />
              <Skeleton className="h-5 w-32 mx-auto mb-2" />
              <Skeleton className="h-4 w-24 mx-auto mb-1" />
              <Skeleton className="h-3 w-20 mx-auto" />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Skeleton className="h-10 w-40 mx-auto" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        <Skeleton className="h-px w-full" />
      </div>

      {/* Career Opportunities Skeleton */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-blue-50 rounded-lg p-8 text-center">
          <Skeleton className="h-10 w-1/3 mx-auto mb-4" />
          <Skeleton className="h-4 w-2/3 mx-auto mb-2" />
          <Skeleton className="h-4 w-1/2 mx-auto mb-8" />
          <Skeleton className="h-12 w-48 mx-auto" />
        </div>
      </div>

      {/* Footer Skeleton */}
      <div className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[...Array(4)].map((_, i) => (
              <div key={i}>
                <Skeleton className="h-6 w-32 bg-gray-700 mb-4" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-24 bg-gray-700" />
                  <Skeleton className="h-4 w-28 bg-gray-700" />
                  <Skeleton className="h-4 w-20 bg-gray-700" />
                  <Skeleton className="h-4 w-24 bg-gray-700" />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800">
            <Skeleton className="h-4 w-64 bg-gray-700 mx-auto" />
          </div>
        </div>
      </div>
    </div>
  )
}

