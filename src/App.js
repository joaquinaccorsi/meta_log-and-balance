import WalletCard from "./WalletCard";
import './App.css';
import { MyEstadoGlobalContext } from "./MyGlobalState";
import React from "react"

function App() {
  const [mostrar, setMostrar] = React.useState(false);
  return (
    <div className="App">
    <MyEstadoGlobalContext.Provider value={{mostrar, setMostrar}}/> 
      <WalletCard/>
    <MyEstadoGlobalContext.Provider/>
  
    </div>
  );
}

export default App;
