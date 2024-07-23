import "./Product.css";
import Price from "./Price.jsx";

function Product({ title, Descript1, Idx }) {
  let oldPrices = ["12,495", "11,900", "1,599", "599"];
  let newPrices = ["8,999", "9,199", "899", "278"];
  return (
    <div className="product">
      <h2>{title[Idx]}</h2>
      <h5>{Descript1[Idx][0]}</h5>
      <h5>{Descript1[Idx][1]}</h5>
      <Price oldPrice={oldPrices[Idx]} newPrice={newPrices[Idx]} />
    </div>
  );
}

export { Product };
