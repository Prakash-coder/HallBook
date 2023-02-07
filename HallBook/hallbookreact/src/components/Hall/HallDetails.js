import { useLocation } from "react-router-dom"


function HallDetails() {

    const location = useLocation

  return (

    <>
    {console.log(location.state.name)}
    </>
  )
}

export default HallDetails