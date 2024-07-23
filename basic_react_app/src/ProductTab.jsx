import "./App.css";
import { Product } from "./Product";

function ProductTab() {
  let styles = {display:"flex", justifyContent : "center" , alignItems:"center" }
  let titles = [
    "Logitech MX Master",
    "Apple Pencil (2nd gen)",
    "Zebronics",
    "Petronics Toad",
  ];
  let des1 = [
    ["8000 DPI","5 Programmable Buttons"],
    ["Intuitive Touch Surface","Designed For iPad Pro"],
    ["Design for iPad Pro","Intuitive Touch Surface"],
    ["Wirreless mouce 2.4GHz","Optical Orientation"]
  ];
  // let des2 = [
  //   "5 Programmable Buttons",
  //   "Designed For iPad Pro",
  //   "Intuitive Touch Surface",
  //   "Optical Orientation",
  // ];
  return (
    <div style={styles}>
      <Product title={titles} Descript1={des1} Idx={0} />
      <Product title={titles} Descript1={des1} Idx={1} />
      <Product title={titles} Descript1={des1} Idx={2} />
      <Product title={titles} Descript1={des1} Idx={3} />
    </div>
  );
}

export { ProductTab };
