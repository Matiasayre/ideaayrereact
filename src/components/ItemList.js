import React from "react";
import Item from "./Item.js"
const Itemlist=({items})=>{
 
    return(<>
  {[<Item/>].map(item=>{
          return <li key={item.id}>
                 <Item item={item}/> 
          </li>
        })}
      </>
                
 )
      }
export default Itemlist
