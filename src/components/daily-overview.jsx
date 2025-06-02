import { useContext } from "react"
import { stateManagerContext } from "../utlis/StateManager"
import { compareTotalTime } from "../utlis/helper";

export default function DailyOverview() {
  const {globalState, setGlobalState} = useContext(stateManagerContext);

  const handleDelete = (indexToDelete) => {
    const weeklyTimeList = JSON.parse(JSON.stringify(globalState?.weeklyTime))
    const updatedWeeklyList = weeklyTimeList?.filter((_, idx) => idx !== indexToDelete);

   setGlobalState({
      weeklyTime: updatedWeeklyList
    });
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold mb-6">Daily Overview</h2>
      <div className="grid grid-cols-4 gap-6">
        {
          globalState?.weeklyTime?.length === 0 ? "No Data"  :
        
        globalState?.weeklyTime?.map((time,index) => (
          <div key={index} className="relative text-center p-2 border border-gray-100 rounded-md">
            {/* <div className="text-xs text-gray-500">{time.date}</div> */}
            <div className="font-medium">{time}</div>

             <button
                onClick={() => handleDelete(index)}
                className="absolute top-1 right-2 text-gray-400 hover:text-red-500 text-sm font-bold cursor-pointer"
              >
                ×
              </button>

            <div className="text-xs text-orange-500">{compareTotalTime(time, 1)}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
