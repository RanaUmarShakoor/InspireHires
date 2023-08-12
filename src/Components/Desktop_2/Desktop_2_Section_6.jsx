import { useState } from "react";
import arrow_down_img from "../../assets/arrow_down.png";

const data = [
  {
    title: "Is there any cost to me?",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book in it",
  },
  {
    title: "How will I know if I have been selected for the job?",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book in it",
  },
  {
    title: "What is the length of the Contract?",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book in it",
  },
  {
    title: "How long will I stay on the job (if selected)?",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book in it",
  },
  {
    title: "When do you pay?",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book in it",
  },
  {
    title: "Am I paid relocation expenses?",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book in it",
  },
];

export function Desktop_2_Section_6() {
  let count = 1;
  return (
    <section className="p-10 flex flex-col gap-y-10 bg-[#1B1D32] text-white">
      <h1 className="md:text-3xl lg:text-5xl font-bold text-center">
        Frequently Asked Questions
      </h1>
      <article className="flex flex-col items-center justify-center gap-7">
        {data.map((elem) => (
          <AccordionX key={"accordion-" + count++} info={elem} />
        ))}
        <button
          type="button"
          className="text-bold text-lg xxs:text-lx md:text-2xl"
        >
          Learn More +
        </button>
      </article>
    </section>
  );
}

export function AccordionX({ info }) {
  const [isOpen, setisOpen] = useState(false);

  function clickHandler() {
    setisOpen(!isOpen);
  }

  return (
    <div className="flex flex-col w-full md:w-4/5">
      <div className="flex justify-between py-5 md:px-8 lg:px-20 border-b-2 border-white">
        <p className="flex-1 md:text-lg lg:text-2xl">{info.title}</p>
        <button
          onClick={clickHandler}
          className="flex items-center justify-center w-7 h-7 mr-2 rounded-full bg-[#33B2C7]"
        >
          <img src={arrow_down_img} className="w-6 h-6" />
        </button>
      </div>
      {isOpen ? (
        <div className=" p-5 xl:text-xl text-white bg-[#1B1D32] border-b border-[#33B2C7] block ">
          {info.description}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
