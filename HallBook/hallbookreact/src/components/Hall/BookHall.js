import { useLocation } from "react-router-dom"


function BookHall() {

    const {state} = useLocation();

  return (
    <>
    {console.log(state)}
    <div>{state.name}</div>
    <div>{state.capacity}</div>
    </>
  )
}

export default BookHall