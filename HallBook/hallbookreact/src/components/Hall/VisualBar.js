import React from "react";
const { parse, differenceInMilliseconds } = require("date-fns");

function getDuration(intervals) {
  const intervalTimes = intervals.map((interval) => {
    const [start, end] = interval.split("-");
    return {
      start: parse(start, "H:mm", new Date()),
      end: parse(end, "H:mm", new Date()),
    };
  });
  const durations = [];
  intervalTimes.forEach((item) => {
    const { start, end } = item;
    const duration = differenceInMilliseconds(end, start);
    durations.push(duration);
  });
  return durations;
}

function getWidth(durations) {
  const totalDuration = Number(43200000);
  const widthArr = durations.map((item) => {
    const width = Math.round((item / totalDuration));
    return width;
  });
  return widthArr;
}

function VisualBar({ bookedIntervals, unbookedIntervals, sortedAllIntervals }) {
  let durations = getDuration(sortedAllIntervals);
  let widthArr = getWidth(durations);

  return (
    <div className="w-full h-10 border border-b-gray-800 flex gap-4">
      {widthArr.map((item) => (
        <div key={item} className={`bg-green-500 max-w-[50px] h-4 block z-10`}></div>
      ))}
    </div>
  );
}

export default VisualBar;
