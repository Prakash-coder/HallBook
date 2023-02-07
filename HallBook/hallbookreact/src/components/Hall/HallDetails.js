import { useLocation } from "react-router-dom"


function HallDetails() {

    const {state} = useLocation();

  return (

    <>
    {console.log(state)}
    </>
  )
}

export default HallDetails