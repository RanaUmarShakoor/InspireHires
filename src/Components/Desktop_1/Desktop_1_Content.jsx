import { useNavigate } from 'react-router-dom';
import desktop_bg from "../../assets/page1_bg.png";
import send_img from "../../assets/page1_send_img.png";
import page_img1 from "../../assets/page1_suitcase_img.png";
import page_img2 from "../../assets/page1_contact_img.png";


export default function Desktop_1_Content() {
  const navigate = useNavigate();

  function jobClickHandler(){
    navigate('../job_form')
  }

  function hireClickHandler(){
    navigate('../hiring_form')
  }

  return (
    <div className="w-screen h-full m-0 p-0 flex flex-col items-center justify-center relative overflow-auto">
      <img src={desktop_bg} className="absolute w-full h-full -z-10" />
      <div className="flex flex-col gap-y-3 px-4 pt-24 pb-4 w-[90%] md:w-[60%] lg:w-[50%] xl:w-[40%] 2xl:w-[30%] border-none rounded-3xl md:text-xl lg:text-2xl xl:text-3xl z-0">
        <div className="relative flex flex-col gap-y-8 bg-[rgb(255,255,255)] pt-20 px-4 py-12 md:pt-32 md:px-14 md:py-16 xl:px-16 border-none rounded-[40px]">
          <div className="h-[90px] w-[90px] md:h-[120px] md:w-[120px] lg:h-[144px] lg:w-[144px] xl:h-[166px] xl:w-[166px] absolute -top-[15%] md:-top-[19%] xl:-top-[21%] left-1/2 transform -translate-x-1/2 flex items-center justify-center bg-[#122F44] border-none rounded-full">
            <img src={send_img} className="w-[68%] mr-4" />
          </div>
          <ElementX imgSrc={page_img1} text={"I need a Job."} clickHandler={jobClickHandler} />
          <ElementX imgSrc={page_img2} text={"I need to Hire."} clickHandler={hireClickHandler} />
        </div>
        <div className="text-white text-center">
          It is all about the right person!
        </div>
      </div>
    </div>
  );
}

function ElementX({ imgSrc, text, clickHandler }) {
  return (
    <button onClick={clickHandler} className="w-full h-12 md:h-16 lg:h-20 xl:h-24 flex items-center justify-center relative border rounded-[50px] text-center bg-[#122F444D]">
      <aside className="w-12 md:w-16 lg:w-20 xl:w-24 h-12 md:h-16 lg:h-20 xl:h-24 absolute left-0 flex items-center justify-center border-none rounded-full bg-[#122F44]">
        <img src={imgSrc} className="h-[42%]" />
      </aside>
      <p>{text}</p>
    </button>
  );
}
