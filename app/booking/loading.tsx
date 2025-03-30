import { Skeleton } from "@/components/ui/skeleton"

export default function BookingLoading() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Skeleton className="h-8 w-32" />
            <Skeleton className="h-4 w-48 hidden md:inline-block" />
          </div>
          <Skeleton className="h-9 w-32" />
        </div>
      </header>

      <div className="container py-10">
        <div className="flex flex-col gap-6">
          <div>
            <Skeleton className="h-10 w-3/4 max-w-md" />
            <Skeleton className="h-5 w-full max-w-lg mt-2" />
          </div>

          <Skeleton className="h-10 w-full" />

          <div className="mt-6">
            <Skeleton className="h-[500px] w-full rounded-lg" />
          </div>
        </div>
      </div>
    </main>
  )
}

