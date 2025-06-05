import { useContext, useState } from "react";
import { Search, HelpCircle, Bell, Settings, Moon, Sun } from "lucide-react";
import RandomTagline from "./Taglines";
import { ThemeContext } from "../contexts/ThemeContext";
import {
  DARK_BG_COLOR,
  LIGHT_BG_COLOR,
  DARK_TEXT_COLOR,
  LIGHT_TEXT_COLOR,
  LIGHT_BORDER_COLOR,
  DARK_BORDER_COLOR
} from "../utlis/constants";

export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const bgColor = theme === "dark" ? DARK_BG_COLOR : LIGHT_BG_COLOR;
  const textColor = theme === "dark" ? DARK_TEXT_COLOR : LIGHT_TEXT_COLOR;

  const borderColor = theme === "dark" ? DARK_BORDER_COLOR : LIGHT_BORDER_COLOR;

  return (
    <header className={`${bgColor} border-b ${borderColor} py-2 md:py-3 px-3 md:px-4`}>
      <div className="flex items-center justify-between">
        {/* Tagline / Logo */}
        <div className="hidden md:block relative">
          <RandomTagline />
        </div>

        {/* Mobile Search */}
        {isSearchOpen && (
          <div className="md:hidden flex-1 relative flex items-center">
            <input
              type="text"
              placeholder="Search sessions..."
              className={`w-full pl-10 pr-4 py-1.5 rounded-md border ${DARK_BORDER_COLOR} focus:outline-none focus:ring-2 focus:ring-blue-500 ${textColor} ${bgColor}`}
              autoFocus
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <button
              className={`ml-2 ${textColor} hover:text-gray-700`}
              onClick={() => setIsSearchOpen(false)}
            >
              <span className="text-sm font-medium">Cancel</span>
            </button>
          </div>
        )}

        {/* Icons and Avatar */}
        <div
          className={`flex items-center ${
            isSearchOpen ? "hidden md:flex" : "space-x-2 md:space-x-4"
          }`}
        >
          <button
            onClick={toggleTheme}
            className={`p-1 ${textColor} hover:text-gray-700`}
          >
            {theme === "light" ? (
              <Moon className="h-5 w-5" />
            ) : (
              <Sun className="h-5 w-5" />
            )}
          </button>

          <button className={`p-1 ${textColor} hover:text-gray-700`}>
            <HelpCircle className="h-5 w-5" />
          </button>
          <button className={`p-1 ${textColor} hover:text-gray-700`}>
            <Bell className="h-5 w-5" />
          </button>
          <button className={`p-1 ${textColor} hover:text-gray-700`}>
            <Settings className="h-5 w-5" />
          </button>

          <div className="h-8 w-8 rounded-full bg-orange-500 flex items-center justify-center text-white">
            <span className="text-sm font-medium">VJ</span>
          </div>
        </div>
      </div>
    </header>
  );
}
