import { useEffect, useState } from "react";
import Btn from "./components/Btn/Btn";
import './App.css';

function App() {


  const [consultar, setConsultar] = useState(true)
  const [resultado, setResultado] = useState({})
  

  useEffect(() => {
  
    const consultarAPI = async() =>{
  if (consultar) {
    
    const url = `https://graditest-store.myshopify.com/products/free-trainer-3-mmw.js`;
    const response = await fetch(url);
    const resultado = await response.json();
    
    
  
    setResultado(resultado)
    setConsultar(false)
  
    
 
    
  }
    }
    consultarAPI();
  }, [])


  return (
    <div >
      <Btn></Btn>
    </div>
  );
}

export default App;
