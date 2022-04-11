import React from "react";
import "./Style.css"

const GroceryItem = (props) => {
  console.log(props)
  const {title,imgURL,discount,sellingPrice,mrp} =props
  return (
  <div id="main">
    <img src={imgURL} alt=""/>
    <h1>{title}</h1>
    <h1>discount:{discount}</h1>
    <h1>MRP:{mrp}</h1>
    <h1>Price:{sellingPrice}</h1>

  </div>
  )
};
export default GroceryItem;
