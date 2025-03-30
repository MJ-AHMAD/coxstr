"use client"

import { useState } from "react"
import Image from "next/image"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Search, Clock, Plane, Filter, ArrowRight, Clock3 } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent } from "@/components/ui/card"

// Flight schedule data
const flightSchedules = {
  "dac-cxb": [
    {
      departureTime: "07:15",
      arrivalTime: "08:20",
      airline: "US-Bangla Airlines",
      flightNumber: "BS 141",
      aircraftType: "Aerospatiale/Alenia ATR 72",
      classesAvailable: ["Economy", "Business"],
    },
    {
      departureTime: "07:20",
      arrivalTime: "08:25",
      airline: "NovoAir",
      flightNumber: "VQ 921",
      aircraftType: "Aerospatiale/Alenia ATR 72",
      classesAvailable: ["Economy", "Business"],
    },
    {
      departureTime: "07:30",
      arrivalTime: "08:35",
      airline: "Air Astra",
      flightNumber: "2A 441",
      aircraftType: "Aerospatiale/Alenia ATR 72",
      classesAvailable: ["Economy", "Business"],
    },
    {
      departureTime: "08:00",
      arrivalTime: "09:15",
      airline: "Biman Airlines",
      flightNumber: "BG 433",
      aircraftType: "De Havilland Canada DHC-8 Dash 8",
      classesAvailable: ["Economy", "Business"],
    },
    {
      departureTime: "08:30",
      arrivalTime: "09:35",
      airline: "US-Bangla Airlines",
      flightNumber: "BS 143",
      aircraftType: "Aerospatiale/Alenia ATR 72",
      classesAvailable: ["Economy", "Business"],
    },
    {
      departureTime: "09:00",
      arrivalTime: "10:05",
      airline: "Air Astra",
      flightNumber: "2A 453",
      aircraftType: "Aerospatiale/Alenia ATR 72",
      classesAvailable: ["Economy", "Business"],
    },
    {
      departureTime: "09:50",
      arrivalTime: "10:55",
      airline: "NovoAir",
      flightNumber: "VQ 923",
      aircraftType: "Aerospatiale/Alenia ATR 72",
      classesAvailable: ["Economy", "Business"],
    },
    {
      departureTime: "10:30",
      arrivalTime: "11:35",
      airline: "US-Bangla Airlines",
      flightNumber: "BS 145",
      aircraftType: "Aerospatiale/Alenia ATR 72",
      classesAvailable: ["Economy", "Business"],
    },
    {
      departureTime: "11:00",
      arrivalTime: "12:05",
      airline: "Air Astra",
      flightNumber: "2A 443",
      aircraftType: "Aerospatiale/Alenia ATR 72",
      classesAvailable: ["Economy", "Business"],
    },
    {
      departureTime: "11:00",
      arrivalTime: "12:05",
      airline: "NovoAir",
      flightNumber: "VQ 927",
      aircraftType: "Aerospatiale/Alenia ATR 72",
      classesAvailable: ["Economy", "Business"],
    },
    {
      departureTime: "11:40",
      arrivalTime: "12:45",
      airline: "US-Bangla Airlines",
      flightNumber: "BS 147",
      aircraftType: "Aerospatiale/Alenia ATR 72",
      classesAvailable: ["Economy", "Business"],
    },
    {
      departureTime: "11:45",
      arrivalTime: "13:00",
      airline: "Biman Airlines",
      flightNumber: "BG 435",
      aircraftType: "De Havilland Canada DHC-8 Dash 8",
      classesAvailable: ["Economy", "Business"],
    },
    {
      departureTime: "12:45",
      arrivalTime: "13:50",
      airline: "US-Bangla Airlines",
      flightNumber: "BS 149",
      aircraftType: "Aerospatiale/Alenia ATR 72",
      classesAvailable: ["Economy", "Business"],
    },
    {
      departureTime: "13:10",
      arrivalTime: "14:15",
      airline: "Air Astra",
      flightNumber: "2A 445",
      aircraftType: "Aerospatiale/Alenia ATR 72",
      classesAvailable: ["Economy", "Business"],
    },
    {
      departureTime: "13:20",
      arrivalTime: "14:25",
      airline: "NovoAir",
      flightNumber: "VQ 931",
      aircraftType: "Aerospatiale/Alenia ATR 72",
      classesAvailable: ["Economy", "Business"],
    },
    {
      departureTime: "14:50",
      arrivalTime: "15:55",
      airline: "US-Bangla Airlines",
      flightNumber: "BS 151",
      aircraftType: "Aerospatiale/Alenia ATR 72",
      classesAvailable: ["Economy", "Business"],
    },
    {
      departureTime: "15:30",
      arrivalTime: "16:35",
      airline: "Air Astra",
      flightNumber: "2A 447",
      aircraftType: "Aerospatiale/Alenia ATR 72",
      classesAvailable: ["Economy", "Business"],
    },
    {
      departureTime: "15:30",
      arrivalTime: "16:45",
      airline: "Biman Airlines",
      flightNumber: "BG 437",
      aircraftType: "De Havilland Canada DHC-8 Dash 8",
      classesAvailable: ["Economy", "Business"],
    },
    {
      departureTime: "16:30",
      arrivalTime: "17:35",
      airline: "NovoAir",
      flightNumber: "VQ 933",
      aircraftType: "Aerospatiale/Alenia ATR 72",
      classesAvailable: ["Economy", "Business"],
    },
    {
      departureTime: "16:30",
      arrivalTime: "17:35",
      airline: "US-Bangla Airlines",
      flightNumber: "BS 157",
      aircraftType: "Aerospatiale/Alenia ATR 72",
      classesAvailable: ["Economy", "Business"],
    },
    {
      departureTime: "18:40",
      arrivalTime: "19:45",
      airline: "Air Astra",
      flightNumber: "2A 449",
      aircraftType: "Aerospatiale/Alenia ATR 72",
      classesAvailable: ["Economy", "Business"],
    },
    {
      departureTime: "19:30",
      arrivalTime: "20:35",
      airline: "Air Astra",
      flightNumber: "2A 451",
      aircraftType: "Aerospatiale/Alenia ATR 72",
      classesAvailable: ["Economy", "Business"],
    },
    {
      departureTime: "20:00",
      arrivalTime: "21:05",
      airline: "NovoAir",
      flightNumber: "VQ 935",
      aircraftType: "Aerospatiale/Alenia ATR 72",
      classesAvailable: ["Economy", "Business"],
    },
    {
      departureTime: "20:10",
      arrivalTime: "21:15",
      airline: "US-Bangla Airlines",
      flightNumber: "BS 159",
      aircraftType: "Aerospatiale/Alenia ATR 72",
      classesAvailable: ["Economy", "Business"],
    },
  ],
  "zyl-cxb": [
    {
      departureTime: "06:55",
      arrivalTime: "07:45",
      transitDepartureTime: "08:30",
      transitArrivalTime: "09:35",
      airline: "Biman Bangladesh Airlines + US-Bangla Airlines",
      flightNumber: "BG 226 + BS 143",
      layoverDuration: "45m",
      layoverAirport: "DAC",
      totalDuration: "2h 40m",
      isConnecting: true,
      classesAvailable: ["Economy", "Business"],
      status: "On Time",
    },
    {
      departureTime: "08:30",
      arrivalTime: "09:20",
      transitDepartureTime: "10:30",
      transitArrivalTime: "11:35",
      airline: "US-Bangla Airlines",
      flightNumber: "BS 532 + BS 145",
      layoverDuration: "1h 10m",
      layoverAirport: "DAC",
      totalDuration: "3h 05m",
      isConnecting: true,
      classesAvailable: ["Economy", "Business"],
      status: "On Time",
    },
    {
      departureTime: "08:50",
      arrivalTime: "09:40",
      transitDepartureTime: "11:00",
      transitArrivalTime: "12:05",
      airline: "Novoair",
      flightNumber: "VQ 982 + VQ 927",
      layoverDuration: "1h 20m",
      layoverAirport: "DAC",
      totalDuration: "3h 15m",
      isConnecting: true,
      classesAvailable: ["Economy", "Business"],
      status: "On Time",
    },
    {
      departureTime: "12:15",
      arrivalTime: "13:10",
      transitDepartureTime: "14:50",
      transitArrivalTime: "15:55",
      airline: "Biman Bangladesh Airlines + US-Bangla Airlines",
      flightNumber: "BG 602 + BS 151",
      layoverDuration: "1h 40m",
      layoverAirport: "DAC",
      totalDuration: "3h 40m",
      isConnecting: true,
      classesAvailable: ["Economy", "Business"],
      status: "On Time",
    },
    {
      departureTime: "13:50",
      arrivalTime: "14:40",
      transitDepartureTime: "15:30",
      transitArrivalTime: "16:35",
      airline: "US-Bangla Airlines + Air Astra",
      flightNumber: "BS 534 + 2A 447",
      layoverDuration: "50m",
      layoverAirport: "DAC",
      totalDuration: "2h 45m",
      isConnecting: true,
      classesAvailable: ["Economy", "Business"],
      status: "On Time",
    },
    {
      departureTime: "16:10",
      arrivalTime: "17:00",
      transitDepartureTime: "18:40",
      transitArrivalTime: "19:45",
      airline: "Novoair + Air Astra",
      flightNumber: "VQ 986 + 2A 449",
      layoverDuration: "1h 40m",
      layoverAirport: "DAC",
      totalDuration: "3h 35m",
      isConnecting: true,
      classesAvailable: ["Economy", "Business"],
      status: "On Time",
    },
    {
      departureTime: "16:25",
      arrivalTime: "17:20",
      transitDepartureTime: "18:40",
      transitArrivalTime: "19:45",
      airline: "Biman Bangladesh Airlines + Air Astra",
      flightNumber: "BG 604 + 2A 449",
      layoverDuration: "1h 20m",
      layoverAirport: "DAC",
      totalDuration: "3h 20m",
      isConnecting: true,
      classesAvailable: ["Economy", "Business"],
      status: "On Time",
    },
    {
      departureTime: "16:50",
      arrivalTime: "17:40",
      transitDepartureTime: "19:30",
      transitArrivalTime: "20:35",
      airline: "US-Bangla Airlines + Air Astra",
      flightNumber: "BS 538 + 2A 451",
      layoverDuration: "1h 50m",
      layoverAirport: "DAC",
      totalDuration: "3h 45m",
      isConnecting: true,
      classesAvailable: ["Economy", "Business"],
      status: "On Time",
    },
    {
      departureTime: "20:10",
      arrivalTime: "21:05",
      transitDepartureTime: "Next Day 07:15",
      transitArrivalTime: "Next Day 08:20",
      airline: "Biman Bangladesh Airlines + US-Bangla Airlines",
      flightNumber: "BG 606 + BS 141",
      layoverDuration: "10h 10m",
      layoverAirport: "DAC",
      totalDuration: "12h 10m",
      isConnecting: true,
      classesAvailable: ["Economy", "Business"],
      status: "Overnight Layover",
    },
  ],
  "spd-cxb": [
    {
      departureTime: "09:30",
      arrivalTime: "10:25",
      transitDepartureTime: "11:40",
      transitArrivalTime: "12:45",
      airline: "Novoair + US-Bangla Airlines",
      flightNumber: "VQ 962 + BS 147",
      layoverDuration: "1h 15m",
      layoverAirport: "DAC",
      totalDuration: "3h 15m",
      isConnecting: true,
      classesAvailable: ["Economy", "Business"],
      status: "On Time",
    },
    {
      departureTime: "11:55",
      arrivalTime: "12:50",
      transitDepartureTime: "13:20",
      transitArrivalTime: "14:25",
      airline: "US-Bangla Airlines + Novoair",
      flightNumber: "BS 184 + VQ 931",
      layoverDuration: "30m",
      layoverAirport: "DAC",
      totalDuration: "2h 30m",
      isConnecting: true,
      classesAvailable: ["Economy", "Business"],
      status: "On Time",
    },
    {
      departureTime: "12:00",
      arrivalTime: "13:00",
      transitDepartureTime: "14:50",
      transitArrivalTime: "15:55",
      airline: "Novoair + US-Bangla Airlines",
      flightNumber: "VQ 964 + BS 151",
      layoverDuration: "1h 50m",
      layoverAirport: "DAC",
      totalDuration: "3h 55m",
      isConnecting: true,
      classesAvailable: ["Economy", "Business"],
      status: "On Time",
    },
    {
      departureTime: "15:00",
      arrivalTime: "16:00",
      transitDepartureTime: "16:30",
      transitArrivalTime: "17:35",
      airline: "Novoair",
      flightNumber: "VQ 966 + VQ 933",
      layoverDuration: "30m",
      layoverAirport: "DAC",
      totalDuration: "2h 35m",
      isConnecting: true,
      classesAvailable: ["Economy", "Business"],
      status: "On Time",
    },
    {
      departureTime: "15:00",
      arrivalTime: "15:55",
      transitDepartureTime: "16:30",
      transitArrivalTime: "17:35",
      airline: "US-Bangla Airlines",
      flightNumber: "BS 188 + BS 157",
      layoverDuration: "35m",
      layoverAirport: "DAC",
      totalDuration: "2h 35m",
      isConnecting: true,
      classesAvailable: ["Economy", "Business"],
      status: "On Time",
    },
    {
      departureTime: "15:35",
      arrivalTime: "16:30",
      transitDepartureTime: "18:40",
      transitArrivalTime: "19:45",
      airline: "Air Astra",
      flightNumber: "2A 476 + 2A 449",
      layoverDuration: "2h 10m",
      layoverAirport: "DAC",
      totalDuration: "4h 10m",
      isConnecting: true,
      classesAvailable: ["Economy", "Business"],
      status: "On Time",
    },
    {
      departureTime: "18:10",
      arrivalTime: "19:05",
      transitDepartureTime: "20:00",
      transitArrivalTime: "21:05",
      airline: "Biman Bangladesh Airlines + Novoair",
      flightNumber: "BG 494 + VQ 935",
      layoverDuration: "55m",
      layoverAirport: "DAC",
      totalDuration: "2h 55m",
      isConnecting: true,
      classesAvailable: ["Economy", "Business"],
      status: "On Time",
    },
    {
      departureTime: "20:45",
      arrivalTime: "21:40",
      transitDepartureTime: "Next Day 07:15",
      transitArrivalTime: "Next Day 08:20",
      airline: "US-Bangla Airlines",
      flightNumber: "BS 190 + BS 141",
      layoverDuration: "9h 35m",
      layoverAirport: "DAC",
      totalDuration: "11h 35m",
      isConnecting: true,
      classesAvailable: ["Economy", "Business"],
      status: "Overnight Layover",
    },
  ],
}

