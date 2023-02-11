import { useLocation } from "react-router-dom"


function BookHall() {

    const {state} = useLocation();

  return (
    <>
    {console.log(state)}
    
    <div className="mx-auto mt-6 min-h-screen w-full max-w-4xl p-4 shadow-lg">
        <div className="text-3xl font-bold">{state.name}</div>
        <div className="text-sm text-gray-500">Capacity: {state.capacity}</div>
      </div>
    </>
  )
}

export default BookHall