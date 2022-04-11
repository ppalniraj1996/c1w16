import React from "react"
import data from '../data.json'
import GroceryItem from "./GroceryItem"




const GroceryDetails = ()=>{
// console.log(data)

    return(
        <>
        <h1>Groceries</h1>
        <div className="container">
            {data.map((item,index)=>{
                return(
                  <GroceryItem key ={item.id} {...item}/>
                )
               
            })}
            {/* map through the data and display the cards */}
        </div>
        </>
    )
}
export default GroceryDetails