import React from 'react';
import data from "../json/item.json"
import ItemCount from './ItemCount';

const Cart = () => {
    let datos=data.description.filter(e=>e.id===1)
    let Datos=data.description.filter(e=>e.id===2)

    let Data=datos.map(m=>m.marca)
    
  return(
      <ul>
          <li>{Datos.map(m=>m.marca)}</li>
          <ItemCount />
          <li>{Data}</li>
          <ItemCount/>

      </ul>
  )


};

export default Cart;