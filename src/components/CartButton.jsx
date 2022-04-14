import { useState } from "react";

// keep the add to cart component here
const CartButton = () => {
  const[count,setCount] =useState(0)
  const handleInc =() =>{
    setCount(count+1)
  }
    //manage state of the count 
  return <>
  {/* add to cart button */}
  <button onClick={()=>handleRemove(item)}>Delete</button>
  <div>
      <button onClick={()=>handleInc()}>-</button>
      <p className="count-item">{count}</p>
      <button>+</button>
  </div>
  </>;
};
export default CartButton
