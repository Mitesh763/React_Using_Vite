import { useContext } from "react";
import { TODO_Item_Context } from "../store/TODO_From_Context";

export default function Welcome() {
  const { items } = useContext(TODO_Item_Context);
  return items.length === 0 && <h3>Enjoy Your Day!</h3>;
}
