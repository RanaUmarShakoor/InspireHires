import { useNavigate } from "react-router-dom";
import mainLogo from "../../assets/main_logo.png";

export function NavBar() {
  const navigate = useNavigate();

  function clickHandler() {
    navigate("");
  }

  const btnClasses =
    "xss:h-8 md:h-10 lg:h-12 p-1 lg:p-2 text-xs md:text-base lg:text-lg xl:text-xl text-[#0F3248] font-semibold border-2 rounded-lg border-[#0F3248] hover:border-[white] hover:text-[white] hover:bg-[#0F3248]";
  return (
    <header className="relative bg-white flex flex-col md:flex-row items-center justify-between w-screen px-2 xxs:px-5 xs:px-10 py-2 h-28 md:h-24 lg:h-30 xl:h-36">
      <button type="button" className="h-1/2 md:h-4/5" onClick={clickHandler}>
        <img src={mainLogo} className="h-full" />
      </button>
      <div className="flex flex-row gap-3 lg:gap-4">
        <button className={btnClasses}>About Us</button>
        <button className={btnClasses}>Contact Us</button>
        <button className={btnClasses}>Submit Resume</button>
        <button className={btnClasses}>FAQ</button>
      </div>
    </header>
  );
}
