import { useContext } from "react";
import { stateManagerContext } from "../utlis/StateManager";
import { compareTotalTime } from "../utlis/helper";
import {
  DARK_BG_COLOR,
  LIGHT_BG_COLOR,
  DARK_TEXT_COLOR,
  LIGHT_TEXT_COLOR,
} from "../utlis/constants";
import { ThemeContext } from "../contexts/ThemeContext";

export default function DailyOverview() {
  const { globalState, setGlobalState } = useContext(stateManagerContext);
  const { theme } = useContext(ThemeContext);

  const bgColor = theme === "dark" ? DARK_BG_COLOR : LIGHT_BG_COLOR;
  const textColor = theme === "dark" ? DARK_TEXT_COLOR : LIGHT_TEXT_COLOR;
  const borderColor = theme === "dark" ? "border-gray-700" : "border-gray-200";
  const mutedText = theme === "dark" ? "text-gray-400" : "text-gray-500";
  const deleteHoverColor = theme === "dark" ? "hover:text-red-400" : "hover:text-red-500";
  const highlightColor = theme === "dark" ? "text-orange-400" : "text-orange-500";

  const handleDelete = (indexToDelete) => {
    const weeklyTimeList = JSON.parse(JSON.stringify(globalState?.weeklyTime));
    const updatedWeeklyList = weeklyTimeList?.filter((_, idx) => idx !== indexToDelete);

    setGlobalState({
      weeklyTime: updatedWeeklyList,
    });
  };

  return (
    <div className={`${bgColor} ${textColor} rounded-lg shadow p-6 mt-7 border ${borderColor}`}>
      <h2 className="text-xl font-semibold mb-6">Daily Overview</h2>
      <div className="grid grid-cols-4 gap-6">
        {globalState?.weeklyTime?.length === 0 ? (
          <div className={`${mutedText} col-span-4 text-center`}>No Data</div>
        ) : (
          globalState?.weeklyTime?.map((time, index) => (
            <div
              key={index}
              className={`relative text-center p-2 rounded-md border ${borderColor} ${bgColor}`}
            >
              {/* <div className="text-xs text-gray-500">{time.date}</div> */}
              <div className="font-medium">{time}</div>

              <button
                onClick={() => handleDelete(index)}
                className={`absolute top-1 right-2 ${textColor} ${deleteHoverColor} text-sm font-bold cursor-pointer`}
                aria-label={`Delete session ${index + 1}`}
              >
                ×
              </button>

              <div className={`text-xs ${highlightColor}`}>{compareTotalTime(time, 1)}</div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
