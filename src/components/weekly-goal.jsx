export default function WeeklyGoal() {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold text-center mb-4">Weekly Goal Progress</h2>
      <div className="flex justify-center items-end space-x-2 mb-4">
        <div className="text-5xl font-bold">00</div>
        <div className="text-2xl text-gray-500 mb-1">h</div>
        <div className="text-5xl font-bold">00</div>
        <div className="text-2xl text-gray-500 mb-1">m</div>
      </div>
      <p className="text-center text-gray-500 mb-6">Logged out of 45 hours goal</p>
      <div className="bg-gray-100 h-2 rounded-full">
        <div className="bg-orange-500 h-2 rounded-full w-0"></div>
      </div>
      <p className="text-center text-orange-500 mt-2 text-sm">Under goal (0.0%)</p>
    </div>
  )
}
