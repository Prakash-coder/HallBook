import { useState } from "react";
import { useLocation } from "react-router-dom";
import DatePicker from "../Time/DatePicker";
import TimePicker from "../Time/TimePicker";
import HallInput from "./HallInput";
import HallInputFields from "./HallInputFields";


function BookHall() {
  const { state } = useLocation();

  let inputFieldsState = {"eventManager":""}

  HallInputFields.forEach((hallField) =>(inputFieldsState[hallField.id]=''))

  

  const [inputState,setInputState] = useState(inputFieldsState);

  const handleChange = (e) => {
    setInputState({...inputState,[e.target.id]:e.target.value})
  }
  

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.value);
  };

  return (
    <>
      <div className="mx-auto mt-6 min-h-screen w-full max-w-4xl p-4 shadow-lg">
        <div className="text-3xl font-bold">{state.name}</div>
        <div className="text-sm text-gray-500">Capacity: {state.capacity}</div>
        <form onSubmit={handleSubmit}>

          {/* date input  */}
          <DatePicker />
          {/* date input ends here */}
          
          {/*  time input */}
          <TimePicker></TimePicker>
          {/* time input ends here */}

          {/* event manager */}
          <div>
            {HallInputFields.map((hallField) => (
              <HallInput
              key={hallField.id}
              labelText={hallField.labelText}
              id={hallField.id}
              name={hallField.name}
              type={hallField.type}
              inputmode={hallField.inputmode}
              pattern={hallField.pattern}
              isRequired={hallField.isRequired}
              placeholder={hallField.placeholder}
              handleChange={handleChange}
              value={inputState[hallField.id]}
              optionList={hallField.optionList}
              optionListName={hallField.optionListName}
              minLength = {hallField.minLength}
              maxLength = {hallField.maxLength}
              />
            ))}
          </div>

          {/* <HallInput
          key="eventManager"
          labelText="Event Manager Name:"
          id="eventManager"
          name="eventManager"
          type="text"
          value={inputState["eventManager"]}
          isRequired={true}
          placeholder="Event Manager"
          handleChange={handleChange}
          /> */}



          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default BookHall;
