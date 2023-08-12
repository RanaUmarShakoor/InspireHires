import { useNavigate } from "react-router-dom";
import { Block_Layout } from "./Block_Layout";
import page2_side_img1 from "../../assets/page2_sideimg1_img.png";

const info = {
  title: "Our Agency",
  text: [
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book in it",
  ],
  btn: "Find Job",
};

export function Desktop_2_Section_3() {
  const navigate = useNavigate();

  function clickHandler(){
    navigate('./job_form')
  }

  let count = 1;
  return (
    <>
      <Block_Layout key="bl-1" imgSrc={page2_side_img1}>
        <h1>{info.title}</h1>
        {
            info.text.map(elem=>(<p key={"bl-1"+count++}>{elem}</p>))
        }
        <button onClick={clickHandler}>{info.btn}</button>
      </Block_Layout>
    </>
  );
}
