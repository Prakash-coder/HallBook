import React, { useState } from "react";

const HallInpputClass = `w-full max-w-sm appearance-none 
                rounded-md border border-cprimary-500 px-4 py-3
                text-cprimary-800 placeholder-gray-500
                shadow-sm focus:z-10 focus:border-blue-500 focus:shadow-lg
                focus:outline-none focus:ring-purple-500 sm:text-base
                 md:w-2/6`;

function maxDate() {
  const today = new Date();
  let day = String(today.getDate() + 10); //selectable upto 10 days
  let month = String(today.getMonth() + 1);
  let year = String(today.getFullYear());

  if (parseInt(month, 10) < 10) {
    month = "0" + month.toString();
  }
  if (parseInt(day, 10) < 10) {
    day = "0" + day.toString();
  }
  console.log(`${year}-${month}-${day}`);
  return `${year}-${month}-${day}`;
}

function minDate() {
  let result = new Date().toISOString().split("T")[0];
  console.log(result);
  return result;
}

//   maybe use useeffect to call only once
const minDateVal = minDate();
const maxDateVal = maxDate();

//to check if the input date is valid
//used to mitigate the issue of the date being typed in by user
function checkDateValidity(date) {
  const allowedMaxDate = new Date(maxDate());
  const allowedMinDate = new Date(minDate());
  const inputDate = new Date(date);
  if (inputDate >= allowedMinDate && inputDate <= allowedMaxDate) {
    return true;
  } else {
    return false;
  }
}

function DatePicker() {
  const [date, setDate] = useState("");
  const [dateValid, setDateValid] = useState(true);

  const handleChange = (e) => {
    let date = e.target.value;
    if (checkDateValidity(date)) {
      setDate(date);
      setDateValid(true);
    } else {
      setDateValid(false);
    }
  };

  return (
    <div className="my-8">
      <label className="flex items-center gap-4">
        <span className="text-md font-bold ">Date:</span>
        <input
          id="eventDate"
          name="eventDate"
          type="date"
          value={date}
          required={true}
          onChange={handleChange}
          className={HallInpputClass}
          min={minDateVal}
          max={maxDateVal}
        ></input>
        <span>{dateValid ? "valid date" : "not valid date"}</span>
      </label>
    </div>
  );
}

export default DatePicker;
