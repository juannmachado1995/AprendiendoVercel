import React, { useEffect, useState } from "react";
import { ContextGlobal } from "./utils/global.context";

const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones

  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [mensaje, setMensaje] = useState("");

  useEffect(() => {
    setError("");
  }, [nombre, email]);



  const handleSubmit = (e) => {
    e.preventDefault();

    let nombreValido = /^[a-zA-Z]{5,}$/;
    let emailValido = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!nombreValido.test(nombre)) {
      setError(
        "El nombre debe contener al menos 5 caracteres, porfavor verifique su informacion nuevamente"
      );
    } else if (!emailValido.test(email)) {
      setError(
        "El email ingresado no es valido, porfavor verifique su informacion nuevamente"
      );
    } else {
     setMensaje("Gracias "+ (nombre) + " , te contactaremos cuando antes vía mail")
    }
    
  };

  return (
    <>
    <div>
      <h1>Ingresa tus datos </h1>
      <form onSubmit={handleSubmit} >
        <label htmlFor="nombre">Nombre: </label>
        <input className="forms"
          type="text"
          placeholder="Nombre Completo"
          id="nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />

        <label htmlFor="email">Email: </label>
        <input className="forms" 
          type="text"
          placeholder="Email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {error && <p style={{ color: "red" }}>{error}</p>}

        <input className="btn" type="submit" value="Enviar formulario" />
      </form>

      {mensaje && <p style={{ color: "black" }}>{mensaje}</p>}
    

      </div>

    </>
  );
};

export default Form;
