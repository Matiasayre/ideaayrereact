import React from "react"
import ItemCount from "./ItemCount.js"
import Itemlist from "./ItemList.js"
function ItemListContainer(props){
    const {greeting:value}=props
    const [item,setItem] =  React.useState()
    return(
        <div style={{color:"green"}}>{value}
         <ItemCount/>
         
         <div>
             {item}
            <button  onClick={()=>{
                const list = new Promise((res,rej)=>{
                    res(true)
                });
                let time = ()=>{
                  setTimeout(()=>{
                    if (time) {
                        setItem(<Itemlist />)
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