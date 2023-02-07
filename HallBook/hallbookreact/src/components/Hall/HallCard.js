import CButton from "../CButton"

function handleHallClick(){
  console.log("clicked")
}


function HallCard({
    name,
    capacity,
}) {
  return (
    <div className="shadow-lg rounded-lg">
    <div className="flex flex-col w-full h-80 p-2">
        <div className="text-3xl font-bold">{name}</div>
        <div className="text-sm text-gray-500">{capacity}</div>
        {/* a div for the booked events and time intervals for those events needs to go here */}
        <div className="flex flex-col md:flex-row gap-6">

        <CButton
        id="hall details"
        type="button"
        btnDesc="View Hall Details"
        onClick = {handleHallClick}
        />

        <CButton
        id="Book Hall"
        type="button"
        btnDesc="Book Hall"
        />

        </div>
    </div>
    </div>
  )
}

export default HallCard