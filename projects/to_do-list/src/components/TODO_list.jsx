import { useContext } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { TODO_Item_Context } from "../store/TODO_From_Context";
export default function TODO_list({ list, date }) {
  const { handleOnclickDelete } = useContext(TODO_Item_Context);
  return (
    <div className="row todo-lists">
      <div className="col-6">{list}</div>
      <div className="col-4">{date}</div>
      <div className="col-2">
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => handleOnclickDelete(list)}
        >
          <MdDeleteOutline />
        </button>
      </div>
    </div>
  );
}
