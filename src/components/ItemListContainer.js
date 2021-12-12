import React from "react"
import ItemCount from "./ItemCount.js"
function ItemListContainer(props){
    const {greeting:value}=props
    return(
        <div style={{color:"green"}}>{value}
         <ItemCount/>
        
        
        </div>
    )
}


export default ItemListContainer