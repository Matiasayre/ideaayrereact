import React from "react";
import Item from "./Item.js"
import data from "../json/item.json"
const Itemlist=()=>{
 return(<>
 {data.Product.map((el) => (
            <Item key={el.id} Productos={el}/>  
          ))}
  
    </>
                
 )
      }
export default Itemlist
