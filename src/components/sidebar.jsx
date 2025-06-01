"use client"

import { useState } from "react"
import { LayoutDashboard, History, BarChart2, Settings, HelpCircle, User } from "lucide-react"

export default function Sidebar() {
  const [activeItem, setActiveItem] = useState("dashboard")

  const menuItems = [
    { id: "dashboard", icon: LayoutDashboard, label: "Dashboard" },
    // { id: "history", icon: History, label: "History" },
    // { id: "reports", icon: BarChart2, label: "Reports" },
    { id: "settings", icon: Settings, label: "Settings" },
    { id: "help", icon: HelpCircle, label: "Help" },
  ]

  return (
    <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center">
          <div className="h-8 w-8 bg-orange-500 rounded-md flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 8V12L15 15" stroke="white" strokeWidth="2" strokeLinecap="round" />
              <circle cx="12" cy="12" r="9" stroke="white" strokeWidth="2" />
            </svg>
          </div>
          <span className="ml-2 text-xl font-semibold">FocusFlow</span>
        </div>
      </div>
      <nav className="flex-1 pt-4">
        <ul>
          {menuItems.map((item) => (
            <li key={item.id}>
              <a
                href="#"
                className={`flex items-center px-6 py-3 text-sm ${
                  activeItem === item.id ? "bg-blue-500 text-white" : "text-gray-600 hover:bg-gray-100"
                }`}
                onClick={() => setActiveItem(item.id)}
              >
                <item.icon className="h-5 w-5 mr-3" />
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="p-4 border-t border-gray-200">
        <a href="#" className="flex items-center text-sm text-gray-600 hover:text-gray-900">
          <User className="h-5 w-5 mr-3" />
          User Profile
        </a>
      </div>
    </div>
  )
}
