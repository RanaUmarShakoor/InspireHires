import { useState } from "react";
import arrow_down_img from "../../assets/arrow_down.png";

export function myAccordion({info}) {
  const [isOpen, setisOpen] = useState(false);

  function clickHandler() {
    setisOpen(!isOpen);
  }

  return (
    <div className="flex flex-col w-4/5">
      <div className="flex justify-between py-5 px-20 border-b-2 border-white">
        <p className="text-2xl">{info.title}</p>
        <button
          onClick={clickHandler}
          className="flex items-center justify-center w-7 h-7 rounded-full bg-[#4CAF50] active:scale-95 hover:bg-[#3e8e41]"
        >
          <img src={arrow_down_img} className="w-6 h-6" />
        </button>
      </div>
      {isOpen ? (
        <div className=" p-5 text-xl text-[#1B1D32] bg-white block rounded-b-2xl">
          {info.description}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
