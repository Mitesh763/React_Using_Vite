export default function price({oldPrice , newPrice }){
    let styles = {
        backgroundColor:"rgb(247, 226, 186)",
        color : "black",
        height:"1.9rem",
        width:"18rem",
        borderBottomLeftRadius:"1rem",
        borderBottomRightRadius:"1rem"
    }
    return (
      <div style={styles}>
        <span style={{textDecoration : "line-through"}}>{oldPrice} </span>
        &nbsp;&nbsp;&nbsp;
        <span><b>{newPrice}</b></span>
      </div>  
    );
}