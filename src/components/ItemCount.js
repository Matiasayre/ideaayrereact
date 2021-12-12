import React from "react"

function ItemCount(){
    
    const [stock,setStock] =  React.useState(19)
    const[text,setText]= React.useState("compre hielo")
    const [buy,setBuy]= React.useState(1)
    const [sold,setSold]= React.useState("su Carrito")
   return(
    <div>
        un bolsa de 1kg de Hielo
     <div stock={stock}>
       
       <button onClick={()=>{
             if (stock!==0) {
                setStock(stock-1)
            setText("quedan "+stock+" unidades")
            
            }else setText("no hay unidades")
            if(buy!==21&&buy!==0){
                
                setBuy(buy+1)
                setSold("ha comprado "+buy+" bolsa/s de hielo")

            }
         
       }}>{text}</button>
      {sold}
     </div>
    </div>
   )
}

export default ItemCount