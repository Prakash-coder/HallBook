import CButton from "../CButton"

function HallCard({
    name,
    capacity,
}) {
  return (
    <div>
        <div>{name}</div>
        <div>{capacity}</div>
        {/* a div for the booked events and time intervals for those events needs to go here */}
        <CButton
        id="hall details"
        type="button"
        btnDesc="View Hall Details"
        />
        <CButton
        id="Book Hall"
        type="button"
        btnDesc="Book Hall"
        />
    </div>
  )
}

export default HallCard