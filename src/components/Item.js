import React  from "react"

function Item(){
    const [items]=React.useState([{id:2,title:"hielo",price:123,pictureUrl:"hielo.jpg"}])
   

    return(<div>
      {items.map(i=><ul key={i.id}>
          <li>{i.title}</li>
            <li>{i.price}</li>    
            <li>{i.pictureUrl}</li>               
     </ul>)}
     </div>
    )
    
}

export default Item