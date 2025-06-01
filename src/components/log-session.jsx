import { useState } from "react"

export default function LogSession() {
  const [hours, setHours] = useState("00")
  const [minutes, setMinutes] = useState("00")
  const [seconds, setSeconds] = useState("00")

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold mb-6">Log New Session</h2>
      <div className="flex justify-center items-center space-x-2 mb-8">
        <div className="text-center">
          <input
            type="text"
            value={hours}
            onChange={(e) => setHours(e.target.value)}
            className="w-16 text-center text-2xl border border-gray-300 rounded py-2"
          />
          <div className="text-sm text-gray-500 mt-1">Hours</div>
        </div>
        <div className="text-3xl text-gray-400">:</div>
        <div className="text-center">
          <input
            type="text"
            value={minutes}
            onChange={(e) => setMinutes(e.target.value)}
            className="w-16 text-center text-2xl border border-gray-300 rounded py-2"
          />
          <div className="text-sm text-gray-500 mt-1">Minutes</div>
        </div>
        <div className="text-3xl text-gray-400">:</div>
        <div className="text-center">
          <input
            type="text"
            value={seconds}
            onChange={(e) => setSeconds(e.target.value)}
            className="w-16 text-center text-2xl border border-gray-300 rounded py-2"
          />
          <div className="text-sm text-gray-500 mt-1">Seconds</div>
        </div>
      </div>
      <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-md font-medium">
        Add Session
      </button>
    </div>
  )
}
