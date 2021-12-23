import logo from './logo.svg';
import React,{useEffect,useState} from "react"
import './App.css';

import { BrowserRouter,Routes,Route,NavLink,Link,useParams } from 'react-router-dom';
import NavBar from './components/navBar';
import ItemListContainer from './components/ItemListContainer';
function App() {
  const styles ={
    color:"red",
    backgroundColor:"yellow"
  }
  const text = "hola que tal "
   const Home=()=><div><NavLink to={`Landing/${13}`}>Home</NavLink></div>
   const Landing=()=><div>Landing</div>
   const List=()=><div><Link to="/home">Home</Link><ItemListContainer greeting="bienvenido" ><p><Link to="/home">Home</Link></p></ItemListContainer></div>
   const ListParams=()=><div><Link to="/home">Home</Link><ItemListContainer greeting="bienvenido" ><p><Link to="/home">Home</Link></p></ItemListContainer></div>
  const params= useParams()
  const [state,setState]= useState()
  useEffect(()=>{
    console.log(params)
    return console.log(params)
  },[])
   return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Landing></Landing>}></Route>
        <Route exact path="/home" element={<Home></Home>}></Route>
        <Route exact path="/list" element={<List></List>}></Route>
        <Route exact path="/Landing/:id" element={<ListParams></ListParams>}></Route>
        <Route exact path="/Landing/" element={<List></List>}></Route>
      </Routes>
    </BrowserRouter>
  );
}
// https://stackblitz.com/edit/react-tlufpe?file=src/App.js
export default App;


{/* <div className="App">
       <h1>Minimarket</h1>
       <NavBar/>
     
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p style={styles}>hola</p>
        <p className="color-azul" style={{color:"blue"}}>hola</p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {text}
          Learn React
        </a>
      </header>
    </div> */}