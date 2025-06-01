export default function WeeklyActivity() {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold mb-6">Weekly Activity</h2>
      <div className="h-48 flex items-end justify-between">
        {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, index) => (
          <div key={day} className="flex flex-col items-center">
            <div className="w-8 bg-gray-100 rounded-t-sm" style={{ height: `${Math.random() * 20}%` }}></div>
            <div className="text-xs text-gray-500 mt-2">{day}</div>
          </div>
        ))}
      </div>
      <div className="flex justify-between mt-2">
        {[0, 1, 2, 3, 4].map((num) => (
          <div key={num} className="text-xs text-gray-500">
            {num}
          </div>
        ))}
      </div>
    </div>
  )
}
