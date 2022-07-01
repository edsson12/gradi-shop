import { useEffect, useState } from "react";
import axios from "axios";
import Btn from "./components/Btn/Btn";
import Title from "./components/Title/Title";
import ColorPick from "./components/ColorPick/ColorPick";
import Size from "./components/Size/Size";
import Quantity from "./components/Quantity/Quantity";
import "./App.scss";
import Description from "./components/Description/Description";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Drag from "./components/Drag/Drag";

function App() {
  //creando los estados para la consulta a la api
  const [imagen, setImagen] = useState([]);
  const [resultado, setResultado] = useState({});
  const [lista, setLista] = useState([]);
  const [color, setColor] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [options, setOptions] = useState([]);
  
  let uniqueColor = [...new Set(color)];
  let uniqueSizes = [...new Set(sizes)];

  const handleDragStart = (e) => e.preventDefault();

  const items = [
    <img
      max-width="80%"
      src={"https:" + resultado.featured_image}
      onDragStart={handleDragStart}
      role="presentation"
    />,
   
    
  ];

  //creando el hook para realizar la consulta a la api cuando se actualice el componente deseado
  useEffect(() => {
    //funcion de consulta asincrona
    const consultarAPI = async () => {
      const url = `https://graditest-store.myshopify.com/products/free-trainer-3-mmw.js`;
      const result = await axios(url);
      setResultado(result.data);
      setLista(result.data.variants);
      setColor(result.data.variants.map((el) => el.option1));
      setSizes(result.data.variants.map((el) => el.option2));
      
      
      
      setImagen(resultado.images);
      console.log(imagen);
    };
    console.log(options, "OPCIONES");
    //ejecucion de función
    consultarAPI();
  }, []);

  return (
    <div className="o-all">
      <div className="o-left">
        <AliceCarousel
          mouseTracking
          disableButtonsControls={true}
          controlsStrategy="alternate"
          autoWidth={true}
          items={items}
        />
      </div>

      <div className="o-right">
        <Title resultado={resultado} />
        <ColorPick
          {...{
            resultado,
            lista,
            uniqueColor,
            setOptions,
            options,
          }} 
        />
        <Size {...{ lista, uniqueSizes, setOptions, options }} />

        <Quantity lista={lista} />

        <div className="o-btn-cont">
          <Btn texto="Add to favorite" type="light" />
          <Btn texto="Add to cart" type="dark" />
        </div>
        <Description resultado={resultado} />

        
      </div>
    </div>
  );
}

export default App;
