import React from "react"

function ItemListContainer(props){
    const {greeting:value}=props
    return(
        <div style={{color:"green"}}>{value}</div>
    )
}


export default ItemListContainer