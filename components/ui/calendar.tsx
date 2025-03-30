"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

const Calendar = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("rounded-md border p-1.5 shadow-sm", className)} {...props}>
        Calendar
      </div>
    )
  },
)
Calendar.displayName = "Calendar"

export { Calendar }

