import Sidebar from "./sidebar"
import Header from "./header"
import LogSession from "./log-session"
import WeeklyGoal from "./weekly-goal"
import DailyOverview from "./daily-overview"
import WeeklyActivity from "./weekly-activity"
import RecentSessions from "./recent-sessions"
import QuickAdd from "./quick-add"
import Footer from "./Footer"

export default function Dashboard() {

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <LogSession />
            <WeeklyGoal />
            <DailyOverview  />
            {/* <WeeklyActivity /> */}
            {/* <RecentSessions /> */}
            <QuickAdd />
          </div>
        </main>
            <Footer />
      </div>
    </div>
  )
}
