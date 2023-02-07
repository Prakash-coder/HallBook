import CButton from "../CButton"
import {useNavigate } from "react-router-dom"





function HallCard({
    name,
    capacity,
}) {

  const hall = {name,capacity}

  const navigate = useNavigate()

  const navigateToHall = (hall) => {
    console.log("navigating to hall details")
    console.log(hall)
    let path = `/halldetail/${hall.name}`
    navigate(path,{state:hall})
  }

  

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
        onClick = {() => navigateToHall(hall)}
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