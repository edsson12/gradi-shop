import { useEffect, useState } from "react";
import Btn from "./components/Btn/Btn";
import Title from "./components/Title/Title";
import './App.scss';

function App() {

//creando los estados para la consulta a la api
  const [consultar, setConsultar] = useState(true)
  const [resultado, setResultado] = useState({})
  
//creando el hook para realizar la consulta a la api cuando se actualice el componente deseado
  useEffect(() => {
    //funcion de consulta asincrona
    const consultarAPI = async() =>{
  if (consultar) {    
    const url = `https://graditest-store.myshopify.com/products/free-trainer-3-mmw.js`;
    const response = await fetch(url);
    const resultado = await response.json();
    setResultado(resultado)
    setConsultar(false)
    
  }
    }
    //ejecucion de función
    consultarAPI();
  }, [consultar])

  console.log(resultado.title)
  return (
    <div className="o-all">

    <div className="o-left">
    carousel de imagenes desde la api
    </div>

    <div className="o-right">
      <Title
      resultado={resultado}/>

      <Btn 
      texto="Add to cart"/>
      
    </div>
    </div>
  );
}

export default App;
