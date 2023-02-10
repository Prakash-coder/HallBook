import { useLocation } from "react-router-dom";
import ImageSlider from "../ImageSlider";

function HallDetails() {
  const { state } = useLocation();

  return (
    <>
      {console.log(state)}
      <div className="mt-2 mx-auto min-h-screen w-full p-4 shadow-md">
        <div className="text-3xl font-bold">{state.name}</div>
        <div className="text-sm text-gray-500">Capacity: {state.capacity}</div>
        <div className="w-full h-96 mt-6">
          <ImageSlider slides={state.slides}/>
        </div>
      </div>
    </>
  );
}

export default HallDetails;
