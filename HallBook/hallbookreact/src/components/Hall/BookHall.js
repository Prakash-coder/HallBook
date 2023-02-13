
import { useLocation } from "react-router-dom";
import DatePicker from "../DatePicker";



function BookHall() {
  const { state } = useLocation();

  return (
    <>
      <div className="mx-auto mt-6 min-h-screen w-full max-w-4xl p-4 shadow-lg">
        <div className="text-3xl font-bold">{state.name}</div>
        <div className="text-sm text-gray-500">Capacity: {state.capacity}</div>
        <form>
          {/* date input  */}
          <DatePicker />
          {/* date input ends here */}
          
        </form>
      </div>
    </>
  );
}

export default BookHall;
