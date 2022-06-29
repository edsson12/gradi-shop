import { useEffect, useState } from "react";
import Btn from "./components/Btn/Btn";
import Title from "./components/Title/Title";
import ColorPick from "./components/ColorPick/ColorPick";
import Size from "./components/Size/Size";
import "./App.scss";
import Quantity from "./components/Quantity/Quantity";

function App() {
  //creando los estados para la consulta a la api
  const [consultar, setConsultar] = useState(false);
  const [resultado, setResultado] = useState({});
  const [lista, setLista] = useState([]);

 



  

  //creando el hook para realizar la consulta a la api cuando se actualice el componente deseado
  useEffect(() => {
    //funcion de consulta asincrona
    const consultarAPI = async () => {
      if (consultar) {
        const url = `https://graditest-store.myshopify.com/products/free-trainer-3-mmw.js`;
        const response = await fetch(url);
        const resultado = await response.json();
        setResultado(resultado)
        setLista(resultado.variants)
        
        
      }
    };
    //ejecucion de función
    consultarAPI();
  }, [consultar]);


  return (
    <div className="o-all">
      <div className="o-left">carousel de imagenes desde la api</div>

      <div className="o-right">
        <Title resultado={resultado} />
        <ColorPick resultado={resultado} lista={lista}/>
        <Size/>
        <Quantity/>
        <div className="o-btn-cont">

        <Btn texto="Add to favorite" type="light" />
        <Btn texto="Add to cart" type="dark" />
        </div>
      </div>
    </div>
  );
}

export default App;