// Add price field to each flight in the dac-cxb array
flightSchedules["dac-cxb"].forEach((flight, index) => {
  // Add price based on airline and time
  if (flight.airline.includes("US-Bangla")) {
    flight.price = 3500 + (index % 3) * 200
  } else if (flight.airline.includes("NovoAir")) {
    flight.price = 3700 + (index % 3) * 200
  } else if (flight.airline.includes("Air Astra")) {
    flight.price = 3600 + (index % 3) * 200
  } else if (flight.airline.includes("Biman")) {
    flight.price = 3800 + (index % 3) * 200
  }
})

// Add prices to zyl-cxb flights
flightSchedules["zyl-cxb"].forEach((flight, index) => {
  flight.price = 6500 + (index % 3) * 300
})

// Add prices to spd-cxb flights
flightSchedules["spd-cxb"].forEach((flight, index) => {
  flight.price = 7200 + (index % 3) * 300
})

// Airline logos mapping
const airlineLogos = {
  "Biman Bangladesh Airlines": "https://mj-ahmad.github.io/mja2025/img/bim.png",
  "Biman Airlines": "https://mj-ahmad.github.io/mja2025/img/bim.png",
  "US-Bangla Airlines": "https://mj-ahmad.github.io/mja2025/img/usb.png",
  NovoAir: "https://mj-ahmad.github.io/mja2025/img/nov.png",
  "Air Astra": "https://mj-ahmad.github.io/mja2025/img/air.png",
}

