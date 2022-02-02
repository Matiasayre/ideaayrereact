import React from 'react';
import ItemDetail from './ItemDetail';
import data from "../json/item.json"
const ItemDetailContainer = ({id}) => {
    
 id=data.description.filter(el=>el.id===id)

return(
<>

 {id.map((el) => (
            <ItemDetail key={el.id} description={el}/>  
          ))}
  
    </>
)

};

export default ItemDetailContainer;