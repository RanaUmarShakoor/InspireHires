import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Desktop_3_Input_1 } from "./Desktop_3_Input";

let count = 1;

export function Desktop_3_Form() {
  const navigate = useNavigate();
  const [text, setText] = useState("");
  let fname = "";
  let email = "";
  let company = "";
  let opening=""

  function fnameHandler(value) {
    fname = value;
  }

  function emailHandler(value) {
    email = value;
  }

  function companyHandler(value) {
    company = value;
  }

  function openingPositionHandler(value) {
    opening = value;
  }

  function textHandler(event) {
    setText(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();

    const newData = {
      first_name: fname,
      email: email,
      company: company,
      opening_position: opening,
      moreDetail: text,
    };

    console.log(newData);
    navigate('../');
  }

  function clickHandler(){
    navigate('../job_form');
  }

  return (
    <form onSubmit={submitHandler}>
      <Desktop_3_Input_1
        key={count++}
        onAddData={fnameHandler}
        label="First Name"
      />
      <Desktop_3_Input_1 key={count++} label="Email" onAddData={emailHandler}/>
      <Desktop_3_Input_1 key={count++} label="Company URL" onAddData={companyHandler} />
      <Desktop_3_Input_1
        key={count++}
        label="Position(s) you'd like to hire for"
        onAddData={openingPositionHandler}
      />
      <div className="text-lg xs:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
        <label className="font-semibold text-[#383838]">
          More detail about your company and the position:
        </label>
        <textarea
          value={text}
          onChange={textHandler}
          className="h-60 px-4 py-4 md:px-8 mt-2 md:mt-4 mb-4 md:mb-8 border border-[#D0D0D2] rounded-lg w-full"
        />
      </div>
      <blockquote className="text-base xxs:text-lg md:text-xl lg:text-2xl xl:text-3xl text-[#383838] ">
        Note: This form is for hiring managers only, if you're an individual
        looking for a new role click
        <a onClick={clickHandler} className="underline font-bold hover:cursor-pointer">here</a>.
      </blockquote>
      <button type="submit" className="w-[100px] sm:w-[120px] lg:w-[20%] h-[50px] md:h-[50px] lg:h-[65px] xl:h-[82px] my-8 text-white text-xs sm:text-sm lg:text-xl font-bold rounded-lg md:rounded-2xl lg:rounded-[20px] border-none bg-[#33B2C7] ">
        Get Started
      </button>
    </form>
  );
}
