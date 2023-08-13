import { useState } from "react";
import arrow_down_img from "../../assets/arrow_down.png";

export function AccordionX({ info }) {
  const [isOpen, setisOpen] = useState(false);

  function clickHandler() {
    setisOpen(!isOpen);
  }

  let accordionClasses = "";
  accordionClasses = isOpen
    ? "max-h-[300px] h-[50] px-5 xl:text-xl text-white bg-[#1B1D32] border-b border-[#33B2C7] transition-height ease-in-out duration-1000"
    : "max-h-0 px-5 xl:text-xl text-white bg-[#1B1D32] border-b border-[#33B2C7] transition-height ease-in-out duration-1000";

  return (
    <div className="flex flex-col w-full md:w-4/5 overflow-hidden">
      <div className="flex justify-between py-5 md:px-8 lg:px-20 border-b-2 border-white">
        <p className="flex-1 md:text-lg lg:text-2xl">{info.title}</p>
        <button
          onClick={clickHandler}
          className="flex items-center justify-center w-7 h-7 mr-2 rounded-full bg-[#33B2C7]"
        >
          <img src={arrow_down_img} className="w-6 h-6" />
        </button>
      </div>
      <div className={accordionClasses}>
        <div className="py-5">{info.description}</div>
      </div>
    </div>
  );
}
