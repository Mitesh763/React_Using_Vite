import { useContext } from "react";
import { TODO_Item_Context } from "../store/TODO_From_Context";
import TODO_list from "./TODO_list";

export default function TODO_Items({ handleOnclickDelete }) {
  const { items } = useContext(TODO_Item_Context);
  //   console.log(todoItemFromContext);

  return (
    <>
      {items.map((item) => (
        <TODO_list
          key={item}
          list={item.name}
          date={item.dueDate}
          handleOnclickDelete={handleOnclickDelete}
        />
      ))}
    </>
  );
}
