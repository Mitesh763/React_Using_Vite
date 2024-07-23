import { useState } from "react";
import Head from "./Head";
import "./TODO_app.css";
import ToDo_input from "./ToDo_input";
import Welcome from "./Welcome";
import { TODO_Item_Context } from "../store/TODO_From_Context";
import TODO_Items from "./TODO_Items";

export default function ToDo_app() {
  ////////////  below commented code replaced by USEREF Hook /////////////////////////
  // let inputedItem, selectedDate;
  // let [T_item, setT_item] = useState([]);
  // let [dueDate, setDueDate] = useState([]);
  let [items, setItems] = useState([]);
  // const onChanges = (event) => {
  //   inputedItem = [...T_item, event.target.value];
  // };
  // const onChangesDate = (event) => {
  //   selectedDate = [...dueDate, event.target.value];
  //   items.dueDate2 = [...dueDate, event.target.value];
  // };
  const onClickBtn = (inputedItem, selectedDate) => {
    // setT_item(inputedItem);
    // setDueDate(selectedDate);
    // const newItems = [...items, { name: inputedItem, dueDate: selectedDate }];
    // setItems(newItems);
    setItems(() => {
      //concept ofspread operator
      return [...items, { name: inputedItem, dueDate: selectedDate }];
    });
  };
  const handleOnclickDelete = (list) => {
    let newItems1 = items.filter((item) => item.name !== list);
    setItems(newItems1);
  };
  return (
    <TODO_Item_Context.Provider
      value={{ items, onClickBtn, handleOnclickDelete }}
    >
      <center>
        <Head />
        <div className="container">
          <ToDo_input />
          <Welcome />
          <TODO_Items />
        </div>
      </center>
    </TODO_Item_Context.Provider>
  );
}
