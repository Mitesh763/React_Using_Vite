import "./DisplayInput.css";

export default function DisplayInput({ displayValue }) {
  return (
    <input type="text" className="Display" value={displayValue} readOnly />
  );
}
