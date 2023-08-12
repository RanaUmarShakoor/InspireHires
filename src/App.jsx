import { Routes, Route } from 'react-router-dom';
import { Desktop_1 } from "./Components/Desktop_1/Desktop_1";
import { Desktop_2 } from "./Components/Desktop_2/Desktop_2";
import { Desktop_3 } from "./Components/Desktop_3/Desktop_3";
import { Desktop_4 } from "./Components/Desktop_4/Desktop_4";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Desktop_2 />} />
        <Route path="services" element={<Desktop_1 />} />
        <Route path="hiring_form" element={<Desktop_3 />} />
        <Route path="job_form" element={<Desktop_4 />} />
      </Routes>
    </>
  );
}

export default App;
