import { useNavigate } from "react-router-dom";
import logo2_img from "../../assets/logo_2.png";
import world_icon from "../../assets/world_icon.png";
import phone_icon from "../../assets/phone_icon.png";

const data = [
  {
    title: "Need A Job",
    list: ["Email", "Contact", "Privacy Policy", "Term of Use"],
  },
  {
    title: "Contact us",
    list: [
      "401 E Las Olas",
      "Blvd, Ste 1400",
      "Fort Lauderdale",
      "Florida 33301",
    ],
  },
];

export function Foot() {
  const navigate = useNavigate();

  function clickHandler(){
    navigate('./services')
  }

  return (
    <footer className="flex flex-col">
      <section className="flex flex-col md:flex-row p-12 gap-y-10 bg-[#1B1D32] text-white">
        <div className="flex justify-center md:justify-start md:w-2/5 xl:w-[45%]">
          <img onClick={clickHandler} src={logo2_img} className=" h-[96px] w-[183px] hover:cursor-pointer" />
        </div>
        <div className="flex-1 flex flex-col md:flex-row gap-y-7">
          <article className="flex-1 flex flex-col gap-y-5">
            <Content key={"foot-1"} info={data[0]} />
            <div className="flex flex-row items-center">
              <img src={world_icon} className="h-6 w-6" />
              <span className="text-lg">info@inspirehires</span>
            </div>
          </article>
          <article className="flex-1 flex flex-col gap-y-6">
            <Content key={"foot-2"} info={data[1]} />
            <div className="flex flex-row items-center">
              <img src={phone_icon} className="h-5 w-5" />
              <span className="text-lg">+1 954-382-0075</span>
            </div>
          </article>
        </div>
      </section>
      <section className="flex text-sm md:text-xl bg-white text-[#1B1D32]">
        <p className="w-[45%] md:ps-12 text-center md:text-left ">© 2023 InspireHiresr®</p>
        <p className="flex-1 text-center md:text-left">InspireHires</p>
      </section>
    </footer>
  );
}

function Content({ info }) {
  let count = 1;
  return (
    <>
      <h3 className="text-2xl font-bold">{info.title}</h3>
      <ul className="text-xl font-normal">
        {info.list.map((elem) => (
          <li key={"foot-list-"+count++}>
            <button>{elem}</button>
          </li>
        ))}
      </ul>
    </>
  );
}
