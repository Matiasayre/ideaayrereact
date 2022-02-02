import ItemDetailContainer from "./ItemDetailContainer"
import ItemCount from "./ItemCount"
import React from "react"
const Item=({Productos})=>{
  const [items,setitems] =  React.useState([])
  const [param,setParam]= React.useState(true)
  return(
    <ul key={Productos.id}>
      <li><b>{Productos.title}</b></li>
      <img src={Productos.pictureUrl} alt="imagen descriptiva"/>
      <li><b>precio:</b>{Productos.price}$</li>
      {items}
      <button onClick={()=>{
                const list = new Promise((res,rej)=>{
                    res(true)
                });
                let time = ()=>{
                  setTimeout(()=>{
                    if (time) {
                      if(param===true){
                        setitems( <ItemDetailContainer id={Productos.id}/>)
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
                }}>Detalle del producto</button>
      <ItemCount/>
   
    </ul>
   )
}


export default Item