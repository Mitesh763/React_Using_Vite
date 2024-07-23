import { useContext, useRef } from "react";
import { RiStickyNoteAddLine } from "react-icons/ri";
import { TODO_Item_Context } from "../store/TODO_From_Context";

export default function ToDo_input() {
  const { onClickBtn } = useContext(TODO_Item_Context);
  const todoNameEle = useRef();
  const todoDateEle = useRef();
  const handleOnclick = (event) => {
    event.preventDefault();
    const todoName = todoNameEle.current.value;
    const todoDate = todoDateEle.current.value;
    todoNameEle.current.value = "";
    todoDateEle.current.value = "";
    onClickBtn(todoName, todoDate);
  };
  return (
    <form className="row" onSubmit={handleOnclick}>
      <div className="col-6">
        <input
          type="text"
          placeholder="Enter your note:"
          ref={todoNameEle}
          // onChange={handleOnChanges}
        />
      </div>
      <div className="col-4">
        <input
          type="date"
          ref={todoDateEle}
          //  onChange={handleOnChangesDate}
        />
      </div>
      <div className="col-2">
        <button className="btn btn-success">
          <RiStickyNoteAddLine />
        </button>
      </div>
    </form>
  );
}
