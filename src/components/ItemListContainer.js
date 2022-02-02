import React from "react"
import { NavLink } from "react-router-dom";

import Itemlist from "./ItemList.js"
import NavBar from "./navBar.js";
function ItemListContainer(content){
   const [param,setParam]= React.useState(true)
    const [items,setitems] =  React.useState([])
    return(
        <div style={{color:"green"}}>
         <div>
         <NavBar/>
         {items}
            <button  onClick={()=>{
                const list = new Promise((res,rej)=>{
                    res(true)
                });
                let time = ()=>{
                  setTimeout(()=>{
                    if (time) {
                      if(param===true){
                        setitems( <Itemlist/>)
                        setParam(false)
                      }else{
                        setitems([])
                        setParam(true)
                      }
                    }
                   },1000)
                }
                list.then(res=>{
                  time()
                }).catch((err)=>{
                  console.log(err)
                })
                }}>Productos</button>
            </div>
        </div>
    )
}


export default ItemListContainer