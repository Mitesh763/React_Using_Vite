import { useRef } from "react";
import { useDispatch } from "react-redux";

const CounterBtn = () => {
  const dispatch = useDispatch();
  const inputEle = useRef();

  const handleIncrement = () => {
    dispatch({ type: "INCREMENT" });
  };
  const handleDecrement = () => {
    dispatch({ type: "DECREMENT" });
  };
  const handleAdd = () => {
    dispatch({
      type: "ADD",
      payload: {
        num: inputEle.current.value,
      },
    });
    inputEle.current.value = "";
  };
  const handleSubstract = () => {
    dispatch({
      type: "SUBTRACT",
      payload: {
        num: inputEle.current.value,
      },
    });
    inputEle.current.value = "";
  };
  const handlePrivacy = () => {
    dispatch({ type: "TOGGLEPRIVACY" });
  };
  // const handleMultiply = () => {
  //   dispatch({
  //     type: "MULTIPLY",
  //     payload: {
  //       num: inputEle.current.value,
  //     },
  //   });
  //   inputEle.current.value = "";
  // };
  // const handleDivide = () => {
  //   dispatch({
  //     type: "DIVIDE",
  //     payload: {
  //       num: inputEle.current.value,
  //     },
  //   });
  //   inputEle.current.value = "";
  // };
  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleIncrement}
        >
          +1
        </button>
        <button
          type="button"
          className="btn btn-success"
          onClick={handleDecrement}
        >
          -1
        </button>
        <button
          type="button"
          className="btn btn-warning"
          onClick={handlePrivacy}
        >
          Privacy Toggle
        </button>
      </div>
      <div className="input-group mb-3 input-add-sub">
        <input
          type="number"
          name="input"
          ref={inputEle}
          placeholder="Enter number:"
        />
        <button
          type="button"
          className="btn btn-warning input-btn"
          onClick={handleAdd}
        >
          ADD
        </button>
        <button
          type="button"
          className="btn btn-danger input-btn"
          onClick={handleSubstract}
        >
          Subtract
        </button>
        {/* <button
          type="button"
          className="btn btn-danger input-btn"
          onClick={handleMultiply}
        >
          Multiply
        </button>
        <button
          type="button"
          className="btn btn-danger input-btn"
          onClick={handleDivide}
        >
          Divide
        </button> */}
      </div>
    </>
  );
};

export default CounterBtn;
