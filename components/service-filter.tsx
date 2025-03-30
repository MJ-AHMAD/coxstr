"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"

interface ServiceFilterProps {
  onFilterChange: (filters: {
    search: string
    priceRange: [number, number]
    category: string
    sortBy: string
  }) => void
}

export default function ServiceFilter({ onFilterChange }: ServiceFilterProps) {
  const [search, setSearch] = useState("")
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 30000])
  const [category, setCategory] = useState("all")
  const [sortBy, setSortBy] = useState("recommended")

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
    updateFilters(e.target.value, priceRange, category, sortBy)
  }

  const handlePriceChange = (value: number[]) => {
    const newRange: [number, number] = [value[0], value[1]]
    setPriceRange(newRange)
    updateFilters(search, newRange, category, sortBy)
  }

  const handleCategoryChange = (value: string) => {
    setCategory(value)
    updateFilters(search, priceRange, value, sortBy)
  }

  const handleSortChange = (value: string) => {
    setSortBy(value)
    updateFilters(search, priceRange, category, value)
  }

  const updateFilters = (
    searchValue: string,
    priceRangeValue: [number, number],
    categoryValue: string,
    sortByValue: string,
  ) => {
    onFilterChange({
      search: searchValue,
      priceRange: priceRangeValue,
      category: categoryValue,
      sortBy: sortByValue,
    })
  }

  const resetFilters = () => {
    setSearch("")
    setPriceRange([0, 30000])
    setCategory("all")
    setSortBy("recommended")
    onFilterChange({
      search: "",
      priceRange: [0, 30000],
      category: "all",
      sortBy: "recommended",
    })
  }

  return (
    <div className="rounded-lg border bg-card p-4 shadow-sm">
      <div className="space-y-4">
        <div>
          <Label htmlFor="search">Search Services</Label>
          <Input id="search" placeholder="Enter service name..." value={search} onChange={handleSearchChange} />
        </div>

        <div>
          <Label className="mb-2 block">
            Price Range: ৳{priceRange[0]} - ৳{priceRange[1]}
          </Label>
          <Slider
            defaultValue={[0, 30000]}
            max={30000}
            step={1000}
            value={[priceRange[0], priceRange[1]]}
            onValueChange={handlePriceChange}
            className="py-4"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="category">Category</Label>
            <Select value={category} onValueChange={handleCategoryChange}>
              <SelectTrigger id="category">
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="transportation">Transportation</SelectItem>
                <SelectItem value="accommodation">Accommodation</SelectItem>
                <SelectItem value="dining">Dining</SelectItem>
                <SelectItem value="guided-tours">Guided Tours</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="sort">Sort By</Label>
            <Select value={sortBy} onValueChange={handleSortChange}>
              <SelectTrigger id="sort">
                <SelectValue placeholder="Recommended" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="recommended">Recommended</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="popularity">Popularity</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <Button variant="outline" size="sm" onClick={resetFilters} className="w-full">
          Reset Filters
        </Button>
      </div>
    </div>
  )
}

