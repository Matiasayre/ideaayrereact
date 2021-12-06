import React from "react"
 import CartWidget from "./CartWidget"
function NavBar(){
    return(
      <nav className="nav-react">
          <CartWidget/>
          <div className="div">
          <a href="h" className="link-react">Inicio</a>
          <a href="h" className="link-react">Tienda</a>
          <a href="h" className="link-react">Servicios</a>
          <a href="h" className="link-react">Contacto</a>
          </div>
       </nav>
    )
}

export default NavBar