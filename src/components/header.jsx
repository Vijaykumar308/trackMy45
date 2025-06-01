import { Search, HelpCircle, Bell, Settings } from "lucide-react"

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 py-3 px-4">
      <div className="flex items-center justify-between">
        <div className="relative w-64">
          <input
            type="text"
            placeholder="Search sessions..."
            className="w-full pl-10 pr-4 py-1.5 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
        </div>
        <div className="flex items-center space-x-4">
          <button className="text-gray-500 hover:text-gray-700">
            <HelpCircle className="h-5 w-5" />
          </button>
          <button className="text-gray-500 hover:text-gray-700">
            <Bell className="h-5 w-5" />
          </button>
          <button className="text-gray-500 hover:text-gray-700">
            <Settings className="h-5 w-5" />
          </button>
          <div className="h-8 w-8 rounded-full bg-orange-500 flex items-center justify-center text-white">
            <span className="text-sm font-medium">JP</span>
          </div>
        </div>
      </div>
    </header>
  )
}
