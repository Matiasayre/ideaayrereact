import React from "react"
import ItemCount from "./ItemCount.js"
import Itemlist from "./ItemList.js"
import Contenido from "../json/item.json"
function ItemListContainer(content){
   
    const [items,setitems] =  React.useState([])
    return(
        <div style={{color:"green"}}>
         <ItemCount/>
         
         <div>
         <Itemlist items={Contenido}/>
            <button  onClick={()=>{
                const list = new Promise((res,rej)=>{
                    res(true)
                });
                let time = ()=>{
                  setTimeout(()=>{
                    if (time) {
                        console.log(items)
                    }
                   },1000)
                }
                list.then(res=>{
                  time()
                }).catch((err)=>{
                  console.log(err)
                })
                }}>detalles del producto</button>
            </div>
        </div>
    )
}


export default ItemListContainer