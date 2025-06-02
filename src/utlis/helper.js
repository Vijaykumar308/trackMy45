export const isValidInput = (e, compareWith) => {
    const allowedKeys = [
        "Backspace", "Delete", "ArrowLeft", "ArrowRight", "Tab", "Enter"
      ];

      const currentValue = e.target.value;
      // Allow navigation and control keys
      if (allowedKeys.includes(e.key)) return;

      if (currentValue >= compareWith) {
        e.preventDefault();
      }
}

export const sumTimes = (timeArray)  => {
  if(!timeArray) return;
    let totalSeconds = 0;

    for (const time of timeArray) {
        const parts = time.split(':').map(Number).reverse();
        let seconds = 0;

        if (parts.length > 0) seconds += parts[0];         // SS
        if (parts.length > 1) seconds += parts[1] * 60;     // MM
        if (parts.length > 2) seconds += parts[2] * 3600;   // HH

        totalSeconds += seconds;
    }

    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return [
        String(hours).padStart(2, '0'),
        String(minutes).padStart(2, '0'),
        String(seconds).padStart(2, '0')
    ].join(':');
}

export function compareTotalTime(totalTime, noOfDays, shiftHoursPerDay = "9:00:00") {
    const totalAllowedSeconds = parseTimeToSeconds(shiftHoursPerDay) * noOfDays; // globalState?.weeklyTime?.length;
    const totalTimeSeconds = parseTimeToSeconds(totalTime);

    if (totalTimeSeconds > totalAllowedSeconds) {
        return subtractTimes(totalTimeSeconds, totalAllowedSeconds) + " (over) ";
    } else if (totalTimeSeconds < totalAllowedSeconds) {
        return subtractTimes(totalAllowedSeconds, totalTimeSeconds) + " (less)";
    } else {
        return subtractTimes(totalAllowedSeconds, totalAllowedSeconds);
    }
}




export function parseTimeToSeconds(timeStr) {
    const parts = timeStr?.split(':').map(Number).reverse();
    let seconds = 0;

    if (parts?.length > 0) seconds += parts[0];         // SS
    if (parts?.length > 1) seconds += parts[1] * 60;     // MM
    if (parts?.length > 2) seconds += parts[2] * 3600;   // HH

    return seconds;
}

function formatSecondsToTime(seconds) {
    if (seconds < 0) seconds = 0;

    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    return [
        String(hrs).padStart(2, '0'),
        String(mins).padStart(2, '0'),
        String(secs).padStart(2, '0')
    ].join(':');
}

export function subtractTimes(time1, time2) {
    const total1 = time1;
    const total2 = time2;
    const diff = total1 - total2;

    return formatSecondsToTime(diff);
}


