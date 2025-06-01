export default function DailyOverview() {
  const days = [
    { date: "May 26", day: "Mon", hours: 0, minutes: 0 },
    { date: "May 27", day: "Tue", hours: 0, minutes: 0 },
    { date: "May 28", day: "Wed", hours: 0, minutes: 0 },
    { date: "May 29", day: "Thu", hours: 0, minutes: 0 },
    { date: "May 30", day: "Fri", hours: 0, minutes: 0 },
    { date: "May 31", day: "Sat", hours: 0, minutes: 0 },
    { date: "Jun 1", day: "Sun", hours: 0, minutes: 0 },
  ]

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold mb-6">Daily Overview</h2>
      <div className="grid grid-cols-4 gap-6">
        {days.map((day) => (
          <div key={day.date} className="text-center p-2 border border-gray-100 rounded-md">
            <div className="text-xs text-gray-500">{day.date}</div>
            <div className="font-medium">{day.day}</div>
            <div className="flex items-center justify-center mt-2">
              <span className="text-yellow-500">⦿</span>
            </div>
            <div className="font-semibold mt-1">
              {day.hours}h {day.minutes}m
            </div>
            <div className="text-xs text-orange-500">under</div>
          </div>
        ))}
      </div>
    </div>
  )
}
