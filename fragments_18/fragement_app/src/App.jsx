import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Title from "./components/Title";
import FoodItems from "./components/FoodItems";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
import { useState } from "react";

function App() {
  let styles1 = { marginBottom: "2rem" };
  // let foodItems = ["Roti", "Salad", "vegetables", "Milk", "Ghee", "Fruits"];
  let [inpuItem, setInputItem] = useState(); // showing item on browser
  let [foodItems, setAddItem] = useState([
    // add new Item
    "Roti",
    "Salad",
    "vegetables",
    "Milk",
    "Ghee",
    "Fruits",
  ]);
  const handleOnClick = async (event1) => {
    console.log(event1);
    let newFoodItems = [...foodItems, inpuItem];
    setAddItem(newFoodItems);
    console.log(foodItems, "  ", inpuItem);
  };
  const handleOnChange = (event) => {
    console.log(event.target.value);
    setInputItem((inpuItem = event.target.value));
  };
  return (
    <>
      <Container>
        <Title />
        <FoodInput
          handleOnChange={handleOnChange}
          handleOnClick={handleOnClick}
        />
        {/* <p style={styles1}>{inpuItem}</p> */}
        <FoodItems foodItems={foodItems} />
      </Container>
    </>
  );
}

export default App;
