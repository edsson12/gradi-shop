import { useEffect, useState } from "react";
import Btn from "./components/Btn/Btn";
import Title from "./components/Title/Title";
import ColorPick from "./components/ColorPick/ColorPick";
import "./App.scss";

function App() {
  //creando los estados para la consulta a la api
  const [consultar, setConsultar] = useState(true);
  const [resultado, setResultado] = useState({});
  const [variant, setVariant] = useState();

  //creando el hook para realizar la consulta a la api cuando se actualice el componente deseado
  useEffect(() => {
    //funcion de consulta asincrona
    const consultarAPI = async () => {
      if (consultar) {
        const url = `https://graditest-store.myshopify.com/products/free-trainer-3-mmw.js`;
        const response = await fetch(url);
        const resultado = await response.json();
        setResultado(resultado);
        setConsultar(false);
        console.log(resultado.variants[0].option1);
        console.log(resultado.price);
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
        <ColorPick />
        <Btn texto="Add to favorite" type="light"/>
        <Btn texto="Add to cart" type="dark"/>
      </div>
    </div>
  );
}

export default App;
