import { useNavigate } from "react-router-dom";
import mainLogo from "../../assets/main_logo.png";

export function Head() {
    const navigate = useNavigate();

    function clickHandler(){
        navigate("../");
    }

  return (
    <header className="relative bg-white flex items-center justify-center w-screen h-20 md:h-24 lg:h-30 xl:h-36">
      <button type="button" className="h-4/5" onClick={clickHandler}>
        <img src={mainLogo} className="h-full" />
      </button>
    </header>
  );
}

// Box Shadow Pending
