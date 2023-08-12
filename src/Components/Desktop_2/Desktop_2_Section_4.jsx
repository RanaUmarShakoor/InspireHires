import { Block_Layout } from "./Block_Layout";
import page2_side_img2 from "../../assets/page2_sideimg2_img.png";

const info = {
  title: "Many Desktop Publishing Packages and web pages esitors now",
  text: [
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book in it."
  ]
};

export function Desktop_2_Section_4() {
  let count=1;
  return (
    <>
      <Block_Layout key="bl-2" imgSrc={page2_side_img2} dark="1">
        <h1>{info.title}</h1>
        {
            info.text.map(elem=>(<p key={"bl-2"+count++}>{elem}</p>))
        }
      </Block_Layout>
    </>
  );
}
