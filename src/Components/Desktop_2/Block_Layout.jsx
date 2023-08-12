import "./Block_Layout.css";

export function Block_Layout({ children, imgSrc, dark="" }) {

    let classes = "flex flex-col lg:flex-row gap-y-7 w-screen px-4 md:px-8 lg:px-24 py-20 bg-white text-[#1B1D32]"
    if(dark!=""){
        classes = "flex flex-col lg:flex-row gap-y-7 w-screen px-4 md:px-8 lg:px-24 py-20 bg-[#1B1D32] text-white"
    }

  return (
    <section className={classes}>
      <div className="flex-1 flex flex-col justify-center ">
        <div className="block_layout_content flex flex-col gap-y-5 w-full lg:w-4/ px-4">
          {children}
        </div>
      </div>
      <div className="flex-1">
        <img src={imgSrc} />
      </div>
    </section>
  );
}
