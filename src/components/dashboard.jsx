import { useContext } from "react";
import Sidebar from "./sidebar";
import Header from "./header";
import LogSession from "./log-session";
import WeeklyGoal from "./weekly-goal";
import DailyOverview from "./daily-overview";
import Footer from "./Footer";
import { ThemeContext } from "../contexts/ThemeContext";
import { DARK_BG_COLOR, LIGHT_BG_COLOR, DARK_TEXT_COLOR, LIGHT_TEXT_COLOR } from "../utlis/constants";

export default function Dashboard() {
  const { theme } = useContext(ThemeContext);

  const bgColor = theme === "dark" ? DARK_BG_COLOR : LIGHT_BG_COLOR;
  const textColor = theme === "dark" ? DARK_TEXT_COLOR : LIGHT_TEXT_COLOR;

  return (
    <div className={`flex h-screen ${bgColor} ${textColor}`}>
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <LogSession />
            <WeeklyGoal />
            {/* <WeeklyActivity /> */}
            {/* <RecentSessions /> */}
            {/* <QuickAdd /> */}
          </div>
          <DailyOverview />
        </main>
        <Footer />
      </div>
    </div>
  );
}
