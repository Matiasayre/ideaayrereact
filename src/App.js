import logo from './logo.svg';
import React from "react"
import './App.css';
import NavBar from './components/navBar';
function App() {
  const styles ={
    color:"red",
    backgroundColor:"yellow"
  }
  const text = "hola que tal "

  return (
    <div className="App">
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
    </div>
  );
}

export default App;
