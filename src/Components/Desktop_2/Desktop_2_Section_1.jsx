import { useNavigate } from "react-router-dom";
import "./Desktop_2_Section_1.css";

export function Desktop_2_Section_1() {
  const navigate = useNavigate();

  function clickHandler(){
    navigate('./services')
  }

  return (
    <section className="desktop_2_section_1 flex flex-row w-screen h-[300px] xxs:h-[400px] md:h-[500px] lg:h-[650px] relative">
      <article className="flex flex-col justify-center w-[100%] md:w-[75%] lg:w-[55%] xl:w-[45%] px-6 md:px-14 lg:px-28 gap-y-3 md:gap-y-6 z-0 text-white">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl md:text-4xl font-medium ">We find the</h2>
          <h1 className="text-3xl md:text-5xl font-bold">
            <span className="text-[#0F3248]">Prefect</span> Person
          </h1>
          <h2 className="text-3xl md:text-5xl font-medium">to join your team.</h2>
        </div>
        <p className="text-sm md:text-lg text-justify font-normal">
          We sell the person with the ideal skillset on your company and your
          role so you can make the hire and then get back to doing what you do
          best.
        </p>
        <button onClick={clickHandler} className="w-1/3 py-3 text-xs xxs:text-sm font-bold rounded-[20px] bg-[#33B2C7]">
          Get Started
        </button>
      </article>
    </section>
  );
}
