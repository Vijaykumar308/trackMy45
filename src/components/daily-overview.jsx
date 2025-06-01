import { useContext } from "react"
import { stateManagerContext } from "../utlis/StateManager"

export default function DailyOverview() {
  const {globalState, setGlobalState} = useContext(stateManagerContext);

  console.log('in dailyoverview: ',globalState);

  //   const handleDelete = (indexToDelete) => {
  //   const updatedTimes = globalState?.weeklyTime?.filter((_, index) => index !== indexToDelete);
  //   setGlobalState({
  //     weeklyTime: updatedTimes
  //   });
  // };

   const handleDelete = (indexToDelete) => {
    const weeklyTimeList = JSON.parse(JSON.stringify(globalState?.weeklyTime))
    console.log('in function:',weeklyTimeList);
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
        
        globalState?.weeklyTime?.map((day,index) => (
          <div key={index} className="relative text-center p-2 border border-gray-100 rounded-md">
            {/* <div className="text-xs text-gray-500">{day.date}</div> */}
            <div className="font-medium">{day}</div>

             <button
                onClick={() => handleDelete(index)}
                className="absolute top-1 right-2 text-gray-400 hover:text-red-500 text-sm font-bold cursor-pointer"
              >
                ×
              </button>

            <div className="text-xs text-orange-500">under</div>
          </div>
        ))}
      </div>
    </div>
  )
}
