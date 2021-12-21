import React from "react";
import Item from "./Item.js"
function Itemlist({item}){
  item=React.useState([Item])
    return(<div>
      {item.map((Items)=><ul key={<Item Items={Items.id}/>}>
          <li>{<Item Items={Items.title}/>}</li>
            <li>{<Item Items={Items.price}/>}</li>    
            <li>{<Item Items={Items.pictureUrl}/>}</li>               
     </ul>)}</div>
                
 )
      }
export default Itemlist
