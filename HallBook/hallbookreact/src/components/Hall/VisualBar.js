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
    const width = Number(Math.round((item / totalDuration) * 100));
    return width;
  });
  return widthArr;
}

function VisualBar({ bookedIntervals, unbookedIntervals, sortedAllIntervals }) {
  let durations = getDuration(sortedAllIntervals);

  let widthArr = getWidth(durations);

  console.log(widthArr);

  const divs = widthArr.map((item, index) => (
    <div
      key={index}
      className={`w-${item} m-2 h-4 flex-grow bg-green-600 rounded-lg`}
      style={{ flexBasis: `${item}%` }}
    ></div>
  ));

  return (
    

    <div className="flex">{divs}</div>

    
  );
}

export default VisualBar;
