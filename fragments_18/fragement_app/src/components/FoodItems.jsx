import { useState } from "react";
import Items from "./Items";

export default function FoodItems({ foodItems }) {
  let [activeItem, setActiveItem] = useState([]);
  // bought={activeItem.includes(item)}
  const onCLickBuy = (item) => {
    let newItem = [...activeItem, item];
    // console.log(item);
    setActiveItem(newItem);
    // console.log(activeItem);
  };
  return (
    <>
      <ul className="list-group">
        {foodItems.map((foodItem) => (
          <Items
            key={foodItem}
            foodItem={foodItem}
            bought={activeItem.includes(foodItem)}
            handleOnclickBuy={() => onCLickBuy(foodItem)}
          />
        ))}
        {/* {console.log(bought)} */}
      </ul>
    </>
  );
}
