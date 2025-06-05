import { useEffect, useState, useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import {
  DARK_BG_COLOR,
  LIGHT_BG_COLOR,
  DARK_TEXT_COLOR,
  LIGHT_TEXT_COLOR,
  DARK_BORDER_COLOR,
  LIGHT_BORDER_COLOR,
  DARK_LINK_COLOR,
  LIGHT_LINK_COLOR,
} from "../utlis/constants";

function Footer() {
  const [nextYear, setNextYear] = useState("");
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    const date = new Date().getFullYear() + 1;
    setNextYear(date);
  }, []);

  // Choose classes based on theme from constants
  const bgColor = theme === "dark" ? DARK_BG_COLOR : LIGHT_BG_COLOR;
  const textColor = theme === "dark" ? DARK_TEXT_COLOR : LIGHT_TEXT_COLOR;
  const borderColor = theme === "dark" ? DARK_BORDER_COLOR : LIGHT_BORDER_COLOR;
  const linkColor = theme === "dark" ? DARK_LINK_COLOR : LIGHT_LINK_COLOR;

  return (
    <footer className={`${bgColor} ${textColor} border-t ${borderColor} py-6`}>
      <div className="max-w-screen-xl mx-auto px-4 text-center space-y-2">
        <p className={`text-sm md:text-base`}>
          Powered by{" "}
          <span className={`font-semibold ${theme === "dark" ? "text-white" : "text-black"}`}>
            Vijay Kumar
          </span>
        </p>
        <p className={`text-sm md:text-base`}>
          Get Contact @{" "}
          <a href="mailto:jwvijaykumar@gmail.com" className={`${linkColor} hover:underline`}>
            jwvijaykumar@gmail.com
          </a>
        </p>
        <p className={`text-xs md:text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}>
          &copy; 2025–{nextYear} All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