// Route information
const routeInfo = {
  "dac-cxb": {
    from: "Dhaka (DAC)",
    to: "Cox's Bazar (CXB)",
    duration: "~1h 05m",
    distance: "414 km",
    direct: true,
    label: "Dhaka to Cox's Bazar",
  },
  "zyl-cxb": {
    from: "Sylhet (ZYL)",
    to: "Cox's Bazar (CXB)",
    duration: "~2h 30m",
    distance: "654 km",
    direct: false,
    transit: "Dhaka (DAC)",
    label: "Sylhet to Cox's Bazar",
  },
  "spd-cxb": {
    from: "Saidpur (SPD)",
    to: "Cox's Bazar (CXB)",
    duration: "~2h 45m",
    distance: "714 km",
    direct: false,
    transit: "Dhaka (DAC)",
    label: "Saidpur to Cox's Bazar",
  },
}

// Format time to 12-hour format
const formatTime = (time: string) => {
  const [hours, minutes] = time.split(":")
  const hour = Number.parseInt(hours)
  const ampm = hour >= 12 ? "PM" : "AM"
  const formattedHour = hour % 12 || 12
  return `${formattedHour}:${minutes} ${ampm}`
}

// Calculate flight duration
const calculateDuration = (departureTime: string, arrivalTime: string) => {
  const [depHours, depMinutes] = departureTime.split(":").map(Number)
  const [arrHours, arrMinutes] = arrivalTime.split(":").map(Number)

  let durationMinutes = arrHours * 60 + arrMinutes - (depHours * 60 + depMinutes)

  // Handle overnight flights
  if (durationMinutes < 0) {
    durationMinutes += 24 * 60
  }

  const hours = Math.floor(durationMinutes / 60)
  const minutes = durationMinutes % 60

  return `${hours}h ${minutes}m`
}

