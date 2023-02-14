import React, { useState } from "react";



function checkStartTimeValid(timeVal) {
  const allowedMinTime = new Date();
  allowedMinTime.setHours(6, 0);
  const allowedMaxTime = new Date();
  allowedMaxTime.setHours(17, 29);
  let [hoursVal, minutesVal] = timeVal.split(":");
  let inputDate = new Date();
  inputDate.setHours(hoursVal, minutesVal);
  if (inputDate >= allowedMinTime && inputDate <= allowedMaxTime) {
    return true;
  } else {
    return false;
  }
}

function TimePicker() {
  const [startTime, setStartTime] = useState("06:00");
  const [startTimeValid, setStartTimeValid] = useState(true);

  const handleStartTimeChange = (e) => {
    let tempStartTime = e.target.value;
    if (checkStartTimeValid(tempStartTime)) {
      setStartTime(tempStartTime);
      setStartTimeValid(true);
    } else {
      setStartTime("");
      setStartTimeValid(false);
    }
  };
  return (
    <div>
      <label>
        <span>Event Start Time:</span>
        <input
          type="time"
          id="eventStartTime"
          name="eventStartTime"
          required
          value={startTime}
          onChange={handleStartTimeChange}
          min="06:00"
          max="17:00"
          pattern="[0-9]{2}:[0-9]{2}"
          list="startHours"
        />
        <span>{startTimeValid ? "valid time" : "invalid time"}</span>
        {/* <span class="validity"></span> */}
      </label>

      {/* the sugggestion for the start hours */}
      <datalist id="startHours">
        <option value="06:00"></option>
        <option value="07:00"></option>
        <option value="08:00"></option>

        <option value="09:00"></option>
        <option value="10:00"></option>
        <option value="11:00"></option>
        <option value="12:00"></option>
        <option value="13:00"></option>

        <option value="14:00"></option>
        <option value="15:00"></option>
        <option value="16:00"></option>
        <option value="17:00"></option>
      </datalist>
    </div>
  );
}

export default TimePicker;
