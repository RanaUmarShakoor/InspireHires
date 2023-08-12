import { Card_1, Card_2 } from "./Card";
import card_1_img from "../../assets/page2_card1_img.png";
import card_2_img from "../../assets/page2_card2_img.png";
import card_3_img from "../../assets/page2_card3_img.png";

export function Desktop_2_Section_2(){
    return (
        <section className="p-4 xxs:p-6 md:p-10 flex flex-col gap-y-6 xxs:gap-y-10 bg-[#1B1D32]">
        <h1 className="text-xl xxs:text-2xl md:text-4xl xl:text-5xl font-bold text-white text-center">
          We Provide the Best Jobs
        </h1>
        <article className="flex flex-col lg:flex-row justify-center gap-4 md:gap-7">
          <div className="flex justify-center lg:justify-end w-full gap-4 md:gap-7">
            <Card_2
              imgSrc={card_1_img}
              title={"SEO/SEM"}
              description={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              }
            />
            <Card_1
              imgSrc={card_2_img}
              title={"Marketing"}
              description={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              }
            />
          </div>
          <div className="flex justify-center lg:justify-start w-full gap-4 md:gap-7">
            <Card_1
              bg={1}
              imgSrc={card_3_img}
              title={"Viral Campaign"}
              description={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              }
            />
            <Card_1
              imgSrc=""
              title={"Other"}
              description={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              }
            />
          </div>
        </article>
      </section>
    );
}