import React from "react";

const HallInpputClass = `w-full max-w-sm appearance-none 
                rounded-md border border-cprimary-500 px-4 py-3
                text-cprimary-800 placeholder-gray-500
                shadow-sm focus:z-10 focus:border-blue-500 focus:shadow-lg
                focus:outline-none focus:ring-purple-500 sm:text-base
                  `;

function HallInput({
  labelText,
  id,
  name,
  type,
  inputmode,
  pattern,
  value,
  isRequired,
  placeholder,
  customClass,
  handleChange,
  optionList,
  optionListName,
  minLength,
  maxLength
}) {
  
  

  return (

    
    <div className="my-6 max-w-[500px]">
      <label className="flex items-center gap-4">
        <span className="text-base font-bold ">{labelText}</span>
        <input
          id={id}
          name={name}
          type={type}
          inputMode={inputmode}
          value={value}
          required={isRequired}
          onChange={handleChange}
          className={HallInpputClass + customClass}
          placeholder={placeholder}
          pattern={pattern}
          list={optionListName}
          minLength={minLength}
          maxLength={maxLength}
        ></input>
        <span></span>
      </label>
      {
        optionList == null ? null: (
          <datalist id={optionListName}>
            {optionList.map((option) => (
              <option key = {option} value={option}></option>
            ))}
          </datalist>
        )
      }
      
    </div>
  );
}

export default HallInput;
