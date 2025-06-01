import { MoreHorizontal } from "lucide-react"

export default function RecentSessions() {
  const sessions = [
    { id: 1, time: "08:30:00", date: "Oct 23 at 09:00 AM" },
    { id: 2, time: "07:45:00", date: "Oct 23 at 05:30 PM" },
    { id: 3, time: "06:15:00", date: "Oct 22 at 10:15 AM" },
    { id: 4, time: "09:10:00", date: "Oct 22 at 06:00 PM" },
    { id: 5, time: "07:00:00", date: "Oct 21 at 08:45 AM" },
  ]

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold mb-6">Recent Sessions</h2>
      <div className="space-y-4">
        {sessions.map((session) => (
          <div key={session.id} className="flex items-center justify-between py-2 border-b border-gray-100">
            <div>
              <div className="font-medium">{session.time}</div>
              <div className="text-sm text-gray-500">{session.date}</div>
            </div>
            <button className="text-gray-400 hover:text-gray-600">
              <MoreHorizontal className="h-5 w-5" />
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
