const Item=({item})=>{
  
  return(
    <div key={item.id} >
      <p>{item.title}</p>
      <p>Price:{item.price}$</p>
      <img src={item.pictureUrl} alt=""></img>
    </div>
   )
}


export default Item