import "./Desktop_3_Section_1.css";
import Desktop_3_icon1 from '../../assets/Desktop_3_icon1.png'

export function Desktop_3_Section_1() {
  return (
    <section className="desktop_3_section_1 flex flex-row w-screen h-[210px] xxs:h-[280px] md:h-[430px] lg:h-[650px] relative">
      <div className="flex flex-col justify-evenly md:justify-center w-[80%] xxs:w-[70%] md:w-[75%] lg:w-[55%] xl:w-[45%] px-6 md:px-14 lg:px-28 gap-y-3 md:gap-y-6 z-0 text-[#0F3248]">
        <div className="flex flex-col md:gap-2">
          <h2 className="text-xl xss:text-2xl md:text-4xl font-medium relative">
            We find the
            <img src={Desktop_3_icon1} className="w-[32px] md:w-[46px] absolute top-[150%] md:top-[100%] xl:top-0 -right-[23%] xxs:-right-[38%] md:-right-[23%] lg:-right-[123%]" />
            </h2>
          <h1 className="text-2xl xss:text-3xl md:text-5xl font-bold">
            <span className="text-[#0F3248]">Prefect</span> Person
          </h1>
          <h2 className="text-2xl xss:text-3xl md:text-5xl font-medium">
            to join your team.
          </h2>
        </div>
        <p className="text-xs xss:text-sm md:text-lg lg:text-xl xl:text-2xl text-justify font-normal">
          We sell the person with the ideal skillset on your company and your
          role so you can make the hire and then get back to doing what you do
          best.
        </p>
      </div>
    </section>
  );
}
