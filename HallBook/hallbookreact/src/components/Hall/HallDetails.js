import { useLocation } from "react-router-dom"


function HallDetails() {

    const {state} = useLocation();

  return (

    <>
    {console.log(state)}
    <div>{state.name}</div>
    <div>{state.capacity}</div>
    </>
  )
}

export default HallDetails