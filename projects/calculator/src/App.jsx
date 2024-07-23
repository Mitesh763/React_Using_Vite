import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import DisplayInput from "./components/DisplayInput";
import Buttons from "./components/Buttons";
import { useState } from "react";

function App() {
  let [btnValue, setBtnValue] = useState("");
  const handleOnclick = (event) => {
    let values = event.target.value;
    if (values === "C") {
      setBtnValue("");
    } else if (values === "=") {
      try {
        let result = eval(btnValue);
        setBtnValue(result);
      } catch (err) {
        setBtnValue("ERROR");
      }
    } else {
      let newValue = btnValue + values;
      setBtnValue(newValue);
    }
    // console.log(newValue);
    // let new1 = newValue.splice(",");
    // console.log(new1);
    // console.log(event.target.value);
  };
  return (
    <div className="App">
      <DisplayInput displayValue={btnValue} />
      <Buttons handleOnclick={(event) => handleOnclick(event)} />
    </div>
  );
}

export default App;
