// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
// import { Title} from "./Title.jsx";
// import { ProductTab } from "./ProductTab.jsx";
// import { MsgBoxCombo } from "./MsgBoxCombo";
import Button from "./Button";
//
function App() {
  // const [count, setCount] = useState(0)
  return (
    // <div className='class'>
    //<></>   -->   react fragment only single use to combine mulrtiple components
    <>
      {/* <h1>Blockbuster deals on computers Accessories | Shop now! </h1> */}
      {/* <Title />
      <h2>This is another Title</h2>
      <p>paraghraph</p>
      <p> 2 * 2 = {2 * 2} </p>
      <p> {Math.pow(2, 5)}</p> */}
      {/* <ProductTab /> */}
      {/* <MsgBoxCombo /> */}
      <Button />
    </>
    // </div>
  );
}

export default App;
