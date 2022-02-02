import React from "react"
import data from "../json/item.json"

function ItemCount(){
    
    const [stock,setStock] = React.useState(19)
    const[text,setText]= React.useState("comprar")
    const [buy,setBuy]= React.useState(1)
    const [sold,setSold]= React.useState("su Carrito")
    const [dato,setDato]=React.useState(true)
   return(
    <div>
     <div stock={stock}>
       
       <button onClick={()=>{
             if (stock!==0) {
                setStock(stock-1)
            setText("quedan "+stock+" unidades")
            
            }else setText("no hay unidades")
            if(buy!==21&&buy!==0){
                
                setBuy(buy+1)
                setSold("ha comprado "+buy+" unidad/es ")
             
            }
         setDato(true)
       }}>{text}</button>
        {sold}
       <button onClick={()=>{
          if(dato===true){
           setStock(19)
           setText("comprar")
           setBuy(1)
           setSold("su carrito")
           setDato(false)
          }
       
       }}>deshacer</button>

     </div>
    </div>
   )
}

export default ItemCount