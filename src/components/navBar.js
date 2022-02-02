import React from "react"
import { NavLink } from "react-router-dom"
function NavBar(){
    return(
        <header >
            <div className="App">
      <h1>Minimarket</h1>
     </div> 
      <nav className="nav-react">
      
        
          <div className="div">
          
          <NavLink to={"/"}>Inicio</NavLink>
           <NavLink to={"/tienda"}>tienda</NavLink>
           <NavLink to={"/carrito"}> carrito</NavLink>
          <a href="h" className="link-react">Contacto</a>
          </div>
       </nav>
       </header>
    )

}

export default NavBar