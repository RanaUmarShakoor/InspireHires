import { Head } from "../Layout/Head";
import { Foot } from "../Layout/Foot";
import { Desktop_4_Form } from "./Desktop_4_Form";

export function Desktop_4() {
  return (
    <>
      <div className="shadow-md border">
        <Head />
      </div>
        <Desktop_4_Form />
      <Foot />
    </>
  );
}
