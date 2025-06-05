import { useContext, useState } from "react"
import {
  LayoutDashboard,
  Settings,
  HelpCircle,
  ChevronLeft,
  ChevronRight,
  Menu,
  X,
} from "lucide-react"
import { ThemeContext } from "../contexts/ThemeContext"
import {
  DARK_BG_COLOR,
  LIGHT_BG_COLOR,
  DARK_TEXT_COLOR,
  LIGHT_TEXT_COLOR,
  DARK_BORDER_COLOR,
  LIGHT_BORDER_COLOR
} from "../utlis/constants"

export default function Sidebar() {
  const [activeItem, setActiveItem] = useState("dashboard")
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  const { theme } = useContext(ThemeContext)

  const menuItems = [
    { id: "dashboard", icon: LayoutDashboard, label: "Dashboard" },
    { id: "settings", icon: Settings, label: "Settings" },
    { id: "help", icon: HelpCircle, label: "Help" },
  ]

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed)
  }

  const toggleMobile = () => {
    setIsMobileOpen(!isMobileOpen)
  }

  const bgColor = theme === "dark" ? DARK_BG_COLOR : LIGHT_BG_COLOR
  const textColor = theme === "dark" ? DARK_TEXT_COLOR : LIGHT_TEXT_COLOR

  const borderColor = theme === "dark" ? DARK_BORDER_COLOR : LIGHT_BORDER_COLOR;

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={toggleMobile}
        className={`md:hidden fixed top-1 left-2 z-50 p-2 rounded-md ${LIGHT_BG_COLOR} border ${borderColor} shadow-sm hover:bg-gray-50 hover:text-black focus:outline-none focus:ring-2 focus:ring-gray-200`}
        aria-label="Toggle mobile menu"
      >
        {isMobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleMobile}
        />
      )}

      {/* Sidebar */}
      <div
        className={`border-r ${borderColor} flex flex-col transition-all duration-300 ease-in-out
          fixed md:relative inset-y-0 left-0 z-40
          ${isMobileOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
          ${isCollapsed ? "md:w-16" : "md:w-64"}
          w-64
          ${bgColor} ${textColor}`}
      >
        {/* Header */}
        <div className={`p-4 border-b ${borderColor}`}>
          <div className="flex items-center justify-between">
            <div className={`flex items-center ${isCollapsed ? "md:justify-center md:w-full" : ""}`}>
              <div className="h-8 w-8 bg-orange-500 rounded-md flex items-center justify-center flex-shrink-0">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 8V12L15 15"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <circle cx="12" cy="12" r="9" stroke="white" strokeWidth="2" />
                </svg>
              </div>
              {(!isCollapsed || window.innerWidth < 768) && (
                <span className="ml-2 text-xl font-semibold whitespace-nowrap">Office Clockr</span>
              )}
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className={`flex-1 pt-4 ${bgColor}`}>
          <ul>
            {menuItems.map((item) => (
              <li key={item.id}>
                <a
                  href="#"
                  className={`flex items-center py-3 text-sm transition-colors ${
                    activeItem === item.id
                      ? "bg-blue-500 text-white"
                      : `${textColor} hover:bg-gray-200 hover:text-black`
                  } ${isCollapsed ? "md:justify-center md:px-3" : "px-6"}`}
                  onClick={() => {
                    setActiveItem(item.id)
                    if (window.innerWidth < 768) {
                      setIsMobileOpen(false)
                    }
                  }}
                  title={isCollapsed ? item.label : ""}
                >
                  <item.icon
                    className={`h-5 w-5 flex-shrink-0 ${
                      isCollapsed ? "md:mr-0" : "mr-3"
                    }`}
                  />
                  <span className={`${isCollapsed ? "md:hidden" : ""}`}>{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Footer with collapse button */}
        <div
          className={`p-4 border-t ${borderColor} ${
            isCollapsed ? "md:flex md:justify-center" : ""
          }`}
        >
          <button
            onClick={toggleSidebar}
            className={`hidden md:flex items-center w-full text-sm hover:text-gray-900 hover:bg-gray-100 rounded-md p-2 transition-colors ${
              textColor
            }`}
            aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            {isCollapsed ? (
              <ChevronRight className="h-5 w-5 mx-auto" />
            ) : (
              <>
                <ChevronLeft className="h-5 w-5 mr-3 flex-shrink-0" />
                <span>Collapse</span>
              </>
            )}
          </button>
        </div>
      </div>
    </>
  )
}
