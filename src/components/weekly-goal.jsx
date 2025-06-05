import { useContext, useEffect, useState } from "react";
import { stateManagerContext } from "../utlis/StateManager";
import { compareTotalTime, sumTimes } from "../utlis/helper";
import {
  DARK_BG_COLOR,
  LIGHT_BG_COLOR,
  DARK_TEXT_COLOR,
  LIGHT_TEXT_COLOR,
} from "../utlis/constants";
import { ThemeContext } from "../contexts/ThemeContext";

export default function WeeklyGoal() {
  const { globalState } = useContext(stateManagerContext);
  const { theme } = useContext(ThemeContext);

  const totalTime = sumTimes(globalState?.weeklyTime || "00");
  const [timeStatusDesc, setTimeStatusDescp] = useState("");

  let numberOfDays;
  useEffect(() => {
    numberOfDays = globalState?.weeklyTime?.length || 0;
    const timeStatus = compareTotalTime(totalTime, numberOfDays);
    setTimeStatusDescp(timeStatus);
  }, [totalTime]);

  const bgColor = theme === "dark" ? DARK_BG_COLOR : LIGHT_BG_COLOR;
  const textColor = theme === "dark" ? DARK_TEXT_COLOR : LIGHT_TEXT_COLOR;
  const descColor = theme === "dark" ? "text-orange-400" : "text-orange-500";
  const mutedText = theme === "dark" ? "text-gray-400" : "text-gray-500";
  const borderColor = theme === "dark" ? "border-gray-700" : "border-gray-200";

  return (
    <div className={`${bgColor} ${textColor} rounded-lg shadow p-6 border ${borderColor}`}>
      <h2 className="text-xl font-semibold text-center mb-4">Weekly Goal Progress</h2>
      <div className="flex justify-center items-end space-x-2 mb-4">
        <div className="text-5xl font-bold">{totalTime}</div>
      </div>
      <p className={`text-center ${mutedText} mb-6`}>
        Logged out of 45 hours goal
      </p>
      {/* Uncomment and style progress bar if needed */}
      {/* <div className="bg-gray-100 h-2 rounded-full">
          <div className="bg-orange-500 h-2 rounded-full w-0"></div>
      </div> */}
      <p className={`text-center ${descColor} mt-2 text-xl font-bold`}>
        {timeStatusDesc}
      </p>
    </div>
  );
}
