import logo from './logo.svg';
import React,{useEffect,useState} from "react"
import './App.css';
import CartWidget from "./components/CartWidget"
import { BrowserRouter,Routes,Route,NavLink,Link,useParams } from 'react-router-dom';
import NavBar from './components/navBar';
import ItemListContainer from './components/ItemListContainer';
import react from 'react';
import Item from './components/Item';
// function Helloworld(props){
//   return(
//     <div id="hello">
//     {props.text}
//     <h3>{props.subtitle}</h3>
    
//     </div>
//   )
// }
class Helloworld extends react.Component{
  state={
    show:true
  }
  cambiar=()=>{
    this.setState({show:!this.state.show})
  }
  render(){
    if(this.state.show){
      return(
        <div id="hello">
        {this.props.text}
        <h3>{this.props.subtitle}</h3>
        <button onClick={this.cambiar}>cambiar</button>
        </div>
      )
    }else{
        return <h1>
          no hay elementos
          <button onClick={this.cambiar}>cambiar</button>
          </h1>
    } 
  }
}
const styles ={
    color:"red",
    backgroundColor:"yellow"
  }
  const text = "hola que tal "
   const Home=()=><div><NavLink to={`Landing/${13}`}>Home</NavLink></div>
   const Landing=()=><div>Landing</div>
   const List=()=><div><Link to="/home">Home</Link><ItemListContainer greeting="bienvenido" ><p><Link to="/home">Home</Link></p></ItemListContainer></div>
   const ListParams=()=><div><Link to="/home">Home</Link><ItemListContainer greeting="bienvenido" ><p><Link to="/home">Home</Link></p></ItemListContainer></div>
  
  // useEffect(()=>{
  //   const params= useParams()
  // const [state,setState]= useState()
  //   console.log(params)
  //   return console.log(params)
  // },[])
  
    
  
function App() {
 
  return(
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<NavBar/>}></Route>
      <Route exact path="/tienda" element={<ItemListContainer/>}></Route>
      <Route exact path="/carrito" element={<CartWidget/>}></Route>
      <Route exact path="/tienda/:did" element={<ItemListContainer/>}></Route>
    </Routes>
  </BrowserRouter>

  );
    //  <div>componente:
    //   <Helloworld text="hello amigou" subtitle="bienvenido"/>
    //  <Helloworld text="hello inimigou"subtitle="vete de aqui" />
    //  <Helloworld text="hello who?"subtitle="lo ignora..." />
    //  </div>



  
}
// https://stackblitz.com/edit/react-tlufpe?file=src/App.js
export default App;


