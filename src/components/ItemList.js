import React from "react";
import Item from "./Item.js"
function Itemlist(){
    const [item,setItem] =  React.useState()
    
        return(
            <div>
                
             {item}
            <button  onClick={()=>{
                const list = new Promise((res,rej)=>{
                    res(true)
                      
              
                });
                let time = ()=>{
                  setTimeout(()=>{
                    if (time) {
                        setItem(<Item/>)
                    }
                   },3000)
                }
                list.then(res=>{
                  time()
                }).catch((err)=>{
                  console.log(err)
                })
              

              
                
                }}>detalles del producto</button>
            </div>
        )
}

export default Itemlist