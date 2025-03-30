import { Skeleton } from "@/components/ui/skeleton"

export default function AboutLoading() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Skeleton className="h-10 w-40" />
          <nav className="hidden md:flex gap-6">
            {[1, 2, 3, 4, 5].map((i) => (
              <Skeleton key={i} className="h-4 w-20" />
            ))}
          </nav>
          <Skeleton className="h-10 w-10 md:hidden" />
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section Skeleton */}
        <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
          <div className="container relative z-10 mx-auto px-4 text-center">
            <Skeleton className="h-12 w-64 mx-auto mb-4" />
            <Skeleton className="h-6 w-full max-w-3xl mx-auto" />
          </div>
        </section>

        {/* Our Story Section Skeleton */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <Skeleton className="h-10 w-40 mb-6" />
                <Skeleton className="h-4 w-full mb-4" />
                <Skeleton className="h-4 w-full mb-4" />
                <Skeleton className="h-4 w-full mb-4" />
                <Skeleton className="h-4 w-full mb-4" />
                <Skeleton className="h-4 w-3/4" />
              </div>
              <Skeleton className="h-[400px] rounded-lg" />
            </div>
          </div>
        </section>

        {/* Mission & Vision Skeleton */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <Skeleton className="h-10 w-64 mx-auto mb-12" />
            <div className="grid md:grid-cols-2 gap-8">
              {[1, 2].map((i) => (
                <div key={i} className="bg-white p-8 rounded-lg shadow-md">
                  <Skeleton className="w-16 h-16 rounded-full mx-auto mb-6" />
                  <Skeleton className="h-6 w-40 mx-auto mb-4" />
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-3/4" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Skeleton */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <Skeleton className="h-10 w-64 mx-auto mb-12" />
            <div className="grid md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="text-center">
                  <Skeleton className="w-16 h-16 rounded-full mx-auto mb-6" />
                  <Skeleton className="h-6 w-40 mx-auto mb-4" />
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-3/4 mx-auto" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Skeleton */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <Skeleton className="h-10 w-64 mx-auto mb-12" />
            <div className="grid md:grid-cols-4 gap-8">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <Skeleton className="h-64 w-full" />
                  <div className="p-6">
                    <Skeleton className="h-6 w-40 mb-1" />
                    <Skeleton className="h-4 w-32 mb-4" />
                    <Skeleton className="h-4 w-full mb-2" />
                    <Skeleton className="h-4 w-full mb-2" />
                    <Skeleton className="h-4 w-3/4" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Skeleton */}
        <section className="py-16 bg-blue-900">
          <div className="container mx-auto px-4">
            <Skeleton className="h-10 w-64 bg-blue-800 mx-auto mb-12" />
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="p-6 bg-blue-800 rounded-lg">
                  <Skeleton className="w-16 h-16 rounded-full mx-auto mb-6 bg-blue-700" />
                  <Skeleton className="h-6 w-40 mx-auto mb-4 bg-blue-700" />
                  <Skeleton className="h-4 w-full mb-2 bg-blue-700" />
                  <Skeleton className="h-4 w-full mb-2 bg-blue-700" />
                  <Skeleton className="h-4 w-3/4 mx-auto bg-blue-700" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Skeleton */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 text-center">
            <Skeleton className="h-10 w-80 mx-auto mb-6" />
            <Skeleton className="h-6 w-full max-w-3xl mx-auto mb-8" />
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Skeleton className="h-12 w-32" />
              <Skeleton className="h-12 w-32" />
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i}>
                <Skeleton className="h-6 w-32 bg-gray-800 mb-4" />
                {[1, 2, 3, 4].map((j) => (
                  <Skeleton key={j} className="h-4 w-full max-w-[200px] bg-gray-800 mb-2" />
                ))}
              </div>
            ))}
          </div>
          <Skeleton className="h-4 w-full max-w-lg mx-auto mt-8 bg-gray-800" />
        </div>
      </footer>
    </div>
  )
}

