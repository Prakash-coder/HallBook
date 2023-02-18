import { useState } from "react";
import { useLocation } from "react-router-dom";
import DatePicker from "../Time/DatePicker";
import TimePicker from "../Time/TimePicker";
import HallFIle from "./HallFIle";
import HallInput from "./HallInput";
import HallInputFields from "./HallInputFields";
import HallTextArea from "./HallTextArea";

const loginBtnClass = `relative  block rounded-lg bg-blue-500 px-6 py-4 text-base 
font-medium uppercase leading-tight text-white shadow-md  transition duration-150 ease-in-out hover:bg-blue-700
hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none
focus:ring-0 active:bg-blue-800 active:shadow-lg  md:py-3`;

function BookHall() {
  const { state } = useLocation();

  let inputFieldsState = {};

  HallInputFields.forEach((hallField) => (inputFieldsState[hallField.id] = ""));

  const [inputState, setInputState] = useState(inputFieldsState);

  const handleChange = (e) => {
    setInputState({ ...inputState, [e.target.id]: e.target.value });
  };

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

          {/* event manager,organizing club,event name,email,phone number */}
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
                minLength={hallField.minLength}
                maxLength={hallField.maxLength}
              />
            ))}
          </div>
          {/* ends here */}

          {/* brief event description */}
          <HallTextArea />

          <HallFIle />

          <button className={loginBtnClass} type="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default BookHall;
