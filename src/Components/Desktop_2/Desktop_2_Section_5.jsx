import { useNavigate } from "react-router-dom";
import { Block_Layout } from "./Block_Layout";
import page2_side_img3 from "../../assets/page2_sideimg3_img.png";

const info = {
  title: "Many Desktop Publishing Packages and web pages esitors now",
  text: [
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book in it.",
  ],
  btn: "Find Job",
};

export function Desktop_2_Section_5() {
  const navigate = useNavigate();

  function clickHandler(){
    navigate('./job_form')
  }

  let count = 1;
  return (
    <>
      <Block_Layout key="bl-3" imgSrc={page2_side_img3}>
        <h1>{info.title}</h1>
        {info.text.map((elem) => (
          <p key={"bl-3" + count++}>{elem}</p>
        ))}
        <button onClick={clickHandler}>{info.btn}</button>
      </Block_Layout>
    </>
  );
}
