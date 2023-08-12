import { useState } from "react";

export function Desktop_3_Input_1(props) {
  const [value, setValue] = useState("");
  function inputHandler(event){
    setValue(event.target.value);
    props.onAddData(event.target.value);
  }

  return (
    <div className="text-lg xs:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
      <label className=" font-semibold text-[#383838]">
        {props.label}
      </label>
      <input
        type="text"
        value={value}
        onChange={inputHandler}
        required
        className="h-10 xxs:h-12 md:h-14 lg:h-16 xl:h-20 px-4 md:px-8 mt-2 md:mt-4 mb-4 md:mb-8 border border-[#D0D0D2] rounded-lg w-full"
      />
    </div>
  );
}
