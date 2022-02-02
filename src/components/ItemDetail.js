import React from 'react';

const ItemDetail = ({description}) =>{
 return(
     <ul key={description.id}>
         <li><b>stock:</b>{description.stock}</li>
         <li><b>marca:</b>{description.marca}</li>
         <li>{description.descripcion}</li>
     </ul>
 )
};

export default ItemDetail;