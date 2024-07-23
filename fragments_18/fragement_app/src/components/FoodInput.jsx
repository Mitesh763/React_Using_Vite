import "./FoodInput.css";

export default function FoodInput({ handleOnChange, handleOnClick }) {
  let styles = { margin: "5px 15px", float: "right" };

  return (
    <>
      <input
        type="text"
        placeholder="Enter Your Healthy Food:"
        className="input_field"
        onChange={handleOnChange}
      />
      <button className="btn btn-info" style={styles} onClick={handleOnClick}>
        ADD
      </button>
    </>
  );
}