// Component for flight schedule
export default function FlightSchedule() {
  const [activeTab, setActiveTab] = useState("dac-cxb")
  const [searchTerm, setSearchTerm] = useState("")
  const [filterAirline, setFilterAirline] = useState("all")
  const [filterTime, setFilterTime] = useState("all")

  // Get all unique airlines
  const getUniqueAirlines = () => {
    const airlines = new Set<string>()
    Object.values(flightSchedules).forEach((schedules) => {
      schedules.forEach((flight) => {
        airlines.add(flight.airline)
      })
    })
    return Array.from(airlines)
  }

  const uniqueAirlines = getUniqueAirlines()

  // Filter flights based on search and filters
  const filteredFlights = flightSchedules[activeTab as keyof typeof flightSchedules].filter((flight) => {
    // Search filter
    const searchMatch =
      flight.airline.toLowerCase().includes(searchTerm.toLowerCase()) ||
      flight.flightNumber.toLowerCase().includes(searchTerm.toLowerCase())

    // Airline filter
    let airlineMatch = filterAirline === "all"
    if (!airlineMatch) {
      if (flight.airline.includes("+")) {
        // For connecting flights, check if any of the airlines match
        const airlines = flight.airline.split(" + ")
        airlineMatch = airlines.some((a) => a === filterAirline)
      } else {
        airlineMatch = flight.airline === filterAirline
      }
    }

    // Time filter
    let timeMatch = true
    if (filterTime !== "all") {
      const hour = Number.parseInt(flight.departureTime.split(":")[0])
      if (filterTime === "morning" && (hour < 6 || hour >= 12)) timeMatch = false
      if (filterTime === "afternoon" && (hour < 12 || hour >= 18)) timeMatch = false
      if (filterTime === "evening" && hour < 18) timeMatch = false
    }

    return searchMatch && airlineMatch && timeMatch
  })

  // Function to handle booking a flight
  const handleBookFlight = (flight: any) => {
    const flightData = {
      flightNumber: flight.flightNumber,
      airline: flight.airline,
      departureTime: flight.departureTime,
      arrivalTime: flight.isConnecting ? flight.transitArrivalTime : flight.arrivalTime,
      from: activeTab === "dac-cxb" ? "DAC" : activeTab === "zyl-cxb" ? "ZYL" : "SPD",
      to: "CXB",
      price: flight.price,
      date: new Date().toISOString().split("T")[0],
      isConnecting: flight.isConnecting || false,
      layoverAirport: flight.layoverAirport,
      layoverDuration: flight.layoverDuration,
    }

    // Convert to query string
    const queryString = new URLSearchParams(
      Object.entries(flightData).map(([key, value]) => [key, String(value)]),
    ).toString()

    // Navigate to booking page
    window.location.href = `/services/flights/booking?${queryString}`
  }

  return (
    <div className="w-full space-y-6">
      {/* Route selection dropdown */}
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <Select value={activeTab} onValueChange={setActiveTab}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select route" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="dac-cxb">Dhaka to Cox's Bazar</SelectItem>
            <SelectItem value="zyl-cxb">Sylhet to Cox's Bazar</SelectItem>
            <SelectItem value="spd-cxb">Saidpur to Cox's Bazar</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Route information */}
      <div className="bg-muted/30 p-4 rounded-lg">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 md:gap-4 flex-wrap justify-center md:justify-start">
            <div className="text-center md:text-left">
              <h3 className="text-sm md:text-lg font-semibold">
                {routeInfo[activeTab as keyof typeof routeInfo].from}
              </h3>
              <p className="text-xs md:text-sm text-muted-foreground">Departure</p>
            </div>
            <div className="flex flex-col items-center">
              {!routeInfo[activeTab as keyof typeof routeInfo].direct && (
                <div className="text-[10px] md:text-xs text-primary font-medium mb-1">
                  Via {routeInfo[activeTab as keyof typeof routeInfo].transit}
                </div>
              )}
              <div className="w-12 md:w-24 h-[1px] bg-primary relative my-1">
                {!routeInfo[activeTab as keyof typeof routeInfo].direct && (
                  <div className="absolute -top-1 left-1/2 -translate-x-1/2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                  </div>
                )}
                <div className="absolute -top-2 right-0">
                  <Plane className="h-3 w-3 md:h-4 md:w-4 text-primary" />
                </div>
              </div>
              <p className="text-[10px] md:text-xs text-muted-foreground">
                {routeInfo[activeTab as keyof typeof routeInfo].distance}
              </p>
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-sm md:text-lg font-semibold">{routeInfo[activeTab as keyof typeof routeInfo].to}</h3>
              <p className="text-xs md:text-sm text-muted-foreground">Arrival</p>
            </div>
          </div>
          <div className="flex items-center gap-2 mt-2 md:mt-0">
            <Clock className="h-3 w-3 md:h-4 md:w-4 text-primary" />
            <span className="text-xs md:text-sm">
              {routeInfo[activeTab as keyof typeof routeInfo].direct
                ? `Avg. Duration: ${routeInfo[activeTab as keyof typeof routeInfo].duration}`
                : `Total Duration: ${routeInfo[activeTab as keyof typeof routeInfo].duration} (including layover)`}
            </span>
          </div>
        </div>
      </div>

      {/* Search and filters */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search by airline or flight number"
            className="pl-8 text-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex flex-col sm:flex-row gap-2">
          <Select value={filterAirline} onValueChange={setFilterAirline}>
            <SelectTrigger className="w-full sm:w-[180px] text-sm">
              <SelectValue placeholder="Filter by airline" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Airlines</SelectItem>
              {uniqueAirlines.map((airline) => (
                <SelectItem key={airline} value={airline}>
                  {airline}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={filterTime} onValueChange={setFilterTime}>
            <SelectTrigger className="w-full sm:w-[180px] text-sm">
              <SelectValue placeholder="Filter by time" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Times</SelectItem>
              <SelectItem value="morning">Morning (6AM-12PM)</SelectItem>
              <SelectItem value="afternoon">Afternoon (12PM-6PM)</SelectItem>
              <SelectItem value="evening">Evening (After 6PM)</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Desktop view: Flight schedule table */}
      <div className="rounded-md border overflow-x-auto hidden md:block">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Airline</TableHead>
              <TableHead>Flight</TableHead>
              <TableHead>Departure</TableHead>
              <TableHead>Arrival</TableHead>
              {activeTab !== "dac-cxb" && <TableHead>Layover</TableHead>}
              <TableHead>Duration</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Aircraft</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredFlights.length > 0 ? (
              filteredFlights.map((flight, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Image
                        src={
                          airlineLogos[flight.airline.split(" + ")[0] as keyof typeof airlineLogos] ||
                          "/placeholder.svg?height=40&width=100" ||
                          "/placeholder.svg" ||
                          "/placeholder.svg"
                        }
                        alt={flight.airline}
                        width={80}
                        height={30}
                        className="object-contain"
                      />
                      <span className="text-sm font-medium">{flight.airline}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="font-medium">{flight.flightNumber}</div>
                    {flight.status && (
                      <Badge
                        variant={
                          flight.status === "On Time"
                            ? "default"
                            : flight.status === "Overnight Layover"
                              ? "destructive"
                              : "secondary"
                        }
                        className="mt-1"
                      >
                        {flight.status}
                      </Badge>
                    )}
                  </TableCell>
                  <TableCell>
                    <div className="font-medium">{formatTime(flight.departureTime)}</div>
                    <div className="text-sm text-muted-foreground">
                      {activeTab === "dac-cxb" ? "DAC" : activeTab === "zyl-cxb" ? "ZYL" : "SPD"}
                    </div>
                  </TableCell>
                  <TableCell>
                    {flight.isConnecting ? (
                      <>
                        <div className="font-medium">
                          {formatTime(flight.transitArrivalTime.replace("Next Day ", ""))}
                        </div>
                        <div className="text-sm text-muted-foreground">CXB</div>
                        {flight.transitArrivalTime.includes("Next Day") && (
                          <div className="text-xs text-primary">+1 day</div>
                        )}
                      </>
                    ) : (
                      <>
                        <div className="font-medium">{formatTime(flight.arrivalTime)}</div>
                        <div className="text-sm text-muted-foreground">
                          {activeTab === "dac-cxb" ? "CXB" : flight.arrivalAirport}
                        </div>
                      </>
                    )}
                  </TableCell>
                  {activeTab !== "dac-cxb" && (
                    <TableCell>
                      {flight.isConnecting && (
                        <div className="flex flex-col">
                          <div className="text-sm font-medium">
                            {flight.layoverDuration} in {flight.layoverAirport}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {formatTime(flight.arrivalTime)} -{" "}
                            {formatTime(flight.transitDepartureTime.replace("Next Day ", ""))}
                            {flight.transitDepartureTime.includes("Next Day") && (
                              <span className="text-xs text-primary ml-1">+1</span>
                            )}
                          </div>
                        </div>
                      )}
                    </TableCell>
                  )}
                  <TableCell>
                    {flight.isConnecting
                      ? flight.totalDuration
                      : calculateDuration(flight.departureTime, flight.arrivalTime)}
                  </TableCell>
                  <TableCell>
                    <div className="font-medium text-primary">৳{flight.price}</div>
                    {flight.isConnecting && <div className="text-xs text-muted-foreground">Total fare</div>}
                  </TableCell>
                  <TableCell>
                    {flight.aircraftType ? (
                      <div className="text-sm">{flight.aircraftType}</div>
                    ) : (
                      <div className="text-sm">ATR 72-600</div>
                    )}
                  </TableCell>
                  <TableCell className="text-right">
                    <Button size="sm" onClick={() => handleBookFlight(flight)}>
                      Book Now
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={activeTab === "dac-cxb" ? 9 : 10} className="text-center py-8">
                  <div className="flex flex-col items-center justify-center text-muted-foreground">
                    <Filter className="h-8 w-8 mb-2" />
                    <p>No flights found matching your filters</p>
                    <Button
                      variant="link"
                      onClick={() => {
                        setSearchTerm("")
                        setFilterAirline("all")
                        setFilterTime("all")
                      }}
                    >
                      Clear filters
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* Mobile view: Card-based flight results */}
      <div className="md:hidden space-y-4">
        {filteredFlights.length > 0 ? (
          filteredFlights.map((flight, index) => (
            <Card key={index} className="overflow-hidden">
              <CardContent className="p-0">
                {/* Airline and flight info */}
                <div className="p-4 bg-muted/20 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Image
                      src={
                        airlineLogos[flight.airline.split(" + ")[0] as keyof typeof airlineLogos] ||
                        "/placeholder.svg?height=40&width=100" ||
                        "/placeholder.svg" ||
                        "/placeholder.svg"
                      }
                      alt={flight.airline}
                      width={60}
                      height={24}
                      className="object-contain"
                    />
                    <div>
                      <div className="font-medium text-sm">{flight.airline}</div>
                      <div className="text-xs text-muted-foreground">{flight.flightNumber}</div>
                    </div>
                  </div>
                  {flight.status && (
                    <Badge
                      variant={
                        flight.status === "On Time"
                          ? "default"
                          : flight.status === "Overnight Layover"
                            ? "destructive"
                            : "secondary"
                      }
                      className="text-xs"
                    >
                      {flight.status}
                    </Badge>
                  )}
                </div>

                {/* Flight details */}
                <div className="p-4">
                  {/* Time and route */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-center">
                      <div className="text-lg font-bold">{formatTime(flight.departureTime)}</div>
                      <div className="text-xs text-muted-foreground">
                        {activeTab === "dac-cxb" ? "DAC" : activeTab === "zyl-cxb" ? "ZYL" : "SPD"}
                      </div>
                    </div>

                    <div className="flex flex-col items-center flex-1 px-2">
                      <div className="text-xs text-muted-foreground mb-1">
                        {flight.isConnecting
                          ? flight.totalDuration
                          : calculateDuration(flight.departureTime, flight.arrivalTime)}
                      </div>
                      <div className="w-full h-[1px] bg-muted-foreground/30 relative">
                        <ArrowRight className="h-3 w-3 absolute -top-1.5 right-0 text-primary" />
                        {flight.isConnecting && (
                          <div className="absolute -top-1 left-1/2 -translate-x-1/2">
                            <div className="h-2 w-2 rounded-full bg-muted-foreground/50"></div>
                          </div>
                        )}
                      </div>
                      {flight.isConnecting && (
                        <div className="text-xs text-primary mt-1">Via {flight.layoverAirport}</div>
                      )}
                    </div>

                    <div className="text-center">
                      <div className="text-lg font-bold">
                        {formatTime(
                          flight.isConnecting ? flight.transitArrivalTime.replace("Next Day ", "") : flight.arrivalTime,
                        )}
                      </div>
                      <div className="text-xs text-muted-foreground">CXB</div>
                      {flight.isConnecting && flight.transitArrivalTime.includes("Next Day") && (
                        <div className="text-xs text-primary">+1</div>
                      )}
                    </div>
                  </div>

                  {/* Layover info for connecting flights */}
                  {flight.isConnecting && (
                    <div className="bg-muted/30 p-2 rounded-md mb-3 flex items-center gap-2">
                      <Clock3 className="h-4 w-4 text-muted-foreground" />
                      <div className="text-xs">
                        <span className="font-medium">{flight.layoverDuration}</span> layover in {flight.layoverAirport}
                      </div>
                    </div>
                  )}

                  {/* Price and booking */}
                  <div className="flex items-center justify-between mt-2">
                    <div>
                      <div className="text-lg font-bold text-primary">৳{flight.price}</div>
                      <div className="text-xs text-muted-foreground">
                        {flight.aircraftType ? flight.aircraftType.split("/")[1] || flight.aircraftType : "ATR 72-600"}
                      </div>
                    </div>
                    <Button onClick={() => handleBookFlight(flight)} className="px-6">
                      Book Now
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        ) : (
          <div className="text-center py-8 bg-muted/20 rounded-lg">
            <div className="flex flex-col items-center justify-center text-muted-foreground">
              <Filter className="h-8 w-8 mb-2" />
              <p>No flights found matching your filters</p>
              <Button
                variant="link"
                onClick={() => {
                  setSearchTerm("")
                  setFilterAirline("all")
                  setFilterTime("all")
                }}
              >
                Clear filters
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* Flight count and info */}
      <div className="flex flex-col sm:flex-row justify-between items-center text-xs md:text-sm text-muted-foreground">
        <div className="mb-2 sm:mb-0">Showing {filteredFlights.length} flights</div>
        <div>Last updated: {new Date().toLocaleDateString()}</div>
      </div>
    </div>
  )
}

