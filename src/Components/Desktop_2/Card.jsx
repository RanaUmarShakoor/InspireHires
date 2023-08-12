export function Card_1({imgSrc="", title, description, bg=""}) {
    let classes = "flex flex-col gap-y-1 md:gap-y-4 p-3 md:p-5 w-[180px] h-[180px] md:w-[216px] md:h-[216px] border-b-4 rounded-xl border-[#33B2C7] bg-white text-[#1B1D32]";

    if(bg==1){
        classes = "flex flex-col gap-y-1 md:gap-y-4 p-3 md:p-5 w-[180px] h-[180px] md:w-[216px] md:h-[216px] border-b-4 rounded-xl border-white bg-[#33B2C7] text-white";
    }

  return (
      <div className={classes}>
        <div className="h-10 md:h-12">
            {imgSrc!=""? <img src={imgSrc} className="w-10 md:w-12 h-full" />: ""}
        </div>
        <div>
          <h2 className="text-base xxs:text-lg md:text-2xl font-bold">{title}</h2>
        </div>
        <div>
          <p className="text-xs md:text-sm font-normal">
            {description}
          </p>
        </div>
      </div>
  );
}

export function Card_2({imgSrc="", title, description, bg=""}) {
    let classes = "flex flex-col p-3 md:p-5 w-[180px] h-[180px] md:w-[216px] md:h-[216px] border-b-4 rounded-xl border-[#33B2C7] bg-white text-[#1B1D32]";

    if(bg==1){
        classes = "flex flex-col p-3 md:p-5 w-[180px] h-[180px] md:w-[216px] md:h-[216px] border-b-4 rounded-xl border-white bg-[#33B2C7] text-white";
    }

  return (
      <div className={classes}>
        <div className="h-6 mt-6 xxs:mt-7 md:mt-11 -mb-1">
            {imgSrc!=""? <img src={imgSrc} className="h-full w-10" />: ""}
        </div>
        <div>
        <h2 className="text-base xxs:text-lg md:text-2xl mb-1 md:mb-0 font-bold">{title}</h2>
        </div>
        <div>
        <p className="text-xs md:text-sm font-normal">
            {description}
          </p>
        </div>
      </div>
  );
}
