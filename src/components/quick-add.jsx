export default function QuickAdd() {
  const timeOptions = [
    { duration: "15m", label: "15m" },
    { duration: "30m", label: "30m" },
    { duration: "1h", label: "1h" },
    { duration: "2h", label: "2h" },
    { duration: "4h", label: "4h" },
    { duration: "8h", label: "8h" },
  ]

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold mb-6">Quick Add</h2>
      <div className="grid grid-cols-3 gap-3">
        {timeOptions.map((option) => (
          <button
            key={option.duration}
            className="py-3 px-4 border border-gray-200 rounded-md hover:bg-gray-50 font-medium"
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  )
}
