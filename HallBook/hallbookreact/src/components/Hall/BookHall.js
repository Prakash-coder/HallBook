import { useState } from "react";
import { useLocation } from "react-router-dom";

import HallInpput from "./HallInpput";

function BookHall() {
  const { state } = useLocation();

  const [date, setDate] = useState("");
  console.log(date);
  const handleChange = (e) => {
    setDate(e.target.value);
  };

  return (
    <>
      {console.log(state)}

      <div className="mx-auto mt-6 min-h-screen w-full max-w-4xl p-4 shadow-lg">
        <div className="text-3xl font-bold">{state.name}</div>
        <div className="text-sm text-gray-500">Capacity: {state.capacity}</div>
        <form>
          {/* date input  */}
          <HallInpput
          key = "eventDate"
          id = "eventDate"
          type = "date"
          value={date}
          isRequired = {true}
          onChange = {handleChange}
          />
          {/* date input ends here */}
        </form>
      </div>
    </>
  );
}

export default BookHall;
