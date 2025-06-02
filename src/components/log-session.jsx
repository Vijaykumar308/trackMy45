import { useContext, useState } from "react";
import { MAX_HOUR_TIME, MAX_MINUNTS_TIME, MAX_SECONDS_TIME } from "../utlis/constants";
import { stateManagerContext } from "../utlis/StateManager";

export default function LogSession() {
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");

  const { globalState, setGlobalState } = useContext(stateManagerContext);

  const handleAddSession = (hours = 0, minutes = 0, seconds = 0) => {
    if (!hours && !minutes && !seconds) {
      alert("Input not found");
      return;
    }

    const newEntry = `${hours}:${minutes}:${seconds}`;
    const updatedList = [...(globalState.weeklyTime || []), newEntry];

    setGlobalState({ weeklyTime: updatedList });

    // Reset input fields
    setHours("");
    setMinutes("");
    setSeconds("");
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold mb-6">Log New Session</h2>
      <div className="flex justify-center items-center space-x-2 mb-8">
        <div className="text-center">
          <input
            type="text"
            placeholder="00"
            value={hours}
            onChange={(e) =>
              setHours((prev) => (e.target.value <= MAX_HOUR_TIME ? e.target.value : prev))
            }
            className="w-16 text-center text-2xl border border-gray-300 rounded py-2"
          />
          <div className="text-sm text-gray-500 mt-1">Hours</div>
        </div>
        <div className="text-3xl text-gray-400 mb-8">:</div>
        <div className="text-center">
          <input
            type="text"
            placeholder="00"
            value={minutes}
            onChange={(e) =>
              setMinutes((prev) => (e.target.value <= MAX_MINUNTS_TIME ? e.target.value : prev))
            }
            className="w-16 text-center text-2xl border border-gray-300 rounded py-2"
          />
          <div className="text-sm text-gray-500 mt-1">Minutes</div>
        </div>
        <div className="text-3xl text-gray-400 mb-8">:</div>
        <div className="text-center">
          <input
            type="text"
            placeholder="00"
            value={seconds}
            onChange={(e) =>
              setSeconds((prev) => (e.target.value <= MAX_SECONDS_TIME ? e.target.value : prev))
            }
            className="w-16 text-center text-2xl border border-gray-300 rounded py-2"
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
