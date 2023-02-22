import CButton from "../CButton";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const HallInpputClass = `hallinputclass `;

function maxDate() {
  const today = new Date();
  const res = new Date(today.getTime() + 10 * 24 * 3600 * 1000);
  return res.toISOString().slice(0, 10);
}

function minDate() {
  let result = new Date().toISOString().split("T")[0];

  return result;
}

const minDateVal = minDate();
const maxDateVal = maxDate();

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

function HallCard({ id, name, capacity, slides }) {
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

  const [date, setDate] = useState("");


  function handleDateChange(e){
    let date = e.target.value
    if(checkDateValidity(date)){
      setDate(date)
    }
  }

  return (
    <div className="rounded-lg shadow-lg">
      <div className="flex h-80 w-full flex-col gap-4 p-2">
        <div>
          <div className="flex items-center justify-between">
            <div className="text-3xl font-bold">{name}</div>
            <div>
              <div className="my-0">
                <label>
                  <div>
                    <input
                      id={`${id}date`}
                      name={`${name}date`}
                      value={date}
                      required={false}
                      type="date"
                      className={HallInpputClass}
                      onChange={handleDateChange}
                      min={minDateVal}
                      max={maxDateVal}
                    />
                  </div>
                </label>
              </div>
            </div>
          </div>
          <div className="text-sm text-gray-500">{capacity}</div>
        </div>
        {/* a div for the booked events and time intervals for those events needs to go here */}
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
