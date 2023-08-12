import { Head } from "../Layout/Head";
import Desktop_1_Content from "./Desktop_1_Content";

export function Desktop_1() {
  return (
    <div className="w-screen h-screen flex flex-col overflow-x-hidden overflow-y-auto">
      <Head />
      <div className="flex-1">
        <Desktop_1_Content />
      </div>
    </div>
  );
}
