import "./Buttons.css";

export default function Buttons({ handleOnclick }) {
  let buttonNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "9",
    "0",
    "=",
    ".",
  ];
  return (
    <div className="Buttons">
      {buttonNames.map((buttonName) => (
        <button
          className="button"
          value={buttonName}
          key={buttonName}
          onClick={handleOnclick}
        >
          {buttonName}
        </button>
      ))}
    </div>
  );
}
