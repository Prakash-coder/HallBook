import React from "react";

const HallInpputClass = `w-full max-w-sm appearance-none 
                rounded-md border border-cprimary-500 px-4 py-3
                text-cprimary-800 placeholder-gray-500
                shadow-sm focus:z-10 focus:border-blue-500 focus:shadow-lg
                focus:outline-none focus:ring-purple-500 sm:text-base
                 md:w-2/6`;

function HallInpput(props) {
  return (
    
      <div className="my-8">
        <label className="flex items-center gap-4">
          <span className="text-md font-bold ">Date:</span>
          <input
            id={props.id}
            name={props.name}
            type={props.type}
            value={props.value}
            required={props.isRequired}
            onChange={props.onChange}
            className={HallInpputClass}
          ></input>
        </label>
      </div>
    
  );
}

export default HallInpput;
