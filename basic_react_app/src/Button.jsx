function handleClick() {
  console.log("HELLO!");
}

function handleMouseOver() {
  console.log("BYE!");
}

function handleDoubleClick() {
  console.log("mouse was Clicked twice");
}

function handleSubmitForm(evt) {
  evt.preventDefault();
  console.log("Form Submitted Successfully!");
}

export default function Button() {
  return (
    <>
      <button onClick={handleClick}>Click me!</button>
      <p onMouseOver={handleMouseOver}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error omnis quo
        sapiente hic, earum dolore necessitatibus eos expedita deleniti minus,
        corporis illum. Accusamus earum inventore, recusandae veritatis dolorum
        numquam laborum at sed maxime nobis!
      </p>
      <button onDoubleClick={handleDoubleClick}>Double Click me!</button>
      <form onSubmit={handleSubmitForm}>
        <input type="text" />
        <button>Submit</button>
      </form>
    </>
  );
}
