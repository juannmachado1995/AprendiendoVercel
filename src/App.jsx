import React, { useContext } from "react";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { Outlet } from "react-router-dom";
import Card from "./Components/Card";
import { ContextGlobal } from "./Components/utils/global.context";

function App() {

  const { theme } = useContext(ContextGlobal);
  
  return (
    <>
    <div className={theme}>
      <h1>Machado & Martinucci Odontólogos</h1>
      <Navbar/>
      <Outlet />
      <Footer />

        </div>
    </>
  )
}

export default App
