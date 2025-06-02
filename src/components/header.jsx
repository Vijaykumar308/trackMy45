"use client"

import { Search, HelpCircle, Bell, Settings } from "lucide-react"
import { useState } from "react"

export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  return (
    <header className="bg-white border-b border-gray-200 py-2 md:py-3 px-3 md:px-4">
      <div className="flex items-center justify-between">
        {/* Desktop Search - Hidden on mobile */}
        <div className="hidden md:block relative w-64">
          <input
            type="text"
            placeholder="Search sessions..."
            className="w-full pl-10 pr-4 py-1.5 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
        </div>

        {/* Mobile Search Button - Only visible when search is not open */}
        {!isSearchOpen && (
          <button className="md:hidden text-gray-500 hover:text-gray-700" onClick={() => setIsSearchOpen(true)}>
            <Search className="h-5 w-5" />
          </button>
        )}

        {/* Mobile Search Input - Only visible when search is open */}
        {isSearchOpen && (
          <div className="md:hidden flex-1 relative flex items-center">
            <input
              type="text"
              placeholder="Search sessions..."
              className="w-full pl-10 pr-4 py-1.5 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              autoFocus
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <button className="ml-2 text-gray-500 hover:text-gray-700" onClick={() => setIsSearchOpen(false)}>
              <span className="text-sm font-medium">Cancel</span>
            </button>
          </div>
        )}

        {/* Icons and Avatar - Hidden when search is open on mobile */}
        <div className={`flex items-center ${isSearchOpen ? "hidden md:flex" : "space-x-2 md:space-x-4"}`}>
          <button className="text-gray-500 hover:text-gray-700 p-1">
            <HelpCircle className="h-5 w-5" />
          </button>
          <button className="text-gray-500 hover:text-gray-700 p-1">
            <Bell className="h-5 w-5" />
          </button>
          <button className="text-gray-500 hover:text-gray-700 p-1">
            <Settings className="h-5 w-5" />
          </button>
          <div className="h-8 w-8 rounded-full bg-orange-500 flex items-center justify-center text-white">
            <span className="text-sm font-medium">VJ</span>
          </div>
        </div>
      </div>
    </header>
  )
}
