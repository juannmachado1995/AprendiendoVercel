import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ContextGlobal } from "../Components/utils/global.context";
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
const Detail = () => {
  const { state } = useContext(ContextGlobal);
  const { id } = useParams();

  const [dentist, setDentist] = useState();
  const [err, setErr] = useState();
 
  async function getDentist() {
    setLoading(true);
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
      const data = await response.json();
      setDentist(data);
    } catch (error) {
      setErr(error.message);
    } 
  }

  useEffect(() => {
    getDentist();
  }, [id]);

  return (
    <div>
       {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}

      {err && <p>Error al obtener los detalles del dentista: {err}</p>}
      {dentist && (
        <article>
            {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
          <h2>Detalles del dentista : </h2>
          <h3> {dentist.name}</h3>
          <p>{dentist.username}</p>
          <p>id: {dentist.id}</p>
          <p> tel : {dentist.phone}</p>
          <p>website : {dentist.website}</p>
        </article>
      )}
    </div>
  );
};

export default Detail;
