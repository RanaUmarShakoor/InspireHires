import {NavBar} from "../Layout/NavBar";
import { Desktop_2_Section_1 } from "./Desktop_2_Section_1";
import { Desktop_2_Section_2 } from "./Desktop_2_Section_2";
import { Desktop_2_Section_3 } from "./Desktop_2_Section_3";
import { Desktop_2_Section_4 } from "./Desktop_2_Section_4";
import { Desktop_2_Section_5 } from "./Desktop_2_Section_5";
import { Desktop_2_Section_6 } from "./Desktop_2_Section_6";
import { Desktop_2_Section_7 } from "./Desktop_2_Section_7";
import { Foot } from "../Layout/Foot";

export function Desktop_2() {
  return (
    <div className=" w-screen h-screen overflow-x-hidden overflow-y-auto">
      <NavBar />    {/*Responsiveness Pending*/}
      <Desktop_2_Section_1 />
      <Desktop_2_Section_2 />
      <Desktop_2_Section_3 />
      <Desktop_2_Section_4 />
      <Desktop_2_Section_5 />
      <Desktop_2_Section_6 />
      <Desktop_2_Section_7 />
      <Foot />
    </div>
  );
}
