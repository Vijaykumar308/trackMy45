export const isValidInput = (e, compareWith) => {
    const allowedKeys = [
        "Backspace", "Delete", "ArrowLeft", "ArrowRight", "Tab", "Enter"
      ];

      const currentValue = e.target.value;
      console.log(currentValue);
      // Allow navigation and control keys
      if (allowedKeys.includes(e.key)) return;

      if (currentValue >= compareWith) {
        e.preventDefault();
      }
}

export const sumTimes = (timeArray)  => {
  if(!timeArray) return;
    let totalSeconds = 0;

    console.log(timeArray);

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


function parseTimeToSeconds(timeStr) {
    const parts = timeStr.split(':').map(Number).reverse();
    let seconds = 0;

    if (parts.length > 0) seconds += parts[0];         // SS
    if (parts.length > 1) seconds += parts[1] * 60;     // MM
    if (parts.length > 2) seconds += parts[2] * 3600;   // HH

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

function subtractTimes(time1, time2) {
    const total1 = parseTimeToSeconds(time1);
    const total2 = parseTimeToSeconds(time2);
    const diff = total1 - total2;

    return formatSecondsToTime(diff);
}
