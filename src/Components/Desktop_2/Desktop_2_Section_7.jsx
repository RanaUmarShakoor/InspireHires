import { useNavigate } from "react-router-dom";
import round_img from "../../assets/page2_round_img.png"

export function Desktop_2_Section_7() {
  const navigate = useNavigate();

  function clickHandler(){
    navigate('./services')
  }

  return (
    <section className="flex w-screen mt-12 mb-48">
      <article className="flex flex-col-reverse md:flex-row w-full bg-white border drop-shadow-lg relative">
        <div className="flex-1 flex h-[300px] md:h-auto w-full md:w-1/2 items-end bg-white">
            <div className="h-[280px] w-[280px] xxs:h-[330px] xxs:w-[330px] md:h-[390px] md:w-[390px] lg:h-[480px] lg:w-[480px] xl:h-[550px] xl:w-[550px] mt-[5%] md:absolute -left-[5%] bg-[#0000000D] rounded-full"></div>
            <img src={round_img} className="xxs:w-[85%] md:w-[430px] lg:w-[530px] xl:w-[620px] -bottom-[5%] md:-bottom-[13%] xl:-bottom-[18%] -left-[8%] absolute drop-shadow-lg" />
        </div>
        <div className="flex-1 flex flex-col gap-y-5 xl:gap-y-7 py-10 px-4 lg:ps-10 lg:pe-14 xl:pe-24">
          <h1 className="text-xl lg:text-2xl xl:text-3xl font-bold text-[#1B1D32]">
            Simple Solution!
          </h1>
          <p className="text-sm md:text-base text-justify text-[#1B1D32]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </p>
          <div className="flex flex-col gap-y-5 xl:gap-y-7">
            <Item count={1} title="Contact us" description="Lorem Ipsum is simply dummy text of the" />
            <Item count={2} title="Consult" description="Lorem Ipsum is simply dummy text of the" />
            <Item count={3} title="Place Order" description="Lorem Ipsum is simply dummy text of the" />
            <Item count={4} title="Payment" description="Lorem Ipsum is simply dummy text of the" />
          </div>
          <div className="flex gap-x-8 px-8">
            <button onClick={clickHandler} className="w-[90px] sm:w-[120px] lg:w-[150px] h-[30px] md:h-[50px] text-white text-xs sm:text-sm lg:text-xl font-bold rounded-md border-none bg-[#1B1D32] ">Get Started</button>
            <button className="w-[90px] sm:w-[120px] lg:w-[150px] h-[30px] md:h-[50px] text-white text-xs sm:text-sm lg:text-xl font-bold rounded-md border-none bg-[#33B2C7] ">Read More</button>
          </div>
        </div>
      </article>
    </section>
  );
}

function Item({count ,title, description}) {
  return (
    <div className="flex gap-3">
      <div className="h-8 w-8 xxs:h-10 xxs:w-10 xl:h-14 xl:w-14 flex items-center justify-center text-2xl lg:text-3xl xl:text-4xl text-white bg-[#1B1D32] border-none rounded-full">
        <p>{count}</p>
      </div>
      <div className="flex flex-col">
        <h2 className="text-lg lg:text-xl xl:text-2xl font-bold text-[#1B1D32]">{title}</h2>
        <p className="text-xs xxs:text-sm lg:text-base text-[#1B1D32]">
          {description}
        </p>
      </div>
    </div>
  );
}
