export default function Items({ foodItem, bought, handleOnclickBuy }) {
  let styles = { color: "black" };
  let styles2 = { float: "right" };
  return (
    <li className={` list-group-item  ${bought && "active"}`} style={styles}>
      {foodItem}
      <button
        className={` btn btn-info  ${!bought && "active"} `}
        style={styles2}
        onClick={handleOnclickBuy}
      >
        Buy
      </button>
      {/* <button
        className={` btn btn-warning opacity-0 ${bought && "active"} `}
        style={styles2}
        onClick={handleOnclickBuy}
      >
        Remove
      </button> */}
    </li>
  );
}
