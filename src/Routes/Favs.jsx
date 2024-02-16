import React, { useContext } from "react";
import { ContextGlobal } from "../Components/utils/global.context";
import { Link } from "react-router-dom";
import Card from "../Components/Card";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

//NO RENDERIZA EN FAVS, PASA POR CONSOLA LOS DATOS PERO NO LO MUESTRA EN LA PANTALLA 

const Favs = () => {
  const { state } = useContext(ContextGlobal);

  console.log("Estado en Favs:", state);

  const favs = JSON.parse(localStorage.getItem("favs")) || [];

  console.log(localStorage.getItem("favs"))

  if (favs.length === 0) {
    return <h2>No tienes dentistas favoritos !</h2>;
  }

  return (
    <>
      <h2>Dentistas Favoritos :</h2>
      <div className={"card-grid"}>
      {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        {favs.map((dentist) => (
          <div key={dentist.id}>
            <Card dentist={dentist} />
            <Link to={`/Detail/${dentist.id}`}>Details</Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Favs;
