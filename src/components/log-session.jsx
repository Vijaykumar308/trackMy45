import { useContext, useState } from "react";
import {
  MAX_HOUR_TIME,
  MAX_MINUNTS_TIME,
  MAX_SECONDS_TIME,
  DARK_BG_COLOR,
  LIGHT_BG_COLOR,
  DARK_TEXT_COLOR,
  LIGHT_TEXT_COLOR,
} from "../utlis/constants";
import { stateManagerContext } from "../utlis/StateManager";
import { ThemeContext } from "../contexts/ThemeContext";

export default function LogSession() {
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");

  const { globalState, setGlobalState } = useContext(stateManagerContext);
  const { theme } = useContext(ThemeContext);

  const bgColor = theme === "dark" ? DARK_BG_COLOR : LIGHT_BG_COLOR;
  const textColor = theme === "dark" ? DARK_TEXT_COLOR : LIGHT_TEXT_COLOR;
  const inputBg = theme === "dark" ? "bg-gray-700 border-gray-600" : "bg-white border-gray-300";

  const handleAddSession = (hours = 0, minutes = 0, seconds = 0) => {
    if (!hours && !minutes && !seconds) {
      alert("Input not found");
      return;
    }

    const newEntry = `${hours}:${minutes}:${seconds}`;
    const updatedList = [...(globalState.weeklyTime || []), newEntry];

    setGlobalState({ weeklyTime: updatedList });

    setHours("");
    setMinutes("");
    setSeconds("");
  };

  return (
    <div className={`${bgColor} ${textColor} border border-gray-700 rounded-lg shadow-xl p-6`}>
      <h2 className="text-xl font-semibold mb-6">Log New Session</h2>
      <div className="flex justify-center items-center space-x-2 mb-8">
        {/* Hours */}
        <div className="text-center">
          <input
            type="text"
            placeholder="00"
            value={hours}
            onChange={(e) =>
              setHours((prev) => (e.target.value <= MAX_HOUR_TIME ? e.target.value : prev))
            }
            className={`w-16 text-center text-2xl rounded py-2 border ${inputBg} ${textColor}`}
          />
          <div className="text-sm text-gray-500 mt-1">Hours</div>
        </div>
        <div className="text-3xl text-gray-400 mb-8">:</div>

        {/* Minutes */}
        <div className="text-center">
          <input
            type="text"
            placeholder="00"
            value={minutes}
            onChange={(e) =>
              setMinutes((prev) => (e.target.value <= MAX_MINUNTS_TIME ? e.target.value : prev))
            }
            className={`w-16 text-center text-2xl rounded py-2 border ${inputBg} ${textColor}`}
          />
          <div className="text-sm text-gray-500 mt-1">Minutes</div>
        </div>
        <div className="text-3xl text-gray-400 mb-8">:</div>

        {/* Seconds */}
        <div className="text-center">
          <input
            type="text"
            placeholder="00"
            value={seconds}
            onChange={(e) =>
              setSeconds((prev) => (e.target.value <= MAX_SECONDS_TIME ? e.target.value : prev))
            }
            className={`w-16 text-center text-2xl rounded py-2 border ${inputBg} ${textColor}`}
          />
          <div className="text-sm text-gray-500 mt-1">Seconds</div>
        </div>
      </div>

      <button
        className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 cursor-pointer rounded-md font-medium"
        onClick={() => handleAddSession(hours, minutes, seconds)}
      >
        Add Session
      </button>
    </div>
  );
}
