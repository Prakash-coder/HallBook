import CButton from "../CButton";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import DateFilter from "../Time/DateFilter";

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


  //for date filer component
  const [date, setDate] = useState(new Date().toISOString().split("T")[0] );

  function handleDateChange(e, dateValid) {
    let date = e.target.value;
    if (dateValid) {
      setDate(date);
    }
  }

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
