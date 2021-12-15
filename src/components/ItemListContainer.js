import React from "react"
import ItemCount from "./ItemCount.js"
import Itemlist from "./ItemList.js"
function ItemListContainer(props){
    const {greeting:value}=props
    return(
        <div style={{color:"green"}}>{value}
         <ItemCount/>
          <Itemlist/>
        </div>
    )
}


export default ItemListContainer