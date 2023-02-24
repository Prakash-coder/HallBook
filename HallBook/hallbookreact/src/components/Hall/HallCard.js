import CButton from "../CButton";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import DateFilter from "../Time/DateFilter";

function getBookedIntervals(booking) {
  const bookedIntervals = [];
  for (const interval in booking) {
    if (booking[interval]) {
      
      const {user,event} = booking[interval]
      bookedIntervals.push({interval,user,event});
    }
  }
  return bookedIntervals;
}

// function getUnbookedIntervals(bookedIntervals){
//   const unbookedIntervals = [];
//   const earliestStart = 6
//   const latestEnd = 18;

//   const firstStartHour = parseInt(bookedIntervals[0].split(':')[0]);
//   console.log("firstStartHour",firstStartHour)
//   for (let start = earliestStart;start < firstStartHour;start++){
//     const end = start + 1;
//     const interval = `${start.toString().padStart(2, '0')}:00-${end.toString().padStart(2, '0')}:00`;
//     console.log(interval)
//     unbookedIntervals.push(interval)
//   }

//   // const latestEndHour = parseInt(bookedIntervals[bookedIntervals.length-1].split(':')[0]);
//   // console.log("latestEndHour",latestEndHour)
//   // for (let end = latestEndHour;end < latestEnd;end++ ){
//   //   const start = end+1;
//   //   const interval = `${start.toString().padStart(2, '0')}:00-${end.toString().padStart(2, '0')}:00`;
//   //   console.log(interval)
//   //   unbookedIntervals.push(interval)
//   // }
// }

// function getUnbookedIntervals(bookedIntervals) {
//   const unbookedIntervals = [];
//   const earliestStart = 6;
//   const latestEnd = 18;

//   let lastEndHour = earliestStart;

//   //for each bookedInterval
//   for (let i = 0; i < bookedIntervals.length; i++) {
//     const interval = bookedIntervals[i];
//     // console.log(interval.split('-')[0].split(':'))
//     //getting the start hour and end hour for the interval
//     const [startHour, startMinute] = interval
//       .split("-")[0]
//       .split(":")
//       .map(Number);
//     const [endHour, endMinute] = interval.split("-")[1].split(":").map(Number);
//     // console.log(startHour,startMinute,endHour,endMinute)

//     //generate intervals of 1 hour up to the start time of the current booked interval
//     for (let hour = lastEndHour; hour < startHour; hour++) {
//       const intervalStart = `${hour.toString().padStart(2, "0")}:00`;
//       const intervalEnd = `${(hour + 1).toString().padStart(2, "0")}:00`;
//       unbookedIntervals.push(`${intervalStart}-${intervalEnd}`);
//     }

//     lastEndHour = endHour;
//     let intervalStart = `${startHour.toString().padStart(2, "0")}:${startMinute
//       .toString()
//       .padStart(2, "0")}`;
//     while (
//       intervalStart !==
//       `${endHour.toString().padStart(2, "0")}:${endMinute
//         .toString()
//         .padStart(2, "0")}`
//     ) {
//       const intervalEndHour = intervalStart.split(":")[0];
//       const intervalEndMinute =
//         intervalStart.split(":")[1] === "30" ? "00" : "30";
//       const intervalEnd = `${intervalEndHour}:${intervalEndMinute}`;
//       unbookedIntervals.push(`${intervalStart}-${intervalEnd}`);
//       intervalStart = intervalEnd;
//     }
//   }

//   for (let hour = lastEndHour; hour < latestEnd; hour++) {
//     const intervalStart = `${hour.toString().padStart(2, "0")}:00`;
//     const intervalEnd = `${(hour + 1).toString().padStart(2, "0")}:00`;
//     unbookedIntervals.push(`${intervalStart}-${intervalEnd}`);
//   }

//   console.log(unbookedIntervals);
// }

function getUnbookedIntervals(bookedIntervals) {
  console.log(bookedIntervals);
}

function HallCard({ id, name, capacity, slides, bookings }) {
  const hall = { id, name, capacity, slides };

  const navigate = useNavigate();

  const navigateToHall = (hall) => {
    console.log("navigating to hall details");
    let path = `/halldetail/${hall.name}`;
    navigate(path, { state: { ...hall } });
  };

  const navigateToBookHall = (hall) => {
    console.log("navigating to book hall");
    let path = `/bookhall/${hall.name}`;
    navigate(path, { state: { ...hall } });
  };

  //for date filer component
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);

  function handleDateChange(e, dateValid) {
    let date = e.target.value;
    if (dateValid) {
      setDate(date);
    }
  }

  let bookedIntervals = getBookedIntervals(bookings[date]);
  console.log(bookedIntervals)

  let unbookedIntervals = getUnbookedIntervals(bookedIntervals);

  // console.log(Object.keys(bookings[date]))
  // for (const [key,value] of Object.entries(bookings[date])){
  //   console.log(key,value)
  // }
  return (
    <div className="rounded-lg shadow-lg">
      <div className="flex h-80 w-full flex-col gap-4 p-2">
        <div>
          <div className="flex items-center justify-between">
            <div className="text-3xl font-bold">{name}</div>
            <div>
              <DateFilter
                id={id}
                name={name}
                date={date}
                handleChange={handleDateChange}
              />
            </div>
          </div>
          <div className="text-sm text-gray-500">Capacity: {capacity}</div>
        </div>
        {/* a div for the booked events and time intervals for those events needs to go here */}
        <div className="text-cprimary-800 p-2">
          <p>Booked Time Periods</p>
          <ul>
          {bookedIntervals.map((interval)=>(
            <li>{interval.interval}</li>
          ))}
          </ul>
        </div>
        <div className="flex flex-col gap-6 md:flex-row">
          <CButton
            id="hall details"
            type="button"
            btnDesc="View Hall Details"
            onClick={() => navigateToHall(hall)}
          />

          <CButton
            id="Book Hall"
            type="button"
            btnDesc="Book Hall"
            onClick={() => navigateToBookHall(hall)}
          />
        </div>
      </div>
    </div>
  );
}

export default HallCard;
