import { Head } from "../Layout/Head";
import { Foot } from "../Layout/Foot";
import { Desktop_3_Section_1 } from "./Desktop_3_Section_1";
import { Desktop_3_Form } from "./Desktop_3_Form";


export function Desktop_3() {
  return (
    <>
      <Head key={"dt-1"} />
      <Desktop_3_Section_1 key={"dt-2"} />
      <section className="px-4 md:px-12 xl:px-32 py-10 md:py-20 bg-white">
        <div className="p-8 md:p-16 flex flex-col gap-y-8 border rounded-[50px] text-black shadow-xl">
          <div className="flex flex-col gap-y-4 mt-5">
            <h1 className="text-xl xxs:text-2xl xs:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">
              Let us find your next{" "}
              <span className="text-[#33B2C7]">A Player.</span>
            </h1>
            <p className="text-base xs:text-lg md:text-xl lg:text-2xl">
              Fill out this form and we'll setup a time to talk.
            </p>
          </div>
          <Desktop_3_Form key={"dt-3"} />
        </div>
      </section>
      <Foot key={"dt-4"} />
    </>
  );
}
